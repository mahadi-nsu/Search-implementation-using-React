(this["webpackJsonpandre-first"]=this["webpackJsonpandre-first"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),c=n.n(o),s=n(3),l=n(4),u=n(6),i=n(5);n(12),n(13);function m(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),r.a.createElement("h6",null,"Name : ",e.monster.name),"email : ",e.monster.email)}function h(e){return console.log(e),r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(m,{key:e.id,monster:e})})))}n(14);var p=function(e){var t=e.handleInputData;return r.a.createElement("form",null,r.a.createElement("input",{placeholder:"Enter Keyword to Search",className:"search",type:"text",onChange:t}))},d=(n(15),function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).apiurl="https://jsonplaceholder.typicode.com/users",e.state={monsters:[],searchText:""},e.handleInput=function(t){e.setState({searchText:t.target.value})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch(this.apiurl).then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchText,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monster Rolodex"),r.a.createElement(p,{handleInputData:this.handleInput}),r.a.createElement(h,{monsters:a}))}}]),n}(a.Component));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.9f1eb903.chunk.js.map