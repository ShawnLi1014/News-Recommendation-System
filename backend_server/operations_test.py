import operations
import os
import sys

sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'common'))

import mongodb_client

def test_getNewsSummariesForUser_basic():
    news = operations.getNewsSummariesForUser('test', -1)
    assert len(news) > 0
    print("basic test passed!")

def test_getNewsSummariesForUser_pagination():
    news_page_1 = operations.getNewsSummariesForUser('test', 1)
    news_page_2 = operations.getNewsSummariesForUser('test', 2)
    print(len(news_page_2))

    assert len(news_page_1) > 0
    assert len(news_page_2) > 0

    # Assert that there's no duplication in two pages
    digests_page_1_set = set(list(map(lambda x: x['digest'], news_page_1)))
    digests_page_2_set = set(list(map(lambda x: x['digest'], news_page_2)))
    print(digests_page_1_set)
    print(digests_page_2_set)
    assert len(digests_page_1_set.intersection(digests_page_2_set)) == 0
    print("pagination test passed!")

if __name__ == "__main__":
    test_getNewsSummariesForUser_basic()
    test_getNewsSummariesForUser_pagination()
