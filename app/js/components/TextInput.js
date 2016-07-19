var React = require('react');

var TextInput = React.createClass({
    render: function () {
        return(
            <div className="form-group">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input type="text"
                    name={this.props.name}
                    className="form-control"
                    placeholder={this.props.label}
                    ref={this.props.name}
                    value={this.props.value} 
                    onChange={this.props.onChange} />
            </div>
        );
    }
});

module.exports = TextInput;