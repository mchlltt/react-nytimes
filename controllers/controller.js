// Import dependencies.
var express = require('express');

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

    var newArticle = {
        title: body.title,
        url: body.url,
        date: body.date,
        articleID: body.articleID
    };

    var query = {articleID: body.articleID};

    Article.findOneAndUpdate(query, newArticle, {upsert: true}, function(err) {
        if (err) {
            console.log(err);
        }
    });
});

// Remove doc from saved.
router.delete('/api/saved/:articleID', function (req) {
    var articleID = req.params.articleID;
    Article.remove({articleID: articleID}, function(err) {
        if (err) {
            console.log(err);
        }
    });
});


// Default route.
router.use('*', function (req, res) {
    res.sendFile('index.html');
});

// Export routes.
module.exports = router;