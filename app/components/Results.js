var React = require('react');

var Result = require('./Result');

var Results = React.createClass({
    render: function render() {
        return(
            <div className="result-holder">
                <h3>Results</h3>
                <Result url="http://google.com" title="a title" date="today" />
                <Result url="http://amazon.com" title="second title" date="yesterday" />
            </div>
        )
    }
});

module.exports = Results;