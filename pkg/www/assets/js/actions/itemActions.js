var Constants = require('../constants.js');
var Api = require('../api.js');

var ItemActions = {
    loadAll: function() {
        return function(dispatch) {
            dispatch({ type: Constants.ITEMS_LOAD_ALL });

            Api.itemsLoadAll(function(err, data) {
                if (err) {
                    dispatch({ type: Constants.ITEMS_LOAD_ALL_FAIL, err: err });
                    return;
                }

                dispatch({ type: Constants.ITEMS_LOAD_ALL_RAW, data: data });
            });
        };
    },

};
module.exports = ItemActions;
