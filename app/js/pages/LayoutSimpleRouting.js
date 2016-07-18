var React = require('react');

var Home = require('./Home');
var About = require('./about/About');

var LayoutSimpleRouting = React.createClass({
    render: function () {
        var Child;

        switch (this.props.route) {
            case 'about':
                Child = About;
                break;
            default:
                Child = Home;
                break;
        }

        return (
            <Child />
        );
    }
});

module.exports = LayoutSimpleRouting;