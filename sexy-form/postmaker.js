javascript:(
	function(){
	    function postmaker(title,label,html){
	        var d=window.open().document;
	        d.writeln('<h1>BJ POSTMAKER</h1><h2>タイトル</h2><textarea id="title" rows=3 cols=80 onclick="this.select()">'+title+'</textarea><h2>ラベル</h2><textarea id="label" rows=5 cols=80 onclick="this.select()">'+label+'</textarea><h2>投稿HTML</h2><textarea id="html" rows=20 cols=80 onclick="this.select()">'+html+'</textarea><script></script>');
	        d.close();
	        	        popw = window.open('https://draft.blogger.com/blogger.g?blogID=5051161372427020341#editor/src=sidebar','bloggerForm','scrollbars=yes,width=600,height=800,top=0,right=0,status=yes,resizable=yes');

if (!document.all) T = setTimeout('popw.focus()',50);
void(0);
	    }

		var title = $("#1197353 div div div p span").text();
		var label = $('#1197453 div div div span').map(
				    	function(){
			  			return $(this).text();
					}).get().join(',');
		var videoid=$("#1196742 div div div p span").text();
		var playtime=$("#1196745 div div div span").text().split(' AM');
		var playsecond=$("#1197374 div div div span").text();
		var videopostdate=$("#1196744 div div div span").text();
		var source=$("#1197355 div div div span").text().split('【URL】');
		var othersource=$("#1197375 div div div p span").text().split('【URL】');
		var version=$("#1197356 div div div span").text();
		var hd=$("#1197357 div div div span").text();
		var discription=$("#1196743 div div div span p").text();
		var timetable=$("#1197376 div div div span p").map(
			    	function(){
			    		var line =$(this).text().split('/');
			    		line.unshift('<li><span>');
			    		line.splice(2,0,'</span>');
			    		line.push('</li>');
			    		return line.join('');
		  			
					}).get().join('\n');
var seriesname=$("#1198858 div div div p span").text();

		var html='<div class="vrow">\n<div class="row">\n<div class="col-sm-12 col-md-8">\n<div class="js-lazyYT" data-ratio="16:9" data-youtube-id="'+videoid+'">\nloding</div>\n</div>\n<div class="col-sm-12 col-md-4">\n\n<dl>\n<dt>掲載元</dt>\n<dd class="source"><a href="'+source[1]+'">'+source[0]+'</a></dd>\n<dt>動画再生時間</dt>\n<dd>'+playtime[0]+':'+playsecond+'</dd>\n<dt>動画公開日</dt>\n<dd>'+videopostdate+'</dd>\n<dt>バージョン</dt>\n<dd><a dir="ltr" href="http://blenderj.blogspot.jp/search/label/'+version+'">'+version+'</a></dd>\n<dt>画質</dt>\n<dd><a dir="ltr" href="http://blenderj.blogspot.jp/search/label/'+hd+'">'+hd+'</a></dl></div></div></div>\n<a href="http://img.youtube.com/vi/'+videoid+'/hqdefault.jpg" imageanchor="1" class="pull-right"><img src="http://img.youtube.com/vi/'+videoid+'/mqdefault.jpg" /></a>\n<p>'+discription+'</p>\n<!--more-->\n<ul class="timetable">\n'+timetable+'</ul>';
		postmaker(title,label,html);
	}
)();
