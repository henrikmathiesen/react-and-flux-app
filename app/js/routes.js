var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Redirect = ReactRouter.Redirect;

var Layout = require('./pages/Layout');
var Home = require('./pages/Home');
var Authors = require('./Pages/authors/Authors');
var About = require('./Pages/about/About');
var Info = require('./Pages/info/Info');
var Route404 = require('./Pages/Route404');

var aboutRouteTransition = require('./Pages/about/aboutRouteTransition');

var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="authors" component={Authors}></Route>
            <Route path="about" component={About} onEnter={aboutRouteTransition.onEnter} onLeave={aboutRouteTransition.onLeave}></Route>
            <Route path="info" component={Info}></Route>

            <Redirect from="about-us" to="about"></Redirect>
            <Redirect from="about/*" to="about"></Redirect>
            <Route path="*" component={Route404}/>
        </Route>
    </Router>
);

// Alternative 2, read more here https://css-tricks.com/learning-react-router/
// var routes = (
//     <Router history={hashHistory}>
//         <Route component={Layout}>
//             <Route path="/" component={Home}></Route>
//             <Route path="authors" component={Authors}></Route>
//             <Route path="about" component={About}></Route>
//             <Route path="info" component={Info}></Route>
//         </Route>
//     </Router>
// );

module.exports = routes;