var React = require('react');

var TextInput = require('../../components/TextInput');

var ManageAuthorForm = React.createClass({
    render: function () {
        return(
            <form>
                <TextInput name={'firstName'} label={'First Name'} value={this.props.author.firstName} onChange={this.props.setAuthorState} errorMessage={''} />
                <TextInput name={'lastName'} label={'Last Name'} value={this.props.author.lastName} onChange={this.props.setAuthorState} errorMessage={''} />
                <button type="submit" className="btn btn-default btn-block" onClick={this.props.saveAuthor}>Submit</button>
            </form>
        );
    }
});

module.exports = ManageAuthorForm;