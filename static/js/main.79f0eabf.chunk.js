(this["webpackJsonppokemon-card"]=this["webpackJsonppokemon-card"]||[]).push([[0],{14:function(t,s,e){},17:function(t,s,e){"use strict";e.r(s);var n=e(1),a=e.n(n),c=e(8),r=e.n(c),o=(e(14),e(4)),i=e.n(o),b=e(9),j=e(7),p=e(3),h=e(0),l=function(t){var s=t.heightpok,e=t.weightpok,n=t.pokstat1,a=t.pokstat2,c=t.pokstat3,r=t.pokstat4,o=t.pokstat5,i=t.pokstat6,b=t.posbs1,j=t.posbs2,p=t.posbs3,l=t.posbs4,d=t.posbs5,u=t.posbs6;return Object(h.jsxs)("div",{className:"desc",children:[Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Height"})," is ",Object(h.jsxs)("b",{children:[10*s," cm."]})]}),Object(h.jsxs)("p",{children:[Object(h.jsx)("b",{children:"Weight"})," is ",Object(h.jsxs)("b",{children:[.1*e," kg"]})]}),Object(h.jsx)("h3",{children:"Stat"}),Object(h.jsx)("p",{children:Object(h.jsxs)("b",{children:[n," : ",b]})}),Object(h.jsx)("p",{children:Object(h.jsxs)("b",{children:[a," : ",j]})}),Object(h.jsx)("p",{children:Object(h.jsxs)("b",{children:[c," : ",p]})}),Object(h.jsx)("p",{children:Object(h.jsxs)("b",{children:[r," : ",l]})}),Object(h.jsx)("p",{children:Object(h.jsxs)("b",{children:[o," : ",d]})}),Object(h.jsx)("p",{children:Object(h.jsxs)("b",{children:[i," : ",u]})})]})},d=function(t){var s=t.id,e=t.name,a=t.image,c=t.type,r=t.height,o=t.weight,i=t.stat1,b=t.stat2,j=t.stat3,d=t.stat4,u=t.stat5,O=t.stat6,m=t.bs1,x=t.bs2,k=t.bs3,f=t.bs4,g=t.bs5,v=t.bs6,w="thumb-container ".concat(c),N=Object(n.useState)(!1),y=Object(p.a)(N,2),_=y[0],S=y[1];return Object(h.jsxs)("div",{className:w,children:[Object(h.jsx)("div",{className:"number",children:Object(h.jsxs)("small",{children:["#0",s]})}),Object(h.jsx)("img",{src:a,alt:e}),Object(h.jsxs)("div",{className:"detail-wrapper",children:[Object(h.jsx)("h3",{children:e.toUpperCase()}),Object(h.jsxs)("small",{children:["Type : ",c]}),Object(h.jsx)("button",{className:"pokeinfo",onClick:function(){return S(!_)},children:!0===_?"Know less...":"Know more..."}),!0===_?Object(h.jsx)(l,{weightpok:o,heightpok:r,pokstat1:i,pokstat2:b,pokstat3:j,pokstat4:d,pokstat5:u,pokstat6:O,posbs1:m,posbs2:x,posbs3:k,posbs4:f,posbs5:g,posbs6:v}):Object(h.jsx)(h.Fragment,{})]})]})};var u=function(){var t=Object(n.useState)([]),s=Object(p.a)(t,2),e=s[0],a=s[1],c=Object(n.useState)("https://pokeapi.co/api/v2/pokemon?limit=20"),r=Object(p.a)(c,2),o=r[0],l=r[1],u=function(){var t=Object(j.a)(i.a.mark((function t(){var s,n,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(t){t.forEach(function(){var t=Object(j.a)(i.a.mark((function t(s){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://pokeapi.co/api/v2/pokemon/".concat(s.name));case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,a((function(t){return[].concat(Object(b.a)(t),[n])}));case 7:case"end":return t.stop()}}),t)})));return function(s){return t.apply(this,arguments)}}())},t.next=3,fetch(o);case 3:return s=t.sent,t.next=6,s.json();case 6:return n=t.sent,l(n.next),c(n.results),t.next=11,console.log(e);case 11:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){u()}),[]),Object(h.jsxs)("div",{className:"app-container",children:[Object(h.jsx)("h1",{children:"Pokemon Kingdom ."}),Object(h.jsxs)("div",{className:"pokemon-container",children:[Object(h.jsx)("div",{className:"all-container",children:e.map((function(t,s){return Object(h.jsx)(d,{id:t.id,name:t.name,image:t.sprites.other.dream_world.front_default,type:t.types[0].type.name,height:t.height,weight:t.weight,stat1:t.stats[0].stat.name,stat2:t.stats[1].stat.name,stat3:t.stats[2].stat.name,stat4:t.stats[3].stat.name,stat5:t.stats[4].stat.name,stat6:t.stats[5].stat.name,bs1:t.stats[0].base_stat,bs2:t.stats[1].base_stat,bs3:t.stats[2].base_stat,bs4:t.stats[3].base_stat,bs5:t.stats[4].base_stat,bs6:t.stats[5].base_stat},s)}))}),Object(h.jsx)("button",{className:"load-more",onClick:function(){return u()},children:"More Pokemons"})]})]})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(u,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.79f0eabf.chunk.js.map