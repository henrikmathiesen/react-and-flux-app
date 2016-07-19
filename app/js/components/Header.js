var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;

var Header = React.createClass({
    render: function () {

        var history = this.props.history;
        
        var getIsActiveClass = function(route){
            return history.isActive(route) ? 'active' : '';
        };

        return(
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li className={getIsActiveClass('/')}><IndexLink to="/">Home</IndexLink></li>
                        <li className={getIsActiveClass('authors')}><Link to="authors">Authors</Link></li>
                        <li className={getIsActiveClass('about')}><Link to="about">About</Link></li>
                        <li className={getIsActiveClass('info')}><Link to="info">Info</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;