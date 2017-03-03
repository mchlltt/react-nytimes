var React = require('react');
var Result = require('./grandchildren/Result');

var helpers = require('../utils/helpers');

var Saved = React.createClass({
    getInitialState: function() {
        return { saved: [] };
    },
    // The moment the page renders get the saved items
    componentDidMount: function() {
        helpers.getSaved().then(function(response) {
            this.setState({ saved: response.data });
        }.bind(this));
    },
    render: function render() {
        return(
            <div className="result-holder">
                <h3>Saved</h3>
                {this.state.saved.map(function(article, i) {
                    return (
                        <Result key={i} url={article.url} title={article.title} date={article.date} articleID={article.articleID} savedPage={true} />
                    );
                })}
            </div>
        )
    }
});

module.exports = Saved;