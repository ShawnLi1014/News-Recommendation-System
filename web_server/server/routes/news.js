var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    news = [
        {
            'url': 'https://www.baidu.com',
            'title': 'I am handsome',
            'description': 'I am a handsome guy',
            'source': 'cnn',
            'urlToImage': 'https://images.unsplash.com/photo-1558980395-be8a5fcb4251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            'digest': '1',
            'reason': 'Recommend',
            'time': 'Today'
        },
        {
            'url': 'https://www.baidu.com',
            'title': 'I am handsome',
            'description': 'I am a handsome guy',
            'source': 'cnn',
            'urlToImage': 'https://images.unsplash.com/photo-1558980395-be8a5fcb4251?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
            'digest': '2',
            'reason': 'Recommend',
            'time': 'Today'
        }
    ]
    res.json(news);
});

module.exports = router;