var React = require('react');

var AuthorApi = require('../../../../api/authorApi');
var ManageAuthorForm = require('./ManageAuthorForm');

var ManageAuthor = React.createClass({
    getInitialState: function(){
        return {
            author: { id: "", firstName: "", lastName: "" }
        }
    },

    setAuthorState: function(event){
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({ author: this.state.author });
    },

    saveAuthor: function(event){
        event.preventDefault();
        AuthorApi.saveAuthor(this.state.author);
    },

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
                        <ManageAuthorForm author={this.state.author} setAuthorState={this.setAuthorState} saveAuthor={this.saveAuthor} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ManageAuthor;