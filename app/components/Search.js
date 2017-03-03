var React = require('react');

var Query = require('./query');
var Results = require('./Results');

var Search = React.createClass({
    render: function render() {
        return(
            <div>
                <Query />
                <Results />
            </div>
        )
    }
});

module.exports = Search;