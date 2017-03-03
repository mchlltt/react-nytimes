var React = require('react');

var Header = React.createClass({
    render: function() {
        return(
            <div className="page-header">
                <div className="container">
                    <div className="col-xs-12">
                        <h1><a href="/">React NYTimes</a></h1>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Header;