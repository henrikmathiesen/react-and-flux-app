var React = require('react');

var TextInput = require('../../components/TextInput');

var ManageAuthorForm = React.createClass({
    render: function () {
        return(
            <form>
                <TextInput name={'firstName'} label={'First Name'} value={this.props.author.firstName} onChange={this.props.setAuthorState} />
                <TextInput name={'lastName'} label={'Last Name'} value={this.props.author.lastName} onChange={this.props.setAuthorState} />
                <button type="submit" className="btn btn-default btn-block">Submit</button>
            </form>
        );
    }
});

module.exports = ManageAuthorForm;