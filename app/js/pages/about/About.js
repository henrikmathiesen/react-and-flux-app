var React = require('react');

var About = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>About</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <p>
                            This application uses the following technologies
                        </p>
                        <ul>
                            <li>React</li>
                            <li>React Router</li>
                            <li>Flux</li>
                            <li>Node</li>
                            <li>Gulp</li>
                            <li>Browserify</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = About;