var React = require('react');

var Query = React.createClass({
    render: function () {
        return(
            <div className="query">
                <label htmlFor="query">Search Term:</label>
                <input id="query" className="form-control" placeholder="Search Term" required />
                <label htmlFor="begin-year">Begin year:</label>
                <input id="begin-year" className="form-control" placeholder="1998"/>
                <label htmlFor="end-year">End year:</label>
                <input id="end-year" className="form-control" placeholder="2015"/>
                <a role="button" type="submit" className="search-button btn btn-info center-block" href="#/search/results">Search</a>
            </div>
        )
    }
});

module.exports = Query;