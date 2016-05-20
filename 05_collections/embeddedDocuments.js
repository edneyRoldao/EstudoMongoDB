/*
	Edney Roldão - 20/05/2016
	- EMBEDDED DOCUMENTS
*/
// Digamos que agora contato possui contato de emergencia
var contato01 = {"nome": "Maria", "email": "maria@maria.com"};
var contatoEmergencia = {"nome": "Maria", "email": "maria123@emergencia.com"};
db.contatos.insert(contato01);
db.contatos.insert(contatoEmergencia);

var cont = db.contatos.find({"email": "maria@maria.com"});

var emerg = db.contatos.find({"email": "maria123@emergencia.com"});

cont.emergencia = emerg;

db.contatos.update({"_id": cont._id}, cont);
