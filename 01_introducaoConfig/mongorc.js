/*
	MONGO_DB
	Edney Roldão - 15/05/2016
	- Esse arquivo é para proteger a nossa base de dados
*/

var protectDB = function() {
	db.dropDatabase = DB.prototype.dropDatabase = no;
	DBCollection.prototype.drop = no;
	DBCollection.prototype.dropIndex = no;
	print("Database Protected");
};

operationCount = 1;
prompt = function() {
	if(typeof db == 'undefined') {
		return 'nodb > ';
	}
	return db + " " + (operationCount++) + " > ";
};

EDITOR="C:\\Program Files\\Sublime Text 3\\sublime_text.exe"