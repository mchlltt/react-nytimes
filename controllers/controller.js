// Import dependencies.
var express = require('express');
var request = require('request');

// Initialize express router.
var router = express.Router();

// Import models.
var Article = require('../models/article');

// Get saved docs.
router.get('/api/saved', function (req, res) {
    // Find all articles.
    Article.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {

            // Create array for article data.
            var resultData = [];

            // For each article, create an object that we will use to render the article.
            data.forEach(function (article) {
                resultData.push({
                    title: article.title,
                    url: article.url,
                    date: article.date,
                    articleID: article.articleID
                });
            });

            res.send(resultData);
        }
    });
});

// Add doc to saved.
router.post('/api/saved', function (req) {
    var body = req.body;

    var articleID = body._id;
    var newArticle = {
        title: body.main,
        url: body.web_url,
        date: body.pub_date,
        articleID: articleID
    };

    var query = {articleID: articleID};

    Article.findOneAndUpdate(query, newArticle, {upsert: true}, function(err) {
        if (err) {
            console.log(err);
        }
    });
});

// Remove doc from saved.
router.delete('/api/saved/:id', function (req) {
    var articleID = req.params.id;
    Comment.remove({articleID: articleID}, function(err) {
        if (err) {
            console.log(err);
        } else {
            Article.findOneAndUpdate({articleID: articleID}, {safe: true}, function(error) {
                if (error) {
                    console.log(error);
                }
            });
        }
    });
});

// Get results from NYTimes.
router.get('/api/news/:term/:begin?/:end?', function (req, res) {
    var qs = {
        'api-key': '2434876726a64f759a34973f3c928f7e',
        'q': req.params.term
    };

    if (req.params.begin) {
        qs.begin_date = req.params.begin;
    }

    if (req.params.end) {
        qs.end_date = req.params.end;
    }

    request.get({
        url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
        qs: qs
        }, function(err, response, body) {
        var docs = JSON.parse(body).response.docs;

        docs.forEach(function(doc) {
            var articleID = doc._id;
            var newArticle = {
                title: doc.headline.main,
                url: doc.web_url,
                date: doc.pub_date,
                articleID: articleID
            };

            var query = {articleID: articleID};

            Article.findOneAndUpdate(query, newArticle, {upsert: true}, function(err) {
                if (err) {
                    console.log(err);
                }
            });

        });

        res.json(docs);

    });
});

// Default route.
router.use('*', function (req, res) {
    res.sendFile('index.html');
});

// Export routes.
module.exports = router;