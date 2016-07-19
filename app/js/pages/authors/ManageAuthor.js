var React = require('react');

var ManageAuthor = React.createClass({
    render: function(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Manage Authors</h1>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ManageAuthor;