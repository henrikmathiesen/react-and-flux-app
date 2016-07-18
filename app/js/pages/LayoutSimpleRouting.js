var React = require('react');

var Header = require('../components/Header');
var Home = require('./Home');
var About = require('./about/About');
var Info = require('./info/Info');

var LayoutSimpleRouting = React.createClass({
    render: function () {
        var Child;
        var route = this.props.route.toLowerCase();

        switch (route) {
            case 'about':
                Child = About;
                break;
            case 'info':
                Child = Info;
                break;
            default:
                Child = Home;
                break;
        }

        return (
            <div className="container">
                <Header route={route} />
                <Child />
            </div>
        );
    }
});

module.exports = LayoutSimpleRouting;