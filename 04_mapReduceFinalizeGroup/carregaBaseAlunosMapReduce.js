/*
	MONGO_DB
	Edney roldão - 16/05/2016
	- Base de dados para os estudos de Map Reduce Finalize Group.
*/
var estudantes = [
	{name: "Dale Cooper", class: "Calculus", tests: [30, 28, 45]},
	{name: "Harry Truman", class: "Geometry", tests: [28, 26, 44]},
	{name: "Shelly Johnson", class: "Calculus", tests: [27, 26, 43]},
	{name: "Boddy Briggs", class: "College Algebra", tests: [20, 18, 35]},
	{name: "Donna Heyward", class: "Geometry", tests: [28, 28, 44]},
	{name: "Audrey Horne", class: "College Algebra", tests: [22, 26, 44]},
	{name: "James Hurley", class: "Calculus", tests: [20, 20, 38]},
	{name: "Lucy Moran", class: "College Algebra", tests: [26, 24, 40]},
	{name: "Tommy Hill", class: "College Algebra", tests: [30, 29, 46]},
	{name: "Andy Brennan", class: "Geometry", tests: [20, 21, 38]}
];

var nomeEstudantes = [];

for(var i = 0; i < estudantes.length; i++) {
	nomeEstudantes.push(estudantes[i].name);
}

var informacaoEstudante = estudantes.map(function(value) {
	return value.name + ' is in ' + value.class;
});