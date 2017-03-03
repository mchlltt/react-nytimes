// Include the React library
var React = require('react');

// Include the react-router module
var router = require('react-router');

// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require('../components/Main');
var Query = require('../components/children/Query');
var Saved = require('../components/children/Saved');

// Export the Routes
module.exports = (

    // The high level component is the Router component
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            {/* Show the appropriate component */}
            <Route path="query" component={Query} />
            <Route path="saved" component={Saved} />

            {/* Show query by default */}
            <IndexRoute component={Query} />
        </Route>
    </Router>

);

