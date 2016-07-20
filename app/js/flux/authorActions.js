var Dispatcher = require('./dispatcher');
var actionTypes = require('./actionTypes');
var AuthorApi = require('../../../api/authorApi');

var authorActions = {
    createAuthor: function (author) {
        var newAuthor = AuthorApi.saveAuthor(author);   // sync operation

        // Hey dispatcher, go tell all the stores that an author was just created.
        // The object in this function is the action
        Dispatcher.dispatch({
            actionType: actionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    upDateAuthor: function (author) {
        var updatedAuthor = AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType: actionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    },

    deleteAuthor: function (id) {
        AuthorApi.deleteAuthor(id);

        Dispatcher.dispatch({
            actionType: actionTypes.DELETE_AUTHOR,
            authorId: id
        });
    }
};

module.exports = authorActions;