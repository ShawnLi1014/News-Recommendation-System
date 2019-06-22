import requests

def extract_news(news_url):
    #Download html
    session_requests = requests.session()

    #Parse html
    # Extract information