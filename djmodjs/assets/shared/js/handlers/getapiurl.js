/*jslint browser: true*/
/*jslint devel: true*/
/*jslint vars: true*/
/*globals define*/
define(function (require) {
    'use strict';
    var $ = require('jquery'),
        ko = require('knockout');

    ko.bindingHandlers.saveURL = {
        init: function (element, valueAccessor) {
            var url = $(element).val();
            var load_function = valueAccessor();
            load_function(url);
        }
    };
});
