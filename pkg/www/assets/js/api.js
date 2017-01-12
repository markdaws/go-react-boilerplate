const BASE = '//' + window.location.host;

/*
 API provides helper methods to access all of the REST APIs
*/
var API = {
    url(url) {
        return BASE + url;
    },

    itemsLoadAll(callback) {
        $.ajax({
            url: this.url('/api/v1/items'),
            dataType: 'json',
            cache: false,
            success(data) {
                callback(null, data);
            },
            error: (xhr, status, err) => {
                callback({
                    err: err,
                    xhr: xhr,
                    status: status
                });
            }
        });
    },
};
module.exports = API;
