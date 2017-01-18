var app = angular.module('mensagemConstrutor',[]);

app.factory("mensagemFactory",['$http',function($http){

	var getMensagem = function(){
		return $http.get("http://localhost:9000/mensagem");
	}

	var getMensagens = function(id){
		return $http.get("http://localhost:9000/mensagens",id);
	}
	var sendMensagem = function(mensagem){
		console.log(mensagem);
		//return $http.post("http://localhost:9000/mensagem", mensagem);
	}
	
	return{
		getMensagem : getMensagem,
		getMensagens : getMensagens,
		sendMensagem : sendMensagem
	}
}]);