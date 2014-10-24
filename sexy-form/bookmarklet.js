javascript:(
	function(){
	    function createPost(s){
	        var d=window.open().document;
	        d.writeln('<textarea rows=15 cols=80>'+s+'</textarea>');
	        d.close()
	    }
	    var VID=$("#name").val();
		if($("#site").val()==""){
	    	var source=$("#source").val();
	    }else{
			var source=$("#site").val();
	    }
	    var sourceurl=$("#sourceurl").val();
	    var hour=$("#hour").val();
	    var minuts=$("#minuts").val();
	    var seconds=$("#seconds").val();
	    var ver=$("#ver").val();
	    var hd=$("#hd").val();
	    var disc=$("#disc").val();
	    var area = $('[class="area"]:checked').map(
	    	function(){
  			return $(this).val();
			}).get().join(',');
var komo ="<div>";

	$("#mokujiTable tbody > tr").map(function() {		
	  komo+= $(this).find('input.hourtd').val();
	  komo+=":";
	  komo+= $(this).find('input.minutstd').val();
	  komo+=":";
	  komo+= $(this).find('input.secondtd').val();
	  komo+= $(this).find('textarea.disctd').val();

	});
	komo +="</div>";

	    var contents='VideoID='+VID+' | source='+source+' | sourceurl='+sourceurl+' | hour='+hour+' | minuts='+minuts+' | seconds='+seconds+' | version='+ver+' | 画質='+hd+' | 説明='+disc+' | ラベル='+area+' |項目 '+komo;
	    createPost(contents);
	}
)();







/*'<div class="vrow"><div class="row"><div class="col-sm-12 col-md-8"><div class="js-lazyYT" data-ratio="16:9" data-youtube-id="'+VID+'"></div></div><div class="col-sm-12 col-md-4">
<dl>
<dt>掲載元</dt>
<dd class="source"><a href="'+sourceurl+'">'+source+'</a></dd><dt>動画再生時間</dt>
<dd>16分35秒</dd>
<dt>動画公開日</dt>
<dd>2013/12/30</dd>
<dt>バージョン</dt>
<dd><a dir="ltr" href="http://blenderj.blogspot.jp/search/label/v2.75">v2.75</a></dd>
<dt>画質</dt>
<dd><a dir="ltr" href="http://blenderj.blogspot.jp/search/label/FullHD">FullHD</a></dl>
</div>
</div>
</div>
<a href="http://img.youtube.com/vi/LaF8tTnKWUU/hqdefault.jpg" imageanchor="1" class="pull-right"><img border="0" src="http://img.youtube.com/vi/LaF8tTnKWUU/mqdefault.jpg" /></a>
<p>
山々に囲まれた自然景観を作成するチュートリアル。</p>
<!--more-->

<ul class="timetable">
<li><span class="time">00:02:09</span> ant landscapeを使用した地形を作成。</li>
<li><span class="time">00:05:00</span> 地形のUVマッピングと地形のマテリアル設定</li>
<li><span class="time">00:08:20</span> 地形のテクスチャペイント</li>
<li><span class="time">00:27:10</span> 水面を作成</li>
<li><span class="time">00:30:07</span> 木を作成。　パーティクルシステムで地形に木を配置。</li>
<li><span class="time">00:36:30</span> 草を作成。　パーティクルシステムで地形に配置。</li>
<li><span class="time">00:40:50</span> ライティング</li>
<li><span class="time">00:42:50</span> スカルプト機能で岩を作成。</li>
<li><span class="time">00:54:30</span> コンポジット</li>
</ul>*/
