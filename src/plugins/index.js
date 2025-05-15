const {getAge} = require('../plugins/get-age-plugin');
const {getUiid} = require('../plugins/get-uuid.plugin');
const {httpClientPlugin} = require('../plugins/http-client.plugin');

module.exports = {
    getAge,
    getUiid,
    httpClientPlugin,
}