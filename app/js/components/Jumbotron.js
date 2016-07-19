var React = require('react');

var Jumbotron = React.createClass({
    render: function () {
        return(
            <div className="jumbotron">
                <h1><span className={this.props.titleClass}>{this.props.title}</span></h1>
                <p className={this.props.paragraphClass}>
                    {this.props.paragraph}
                </p>
            </div>
        );
    }
});

module.exports = Jumbotron;