javascript:(
	function() {
		function postmaker(title){
	        var d=window.open("", "", "width=600,height=800").document;
	        d.writeln('<h1>BJ POSTMAKER</h1><h2>タイトルをコピペしてください</h2><textarea id="html" rows=3 cols=80 onclick="this.select()">'+title+'</textarea><h2>検索向け説明を作成してください。</h2><textarea id="html" rows=3 cols=80 onclick="this.select()">レインボールーム、モンスターテイル '+excerpt+'</textarea><script></script>');
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
		var title=doc.getElementsByTagName('h1')[0].innerText;
		/*編集エリア内の要約(h2)取得*/
		var excerpt=doc.getElementsByTagName('h2')[0].innerText;
		/*使用バンドカラー(h3)取得*/
		/*var color=doc.getElementsByTagName('h3')[0].innerText;*/
		/*使用道具(h4)取得*/
		var loom=doc.getElementsByTagName('h4')[0].innerText;
		/*編集エリア内の説明(h4)取得*/
		var discription=doc.getElementsByTagName('h5')[0].innerText;
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


		/*feedから情報取得*/
		$.getJSON('http://gdata.youtube.com/feeds/api/videos/'+videoid[1]+'?alt=json&callback=?', function (json) {

			var intitle = '';
			var items = json.entry;
			/*$.each(items,function(i){*/
			/*動画再生時間*/
			var duration=items.media$group.media$content[0].duration;
			/*});*/
			/*掲載元*/
			var author = items.author[0].name.$t;
			var source = '';
			switch (author){
			  	case 'kyoko miha':
			    	source = 'https://plus.google.com/b/104748838421935953944/+hoopryu/posts';
			    	break;
			  	case 'rainbowfamily':
			    	source = 'http://rainbowfamilyfl.blogspot.jp/';
			    	break;
			    case 'Owl Boston':
			    	source = 'https://plus.google.com/b/104748838421935953944/104198179076046786653/posts';
			    	break;
			    case 'yuimokatime':
			    	source = 'https://plus.google.com/b/104748838421935953944/114716508116808645650/videos';
			    	break;
			    case 'Rainbow Loom Class':
			    	source = 'https://plus.google.com/b/104748838421935953944/101807730353409497442/videos';
			    	break;
			    case 'Esha NY':
			    	source = 'https://plus.google.com/b/104748838421935953944/116636335248417916556/posts';
			    	break;
			    case 'ponko':
			    	source = 'https://plus.google.com/b/104748838421935953944/103714660009910891892/videos';
			    	break;
			    case 'NOSUKAPI':
			    	source = 'https://plus.google.com/b/104748838421935953944/111066050127520161258/posts';
			    	break;
			    case 'YarnJourney':
			    	source = 'https://plus.google.com/b/104748838421935953944/100692146962505222069/videos';
			    	break;
			    case 'Emily Hill':
			    	source = 'https://plus.google.com/b/104748838421935953944/109979005126335862758/posts';
			    	break;
			    case 'jordantine1':
			    	source = 'https://plus.google.com/b/104748838421935953944/+jordantine1/posts';
			    	break;
			    case 'Eveline Maureen':
			    	source = 'https://plus.google.com/u/0/b/104748838421935953944/111520522503187564504/posts';
			    	break;
			    case 'Nina Houston':
			    	source = 'https://plus.google.com/u/0/b/104748838421935953944/101623774392045035213/posts';
			    	break;
			    case 'OLGACRAFTS':
			    	source = 'https://plus.google.com/u/0/b/104748838421935953944/+OLGACRAFTS/posts';
			    	break;
			    case 'cr3stina':
			    	source = 'http://le-cr3azioni-di-cr3stina.blogspot.jp/';
			    	break;
			    case 'Made By Mommy':
			    	source = 'https://plus.google.com/b/104748838421935953944/+Madebymommy/posts';
			    	break;
			    case 'DIY Mommy':
			    	source = 'https://plus.google.com/b/104748838421935953944/100882864904587889310/videos';
			    	break;
			    case 'Elegant Fashion 360':
			    	source = 'https://plus.google.com/b/104748838421935953944/+Elegantfashion360/posts';
			    	break;
			    case 'MesPetitsBonheurs':
			    	source = 'http://www.mespetitsbonheurs.com/';
			    	break;
			    case 'Rainbow Loom International by DIY Mommy':
			    	source = 'http://instagram.com/_diymommy_';
			    	break;
			    case 'Lovely Lovebird Designs':
			    	source = 'https://plus.google.com/b/104748838421935953944/102213480554346921974/posts';
			    	break;
			    case 'maynterest':
			    	source = 'https://plus.google.com/b/104748838421935953944/+maynterest/posts';
			    	break;
			    case 'Kinder Stories':
			    	source = 'https://plus.google.com/b/104748838421935953944/106675703498153475369/posts';
			    	break;
			    case 'Angèle & Compagnie':
			    	source = 'https://plus.google.com/b/104748838421935953944/108839542350498866503/videos';
			    	break;
			    case 'feelinspiffy':
			    	source = 'http://craftingfantastic.blogspot.jp/';
			    	break
			    case 'Rainbow Loom Anleitungen':
			    	source = 'https://plus.google.com/b/104748838421935953944/105611730145821384446/posts';
			    	break;
			    case 'Loopy Looms':
			    	source = 'https://plus.google.com/b/104748838421935953944/107221361640339096806/posts';
			    	break;
			    case 'TheParentingChannel':
			    	source = 'http://www.theparentingchannel.net/';
			    	break;
			    case 'Kate Schultz':
			    	source = 'http://www.izzalicious.com/wp/';
			    	break;
			    case 'Loves2Loom':
			    	source = 'https://plus.google.com/b/104748838421935953944/105897107247944784176/posts';
			    	break;
 			    case 'Chodaro':
			    	source = 'http://www.pinterest.com/chodaro/personal-rainbow-loom-braceletcharm-collection/';
			    	break;
 			    case 'Rainbow Loom France Pam':
			    	source = 'https://plus.google.com/b/104748838421935953944/103009732866525460607/posts';
			    	break;
 			    case 'Vixxstarr':
			    	source = 'https://plus.google.com/b/104748838421935953944/101351808683264151882/posts';
			    	break;
 			    case 'MeisjeDjamila':
			    	source = 'https://plus.google.com/b/104748838421935953944/+MeisjeDjamila/posts';
			    	break;
 			    case 'Walter Schmied':
			    	source = 'https://plus.google.com/b/104748838421935953944/115042602507687129540/posts';
			    	break;
 			    case 'Youtube Rainbow':
			    	source = 'https://plus.google.com/b/104748838421935953944/114720807450202558485/videos';
			    	break;
 			    case 'webkinzfun99':
			    	source = 'http://www.moshimonsters.com/monsters/webkinzfun99';
			    	break;
 			    case 'Hannah bean':
			    	source = 'https://plus.google.com/b/104748838421935953944/114781643382168994592/posts';
			    	break;
			    case 'Claire\'s Wears':
			    	source = 'https://www.etsy.com/shop/LordoftheLooms?ref=shop_sugg';
			    	break;			    		
			    case 'Justin\'s Toys - Rainbow Loom Bracelet Tutorials':
			    	source = 'https://plus.google.com/b/104748838421935953944/+justinstoys/posts';
			    	break;
 			    case 'Lauren\'s Loom':
			    	source = 'https://plus.google.com/b/104748838421935953944/117633863171237482331/posts';
			    	break;
				default:
    				author= '<strong style="font-color:red;font-size:25px;">該当なし</strong>';
    				source = 'http://';
    				break;
			}


			/*html整形、youtube遅延ロード*/
			
			var html = '<div class="excerpt">'+excerpt+'</div><!--more--><div class="vrow"><div class="row"><div class="col-sm-12 col-md-8"><div class="js-lazyYT" data-youtube-id="'+videoid[1]+'" data-ratio="16:9"></div>\n</div><div class="col-sm-12 col-md-4"><dl><dt>掲載元</dt><dd class="source"><a href="'+source+'">'+author+'</a></dd><dt>動画再生時間</dt><dd>'+toHms(duration)+'</dd><dt>使用する道具</dt><dd>'+loom+'</dd></dl></div></div></div><div class="clearfix"><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- BlenderSketch記事中 --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1725391124304964" data-ad-slot="5197251768" data-ad-format="auto"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script><div class="vthumbnails"><a href="http://img.youtube.com/vi/'+videoid[1]+'/hqdefault.jpg" imageanchor="1"><img class="postthum" src="http://img.youtube.com/vi/'+videoid[1]+'/mqdefault.jpg" /></a><div class="smallthumbs"><img src="http://img.youtube.com/vi/'+videoid[1]+'/1.jpg" /><img src="http://img.youtube.com/vi/'+videoid[1]+'/2.jpg" /><img src="http://img.youtube.com/vi/'+videoid[1]+'/3.jpg" /></div></div><div class="discription">'+discription+'<br /><ul class="timetable">'+list+'</ul></div></div>';


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

