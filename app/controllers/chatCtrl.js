var chat = angular.module('chat',["loginConstrutor","mensagemConstrutor"]);

chat.controller('ChatController',['$scope','$location','loginFactory','mensagemFactory', function($scope,$location,loginFactory,mensagemFactory){
	
	$scope.usuario = loginFactory.getData();
	$scope.mensagem = "";
  $scope.mensagens = [];
  var enviar = {
      mensagem : "vazia",
      id : "0",
      usuarioId : "0"
  }

  var getMensagens = function(){
    console.log($scope.mensagens);

    $scope.mensagens = mensagemFactory.getMensagem();
    console.log("lista de mensagens = ") 
    console.log($scope.mensagens);
  };

	$scope.signOut = function () {
    	$location.path('/');
    	loginFactory.clearSession();
     	$scope.$apply();
   	};

   	$scope.enviarMensagem = function(){
      enviar.mensagem = $scope.mensagem;
   		mensagemFactory.sendMensagem(enviar);
   		console.log(enviar);
   	};

    getMensagens();
}]);