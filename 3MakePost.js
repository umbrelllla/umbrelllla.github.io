<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html lang='en' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
<meta content='width=device-width, initial-scale=1.0' name='viewport'/>
    <b:if cond='data:blog.pageType == &quot;index&quot;'>
    <b:if cond='data:blog.pageType == &quot;item&quot;'>
    <title><data:blog.pageName/> | <data:blog.title/></title>
    <b:else/>
    <title>フリー3DCGソフトBlenderのビデオチュートリアル&#65288;主に海外&#65289;を紹介|<data:blog.pageTitle/></title>
    </b:if>
    <b:else/>
    <title><data:blog.pageName/> | <data:blog.title/></title>
    </b:if>
<b:include data='blog' name='all-head-content'/>
<!-- BEGIN Open Graph tags --> 
<meta expr:content='data:blog.metaDescription' name='description' property='og:description'/>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
  <meta expr:content='data:blog.pageName' property='og:title'/>
  <meta expr:content='data:blog.canonicalUrl' property='og:url'/>
  <meta content='Site Name' property='og:site_name'/>
  <meta content='article' property='og:type'/>
  <b:if cond='data:blog.postImageThumbnailUrl'>
    <meta expr:content='data:blog.postImageThumbnailUrl' property='og:image'/>
    <b:else/>
    <meta content='http://2.bp.blogspot.com/-DknlKJONMdY/UhBRqSykyiI/AAAAAAAABws/Id-lSMf1bMY/s1600/apple-touch-icon-144-precomposed.png' property='og:image'/>
  </b:if>
  <b:else/>
  <meta expr:content='data:blog.title' property='og:title'/>
  <meta expr:content='data:blog.canonicalHomepageUrl' property='og:url'/>
  <meta content='Site Name' property='og:site_name'/>
  <meta content='blog' property='og:type'/>
  <meta content='http://2.bp.blogspot.com/-DknlKJONMdY/UhBRqSykyiI/AAAAAAAABws/Id-lSMf1bMY/s1600/apple-touch-icon-144-precomposed.png' property='og:image'/>
</b:if>
<meta expr:content='&quot;en_US&quot;' property='og:locale'/>
<!-- END Open Graph tags -->
<link href='http://2.bp.blogspot.com/-DknlKJONMdY/UhBRqSykyiI/AAAAAAAABws/Id-lSMf1bMY/s1600/apple-touch-icon-144-precomposed.png' rel='apple-touch-icon-precomposed' sizes='144x144'/>
<link href='http://3.bp.blogspot.com/-rRWmpiJY5BA/UhBRpQVuLxI/AAAAAAAABwk/lclFS71I0pY/s1600/apple-touch-icon-114-precomposed.png' rel='apple-touch-icon-precomposed' sizes='114x114'/>
<link href='http://4.bp.blogspot.com/-gfIbuWbo0gc/UhBRv6ZlsRI/AAAAAAAABw8/La3g8rX-MPQ/s1600/apple-touch-icon-72-precomposed.png' rel='apple-touch-icon-precomposed' sizes='72x72'/>
<link href='http://4.bp.blogspot.com/-J75pjsUM8mk/UhBRq0uetvI/AAAAAAAABw0/-kcTxAIYhko/s1600/apple-touch-icon-57-precomposed.png' rel='apple-touch-icon-precomposed'/>
<link href='http://4.bp.blogspot.com/-3miLDAfjF9k/UhBRxD6aipI/AAAAAAAABxE/4qR5jc7leU8/s1600/favicon.png' rel='shortcut icon'/>
<link href='http://4.bp.blogspot.com/-3miLDAfjF9k/UhBRxD6aipI/AAAAAAAABxE/4qR5jc7leU8/s1600/favicon.png' rel='shortcut icon' type='image/vnd.microsoft.icon'/>
&lt;style type=&quot;text/css&quot;&gt;
&lt;!-- /*<b:skin><![CDATA[*/]]></b:skin>
<link href='//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css' rel='stylesheet'/>
<link href='http://umbrelllla.github.io/blender.min.css' rel='stylesheet' type='text/css'/>
<b:if cond='data:blog.pageType == &quot;item&quot;'><style>
#colorbox,#cboxOverlay,#cboxWrapper{position:absolute;top:0;left:0;z-index:9999;overflow:hidden}#cboxWrapper{max-width:none}#cboxOverlay{position:fixed;width:100%;height:100%}
#cboxMiddleLeft,#cboxBottomLeft{clear:left}#cboxContent{position:relative}#cboxLoadedContent{overflow:auto;-webkit-overflow-scrolling:touch}#cboxTitle{margin:0}
#cboxLoadingOverlay,#cboxLoadingGraphic{position:absolute;top:0;left:0;width:100%;height:100%}#cboxPrevious,#cboxNext,#cboxClose,#cboxSlideshow{cursor:pointer}
.cboxPhoto{float:left;margin:auto;border:0;display:block;max-width:none;-ms-interpolation-mode:bicubic}.cboxIframe{width:100%;height:100%;display:block;border:0;padding:0;margin:0}
#colorbox,#cboxContent,#cboxLoadedContent{box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box}#cboxOverlay{background:#000;opacity:.9;filter:alpha(opacity = 90)}
#colorbox{outline:0}#cboxContent{margin-top:20px;background:#000}.cboxIframe{background:#fff}#cboxError{padding:50px;border:1px solid #ccc}#cboxLoadedContent{border:5px solid #000;background:#fff}
#cboxTitle{position:absolute;top:-20px;left:0;color:#ccc}#cboxCurrent{position:absolute;top:-20px;right:0;color:#ccc}#cboxLoadingGraphic{background:url(http://cdnjs.cloudflare.com/ajax/libs/jquery.colorbox/1.4.33/example3/images/loading.gif) no-repeat center center}
#cboxPrevious,#cboxNext,#cboxSlideshow,#cboxClose{border:0;padding:0;margin:0;overflow:visible;width:auto;background:0}#cboxPrevious:active,#cboxNext:active,#cboxSlideshow:active,#cboxClose:active{outline:0}
#cboxSlideshow{position:absolute;top:-20px;right:90px;color:#fff}#cboxPrevious{position:absolute;top:50%;left:5px;margin-top:-32px;background:url(http://cdnjs.cloudflare.com/ajax/libs/jquery.colorbox/1.4.33/example3/images/controls.png) no-repeat top left;width:28px;height:65px;text-indent:-9999px}
#cboxPrevious:hover{background-position:bottom left}#cboxNext{position:absolute;top:50%;right:5px;margin-top:-32px;background:url(http://cdnjs.cloudflare.com/ajax/libs/jquery.colorbox/1.4.33/example3/images/controls.png) no-repeat top right;width:28px;height:65px;text-indent:-9999px}
#cboxNext:hover{background-position:bottom right}#cboxClose{position:absolute;top:5px;right:5px;display:block;background:url(http://cdnjs.cloudflare.com/ajax/libs/jquery.colorbox/1.4.33/example3/images/controls.png) no-repeat top center;width:38px;height:19px;text-indent:-9999px}
#cboxClose:hover{background-position:bottom center}#comments h4{font-size:16px;color:#333;font-weight:bold;padding:10px 10px;padding-left:20px;margin-top:10px}
#comments-block{line-height:1.6em;margin:1em 0 1.5em;color:#7f7d77}#comments-block .comment-author{background:#dfdfdf none repeat scroll 0 0;border:1px solid #eaeaea;margin:.5em 0;padding-bottom:4px;padding-left:8px;padding-top:4px;font-weight:bold}
#comments-block .comment-body{background:#fff;border-left:1px solid #e3e3e3;border-right:1px solid #e3e3e3;margin-top:-8px;padding-left:10px;padding-top:10px}
#comments-block .comment-footer{background:#fff;border-bottom:1px solid #e3e3e3;border-left:1px solid #e3e3e3;border-right:1px solid #e3e3e3;font-size:11px;line-height:1.4em;margin:-0.25em 0 2em;padding-bottom:5px;padding-left:10px;text-transform:none}
#comments-block .comment-body p{margin:0;padding-bottom:15px}#comment-holder{padding:10px 15px}.comments .comment-block,.comments .comment-thread.inline-thread .comment{background:#fff}
#comments h4,.comments .comment-header,.comments .comment-thread.inline-thread .comment{position:relative}.comments .comments-content .icon.blog-author{position:absolute;top:-12px;right:-12px;margin:0;background-image:url(http://lh6.ggpht.com/-GDMurKK2tec/T5JCD6hoKoI/AAAAAAAABAc/COHOItBlFWk/author.png);width:36px;height:36px}
.post-comment-link{float:right}.comments .comment-replybox-thread{margin-top:5px}.comment-form{max-width:100%}.comments .comments-content .comment-header,.comments .comments-content .comment-content{margin:0 0 8px;border:1px dashed #ddd;padding:10px}
.comments .comments-content .comment-thread ol{margin:0 0 10px 0!important}.comments .comments-content .icon.blog-author{top:-2px;right:-2px}#comments-block .avatar-image-container img{background:#fff url(http://3.bp.blogspot.com/-UMSMHaOBzQg/To2XKFseUSI/AAAAAAAACVU/vlvJki_9vqA/s1600/gravatar.png) no-repeat left top;width:32px;height:32px}
a.youtube-lazy-link{vertical-align:top;background:#555;width:560px;height:315px;background-size:cover;text-decoration:none;color:#DDD;text-align:left;text-shadow:-1px 0 black,0 1px black,1px 0 black,0 -1px black;display:inline-block}
a.youtube-lazy-link:hover{text-decoration:none;color:#FFF}.youtube-lazy-link-div{border:2px solid #000;background:url(http://lh4.googleusercontent.com/-QCeB6REIFlE/TuGUlY3N46I/AAAAAAAAAaI/9-urEUtpKcI/s800/youtube-play-button.png) center center no-repeat;position:absolute}
.youtube-lazy-link-div:hover{background:url(http://lh5.googleusercontent.com/-oBFjswrosz4/TuHqainRc3I/AAAAAAAAAbE/t3rMQuSJdLA/s800/youtube-play-button-hover.png) center center no-repeat}
.youtube-lazy-link-info{font-size:110%;padding:2px 6px;background:#000;background:rgba(0,0,0,0.5)}.labels{margin-left:0;font-size:70%;line-height:1;padding-bottom:5px;border-bottom:1px solid #ccc}
.post-header{line-height:1.8;margin-bottom:20px;font-size:70%}#related-posts{margin:20px 0;border:1px solid #999;padding:10px 20px}#related-posts ul{padding:0;list-style-type:none;margin-left:20px;line-height:1.7}
#related-posts ul li{clear:both}h3.heading-border{margin-bottom:10px}#related-posts ul li:before{content:&#39;\00bb&#39;}span#blog-pager-older-link{float:right}
span#blog-pager-newer-link{float:left}.post img{padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:0;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;max-width:100%;height:auto;max-width:100%;height:auto}
.post a img:hover{border:1px solid #38a1db;background-color:#38a1db}
.post-title h1
{}
.blog div.post-title h1:before,.tutorial div.post-title h1:before{
display: inline-block;
font-family: FontAwesome;
font-style: normal;
font-weight: normal;
line-height: 1;
-webkit-font-smoothing: antialiased;
font-size: 80%;
vertical-align: top;
margin-right: 8px;}
#related-posts {
margin: 40px 20px 50px 20px;
}
.blog div.post-title h1:before{
content: &quot;\f0f6&quot;;
color: #ffa500;
}
.tutorial div.post-title h1:before{
 content: &quot;\f16a&quot;;
color: #dc143c; 
}
img.postthum {
width: 400px;
margin-bottom: 10px;
}
.smallthumbs img {
margin-right: 5px;
}
section.seriesNote h4 {
border-bottom: 1px dotted #ccc;
padding-bottom: 5px;
}
section.seriesNote h4 small:after {
content: &#39;\00bb&#39;;
color: #000;
margin: 0 3px;
font-size: 90%;
}
dd.indexlink a {
font-size: 80%;
}
.timetable li span:after {
content: &#39;\002662&#39;;
font-size: 70%;
color: #ccc;
vertical-align: middle;
margin: 0 3px;
}
section.seriesNote ul {
list-style-type: none;
padding-left: 20px;
}
section.seriesNote ul li:before {
content: &#39;\00bb&#39;;
margin-right: 3px;
color: #999;
}
section.seriesNote {
background-color: #f2f2f2;
margin: 40px;
padding: 25px 35px;
border: 8px double #dcdcdc;
}
section.seriesNote h4 small {
font-weight: bold;
color: #777;
font-size: 80%;
}
span.currentpart:before {
content: &#39;\002190&#39;;
margin-right: 3px;
}
span.currentpart {
color: #ff0000;
}
section.seriesNote h4 {
border-bottom: 1px dotted #ccc;
padding-bottom: 5px;
font-size: 100%;
}
.vthumbnails {
margin: 0 0 0 20px;
}
ul.timetable li:before {
content: &#39;--&#39;;
font-size: 80%;
margin-right: 5px;
vertical-align: middle;
}
.timetable {
list-style-type: none;
padding-left: 5px;
font-size: 90%;
margin: 20px 10px 0px 0px;
}
ul.timetable li:before {
content: &#39;\002192&#39;;
font-size: 70%;
margin-right: 3px;
vertical-align: middle;
color: #999;
}
.timetable li {
line-height: 28px;
margin: 10px 0;
text-indent: -6.5em;
padding-left: 6.5em;
}
.timetable li span {
color: #555;
}
.lazyYT-title {
    z-index: 100!important;
    color: #fff!important;

    font-size: 14px!important;
    top: 10px!important;
    left: 12px!important;
    position: absolute!important;
    margin: 0!important;
    padding: 0.5em!important;
    line-height: 1!important;
    font-style: normal!important;
    font-weight: bold!important;
    background-color: rgba(0,0,0,0.8)!important;
    border-radius: 0.5em!important;
}

.lazyYT-button {
    margin: 0!important;
    padding: 0!important;
    width: 60px!important;
    height: 41px!important;
    z-index: 100!important;
    position: absolute!important;
    top: 50%!important;
    margin-top: -22px!important;
    left: 50%!important;
    margin-left: -30px!important;
    background-image: url(&#39;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAApCAYAAABp50paAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABV9JREFUeNrcWk1IK1cUvrmZGBOjJvr6xKe+Slvroi6kK6GrUkSxO12IC6GgUFBcuOlC8GdRulERV3VRQV0IKhRU0NJupK3tpi1dCRaxffWHGjWZPJNnNJlMz9FzX+ZNkzylcxP1wMdMZiYz97vnu+ee+2Njmc0GyANwgANQDCgAuABOwGOAG6AAiuh+MV3Lo+fc9KyN3qGYvnEBSAA0QBTwAnBp+P0ccAxQ6bkw/T4HRABn9B+8F6f/ZiRktjJANaCSUE0kkVApoBDgAeQTIeM7dAKjAuiG6+b7wniKstgMv+2m5xMGslgZIUAAEAOcAv4GHAL+BDwDBNMRxvOPAZ8C3iUPOVNUiGaCfgOV3MZe9z5OlSDAUzxzQZXyC+BLwM+pCtMJGCTvCTJxOlpBxGpLVzF2ajqiMvyAzwDfGuXyPuALkmyY5KGZ5GVGri1duXRyVIyOPsA7gO9R/iIYtQLKiSy7Q6T+b2UkSN7vAT4U7QGDz9Mbtp/7SPySjh9gj8EpApeyh2/YoyicuhlvhuBkVU3n2jA/cBkJxyUVjBuipz2HEf0qYcKs5w1ify6DbFVVVbSrq0s9ODhQlpaWClRVdUtWUyqLE0cPEn5CXkhI8HC8ubk5ODw8XJBIJOJNTU2H/f39j/f29jxZDJI2Iowq9nJiLk1KZWWYqcKHOC9pa2t7c21tLdTR0XHgdDo1kng22rdGQaucU2YlraY1TRPJACrIXldXVzU/P+8YHR09rqysVIkwz1JWxjmNZqQRBimbBxdIvLyvr8+7uroabGxs9NP1bAS0fOmE09Q2SsxdX19fsbCw4BgcHNzzeDxhGrDItCJO2s52hiVIO3w+X+nIyEgxRPCjmpqaE8lp7VU/nCeTMASrTO++GrTDM8UQzStB4uHOzs5niqIkJLRrLIeTG2QkpVZtthu9Fgk6amtrn8zMzLgmJyePvV7vmcVl0kUuncfuhumkiIqenh7f4uJiAJKWMwuDmS4krdyxURKOYz0Qvd0NDQ1Ri9+tKIbh050Zx+q6fjg1NaWtr6/7SO5WvTuq0ABZuNyWY7L6ycnJ0dDQ0OXc3FxFJBKxW0w4opCEcmnYrDh4Vd3c3FS7u7t929vbj6ipWT3IuOREOFeeRQ/GQqGQf2xsLNDS0vIIyBbRdU2Cgl5K2pYD+SKpF1tbW0cDAwOu5eXlKkleNdqVpMMyk3eQaioJ6zCo8M/OzsZh6Fi0v79fYsi+ZNpzJByU6WHD4AEJ4QxpfHd392hiYuJyenq64vz8XGGvrlJIHSbix46lavc60xISVjc2NsK9vb0ukHKZYeIhG00I7WpeOirxQ3xnZwc99w90MaHx8fFAa2trMZAtYcl542wYOhbXoU7xox8BvmLJFTxLCRcWFkbb29tVv9+vrKyseOnj2SL6MqUEHAA+QcJ1gDl2PTcdldCexeKXCEq5GIrizOzvgC5OUTrI/rtua1ncYsl1nlzm7CjpCKcTld3vtaQbZVlY+SJoBR4wUeHIPUyykDBOwP8mZgTYw1pQQy755N2fsGlxurgO+JUmAxyGh/V7VgHmMjspNn0D+IEZZhOwDf/FrheOn7Lkdgexkm43vfB18rF8JuQGvYCD4DSUH69/B/gccJSqgG+z630euJb6Fv3JaSCfjpBm6McTFqWKNvbqPg6eIefXSbYXVAbc8PIH4EfA1+x620NGj2Cf7KMOG7cm4fi0hK5XUw0KiG1MeHQTHBZGVrFjJ0znuEXpjIItdnX7FHRPCeLeITPt4LmtBEWNiz1XYj7MxZJbmPIJpSy5pUlUXDrPxAzKiBBJN53vk9fE/q0okY4ZVBS7jaL+FWAA/y++OTUmOgsAAAAASUVORK5CYII=&#39;)!important;
}
.js-lazyYT {

}
.excerpt {
position: relative;
padding: 0px 15px;
margin: 1em 0px;
color: #666;
background: #D7F5FF;
border-radius: 5px;
}
.excerpt::after {
content: &#39;&#39;;
position: absolute;
bottom: -15px;
left: 50px;
border-width: 15px 13px 0px;
border-style: solid;
border-color: #D7F5FF transparent;
display: block;
width: 0px;
}
@media (min-width: 992px) {
 .vthumbnails{
    float: right;
  }
  }
@media (max-width: 992px) {
.vthumbnails {
margin: 0 0 20px 0;
text-align: center;
}
.vrow dl {
padding: 10px 10px 0px 10px;
}
}


</style><b:else/><style>
.middle.category h1:before{content:&#39;\002605&#39;;font-size:90%;margin-right:3px}div.post-meta{font-size:60%;line-height:150%}.img-thumbnail{padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:0;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;display:inline-block;max-width:100%;margin-right:8px}
.status-msg-body{
position: relative!important;
margin: 20px 0 30px 0;
padding: 0;
border-bottom: 1px dashed #444;
}.status-msg-wrap{font-size:110%;position:relative}.status-msg-body a {
display: inline-block;
min-width: 10px;
padding: 5px 15px 2px 15px;
font-size: 15px;
font-weight: normal;
color: #fff;
line-height: 1;
vertical-align: baseline;
white-space: nowrap;
text-align: center;
background-color: #007fff;
border-radius: 10px;
}
#blog-pager{width:100%;font-size:16px;line-height:normal;padding:2em 0;text-align:center}
.page-header{padding-bottom:0;margin:0;border-bottom:0}.page-header h3{font-size:130%;font-weight:normal;margin-top:0;margin-bottom:15px}.media-body p:hover{color:#f76cca}
.media-body p,.media-body div{font-size:70%;color:#888;margin-bottom:5px;line-height:130%}
h1.media-heading{
font-size: 90%;
margin-top: 10px;
margin-bottom: 3px;
padding-bottom: 5px;
font-weight: normal;
border-bottom: 1px dotted #c9c9c9;
}
.showpageNum a,.showpage a,.showpagePoint{background:#007fff;border:0;color:#FFF;margin-left:10px;padding:5px 10px}
.showpageNum a:hover,.showpage a:hover,.showpagePoint,.blog-pager-newer-link,.blog-pager-older-link,.home-link{background:#000;color:#FFF}.showpageOf{display:none!important}
div.middle.category h1{margin:10px 0 5px 10px}a.snippet:hover{color:#ff37df}
a.snippet{
color: #999;
font-size: 65%;
line-height: 1.5;}
a.snippet p {
margin-top: 5px;
}
div.row.video {
border-bottom: 1px solid #ddd;
margin-bottom: 20px;
}
</style></b:if>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<style>
  .post-title{

}
</style>
</b:if>




</head><body>
<!-- /////ヘッダ/////// -->
<div class='headbody'> <div class='container head'> <div class='headtitle' id='banner'>
  <!-- ヘッダ画像 -->
          <b:section class='header' id='blog-title' maxwidgets='1' showaddelement='no'>
            <b:widget id='Header1' locked='true' title='Blender Sketch (Header)' type='Header'>
              <b:includable id='main'>
                <b:if cond='data:useImage'>
                  <b:if cond='data:imagePlacement == &quot;BEHIND&quot;'>
                    <!--
Show image as background to text. You can't really calculate the width
reliably in JS because margins are not taken into account by any of
clientWidth, offsetWidth or scrollWidth, so we don't force a minimum
width if the user is using shrink to fit.
This results in a margin-width's worth of pixels being cropped. If the
user is not using shrink to fit then we expand the header.
-->
                    <div expr:style='&quot;background-image: url(\&quot;&quot; + data:sourceUrl + &quot;\&quot;); &quot;                      + &quot;background-position: &quot;                      + data:backgroundPositionStyleStr + &quot;; &quot;                      + data:widthStyleStr                      + &quot;min-height: &quot; + data:height + &quot;px;&quot;                      + &quot;_height: &quot; + data:height + &quot;px;&quot;                      + &quot;background-repeat: no-repeat; &quot;' id='header-inner'>
                      <div class='titlewrapper' style='background: transparent'>
                        <h1 class='title' style='background: transparent; border-width: 0px'>
                          <b:include name='title'/>
                        </h1>
                      </div>
                      <b:include name='description'/>
                    </div>
                    <b:else/>
                    <!--Show the image only-->
                      <a expr:class='&quot;titlelogo&quot;' expr:href='data:blog.homepageUrl'>
                        <img expr:alt='data:title' expr:src='data:sourceUrl' expr:title='data:title'/>
                      </a>
                      <!--Show the description-->
                      <b:if cond='data:imagePlacement == &quot;BEFORE_DESCRIPTION&quot;'>
                      <b:include name='description'/>
                      </b:if>

                  </b:if>
                  <b:else/>
                  <!--No header image -->
                  <div id='header-inner'>
                    <div class='titlewrapper'>
                      <h1 class='title'>
                        <b:include name='title'/>
                      </h1>
                    </div>
                    <b:include name='description'/>
                  </div>
                </b:if>
              </b:includable>
              <b:includable id='description'>
                <div class='descriptionwrapper'>
                  <p class='description'>
                    <span>
                      <data:description/>
                    </span>
                  </p>
                </div>
              </b:includable>
              <b:includable id='title'>
                <b:if cond='data:blog.url == data:blog.homepageUrl'>
                  <data:title/>
                  <b:else/>
                  <a expr:href='data:blog.homepageUrl'>
                    <data:title/>
                  </a>
                </b:if>
              </b:includable>
            </b:widget>
          </b:section><!-- header -->
 </div> </div><!-- container -->



</div>
<!-- /////ヘッダ///// -->




<nav class='navbar navbar-default yamm' id='masthead' role='navigation'>
<div class='container'>
<!-- Brand and toggle get grouped for better mobile display -->
      <div class='navbar-header'>
        <button class='navbar-toggle' data-target='#bs-example-navbar-collapse-1' data-toggle='collapse' type='button'>
          <span class='icon-bar'/>
          <span class='icon-bar'/>
          <span class='icon-bar'/>
        </button>
<b:section class='header' id='middle-title' maxwidgets='1' showaddelement='no'>
  <b:widget id='Header2' locked='true' title='Blender Sketch (Header)' type='Header'>
    <b:includable id='main'>
                <b:if cond='data:blog.url == data:blog.homepageUrl'><data:title/><b:else/><a expr:href='data:blog.homepageUrl'><data:title/></a></b:if>
              </b:includable>
    <b:includable id='description'>
  <div class='descriptionwrapper'>
    <p class='description'><span><data:description/></span></p>
  </div>
</b:includable>
    <b:includable id='title'>
  <b:if cond='data:blog.url == data:blog.homepageUrl'>
    <data:title/>
  <b:else/>
    <a expr:href='data:blog.homepageUrl'><data:title/></a>
  </b:if>
</b:includable>
  </b:widget>
</b:section>
          
        </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
<!-- /////////チュートリアルmegamenuセクション//////////// -->
<!-- /////////現在2カラム&#12290;変更の場合はウィジェット追加語&#12289;該当IDのスタイリング必要&#12290;//////////// -->
    <ul class='nav navbar-nav'>
<!-- /////////横メニュー増やす場合はここからコピペ&#12290;//////////// -->
      <li class='dropdown dropdown-large'>
        <a class='dropdown-toggle videot' data-toggle='dropdown' href='#'>ビデオチュートリアル <b class='caret'/></a>

          <b:section class='main dropdown-menu dropdown-menu-large row' id='megamenu' showaddelement='yes'>
            <b:widget id='HTML2' locked='false' title='' type='HTML'>
              <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
            </b:widget>
            <b:widget id='Label6' locked='false' title='' type='Label'>
              <b:includable id='main'>
    <b:if cond='data:display == &quot;list&quot;'>
      <ul>
              <b:if cond='data:title'>
              <li class='dropdown-header'><data:title/></li></b:if>
      <b:loop values='data:labels' var='label'>
        
          <b:if cond='data:blog.url == data:label.url'>
             &lt;li class=&quot;active&quot; expr:dir=&#39;data:blog.languageDirection&#39;&gt;<data:label.name/>
<b:else/>
           &lt;li&gt;
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='badge' dir='ltr'><data:label.count/></span>
          </b:if>
        &lt;/li&gt;
      </b:loop>
      </ul>
    <b:else/>
      <b:loop values='data:labels' var='label'>
        <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='label-count' dir='ltr'>(<data:label.count/>)</span>
          </b:if>
        </span>
      </b:loop>
    </b:if>
    <b:include name='quickedit'/>
</b:includable>
            </b:widget>
            <b:widget id='Label7' locked='false' title='仕上がり' type='Label'>
              <b:includable id='main'>
   <b:if cond='data:display == &quot;list&quot;'>
      <ul>
              <b:if cond='data:title'>
              <li class='dropdown-header'><data:title/></li></b:if>
      <b:loop values='data:labels' var='label'>
        
          <b:if cond='data:blog.url == data:label.url'>
             &lt;li class=&quot;active&quot; expr:dir=&#39;data:blog.languageDirection&#39;&gt;<data:label.name/>

          <b:else/>
           &lt;li&gt;
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='badge' dir='ltr'><data:label.count/></span>
          </b:if>
        &lt;/li&gt;
      </b:loop>
      </ul>
    <b:else/>
      <b:loop values='data:labels' var='label'>
        <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='label-count' dir='ltr'>(<data:label.count/>)</span>
          </b:if>
        </span>
      </b:loop>
    </b:if>
    <b:include name='quickedit'/>
</b:includable>
            </b:widget>
            <b:widget id='Label18' locked='false' title='機能' type='Label'>
              <b:includable id='main'>
   <b:if cond='data:display == &quot;list&quot;'>
      <ul>
              <b:if cond='data:title'>
              <li class='dropdown-header'><data:title/></li></b:if>
      <b:loop values='data:labels' var='label'>
        
          <b:if cond='data:blog.url == data:label.url'>
             &lt;li class=&quot;active&quot; expr:dir=&#39;data:blog.languageDirection&#39;&gt;<data:label.name/>

          <b:else/>
           &lt;li&gt;
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='badge' dir='ltr'><data:label.count/></span>
          </b:if>
        &lt;/li&gt;
      </b:loop>
      </ul>
    <b:else/>
      <b:loop values='data:labels' var='label'>
        <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='label-count' dir='ltr'>(<data:label.count/>)</span>
          </b:if>
        </span>
      </b:loop>
    </b:if>
    <b:include name='quickedit'/>
</b:includable>
            </b:widget>
            <b:widget id='Label19' locked='false' title='バージョン' type='Label'>
              <b:includable id='main'>
   <b:if cond='data:display == &quot;list&quot;'>
      <ul>
              <b:if cond='data:title'>
              <li class='dropdown-header'><data:title/></li></b:if>
      <b:loop values='data:labels' var='label'>
        
          <b:if cond='data:blog.url == data:label.url'>
             &lt;li class=&quot;active&quot; expr:dir=&#39;data:blog.languageDirection&#39;&gt;<data:label.name/>

          <b:else/>
           &lt;li&gt;
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='badge' dir='ltr'><data:label.count/></span>
          </b:if>
        &lt;/li&gt;
      </b:loop>
      </ul>
    <b:else/>
      <b:loop values='data:labels' var='label'>
        <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='label-count' dir='ltr'>(<data:label.count/>)</span>
          </b:if>
        </span>
      </b:loop>
    </b:if>
    <b:include name='quickedit'/>
</b:includable>
            </b:widget>
          </b:section>          
</li>
<!-- /////////横メニュー増やす場合はここまでコピペ&#12290;//////////// -->

<!-- /////////横メニュー増やす場合はここからコピペ&#12290;//////////// -->
      <li class='dropdown dropdown-large'>
        <a class='dropdown-toggle blogt' data-toggle='dropdown' href='#'>ブログ <b class='caret'/></a>

          <b:section class='main dropdown-menu dropdown-menu-large row' id='blogmenu' showaddelement='yes'>
            <b:widget id='HTML3' locked='false' title='' type='HTML'>
              <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
            </b:widget>
            <b:widget id='Label8' locked='false' title='カテゴリ' type='Label'>
              <b:includable id='main'>
    <b:if cond='data:display == &quot;list&quot;'>
      <ul>
              <b:if cond='data:title'>
              <li class='dropdown-header'><data:title/></li></b:if>
      <b:loop values='data:labels' var='label'>
        
          <b:if cond='data:blog.url == data:label.url'>
             &lt;li class=&quot;active&quot; expr:dir=&#39;data:blog.languageDirection&#39;&gt;<data:label.name/>
<b:else/>
           &lt;li&gt;
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='badge' dir='ltr'><data:label.count/></span>
          </b:if>
        &lt;/li&gt;
      </b:loop>
      </ul>
    <b:else/>
      <b:loop values='data:labels' var='label'>
        <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='label-count' dir='ltr'>(<data:label.count/>)</span>
          </b:if>
        </span>
      </b:loop>
    </b:if>
    <b:include name='quickedit'/>
</b:includable>
            </b:widget>
          </b:section>          
</li>
<!-- /////////横メニュー増やす場合はここまでコピペ&#12290;//////////// -->

<!-- /////////横メニュー増やす場合はここからコピペ&#12290;//////////// -->
      <li class='dropdown dropdown-large'>
        <a class='dropdown-toggle' data-toggle='dropdown' href='#'>ページ <b class='caret'/></a>

          <b:section class='main dropdown-menu dropdown-menu-large row' id='pagemenu' showaddelement='yes'>
            <b:widget id='PageList2' locked='false' title='ページ' type='PageList'>
              <b:includable id='main'>



      <ul>
        <b:if cond='data:title'>
              <li class='dropdown-header'><data:title/></li>
            </b:if>
      <b:loop values='data:links' var='link'>
          <b:if cond='data:link.isCurrentPage'>
            <li class='active'><a expr:href='data:link.href'><data:link.title/></a></li>
          <b:else/>
            <li><a expr:href='data:link.href'><data:link.title/></a></li>
          </b:if>
        </b:loop>
      </ul>
    
    <b:include name='quickedit'/>


  
</b:includable>
            </b:widget>
          </b:section>          
</li>
<!-- /////////横メニュー増やす場合はここまでコピペ&#12290;//////////// -->













    </ul>







<form class='navbar-form navbar-right' expr:action='data:blog.homepageUrl + &quot;search/&quot;' id='ajax-search-form' role='search'>
<div class='form-group'>
    <input class='form-control' name='q' onblur='if (this.value == &quot;&quot;) {this.value = &quot;Search...&quot;;}' onfocus='if (this.value == &quot;Search...&quot;) {this.value = &quot;&quot;;}' type='text' value='Search...'/>
 </div>
    <button class='btn btn-default btn-sm' type='submit' value='Search'>ブログ内検索</button>
</form>
</div><!-- /.navbar-collapse -->
</div>
</nav>
<div class='middle category'><div class='container'><div class='row'><div class='col-xs-12'>
<b:if cond='data:blog.url == data:blog.homepageUrl'>
<b:section id='infomation' preferred='yes'>
  <b:widget id='HTML1' locked='false' title='' type='HTML'>
    <b:includable id='main'>
  <!-- only display title if it's non-empty -->
  <b:if cond='data:title != &quot;&quot;'>
    <h2 class='title'><data:title/></h2>
  </b:if>
  <div class='widget-content'>
    <data:content/>
  </div>

  <b:include name='quickedit'/>
</b:includable>
  </b:widget>
</b:section>
 </b:if>         
        <b:if cond='data:blog.pageType == &quot;archive&quot;'>
        <b:if cond='data:blog.pageName'>
          <h1><data:blog.pageName/>年のアーカイブ</h1>
        </b:if>
        </b:if>
</div></div></div></div>
<div class='container content' id='container'>
      <div class='row'>
<b:section id='info' preferred='yes'/>
<b:section class='main col-xs-12 col-sm-9 clearfix' id='main' showaddelement='no'>
  <b:widget id='Blog1' locked='true' title='ブログの投稿' type='Blog'>
    <b:includable id='main' var='top'>
                <b:if cond='data:mobile == &quot;false&quot;'>
                  <b:if cond='data:blog.url == data:blog.homepageUrl'>
<div class='page-header'><h3> 最新の投稿 <a class='pull-right' href='http://blendersketch.blogspot.jp/feeds/posts/default?alt=rss '> <img alt='feed' height='10' src='https://lh6.googleusercontent.com/-4GA0LNH4EmQ/VCTqOmYnIoI/AAAAAAAAD1c/1TNBWpbAV-w/s800/feedicon14.png' title='feedはこちらからどうぞ' width='10'/></a></h3></div>
</b:if>

                  <!-- posts -->
                  <div class='blog-posts hfeed'>
                    <b:if cond='data:blog.pageType != &quot;item&quot;'>
                      <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
                      &lt;div class=&quot;row video&quot;&gt;
                    </b:if>
                    </b:if>
                    <b:include data='posts' name='breadcrumb'/>
                    <b:include data='top' name='status-message'/>
                    <data:defaultAdStart/>
                    <!-- //////////////投稿ループ開始///////////// -->
                    <b:loop index='i' values='data:posts' var='post'>
                        <b:include data='post' name='post'/>
                        <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
                          <b:include data='post' name='comment_picker'/>
                        </b:if>
                        <b:if cond='data:blog.pageType == &quot;item&quot;'>
                          <b:include data='post' name='comment_picker'/>
                        </b:if>

                      <b:if cond='data:post.includeAd'>
                        <b:if cond='data:post.isFirstPost'>
                          <data:defaultAdEnd/>
                          <b:else/>
                          <data:adEnd/>
                        </b:if>
                        <div class='inline-ad'>
                          <data:adCode/>
                        </div>
                        <data:adStart/>
                      </b:if>
                      <b:if cond='data:i == 2 '>
      &lt;/div&gt;&lt;div class=&quot;row video&quot;&gt;
    </b:if>
    <b:if cond='data:i == 5 '>
     &lt;/div&gt;&lt;div class=&quot;row video&quot;&gt;
    </b:if>
    <b:if cond='data:i == 8 '>
     &lt;/div&gt;&lt;div class=&quot;row video&quot;&gt;
    </b:if> 
                    </b:loop>
                    <!-- //////////投稿ループここまで////////// -->
                    <data:adEnd/>
                     <b:if cond='data:blog.pageType != &quot;item&quot;'>
                      <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
                     &lt;/div&gt;
                    </b:if></b:if>
                  </div><!-- blog-posts hfeed -->
                  <!-- navigation -->
                  <b:include name='nextprev'/>
                  <!-- feed links -->
                  <b:include name='feedLinks'/>
                  <b:if cond='data:top.showStars'>
                    <script src='//www.google.com/jsapi' type='text/javascript'/>
                    <script type='text/javascript'>
                      google.load(&quot;annotations&quot;, &quot;1&quot;, {&quot;locale&quot;: &quot;<data:top.languageCode/>&quot;});
                      function initialize() {
                        google.annotations.setApplicationId(<data:top.blogspotReviews/>);
                        google.annotations.createAll();
                        google.annotations.fetch();
                      }
                      google.setOnLoadCallback(initialize);
                    </script>
                  </b:if>
                  <b:else/>
                  <b:include name='mobile-main'/>
                </b:if>
                <b:if cond='data:top.showDummy'>
                  <data:top.dummyBootstrap/>
                </b:if>
              </b:includable>
    <b:includable id='backlinkDeleteIcon' var='backlink'>
                <span expr:class='&quot;item-control &quot; + data:backlink.adminClass'>
                  <a expr:href='data:backlink.deleteUrl' expr:title='data:top.deleteBacklinkMsg'>
                    <img src='//www.blogger.com/img/icon_delete13.gif'/>
                  </a>
                </span>
              </b:includable>
    <b:includable id='backlinks' var='post'>
                <a name='links'/>
                <h4>
                  <data:post.backlinksLabel/>
                </h4>
                <b:if cond='data:post.numBacklinks != 0'>
                  <dl class='comments-block' id='comments-block'>
                    <b:loop values='data:post.backlinks' var='backlink'>
                      <div class='collapsed-backlink backlink-control'>
                        <dt class='comment-title'>
                          <span class='backlink-toggle-zippy'>
                            &#160;
                          </span>
                          <a expr:href='data:backlink.url' rel='nofollow'>
                            <data:backlink.title/>
                          </a>
                          <b:include data='backlink' name='backlinkDeleteIcon'/>
                        </dt>
                        <dd class='comment-body collapseable'>
                          <data:backlink.snippet/>
                        </dd>
                        <dd class='comment-footer collapseable'>
                          <span class='comment-author'>
                            <data:post.authorLabel/>
                            <data:backlink.author/>
                          </span>
                          <span class='comment-timestamp'>
                            <data:post.timestampLabel/>
                            <data:backlink.timestamp/>
                          </span>
                        </dd>
                      </div>
                    </b:loop>
                  </dl>
                </b:if>
                <p class='comment-footer'>
                  <a class='comment-link' expr:href='data:post.createLinkUrl' expr:id='data:widget.instanceId + &quot;_backlinks-create-link&quot;' target='_blank'>
                    <data:post.createLinkLabel/>
                  </a>
                </p>
              </b:includable>
    <b:includable id='breadcrumb' var='posts'>
<b:if cond='data:blog.homepageUrl != data:blog.url'>
<b:if cond='data:blog.pageType == &quot;static_page&quot;'>
<ul class='breadcrumb'><li><a expr:href='data:blog.homepageUrl' rel='tag'>&#10026;Home</a></li>/<li><data:blog.pageName/></li></ul>
<b:else/>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<!-- breadcrumb for the post page -->
<b:loop values='data:posts' var='post'>
<b:if cond='data:post.labels'>
<ul class='breadcrumb' xmlns:v='http://rdf.data-vocabulary.org/#'>
<li typeof='v:Breadcrumb'><a expr:href='data:blog.homepageUrl' property='v:title' rel='v:url'>&#10026;Home</a></li>
<b:loop values='data:post.labels' var='label'><b:if cond='data:label.isLast == &quot;true&quot;'>/<li typeof='v:Breadcrumb'><a expr:href='data:label.url' property='v:title' rel='v:url'><data:label.name/></a></li>
</b:if>
</b:loop>
/<span><data:post.title/></span>
</ul>
<b:else/>
<ul class='breadcrumb'><li><a expr:href='data:blog.homepageUrl' rel='tag'>&#10026;Home</a></li>/<li>Unlabelled</li>/<li><data:post.title/></li></ul>
</b:if>
</b:loop>
<b:else/>
<b:if cond='data:blog.pageType == &quot;archive&quot;'>
<!-- breadcrumb for the label archive page and search pages.. -->
<ul class='breadcrumb'>
<li><a expr:href='data:blog.homepageUrl'>&#10026;Home</a></li>/<li>Archives for <data:blog.pageName/></li>
</ul>
<b:else/>
<b:if cond='data:blog.pageType == &quot;index&quot;'>
<ul class='breadcrumb'>
<b:if cond='data:blog.pageName == &quot;&quot;'>
<li><a expr:href='data:blog.homepageUrl'>&#10026;Home</a></li>/<li>All posts</li>
<b:else/>
<li><a expr:href='data:blog.homepageUrl'>&#10026;Home</a></li>/<li>Posts filed under <data:blog.pageName/></li>
</b:if>
</ul>
</b:if>
</b:if>
</b:if>
</b:if>
</b:if>

</b:includable>
    <b:includable id='comment-form' var='post'>
                <div class='comment-form'>
                  <a name='comment-form'/>
                  <b:if cond='data:mobile'>
                    <h4 id='comment-post-message'>
                      <a expr:id='data:widget.instanceId + &quot;_comment-editor-toggle-link&quot;' href='javascript:void(0)'>
                        <data:postCommentMsg/>
                      </a>
                    </h4>
                    <p>
                      <data:blogCommentMessage/>
                    </p>
                    <data:blogTeamBlogMessage/>
                    <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
                    <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
                    <b:else/>
                    <h4 id='comment-post-message'>
                      <data:postCommentMsg/>
                    </h4>
                    <p>
                      <data:blogCommentMessage/>
                    </p>
                    <data:blogTeamBlogMessage/>
                    <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
                    <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' width='100%'/>
                  </b:if>
                  <data:post.friendConnectJs/>
                  <data:post.cmtfpIframe/>
                  <script type='text/javascript'>
                    BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;, &#39;<data:post.communityId/>&#39;);
                  </script>
                </div>
              </b:includable>
    <b:includable id='commentDeleteIcon' var='comment'>
                <span expr:class='&quot;item-control &quot; + data:comment.adminClass'>
                  <b:if cond='data:showCmtPopup'>
                    <div class='goog-toggle-button'>
                      <div class='goog-inline-block comment-action-icon'/>
                    </div>
                    <b:else/>
                    <a class='comment-delete' expr:href='data:comment.deleteUrl' expr:title='data:top.deleteCommentMsg'>
                      <img src='//www.blogger.com/img/icon_delete13.gif'/>
                    </a>
                  </b:if>
                </span>
              </b:includable>
    <b:includable id='comment_count_picker' var='post'>
                <b:if cond='data:post.forceIframeComments'>
                  <span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-url='data:post.canonicalUrl'>
                  </span>
                  <b:else/>
                  <b:if cond='data:post.commentSource == 1'>
                    <span class='cmt_count_iframe_holder' expr:data-count='data:post.numComments' expr:data-onclick='data:post.addCommentOnclick' expr:data-url='data:post.canonicalUrl'>
                    </span>
                    <b:else/>
                    <a class='comment-link' expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
                      <data:post.commentLabelFull/>
                      :
                    </a>
                  </b:if>
                </b:if>
              </b:includable>
    <b:includable id='comment_picker' var='post'>
                <b:if cond='data:post.commentSource == 1'>
                  <b:include data='post' name='iframe_comments'/>
                  <b:else/>
                  <b:if cond='data:post.showThreadedComments'>
                    <b:include data='post' name='threaded_comments'/>
                    <b:else/>
                    <b:include data='post' name='comments'/>
                  </b:if>
                </b:if>
              </b:includable>
    <b:includable id='comments' var='post'>
                <div class='comments well' id='comments'>
                  <a name='comments'/>
                  <b:if cond='data:post.allowComments'>
                    <h4>
                      <data:post.commentLabelFull/>
                      :
                    </h4>
                    <b:if cond='data:post.commentPagingRequired'>
                      <span class='paging-control-container'>
                        <b:if cond='data:post.hasOlderLinks'>
                          <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'>
                            <data:post.oldestLinkText/>
                          </a>
                          &#160;
                          <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'>
                            <data:post.olderLinkText/>
                          </a>
                          &#160;
                        </b:if>
                        <data:post.commentRangeText/>
                        <b:if cond='data:post.hasNewerLinks'>
                          &#160;
                          <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'>
                            <data:post.newerLinkText/>
                          </a>
                          &#160;
                          <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'>
                            <data:post.newestLinkText/>
                          </a>
                        </b:if>
                      </span>
                    </b:if>
                    <div expr:id='data:widget.instanceId + &quot;_comments-block-wrapper&quot;'>
                      <dl expr:class='data:post.avatarIndentClass' id='comments-block'>
                        <b:loop values='data:post.comments' var='comment'>
                          <dt expr:class='&quot;comment-author &quot; + data:comment.authorClass' expr:id='data:comment.anchorName'>
                            <b:if cond='data:comment.favicon'>
                              <img expr:src='data:comment.favicon' height='16px' style='margin-bottom:-2px;' width='16px'/>
                            </b:if>
                            <a expr:name='data:comment.anchorName'/>
                            <b:if cond='data:blog.enabledCommentProfileImages'>
                              <data:comment.authorAvatarImage/>
                            </b:if>
                            <b:if cond='data:comment.authorUrl'>
                              <a expr:href='data:comment.authorUrl' rel='nofollow'>
                                <data:comment.author/>
                              </a>
                              <b:else/>
                              <data:comment.author/>
                            </b:if>
                            <data:commentPostedByMsg/>
                          </dt>
                          <dd class='comment-body' expr:id='data:widget.instanceId + data:comment.cmtBodyIdPostfix'>
                            <b:if cond='data:comment.isDeleted'>
                              <span class='deleted-comment'>
                                <data:comment.body/>
                              </span>
                              <b:else/>
                              <p>
                                <data:comment.body/>
                              </p>
                            </b:if>
                          </dd>
                          <dd class='comment-footer'>
                            <span class='comment-timestamp'>
                              <a expr:href='data:comment.url' title='comment permalink'>
                                <data:comment.timestamp/>
                              </a>
                              <b:include data='comment' name='commentDeleteIcon'/>
                            </span>
                          </dd>
                        </b:loop>
                      </dl>
                    </div>
                    <b:if cond='data:post.commentPagingRequired'>
                      <span class='paging-control-container'>
                        <a expr:class='data:post.oldLinkClass' expr:href='data:post.oldestLinkUrl'>
                          <data:post.oldestLinkText/>
                        </a>
                        <a expr:class='data:post.oldLinkClass' expr:href='data:post.olderLinkUrl'>
                          <data:post.olderLinkText/>
                        </a>
                        &#160;
                        <data:post.commentRangeText/>
                        &#160;
                        <a expr:class='data:post.newLinkClass' expr:href='data:post.newerLinkUrl'>
                          <data:post.newerLinkText/>
                        </a>
                        <a expr:class='data:post.newLinkClass' expr:href='data:post.newestLinkUrl'>
                          <data:post.newestLinkText/>
                        </a>
                      </span>
                    </b:if>
                    <p class='comment-footer'>
                      <b:if cond='data:post.embedCommentForm'>
                        <b:if cond='data:post.allowNewComments'>
                          <b:include data='post' name='comment-form'/>
                          <b:else/>
                          <data:post.noNewCommentsText/>
                        </b:if>
                        <b:else/>
                        <b:if cond='data:post.allowComments'>
                          <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
                            <data:postCommentMsg/>
                          </a>
                        </b:if>
                      </b:if>
                    </p>
                  </b:if>
                  <b:if cond='data:showCmtPopup'>
                    <div id='comment-popup'>
                      <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
                      </iframe>
                    </div>
                  </b:if>
                  <div id='backlinks-container'>
                    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
                      <b:if cond='data:post.showBacklinks'>
                        <b:include data='post' name='backlinks'/>
                      </b:if>
                    </div>
                  </div>
                </div>
              </b:includable>
    <b:includable id='feedLinks'>
  
</b:includable>
    <b:includable id='feedLinksBody' var='links'>
  <div class='feed-links'>
  <data:feedLinksMsg/>
  <b:loop values='data:links' var='f'>
     <a class='feed-link' expr:href='data:f.url' expr:type='data:f.mimeType' target='_blank'><data:f.name/> (<data:f.feedType/>)</a>
  </b:loop>
  </div>
</b:includable>
    <b:includable id='iframe_comments' var='post'>
                <b:if cond='data:post.allowIframeComments'>
                  <script expr:src='data:post.iframeCommentSrc' type='text/javascript'/>
                  <div class='cmt_iframe_holder' expr:data-href='data:post.canonicalUrl' expr:data-viewtype='data:post.viewType'/>
                  <b:if cond='data:post.embedCommentForm == &quot;false&quot;'>
                    <a expr:href='data:post.addCommentUrl' expr:onclick='data:post.addCommentOnclick'>
                      <data:postCommentMsg/>
                    </a>
                  </b:if>
                </b:if>
              </b:includable>
    <b:includable id='mobile-index-post' var='post'>
                <div class='mobile-date-outer date-outer'>
                  <b:if cond='data:post.dateHeader'>
                    <div class='date-header'>
                      <span>
                        <data:post.dateHeader/>
                      </span>
                    </div>
                  </b:if>
                  <div class='mobile-post-outer'>
                    <a expr:href='data:post.url'>
                      <h3 class='mobile-index-title entry-title' itemprop='name'>
                        <data:post.title/>
                      </h3>
                      <div class='mobile-index-arrow'>
                        &amp;rsaquo;
                      </div>
                      <div class='mobile-index-contents'>
                        <b:if cond='data:post.thumbnailUrl'>
                          <div class='mobile-index-thumbnail'>
                            <div class='Image'>
                              <img expr:src='data:post.thumbnailUrl'/>
                            </div>
                          </div>
                        </b:if>
                        <div class='post-body'>
                          <b:if cond='data:post.snippet'>
                            <data:post.snippet/>
                          </b:if>
                        </div>
                      </div>
                      <div style='clear: both;'/>
                    </a>
                    <div class='mobile-index-comment'>
                      <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
                        <b:if cond='data:post.allowComments'>
                          <b:if cond='data:post.numComments != 0'>
                            <b:include data='post' name='comment_count_picker'/>
                          </b:if>
                        </b:if>
                      </b:if>
                    </div>
                  </div>
                </div>
              </b:includable>
    <b:includable id='mobile-main' var='top'>
                <!-- posts -->
                <div class='blog-posts hfeed'>
                  <b:include data='top' name='status-message'/>
                  <b:if cond='data:blog.pageType == &quot;index&quot;'>
                    <b:loop values='data:posts' var='post'>
                      <b:include data='post' name='mobile-index-post'/>
                    </b:loop>
                    <b:else/>
                    <b:loop values='data:posts' var='post'>
                      <b:include data='post' name='mobile-post'/>
                    </b:loop>
                  </b:if>
                </div>
                <b:include name='mobile-nextprev'/>
              </b:includable>
    <b:includable id='mobile-nextprev'>
                <div class='blog-pager' id='blog-pager'>
                  <b:if cond='data:newerPageUrl'>
                    <div class='mobile-link-button' id='blog-pager-newer-link'>
                      <a class='blog-pager-newer-link' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'>
                        &amp;lsaquo;
                      </a>
                    </div>
                  </b:if>
                  <b:if cond='data:olderPageUrl'>
                    <div class='mobile-link-button' id='blog-pager-older-link'>
                      <a class='blog-pager-older-link' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'>
                        &amp;rsaquo;
                      </a>
                    </div>
                  </b:if>
                  <div class='mobile-link-button' id='blog-pager-home-link'>
                    <a class='home-link' expr:href='data:blog.homepageUrl'>
                      <data:homeMsg/>
                    </a>
                  </div>
                  <div class='mobile-desktop-link'>
                    <a class='home-link' expr:href='data:desktopLinkUrl'>
                      <data:desktopLinkMsg/>
                    </a>
                  </div>
                </div>
                <div class='clear'/>
              </b:includable>
    <b:includable id='mobile-post' var='post'>
                <div class='date-outer'>
                  <b:if cond='data:post.dateHeader'>
                    <h3 class='date-header'>
                      <span>
                        <data:post.dateHeader/>
                      </span>
                    </h3>
                  </b:if>
                  <div class='date-posts'>
                    <div class='post-outer'>
                      <div class='post hentry uncustomized-post-template' itemscope='itemscope' itemtype='http://schema.org/BlogPosting'>
                        <b:if cond='data:post.thumbnailUrl'>
                          <meta expr:content='data:post.thumbnailUrl' itemprop='image_url'/>
                        </b:if>
                        <meta expr:content='data:blog.blogId' itemprop='blogId'/>
                        <meta expr:content='data:post.id' itemprop='postId'/>
                        <a expr:name='data:post.id'/>
                        <b:if cond='data:post.title'>
                          <h3 class='post-title entry-title' itemprop='name'>
                            <b:if cond='data:post.link'>
                              <a expr:href='data:post.link'>
                                <data:post.title/><data:post.thumbnailUrl/>
                              </a>
                              <b:else/>
                              <b:if cond='data:post.url'>
                                <b:if cond='data:blog.url != data:post.url'>
                                  <a expr:href='data:post.url'>
                                    <data:post.title/><data:post.thumbnailUrl/>
                                    
                                  </a>
                                  <b:else/>
                                  <data:post.title/><data:post.thumbnailUrl/>
                                </b:if>
                                <b:else/>
                                <data:post.title/><data:post.thumbnailUrl/>
                              </b:if>
                            </b:if>
                          </h3>
                        </b:if>
                        <div class='post-header'>
                          
                          <span class='post-comment-link'>
                            <b:if cond='data:blog.pageType != &quot;item&quot;'>
                              <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
                                <b:if cond='data:post.allowComments'>
                                  <b:include data='post' name='comment_count_picker'/>
                                </b:if>
                              </b:if>
                            </b:if>
                          </span>
                          <span class='post-author vcard'>
                           
                            <b:if cond='data:top.showAuthor'>
                              <data:top.authorLabel/>
                              <span class='fn'>
                                <data:post.author/>
                              </span>
                            </b:if>
                          </span>
                          <span class='post-timestamp'>
                            
                            <b:if cond='data:top.showTimestamp'>
                              <data:top.timestampLabel/>
                              <b:if cond='data:post.url'>
                                <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'>
                                  <abbr class='published' expr:title='data:post.timestampISO8601'>
                                    <data:post.timestamp/>
                                  </abbr>
                                </a>
                              </b:if>
                            </b:if>
                          </span>
                          <span class='post-labels'>
                            <b:if cond='data:post.labels'>
&#9001;<b:loop values='data:post.labels' var='label'>
                                <a class='label label-default' expr:href='data:label.url' rel='tag'>
                                  <data:label.name/>
                                </a>
                                <b:if cond='data:label.isLast != &quot;true&quot;'>
                                  ,
                                </b:if>
                              </b:loop>&#9002;                              
                            </b:if>
                          </span>
                        </div>
                        <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody'>
                          <data:post.body/>
                          <div style='clear: both;'/>
                          <!-- clear for photos floats -->
                        </div>
                        <div class='post-footer'>
                          <div class='post-footer-line post-footer-line-2'>
                            <b:if cond='data:top.showMobileShare'>
                              <div class='mobile-link-button goog-inline-block' id='mobile-share-button'>
                                <a href='javascript:void(0);'>
                                  <data:shareMsg/>
                                </a>
                              </div>
                            </b:if>
                            <b:if cond='data:top.showDummy'>
                              <div class='goog-inline-block dummy-container'>
                                <data:post.dummyTag/>
                              </div>
                            </b:if>
                          </div>
                        </div>
                      </div>
                      <b:if cond='data:blog.pageType == &quot;static_page&quot;'>
                        <b:include data='post' name='comment_picker'/>
                      </b:if>
                      <b:if cond='data:blog.pageType == &quot;item&quot;'>
                        <b:include data='post' name='comment_picker'/>
                      </b:if>
                    </div>
                  </div>
                </div>
              </b:includable>
    <b:includable id='nextprev'>
                <div class='blog-pager' id='blog-pager'>
                  <b:if cond='data:newerPageUrl'>
                    <span id='blog-pager-newer-link'>
                      <a class='blog-pager-newer-link btn btn-primary' expr:href='data:newerPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-newer-link&quot;' expr:title='data:newerPageTitle'>
                        <data:newerPageTitle/>
                      </a>
                    </span>
                  </b:if>
                  <b:if cond='data:olderPageUrl'>
                    <span id='blog-pager-older-link'>
                      <a class='blog-pager-older-link btn btn-primary' expr:href='data:olderPageUrl' expr:id='data:widget.instanceId + &quot;_blog-pager-older-link&quot;' expr:title='data:olderPageTitle'>
                        <data:olderPageTitle/>
                      </a>
                    </span>
                  </b:if>
                  <a class='home-link btn btn-primary' expr:href='data:blog.homepageUrl'>
                    <data:homeMsg/>
                  </a>
                  <b:if cond='data:mobileLinkUrl'>
                    <div class='blog-mobile-link'>
                      <a expr:href='data:mobileLinkUrl'>
                        <data:mobileLinkMsg/>
                      </a>
                    </div>
                  </b:if>
                </div>
                <div class='clear'/>
              </b:includable>
    <b:includable id='post' var='post'>


<b:if cond='data:blog.pageType != &quot;index&quot;'>
  <b:if cond='data:blog.pageType != &quot;archive&quot;'>
<!-- ///////////個別投稿ページとページ//////////////// -->
<!-- 共通だったところ -->
&lt;div class=&#39;post hentry <b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'><b:if cond='data:label.name == &quot;ブログ&quot;'>blog<b:else/><b:if cond='data:label.name == &quot;ビデオチュートリアル&quot;'>tutorial</b:if></b:if></b:loop></b:if>&#39; itemprop=&#39;blogPost&#39; itemscope=&#39;itemscope&#39; itemtype=&#39;http://schema.org/BlogPosting&#39;&gt;
                
                  <b:if cond='data:post.firstImageUrl'>
                    <meta expr:content='data:post.firstImageUrl' itemprop='image_url'/>
                  </b:if>
                  <meta expr:content='data:blog.blogId' itemprop='blogId'/>
                  <meta expr:content='data:post.id' itemprop='postId'/>
                  <a expr:name='data:post.id'/>
                  <b:if cond='data:post.title'>
                    <b:if cond='data:post.link'>
                      <a expr:href='data:post.link'>
                      <data:post.title/>
                      </a>
                      <b:else/>
                      <b:if cond='data:post.url'>
                        <b:if cond='data:blog.url != data:post.url'>

                          <b:else/>
<div class='post-title'>
                        <h1 class=''><data:post.title/></h1><!--itemタイトル-->
                        <div class='labels'>
                    <span class='post-labels'>
                      <b:if cond='data:post.labels'>

                          &#9001;<b:loop values='data:post.labels' var='label'>
                                <a class='label label-default' expr:href='data:label.url' rel='tag'>
                                  <data:label.name/>
                                </a>
                                <b:if cond='data:label.isLast != &quot;true&quot;'>
                                  ,
                                </b:if>
                              </b:loop>&#9002;         

                      </b:if>
                    </span>
                    </div>
                    </div>
                        </b:if>
                        <b:else/>
                        <data:post.title/>
                      </b:if>
                    </b:if>
                  </b:if>
<!-- 共通だったところ -->
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
                  <div class='post-header'>
                    <span class='post-author vcard'>
                      <b:if cond='data:top.showAuthor'>
                        <span class='fn'>
                          &#9786;<data:post.author/>
                        </span>
                      </b:if>
                    </span>
                    <span class='post-timestamp'>
<b:if cond='data:top.showTimestamp'>
  <b:if cond='data:post.url'>
    <a class='timestamp-link' expr:href='data:post.url' rel='bookmark' title='permanent link'>
      <abbr class='published' expr:title='data:post.timestampISO8601'>
        <data:post.dateHeader/> <data:post.timestamp/>
      </abbr>
    </a>
  </b:if>
                      </b:if>
                    </span>

                    <span class='post-comment-link'>                     
                        <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
                          <b:if cond='data:post.allowComments'>
                            <b:include data='post' name='comment_count_picker'/>
                          </b:if>
                        </b:if>                      
                    </span>
                  </div>
                  </b:if>
                    <div class='post-body entry-content' expr:id='&quot;post-body-&quot; + data:post.id' itemprop='articleBody'>
                          <data:post.body/>
                          <div style='clear: both;'/>
                          <!-- clear for photos floats -->
                        </div>
               <b:if cond='data:post.emailPostUrl'>
                  <div class='post-footer'>
                    <div class='post-footer-line post-footer-line-1'>
                      <span class='post-icons'>
                          <span class='item-action'>
                            <a expr:href='data:post.emailPostUrl' expr:title='data:top.emailPostMsg'>
                              <img alt='' class='icon-action' height='13' src='http://img1.blogblog.com/img/icon18_email.gif' width='18'/>
                            </a>
                          </span>
                      </span>
                    </div>
                  </div>
                  </b:if>
                  <b:if cond='data:blog.pageType != &quot;static_page&quot;'>

                        
                        <!-- quickedit pencil -->  
                        <section class='boxframe' id='related-posts'>
                      <div id='related-posts'>
                        <script type='text/javascript'>
                          /*<![CDATA[*/
                          var ry='<h3 class="heading-border">&#9829;関連しているかもしれない記事</h3>';rn='<h3 class="heading-border">関連記事が見つかりませんでした</h3>';rcomment='comments';rdisable='disable comments';commentYN='yes';
                          var dw='';titles=new Array();titlesNum=0;urls=new Array();timeR=new Array();commentsNum=new Array();comments=new Array();function related_results_labels(c){for(var b=0;b<c.feed.entry.length;b++){var d=c.feed.entry[b];titles[titlesNum]=d.title.$t;for(var a=0;a<d.link.length;a++){if('thr$total' in d){commentsNum[titlesNum]=d.thr$total.$t+' '+rcomment}else{commentsNum[titlesNum]=rdisable};if(d.link[a].rel=="alternate"){urls[titlesNum]=d.link[a].href;timeR[titlesNum]=d.published.$t;
                          titlesNum++;break}}}}function removeRelatedDuplicates(){var b=new Array(0);c=new Array(0);e=new Array(0);f=new Array(0);g=new Array(0);for(var a=0;a<urls.length;a++){if(!contains(b,urls[a])){b.length+=1;b[b.length-1]=urls[a];c.length+=1;c[c.length-1]=titles[a];e.length+=1;e[e.length-1]=timeR[a];f.length+=1;
                          g.length+=1;g[g.length-1]=commentsNum[a]}}urls=b;titles=c;timeR=e;commentsNum=g}function contains(b,d){for(var c=0;c<b.length;c++){if(b[c]==d){return true}}return false}function printRelatedLabels(a){var y=a.indexOf('?m=0');if(y!=-1){a=a.replace(/\?m=0/g,'')}for(var b=0;b<urls.length;b++){if(urls[b]==a){urls.splice(b,1);titles.splice(b,1);timeR.splice(b,1);commentsNum.splice(b,1)}}var c=Math.floor((titles.length-1)*Math.random());var b=0;if(titles.length==0){dw+=rn}else{dw+=ry;dw+='<ul>';while(b<titles.length&&b<20&&b<maxresults){if(y!=-1){urls[c]=urls[c]+'?m=0'}if(commentYN=='yes'){comments[c]=' - '+commentsNum[c]}else{comments[c]=''};dw+='<li><a href="'+urls[c]+'" rel="nofollow">'+titles[c]+'</a><div class="clear"></div></li></div>';if(c<titles.length-1){c++}else{c=0}b++}dw+='</ul>'};urls.splice(0,urls.length);titles.splice(0,titles.length);document.getElementById('related-posts').innerHTML=dw};
                          /*]]>*/</script>
                        <b:loop values='data:post.labels' var='label'>
                          <script expr:src='&quot;/feeds/posts/default/-/&quot; + data:label.name + &quot;?alt=json-in-script&amp;callback=related_results_labels&quot;' type='text/javascript'/>
                        </b:loop>
                        <script type='text/javascript'>
                          var maxresults=6;removeRelatedDuplicates();printRelatedLabels(&#39;<data:post.url/>&#39;);</script>
                      </div>
                      <div class='clear'/>
                    </section>
                    </b:if> 


  &lt;/div&gt;<!-- post hentry -->
<!-- ///////////個別投稿ページここまで//////////////// -->
</b:if>
</b:if>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<b:if cond='data:blog.pageType != &quot;item&quot;'>
<!-- ////////////////アーガイブとトップページ/////////////// -->
 <!-- 共通だったところ -->

                &lt;div class=&#39;col-xs-12 col-sm-4 <b:if cond='data:post.labels'><b:loop values='data:post.labels' var='label'><b:if cond='data:label.name == &quot;ブログ&quot;'>blog<b:else/><b:if cond='data:label.name == &quot;チュートリアル&quot;'>tutorial</b:if></b:if></b:loop></b:if>&#39; itemprop=&#39;blogPost&#39; itemscope=&#39;itemscope&#39; itemtype=&#39;http://schema.org/BlogPosting&#39;&gt;

                      




                  <b:if cond='data:post.firstImageUrl'>
                    <meta expr:content='data:post.firstImageUrl' itemprop='image_url'/>
                  </b:if>
                  <meta expr:content='data:blog.blogId' itemprop='blogId'/>
                  <meta expr:content='data:post.id' itemprop='postId'/>
                  <a expr:name='data:post.id'/>
                  
<!-- 共通だったところ -->
                   

                    <a expr:href='data:post.url'>  
                    <b:if cond='data:post.firstImageUrl'>
                    <img alt='サムネイル' expr:class='&quot;img-thumbnail&quot;' expr:src='data:post.firstImageUrl'/><!-- youtubeのhqデフォルトに合わせてw320-h180-cの画像を投稿の最初に貼る -->
                    <b:else/>
                    <img alt='No Image' expr:class='&quot;img-thumbnail&quot;' src='https://lh3.googleusercontent.com/--YxFskuxh-k/U9iOVZ_hbvI/AAAAAAAACnA/gNR-ObsqwIY/w320-h180-c/noimage.png'/>
                    </b:if>
                     </a>   
                      <a expr:href='data:post.url'>
                        <h1 class='media-heading'><data:post.title/></h1>
                      </a>
                                           <div class='post-meta'>
                    <!-- <span class='post-author vcard'>
                      <b:if cond='data:top.showAuthor'>                        
                        <span class='fn'>
                          &#9786;<data:post.author/>
                        </span>
                      </b:if>
                    </span> -->
                    <span class='post-timestamp'>
                      
                        <b:if cond='data:top.showTimestamp'>
                          <b:if cond='data:post.url'>
                              <abbr class='published' expr:title='data:post.timestampISO8601'>
                                <data:post.dateHeader/>
                              </abbr>
                          </b:if>
                      </b:if>
                    </span>
                    <span class='post-labels'>
                      <b:if cond='data:post.labels'>
                        &#9001;<b:loop values='data:post.labels' var='label'>

                            <b:if cond='data:label.isLast == &quot;true&quot;'>
                              <a class='label label-default' expr:href='data:label.url' rel='tag'>
                            <data:label.name/>
                          </a>
                          <b:else/>
                          <a class='label label-default' expr:href='data:label.url' rel='tag'>
                            <data:label.name/>
                          </a>,
                            </b:if>
                          
                        </b:loop>&#9002;
                      </b:if>
                    </span>
                    <span class='post-comment-link'>
                      <b:if cond='data:blog.pageType != &quot;item&quot;'>
                        <b:if cond='data:blog.pageType != &quot;static_page&quot;'>
                          <b:if cond='data:post.allowComments'>
 <b:if cond='data:post.numComments &gt; 0'>
                            <b:include data='post' name='comment_count_picker'/>
                            </b:if>
                          </b:if>
                        </b:if>
                      </b:if>
                    </span>
                  </div> 
                      <a class='snippet' expr:href='data:post.url + &quot;#more&quot;'><p><data:post.snippet/>
                      
                    <b:if cond='data:post.hasJumpLink'>
                    <span class='rm'><data:post.jumpText/></span>
                    </b:if>
                    </p></a>

                 



  &lt;/div&gt;<!-- post hentry -->

<!-- ////////////////アーガイブとトップページここまで/////////////// -->            
</b:if>
</b:if><!-- /if else item -->
  <!-- email post links -->
                                        
                  

</b:includable>
    <b:includable id='postQuickEdit' var='post'>
                <b:if cond='data:post.editUrl'>
                  <span expr:class='&quot;item-control &quot; + data:post.adminClass'>
                    <a expr:href='data:post.editUrl' expr:title='data:top.editPostMsg'>
                      <img alt='' class='icon-action' height='18' src='http://img2.blogblog.com/img/icon18_edit_allbkg.gif' width='18'/>
                    </a>
                  </span>
                </b:if>
              </b:includable>
    <b:includable id='shareButtons' var='post'>
                <b:if cond='data:top.showEmailButton'>
                  <a class='goog-inline-block share-button sb-email' expr:href='data:post.sharePostUrl + &quot;&amp;target=email&quot;' expr:title='data:top.emailThisMsg' target='_blank'>
                    <span class='share-button-link-text'>
                      <data:top.emailThisMsg/>
                    </span>
                  </a>
                </b:if>
                <b:if cond='data:top.showBlogThisButton'>
                  <a class='goog-inline-block share-button sb-blog' expr:href='data:post.sharePostUrl + &quot;&amp;target=blog&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=270,width=475\&quot;); return false;&quot;' expr:title='data:top.blogThisMsg' target='_blank'>
                    <span class='share-button-link-text'>
                      <data:top.blogThisMsg/>
                    </span>
                  </a>
                </b:if>
                <b:if cond='data:top.showTwitterButton'>
                  <a class='goog-inline-block share-button sb-twitter' expr:href='data:post.sharePostUrl + &quot;&amp;target=twitter&quot;' expr:title='data:top.shareToTwitterMsg' target='_blank'>
                    <span class='share-button-link-text'>
                      <data:top.shareToTwitterMsg/>
                    </span>
                  </a>
                </b:if>
                <b:if cond='data:top.showFacebookButton'>
                  <a class='goog-inline-block share-button sb-facebook' expr:href='data:post.sharePostUrl + &quot;&amp;target=facebook&quot;' expr:onclick='&quot;window.open(this.href, \&quot;_blank\&quot;, \&quot;height=430,width=640\&quot;); return false;&quot;' expr:title='data:top.shareToFacebookMsg' target='_blank'>
                    <span class='share-button-link-text'>
                      <data:top.shareToFacebookMsg/>
                    </span>
                  </a>
                </b:if>
                <b:if cond='data:top.showOrkutButton'>
                  <a class='goog-inline-block share-button sb-orkut' expr:href='data:post.sharePostUrl + &quot;&amp;target=orkut&quot;' expr:title='data:top.shareToOrkutMsg' target='_blank'>
                    <span class='share-button-link-text'>
                      <data:top.shareToOrkutMsg/>
                    </span>
                  </a>
                </b:if>
                <b:if cond='data:top.showDummy'>
                  <div class='goog-inline-block dummy-container'>
                    <data:post.dummyTag/>
                  </div>
                </b:if>
              </b:includable>
    <b:includable id='status-message'>
                <b:if cond='data:navMessage'>
                  <div class='status-msg-wrap alert alert-danger'>
                    <div class='status-msg-body'>
                      <data:navMessage/>
                    </div>
                    
                     
                     
                   
                  </div>
                  <div style='clear: both;'/>
                </b:if>
              </b:includable>
    <b:includable id='threaded-comment-form' var='post'>
                <div class='comment-form'>
                  <a name='comment-form'/>
                  <b:if cond='data:mobile'>
                    <p>
                      <data:blogCommentMessage/>
                    </p>
                    <data:blogTeamBlogMessage/>
                    <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
                    <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' style='display: none' width='100%'/>
                    <b:else/>
                    <p>
                      <data:blogCommentMessage/>
                    </p>
                    <data:blogTeamBlogMessage/>
                    <a expr:href='data:post.commentFormIframeSrc' id='comment-editor-src'/>
                    <iframe allowtransparency='true' class='blogger-iframe-colorize blogger-comment-from-post' frameborder='0' height='410' id='comment-editor' name='comment-editor' src='' width='100%'/>
                  </b:if>
                  <data:post.friendConnectJs/>
                  <data:post.cmtfpIframe/>
                  <script type='text/javascript'>
                    BLOG_CMT_createIframe(&#39;<data:post.appRpcRelayPath/>&#39;, &#39;<data:post.communityId/>&#39;);
                  </script>
                </div>
              </b:includable>
    <b:includable id='threaded_comment_js' var='post'>
                <script async='async' expr:src='data:post.commentSrc' type='text/javascript'/>
                <script type='text/javascript'>
                  (function() {
                    var items = <data:post.commentJso/>;
                    var msgs = <data:post.commentMsgs/>;
                    var config = <data:post.commentConfig/>;
                    /* <![CDATA[*/
                    var cursor = null;
                    if (items && items.length > 0) {
                      cursor = parseInt(items[items.length - 1].timestamp) + 1;
                    }
                    var bodyFromEntry = function(entry) {
                      if (entry.gd$extendedProperty) {
                        for (var k in entry.gd$extendedProperty) {
                          if (entry.gd$extendedProperty[k].name == 'blogger.contentRemoved') {
                            return '<span class="deleted-comment">' + entry.content.$t + '</span>';
                          }
                        }
                      }
                      return entry.content.$t;
                    }
                    var parse = function(data) {
                      cursor = null;
                      var comments = [];
                      if (data && data.feed && data.feed.entry) {
                        for (var i = 0, entry; entry = data.feed.entry[i]; i++) {
                          var comment = {};
                          /*comment ID, parsed out of the original id format*/
                          var id = /blog-(\d+).post-(\d+)/.exec(entry.id.$t);
                          comment.id = id ? id[2] : null;
                          comment.body = bodyFromEntry(entry);
                          comment.timestamp = Date.parse(entry.published.$t) + '';
                          if (entry.author && entry.author.constructor === Array) {
                            var auth = entry.author[0];
                            if (auth) {
                              comment.author = {
                                name: (auth.name ? auth.name.$t : undefined),
                                profileUrl: (auth.uri ? auth.uri.$t : undefined),
                                avatarUrl: (auth.gd$image ? auth.gd$image.src : undefined)
                              };
                            }
                          }
                          if (entry.link) {
                            if (entry.link[2]) {
                              comment.link = comment.permalink = entry.link[2].href;
                            }
                            if (entry.link[3]) {
                              var pid = /.*comments\/default\/(\d+)\?.*/.exec(entry.link[3].href);
                              if (pid && pid[1]) {
                                comment.parentId = pid[1];
                              }
                            }
                          }
                          comment.deleteclass = 'item-control blog-admin';
                          if (entry.gd$extendedProperty) {
                            for (var k in entry.gd$extendedProperty) {
                              if (entry.gd$extendedProperty[k].name == 'blogger.itemClass') {
                                comment.deleteclass += ' ' + entry.gd$extendedProperty[k].value;
                              } else if (entry.gd$extendedProperty[k].name == 'blogger.displayTime') {
                                comment.displayTime = entry.gd$extendedProperty[k].value;
                              }
                            }
                          }
                          comments.push(comment);
                        }
                      }
                      return comments;
                    };
                    var paginator = function(callback) {
                      if (hasMore()) {
                        var url = config.feed + '?alt=json&v=2&orderby=published&reverse=false&max-results=50';
                        if (cursor) {
                          url += '&published-min=' + new Date(cursor).toISOString();
                        }
                        window.bloggercomments = function(data) {
                          var parsed = parse(data);
                          cursor = parsed.length < 50 ? null
                          : parseInt(parsed[parsed.length - 1].timestamp) + 1
                          callback(parsed);
                          window.bloggercomments = null;
                        }
                        url += '&callback=bloggercomments';
                        var script = document.createElement('script');
                        script.type = 'text/javascript';
                        script.src = url;
                        document.getElementsByTagName('head')[0].appendChild(script);
                      }
                    };
                    var hasMore = function() {
                      return !!cursor;
                    };
                    var getMeta = function(key, comment) {
                      if ('iswriter' == key) {
                        var matches = !!comment.author
                        && comment.author.name == config.authorName
                        && comment.author.profileUrl == config.authorUrl;
                        return matches ? 'true' : '';
                      } else if ('deletelink' == key) {
                        return config.baseUri + '/delete-comment.g?blogID='
                        + config.blogId + '&postID=' + comment.id;
                      } else if ('deleteclass' == key) {
                        return comment.deleteclass;
                      }
                      return '';
                    };
                    var replybox = null;
                    var replyUrlParts = null;
                    var replyParent = undefined;
                    var onReply = function(commentId, domId) {
                      if (replybox == null) {
                        /* lazily cache replybox, and adjust to suit this style:*/
                        replybox = document.getElementById('comment-editor');
                        if (replybox != null) {
                          replybox.height = '250px';
                          replybox.style.display = 'block';
                          replyUrlParts = replybox.src.split('#');
                        }
                      }
                      if (replybox && (commentId !== replyParent)) {
                        document.getElementById(domId).insertBefore(replybox, null);
                        replybox.src = replyUrlParts[0]
                        + (commentId ? '&parentID=' + commentId : '')
                        + '#' + replyUrlParts[1];
                        replyParent = commentId;
                      }
                    };
                    var hash = (window.location.hash || '#').substring(1);
                    var startThread, targetComment;
                    if (/^comment-form_/.test(hash)) {
                      startThread = hash.substring('comment-form_'.length);
                    } else if (/^c[0-9]+$/.test(hash)) {
                      targetComment = hash.substring(1);
                    }
                    /* Configure commenting API:*/
                    var configJso = {
                      'maxDepth': config.maxThreadDepth
                    };
                    var provider = {
                      'id': config.postId,
                      'data': items,
                      'loadNext': paginator,
                      'hasMore': hasMore,
                      'getMeta': getMeta,
                      'onReply': onReply,
                      'rendered': true,
                      'initComment': targetComment,
                      'initReplyThread': startThread,
                      'config': configJso,
                      'messages': msgs
                    };
                    var render = function() {
                      if (window.goog && window.goog.comments) {
                        var holder = document.getElementById('comment-holder');
                        window.goog.comments.render(holder, provider);
                      }
                    };
                    /* render now, or queue to render when library loads:*/
                    if (window.goog && window.goog.comments) {
                      render();
                    } else {
                      window.goog = window.goog || {};
                      window.goog.comments = window.goog.comments || {};
                      window.goog.comments.loadQueue = window.goog.comments.loadQueue || [];
                      window.goog.comments.loadQueue.push(render);
                    }
                  })();
                  /*]]>*/
                </script>
              </b:includable>
    <b:includable id='threaded_comments' var='post'>
                <div class='comments well' id='comments'>
                  <a name='comments'/>
                  <h4>
                    <data:post.commentLabelFull/>
                    :
                  </h4>
                  <div class='comments-content'>
                    <b:if cond='data:post.embedCommentForm'>
                      <b:include data='post' name='threaded_comment_js'/>
                    </b:if>
                    <div id='comment-holder'>
                      <data:post.commentHtml/>
                    </div>
                  </div>
                  <p class='comment-footer'>
                    <b:if cond='data:post.allowNewComments'>
                      <b:include data='post' name='threaded-comment-form'/>
                      <b:else/>
                      <data:post.noNewCommentsText/>
                    </b:if>
                  </p>
                  <b:if cond='data:showCmtPopup'>
                    <div id='comment-popup'>
                      <iframe allowtransparency='true' frameborder='0' id='comment-actions' name='comment-actions' scrolling='no'>
                      </iframe>
                    </div>
                  </b:if>
                  <div id='backlinks-container'>
                    <div expr:id='data:widget.instanceId + &quot;_backlinks-container&quot;'>
                      <b:if cond='data:post.showBacklinks'>
                        <b:include data='post' name='backlinks'/>
                      </b:if>
                    </div>
                  </div>
                </div>
              </b:includable>
  </b:widget>
</b:section>
          <!-- END Loop --> 
 <!-- END Content --> 
        
            <b:section class='sidebar col-xs-12 col-sm-3 dmbs-right' id='sidebar' preferred='yes'>
               <b:widget id='Label1' locked='false' title='' type='Label'>
                 <b:includable id='main'>
  <div expr:class='&quot;widget-content &quot; + data:display + &quot;-label-widget-content&quot;'>
    <b:if cond='data:display == &quot;list&quot;'>
 <!-- チュートリアルメニューヘッダ -->
              <h2 class='menuhead'><a class='videot' dir='ltr' href='http://blendersketch.blogspot.jp/search/label/%E3%83%93%E3%83%87%E3%82%AA%E3%83%81%E3%83%A5%E3%83%BC%E3%83%88%E3%83%AA%E3%82%A2%E3%83%AB'>ビデオチュートリアル</a></h2>

              <p class='menulead'>主に海外&#12290;仕上がりは静止画中心&#12290;</p>  
              
<p class='labelhead'><data:title/></p>
<nav class='treenav'>
      <ul class='list'>
<b:loop values='data:labels' var='label'>
        
          <b:if cond='data:blog.url == data:label.url'>
             &lt;li class=&quot;active&quot; expr:dir=&#39;data:blog.languageDirection&#39;&gt;<data:label.name/>

          <b:else/>
           &lt;li&gt;
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='badge' dir='ltr'><data:label.count/></span>
          </b:if>
        &lt;/li&gt;
      </b:loop>

      </ul>
      </nav>
    <b:else/>
      <b:loop values='data:labels' var='label'>
        <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='badge' dir='ltr'><data:label.count/></span>
          </b:if>
        </span>
      </b:loop>
    </b:if>
    <b:include name='quickedit'/>
  </div>
</b:includable>
               </b:widget>
               <b:widget id='Label17' locked='false' title='仕上がり' type='Label'>
                 <b:includable id='main'>
  <div expr:class='&quot;widget-content &quot; + data:display + &quot;-label-widget-content&quot;'>
    <b:if cond='data:display == &quot;list&quot;'>
    
<p class='labelhead'><data:title/></p>
<nav class='treenav'>
      <ul class='list'>
<b:loop values='data:labels' var='label'>
        
          <b:if cond='data:blog.url == data:label.url'>
             &lt;li class=&quot;active&quot; expr:dir=&#39;data:blog.languageDirection&#39;&gt;
            <data:label.name/>

          <b:else/>
           &lt;li&gt;
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='badge' dir='ltr'><data:label.count/></span>
          </b:if>
        &lt;/li&gt;
      </b:loop>

      </ul>
      </nav>
    <b:else/>
      <b:loop values='data:labels' var='label'>
        <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='badge' dir='ltr'><data:label.count/></span>
          </b:if>
        </span>
      </b:loop>
    </b:if>
    <b:include name='quickedit'/>
  </div>
</b:includable>
               </b:widget>
               <b:widget id='Label2' locked='false' title='機能' type='Label'>
                 <b:includable id='main'>
  <div expr:class='&quot;widget-content &quot; + data:display + &quot;-label-widget-content&quot;'>
    <b:if cond='data:display == &quot;list&quot;'>
    
<p class='labelhead'><data:title/></p>
<nav class='treenav'>
      <ul class='list'>
<b:loop values='data:labels' var='label'>
        
          <b:if cond='data:blog.url == data:label.url'>
             &lt;li class=&quot;active&quot; expr:dir=&#39;data:blog.languageDirection&#39;&gt;
            <data:label.name/>

          <b:else/>
           &lt;li&gt;
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='badge' dir='ltr'><data:label.count/></span>
          </b:if>
        &lt;/li&gt;
      </b:loop>

      </ul>
      </nav>
    <b:else/>
      <b:loop values='data:labels' var='label'>
        <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='badge' dir='ltr'><data:label.count/></span>
          </b:if>
        </span>
      </b:loop>
    </b:if>
    <b:include name='quickedit'/>
  </div>
</b:includable>
               </b:widget>
               <b:widget id='Label16' locked='false' title='バージョン' type='Label'>
                 <b:includable id='main'>
  <div expr:class='&quot;widget-content &quot; + data:display + &quot;-label-widget-content&quot;'>
    <b:if cond='data:display == &quot;list&quot;'>
 
<p class='labelhead'><data:title/></p>
<nav class='treenav'>
      <ul class='list'>
<b:loop values='data:labels' var='label'>
        
          <b:if cond='data:blog.url == data:label.url'>
             &lt;li class=&quot;active&quot; expr:dir=&#39;data:blog.languageDirection&#39;&gt;<data:label.name/>

          <b:else/>
           &lt;li&gt;
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='badge' dir='ltr'><data:label.count/></span>
          </b:if>
        &lt;/li&gt;
      </b:loop>

      </ul>
      </nav>
    <b:else/>
      <b:loop values='data:labels' var='label'>
        <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='badge' dir='ltr'><data:label.count/></span>
          </b:if>
        </span>
      </b:loop>
    </b:if>
    <b:include name='quickedit'/>
  </div>
</b:includable>
               </b:widget>
               <b:widget id='Label5' locked='false' title='ラベル' type='Label'>
                 <b:includable id='main'>
  <div expr:class='&quot;widget-content &quot; + data:display + &quot;-label-widget-content&quot;'>
    <b:if cond='data:display == &quot;list&quot;'>
     <!-- ブログメニューヘッダ -->
              
              <h2 class='menuhead'><a class='blogt' dir='ltr' href='http://blendersketch.blogspot.jp/search/label/%E3%83%96%E3%83%AD%E3%82%B0'>ブログ</a></h2>
              <p class='menulead'>Blenderについてのメモ的なことやお知らせ&#12290;</p>
<p class='labelhead'><a expr:href='&quot;http://blendersketch.blogspot.jp/search/label/&quot; + data:title'><data:title/></a></p>
<nav class='treenav'>
      <ul class='list'>
<b:loop values='data:labels' var='label'>
        
          <b:if cond='data:blog.url == data:label.url'>
             &lt;li class=&quot;active&quot; expr:dir=&#39;data:blog.languageDirection&#39;&gt;
            <data:label.name/>

          <b:else/>
           &lt;li&gt;
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='badge' dir='ltr'><data:label.count/></span>
          </b:if>
        &lt;/li&gt;
      </b:loop>

      </ul>
      </nav>
    <b:else/>
      <b:loop values='data:labels' var='label'>
        <span expr:class='&quot;label-size label-size-&quot; + data:label.cssSize'>
          <b:if cond='data:blog.url == data:label.url'>
            <span expr:dir='data:blog.languageDirection'><data:label.name/></span>
          <b:else/>
            <a expr:dir='data:blog.languageDirection' expr:href='data:label.url'><data:label.name/></a>
          </b:if>
          <b:if cond='data:showFreqNumbers'>
            <span class='badge' dir='ltr'><data:label.count/></span>
          </b:if>
        </span>
      </b:loop>
    </b:if>
    <b:include name='quickedit'/>
  </div>
</b:includable>
               </b:widget>
               <b:widget id='PopularPosts3' locked='false' title='人気の投稿' type='PopularPosts'>
                 <b:includable id='main'>
                  <b:if cond='data:title'>
                     <h3 class='widget-title'><data:title/></h3>
                  </b:if>
                  <div class='widget-content popular-posts'>
                    <ul>
                      <b:loop values='data:posts' var='post'>
                        <li>
                          <b:if cond='data:showThumbnails == &quot;false&quot;'>
                            <b:if cond='data:showSnippets == &quot;false&quot;'>
                              <!-- (1) No snippet/thumbnail -->
                              <a expr:href='data:post.href'>
                                <data:post.title/>
                              </a>
                              <b:else/>
                              <!-- (2) Show only snippets -->
                              <div class='item-title'>
                                <a expr:href='data:post.href'>
                                  <data:post.title/>
                                </a>
                              </div>
                              <div class='item-snippet'>
                                <data:post.snippet/>
                              </div>
                            </b:if>
                            <b:else/>
                            <b:if cond='data:showSnippets == &quot;false&quot;'>
                              <!-- (3) Show only thumbnails -->
                              <div class='item-thumbnail-only'>
                                <b:if cond='data:post.thumbnail'>
                                  <div class='item-thumbnail'>
                                    <a expr:href='data:post.href' target='_blank'>
                                      <img alt='' border='0' expr:height='data:thumbnailSize' expr:src='data:post.thumbnail' expr:width='data:thumbnailSize'/>
                                    </a>
                                  </div>
                <b:else/>
                                  <div class='item-thumbnail'>
                                    <a expr:href='data:post.href' target='_blank'>
                                      <img src='https://lh4.googleusercontent.com/-RLm9s5l82-k/U60MsmGo9EI/AAAAAAAAB54/iPgMctXAGY4/s72-c/frontmatter_2.gif'/>
                                    </a>
                                  </div>
                                </b:if>
                                <div class='item-title'>
                                  <a expr:href='data:post.href'>
                                    <data:post.title/>
                                  </a>
                                </div>
                              </div>
                              <div style='clear: both;'/>
                              <b:else/>
                              <!-- (4) Show snippets and thumbnails -->
                              <div class='item-content'>
                                <b:if cond='data:post.thumbnail'>
                                  <div class='item-thumbnail'>
                                    <a expr:href='data:post.href' target='_blank'>
                                      <img alt='' border='0' expr:height='data:thumbnailSize' expr:src='data:post.thumbnail' expr:width='data:thumbnailSize'/>
                                    </a>
                                  </div>
                                </b:if>
                                <div class='item-title'>
                                  <a expr:href='data:post.href'>
                                    <data:post.title/>
                                  </a>
                                </div>
                                <div class='item-snippet'>
                                  <data:post.snippet/>
                                </div>
                              </div>
                              <div style='clear: both;'/>
                            </b:if>
                          </b:if>
                        </li>
                      </b:loop>
                    </ul>
                    <b:include name='quickedit'/>
                  </div>
                </b:includable>
               </b:widget>
               <b:widget id='AdSense1' locked='false' title='' type='AdSense'>
                 <b:includable id='main'>
  <div class='widget-content'>
    <b:if cond='data:blog.disableAdSenseWidget != &quot;true&quot;'>
      <data:adCode/>
    </b:if>
    <b:include name='quickedit'/>
  </div>
</b:includable>
               </b:widget>
               <b:widget id='BlogArchive1' locked='false' title='アーガイブ' type='BlogArchive'>
                 <b:includable id='main'>
                  <b:if cond='data:title'>
                     <h3 class='widget-title'><data:title/></h3>
                  </b:if>
                  <div class='widget-content'>
                    <div id='ArchiveList'>
                      <div expr:id='data:widget.instanceId + &quot;_ArchiveList&quot;'>
                        <b:if cond='data:style == &quot;HIERARCHY&quot;'>
                          <b:include data='data' name='interval'/>
                        </b:if>
                        <b:if cond='data:style == &quot;FLAT&quot;'>
                          <b:include data='data' name='flat'/>
                        </b:if>
                        <b:if cond='data:style == &quot;MENU&quot;'>
                          <b:include data='data' name='menu'/>
                        </b:if>
                      </div>
                    </div>
                    <b:include name='quickedit'/>
                  </div>
                </b:includable>
                 <b:includable id='flat' var='data'>
                  <ul class='flat'>
                    <b:loop values='data:data' var='i'>
                      <li class='archivedate'>
                        <a expr:href='data:i.url'>
                          <data:i.name/>
                        </a>
                        (
                        <data:i.post-count/>
                        )
                      </li>
                    </b:loop>
                  </ul>
                </b:includable>
                 <b:includable id='interval' var='intervalData'>
                  <b:loop values='data:intervalData' var='i'>
                    <ul class='hierarchy'>
                      <li expr:class='&quot;archivedate &quot; + data:i.expclass'>
                        <b:include data='i' name='toggle'/>
                        <a class='post-count-link' expr:href='data:i.url'>
                          <data:i.name/>
                        </a>
                        <span class='post-count' dir='ltr'>
                          (
                          <data:i.post-count/>
                          )
                        </span>
                        <b:if cond='data:i.data'>
                          <b:include data='i.data' name='interval'/>
                        </b:if>
                        <b:if cond='data:i.posts'>
                          <b:include data='i.posts' name='posts'/>
                        </b:if>
                      </li>
                    </ul>
                  </b:loop>
                </b:includable>
                 <b:includable id='menu' var='data'>
                  <select expr:id='data:widget.instanceId + &quot;_ArchiveMenu&quot;'>
                    <option value=''>
                      <data:title/>
                    </option>
                    <b:loop values='data:data' var='i'>
                      <option expr:value='data:i.url'>
                        <data:i.name/>
                        (
                        <data:i.post-count/>
                        )
                      </option>
                    </b:loop>
                  </select>
                </b:includable>
                 <b:includable id='posts' var='posts'>
                  <ul class='posts'>
                    <b:loop values='data:posts' var='i'>
                      <li>
                        <a expr:href='data:i.url'>
                          <data:i.title/>
                        </a>
                      </li>
                    </b:loop>
                  </ul>
                </b:includable>
                 <b:includable id='toggle' var='interval'>
                  <b:if cond='data:interval.toggleId'>
                    <b:if cond='data:interval.expclass == &quot;expanded&quot;'>
                      <a class='toggle' href='javascript:void(0)'>
                        <span class='zippy toggle-open'>
                          &#9660;&#160;
                        </span>
                      </a>
                      <b:else/>
                      <a class='toggle' href='javascript:void(0)'>
                        <span class='zippy'>
                          <b:if cond='data:blog.languageDirection == &quot;rtl&quot;'>
                            &#187;&#160;
                            <b:else/>
                            &#187;&#160;
                          </b:if>
                        </span>
                      </a>
                    </b:if>
                  </b:if>
                </b:includable>
               </b:widget>
               <b:widget id='Stats1' locked='false' title='ページビューの合計' type='Stats'>
                 <b:includable id='main'>
  <b:if cond='data:title'> <h3 class='widget-title'><data:title/></h3></b:if>
  <div class='widget-content'>
    <!-- Content is going to be visible when data will be fetched from server. -->
    <div expr:id='data:widget.instanceId + &quot;_content&quot;' style='display: none;'>
      <!-- Counter and image will be injected later via AJAX call. -->
      <b:if cond='data:showSparkline'>
        <img alt='Sparkline' expr:id='data:widget.instanceId + &quot;_sparkline&quot;' height='30' width='75'/>
      </b:if>
      <b:if cond='data:showGraphicalCounter'>
        <span class='counter-wrapper graph-counter-wrapper' expr:id='data:widget.instanceId + &quot;_totalCount&quot;'/>
      <b:else/>
        <span class='counter-wrapper text-counter-wrapper' expr:id='data:widget.instanceId + &quot;_totalCount&quot;'/>
      </b:if>
      <b:include name='quickedit'/>
    </div>
  </div>
</b:includable>
               </b:widget>
               <b:widget id='Followers1' locked='false' title='フォロワー' type='Followers'>
                 <b:includable id='main'>
  <b:if cond='data:title != &quot;&quot;'>
    <b:if cond='data:codeSnippet != &quot;&quot;'>
      <h2 class='title'><data:title/></h2>
    <b:else/>
      <b:if cond='data:totalFollowerCount != &quot;&quot;'>
        <h2 class='title'><data:title/> (<data:totalFollowerCount/>)</h2>
      </b:if>
    </b:if>  
  </b:if>
  <div class='widget-content'>
    <div expr:id='data:widget.instanceId + &quot;-wrapper&quot;'>
      <b:if cond='data:codeSnippet != &quot;&quot;'>
        <div style='margin-right:2px;'>
          <data:codeSnippet/>
        </div>
      <b:else/>
        <b:if cond='data:totalFollowerCount == &quot;&quot;'>
          <span class='item-control following-not-admin'>
            <b><data:failureSnippet/></b>
          </span>
          <span class='item-control blog-admin'>
            <b><data:adminFailureSnippet/></b>
          </span>
        <b:else/>
          <b:if cond='data:followingLinkPresent'>
            <div class='follow-this profile-link item-control following-follow-this'>
              <a expr:href='&quot;javascript:_FollowersView._openPopup(\&quot;&quot; + data:followUri + &quot;\&quot;);&quot;'>
                <data:followThisMessage/>
              </a>
            </div>
            <div class='follow-this profile-link item-control following-stop-following-this'>
              <a expr:href='&quot;javascript:_FollowersView._openPopup(\&quot;&quot; + data:followUri + &quot;\&quot;);&quot;'>
                <data:stopFollowingMessage/>
              </a>
            </div>
          </b:if>
  
          <div class='followers-grid'>
            <b:if cond='data:totalFollowerCount == 0'>
              <div class='profile-link item-control following-follow-this'>
                <data:emptyFollowersMessage/>
              </div>
            </b:if>
            <!--
            Relies on the js written out in navbar.gxp
            -->
            <b:loop values='data:followers' var='follower'>
              <div class='follower'>
                <a expr:href='data:follower.profileUrl' expr:title='data:follower.displayName' rel='nofollow'>
                <img class='follower-img' expr:alt='data:follower.displayName' expr:height='data:follower.imageHeight' expr:onerror='&quot;this.onerror=null;this.src=\&quot;&quot; + data:anonFollowerImageUrl + &quot;\&quot;;&quot;' expr:onload='&quot;setAttributeOnload(this, \&quot;src\&quot;, \&quot;&quot; + data:follower.imageUrl + &quot;\&quot;)&quot;' expr:width='data:follower.imageWidth' src='http://img1.blogblog.com/img/blank.gif'/>
                </a>
              </div>
            </b:loop>
            <div class='clear'/>
          </div>
  
          <div class='followers-canvas profile-link'>
            <data:followersFooterMessage/>
            <span class='item-control following-not-admin'>
              <a expr:href='data:followersUri'>
                <data:viewAllMessage/>
              </a>
            </span>
            <span class='item-control blog-admin'>
              <a expr:href='data:manageFollowersUri'>
                <data:manageFollowersMessage/>
              </a>
            </span>
          </div>
          </b:if>
      </b:if>
    </div>
    <b:include name='quickedit'/>
  </div>
</b:includable>
               </b:widget>
               <b:widget id='Attribution1' locked='false' title='' type='Attribution'>
                 <b:includable id='main'>
    <b:if cond='data:feedbackSurveyLink'>
      <div class='mobile-survey-link' style='text-align: center;'>
        <data:feedbackSurveyLink/>
      </div>
    </b:if>

    <div class='widget-content' style='text-align: center;'>
      <b:if cond='data:attribution != &quot;&quot;'>
       <data:attribution/>
      </b:if>
    </div>

    <b:include name='quickedit'/>
  </b:includable>
               </b:widget>
               <b:widget id='Navbar1' locked='true' title='Navbar' type='Navbar'>
                 <b:includable id='main'>&lt;script type=&quot;text/javascript&quot;&gt;
    function setAttributeOnload(object, attribute, val) {
      if(window.addEventListener) {
        window.addEventListener(&#39;load&#39;,
          function(){ object[attribute] = val; }, false);
      } else {
        window.attachEvent(&#39;onload&#39;, function(){ object[attribute] = val; });
      }
    }
  &lt;/script&gt;
&lt;div id=&quot;navbar-iframe-container&quot;&gt;&lt;/div&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;https://apis.google.com/js/plusone.js&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;&gt;
        gapi.load(&quot;gapi.iframes:gapi.iframes.style.bubble&quot;, function() {
          if (gapi.iframes &amp;&amp; gapi.iframes.getContext) {
            gapi.iframes.getContext().openChild({
                url: &#39;https://draft.blogger.com/navbar.g?targetBlogID\0755051161372427020341\46blogName\75Blender+Sketch\46publishMode\75PUBLISH_MODE_BLOGSPOT\46navbarType\75DISABLED\46layoutType\75LAYOUTS\46searchRoot\75http://blendersketch.blogspot.com/search\46blogLocale\75ja\46v\0752\46homepageUrl\75http://blendersketch.blogspot.com/\46readAccessMode\75PRIVATE\46vt\759074366764602067830&#39;,
                where: document.getElementById(&quot;navbar-iframe-container&quot;),
                id: &quot;navbar-iframe&quot;
            });
          }
        });
      &lt;/script&gt;&lt;script type=&quot;text/javascript&quot;&gt;
(function() {
var script = document.createElement(&#39;script&#39;);
script.type = &#39;text/javascript&#39;;
script.src = &#39;//pagead2.googlesyndication.com/pagead/js/google_top_exp.js&#39;;
var head = document.getElementsByTagName(&#39;head&#39;)[0];
if (head) {
head.appendChild(script);
}})();
&lt;/script&gt;
</b:includable>
               </b:widget>
             </b:section>
      </div><!-- END row --> 
    </div><!-- END Container --> 
    
    <div id='footer'>
      
      <p class='footer-link'>
        &#169; 
        <a expr:href='data:blog.homepageUrl'>
            <data:blog.title/>
        </a>
        2013 . Powered by 
        <a href='http://twitter.github.com/bootstrap/' rel='nofollow' title='Bootstrap'>
          Bootstrap
        </a>
        and 
        <a href='http://bootstrap.slugs.in' rel='nofollow' title='Bootstrap Blogger Templates'>
          Bootstrap Blogger Templates
        </a>
      </p>
    </div>
    <!-- END Footer --> 
    <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js' type='text/javascript'/>
     <script src='http://umbrelllla.github.io/bootstrap.min.js'/>
     <b:if cond='data:blog.pageType == &quot;item&quot;'>
     <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery.colorbox/1.4.33/jquery.colorbox-min.js'/>
      </b:if>
      <script type='text/javascript'>
        /*fix nav*/
        $(function(){ var box = $(&quot;.navbar&quot;);
        var leftsidebar = $(&quot;.content&quot;);
        var boxTop = leftsidebar.offset().top;
        $(window).scroll(function () {
         if($(window).scrollTop() &gt;= boxTop) {
           box.addClass(&quot;navbar-fixed-top&quot;);
            $(&quot;#content&quot;).css(&quot;margin-top&quot;,&quot;50px&quot;); 
          } else {
           box.removeClass(&quot;navbar-fixed-top&quot;);
           $(&quot;#content&quot;).css(&quot;margin-top&quot;,&quot;200px&quot;)
            } 
            }); 
            });


</script>
<b:if cond='data:blog.pageType == &quot;item&quot;'>
<script type='text/javascript'>
/*<![CDATA[*/
/*colorbox*/
(function($){
    $(function(){
        $('a[imageanchor="1"]').colorbox({
            opacity: '0.7',
            maxWidth:'100%',
            maxHeight:'100%',
            speed:'200',
            rel:'photo',

        });
    });
})(jQuery);
/*youtube lazy link*/

 (function(b){function a(d){var f=d.data("width"),c=d.data("height"),e=d.data("ratio"),j=d.data("youtube-id"),h=["16","9"],g=0,i=d.data("parameters")||"";
if(typeof f==="undefined"||typeof c==="undefined"){c=0;f="100%";h=(e.split(":")[1]/e.split(":")[0])*100;g=h+"%";}d.css({position:"relative",height:c,width:f,"padding-top":g,background:"url(//img.youtube.com/vi/"+j+"/hqdefault.jpg) center center no-repeat",cursor:"pointer","background-size":"cover"}).html('<p id="lazyYT-title-'+j+'" class="lazyYT-title"></p><div class="lazyYT-button"></div>').addClass("lazyYT-image-loaded");
b.getJSON("https://gdata.youtube.com/feeds/api/videos/"+j+"?v=2&alt=json",function(k){b("#lazyYT-title-"+j).text(k.entry.title.$t);});d.on("click",function(k){k.preventDefault();
if(!d.hasClass("lazyYT-video-loaded")&&d.hasClass("lazyYT-image-loaded")){d.html('<iframe width="'+f+'" height="'+c+'" src="//www.youtube.com/embed/'+j+"?autoplay=1&"+i+'" style="position:absolute; top:0; left:0; width:100%; height:100%;" frameborder="0" allowfullscreen></iframe>').removeClass("lazyYT-image-loaded").addClass("lazyYT-video-loaded");
}});}b.fn.lazyYT=function(){return this.each(function(){var c=b(this).css("cursor","pointer");a(c);});};}(jQuery));
$('.js-lazyYT').lazyYT();
/*]]>*/
</script>
</b:if>

<b:if cond='data:blog.pageType != &quot;item&quot;'>
<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<script type='text/javascript'>
  /*<![CDATA[*/
    var postperpage=5;
    var numshowpage=2;
    var upPageWord ='« Previous Page';
    var downPageWord ='Next Page »';
    var urlactivepage=location.href;
    var home_page="/";
  /*]]>*/
</script>
<script type='text/javascript'>
  /*<![CDATA[*/
    var nopage;var jenis;var nomerhal;var lblname1;halamanblogger();function loophalaman(banyakdata){var html='';nomerkiri=parseInt(numshowpage/2);if(nomerkiri==numshowpage-nomerkiri){numshowpage=nomerkiri*2+1}mulai=nomerhal-nomerkiri;if(mulai<1)mulai=1;maksimal=parseInt(banyakdata/postperpage)+1;if(maksimal-1==banyakdata/postperpage)maksimal=maksimal-1;akhir=mulai+numshowpage-1;if(akhir>maksimal)akhir=maksimal;html+="<span class='showpageOf'>Page "+nomerhal+' of '+maksimal+"</span>";var prevnomer=parseInt(nomerhal)-1;if(nomerhal>1){if(nomerhal==2){if(jenis=="page"){html+='<span class="showpage"><a href="'+home_page+'">'+upPageWord+'</a></span>'}else{html+='<span class="showpageNum"><a href="/search/label/'+lblname1+'?&max-results='+postperpage+'">'+upPageWord+'</a></span>'}}else{if(jenis=="page"){html+='<span class="showpageNum"><a href="#" onclick="redirectpage('+prevnomer+');return false">'+upPageWord+'</a></span>'}else{html+='<span class="showpageNum"><a href="#" onclick="redirectlabel('+prevnomer+');return false">'+upPageWord+'</a></span>'}}}if(mulai>1){if(jenis=="page"){html+='<span class="showpageNum"><a href="'+home_page+'">1</a></span>'}else{html+='<span class="showpageNum"><a href="/search/label/'+lblname1+'?&max-results='+postperpage+'">1</a></span>'}}if(mulai>2){html+=' ... '}for(var jj=mulai;jj<=akhir;jj++){if(nomerhal==jj){html+='<span class="showpagePoint">'+jj+'</span>'}else if(jj==1){if(jenis=="page"){html+='<span class="showpageNum"><a href="'+home_page+'">1</a></span>'}else{html+='<span class="showpageNum"><a href="/search/label/'+lblname1+'?&max-results='+postperpage+'">1</a></span>'}}else{if(jenis=="page"){html+='<span class="showpageNum"><a href="#" onclick="redirectpage('+jj+');return false">'+jj+'</a></span>'}else{html+='<span class="showpageNum"><a href="#" onclick="redirectlabel('+jj+');return false">'+jj+'</a></span>'}}}if(akhir<maksimal-1){html+='...'}if(akhir<maksimal){if(jenis=="page"){html+='<span class="showpageNum"><a href="#" onclick="redirectpage('+maksimal+');return false">'+maksimal+'</a></span>'}else{html+='<span class="showpageNum"><a href="#" onclick="redirectlabel('+maksimal+');return false">'+maksimal+'</a></span>'}}var nextnomer=parseInt(nomerhal)+1;if(nomerhal<maksimal){if(jenis=="page"){html+='<span class="showpageNum"><a href="#" onclick="redirectpage('+nextnomer+');return false">'+downPageWord+'</a></span>'}else{html+='<span class="showpageNum"><a href="#" onclick="redirectlabel('+nextnomer+');return false">'+downPageWord+'</a></span>'}}var pageArea=document.getElementsByName("pageArea");var blogPager=document.getElementById("blog-pager");for(var p=0;p<pageArea.length;p++){pageArea[p].innerHTML=html}if(pageArea&&pageArea.length>0){html=''}if(blogPager){blogPager.innerHTML=html}}function hitungtotaldata(root){var feed=root.feed;var totaldata=parseInt(feed.openSearch$totalResults.$t,10);loophalaman(totaldata)}function halamanblogger(){var thisUrl=urlactivepage;if(thisUrl.indexOf("/search/label/")!=-1){if(thisUrl.indexOf("?updated-max")!=-1){lblname1=thisUrl.substring(thisUrl.indexOf("/search/label/")+14,thisUrl.indexOf("?updated-max"))}else{lblname1=thisUrl.substring(thisUrl.indexOf("/search/label/")+14,thisUrl.indexOf("?&max"))}}if(thisUrl.indexOf("?q=")==-1&&thisUrl.indexOf(".html")==-1){if(thisUrl.indexOf("/search/label/")==-1){jenis="page";if(urlactivepage.indexOf("#PageNo=")!=-1){nomerhal=urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length)}else{nomerhal=1}document.write("<script src=\""+home_page+"feeds/posts/summary?max-results=1&alt=json-in-script&callback=hitungtotaldata\"><\/script>")}else{jenis="label";if(thisUrl.indexOf("&max-results=")==-1){postperpage=20}if(urlactivepage.indexOf("#PageNo=")!=-1){nomerhal=urlactivepage.substring(urlactivepage.indexOf("#PageNo=")+8,urlactivepage.length)}else{nomerhal=1}document.write('<script src="'+home_page+'feeds/posts/summary/-/'+lblname1+'?alt=json-in-script&callback=hitungtotaldata&max-results=1" ><\/script>')}}}function redirectpage(numberpage){jsonstart=(numberpage-1)*postperpage;nopage=numberpage;var nBody=document.getElementsByTagName('head')[0];var newInclude=document.createElement('script');newInclude.type='text/javascript';newInclude.setAttribute("src",home_page+"feeds/posts/summary?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost");nBody.appendChild(newInclude)}function redirectlabel(numberpage){jsonstart=(numberpage-1)*postperpage;nopage=numberpage;var nBody=document.getElementsByTagName('head')[0];var newInclude=document.createElement('script');newInclude.type='text/javascript';newInclude.setAttribute("src",home_page+"feeds/posts/summary/-/"+lblname1+"?start-index="+jsonstart+"&max-results=1&alt=json-in-script&callback=finddatepost");nBody.appendChild(newInclude)}function finddatepost(root){post=root.feed.entry[0];var timestamp1=post.published.$t.substring(0,19)+post.published.$t.substring(23,29);var timestamp=encodeURIComponent(timestamp1);if(jenis=="page"){var alamat="/search?updated-max="+timestamp+"&max-results="+postperpage+"#PageNo="+nopage}else{var alamat="/search/label/"+lblname1+"?updated-max="+timestamp+"&max-results="+postperpage+"#PageNo="+nopage}location.href=alamat}
  /*]]>*/
</script>
</b:if>
</b:if>


</body></html>