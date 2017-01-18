var app = angular.module('loginConstrutor',[]);

app.service("loginFactory",["$window",function($window){
	var KEY = 'login';

	var clearSession = function(){
		$window.sessionStorage.removeItem(KEY);
	};

	var setData = function(newObj) {
        var login = $window.sessionStorage.getItem(KEY);
        if (login) {
            login = JSON.parse(login);
        } else {
            login = [];
        }
        login.push(newObj);
        $window.sessionStorage.setItem(KEY, JSON.stringify(login));
    };

    var getData = function(){
        var login = $window.sessionStorage.getItem(KEY);
        if (login) {
            login = JSON.parse(login);
        }
        return login || [];
    };

    return {
    	clearSession : clearSession,
        setData: setData,
        getData: getData
    };
}]);