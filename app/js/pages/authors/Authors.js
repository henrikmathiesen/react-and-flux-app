var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var authorActions = require('../../flux/authorActions');
var authorStore = require('../../flux/authorStore');
var AuthorsList = require('./AuthorsList');

//var authorApi = require('../../../../api/authorApi');

var Authors = React.createClass({
    getInitialState: function () {
        return {
            authors: []//authorStore.getAllAuthors()
        }
    },

    componentDidMount: function () {
        console.log("Authors componentDidMount");
        this.setState({ authors: authorStore.getAllAuthors() });
    },

    render: function () {
        console.log("Authors Render");
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1>Authors</h1>
                    </div>
                    <div className="col-md-4 text-right">
                        <Link to="manage-author" className="btn btn-default btn-lg">Add Author</Link>
                    </div>
                </div>
                <div className="row">
                    <AuthorsList authors={this.state.authors} />
                </div>
            </div>
        );
    }
});

module.exports = Authors;