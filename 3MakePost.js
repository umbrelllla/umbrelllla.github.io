javascript:(
	function() {
		function postmaker(title){
	        var d=window.open().document;
	        d.writeln('<h1>BJ POSTMAKER</h1><h2>タイトルをコピペしてください</h2><textarea id="html" rows=3 cols=80 onclick="this.select()">'+title+'</textarea><h2>検索向け説明を作成してください。</h2><textarea id="html" rows=3 cols=80 onclick="this.select()">フリー3DCGソフトBlender '+excerpt+'</textarea><script></script>');
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
		/*編集エリア内の要約(h3)取得*/
		var excerpt=doc.getElementsByTagName('h3')[0].innerText;
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

		/*カスタムパーマリンクからシリーズスラッグ、シリーズ数、現在のシリーズナンバー、投稿年月、取得*/
		var url = $('.GCUXF0KCCXB').text();
		/*ラベル取得*/
		var labels = $('.GCUXF0KCFWB').text()
		/*ラベルからバージョン取得*/
		var version=labels.match(/v\d+.\d+/);
var indexlink ='';

var sindex = '';
		/*シリーズ目次整形*/
		/*ラベルからシリーズ取得*/
		var isseries = labels.indexOf("シリーズ");
		if(isseries!=-1){


			/*series4-1*/
			var seriesno=url.match(/series\d+-\d+/);
			if(seriesno!=null){
					var sno=url.match(/\d+-\d+/);
					var seriesindex =sno[0].split('-');
					/*全インデックス数seriesindex[0]*/
					/*現在のインデックスNoseriesindex[1]*/
					/*sindex=seriesindex[2]+'/'+seriesindex[1];*/
					/*シリーズタイトル*/
					var seriestitle = title;
					/*タイトルにパート●つけて投稿タイトルとする*/
					title+=' パート'+seriesindex[1]+'/'+seriesindex[0];
					sindex += '<section class="seriesNote" id="seriesindex"><h4><small>シリーズ目次</small>' +seriestitle+'シリーズ 全'+seriesindex[0]+ 'パート</h4><ul>';
					for (i = 1; i <= seriesindex[0]; i++) {
    					if(i == seriesindex[1] ) {
		    				/*今ここ処理*/
		    				sindex += '<li>'+seriestitle+　' パート'+i+ '<span class="currentpart">今ここ</span></li>';
		    			}else{
		    				/*タイトルとリンク*/
		    				var baseurl = url.split('series');
		    				sindex += '<li><a href="'+ baseurl[0]+'series'+seriesindex[0]+'-'+i+'.html">'+seriestitle+　' パート'+i+ '</a></li>';
		    			}
					}
					/*シリーズ目次リンク*/
					indexlink = '<dt>シリーズ目次</dt><dd class="indexlink"><a href="'+url.replace('.html','')+'#seriesindex">'+seriestitle+'シリーズ</a></dd>';
					/*シリーズ目次*/
					sindex += '</ul></section>';
			}else{
					sindex= 'URLにシリーズ数が見つかりませんでした。すぐにリロードして修正してから実行してください';
					
					
				}

		}else{
			/*isseries==-1シリーズラベルが見つからなかった*/
		}
		/*feedから情報取得*/
		$.getJSON('http://gdata.youtube.com/feeds/api/videos/'+videoid[1]+'?alt=json&callback=?', function (json) {

			var intitle = '';
			var items = json.entry;
			/*$.each(items,function(i){*/
			/*動画再生時間*/
			var duration=items.media$group.media$content[0].duration;
			/*動画公開日*/
			var published=items.published.$t.split('T');
			var opendate = published[0].replace(/-/g, '/'); 
			/*});*/
			/*掲載元*/
			var author = items.author[0].name.$t;
			var source = '';
			switch (author){
			  	case 'CG Geek':
			    	source = 'https://plus.google.com/+BlenderSteVe/posts?pageId=104748838421935953944';
			    	break;
			  	case 'Blender Cookie':
			    	source = 'http://cgcookie.com/blender';
			    	break;
				case 'tutor4u':
					author ='LittleWebHut'
					source = 'http://www.littlewebhut.com/';
				    break;
				case 'Andrew Price':
					author ='blenderguru';
					source ='http://www.blenderguru.com/';
				    break;
				case 'The CG Ninja.com':
					author ='CG Ninja';
					source ='https://plus.google.com/109989866345856089685/videos?pageId=104748838421935953944';
				    break;
				case 'PigArt':
					source ='http://pigart.carbonmade.com/';
				    break;
				case 'Sardi Pax':
					source = 'https://plus.google.com/+SardiPax?pageId=104748838421935953944';
				    break;
				case 'Blender HD':
					source ='http://blenderhd.wordpress.com/';
				    break;
				case 'BlenderForNoobs':
					source ='http://www.blenderfornoobs.com/';
				    break;
				case 'Chris Wells':
					source ='http://forcemaster2000productions.blogspot.jp/';
				    break;
				case 'DesignCourse':
					source ='http://www.designcourse.com/';
				    break;
				case 'Gleb Alexandrov':
					author ='Creativeshrimp';
					source = 'http://www.creativeshrimp.com/';
				    break;
				case 'the d-dub show / ward7299':
					author ='David Allen Ward.com/';
					source = 'http://davidallenward.com/';
				    break;
				case 'Wireheadking':
					source ='https://plus.google.com/108727283914884796895/posts?pageId=104748838421935953944';
				    break;
				case '3D TUTS':
					source ='https://www.youtube.com/channel/UCrnR6OJym4Mpn2biOp4La5g';
				    break;
				case 'Blender Guyz':
					source ='http://www.blenderguyz.com/';
				    break;
				case 'Blender Nerd':
					source ='http://www.blendernerd.com/';
				    break;
				case 'BlenderDiplom':
					source ='http://www.blenderdiplom.com/en/';
				    break;
				case 'BlenderTalkies':
					source ='http://blendertalkies.blogspot.jp/';
				    break;
				case 'fermicg|FERMICG.NET':
					source ='http://www.fermicg.net/';
				    break;
				case 'FirechildVideo':
					source ='http://www.firechildvideo.blogspot.jp/';
				    break;
				case 'Jan-Eric Winkelmann':
					author ='Blender Club';
					source ='http://www.blenderclub.de/';
				    break;
				case 'Lone Hawk Studios':
					source ='https://plus.google.com/110820213737006273484?pageId=104748838421935953944';
				    break;
				case 'Lorenz Wieseke':
					source ='https://plus.google.com/114156987616685045817?pageId=104748838421935953944';
				    break;
				case 'Miguel Barroso':
					source ='https://plus.google.com/106199329412510995801?pageId=104748838421935953944';
				    break;
				case 'mjd9208':
					source ='https://plus.google.com/100248084662778930642/posts?pageId=104748838421935953944';
					break;
				case 'Oliver Villar':
					author ='blendtuts';
					source ='http://www.blendtuts.com/';
				    break;
				case 'Rob Tuytel':
					author ='BlenderPedia'
					source ='http://www.blenderpedia.com/';
				    break;
				case 'Smess Videos ²':
					source ='http://smess.com.br/';
				    break;
				default:
    				author= '<strong style="font-color:red;font-size:25px;">該当なし</strong>';
    				source = 'http://';
    				break;
			}


			/*html整形、youtube遅延ロード*/
			
			var html = '<div class="excerpt">'+excerpt+'</div><!--more--><div class="vrow"><div class="row"><div class="col-sm-12 col-md-8"><div class="js-lazyYT" data-youtube-id="'+videoid[1]+'" data-ratio="16:9"></div>\n</div><div class="col-sm-12 col-md-4"><dl><dt>掲載元</dt><dd class="source"><a href="'+source+'">'+author+'</a></dd><dt>動画再生時間</dt><dd>'+toHms(duration)+'</dd><dt>動画公開日</dt><dd>'+opendate+'</dd><dt>Blenderのバージョン</dt><dd><a dir="ltr" href="http://blenderj.blogspot.jp/search/label/'+version+'">'+version+'</a></dd>'+indexlink+'</dl></div></div></div><div class="clearfix"><div class="vthumbnails"><a href="http://img.youtube.com/vi/'+videoid[1]+'/hqdefault.jpg" imageanchor="1"><img class="postthum" src="http://img.youtube.com/vi/'+videoid[1]+'/mqdefault.jpg" /></a><div class="smallthumbs"><img src="http://img.youtube.com/vi/'+videoid[1]+'/1.jpg" /><img src="http://img.youtube.com/vi/'+videoid[1]+'/2.jpg" /><img src="http://img.youtube.com/vi/'+videoid[1]+'/3.jpg" /></div></div><div class="discription">'+discription+'<br /><ul class="timetable">'+list+'</ul></div></div>'+sindex;


			/*編集エリアの内容を差し替え*/
			doc.getElementById('postingComposeBox').innerHTML = html;

			/*タイトルコピペ用ウィンドウ開く*/
		    postmaker(title,excerpt);
		/*ここはできる*/
		});

	/*ここはじっこうできない*/
	}
/*ここはじっこうできない*/
)();

