/*jslint browser: true*/
/*jslint devel: true*/
/*jslint vars: true*/
/*globals define*/
define(function (require) {
    'use strict';
    var $ = require('jquery'),
        ko = require('knockout');

    // Load custom binding handlers
    require('shared/js/handlers/getapiurl');
    // Load models
    var utils = require('shared/js/utils'),
        IslandModel = require('./models/island');

    function BrowseIslandsViewModel() {
        var self = this;
        self.islands = ko.observableArray([]);

        self.loadIslands = function (url) {
            $.ajax({
                url: url,
                type: 'GET',
                cache: false,
                success: function (result) {
                    self.islands(utils.mapTo(result.islands, IslandModel));
                }
            });
        };
    }

    $(document).ready(function () {
        ko.applyBindings(new BrowseIslandsViewModel());
    });
});
