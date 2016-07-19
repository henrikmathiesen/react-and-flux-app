var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var AuthorApi = require('../../../../api/authorApi');
var AuthorsList = require('./AuthorsList');

var Authors = React.createClass({
    getInitialState: function(){
        return {
            authors: []
        }
    },

    componentDidMount: function(){
        this.setState({ authors: AuthorApi.getAllAuthors() });
    },

    render: function(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1>Authors</h1>
                    </div>
                    <div className="col-md-4 text-right">
                        <Link to="manage-authors" className="btn btn-default btn-lg">Manage</Link>
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