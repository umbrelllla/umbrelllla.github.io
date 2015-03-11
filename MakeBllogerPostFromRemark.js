javascript:(
  function() {
    function postmaker(title,tag,version,videotitle,search_disc,commentlist){
          var d=window.open().document;
          d.writeln('<h1>BJ POSTMAKER</h1><h2>タイトルをコピペしてください</h2><textarea id="html" rows=2 cols=80 onclick="this.select()">'+title+'</textarea><h2>タグ</h2><textarea id="html" rows=2 cols=80 onclick="this.select()">'+tag+'</textarea><h2>バージョンをラベルに追加</h2><textarea id="html" rows=1 cols=20 onclick="this.select()">v'+version+'</textarea><h2>元のタイトルを参考にパーマリンクを作成</h2><textarea id="html" rows=2 cols=80 onclick="this.select()">'+videotitle+'</textarea><h2>検索向け説明</h2><textarea id="html" rows=5 cols=80 onclick="this.select()">'+search_disc+'</textarea><h2>本文</h2><textarea id="html" rows=30 cols=80 onclick="this.select()">'+commentlist+'</textarea><script></script>');

          d.close();
      }

/*ミリ秒取得関数*/
function hmsToSecondsOnly(str) {
    var p = str.split(':'),
        s = 0, m = 1;

    while (p.length > 0) {
        s += m * parseInt(p.pop(), 10);
        m *= 60;
    }

    return s;
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




/*空判定関数作成isEnpty*/
function isEmpty(val) {
if (!val) { // (1)
if (!((val === 0) || (val === false))) { // (2)
return true;
}
}
return false;
}
/*VideoID取得、youtubeURL作成*/
var videoid = $('#youtubePlayer').attr("data-video-id");
var videourl='https://www.youtube.com/watch?v='+videoid;

/*動画タイトル取得*/






    /*feedから情報取得*/


    $.getJSON('http://gdata.youtube.com/feeds/api/videos/'+videoid+'?alt=json&callback=?', function (json) {

      var items = json.entry;
      /*動画タイトル*/
      var videotitle=items.title.$t;
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
          /*ここからルームファン*/
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
          case 'omocha kodomo':
            source = 'https://plus.google.com/b/104748838421935953944/103964625543278581217/posts';
            break;
          case 'SoCraftastic':
            source = 'https://plus.google.com/b/104748838421935953944/+SoCraftastic/posts';
          case 'HANAYAMAchannel':
            source = 'http://www.hanayamatoys.co.jp/product/category/hobby/funloom/funloom_standard-set.html';
            break;
          default:
              author= '<strong style="font-color:red;font-size:25px;">該当なし</strong>';
              source = 'http://';
              break;
        }

      /*説明とタグ取得*/
      var info = $(".three-quarters").map(function(){
          return $(this).text().replace(/\s+/g, "");
      }).get();
      var discription= new Array();
      var version= new Array();
      if(info[0]){
        discription=info[3].split('tag');//タグと説明に分ける 
        version=discription[1].split('バージョン')//タグとバージョンに分ける　 説明=discription[0] タグ=version[0] バージョン=version[1]
      }else{

        alert('再読み込みしてからiをクリックしてインフォメーションパネルを表示して再実行ください');
      }
      /*説明=discription[0] タグ=version[0] バージョン=version[1]*/

      var tag = version[0];

      /*検索向け説明作成*/
      var search_disc ="フリー3DCGソフトBlender "+discription[0] + "動画チュートリアル |BlenderSketch";
      /*タイトル取得*/
      var title = $('title').text().split(" |");
          /*コメントとタイムスタンプを配列で取得*/
          var commentlist = "";
          var comments= new Array();
          var timestamps = new Array();

          $(".comment").map(function(){
            comments.push($(this).children(".transcription").text());
            timestamps.push($(this).find(".comment-timestamp").text());
          }).get();

          /*コメントとタイムスタンプのhtml作成*/
          comments.reverse();//逆順に並び替え
          timestamps.reverse();//逆順に並び替え

/*HTML作成*/
var blender_v = "";

if(version[1]){
blender_v='<li class="version">Blenderのバージョン<a dir="ltr" href="http://blendersketch.blogspot.jp/search/label/v'+version[1]+'">v'+version[1]+'</a></li>';
}

commentlist = '<div class="vrow"><div class="row capter"><div class="col-sm-12 col-md-7"><div id="playerbox"><div id="player" data-play="'+videoid+'">動画を読み込んでいます......<!-- 動画プレーヤーの埋め込み --></div></div><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- BlenderSketch記事中 --><ins class="adsbygoogle" data-ad-client="ca-pub-1725391124304964" data-ad-format="auto" data-ad-slot="5197251768" style="display: block;"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script><div class="excerpt">'+discription[0]+'<!--more--><ul class="info"><li title="掲載元"><i class="fa fa-external-link"></i><a class="source" href="'+source+'">'+author+'</a></li><li title="動画再生時間"><i class="fa fa-clock-o"></i>'+toHms(duration)+'</li><li title="動画公開日"><i class="fa fa-calendar"></i>'+opendate+'</li>'+blender_v+'</ul></div></div><div class="col-sm-12 col-md-5 pull-right"><ul class="timetable"><li class="listhead">チャプターリスト(クリックでシーク再生)</li>';
          for (i = 0; i < comments.length; i++) {
              var li=comments[i].replace(/\s+/g, "");
              if(li) {
                commentlist += '<li class="subject" data-seconds="'+hmsToSecondsOnly(timestamps[i])+'"><span>'+timestamps[i]+'</span>'+li+'</li>';
              }
          }
          commentlist+='</ul></div></div></div><div class="vthumbnails"><a href="http://img.youtube.com/vi/"'+videoid+'/hqdefault.jpg" imageanchor="1"><img class="postthum" src="http://img.youtube.com/vi/'+videoid+'/mqdefault.jpg" /></a><br /><div class="smallthumbs"><img src="http://img.youtube.com/vi/'+videoid+'/1.jpg" /><img src="http://img.youtube.com/vi/'+videoid+'/2.jpg" /><img src="http://img.youtube.com/vi/'+videoid+'/3.jpg" /></div></div>';
      postmaker(title[0],tag,version[1],videotitle,search_disc,commentlist);
          /*ここはできる*/
 
    /*ここはできる*/
    });

  }
/*ここはじっこうできない*/
)();

