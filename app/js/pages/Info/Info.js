var React = require('react');

var LifeCycleMethodsTable = require('./LifeCycleMethodsTable');

var Info = React.createClass({
    render: function(){
        return(
            <div>
                <h1>Info</h1>
                <h2>7 lifecycle methods</h2>
                <p>
                    There are 7 lifecycle methods we can hook into. <a href="https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods">Read about them here</a>
                </p>
                <p>
                    These can be used both on the client side and on the server side (React can run on the server side also).
                </p>
                <LifeCycleMethodsTable />
                <h2>Keys for dynamic children</h2>
                <p>
                    Add a key to dynamic children, else React can not keep track of them. <code>&lt;tr key={'{ author.id }'}&gt;</code>
                </p>
            </div>
        );
    }
});

module.exports = Info;