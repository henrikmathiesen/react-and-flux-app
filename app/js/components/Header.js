var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;

var Header = React.createClass({

    getIsActiveClass: function(route){
        var history = this.props.history;
        return history.isActive(route) ? 'active' : '';
    },

    getIndexIsActiveClass: function(){
        var hash = window.location.hash.slice(1);   // after #
        var path = hash.split('?')[0];              // before ?
        return path === '/' ? 'active' : '';
    },

    render: function () {
        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className={this.getIndexIsActiveClass()}><IndexLink to="/">Home</IndexLink></li>
                        <li className={this.getIsActiveClass('authors')}><Link to="authors">Authors</Link></li>
                        <li className={this.getIsActiveClass('about')}><Link to="about">About</Link></li>
                        <li className={this.getIsActiveClass('info')}><Link to="info">Info</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;