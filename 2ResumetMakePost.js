javascript:(
	function() {
		function postmaker(videoFrame){
	        var d=window.open("", "", "width=600,height=800").document;
	        d.writeln('<h1>BJ POSTMAKER</h1><h2>投稿再開</h2>'+videoFrame+'<ol style="font-weight:bold;font-size:18px;line-height:2;"><li><input type="checkbox" name="1" value="1">ラベルでバージョンとシリーズの場合はシリーズ選択してください。</li><li><input type="checkbox" name="1" value="1">説明とタイムテーブルを作成しつつ、ラベルを決める。</li><li><input type="checkbox" name="1" value="1">タイトルを作成（シリーズ投稿の場合パートNOなし）</li><li><input type="checkbox" name="1" value="1">カスタムパーマリンクを設定して下さい。シリーズ投稿の場合は【シリーズスラッグseries全シリーズ数-シリーズNO】とする(low-polytrex-series4-1)</li><li><input type="checkbox" name="1" value="1">スケジュール投稿を設定</li><li><input type="checkbox" name="1" value="1">仕上げブックマークレットで体裁を整え、別窓に開いたタイトルをコピペして完了</li></ol><script></script>');
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



			/*新しいウィンドウで表示する動画*/
			var videoFrame = '<iframe allowfullscreen width="560" height="315" frameborder="0" src="https://www.youtube.com/embed/'+videoid[1]+'"></iframe>';
			postmaker(videoFrame);

	}
/*ここはじっこうできない*/
)();