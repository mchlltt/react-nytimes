var React = require('react');

var Query = React.createClass({
    render: function render() {
        return(
            <div className="query">
                <h3>Search</h3>
                <label htmlFor="query">Search Term:</label>
                <input id="query" className="form-control"/>
                <label htmlFor="begin-year">Begin year:</label>
                <input id="begin-year" className="form-control"/>
                <label htmlFor="end-year">End year:</label>
                <input id="end-year" className="form-control"/>
                <button id="search-button" className="btn btn-info center-block">Search</button>
            </div>
        )
    }
});

module.exports = Query;