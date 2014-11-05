javascript:(
	function() {
		function postmaker(html){
	        var d=window.open().document;
	        d.writeln('<h1>BJ POSTMAKER</h1><h2>投稿HTML</h2><textarea id="html" rows=20 cols=80 onclick="this.select()">'+html+'</textarea><script></script>');
	        d.close();
/*	        popw = window.open('https://draft.blogger.com/blogger.g?blogID=5051161372427020341#editor/src=sidebar','bloggerForm','scrollbars=yes,width=600,height=800,top=0,right=0,status=yes,resizable=yes');

			if (!document.all) T = setTimeout('popw.focus()',50);
			void(0);*/
	    }
		$.getJSON('http://gdata.youtube.com/feeds/api/videos/pzkUtLqYA2M?alt=json&callback=?', function (json) {
			var intitle = '';
			var items = json.entry;
			/*$.each(items,function(i){*/
				var published=items.published.$t;
			/*});*/
			var html = '動画公開日'+ published + '\n';
		    postmaker(html);
		/*ここはできる*/
		});
	/*ここはじっこうできない*/
	}
/*ここはじっこうできない*/
)();

