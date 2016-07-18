var React = require('react');

var AuthorApi = require('../../../../api/authorApi');
var AuthorList = require('./AuthorList');

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
            <div>
                <h1>Authors</h1>
                <AuthorList authors={ { id: 1, name: "kalle" } } />
            </div>
        );
    }
});

module.exports = Authors;