var app = angular.module('mensagemConstrutor',[]);

app.factory("mensagemFactory",['$http',function($http){

	var getMensagem = function(){
		return $http.get("https://secret-shore-36816.herokuapp.com/mensagem").then(function(result){
			console.log("retorno do get = ");
			console.log(result);
			return result;
		});
	};

	var getMensagens = function(id){
		return $http.get("https://secret-shore-36816.herokuapp.com/mensagens",id);
	};

	var sendMensagem = function(mensagem){
		console.log(mensagem);
		$http.post("https://secret-shore-36816.herokuapp.com/enviar", mensagem).then(function(result){
			console.log("retorno do post");
			console.log(result);
		});
	};
	
	return{
		getMensagem : getMensagem,
		getMensagens : getMensagens,
		sendMensagem : sendMensagem
	}
}]);