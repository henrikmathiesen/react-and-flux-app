var React = require('react');
var hashHistory = require('react-router').hashHistory;
var toastr = require('toastr');

var AuthorApi = require('../../../../api/authorApi');
var ManageAuthorForm = require('./ManageAuthorForm');

var ManageAuthor = React.createClass({
    getInitialState: function(){
        return {
            author: { id: "", firstName: "", lastName: "" },
            errors: { firstName: "", lastName: "" }
        }
    },

    setAuthorState: function(event){
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({ author: this.state.author });
    },

    authorFormIsValid: function(){
        var formIsValid = true;
        this.state.errors = {};

        if(this.state.author.firstName.length < 3) {
            this.state.errors.firstName = "First name must be at least three characters";
            formIsValid = false;
        }

        if(this.state.author.lastName.length < 3) {
            this.state.errors.lastName = "Last name must be at least three characters";
            formIsValid = false;
        }

        this.setState({ errors: this.state.errors });
        return formIsValid;        
    },

    saveAuthor: function(event){
        event.preventDefault();

        if(!this.authorFormIsValid()) {
            return;
        }

        AuthorApi.saveAuthor(this.state.author);
        toastr.success("Author Saved");
        hashHistory.push('/authors');
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
                        <ManageAuthorForm 
                            author={this.state.author} 
                            setAuthorState={this.setAuthorState} 
                            saveAuthor={this.saveAuthor} 
                            errors={this.state.errors} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ManageAuthor;