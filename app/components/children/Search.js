var React = require('react');

var Query = require ('./grandchildren/Query');
var Results = require('./grandchildren/Results');
var Message = require('./grandchildren/Message');

var helpers = require ('../utils/helpers');

var Search = React.createClass({
    getInitialState: function() {
        return {
            term: '',
            begin: '',
            end: '',
            results: [],
            searched: '',
            message: ''
        };
    },
    setTerms: function(term, begin, end) {
        this.setState(
            {
                term: term,
                begin: begin,
                end: end
            }
        );
    },
    componentDidUpdate: function() {
        // Check whether we have a new queryURL.
        if (this.state.searched !== this.state.term + this.state.begin + this.state.end) {
            this.setState({
                searched: this.state.term + this.state.begin + this.state.end
            });
            // Run the query for the address
            helpers.runQuery(this.state.term, this.state.begin, this.state.end).then(function(data) {
                if (data) {
                    if (JSON.stringify(data) !== JSON.stringify(this.state.results)) {
                        this.setState({results: data});
                    }
                } else {
                    this.setState({message: 'No results found!'})
                }
            }.bind(this));
        }
    },
    render: function render() {
        return(
            <div>
                <h1 className="black-text">Search</h1>
                <Query setTerms={this.setTerms} />
                {this.state.results.length > 0 &&
                    <Results results={this.state.results}/>
                }
                {this.state.message.length > 0 &&
                    <Message message={this.state.message} />
                }
            </div>
        )
    }
});

module.exports = Search;