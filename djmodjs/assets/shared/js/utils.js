/*jslint browser: true*/
/*jslint devel: true*/
/*jslint vars: true*/
/*globals define*/
define(function (require) {
    'use strict';
    var $ = require('jquery');

    function Utils() {
        var self = this;

        self.mapTo = function (source, ModelClass) {
            return $.map(source, function (item) {
                return new ModelClass(item);
            });
        };
    }

    return new Utils();
});
