(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(8),c=n.n(r),i=(n(14),n(1)),o=n(2),l=n(4),u=n(3),m=n(5),h=(n(15),n(16),n(17),n(18),n(19),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"redirectToUrl",value:function(e){window.open(e,"_blank")}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"news-container",onClick:function(){return e.redirectToUrl(e.props.news.url)}},s.a.createElement("div",{className:"card horizontal"},s.a.createElement("div",{className:"card-image"},s.a.createElement("img",{src:this.props.news.urlToImage,alt:"news"})),s.a.createElement("div",{className:"card-stacked"},s.a.createElement("div",{className:"card-content"},s.a.createElement("span",{className:"card-title"},this.props.news.title),s.a.createElement("p",null,this.props.news.description)),s.a.createElement("div",{className:"card-action"},s.a.createElement("div",null,null!=this.props.news.source&&s.a.createElement("div",{className:"chip light-blue news-chip"},this.props.news.source),null!=this.props.news.reason&&s.a.createElement("div",{className:"chip light-green news-chip"},this.props.news.reason),null!=this.props.news.time&&s.a.createElement("div",{className:"chip amber news-chip"},this.props.news.time))))))}}]),t}(s.a.Component)),p=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={news:null},e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.loadMoreNews()}},{key:"loadMoreNews",value:function(e){var t=this,n=new Request("http://localhost:3000/news",{method:"GET",cache:!1});fetch(n).then(function(e){return e.json()}).then(function(e){t.setState({news:t.state.news?t.state.news.concat(e):e})})}},{key:"renderNews",value:function(){var e=this.state.news.map(function(e){return s.a.createElement("a",{className:"list-group-item",key:e.digest,href:"#"},s.a.createElement(h,{news:e}))});return s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"list-group"},e))}},{key:"render",value:function(){return this.state.news?s.a.createElement("div",null,this.renderNews()):s.a.createElement("div",null,s.a.createElement("div",{id:"msg-app-loading"},"Loading..."))}}]),t}(s.a.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",{className:"title"},"What's happening out there"),s.a.createElement("div",{className:"container"},s.a.createElement(p,null)))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.09c7bc69.chunk.js.map