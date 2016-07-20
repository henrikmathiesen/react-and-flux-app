var EventEmitter = require('events').EventEmitter;

var Dispatcher = require('./dispatcher');
var actionTypes = require('./actionTypes');
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var _authors = [];

// Think of EventEmitter as the base class
var authorStore = assign({}, EventEmitter.prototype, {

    // The components can use this function to be able to get to know when the store changes
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    // The components can use this function to stop caring about when store changes
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    getAllAuthors: function () {
        return _authors;
    },

    getAuthorById: function (id) {
        return _.find(_authors, { id: id });
    }

});

Dispatcher.register(function (action) {
    switch (action.actionType) {
        case actionTypes.INIT:
            _authors = action.initialData.authors
            authorStore.emitChange();
            break;
        case actionTypes.CREATE_AUTHOR:
            _authors.push(action.author);
            authorStore.emitChange();
            break;
        case actionTypes.UPDATE_AUTHOR:
            var existingAuthor = _.find(_authors, { id: action.author.id });
            var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
            _authors.splice(existingAuthorIndex, 1, action.author);
            authorStore.emitChange();
            break;
        case actionTypes.DELETE_AUTHOR:
            _.remove(_authors, function (author) {
                return action.authorId === author.id;
            });
            authorStore.emitChange();
            break;            
        default:
            // no option
            break;
    }
});

module.exports = authorStore;