(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{46:function(e,t,a){e.exports=a(77)},51:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(19),r=a.n(o),s=(a(51),a(13)),l=(a(56),a(12)),i=a(15);a(57);var u=function(){var e=[{type:"Email",contact:"Elistratovnik@yandex.ru"},{type:"Phone",contact:"+7 (977) 718-14-23"},{type:"Vk",contact:"https://vk.com/id241193108"}],t=Object(i.e)(e.length,{to:{opacity:1,bottom:"0px"},from:{opacity:0,bottom:"-60px"},config:i.b.molasses});return c.a.createElement("section",{className:"about"},c.a.createElement("h2",{className:"about__title"},"\u0415\u043b\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0432 \u041d\u0438\u043a\u0438\u0442\u0430"),c.a.createElement("p",{className:"about__text"},"\u0412 \u0434\u0430\u043d\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u0435 \u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b React, Redux, React-spring(\u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0438) \u0438  React-virtualized (\u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0442\u0430\u0431\u043b\u0438\u0446)"),c.a.createElement("p",{className:"about__text"},"\u0411\u0443\u0434\u0443 \u0440\u0430\u0434 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438!"),c.a.createElement("div",{className:"about__contacts"},t.map((function(t,a){return c.a.createElement(i.a.div,{style:t,key:a,className:"about__contact-container"},c.a.createElement("h3",{className:" about__contact-title"},e[a].type),c.a.createElement("span",{className:" about__contact-text"},e[a].contact))}))))},m=a(20),p=a.n(m),f=a(27),d=a(30),E=a(21);a(59);var b=function(e){var t=e.pokemon,a=t.name,o=t.url,r=Object(n.useState)(""),s=Object(d.a)(r,2),l=s[0],i=s[1],u=Object(n.useState)(0),m=Object(d.a)(u,2),b=m[0],O=m[1];return Object(n.useEffect)((function(){function e(){return(e=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(a.sprites.front_default),O(a.id);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[o]),c.a.createElement(E.b,{to:"/pokemons/".concat(b),className:"card"},c.a.createElement("div",{className:"card__image",style:{backgroundImage:"url(".concat(l,")")}}),c.a.createElement("h3",{className:"card__title"},a))};a(61);a(62);var O=function(e){var t=e.LoadNextCards,a=Object(s.b)(),n=Object(i.d)({from:{opacity:0,transform:"translateY(-100%)"},to:{opacity:1,transform:"translateY(0%)"},config:i.b.wobbly});return c.a.createElement(i.a.div,{className:"welcome",style:n},c.a.createElement("h1",{className:"welcome__title"},"PokemonWorld"),c.a.createElement("p",{className:"welcome__subtitle"},'\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c! \u041c\u0435\u043d\u044f \u0417\u043e\u0432\u0443\u0442 \u0415\u043b\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0432 \u041d\u0438\u043a\u0438\u0442\u0430 \u0438 \u044d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442 - \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 "Blitz_Studio"'),c.a.createElement("p",{className:"welcome__subtitle"},'\u0414\u043b\u044f \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u0438 \u0438\u0437\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 "\u043f\u043e\u043a\u0435\u0431\u043e\u043b" \u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u043c-\u043b\u0435\u0432\u043e\u043c \u0443\u0433\u043b\u0443 \u044d\u043a\u0440\u0430\u043d\u0430'),c.a.createElement("button",{className:"welcome__button",onClick:function(){a({type:"HIDE_GREETINGS"}),t()}},"\u043f\u043e\u0433\u043d\u0430\u043b\u0438"))};var h=function(){var e=Object(s.b)(),t=Object(n.useRef)(),a=Object(n.useRef)(0),o=Object(s.c)((function(e){return{pokemons:e.cards.pokemons,loading:e.cards.loading,greetingsOpen:e.app.greetingsOpen,pokemonAddCount:e.cards.pokemonAddCount}})),r=o.pokemons,l=(o.loading,o.greetingsOpen),i=o.pokemonAddCount;Object(n.useEffect)((function(){t.current.getBoundingClientRect().height<window.innerHeight&&!l&&u()}),[r,l]),Object(n.useEffect)((function(){return window.addEventListener("scroll",m),function(){window.removeEventListener("scroll",m),e({type:"RESET_CARDS"})}}),[]);var u=function(){var t,n;e((t=i,n=a.current,function(){var e=Object(f.a)(p.a.mark((function e(a){var c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"SHOW_LOADER"}),e.prev=1,e.next=4,fetch("https://pokeapi.co/api/v2/pokemon?limit=".concat(t,"&offset=").concat(n));case 4:return c=e.sent,e.next=7,c.json();case 7:o=e.sent,a({type:"FETCHED_CARDS",payload:o}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),alert("\u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438: ".concat(e.t0));case 14:return e.prev=14,a({type:"HIDE_LOADER"}),e.finish(14);case 17:a({type:"HIDE_LOADER"});case 18:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(t){return e.apply(this,arguments)}}())),a.current=a.current+i},m=function(){var e=t.current.getBoundingClientRect(),a=e.height,n=e.top;Math.round(a)===window.innerHeight-n-48&&u()};return c.a.createElement("section",{ref:t,className:"cards"},l&&c.a.createElement(O,{LoadNextCards:u}),r.map((function(e,t){return c.a.createElement(b,{key:t,pokemon:e})})))};a(63);var k=function(e){var t=Object(s.b)(),a=Object(s.c)((function(e){return e.cards.pokemon}));return Object(n.useEffect)((function(){var a;t((a="https://pokeapi.co/api/v2/pokemon/".concat(e.match.params.id),function(){var e=Object(f.a)(p.a.mark((function e(t){var n,c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"RESET_POKEMON"}),t({type:"SHOW_LOADER"}),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:c=e.sent,t({type:"LOAD_POKEMON",payload:c}),t({type:"HIDE_LOADER"});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[e.match.params.id,t]),c.a.createElement("article",{className:"pokemon"},c.a.createElement("img",{src:a.image,alt:"pokemon avatar",className:"pokemon__image"}),c.a.createElement("ul",{className:"pokemon__description"},c.a.createElement("li",{className:"pokemon__char"},"\u0418\u043c\u044f: ".concat(a.name)),c.a.createElement("li",{className:"pokemon__char"},"\u0412\u0435\u0441: ".concat(a.weight," \u043a\u0433")),c.a.createElement("li",{className:"pokemon__char"},"\u0420\u043e\u0441\u0442: ".concat(a.height," \u0434\u044e\u0439\u043c\u043e\u0432")),c.a.createElement("li",{className:"pokemon__char"},"\u0422\u0438\u043f: ".concat(a.type))))},v=a(38);var _=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return{allPokemons:e.table.allPokemons,allPokemonsBackup:e.table.allPokemonsBackup}})),a=t.allPokemons,o=t.allPokemonsBackup;return Object(n.useEffect)((function(){o.length||e(function(){var e=Object(f.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"SHOW_LOADER"}),e.prev=1,e.next=4,fetch("https://pokeapi.co/api/v2/pokemon?limit=1050&offset=0");case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,t({type:"FETCHED_ALL_POKEMONS",payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),alert("\u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0438: ".concat(e.t0));case 14:return e.prev=14,t({type:"HIDE_LOADER"}),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),c.a.createElement("div",{className:"table",style:{width:"100%",height:"70vh"}},c.a.createElement(v.a,null,(function(e){var t=e.width,n=e.height;return c.a.createElement(v.b,{width:t,height:n,rowHeight:50,rowCount:a.length,rowRenderer:function(e){var t=e.key,n=e.index,o=(e.parent,e.style),r=a[n];return c.a.createElement(E.b,{to:"/pokemons/".concat(r.name),className:"table__row",key:t,style:o},"".concat(n+1,". ").concat(r.name))}})})))};a(73),a(74);var g=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.table.searchInput}));return c.a.createElement("section",{className:"pokemons-table"},c.a.createElement("input",{className:"pokemons-table__search",type:"text",value:t,onChange:function(t){e(function(e){return{type:"CHANGE_SEARCH_VALUE",payload:e}}(t.currentTarget.value))}}),c.a.createElement("button",{className:"pokemons-table__button",onClick:function(){e({type:"SEARCH_POKEMON"})}},"\u0438\u0441\u043a\u0430\u0442\u044c"),c.a.createElement(_,null))};var y=function(){return c.a.createElement("main",{className:"main"},c.a.createElement(l.c,null,c.a.createElement(l.a,{exact:!0,path:"/",component:h}),c.a.createElement(l.a,{exact:!0,path:"/pokemons",component:g}),c.a.createElement(l.a,{path:"/about",component:u}),c.a.createElement(l.a,{path:"/pokemons/:id",component:k})))},j=a(10);a(75);var w=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],o=t[1],r=window.innerWidth<1024?"100%":"40%",s=Object(n.useRef)(),l=Object(i.d)({ref:s,transform:a?"rotate(0deg)":"rotate(90deg)",from:{transform:"rotate(-90deg)"},config:{duration:100}}),u=Object(n.useRef)(),m=Object(i.d)({ref:u,width:a?r:"0%"}),p=Object(n.useRef)(),f=Object(i.f)(a?[{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",path:"/",id:"0"},{title:"\u041f\u043e\u043a\u0435\u043c\u043e\u043d\u044b",path:"/pokemons",id:"1"},{title:"\u0410\u0432\u0442\u043e\u0440",path:"/about",id:"2"}]:[],(function(e){return e.title}),{ref:p,unique:!0,from:{opacity:0,transform:"scale(0)"},enter:[{opacity:0,transform:"scale(1)"},{opacity:1,transform:"scale(1)"}],leave:{opacity:0,transform:"scale(0)"},config:{duration:300}});return Object(i.c)(a?[s,u,p]:[p,s,u],[0,a?.1:.3]),c.a.createElement(i.a.div,{style:Object(j.a)(Object(j.a)({},l),m),className:"menu",onMouseEnter:function(){o(!0)},onMouseLeave:function(){o(!1)}},f.map((function(e){var t=e.item,a=e.props;return c.a.createElement(i.a.div,{style:a,key:t.id},c.a.createElement(E.c,{className:"menu__link",to:t.path,style:a},t.title))})))};a(76);var N=function(){return c.a.createElement("div",{className:"spinner"})};var R=function(){var e=Object(s.c)((function(e){return e.app.loading}));return c.a.createElement("div",{className:"App"},c.a.createElement(w,null),c.a.createElement(y,null),e&&c.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(24),C={greetingsOpen:!0,loading:!1};var x=a(22),D=a(23),P={pokemons:[],loadedPokemonCards:{},cardsCount:0,pokemonAddCount:5,pokemon:{image:"https://www.clipartmax.com/png/full/190-1908912_free-png-pokeball-png-images-transparent-pokeball-png-hd.png",name:"",weight:0,height:0,type:""}};var S={allPokemons:[],allPokemonsBackup:[],searchInput:""};var H=Object(A.c)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"HIDE_GREETINGS":return Object(j.a)(Object(j.a)({},e),{},{greetingsOpen:!1});case"SHOW_LOADER":return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case"HIDE_LOADER":return Object(j.a)(Object(j.a)({},e),{},{loading:!1});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHED_CARDS":return Object(j.a)(Object(j.a)({},e),{},{pokemons:[].concat(Object(D.a)(e.pokemons),Object(D.a)(t.payload.results)),cardsCount:t.payload.count});case"RESET_CARDS":return Object(j.a)(Object(j.a)({},e),{},{pokemons:[]});case"LOAD_POKEMON":return console.log(t.payload),Object(j.a)(Object(j.a)({},e),{},{pokemon:{image:t.payload.sprites.other["official-artwork"].front_default,name:t.payload.name,weight:t.payload.weight,height:t.payload.height,type:t.payload.types[0].type.name}});case"RESET_POKEMON":return Object(j.a)(Object(j.a)({},e),{},{pokemon:P.pokemon});case"SAVE_POKEMON_DATA":return Object(j.a)(Object(j.a)({},e),{},{loadedPokemonCards:Object(j.a)(Object(j.a)({},e.loadedPokemonCards),{},Object(x.a)({},t.payload.name,t.payload))});default:return e}},table:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCHED_ALL_POKEMONS":return Object(j.a)(Object(j.a)({},e),{},{allPokemons:t.payload.results,allPokemonsBackup:t.payload.results});case"CHANGE_SEARCH_VALUE":return Object(j.a)(Object(j.a)({},e),{},{searchInput:t.payload});case"SEARCH_POKEMON":return Object(j.a)(Object(j.a)({},e),{},{allPokemons:e.allPokemonsBackup.filter((function(t){return t.name.includes(e.searchInput)}))});default:return e}}}),L=a(45),I=Object(A.d)(H,Object(A.a)(L.a)),M=c.a.createElement(E.a,null,c.a.createElement(s.a,{store:I},c.a.createElement(c.a.StrictMode,null,c.a.createElement(R,null))));r.a.render(M,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.b7ee9b48.chunk.js.map