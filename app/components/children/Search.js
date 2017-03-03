var React = require('react');

var Search = React.createClass({
    render: function render() {
        return(
            <div>
                <h1 className="black-text">Search</h1>
                {this.props.children}
            </div>
        )
    }
});

module.exports = Search;