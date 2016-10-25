// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;

// Reference the high-level components
var Main = require('../components/Main');
var Bio = require('../components/Bio'); 
var Portfolio = require('../components/Portfolio'); 


// Export the Routes
module.exports = (

	/*High level component is the Main component*/
	<Route path='/' component={Main}>

		{/* If user selects Search or Saved show the appropriate component*/}
		<Route path='Bio' component={Bio} />
		<Route path='Portfolio' component={Portfolio} />

		{/*If user selects any other path... we get the Home Route*/}
		<IndexRoute component={Bio} />

	</Route>


);