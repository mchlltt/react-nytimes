var React = require('react');

var helpers = require('../../../utils/helpers');

var Result = React.createClass({
    getInitialState: function() {
        if (this.props.savedPage) {
            return {
                buttonText: 'remove',
                glyphicon: 'glyphicon glyphicon-remove',
                saved: true,
                button: 'btn btn-danger'
            };
        } else {
            return {
                buttonText: 'save',
                glyphicon: 'glyphicon glyphicon-save',
                saved: false,
                button: 'btn btn-info'
            };
        }

    },
    handleClick: function() {
        if (this.state.saved) {
            this.setState({
                buttonText: 'save',
                saved: false,
                glyphicon: 'glyphicon glyphicon-save',
                button: 'btn btn-info'
            });
            helpers.deleteSaved(this.props.articleID);

        } else {
            this.setState({
                buttonText: 'remove',
                saved: true,
                glyphicon: 'glyphicon glyphicon-remove',
                button: 'btn btn-danger'
            });
            helpers.postSaved({
                url: this.props.url,
                title: this.props.title,
                date: this.props.date,
                articleID: this.props.articleID
            });
        }
    },
    render: function render() {
        return(
            <div className="result-div panel panel-default" id={this.props.articleID}>
                <div className="panel-body">
                    <a href={this.props.url} className="black-text"><h5>{this.props.title}</h5></a>
                    <p className="black-text">Published {this.props.date}</p>
                </div>
                <div className="panel-footer">
                    <button className={this.state.button} onClick={this.handleClick}>{this.state.buttonText} <span className={this.state.glyphicon}/> </button>
                </div>
            </div>
        )
    }
});

module.exports = Result;