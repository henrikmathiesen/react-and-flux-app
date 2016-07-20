var Dispatcher = require('./dispatcher');
var actionTypes = require('./actionTypes');
var authorApi = require('../../../api/authorApi');

var initializeActions = {
    initApp: function () {
        Dispatcher.dispatch({
            actionType: actionTypes.INIT,
            initialData: {
                authors: authorApi.getAllAuthors()
            }
        });
    }
};

module.exports = initializeActions;