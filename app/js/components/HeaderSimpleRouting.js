var React = require('react');

var HeaderSimpleRouting = React.createClass({

    render: function () {
        var activeClasses = {
            about: this.props.route === 'about' ? 'active' : '',
            info: this.props.route === 'info' ? 'active' : '',
            authors: this.props.route === 'authors' ? 'active' : '',
        };

        activeClasses.home = (!activeClasses.about && !activeClasses.info && !activeClasses.authors) ? 'active' : ''; 

        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className={activeClasses.home}><a href="/#home">Home</a></li>
                        <li className={activeClasses.about}><a href="/#about">About</a></li>
                        <li className={activeClasses.authors}><a href="/#authors">Authors</a></li>
                        <li className={activeClasses.info}><a href="/#info">Info</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = HeaderSimpleRouting;