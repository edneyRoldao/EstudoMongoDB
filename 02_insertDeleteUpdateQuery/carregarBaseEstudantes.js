/*
	MONGO_DB
	Edney roldão - 15/05/2016
	- Precisamos carregar esses documentos para seguir os exemplos das pesquisas (queries)
*/
var listaEstudantes = [
	{"nome": "Nadine", "rua": "arnaldo vieira, 22", "cidade": "Vila Silvia", "estado": "SP", "dt_nascimento": new Date(2002, 11, 17),
		 "sexo": "F", "gpa": 4.5, "status": "estudante", "provas": [7, 8, 8.5],
			"contato": {"email": "nadine@gmail.com", "telefone": "78546-4451"}},

	{"nome": "Giselle", "rua": "Sempre viva", "cidade": "Flor de Maio", "estado": "SP", "dt_nascimento": new Date(1988, 08, 15),
		 "sexo": "F", "gpa": 5, "status": "estudante", "provas": [7, 7, 9],
			"contato": {"email": "giselle@gmail.com", "telefone": "6666-5555"}},

    {"nome": "Edney", "rua": "Marie, 472", "cidade": "Sao Paulo", "estado": "SP", "dt_nascimento": new Date(1982, 05, 10),
		 "sexo": "M", "gpa": 3.5, "status": "formado", "provas": [10, 9, 9.5],
			"contato": {"email": "edy@gmail.com", "telefone": "78955-7744"}},
	
	{"nome": "Marjorie", "rua": "Mere Marie, 472", "cidade": "Sao Paulo", "estado": "SP", "dt_nascimento": new Date(2016, 02, 15),
		 "sexo": "F", "gpa": 4, "status": "estudante", "provas": [9, 10, 8],
			"contato": {"email": "marjorie@gmail.com", "telefone": "79854-3333"}},

	{"nome": "Marilene", "rua": "Cruzeiro do Sul, 1000", "cidade": "Sao Paulo", "estado": "SP", "dt_nascimento": new Date(1955, 04, 24),
		 "sexo": "F", "gpa": 4.4, "status": "formado", "provas": [7, 6, 8],
			"contato": {"email": "marilene@gmail.com", "telefone": "2976-0021"}},

    {"nome": "Lucas", "rua": "Filhos da terra, 350", "cidade": "Filhos da terra", "estado": "RJ", "dt_nascimento": new Date(1994, 04, 04),
		 "sexo": "M", "gpa": 5.5, "status": "estudante", "provas": [10, 6, 9.5],
			"contato": {"email": "lucas@gmail.com", "telefone": "78555-7334"}},
	
	{"nome": "Daniel", "rua": "Voluntarios, 1255", "cidade": "Sao Paulo", "estado": "SC", "dt_nascimento": new Date(1979, 03, 05),
		 "sexo": "M", "gpa": 3, "status": "estudante", "provas": [7, 5, 7],
			"contato": {"email": "daniel@gmail.com", "telefone": "1111-2222"}},

	{"nome": "Tuta", "rua": "Leite de Moraes, 100", "cidade": "Santana", "estado": "PR", "dt_nascimento": new Date(1970, 01, 10),
		 "sexo": "M", "gpa": 5, "status": "formado", "provas": [8, 8, 8],
			"contato": {"email": "tuta@gmail.com", "telefone": "36365-2020"}},

    {"nome": "Biba", "rua": "Maria Amalia, 200", "cidade": "Sao Paulo", "estado": "PR", "dt_nascimento": new Date(1983, 01, 10),
		 "sexo": "F", "gpa": 4.4, "status": "estudante", "provas": [7.5, 9, 6],
			"contato": {"email": "biba@gmail.com", "telefone": "55555-5555"}},

    {"nome": "Simone", "rua": "Uninove, 1500", "cidade": "Barra Funda", "estado": "SC", "dt_nascimento": new Date(1980, 06, 10),
		 "sexo": "F", "gpa": 5, "status": "estudante", "provas": [10, 9.5, 9.5],
			"contato": {"email": "simone@gmail.com", "telefone": "99999-9999"}}
];

// Inserindo a lista criada acima na base
db.testdb.insert(listaEstudantes);
