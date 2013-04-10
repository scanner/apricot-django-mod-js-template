/*jslint browser: true*/
/*jslint devel: true*/
/*jslint vars: true*/
/*globals define*/
define(function (require) {
    'use strict';
    var $ = require('jquery'),
        ko = require('knockout');

    function IslandModel(data) {
        var self = this;
        self.pk = ko.observable(data.pk);
        self.name = ko.observable(data.name);

        self.getURL = function (baseURL) {
            return baseURL.replace('%d', self.pk());
        };
    }

    return IslandModel;
});
