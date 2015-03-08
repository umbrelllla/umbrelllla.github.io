javascript:(
  function() {
    function postmaker(title,commentlist){
          var d=window.open().document;
          d.writeln('<h1>BJ POSTMAKER</h1><h2>タイトルをコピペしてください</h2><textarea id="html" rows=2 cols=80 onclick="this.select()">'+title+'</textarea><textarea id="html" rows=3 cols=80 onclick="this.select()">'+commentlist+'</textarea><script></script>');

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
var videourl='https://www.youtube.com/watch?v='+$('#youtubePlayer').attr("data-video-id");

/*動画タイトル取得*/

/*説明取得*/



/*タイトル取得*/
var title = $('title').text();
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

    commentlist+="<ul>"
    for (i = 0; i < comments.length; i++) {
        var li=comments[i].replace(/\s+/g, "");
        if(li) {
          commentlist += '<li>';
          commentlist += "【"+hmsToSecondsOnly(timestamps[i])+"】";//タイムスタンプミリ秒取得
          commentlist +=timestamps[i];
          commentlist+=li;
          commentlist += '</li>';       
        }
    }
    commentlist+="</ul>";
postmaker(title,commentlist);
    /*ここはできる*/

  }
/*ここはじっこうできない*/
)();

