/*
	MONGO_DB
	Edney Roldão - 15/05/2016
*/

// Criando um novo documento Json
var doc01 = {
	"nome": "Edney Roldao",
	"posicao": "Desenvolvedor",
	"email": "edney@mongodb.com",
	"data_contrato": new Date()
};


// Inserindo o documento acima no DB criado
db.novaBase.insert(doc01);

//Consultando a base que acabamos de criar
db.novaBase.find();

// Retornando a primeiro acorrência da base 
db.novaBase.find()[0];

// Retorna a pesquisa identada
db.novaBase.find().pretty();

// Adicionando nova propriedade ao documento que é um array vazio
doc01.referencias = [];

/* Atualizando o documento no banco:
   Estamos pesquisando pelo nome no primeiro parâmetro e passando
   o documento modificado no segundo parâmetro */
db.novaBase.update({"nome": "Edney Roldao"}, doc01);

// Vamos remover o documento
db.novaBase.remove({"nome": "Edney Roldao"});

// Arquivos que podemos salvar no nosso documento
null : {"nome" : null};

boolean : {"maisDe20" : true};

number : {"altura" : 1.76};

string : {"endereco" : "rua dois, 25"};

// Arrays
{ "lista" : ["a", "b", "c", 123] };

// Date Object
{"data_contrato" : new Date()};

// RegExp
{"ruaRegExp" : /^[A-Za-z0-9\.\'\-]{5,30}$/};

// Novo documento em uma propriedade
{"info" : {"nome" : "Joao das Couves"}};

// criando mais um documento
var doc02 = {
	"nome": null,
	"maisDe20": true,
	"altura": 1.76,
	"endereco": "Rua dois, 123",
	"lista": ["a","b","c","d"],
	"data_contrato": new Date(),
	"ruaRegExp": '//^[A-Za-z0-9\.\'\-]{5,30}$//',
	"info": {"nome": "Joao das Couves"} 
};