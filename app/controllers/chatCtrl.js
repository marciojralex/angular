var chat = angular.module('chat',["loginConstrutor","mensagemConstrutor"]);

chat.controller('ChatController',['$scope','$location','loginFactory','mensagemFactory', function($scope,$location,loginFactory,mensagemFactory){
	
	$scope.usuario = loginFactory.getData();
	$scope.mensagem = "";
	$scope.mensagens = mensagemFactory.getMensagem();

	$scope.signOut = function () {
    	$location.path('/');
    	loginFactory.clearSession();
     	 $scope.$apply();
   	};

   	$scope.enviarMensagem = function(){
   		mensagemFactory.sendMensagem($scope.mensagem);
   		$scope.mensagens.push($scope.mensagem);
   		console.log($scope.mensagens);
   	};

}]);