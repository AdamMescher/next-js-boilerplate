(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{106:function(e,t,r){e.exports=r(105)},204:function(e,t,r){__NEXT_REGISTER_PAGE("/",function(){return e.exports=r(231),{page:e.exports.default}})},205:function(e,t,r){e.exports=r(206)},206:function(e,t,r){"use strict";var n=r(19),a=r(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r(207)),i=a(r(47)),l=a(r(7)),c=a(r(8)),p=a(r(16)),f=a(r(17)),s=a(r(18)),u=a(r(49)),h=a(r(13)),m=r(103),d=n(r(0)),v=(a(r(25)),n(r(46))),E=r(24);var g=function(e){function t(){var e,r,n,a,o,c;(0,l.default)(this,t);for(var s=arguments.length,d=new Array(s),g=0;g<s;g++)d[g]=arguments[g];return r=(0,p.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(d))),(0,h.default)((0,u.default)((0,u.default)(r)),"formatUrls",(n=function(e,t){return{href:e&&"object"===(0,i.default)(e)?(0,m.format)(e):e,as:t&&"object"===(0,i.default)(t)?(0,m.format)(t):t}},a=null,o=null,c=null,function(e,t){if(e===a&&t===o)return c;var r=n(e,t);return a=e,o=t,c=r,r})),(0,h.default)((0,u.default)((0,u.default)(r)),"linkClicked",function(e){var t=e.currentTarget,n=t.nodeName,a=t.target;if("A"!==n||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=r.formatUrls(r.props.href,r.props.as),i=o.href,l=o.as;if(function(e){var t=(0,m.parse)(e,!1,!0),r=(0,m.parse)((0,E.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(i)){var c=window.location.pathname;i=(0,m.resolve)(c,i),l=l?(0,m.resolve)(c,l):i,e.preventDefault();var p=r.props.scroll;null==p&&(p=l.indexOf("#")<0);var f=r.props.replace?"replace":"push";v.default[f](i,l,{shallow:r.props.shallow}).then(function(e){e&&p&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){r.props.onError&&r.props.onError(e)})}}}),r}return(0,s.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=(0,m.resolve)(e,t);v.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,a=r.as;"string"==typeof t&&(t=d.default.createElement("a",null,t));var o=d.Children.only(t),i={onClick:function(t){o.props&&"function"==typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||n),i.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(i.href=(0,v._rewriteUrlForNextExport)(i.href)),d.default.cloneElement(o,i)}}]),t}(d.Component);t.default=g},207:function(e,t,r){e.exports=r(208)},208:function(e,t,r){var n=r(1),a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},231:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=(r(205),r(106)),i=r.n(o),l=(r(25),function(e){return a.a.createElement(i.a,null,a.a.createElement("meta",{charSet:"UTF-8"}),a.a.createElement("title",null,e.title||""),a.a.createElement("meta",{name:"description",content:e.description||""}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("link",{rel:"icon",sizes:"192x192",href:"/static/touch-icon.png"}),a.a.createElement("link",{rel:"apple-touch-icon",href:"/static/touch-icon.png"}),a.a.createElement("link",{rel:"mask-icon",href:"/static/favicon-mask.svg",color:"#49B882"}),a.a.createElement("link",{rel:"icon",href:"/static/favicon.ico"}),a.a.createElement("meta",{property:"og:url",content:e.url||""}),a.a.createElement("meta",{property:"og:title",content:e.title||""}),a.a.createElement("meta",{property:"og:description",content:e.description||""}),a.a.createElement("meta",{name:"twitter:site",content:e.url||""}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:image",content:e.ogImage||""}),a.a.createElement("meta",{property:"og:image",content:e.ogImage||""}),a.a.createElement("meta",{property:"og:image:width",content:"1200"}),a.a.createElement("meta",{property:"og:image:height",content:"630"}))});t.default=function(){return a.a.createElement("div",null,a.a.createElement(l,{title:"Home"}),a.a.createElement("h1",null,"If you're reading this, your project is at least partially working!"))}}},[[204,1,0]]]);