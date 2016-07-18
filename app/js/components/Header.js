var React = require('react');

var Header = React.createClass({

    render: function () {
        var activeClasses = {
            about: this.props.route === 'about' ? 'active' : ''
        };

        activeClasses.home = activeClasses.about !== 'active' ? 'active' : ''; 

        return (
            <nav className= "navbar navbar-default" >
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className={activeClasses.home}><a href="/#home">Home</a></li>
                        <li className={activeClasses.about}><a href="/#about">About</a></li>
                    </ul>
                </div>
            </nav >
        );
    }
});

module.exports = Header;