var React = require('react');

var Panel = require('./grandchildren/Panel');

var Panels = React.createClass({
    render: function render() {
        return(
            <div className="panels container">
                <Panel title="Search" url="#/search" />
                <Panel title="Saved" url="#/saved" />
            </div>
        )
    }
});

module.exports = Panels;