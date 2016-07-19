var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;

var Header = React.createClass({

    getIsActiveClass: function(route, indexOnly){
        var history = this.props.history;
        return history.isActive(route, indexOnly) ? 'active' : '';
    },

    render: function () {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-default">
                            <div className="container-fluid">
                                <ul className="nav navbar-nav">
                                    <li className={this.getIsActiveClass('/', true)}><IndexLink to="/">Home</IndexLink></li>
                                    <li className={this.getIsActiveClass('authors', false)}><Link to="authors">Authors</Link></li>
                                    <li className={this.getIsActiveClass('about', false)}><Link to="about">About</Link></li>
                                    <li className={this.getIsActiveClass('info', false)}><Link to="info">Info</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Header;