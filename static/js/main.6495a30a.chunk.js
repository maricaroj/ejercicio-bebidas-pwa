(this["webpackJsonp05-ejercicio-bebidas-pwa"]=this["webpackJsonp05-ejercicio-bebidas-pwa"]||[]).push([[0],{47:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(6),o=n.n(a),s=(n(47),n(2)),i=function(){return Object(s.jsx)("header",{className:"bg-alert",children:Object(s.jsx)("h1",{children:"Busca recetas de bebidas"})})},l=n(20),d=n(26),u=n(7),b=n(12),j=n.n(b),h=n(14),p=n(15),f=n.n(p),O=Object(c.createContext)(),v=function(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){(function(){var e=Object(h.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list",e.next=3,f.a.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list");case 3:t=e.sent,a(t.data.drinks);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.jsx)(O.Provider,{value:{categorias:r},children:e.children})},m=Object(c.createContext)(),x=function(e){var t=Object(c.useState)({nombre:"",categoria:""}),n=Object(u.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)([]),i=Object(u.a)(o,2),l=i[0],d=i[1],b=Object(c.useState)(!1),p=Object(u.a)(b,2),O=p[0],v=p[1],x=r.nombre,g=r.categoria;return Object(c.useEffect)((function(){O&&function(){var e=Object(h.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x&&(t="https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=".concat(x)),g&&(t="https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=".concat(g)),e.next=4,f.a.get(t);case 4:n=e.sent,d(n.data.drinks);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r]),Object(s.jsx)(m.Provider,{value:{setBusquedaReceta:a,setConsultar:v,recetas:l},children:e.children})},g=function(){var e=Object(c.useContext)(O).categorias,t=Object(c.useContext)(m),n=t.setBusquedaReceta,r=t.setConsultar,a=Object(c.useState)({nombre:"",categoria:""}),o=Object(u.a)(a,2),i=o[0],b=o[1],j=function(e){b(Object(d.a)(Object(d.a)({},i),{},Object(l.a)({},e.target.name,e.target.value)))};return Object(s.jsxs)("form",{className:"col-12",onSubmit:function(e){e.preventDefault(),n(i),r(!0),b({nombre:"",categoria:""})},children:[Object(s.jsx)("fieldset",{className:"text-center",children:Object(s.jsx)("legend",{children:"Busca bebidas por Ingrediente o Categoria"})}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-md-4",children:Object(s.jsx)("input",{type:"text",name:"nombre",className:"form-control",placeholder:"Buscar por Ingrediente",onChange:j,value:i.nombre})}),Object(s.jsx)("div",{className:"col-md-4",children:Object(s.jsxs)("select",{name:"categoria",className:"form-control",onChange:j,value:i.categoria,children:[Object(s.jsx)("option",{value:"categoria",children:"--Buscar por Categor\xeda--"}),e.map((function(e){return Object(s.jsx)("option",{value:e.strCategory,children:e.strCategory},e.strCategory)}))]})}),Object(s.jsx)("div",{className:"col-md-4 d-grid gap-2",children:Object(s.jsx)("input",{type:"submit",className:"btn btn-block btn-primary",value:"Buscar Recetas"})})]})]})},w=Object(c.createContext)(),k=function(e){var t=Object(c.useState)(null),n=Object(u.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)({}),i=Object(u.a)(o,2),l=i[0],d=i[1];return Object(c.useEffect)((function(){(function(){var e=Object(h.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return t="https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(r),e.next=5,f.a.get(t);case 5:n=e.sent,console.log(n.data.drinks[0]),d(n.data.drinks[0]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(s.jsx)(w.Provider,{value:{setIdReceta:a,recetaModal:l},children:e.children})},C=n(93),N=n(94),S=n(90),y=Object(S.a)((function(e){return{modal:{position:"absolute",width:700,backgroundColor:e.palette.error.dark,boxShadow:e.shadows[5],padding:e.spacing(2,4,3),top:"50%",left:"50%",transform:"translate(-50%, -50%)",color:e.palette.error.contrastText,fontFamily:"Maven Pro",fontSize:"20px"},container:{textAlign:"right"},title:{fontFamily:"Shadows Into Light",fontSize:"50px",color:e.palette.error.contrastText},btn:{fontFamily:"Shadows Into Light",fontSize:"20px",color:e.palette.error.contrastText}}})),I=function(e){var t=e.receta,n=Object(c.useContext)(w),r=n.setIdReceta,a=n.recetaModal,o=y(),i=Object(c.useState)(!1),l=Object(u.a)(i,2),d=l[0],b=l[1],j=function(){return b(!d)},h=[];!function(){for(var e=1;e<16&&(null!==a["strIngredient".concat(e)]&&""!==a["strIngredient".concat(e)]);e++)h.push(a["strMeasure".concat(e)]+" \u2014 "+a["strIngredient".concat(e)])}();var p=Object(s.jsxs)("div",{className:o.modal,children:[Object(s.jsx)("h2",{className:o.title,children:a.strDrink}),Object(s.jsx)("span",{children:Object(s.jsx)("b",{children:"Ingredients:"})}),h.map((function(e,t){return Object(s.jsx)("div",{children:e},e+t)})),Object(s.jsxs)("div",{children:[Object(s.jsx)("b",{children:"Glass: "}),a.strGlass]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("b",{children:"Instructions: "}),a.strInstructions]}),Object(s.jsx)("div",{className:o.container,children:Object(s.jsx)(C.a,{onClick:j,className:o.btn,children:"Cerrar"})})]});return Object(s.jsxs)("div",{className:"col-md-4 mb-3",children:[Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("h2",{className:"card-header fs-5 text",children:t.strDrink}),Object(s.jsx)("img",{className:"card-img-top",src:t.strDrinkThumb,alt:t.strDrink}),Object(s.jsx)("div",{className:"card-body d-grid gap-2",children:Object(s.jsx)("button",{type:"button",className:"btn btn-block btn-danger",onClick:function(){j(),r(t.idDrink)},children:"Ver Receta"})})]}),Object(s.jsx)(N.a,{open:d,onClose:j,children:p})]})},B=function(){var e=Object(c.useContext)(m).recetas;return Object(s.jsx)("div",{className:" row mt-5",children:e.map((function(e){return Object(s.jsx)(I,{receta:e},e.idDrink)}))})},D=function(){return Object(s.jsx)(v,{children:Object(s.jsx)(x,{children:Object(s.jsxs)(k,{children:[Object(s.jsx)(i,{}),Object(s.jsxs)("div",{className:"container mt-5",children:[Object(s.jsx)("div",{className:"row",children:Object(s.jsx)(g,{})}),Object(s.jsx)(B,{})]})]})})})},P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(D,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ejercicio-bebidas-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ejercicio-bebidas-pwa","/service-worker.js");P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):T(t,e)}))}}(),W()}},[[72,1,2]]]);
//# sourceMappingURL=main.6495a30a.chunk.js.map