var React = require('react');

var Header = require('./Header');
var Footer = require('./Footer');

var Main = React.createClass({
    render: function () {
        return(
            <div>
                <Header />
                <div className="main-content">
                    {this.props.children}
                </div>
                <Footer />
            </div>

        )
    }
});

module.exports = Main;