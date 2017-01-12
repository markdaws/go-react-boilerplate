var Constants = require('../constants.js');
var initialState = require('../initialState.js');

module.exports = function(state, action) {
    var newState = state;
    var i;

    switch(action.type) {
    case Constants.ITEMS_LOAD_ALL:
        console.log('load all items');
        break;

    case Constants.ITEMS_LOAD_ALL_FAIL:
        console.log('load items failed');
        break;

    case Constants.ITEMS_LOAD_ALL_RAW:
        newState = action.data;
        break;

    default:
        newState = state || initialState().items;
    }

    return newState;
};
