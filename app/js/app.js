$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

var Home = require('./components/Home');
var About = require('./components/about/About');

var App = React.createClass({
    render: function(){
        var Child;

        switch(this.props.route) {
            case 'about':
                Child = About;
                break;
            default:
                Child = Home;
                break;
        }

        return (
            <div>
                <Child />
            </div>
        );
    }
});

var render = function(){
    var route = window.location.hash.slice(1); // #home becomes home
    ReactDOM.render(<App route={route} />, document.getElementById('app'));
};

window.addEventListener('hashchange', render);

render();