/*
	MONGO_DB
	Edney Roldão - 15/05/2016
	
	- Lista dos principais comandos:

	// Iniciar o servidor:
		mongod

	// Iniciar o bash do mongo
		mongo

	// Exibir lista dos bancos existentes
		show dbs

	// Exibir lista de coleções de documentos
		show collections

	// Para fazer o dump em uma base de dados:
		mongoimport  mongoimport --jsonArray --db nomeDaBase --collection nomeArquivo < C:\caminhoDoArquivo\nomeArquivo.json

	// Criar a estrutura de diretórios padrão do mongoDB após sua instalação, pelo terminal vá para pasta bin da instalação
		digite: mkdir \data\db

	// Comandos de ajuda
		help ou db.help()


*/


/*
	mongoimport --jsonArray --db test --collection bank_data 
	< C:\workspace_mongoDB\mongodb-mva-master\module2_getting_started\bank_data.json\bank_data.json
*/