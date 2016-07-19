var React = require('react');

var Header = require('../components/Header');

var Layout = React.createClass({
    render: function(){
        return(
            <div className="container">
                <Header history={this.props.history} />
                {this.props.children}
            </div>
        );
    }
});

module.exports = Layout;