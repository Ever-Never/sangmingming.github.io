!function(e,t){"function"==typeof define&&define.amd?define([],t):e.Mobile=t()}(this,function(){function e(e){this.ctn=e.ctn,this.init(),this.renderDOM(),this.combine(),this.bindDOM()}var t,n,i,o=!1;return e.prototype.init=function(){this.radio=document.body.scrollHeight/document.body.scrollWidth,this.scaleW=document.body.scrollWidth,this.idx=0},e.prototype.combine=function(){t&&(document.getElementById("js-mobile-tagcloud").innerHTML=t.innerHTML),n&&(document.getElementById("js-mobile-aboutme").innerHTML=n.innerHTML),i&&(document.getElementById("js-mobile-friends").innerHTML=i.innerHTML)},e.prototype.renderDOM=function(){var e=document.createElement("div");e.id="viewer",e.className="hide",t=document.getElementById("js-tagcloud"),n=document.getElementById("js-aboutme"),i=document.getElementById("js-friends");var o='<div class="viewer-title"><a href="/">主页</a></div>',a='<div class="viewer-title"><a href="/archives">所有文章</a></div>',r='<div class="viewer-title"><a href="/links">朋友</a></div>',s='<div class="viewer-title"><a href="/about">关于</a></div>';e.innerHTML='<div id="viewer-box">		<div class="viewer-box-l">			<div class="viewer-box-wrap">'+o+a+r+s+'</div>		</div>		<div class="viewer-box-r"></div>		</div>',document.getElementsByTagName("body")[0].appendChild(e);var l=document.getElementById("viewer-box");this.wrap=l,l.style.height=document.body.scrollHeight+"px"},e.prototype.show=function(){var e=this;document.getElementById("viewer").className="",setTimeout(function(){e.wrap.className="anm-swipe"},0),o=!0,document.ontouchstart=function(e){return"A"!=e.target.tagName?!1:void 0}},e.prototype.hide=function(){document.getElementById("viewer-box").className="",o=!1,document.ontouchstart=function(){return!0}},e.prototype.bindDOM=function(){var e=this;e.scaleW,document.getElementById("viewer-box").addEventListener("webkitTransitionEnd",function(){0==o&&(document.getElementById("viewer").className="hide",o=!0)},!1),e.ctn.addEventListener("touchend",function(){e.show()},!1);var t,n,i=document.getElementsByClassName("viewer-box-r")[0];i.addEventListener("touchstart",function(){t=+new Date},!1),i.addEventListener("touchend",function(){n=+new Date,300>n-t&&e.hide(),t=0,n=0},!1);var a=$("#mobile-nav .overlay"),r=$(".js-mobile-header");window.onscroll=function(){var e=document.documentElement.scrollTop+document.body.scrollTop;e>=69?a.addClass("fixed"):a.removeClass("fixed"),e>=160?r.removeClass("hide").addClass("fixed"):r.addClass("hide").removeClass("fixed")},r[0].addEventListener("touchstart",function(){$("html, body").animate({scrollTop:0},"slow")},!1)},e});