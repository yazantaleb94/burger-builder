(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],{11:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(3),l=n.n(r),c=(n(16),n(8)),s=n(7),o=n(4),m=n(5),d=n(9),u=n(6),h=n(1),k=n(10);n(17);var f=function(e){return i.a.createElement("div",null,i.a.createElement("div",{className:"BreadTop",style:{height:"100px"}}),e.ingredients.length<1&&i.a.createElement("div",{style:{textAlign:"center"}},"Malzeme Ekleyin"),e.ingredients.map((function(e){return i.a.createElement("div",{key:e.displayId,style:{height:"20px",backgroundColor:e.color,width:"80%",margin:"0 auto",marginTop:"10px"}})})),i.a.createElement("div",{className:"BreadBottom",style:{height:"50px"}}))};var g=function(e){return i.a.createElement("div",null,"TotalPrice: ",e.toplam())};var E=function(e){return i.a.createElement("div",null,e.items.map((function(t){var n=e.selectedIngredients.find((function(e){return e.name===t.name})),a=e.selectedIngredients.filter((function(e){return t.name===e.name}));return i.a.createElement(p,Object.assign({key:t.id},t,{malzemeEkle:e.malzemeEkle,malzemeCikar:e.malzemeCikar,butonGoster:n,sayi:a.length}))})))};var p=function(e){return i.a.createElement("div",{className:"BuildControl"},i.a.createElement("div",{className:"Label"},e.name),i.a.createElement("div",null,e.sayi),e.butonGoster?i.a.createElement("button",{className:"Less",onClick:function(){e.malzemeCikar(e)}},"C\u0131kar"):i.a.createElement("button",{className:"Less disabled"},"C\u0131kar"),i.a.createElement("button",{className:"more",onClick:function(){e.malzemeEkle(e)}},"Ekle"))},b=[{id:1,name:"Marul",color:"green",price:1},{id:2,name:"Peynir",color:"#ffa600",price:4},{id:3,name:"Kofte",color:"black",price:6},{id:4,name:"Domates",color:"red",price:2}],v=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={ingredients:[],totalPrice:0},n.malzemeEkle=n.malzemeEkle.bind(Object(h.a)(n)),n.malzemeCikar=n.malzemeCikar.bind(Object(h.a)(n)),n.hesapla=n.hesapla.bind(Object(h.a)(n)),n}return Object(k.a)(t,e),Object(m.a)(t,[{key:"malzemeEkle",value:function(e){this.setState({ingredients:Object(s.a)(this.state.ingredients).concat([Object(c.a)({},e,{displayId:Math.random()})])})}},{key:"malzemeCikar",value:function(e){var t=this.state.ingredients.find((function(t){return t.name===e.name})).displayId;this.setState({ingredients:this.state.ingredients.filter((function(e){return e.displayId!==t}))})}},{key:"hesapla",value:function(){var e=0;return this.state.ingredients.forEach((function(t){e+=t.price})),e}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(f,{ingredients:this.state.ingredients}),i.a.createElement(g,{toplam:this.hesapla}),i.a.createElement(E,{items:b,malzemeEkle:this.malzemeEkle,malzemeCikar:this.malzemeCikar,selectedIngredients:this.state.ingredients}))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.ff074fd7.chunk.js.map