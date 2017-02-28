var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: {
        type: String,
        trim: true
    },
    date: {
        type: Date
    },
    url: {
        type: String,
        trim: true
    },
    articleID: {
        type: String,
        trim: true
    }
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;