(this["webpackJsonpnetflix-clone-react"]=this["webpackJsonpnetflix-clone-react"]||[]).push([[8],{123:function(e,t,i){},124:function(e,t,i){},128:function(e,t,i){"use strict";var c=i(14),n=i(41),r=(i(7),i(64)),a=i(4),s=["isTVGridLoading","isTVOverviewLoading"];t.a=function(e){return function(t){var i=t.isTVGridLoading,o=t.isTVOverviewLoading,l=Object(n.a)(t,s);return i?Object(a.jsx)(r.a,{}):o?null:Object(a.jsx)(e,Object(c.a)({},l))}}},130:function(e,t,i){"use strict";var c=i(1),n=i(3),r=i(8),a=i(9),s=i(7),o=i.n(s),l=(i(123),i(13)),d=(i(124),i(65)),m=i(4),j=function(e){var t=e.item,i=(e.listItems,e.addItem,t.title),c=t.overview,n=t.backdrop_path,r=t.poster_path,a=t.name;return Object(m.jsxs)("div",{className:"grid-item",children:[Object(m.jsx)("img",{src:"".concat(l.e).concat(l.c).concat(n),alt:"movie",className:"grid-item__img"}),Object(m.jsx)("img",{src:"".concat(l.e).concat(l.c).concat(r),alt:"movie",className:"grid-item__img grid-item__mobile-img"}),Object(m.jsxs)("div",{className:"".concat(i?"grid-item__movie-text":"grid-item__tv-text"),children:[Object(m.jsx)("h1",{className:"grid-item__title",children:i}),Object(m.jsx)("h1",{className:"grid-item__title",children:a}),Object(m.jsx)("span",{className:"grid-item__overview",children:c}),Object(m.jsx)(d.a,{item:t})]})]})},u=i(18),b=i(29),v=i(38),g=i(35),O=i(31),f=i(121),_=i.n(f),h=function(e){Object(r.a)(i,e);var t=Object(a.a)(i);function i(){var e;return Object(c.a)(this,i),(e=t.call(this)).gridRef=o.a.createRef(),e}return Object(n.a)(i,[{key:"render",value:function(){var e=this,t=this.props,i=t.movieGridItems,c=t.tvShowGridItems,n=t.movies,r=t.tvshow;return Object(m.jsxs)("div",{className:"collection-grid",children:[Object(m.jsx)("span",{className:"collection-grid__left-arrow",children:Object(m.jsx)(O.a,{icon:g.c,className:"collection-grid__left-arrow--icon",onClick:function(){return function(e){var t=e.current,i=window.innerWidth+"px";console.log(i),_()(t).animate({scrollLeft:"-="+i},"slow")}(e.gridRef)}})}),Object(m.jsxs)("div",{className:"collection-grid__outer",ref:this.gridRef,children:[Object(m.jsxs)("div",{className:"collection-grid__inner",children:[n?i.map((function(e){return Object(m.jsx)(j,{item:e},e.id)})):null,r?c.map((function(e){return Object(m.jsx)(j,{item:e},e.id)})):null]}),Object(m.jsx)("span",{className:"collection-grid__right-arrow",children:Object(m.jsx)(O.a,{icon:g.d,className:"collection-grid__right-arrow--icon",onClick:function(){return function(e){var t=e.current,i=window.innerWidth+"px";_()(t).animate({scrollLeft:"+="+i},"slow")}(e.gridRef)}})})]})]})}}]),i}(o.a.Component);t.a=Object(u.b)((function(e){return{movieGridItems:Object(b.d)(e),tvShowGridItems:Object(v.d)(e)}}))(h)},135:function(e,t,i){"use strict";i.r(t);var c=i(18),n=i(19),r=i(22),a=i(38),s=i(128),o=i(130),l=Object(n.b)({isTVGridLoading:a.a}),d=Object(r.c)(Object(c.b)(l),s.a)(o.a);t.default=d}}]);
//# sourceMappingURL=8.9d37030a.chunk.js.map