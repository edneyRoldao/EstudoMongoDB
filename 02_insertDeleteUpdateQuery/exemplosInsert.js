/*
	MONGO_DB
	Edney roldão - 15/05/2016
	- Inserindo dados
	- Removendo dados
	- Atualizando
	- Basta copiar os exemplos e colar no terminal
*/

// Vamos criar uma nova base de dados
use testdb

// exp 01 - inserindo um documento json
db.testdb.insert({"name": "Barry Bonds"})

// exp 02 - inserindo mais de um documento json, ou seja jsonArray
db.testdb.insert([{"name": "Nadine"},{"name": "Marjorie"}])

// Exibindo os dados identados
db.testdb.find().pretty()

// exp 03 - removendo
db.testdb.remove({"name": "Barry Bonds"})

// exp 04 - atualizando
db.testdb.update( {"name": "Nadine"}, {$set:{"name": "Nadine Roldao", "idade": 13}} ) 

// exp 05 - inserindo mais uma coleção de dados
var listaPessoas = [
	{"name": "Edney", "hobby": "learn over and over"},
	{"name": "Giselle", "hobby": "assistir novela"},
	{"name": "Marilene", "hobby": "Ajudar as pessoas"},
	{"name": "Daniel", "hobby": "Orar pra Deus"}	
];

db.testdb.insert(listaPessoas)

// exp 06 - atualizando várias informações (colocamos {multi:true} para alterar mais de uma informação)
var finding = {"hobby": "assistir novela"};
db.testdb.update(finding, {$set:{"hobby": "cuidar da Marjorie"}}, {multi: true})

// exp 07 - atualizando com operação de incremento. Vamos aumentar a idade
db.testdb.update({"name": "Nadine Roldao"}, {"$inc": {"idade": 2}})

// exp 08 - atualizando com operação de decremento. Vamos voltar a idade
db.testdb.update({"name": "Nadine Roldao"}, {"$inc": {"idade": -2}})

// exp 09 - atualizando com operação de multiplicação. Vamos multiplicar a idade
db.testdb.update({"name": "Nadine Roldao"}, {"$mul": {"idade": 1.2}})

// exp 10 - atualizando adicionando uma nova propriedade
db.testdb.update({"name": "Marjorie"}, {"$push": {"caracteristicas": {"olhos": "azuis", "meses": 3, "peso": 5.5}}})

// exp 11 - pesquisando
db.testdb.find({"name": "Marjorie"}).pretty()

// exp12_A - vamos adicionar uma prop do tipo array 
db.testdb.update({"name": "Nadine Roldao"}, {"$push": {
	"notas escolares": {"$each": [7, 6, 5, 8.5, 3.5, 6.4], "$slice": -5}}})

// exp12_B - adicionando mais uma nota
db.testdb.update({"name": "Nadine Roldao"}, {"$addToSet": {"notas escolares": 9.6}})

// exp12_C - removendo a ultima nota da lista
db.testdb.update({"name": "Nadine Roldao"}, {"$pop": {"notas escolares": 1}})

// exp12_D - removendo a primeira nota da lista
db.testdb.update({"name": "Nadine Roldao"}, {"$pop": {"notas escolares": -1}})

// exp12_E - removendo um valor específico
db.testdb.update({"name": "Nadine Roldao"}, {"$pull": {"notas escolares": 3.5}})
