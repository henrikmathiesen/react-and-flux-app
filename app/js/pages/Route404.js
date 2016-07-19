var React = require('react');

var Route404 = React.createClass({
    render: function(){
        return(
            <div className="jumbotron">
                <h1><span className="text-danger">404 Page not found</span></h1>
                <p className="text-warning">
                    Maybe you need to take a break from surfing for a while? Get your head together?
                </p>
            </div>
        );
    }
});

module.exports = Route404;