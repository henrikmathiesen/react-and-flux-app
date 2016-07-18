var React = require('react');

var Header = React.createClass({

    render: function () {
        var activeClasses = {
            about: this.props.route === 'about' ? 'active' : '',
            info: this.props.route === 'info' ? 'active' : ''
        };

        activeClasses.home = (!activeClasses.about && !activeClasses.info) ? 'active' : ''; 

        return (
            <nav className= "navbar navbar-default" >
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className={activeClasses.home}><a href="/#home">Home</a></li>
                        <li className={activeClasses.about}><a href="/#about">About</a></li>
                        <li className={activeClasses.info}><a href="/#info">Info</a></li>
                    </ul>
                </div>
            </nav >
        );
    }
});

module.exports = Header;