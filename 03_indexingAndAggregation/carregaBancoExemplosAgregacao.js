/*
	MONGO_DB
	Edney roldão - 15/05/2016
	- Base de dados para os estudos de agregação.
*/

// Se o banco já existir, vamos dar um drop
db.agrDB.drop()

// Comando para criar um novo DB
use agrDB

// Criando a base de dados
var listaReceitas = [
	{"receita": "arroz a grega", "autor": "Paola Carosella", "likes": 1152, "dislikes": 3, "tipo": "grega", "dt_postada": new Date(2010, 03, 22)},
	{"receita": "fole Gras", "autor": "Erick Jacquin", "likes": 1354, "dislikes": 1, "tipo": "francesa", "dt_postada": new Date(2011, 07, 11)},
	{"receita": "virado a paulista", "autor": "Henrique Fogaca", "likes": 1500, "dislikes": 1, "tipo": "brasileira", "dt_postada": new Date(1995, 03, 15)},
	{"receita": "gratin", "autor": "Paola Carosella", "likes": 945, "dislikes": 5, "tipo": "argentina", "dt_postada": new Date(2002, 11, 17)},
	{"receita": "pernil de cordeiro", "autor": "Jiang Pu", "likes": 365, "dislikes": 2, "tipo": "francesa", "dt_postada": new Date(2016, 03, 15)},
	{"receita": "bifun", "autor": "Edney", "likes": 2130, "dislikes": 0, "tipo": "japonesa", "dt_postada": new Date(1982, 05, 10)},
	{"receita": "feijoada magra", "autor": "Giselle", "likes": 3784, "dislikes": 26, "tipo": "brasileira", "dt_postada": new Date(1988, 08, 15)},
	{"receita": "crepe", "autor": "Nuno", "likes": 450, "dislikes": 10, "tipo": "francesa", "dt_postada": new Date(2013, 02, 02)},
	{"receita": "bife a cavala", "autor": "Raquel", "likes": 547, "dislikes": 7, "tipo": "brasileira", "dt_postada": new Date(2015, 01, 05)},
	{"receita": "batata frita", "autor": "Vanessa", "likes": 3256, "dislikes": 21, "tipo": "americana", "dt_postada": new Date(2016, 01, 11)},
	{"receita": "hamburger", "autor": "Bruna", "likes": 9545, "dislikes": 0, "tipo": "alema", "dt_postada": new Date(2001, 09, 11)},
	{"receita": "tempura", "autor": "Leonardo", "likes": 784, "dislikes": 15, "tipo": "japonesa", "dt_postada": new Date(2001, 01, 21)},
	{"receita": "estrogonofe", "autor": "Lee", "likes": 298, "dislikes": 11, "tipo": "italiana", "dt_postada": new Date(2008, 10, 10)},
	{"receita": "frango frito", "autor": "Aluisio", "likes": 1124, "dislikes": 3, "tipo": "americana", "dt_postada": new Date(2006, 06, 20)},
	{"receita": "frango xadrez", "autor": "Raul", "likes": 978, "dislikes": 22, "tipo": "japonesa", "dt_postada": new Date(2002, 02, 15)},
	{"receita": "comida olimpica", "autor": "Paola Carosella", "likes": 1152, "dislikes": 3, "tipo": "grega", "dt_postada": new Date(2009, 02, 21)},
	{"receita": "arroz frances", "autor": "Erick Jacquin", "likes": 1354, "dislikes": 1, "tipo": "francesa", "dt_postada": new Date(2010, 06, 10)},
	{"receita": "baiao de dois", "autor": "Henrique Fogaca", "likes": 1500, "dislikes": 1, "tipo": "brasileira", "dt_postada": new Date(1994, 05, 14)},
	{"receita": "grao de bico", "autor": "Paola Carosella", "likes": 945, "dislikes": 5, "tipo": "argentina", "dt_postada": new Date(2003, 10, 18)},
	{"receita": "bife a parmegiana", "autor": "Jiang Pu", "likes": 365, "dislikes": 2, "tipo": "francesa", "dt_postada": new Date(2015, 04, 16)},
	{"receita": "yakisoba", "autor": "Edney", "likes": 2130, "dislikes": 0, "tipo": "japonesa", "dt_postada": new Date(1981, 04, 11)},
	{"receita": "tutu de feijao", "autor": "Giselle", "likes": 3784, "dislikes": 32, "tipo": "brasileira", "dt_postada": new Date(1989, 07, 16)},
	{"receita": "macarrao franco", "autor": "Nuno", "likes": 450, "dislikes": 10, "tipo": "francesa", "dt_postada": new Date(2014, 01, 03)},
	{"receita": "bife de cavalo", "autor": "Raquel", "likes": 555, "dislikes": 7, "tipo": "brasileira", "dt_postada": new Date(2013, 02, 06)},
	{"receita": "batata cozida", "autor": "Vanessa", "likes": 4512, "dislikes": 0, "tipo": "americana", "dt_postada": new Date(2013, 03, 13)},
	{"receita": "x-salada", "autor": "Erick Jacquin", "likes": 3320, "dislikes": 41, "tipo": "alema", "dt_postada": new Date(2005, 05, 15)},
	{"receita": "camarao", "autor": "Henrique Fogaca", "likes": 784, "dislikes": 15, "tipo": "japonesa", "dt_postada": new Date(2004, 05, 04)},
	{"receita": "pizza", "autor": "Lee", "likes": 298, "dislikes": 11, "tipo": "italiana", "dt_postada": new Date(2010, 10, 10)},
	{"receita": "frango empanado", "autor": "Aluisio", "likes": 1124, "dislikes": 3, "tipo": "americana", "dt_postada": new Date(2006, 06, 06)},
	{"receita": "udon", "autor": "Raul", "likes": 978, "dislikes": 22, "tipo": "japonesa", "dt_postada": new Date(2007, 05, 01)}
];

// Importando
db.agrDB.insert(listaReceitas);

// Se os campos já estiverem indexados, vamos dar um drop
db.agrDB.dropIndex("receita_1_autor_1_likes_1_dislikes_1_tipo_1_dt_postada_1")

// Indexando os campos
db.agrDB.ensureIndex({"receita": 1, "autor": 1, "likes": 1, "dislikes": 1, "tipo": 1, "dt_postada": 1})


