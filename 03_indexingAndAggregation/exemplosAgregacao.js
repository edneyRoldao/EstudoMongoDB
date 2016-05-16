/*
	MONGO_DB
	Edney roldão - 15/05/2016
	- Sobre agregação
*/

// exp agregação 01 - agrupando pelo tipo de receita e contando o número de autores.
db.agrDB.aggregate([{$group: {_id: "$tipo", num_autor: {$sum: 1}}}])

// exp agregação 02 - agrupando pelo tipo de receita e contando o número de autores e ordenando pela qtd desc.
db.agrDB.aggregate([{$group: {_id: "$tipo", num_autor: {$sum: 1}}}, {$sort: {num_autor: -1}}])

// exp agregação 03 - agrupando pelo tipo de receita e somamdo o número de likes e ordenando pelo nr de likes.
db.agrDB.aggregate([{$group: {_id: "$tipo", num_autor: {$sum: "$likes"}}}, {$sort: {num_likes: -1}}])

// exp agregação 04 - agrupando pelo tipo de receita e a média de likes e ordenando pelo nr de likes.
db.agrDB.aggregate([{$group: {_id: "$tipo", num_autor: {$avg: "$likes"}}}, {$sort: {num_likes: -1}}])

// exp agregação 05 - agrupando pelo tipo de receita com menos likes e ordenando o nr likes desc
db.agrDB.aggregate([{$group: {_id: "$tipo", num_likes: {$min: "$likes"}}}, {$sort: {num_likes: -1}}])

// exp agregação 06 - agrupando pelo tipo de receita com mais likes e ordenando o nr likes desc
db.agrDB.aggregate([{$group: {_id: "$tipo", num_likes: {$max: "$likes"}}}, {$sort: {num_likes: -1}}])

/* exp agregação 07 - agrupando pelo tipo de receita com mais likes e ordenando o nr likes desc, 
                      limit 3 resultados */
db.agrDB.aggregate([{$group: {_id: "$tipo", num_likes: {$max: "$likes"}}}, {$sort: {num_likes: -1}}, {$limit: 3}])

/* exp agregação 07 - retorna todas as ocorrências de receitas do tipo brasileira, agrupando por autores
				      e a quantidade de receitas brasileiras de cada autor*/
db.agrDB.aggregate([{$match: {"tipo": "brasileira"}}, {$group: {_id: "$autor", "num_receitas": {$sum: 1}}}])

// exp agregação 08 - vai retornar todas as receitas (20 primeiros resultados)
db.agrDB.aggregate({"$project": {"Receitas": "$receita", "_id": 0}})

// exp agregação 09 - vai retornar a soma de likes e dislikes (20 primeiros resultados)
db.agrDB.aggregate({"$project": {"Fortes Impressões": {"$add": ["$likes", "$dislikes"]}, "_id": 0}})

// exp agregação 10 - vai retornar a subtração de likes e dislikes (20 primeiros resultados)
db.agrDB.aggregate({"$project": {"Fortes Impressões": {"$subtract": ["$likes", "$dislikes"]}, "_id": 0}})

// exp agregação 11 - vai retornar a multiplicação de likes e dislikes (20 primeiros resultados)
db.agrDB.aggregate({"$project": {"Fortes Impressões": {"$multiply": ["$likes", "$dislikes"]}, "_id": 0}})

// exp agregação 12 - vai retornar a divisão de likes e dislikes (20 primeiros resultados)
db.agrDB.aggregate({"$project": {"Fortes Impressões": {"$divide": ["$likes", "$dislikes"]}, "_id": 0}})


// month, year, week, dayOfMonth, dayOfWeek, dayOfYear (exibindo as datas em diversos formatos)
db.agrDB.aggregate({"$project": {"Mês postado": {"$month": "$dt_postada"}, "receita": 1, "_id": 0}})
db.agrDB.aggregate({"$project": {"Ano postado": {"$year": "$dt_postada"}, "receita": 1, "_id": 0}})
db.agrDB.aggregate({"$project": {"Semana postada": {"$week": "$dt_postada"}, "receita": 1, "_id": 0}})
db.agrDB.aggregate({"$project": {"Dia do mês postado": {"$dayOfMonth": "$dt_postada"}, "receita": 1, "_id": 0}})
db.agrDB.aggregate({"$project": {"Dia da semana postada": {"$dayOfWeek": "$dt_postada"}, "receita": 1, "_id": 0}})
db.agrDB.aggregate({"$project": {"Dia do postado": {"$dayOfYear": "$dt_postada"}, "receita": 1, "_id": 0}})

// exp 13 agregação - vamos exibir os tipos de recetas aplicando substring
db.agrDB.aggregate({"$project": {"Tipo": {"$substr": ["$tipo", 0, 3]}, "_id": 0}})

// exp 14 - vamos usar concatenação, upperCase
db.agrDB.aggregate({"$project": {"Titulo": {"$concat": [{$toUpper: "$receita"}, "  por ", "$autor"]}, "_id": 0}})

// exp 15 - vamos usar condicionais para exibir resultados, receitas com likes acima de 500 recebem ótimo, abaixo disso recebem bom
db.agrDB.aggregate({"$project": {"Potuação": {"$cond": {if: {$gte: ["$likes", 500]}, then: "Ótimo", else: "Bom"}}, "receita": 1, "_id": 0}})

// exp 16 - podemos usar a função compareTo para saber se um valor é maior que outro. Isso vai retornar 1, 0, ou -1
db.agrDB.aggregate({"$project": {"Comparar com 200": {$cmp: ["$likes", 200]}, "receita": 1, "_id": 0}})
