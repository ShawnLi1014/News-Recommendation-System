import os
import sys
import redis
import random
import pickle
import json

from bson.json_util import dumps
from datetime import datetime

sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'common'))
import mongodb_client

from rabbitMQ_client import RabbitMQClient

REDIS_HOST = 'localhost'
REDIS_PORT = 6379

NEWS_TABLE_NAME = 'news'

NEWS_LIMIT = 100
NEWS_LIST_BATCH_SIZE = 10
USER_NEWS_TIMEOUT_IN_SECONDS = 600

redis_client = redis.StrictRedis(REDIS_HOST, REDIS_PORT, db=0)


def getNewsSummariesForUser(user_id, page_num):
    page_num = int(page_num)
    if page_num <= 0:
        raise ValueError('page_num should be a positive integer.')
    begin_index = (page_num - 1) * NEWS_LIST_BATCH_SIZE
    end_index = page_num * NEWS_LIST_BATCH_SIZE

    # The news list to be returned
    sliced_news = []

    if redis_client.get(user_id) is not None:
        news_digests = pickle.loads(redis_client.get(user_id))

        # If begin_index is out of range, return empty list
        # If end_index is out of range, return all remaining news
        sliced_news_digests = news_digests[begin_index: end_index]
        db = mongodb_client.get_db()
        sliced_news = list(db[NEWS_TABLE_NAME].find({'digest': {'$in': sliced_news_digests}}))
    else:
        db = mongodb_client.get_db()
        total_news = list(db[NEWS_TABLE_NAME].find().sort([('publishedAt', -1)]).limit(NEWS_LIMIT))

        total_news_digests = list(map(lambda x:x['digest'], total_news))
        print(total_news_digests)
        redis_client.set(user_id, pickle.dumps(total_news_digests))
        redis_client.expire(user_id, USER_NEWS_TIMEOUT_IN_SECONDS)

        sliced_news = total_news[begin_index:end_index]
    
    for news in sliced_news:
        if news['publishedAt'].date() == datetime.today().date():
            news['time'] = 'today'
    return json.loads(dumps(sliced_news))
