/*
	MONGO_DB
	Edney roldão - 15/05/2016
	- Vamos usar um loop para inserir 50.000 registros não indexados.
*/
var carregarRegistros = function() {
	for(var i = 0; i < 50000; i++) {
		db.testdb.insert({"account": "account" + i, "age": Math.floor(Math.random() * 90)});
	}
};

// Agora vamos fazer uma pesquisa nos registros não indexados que acabamos de inserir
db.testdb.find({"age": 50}).explain("executionStats") // verificar o tempo de execução em executionTimeMillis

// Agora vamos indexar os documentos inseridos
db.testdb.ensureIndex({"age": 1, "account": 1})

// Vamos executar a mesma pesquisa acima e verificar o tempo de execução (veja que o tempo caiu bastante, no meu caso 7,5 vezes mais rápido)
db.testdb.find({"age": 50}).explain("executionStats")

// Para verificar os campos indexados
db.testdb.getIndexes()

// Podemos remover os campos indexados
db.testdb.dropIndex("age_1_account_1")

// novo teste
db.testdb.find({"account": "account100"}).explain("executionStats")

// Vamos index o campo account novamente e depois atribuir chave única
db.testdb.ensureIndex({"account": 1}, {"unique": true})

// novamente o teste bem mais ráopido
db.testdb.find({"account": "account100"}).explain("executionStats")

// Vamos indexar novamente account, tormar chave única e remover registros duplicados
db.testdb.getIndexes()
db.testdb.dropIndex("account_1")
db.testdb.ensureIndex({"account": 1}, {"unique": true, "dropdups": true})


// Vamos indexar novamente account, tormar chave única e remover registros nulos
db.testdb.getIndexes()
db.testdb.dropIndex("account_1")
db.testdb.ensureIndex({"account": 1}, {"unique": true, "sparse": true})
