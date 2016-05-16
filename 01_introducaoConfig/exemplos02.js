/*
	MONGO_DB
	Edney Roldão - 15/05/2016
*/

// Podemos guardar uma pesquisa em uma variável
var smithPersons = db.bank_data.find( {last_name: "SMITH"}, {first_name: 1, last_name: 1} );

// contando o número de ocorrências
smithPersons.count();

// Podemos criar uma iteração para listar uma pesquisa
for(var i = 0; i < smithPersons.count(); i++) {
	print(smithPersons[i].first_name + " " + smithPersons[i].last_name)
}

var smithPersonsAccount = db.bank_data.find({'accounts.account_balance': 936484.1221326711});

db.bank_data.find({'accounts.account_balance': 936484.1221326711})

db.bank_data.find({'accounts.account_balance': 936484.1221326711}).count()

db.bank_data.find({'accounts.account_balance': 936484.1221326711})[0]

db.bank_data.find({'accounts.account_balance': 936484.1221326711}, {'accounts.$': 1})

db.bank_data.find({'accounts.account_balance': 936484.1221326711}, {'accounts.$': 1})[0]

db.bank_data.find({'accounts.account_balance': 936484.1221326711}, {'accounts.$': 1, first_name: 1, last_name: 1})[0]


