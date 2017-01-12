var keyMirror = require('keyMirror');

/*
 The pattern here is that you have a actionType e.g. SCENE_DESTROY, responses from the
 server are then either <ACTION_TYPE>_RAW which indicates success and the payload will
 contain any raw data returned from the server, or <ACTION_TYPE>_FAIL which indicates
 failure. If the errors are handled localy inside a component, there may not be a corresponding
 _FAIL message
 */

module.exports = keyMirror({
    ITEMS_LOAD_ALL: null,
    ITEMS_LOAD_ALL_RAW: null,
    ITEMS_LOAD_ALL_FAIL: null,
});
