/*global requirejs*/
requirejs.config({
    paths: {
        'jquery': 'http://cdnjs.cloudflare.com/ajax/libs/jquery/1.8.3/jquery.min',
        'knockout': 'http://cdnjs.cloudflare.com/ajax/libs/knockout/2.2.0/knockout-min'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'knockout': {
            exports: 'ko'
        }
    }
});
