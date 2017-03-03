var React = require('react');

var Result = React.createClass({
    getInitialState: function() {
        return {
            buttonText: 'Save',
            saved: false
        };
    },
    handleClick: function(event) {
        if (this.state.saved) {
            this.setState({
                saved: false,
                buttonText: 'Save'
            });
        } else {
            this.setState({
                saved: true,
                buttonText: 'Saved!'
            });
        }
    },
    render: function render() {
        return(
            <div className="result-div">
                <a href={this.props.url}>{this.props.title}</a>
                <p>{this.props.date}</p>
                <button className="btn btn-info" onClick={this.handleClick}>{this.state.buttonText}</button>
            </div>
        )
    }
});

module.exports = Result;