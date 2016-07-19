var React = require('react');

var Jumbotron = require('../components/Jumbotron');

var Route404 = React.createClass({
    render: function(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Jumbotron title={'404 Page not found'} 
                                paragraph={'Maybe you need to take a break from surfing for a while? Get your head together?'} 
                                titleClass={'text-danger'} 
                                paragraphClass={'text-warning'} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Route404;