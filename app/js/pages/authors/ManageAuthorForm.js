var React = require('react');

var TextInput = require('../../components/TextInput');

var ManageAuthorForm = React.createClass({
    propTypes: {
        author: React.PropTypes.object.isRequired,
        setAuthorState: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object,
        saveAuthor: React.PropTypes.func.isRequired
    },

    render: function () {
        return(
            <form>
                <TextInput name={'firstName'} label={'First Name'} value={this.props.author.firstName} onChange={this.props.setAuthorState} error={this.props.errors.firstName} />
                <TextInput name={'lastName'} label={'Last Name'} value={this.props.author.lastName} onChange={this.props.setAuthorState} error={this.props.errors.lastName} />
                <button type="submit" className="btn btn-default btn-block" onClick={this.props.saveAuthor}>Submit</button>
            </form>
        );
    }
});

module.exports = ManageAuthorForm;