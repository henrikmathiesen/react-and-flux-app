var React = require('react');

var PageHeader = React.createClass({
    render: function() {
        return(
             <div className="row">
                <div className="col-md-12">
                    <h1>{this.props.title}</h1>
                </div>
            </div>
        );
    }
    
});

module.exports = PageHeader;