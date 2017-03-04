var React = require('react');
var Result = require('./grandchildren/greatgrandchildren/Result');
var Message = require('./grandchildren/Message');

var helpers = require('../utils/helpers');

var Saved = React.createClass({
    getInitialState: function() {
        return {
            saved: [],
            message: ''
        };
    },
    // The moment the page renders get the saved items
    componentDidMount: function() {
        helpers.getSaved().then(function(response) {
            if (response.data.length > 0) {
                this.setState({ saved: response.data });
            } else {
                this.setState({ message: 'No items saved yet!' });
            }

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
                {this.state.message.length > 0 &&
                    <Message message={this.state.message} />
                }
            </div>
        )
    }
});

module.exports = Saved;