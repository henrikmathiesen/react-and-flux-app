var React = require('react');

var ManageAuthorForm = require('./ManageAuthorForm');

var ManageAuthor = React.createClass({
    render: function(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Manage Authors</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <ManageAuthorForm />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ManageAuthor;