/*
	MONGO_DB
	Edney roldão - 15/05/2016
	- Exemplos de pesquisas - queries
	- Vamos continuar usando a base testdb
*/

// Para apagar os documentos inseridos
db.testdb.drop()

// query 01 - retornar todos os estudantes do estado SP de sexo M
db.testdb.find({"estado": "SP", "sexo": "M"}).pretty()

// query 02 - retornar o nome, id e data de nascimento de todos os estudantes do estado SP de sexo F
db.testdb.find({"estado": "SP", "sexo": "F"}, {"nome": 1, "dt_nascimento": 1}).pretty()

// query 03 - retornar o nome e data de nascimento de todos os estudantes do estado SP de sexo F
db.testdb.find({"estado": "SP", "sexo": "F"}, {"nome": 1, "dt_nascimento": 1, "_id": 0}).pretty()

// query 04 - retornar os nomes e gpa dos estudantes com gpa entre 3 e 4.4
db.testdb.find({"gpa": {"$gte": 3.0, "$lte": 4.4}}, {"gpa": 1, "nome": 1, "_id": 0})

// query 05 - retornar os estudantes que nasceram depois de 1980
var ano1980 = new Date("01/01/1980");
db.testdb.find({"dt_nascimento": {"$gt": ano1980}}, {"dt_nascimento": 1, "nome": 1 , "_id": 0})

// count da query acima
db.testdb.find({"dt_nascimento": {"$gt": ano1980}}, {"dt_nascimento": 1, "nome": 1 , "_id": 0}).count()

// query 06 - retorna todos os estudantes diferentes do sexo masculino
db.testdb.find({"sexo": {"$ne": "M"}}, {"nome": 1, "_id": 0})

// query 07 - retorna todos os estudantes diferentes do sexo feminino
db.testdb.find({"sexo": {"$ne": "F"}}, {"nome": 1, "_id": 0})

// query 08 - retornar todos os estudantes com gpa 3, 4 e 5
db.testdb.find({"gpa": {"$in": [3, 4, 5]}}, {"gpa": 1, "nome": 1, "_id": 0})

// query 09 - retornar todos os estudantes com gpa diferentes de 3, 4 e 5
db.testdb.find({"gpa": {"$nin": [3, 4, 5]}}, {"gpa": 1, "nome": 1, "_id": 0})

// query 10 - retornar os estudantes com status formado ou com gpa menor que 3.5
db.testdb.find({"$or": [{"status": "formado"}, {"gpa": {"$lt": 3.5}}]}, {"status": 1, "gpa": 1, "_id": 0})

// query 11 - retornar todos os estudantes com notas que não sejam maior que 4
db.testdb.find({"gpa": {"$not": {"$gt": 4}}}, {"nome": 1, "_id": 0, "gpa": 1})

// query 12 - retornar todos os estudantes com notas que não sejam menor que 4
db.testdb.find({"gpa": {"$not": {"$lt": 4}}}, {"nome": 1, "_id": 0, "gpa": 1})

// query 13 - retornar todos os estudantes com status estudante, porém limitando a exibição do 3 primeiros resultados
db.testdb.find({"status": "estudante"}, {"nome": 1, "_id": 0}).limit(3)

// query 14 - retornar todos os estudantes com status estudante, porém pula a exibição dos 3 primeiros resultados
db.testdb.find({"status": "estudante"}, {"nome": 1, "_id": 0}).skip(3)

// query 15 - retorna todos os estudantes ordenados pelo nome com status estudante
db.testdb.find({"status": "estudante"}, {"nome": 1, "_id": 0}).sort({"nome": 1})

// query 16 - retorna todos os estudantes ordenados pelo nome
db.testdb.find().sort({"nome": 1}).pretty()

// query 17 - usando expressões regulares para retornar resultados, vamos recuperar todos os estudantes de nome que iniciam com a letra M
db.testdb.find({"nome": /^M.*$/}, {"nome": 1, "_id": 0})

// query 18 - retorna todos os estudantes com alguna prova com nota 10
db.testdb.find({"provas": 10}, {"nome": 1, "provas": 1, "_id": 0})

// que3y 19 - retorna todos os alunos com provas com notas 10 e 8
db.testdb.find({"provas": {"$all": [10, 8]}}, {"nome": 1, "_id": 0, "provas": 1})

// query 20 - vamos fazer uma pesquisa de uma nota em um index específico da prop provas, no caso com a primeira prova com nota 7
db.testdb.find({"provas.0": 7}, {"nome": 1, "_id": 0, "provas": 1})

// Adicionando mais uma nota no final do array de provas
db.testdb.update({"nome": "Nadine"}, {"$push": {"provas": 2}})

// query 21 - agara vamos buscar alunas que tenham quatro notas no array de provas. No caso só vai retornar o documento alterado acima
db.testdb.find({"provas": {"$size": 4}}, {"nome": 1, "_id": 0, "provas": 1})

// query 22 - vamos fazer uma pesquisa e aplicar um slice no array de provas para retornar somente as duas notas iniciais
db.testdb.find({"nome": "Nadine"}, {"provas": {"$slice": 2}}).pretty()

// query 23 - vamos fazer uma pesquisa e aplicar um slice no array de provas para retornar somente as duas notas finais
db.testdb.find({"nome": "Nadine"}, {"provas": {"$slice": -2}}).pretty()

// query 24 - vamos fazer uma pesquisa e aplicar um slice no array de provas para retornar as notas entre os indexes 1 e 2
db.testdb.find({"nome": "Nadine"}, {"provas": {"$slice": [1,2]}}).pretty()

// query 25 - vamos retornar um documento e uma infação específica do contato que é um documento
db.testdb.find({"nome": "Edney"}, {"nome": 1, "contato.email": 1, "_id": 0})

// query 26 - vamos retornar um estudante a partir do seu contato, no caso o telefone
db.testdb.find({"contato.telefone": "36365-2020"}, {"nome": 1, "_id": 0, "contato.telefone": 1})
