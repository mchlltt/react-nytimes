var React = require('react');
var ReactDOM = require('react-dom');

var Main = require('./components/main');



var App = React.createClass({
    render: function render() {
        return(
            <div>
                <Main />
            </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('root'));

