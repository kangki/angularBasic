requirejs.config({
    'baseUrl':'',
    'paths':{
        'angular':'/lib/angular/angular',
        'routes':'/app/routes',
        'config':'/app/config',
        'app':'/app/app'
    }
});

define([
    'angular',
    'app',
    'routes'
], function(angular, app){
    angular.element(document).ready(function(e){
        angular.bootstrap(document, ['app']);
    });
}, function(err){
    console.log(err);
});