/*jslint browser: true*/
/*jslint devel: true*/
/*jslint vars: true*/
/*globals define*/
define(function (require) {
    'use strict';
    var ko = require('knockout');

    function TreasureModel(data) {
        var self = this;
        self.pk = ko.observable(data.pk);
        self.name = ko.observable(data.name);
        self.price = ko.observable(data.price);
    }

    return TreasureModel;
});
