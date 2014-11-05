javascript:(
	function(){
	    function o(s){
	        var d=window.open().document;
	        d.writeln('<textarea rows=15 cols=80>videoID='+s+'</textarea>');
	        d.close()
	    }

var videoID = $("#1196749 div div div p span").text();

	    var contents=videoID;
	    o(contents);
	}
)();

