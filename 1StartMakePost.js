javascript:(
	function() {
		function postmaker(videoFrame){
	        var d=window.open("", "", "width=600,height=800").document;
	        d.writeln('<h1>BJ POSTMAKER</h1><h2>投稿開始</h2>'+videoFrame+'<ol style="font-weight:bold;font-size:18px;line-height:2;"><li><input type="checkbox" name="1" value="1">ラベルでバージョンとシリーズの場合はシリーズ選択してください。</li><li><input type="checkbox" name="1" value="1">要約を作成。40字程度、検索向けmetaタグにも使用します。</li><li><input type="checkbox" name="1" value="1">説明とタイムテーブルを作成しつつ、ラベルを決める。</li><li><input type="checkbox" name="1" value="1">タイトルを作成（シリーズ投稿の場合パートNOなし）</li><li><input type="checkbox" name="1" value="1">カスタムパーマリンクを設定して下さい。シリーズ投稿の場合は【シリーズスラッグseries全シリーズ数-シリーズNO】とする(low-polytrex-series4-1)</li><li><input type="checkbox" name="1" value="1">スケジュール投稿を設定</li><li><input type="checkbox" name="1" value="1">仕上げブックマークレットで体裁を整え、別窓に開いたタイトルをコピペして完了</li></ol><script></script>');
	        d.close();


	    }
		/*編集画面で実行すること*/
			/*var html = $('.post-body iframe').attr('src');*/
			/*ビジュアルエディタの横幅を広く*/
			$('#postingComposeBox').css({'width':'100%', 'max-width':'100%'});
			/*ラベルを大きく*/
 	   		var style = '<style type="text/css">.GCUXF0KCCWB span{display:none;}.GCUXF0KCCWB a{display:block;font-weight:bold;font-size:120%;line-height:1.8;border-bottom:1px solid #999;}.GCUXF0KCCWB{max-height:none;overflow-y:visible}</style>';
    		$(style).appendTo('head');
 			/*ビジュアル編集エリアの横幅を広く*/
			$('#postingComposeBox').css({'width':'100%', 'max-width':'100%'});


			/*iframeのdocumentを取得する*/
			var doc = $('#postingComposeBox').get(0).contentDocument;
			/*埋め込み動画のURL取得 URLからVideoID取得*/
			var videoid=doc.getElementsByTagName('iframe')[0].getAttribute('src').split('embed/');




			/*テンプレートhtml整形（youtube遅延ロードと初期テンプレート）*/
			var html = '<iframe allowfullscreen="" frameborder="0" height="270" src="https://www.youtube.com/embed/'+videoid[1]+'" width="480"></iframe><br />\n\n<h2>タイトル</h2>\n\n<h3>要約</h3>\n\n<h4>説明</h4>\n\n<ul>\n<li><span style="color: #666666;">00:00:00</span>タイムテーブル</li>\n<li><span style="color: #666666;">00:00:00</span>タイムテーブル</li>\n<li><span style="color: #666666;">00:00:00</span>タイムテーブル</li>\n<li><span style="color: #666666;">00:00:00</span>タイムテーブル</li>\n<li><span style="color: #666666;">00:00:00</span>タイムテーブル</li>\n<li><span style="color: #666666;">00:00:00</span>タイムテーブル</li>\n<li><span style="color: #666666;">00:00:00</span>タイムテーブル</li>\n<li><span style="color: #666666;">00:00:00</span>タイムテーブル</li>\n<li><span style="color: #666666;">00:00:00</span>タイムテーブル</li>\n<li><span style="color: #666666;">00:00:00</span>タイムテーブル</li>\n<li><span style="color: #666666;">00:00:00</span>タイムテーブル</li>\n<li><span style="color: #666666;">00:00:00</span>タイムテーブル</li>\n<li><span style="color: #666666;">00:00:00</span>タイムテーブル</li>\n<li><span style="color: #666666;">00:00:00</span>タイムテーブル</li>\n<li><span style="color: #666666;">00:00:00</span>タイムテーブル</li>\n</ul>';


			/*編集エリアの内容を差し替え*/
			doc.getElementById('postingComposeBox').innerHTML = html;




			/*新しいウィンドウで表示する動画*/
			var videoFrame = '<div class="youtube-container" style="position:relative;padding-bottom: 56.25%;padding-top:30px;height:0;overflow:hidden;"><iframe allowfullscreen width="560" height="315" frameborder="0" src="https://www.youtube.com/embed/'+videoid[1]+'" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>';
			postmaker(videoFrame);

	}
/*ここはじっこうできない*/
)();