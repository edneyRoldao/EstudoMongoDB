/*
	MONGO_DB
	Edney Roldão - 15/05/2016

	- Arquivo js que conecta em um banco de dados do MongoDB.
	- Por padrão eu criei um chamado: novaBase
*/

// Conectando com o banco
var selecionarDB = function(porta, dataBaseName) {
	
	if(!porta) porta = 27017;

	if(!dataBaseName) dataBaseName = "novaBase";

	db = connect("localhost:" + porta + "/" + dataBaseName);

	return db;
}

/*
	Como usar:
		01: acesse a pasta com esse arquivo via terminal
		02: entre no bash do mongo (não esquecer de inicializar o servidor)
		03: digite o comando: load('conectaDB.js')
		04: vamos invocar a função criada aqui: selecionarDB() 
*/