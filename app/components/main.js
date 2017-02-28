var React = require('react');
var Search = require('./search');
var Saved = require('./saved');


var Main = React.createClass({
    render: function render() {
        return(
            <div>
                <Search />
                <Saved />
            </div>
        )
    }
});

module.exports = Main;