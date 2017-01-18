var app = angular.module("rota", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/login.html",
        controller : "LoginController"
    })
    .when("/login",{
    	templateUrl : "views/login.html",
    	controller : "LoginController"
    }).when("/chat",{
    	templateUrl : "views/chat.html",
    	controller : "ChatController"
    }).otherwise({redirectTo : "/"});
});