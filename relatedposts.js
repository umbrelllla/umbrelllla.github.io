<section class='boxframe' id='related-posts'>
    <div id='related-posts'>
        <script type='text/javascript'>
            /*<![CDATA[*/
            var ry = '<h3 class="heading-border">&#9829;関連しているかもしれない記事</h3>';
            rn = '<h3 class="heading-border">関連記事が見つかりませんでした</h3>';
            rcomment = 'comments';
            r
            disable = 'disable comments';
            commentYN = 'yes';
            var dw = '';
            var currenttitle = document.getElementById('currenttitle').innerHTML;
            titles = new Array();
            titlesNum = 0;
            urls = new Array();
            timeR = new Array();
            commentsNum = new Array();
            comments = new Array();

            function related_results_labels(c) {
                for (var b = 0; b < c.feed.entry.length; b++) {
                    var d = c.feed.entry[b];
                    titles[titlesNum] = d.title.$t;
                    for (var a = 0; a < d.link.length; a++) {
                        if ('thr$total' in d) {
                            commentsNum[titlesNum] = d.thr$total.$t + ' ' + rcomment
                        } else {
                            commentsNum[titlesNum] = rdisable
                        };
                        if (d.link[a].rel == "alternate") {
                            urls[titlesNum] = d.link[a].href;
                            timeR[titlesNum] = d.published.$t;
                            titlesNum++;
                            break
                        }
                    }
                }
            }

            function removeRelatedDuplicates() {
                var b = new Array(0);
                c = new Array(0);
                e = new Array(0);
                f = new Array(0);
                g = new Array(0);
                for (var a = 0; a < urls.length; a++) {
                    if (!contains(b, urls[a])) {
                        b.length += 1;
                        b[b.length - 1] = urls[a];
                        c.length += 1;
                        c[c.length - 1] = titles[a];
                        e.length += 1;
                        e[e.length - 1] = timeR[a];
                        f.length += 1;
                        g.length += 1;
                        g[g.length - 1] = commentsNum[a]
                    }
                }
                urls = b;
                titles = c;
                timeR = e;
                commentsNum = g
            }

            function contains(b, d) {
                for (var c = 0; c < b.length; c++) {
                    if (b[c] == d) {
                        return true
                    }
                }
                return false
            }

            function printRelatedLabels(a) {
                var y = a.indexOf('?m=0');
                if (y != -1) {
                    a = a.replace(/\?m=0/g, '')
                }
                for (var b = 0; b < urls.length; b++) {
                    if (urls[b] == a) {
                        urls.splice(b, 1);
                        titles.splice(b, 1);
                        timeR.splice(b, 1);
                        commentsNum.splice(b, 1)
                    }
                }
                var c = Math.floor((titles.length - 1) * Math.random());
                var b = 0;
                if (titles.length == 0) {
                    dw += rn
                } else {
                    dw += ry;
                    dw += '<ul>';
                    while (b < titles.length && b < 20 && b < maxresults) {
                        if (y != -1) {
                            urls[c] = urls[c] + '?m=0'
                        }
                        if (commentYN == 'yes') {
                            comments[c] = ' - ' + commentsNum[c]
                        } else {
                            comments[c] = ''
                        };
                        if (titles[c] != currenttitle) {
                            dw += '<li><a href="' + urls[c] + '" rel="nofollow">' + titles[c] + '</a><div class="clear"></div></li></div>'
                        };
                        if (c < titles.length - 1) {
                            c++
                        } else {
                            c = 0
                        }
                        b++
                    }
                    dw += '</ul>'
                };
                urls.splice(0, urls.length);
                titles.splice(0, titles.length);
                document.getElementById('related-posts').innerHTML = dw
            }; /*]]>*/
        </script>
        <b:loop values='data:post.labels' var='label'>
            <script expr:src='&quot;/feeds/posts/default/-/&quot; + data:label.name + &quot;?alt=json-in-script&amp;callback=related_results_labels&quot;' type='text/javascript' /> </b:loop>
        <script type='text/javascript'>
            var maxresults = 6;
            removeRelatedDuplicates();
            printRelatedLabels( & #39;<data:post.url/>&# 39;);
        </script>
    </div>
