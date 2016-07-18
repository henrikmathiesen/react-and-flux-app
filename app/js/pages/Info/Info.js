var React = require('react');

var Info = React.createClass({
    render: function(){
        return(
            <div>
                <h1>Info</h1>
                <p>
                    There are 7 lifecycle methods we can hook into.
                    <a href="https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods"> Read about them here</a>
                </p>
                <p>
                    These can be used both on the client side and on the server side (React can run on the server side also).
                </p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Method</th>
                            <th>When</th>
                            <th>Why</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><code>componentWillMount</code></td>
                            <td>Before initial render, both client and server.</td>
                            <td>Good spot to set initial state.</td>
                        </tr>
                        <tr>
                            <td><code>componentDidMount</code></td>
                            <td>After render.</td>
                            <td>Access DOM, integrate with frameworks, set timers, do AJAX requests.</td>
                        </tr>
                        <tr>
                            <td><code>componentWillRecieveProps</code></td>
                            <td>When recieving new props. Not called on initial render.</td>
                            <td>Set state before a new render.</td>
                        </tr>
                        <tr>
                            <td><code>shouldComponentUpdate</code></td>
                            <td>Before render when new props or state recieved. Not called on initial render.</td>
                            <td>Performance. Returns false to void unnecessary re-renders.</td>
                        </tr>
                        <tr>
                            <td><code>componentWillUpdate</code></td>
                            <td>Immediately before rendering when new props or state being recieved. Not called on initial render.</td>
                            <td>Prepare for an update. Can not call setState here.</td>
                        </tr>
                        <tr>
                            <td><code>componentDidUpdate</code></td>
                            <td>After components updates are flushed to the DOM. Not called for the initial render.</td>
                            <td>Work with DOM after an update.</td>
                        </tr>
                        <tr>
                            <td><code>componentWillUnmount</code></td>
                            <td>Immediately before component is removed from the DOM.</td>
                            <td>Cleanup.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = Info;