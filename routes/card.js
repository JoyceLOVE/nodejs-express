var vcard = [];



exports.create = function(req, res){
	var person = {
	name: "",//name is a key
	tel: "" //tel is a key
};
 	console.log(">>>>>>>>> creat");
 	console.log(req.query);

 	person.nickname = req.query.nickname;
 	person.tel = req.query.tel;

 	vcard.push(person); //把 person 的資料存進 vcard陣列裡

    res.end(); 
   
};


exports.read = function(req, res){
	console.log(">>>>>>>>> read");

	res.send(vcard);

	res.end();

};


exports.update = function(req, res){
 	console.log(">>>>>>>>> update");
 	
 	var nickname = req.params.nickname;

 	vcard.forEach(function (entry){
 		if (entry.nickname == nickname) {

 			console.log('found!');

 			entry.name = req.query.name;
 			entry.tel = req.query.tel;
 		}
 	});
    res.end(); 
   
};


exports.delete = function(req, res){
	console.log(">>>>>>>>> delete");

	var nickname = req.params.nickname;

	var newvcard = [];
	vcard.forEach(function (entry) {
		
		if (entry.nickname !== nickname){
			newvcard.push(entry);
		}
	});
 	
 	vcard = newvcard;
    res.end();
   
};