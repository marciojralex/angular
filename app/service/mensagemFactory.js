var app = angular.module('mensagemConstrutor',[]);

app.factory("mensagemFactory",['$http',function($http){

	var getMensagem = function(){
		return $http.get("http://localhost:9000/mensagem").then(function(result){
			console.log("retorno do get = ");
			console.log(result);
			return result;
		});
	};

	var getMensagens = function(id){
		return $http.get("http://localhost:9000/mensagens",id);
	};

	var sendMensagem = function(mensagem){
		console.log(mensagem);
		$http.post("http://localhost:9000/enviar", mensagem).then(function(result){
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