var React = require('react');

var Result = require('./greatgrandchildren/Result');

var Results = React.createClass({
    render: function render() {
        return(
            <div>
                <h1 className="black-text">Results</h1>
                <div className="result-holder">
                    {this.props.results.map(function(article, i) {
                        return (
                            <Result key={i} url={article.url} title={article.title} date={article.date} articleID={article.articleID} savedPage={false}/>
                        );
                    })}
                </div>
            </div>
        )
    }
});

module.exports = Results;