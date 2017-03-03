var React = require('react');
var Result = require('../Result');

var Saved = React.createClass({
    render: function render() {
        return(
            <div className="result-holder">
                <h3>Saved</h3>
                <Result url="http://facebook.com" title="facebook" date="today" />
                <Result url="http://nytimes.com" title="nytimes" date="today" />
            </div>
        )
    }
});

module.exports = Saved;