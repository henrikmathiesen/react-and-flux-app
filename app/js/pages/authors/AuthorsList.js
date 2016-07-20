var React = require('react');
var Link = require('react-router').Link;

var authorActions = require('../../flux/authorActions');
var toastr = require('toastr');

var AuthorsList = React.createClass({
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },

    deleteAuthor: function (id) {
        authorActions.deleteAuthor(id);
        toastr.success("Author Deleted");
    },

    render: function () {
        var that = this;

        var createAuthorsRow = function (author) {
            return (
                <tr key={author.id}>
                    <td><Link to={'manage-author/' + author.id}>{author.id}</Link></td>
                    <td>{author.firstName} {author.lastName}</td>
                    <td><button onClick={function(){ that.deleteAuthor(author.id) }} className="btn btn-xs btn-danger">Delete</button></td>
                </tr>
            );
        };

        return (
            <div className="col-md-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorsRow) }
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = AuthorsList;