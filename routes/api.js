
var calledTime = 0;
exports.index = function(req, res){
	calledTime += 1;
	var obj={
    	
		"Server":"Joyce's Server",
    	"Time":new Date().toISOString(),
    	"Count":calledTime

        };

    res.send(obj);
};

