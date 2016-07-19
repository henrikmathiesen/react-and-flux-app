var React = require('react');

var TextInput = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        value: React.PropTypes.string.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errorMessage: React.PropTypes.string
    },

    render: function () {
        var hasError = this.props.error && this.props.error.length > 0; 

        var wrapperClass = 'form-group';
        if(hasError) {
            wrapperClass += ' ' + 'has-error';
        }

        return(
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input type="text"
                    name={this.props.name}
                    className="form-control"
                    placeholder={this.props.label}
                    ref={this.props.name}
                    value={this.props.value} 
                    onChange={this.props.onChange} />
                <div className={'text-danger ' + (hasError ? '' : 'hidden')}>{this.props.error}</div>
            </div>
        );
    }
});

module.exports = TextInput;