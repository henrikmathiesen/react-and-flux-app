var React = require('react');
var hashHistory = require('react-router').hashHistory;
var toastr = require('toastr');

var authorActions = require('../../flux/authorActions');
var authorStore = require('../../flux/authorStore');
var ManageAuthorForm = require('./ManageAuthorForm');
var PageHeader = require('../../components/PageHeader');

var ManageAuthor = React.createClass({
    getInitialState: function(){
        return {
            author: { id: "", firstName: "", lastName: "" },
            errors: { firstName: "", lastName: "" }
        }
    },

    componentWillMount: function(){
        // Set state before rendering happens: if no id then we are creating a new author, if id then we edit an existing author so we go get it
        var authorId = this.props.params.id;
        if(!authorId) {  
            return;
        }
        this.setState({ author: authorStore.getAuthorById(authorId) });
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

        if(this.props.params.id) {
            authorActions.upDateAuthor(this.state.author);
        }
        else {
            authorActions.createAuthor(this.state.author);
        }

        toastr.success("Author Saved");
        hashHistory.push('/authors');
    },

    render: function(){
        var title = this.props.params.id ? 'Edit Author' : 'Create Author';

        return(
            <div className="container">
                <PageHeader title={title} />
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