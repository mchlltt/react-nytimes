var React = require('react');

var Header = require('./Header');
var Footer = require('./Footer');

var Main = React.createClass({
    render: function render() {
        return(
            <div>
                <Header />
                <h1>Hi</h1>
                <main>
                    {this.props.children}
                </main>
                <Footer />
            </div>

        )
    }
});

module.exports = Main;