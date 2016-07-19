var React = require('react');

var Jumbotron = require('../components/Jumbotron');

var Home = React.createClass({
    render: function(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Jumbotron title={'Pluralsight Administration'} paragraph={'We are using React, React Router and Flux for ultra responsive web apps'} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Home;