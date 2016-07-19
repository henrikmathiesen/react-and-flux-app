var React = require('react');

var AuthorsList = React.createClass({
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },

     render: function(){
        var createAuthorsRow = function(author){
            return(
                <tr key={author.id}>
                    <td><a href={'/#authors/' + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };

        return(
            <div className="col-md-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.authors.map(createAuthorsRow)}
                    </tbody>
                </table>
            </div>
        );
     }
});

module.exports = AuthorsList;