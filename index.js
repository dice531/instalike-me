'use strict';

const request = require('request');
const _ = require('lodash');

class InstaLikeMe {

    constructor(apiKey = 'YOUR-API-KEY', version = 1) {
        this.apiKey = apiKey;
        this.url = `http://instalike.me/api/v${version}/`;
    }

    api(method = 'ping', params = {}, callback, format = 'json') {
        request.post({
            url : `${this.url}${method}.${format}`,
            form : _.extend({apiKey: this.apiKey}, params)
        }, function(err, httpResponse, body) {
            if (err) {
                return console.error('Failed:', err);
            }

            let result = JSON.parse(body);
            callback(result.error, result.response);
        });
    }
}

module.exports = InstaLikeMe;