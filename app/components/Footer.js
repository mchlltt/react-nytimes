var React = require('react');

var Footer = React.createClass({
    render: function() {
        return (
            <footer>
                <div className="container">
                    <h5>
                        Serving the most recent news from <a href="https://vox.com/">Vox.</a>
                        <small> Made with <span className="glyphicon glyphicon-heart" aria-hidden="true"></span> by <a href="https://github.com/mchlltt">Mich Elliott</a>.</small>
                    </h5>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;