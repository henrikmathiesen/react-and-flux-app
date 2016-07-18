var React = require('react');

var LifeCycleMethodsTable = require('./LifeCycleMethodsTable');

var Info = React.createClass({
    render: function(){
        return(
            <div>
                <h1>Info</h1>
                <h2>Methods in a React Class</h2>
                
                <h3><code>render</code></h3>
                <p>
                    The render method is required. When called, it should examine this.props and this.state and return a single child element.
                    You can also return null or false to indicate that you don't want anything rendered. 
                    The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked, and it does not read from or write to the DOM or otherwise interact with the browser (e.g., by using setTimeout). If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead. <a href="https://facebook.github.io/react/docs/component-specs.html#render">Read about it here</a>
                </p>
                
                <h3><code>getInitialState</code></h3>
                <p>Invoked once before the component is mounted. The return value will be used as the initial value of this.state. <a href="https://facebook.github.io/react/docs/component-specs.html#getinitialstate">Read about it here</a></p>

                <h2>7 lifecycle methods in a React Class</h2>
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
                <h3>Architecture</h3>
                <p>
                    Nest component, work with small components. Regard the top level components as "controller views"; they interact with Flux stores and controll data flow for child components by settings props on them.
                    Do not do this work in the nested components.
                </p>
            </div>
        );
    }
});

module.exports = Info;