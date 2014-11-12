

javascript:(
	function(){
	    function postmaker(title,label,html,slug){
	        var d=window.open().document;
	        d.writeln('<h1>BJ POSTMAKER</h1><h2>タイトル</h2><textarea id="title" rows=3 cols=80 onclick="this.select()">'+title+'</textarea><h2>ラベル</h2><textarea id="label" rows=5 cols=80 onclick="this.select()">'+label+'</textarea><h2>スラッグ</h2><textarea id="slug" rows=5 cols=80 onclick="this.select()">'+slug+'</textarea><h2>投稿HTML</h2><textarea id="html" rows=20 cols=80 onclick="this.select()">'+html+'</textarea><script></script>');
	        d.close();
	        	        popw = window.open('https://beta.kustomnote.com/newNote/151586/#/','bloggerForm','scrollbars=yes,width=600,height=800,top=0,right=0,status=yes,resizable=yes');
	        	        popw.document.forms.noteForm.elements[0].value = 'あああ';


if (!document.all) T = setTimeout('popw.focus()',50);
void(0);
	    }
	    /*kustomnoteの日付表示のバグで【Jul 21, 2014】となるのを2014/7/21と修正*/
	    function toLocaleString( date )
		{
    return [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
        ].join( '/' )
		}

		var title = $("#1197353 div div div p span").text();/*タイトル*/
		var slug=$("#1206301 div div div p span").text();/*スラッグ、シリーズの場合はそろえる*/
		var label = $('#1197453 div div div span').map(
				    	function(){
			  			return $(this).text();
					}).get().join(',');/*ラベル（複数）*/
		var videoid=$("#1196742 div div div p span").text();/*ビデオID*/
		var playtime=$("#1196745 div div div span").text().split(' AM');/*再生時間*/
		var playsecond=$("#1197374 div div div span").text();/*再生時間秒*/
		var videopostdate=$("#1196744 div div div span").text();/*動画公開日*/
		var date = new Date(videopostdate);/*動画公開日の表示を修正するためDATEオブジェクトに*/

		var source=$("#1197355 div div div span").text().split('【URL】');/*引用元*/
		var othersource=$("#1197375 div div div p span").text().split('【URL】');/*引用元URL*/
		var version=$("#1197356 div div div span").text();/*バージョン*/
		var hd=$("#1197357 div div div span").text();/*画質*/
		var discription=$("#1196743 div div div span p").text();/*説明*/
		var timetable=$("#1197376 div div div span p p").map(/*タイムテーブルは時間/説明【改行】の形*/
			    	function(){
			    		var line =$(this).text().split('/');
			    		line.unshift('<li><span>');
			    		line.splice(2,0,'</span>');/*時間にスパンタグ挿入*/
			    		line.push('</li>');
			    		return line.join('');		  			
					}).get().join('\n');





var seriesname=$("#1198858 div div div p span").text();/*シリーズ名*/
var seriesdate=$("#1202911 div div div span").text();/*シリーズ名*/
var sdate = new Date(seriesdate);
var seriesnum=$("#1206302 div div div p span").text().split('/');


/*シリーズリスト整形*/
if(seriesnum){
	/*var seriesposttitle = title.split('パート');*/
	var i=0;
	var seriesindex='';
	while (i < seriesnum[1]) {
		i = i + 1;
		if(i==seriesnum[0]){
			seriesindex += '<li class="current">'+title+' パート'+i + '　今ここ</li></a>';
		}else{
			seriesindex += '<li><a href="http://blenderj.blogspot.jp/'+sdate.getFullYear()+'/'+sdate.getMonth()+'/'+slug+i+'.html">'+title+' パート'+i + '</li></a>';
		}
		
	}
}
if(seriesnum[1]){/*シリーズナンバーがある場合はタイトルとスラッグにつける*/
	title=title + ' パート'　+ seriesnum[0];
	slug=slug + '-'　+ seriesnum[0];
	
}



		var html='<div class="vrow">\n<div class="row">\n<div class="col-sm-12 col-md-8">\n<div class="js-lazyYT" data-ratio="16:9" data-youtube-id="'+videoid+'">\nloding</div>\n</div>\n<div class="col-sm-12 col-md-4">\n\n<dl>\n<dt>掲載元</dt>\n<dd class="source"><a href="'+source[1]+'">'+source[0]+'</a></dd>\n<dt>動画再生時間</dt>\n<dd>'+playtime[0]+':'+playsecond+'</dd>\n<dt>動画公開日</dt>\n<dd>'+toLocaleString( date )+'</dd>\n<dt>バージョン</dt>\n<dd><a dir="ltr" href="http://blenderj.blogspot.jp/search/label/'+version+'">'+version+'</a></dd>\n<dt>画質</dt>\n<dd><a dir="ltr" href="http://blenderj.blogspot.jp/search/label/'+hd+'">'+hd+'</a></dl></div></div></div>\n<a href="http://img.youtube.com/vi/'+videoid+'/hqdefault.jpg" imageanchor="1" class="pull-right"><img src="http://img.youtube.com/vi/'+videoid+'/mqdefault.jpg" /></a>\n<p>'+discription+'</p>\n<!--more-->\n<ul class="timetable">\n'+timetable+'</ul><section class="seriesNote"><h4>'+seriesname+'</h4><ul>'+seriesindex+'</ul></section>';
		postmaker(title,label,html,slug);
	}
)();
