(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{152:function(e,t,n){},170:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},474:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(22),c=n.n(a),r=(n(152),n(84)),i=n.n(r),o=n(144),l=n(57),j=n(58),u=n(60),m=n(59),d=n(145),v=n.n(d),b=(n(170),n(33)),h=n(2);var p=function(e){var t=e.year,n=e.title,s=e.summary,a=e.poster,c=e.genres;return Object(h.jsx)("div",{class:"movie",children:Object(h.jsxs)(b.b,{to:{pathname:"/movie-detail",state:{year:t,title:n,summary:s,poster:a,genres:c}},children:[Object(h.jsx)("img",{src:a,alt:n,title:n}),Object(h.jsxs)("div",{className:"movie__data",children:[Object(h.jsx)("h3",{className:"movie__title",children:n}),Object(h.jsx)("h5",{className:"movie__year",children:t}),Object(h.jsx)("ul",{className:"movie_genres",children:c.map((function(e,t){return Object(h.jsx)("li",{className:"movie_genre",children:e},t)}))}),Object(h.jsxs)("p",{className:"movie_summary",children:[s.slice(0,180),"..."]})]})]})})},O=(n(176),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(o.a)(i.a.mark((function t(){var n,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(h.jsx)("section",{className:"container",children:t?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("span",{className:"loader__text",children:" 'Loading...' "})}):Object(h.jsx)("div",{className:"movies",children:n.map((function(e){return Object(h.jsx)(p,{year:e.year,title:e.title,genres:e.genres,summary:e.summary,poster:e.medium_cover_image},e.id)}))})})}}]),n}(s.Component)),x=n(4);n(177);var f=function(e){return console.log(e),Object(h.jsxs)("div",{className:"about__container",children:[Object(h.jsx)("span",{children:'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."'}),Object(h.jsx)("span",{children:"- George Orwell, 1984"})]})};n(178);var y=function(){return Object(h.jsxs)("div",{className:"nav",children:[Object(h.jsx)(b.b,{to:"/",children:"Home"}),Object(h.jsx)(b.b,{to:"/about",children:"About"})]})},g=(n(179),function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(h.jsx)("span",{children:e.state.title}):null}}]),n}(s.Component));var _=function(){return Object(h.jsxs)(b.a,{children:[Object(h.jsx)(y,{}),Object(h.jsx)(x.a,{path:"/",exact:!0,component:O}),Object(h.jsx)(x.a,{path:"/about",component:f}),Object(h.jsx)(x.a,{path:"/movie-detail",component:g})]})};c.a.render(Object(h.jsx)(_,{}),document.getElementById("root"))}},[[474,1,2]]]);
//# sourceMappingURL=main.95bc0628.chunk.js.map