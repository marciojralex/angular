var login = angular.module('login',["loginConstrutor"]);

login.controller('LoginController',['$scope','$location','loginFactory', function($scope,$location,loginFactory){
	
	$scope.usuario = {
		nome : '',
		email : '',
		conectado : false
	}

$scope.onGoogleLogin = function(){
  gapi.load('client', start);

  setTimeout(function(){
    if($scope.usuario.conectado){
      console.log('conectado');
      $location.path('/chat');
      loginFactory.setData($scope.usuario);
      console.log(loginFactory.getData());
      $scope.$apply();
    }else{
      $location.path('/');
      $scope.$apply();
      console.log('nao conectado');
     }
  }, 5000);
}


function start() {
  // 2. Initialize the JavaScript client library.
  gapi.client.init({
    'apiKey': 'AIzaSyC7OMiQ_Q06YLtRQ4udk18cen66FubrKX4',
    // clientId and scope are optional if auth is not required.
    'clientId': '526182862185-ocbll86pm4apue9o0acghf5r8vpsl1dm.apps.googleusercontent.com',
    'scope': 'profile',
  }).then(function() {
    // 3. Initialize and make the API request.
    return gapi.client.request({
      'path': 'https://people.googleapis.com/v1/people/me',
    })
  }).then(function(response) {
    $scope.usuario.nome = response.result.names[0].displayName;
    $scope.usuario.email = response.result.emailAddresses[0].value;
    $scope.usuario.conectado = true;
    console.log($scope.usuario.nome);
    console.log($scope.usuario.email);
    console.log(response.result);
  }, function(reason) {
    $scope.usuario.conectado = false;
    console.log('Error: ' + reason.result.error.message);
  });
};

}]);