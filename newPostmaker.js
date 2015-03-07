javascript:(
  function() {
    function postmaker(commentlist){
          var d=window.open().document;
          d.writeln('<h1>BJ POSTMAKER</h1><h2>タイトルをコピペしてください</h2><textarea id="html" rows=3 cols=80 onclick="this.select()">'+commentlist+'</textarea><script></script>');

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
/*VideoID取得*/
/*タイトル取得*/

/*コメントリスト取得*/
var comment= $('.transcription').text();
/*タイムスタンプ取得*/
var timestamp=$('.comment-timestamp').text();

var comments=comment.split('\n');
var commentlist="<ul>";
/*空だったら削除*/
    for (i = 0; i < comments.length; i++) {
        var li=comments[i].replace(/\s+/g, "");
        if(li) {
          commentlist += '<li>';
          commentlist+=li;
          commentlist += '</li>';       
        }
    }
    commentlist+="</ul>"
postmaker(commentlist);
    /*ここはできる*/

  }
/*ここはじっこうできない*/
)();

