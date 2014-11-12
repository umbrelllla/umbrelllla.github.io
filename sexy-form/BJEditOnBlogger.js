javascript:(
	function() {
		function postmaker(html){
	        var d=window.open().document;
	        d.writeln('<h1>BJ POSTMAKER</h1><h2>投稿HTML</h2>'+html+'<ul><li>説明を入力</li><li>その他のラベルを動画を見ながら設定</li><li>タイムテーブルを記入</li><li>タイトルをコピペ</li><li>スケジュール投稿を設定</li></ul><script></script>');
	        d.close();

	    }
		/*編集画面で実行すること*/
			/*var html = $('.post-body iframe').attr('src');*/
			/*ビジュアルエディタの横幅を広く*/
			$('#postingComposeBox').css({'width':'100%', 'max-width':'100%'});
			/*ラベルを大きく*/
 	   		var style = '<style type="text/css">.GCUXF0KCCWB span{display:none;}.GCUXF0KCCWB a{display:block;font-weight:bold;font-size:120%;line-height:1.3;border-bottom:1px solid #999;}.GCUXF0KCCWB{max-height:none;overflow-y:visible}</style>';
    		$(style).appendTo('head');
 			/*ビジュアル編集エリアの横幅を広く*/
			$('#postingComposeBox').css({'width':'100%', 'max-width':'100%'});


			/*iframeのdocumentを取得する*/
			var doc = $('#postingComposeBox').get(0).contentDocument;
			/*埋め込み動画のURL取得 URLからVideoID取得*/
			var videoid=doc.getElementsByTagName('iframe')[0].getAttribute('src').split('embed/');

			/*編集エリア内のタイトル(h2)取得*/
			var title=doc.getElementsByTagName('h2')[0];

			/*カスタムパーマリンクからシリーズスラッグ、シリーズ数、現在のシリーズナンバー、投稿年月、取得*/

			/*ラベルからバージョン取得*/

			
			
			/*html整形*/
			var html = '<div class="js-lazyYT" data-youtube-id="'+videoid[1]+'" data-ratio="16:9"></div>';


			/*編集エリアの内容を差し替え*/
			doc.getElementById('postingComposeBox').innerHTML = html;



			/*新しいウィンドウで表示する動画*/
			var tv = '<iframe allowfullscreen frameborder="0" src="https://www.youtube.com/embed/'+videoid[1]+'"></iframe>';
			postmaker(tv);

	}
/*ここはじっこうできない*/
)();

