var hashHistory = require('react-router').hashHistory;

var aboutRouteTransition = {
    onEnter: function(location, replaceWith){
        // console.log(location);
        // if(!confirm("Are you really sure?")) {
        //     replaceWith('/');
        // }
    },
    onLeave: function(){
        //console.log(hashHistory);
        //hashHistory.goBack();
    }
}

module.exports = aboutRouteTransition;