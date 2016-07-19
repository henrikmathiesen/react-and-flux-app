var React = require('react');

var ManageAuthorForm = React.createClass({
    render: function () {
        return(
            <form>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First Name"
                        ref="firstName"
                        value={this.props.author.firstName} 
                        onChange={this.props.setAuthorState} />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">Last Name</label>
                    <input type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last Name"
                        ref="lastName"
                        value={this.props.author.lastName}
                        onChange={this.props.setAuthorState} />
                </div>
                <button type="submit" className="btn btn-default btn-block">Submit</button>
            </form>
        );
    }
});

module.exports = ManageAuthorForm;