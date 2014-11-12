javascript:(
	function() {
		function postmaker(html){
	        var d=window.open().document;
	        d.writeln('<h1>BJ POSTMAKER</h1><h2>タイトルをコピペしてください</h2><textarea id="html" rows=3 cols=80 onclick="this.select()">'+title+'</textarea><script></script>');
	        d.close();
/*	        popw = window.open('https://draft.blogger.com/blogger.g?blogID=5051161372427020341#editor/src=sidebar','bloggerForm','scrollbars=yes,width=600,height=800,top=0,right=0,status=yes,resizable=yes');

			if (!document.all) T = setTimeout('popw.focus()',50);
			void(0);*/
	    }

		$.getJSON('http://gdata.youtube.com/feeds/api/videos/pzkUtLqYA2M?alt=json&callback=?', function (json) {


			/*iframeのdocument（コンテンツ編集テキストエリア）を取得する*/
			var doc = $('#postingComposeBox').get(0).contentDocument;
			/*埋め込み動画のURL取得 URLからVideoID取得*/
			var videoid=doc.getElementsByTagName('iframe')[0].getAttribute('src').split('embed/');
			/*編集エリア内のタイトル(h2)取得*/
			var title=doc.getElementsByTagName('h2')[0].innerText;
			/*編集エリア内の説明(h4)取得*/
			var discription=doc.getElementsByTagName('h4')[0].innerText;
			/*編集エリア内のタイムテーブル(ul)取得*/
			var lis = doc.getElementsByTagName('ul')[0];
			/*カスタムパーマリンクからシリーズスラッグ、シリーズ数、現在のシリーズナンバー、投稿年月、取得*/
			var url = $('.GCUXF0KCCXB').text();
			/*ラベル取得*/
			var labels = $('.GCUXF0KCFWB').text()
			/*ラベルからバージョン取得*/
			var version=labels.match(/v\d+.\d+/);

			/*シリーズ目次整形*/
			/*ラベルからシリーズ取得*/
			var series = labels.indexOf("シリーズ");
			if(series!=-1){
				var isseries="シリーズ投稿です";
			}else{
				var isseries="シリーズ投稿ではない";
			}





/*feedから情報取得*/
			var intitle = '';
			var items = json.entry;
			/*$.each(items,function(i){*/
				var published=items.published.$t;
			/*});*/
			var opendate = '動画公開日'+ published + '\n';



/*html整形、youtube遅延ロード*/
			var html = '<div class="js-lazyYT" data-youtube-id="'+videoid[1]+'" data-ratio="16:9"></div>\n'+discription+'<ul>'+lis.innerHTML+'</ul>\n<h1>'+url+'</h1>\n<h1>バージョン＝'+version+'</h1>\n<h1>シリーズ＝'+isseries+'</h1>\n<h1>公開日='+opendate+'</h1>\n';


			/*編集エリアの内容を差し替え*/
			doc.getElementById('postingComposeBox').innerHTML = html;
















		    postmaker(title);
		/*ここはできる*/
		});

	/*ここはじっこうできない*/
	}
/*ここはじっこうできない*/
)();

