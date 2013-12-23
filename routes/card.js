var vcard = [];

exports.create = function(req, res){

	var person = {
	id: "", //開設一個 帳號
	name:"", //使用者名字 >> key
	tel: "" //使用者電話資料 >> key
};
	
 	console.log(">>>>>>>>> creat");
 	console.log(req.query);

 	person.id = req.params.id;
 	person.name = req.query.name;
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
 	
 	var id = req.params.id;

 	vcard.forEach(function (entry){
 		if (entry.id == id) {

 			console.log('found!');

 			entry.name = req.query.name;
 			entry.tel = req.query.tel;
 		}
 	});
    res.end(); 
   
};


exports.delete = function(req, res){
	console.log(">>>>>>>>> delete");

	var id = req.params.id;

	var newvcard = [];
	vcard.forEach(function (entry) {
		
		if (entry.id !== id){
			newvcard.push(entry);
		}
	});
 	
 	vcard = newvcard;
    res.end();
   
};