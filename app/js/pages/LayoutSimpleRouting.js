var React = require('react');

var HeaderSimpleRouting = require('../components/HeaderSimpleRouting');
var About = require('./about/About');
var Authors = require('./authors/Authors');
var Info = require('./info/Info');
var Home = require('./Home');

var LayoutSimpleRouting = React.createClass({
    render: function () {
        var Child;
        var route = this.props.route.toLowerCase();

        switch (route) {
            case 'about':
                Child = About;
                break;
            case 'authors':
                Child = Authors;
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
                <HeaderSimpleRouting route={route} />
                <Child />
            </div>
        );
    }
});

module.exports = LayoutSimpleRouting;