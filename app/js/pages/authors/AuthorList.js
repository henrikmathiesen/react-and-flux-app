var React = require('react');

var AuthorList = React.createClass({
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
        );
     }
});

module.exports = AuthorList;