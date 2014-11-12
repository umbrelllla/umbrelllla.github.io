javascript:(
	function() {
		function postmaker(title){
	        var d=window.open().document;
	        d.writeln('<h1>BJ POSTMAKER</h1><h2>タイトルをコピペしてください</h2><textarea id="html" rows=3 cols=80 onclick="this.select()">'+title+'</textarea><script></script>');
	        d.close();
	    }
	    /**
		 * ミリ秒を時分秒へ変換
		 * ms ミリ秒
		 */
function toHms(t) {
	var hms = "";
	var h = t / 3600 | 0;
	var m = t % 3600 / 60 | 0;
	var s = t % 60;

	if (h != 0) {
		hms = h + "時間" + padZero(m) + "分" + padZero(s) + "秒";
	} else if (m != 0) {
		hms = m + "分" + padZero(s) + "秒";
	} else {
		hms = s + "秒";
	}

	return hms;

	function padZero(v) {
		if (v < 10) {
			return "0" + v;
		} else {
			return v;
		}
	}
}

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
		var lists=lis.innerHTML.split('\n');
		var list = '';
		/*初期値だったら削除*/
		for (i = 0; i < lists.length; i++) {
    		if(lists[i].indexOf("タイムテーブル")==-1) {

		    	list +=lists[i];
		    }
		}







			/*html整形、youtube遅延ロード*/
			
			var html = '<div class="vrow"><div class="row"><div class="col-sm-12 col-md-8"><div class="js-lazyYT" data-youtube-id="'+videoid[1]+'" data-ratio="16:9"></div>\n</div><div class="col-sm-12 col-md-4"><dl><dt>掲載元</dt><dd class="source"><a href="'+source+'">'+author+'</a></dd><dt>動画再生時間</dt><dd>'+toHms(duration)+'</dd><dt>動画公開日</dt><dd>'+opendate+'</dd><dt>バージョン</dt><dd><a dir="ltr" href="http://blenderj.blogspot.jp/search/label/'+version+'">'+version+'</a></dd></dl></div></div></div><div class="discription clearfix"><div class="pull-right"><a href="http://img.youtube.com/vi/'+videoid[1]+'/hqdefault.jpg" imageanchor="1"><img class="postthum" src="http://img.youtube.com/vi/'+videoid[1]+'/mqdefault.jpg" /></a><div class="smallthumbs"><img src="http://img.youtube.com/vi/'+videoid[1]+'/1.jpg" /><img src="http://img.youtube.com/vi/'+videoid[1]+'/2.jpg" /><img src="http://img.youtube.com/vi/'+videoid[1]+'/3.jpg" /></div></div>'+discription+'<br /><!--more--><ul class="timetable">'+list+'</ul></div>'+sindex;


			/*編集エリアの内容を差し替え*/
			doc.getElementById('postingComposeBox').innerHTML = html;


	/*ここはじっこうできない*/
	}
/*ここはじっこうできない*/
)();

