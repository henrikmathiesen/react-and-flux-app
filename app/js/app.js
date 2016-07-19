$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var routes = require('./routes');

ReactDOM.render(routes, document.getElementById('app'));


// ________________________________________________________________________________________________________
//
// Used with Simple Routing approach

//var LayoutSimpleRouting = require('./pages/LayoutSimpleRouting');

// var render = function () {
//     var route = window.location.hash.slice(1); // #home becomes home
//     ReactDOM.render(<LayoutSimpleRouting route={route} />, document.getElementById('app'));
// };

// window.addEventListener('hashchange', render);

// render();