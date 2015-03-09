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
commentlist = '<div class="vrow"><div class="row capter"><div class="col-sm-12 col-md-7"><div id="playerbox"><div id="player" data-play="'+videoid+'"><!-- 動画プレーヤーの埋め込み --></div></div><div class="excerpt">'+discription[0]+'<!--more--><ul class="info"><li><i class="fa fa-external-link"></i><a class="source" href="'+source+'">'+author+'</a></li><li><i class="fa fa-clock-o"></i>'+toHms(duration)+'</li><li><i class="fa fa-calendar"></i>'+opendate+'</li><li class="version">Blenderのバージョン<a dir="ltr" href="http://blendersketch.blogspot.jp/search/label/v'+version[1]+'">v'+version[1]+'</a></li></ul></div></div><div class="col-sm-12 col-md-5 pull-right"><ul class="timetable"><li class="listhead">チャプターリスト(クリックでシーク再生)</li>';
          for (i = 0; i < comments.length; i++) {
              var li=comments[i].replace(/\s+/g, "");
              if(li) {
                commentlist += '<li class="subject" data-seconds="'+hmsToSecondsOnly(timestamps[i])+'"><span>'+timestamps[i]+'</span>'+li+'</li>';
              }
          }
          commentlist+='</ul></div></div></div><div class="vthumbnails"><a href="http://img.youtube.com/vi/"'+videoid+'/hqdefault.jpg" imageanchor="1"><img class="postthum" src="http://img.youtube.com/vi/'+videoid+'/mqdefault.jpg" /></a><br /><div class="smallthumbs"><img src="http://img.youtube.com/vi/'+videoid+'/1.jpg" /><img src="http://img.youtube.com/vi/'+videoid+'/2.jpg" /><img src="http://img.youtube.com/vi/'+videoid+'/3.jpg" /></div></div>\n\n<div class="discription">追加の説明があれば記入</div><br /><div class="clearfix"><script async="" src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- BlenderSketch記事中 --><br /><ins class="adsbygoogle" data-ad-client="ca-pub-1725391124304964" data-ad-format="auto" data-ad-slot="5197251768" style="display: block;"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script><br /></div>';
      postmaker(title[0],tag,version[1],videotitle,search_disc,commentlist);
          /*ここはできる*/
 
    /*ここはできる*/
    });















  }
/*ここはじっこうできない*/
)();

