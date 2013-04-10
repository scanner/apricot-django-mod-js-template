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
        TreasureModel = require('./models/treasure');

    function LoadMapViewModel() {
        var self = this;
        self.treasures = ko.observableArray([]);

        self.loadTreasures = function (url) {
            $.ajax({
                url: url,
                type: 'GET',
                cache: false,
                success: function (result) {
                    self.treasures(utils.mapTo(result.treasures, TreasureModel));
                }
            });
        };
    }

    $(document).ready(function () {
        ko.applyBindings(new LoadMapViewModel());
    });
});
