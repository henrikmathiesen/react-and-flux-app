var React = require('react');

var Jumbotron = React.createClass({
    render: function () {
        return(
            <div className="jumbotron">
                <h1>{this.props.title}</h1>
                <p>
                    {this.props.paragraph}
                </p>
            </div>
        );
    }
});

module.exports = Jumbotron;