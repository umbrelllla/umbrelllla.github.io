javascript:(
	function(){
	    function postmaker(html){
	        var d=window.open().document;
	        d.writeln('<h1>BJ POSTMAKER</h1><h2>投稿HTML</h2><textarea id="html" rows=20 cols=80 onclick="this.select()">'+html+'</textarea><script></script>');
	        d.close();
	    }

	    

	var url = location.href.split('?v=');/*URLからVideoID*/
	var opendate = $("#watch-uploader-info strong").text().split('に');/*公開日*/


		var html='VideoID='+url[1]+'\n動画公開日='+opendate[0]+'\n';
		postmaker(html);
	}
)();
