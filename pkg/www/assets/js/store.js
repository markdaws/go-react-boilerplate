var Redux = require('redux');
var thunk = require('redux-thunk').default;
var initialState = require('./initialState.js');
var itemsReducer = require('./reducers/itemsReducer.js');

var rootReducer = Redux.combineReducers({
    items: itemsReducer,
});

module.exports = Redux.applyMiddleware(thunk)(Redux.createStore)(rootReducer, initialState());
