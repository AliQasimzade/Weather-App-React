(this.webpackJsonpproducts=this.webpackJsonpproducts||[]).push([[0],{43:function(e,t,a){},92:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(9),r=a.n(o),s=(a(43),a(38)),i=a(30),l=a.n(i),h=a(135),d=a(130),u=a(131),p=a(132),j=a(134),m=a(133),b=a(129),x=a(53),g=a.n(x),O=a(10),f=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),r=Object(s.a)(o,2),i=r[0],x=r[1],f=Object(n.useState)(!1),w=Object(s.a)(f,2),y=w[0],v=w[1],S=Object(n.useRef)(null);Object(n.useLayoutEffect)((function(){l.a.get("https://api.openweathermap.org/data/2.5/weather?q=London&appid=36b30956cad8e4c85834f1a46cb61dec").then((function(e){x(e.data),console.log(e.data)})),setTimeout((function(){l.a.get("https://api.unsplash.com/search/photos?query=London&client_id=5aualamt2KC7W-6LD_lWJYCZazwNlUMrQ6-KkH3wo9Y").then((function(e){console.log(e.data.results),S.current.style.backgroundImage="url(".concat(e.data.results[0].urls.full,")")}))}),200)}),[]);return Object(O.jsx)("div",{className:"App",ref:S,children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"search",children:[Object(O.jsx)(h.a,{error:y,style:{flex:"1"},id:"outlined-error-helper-text",label:y?"Error":"",helperText:y?"Incorrect entry":"",variant:"outlined",value:a,onChange:function(e){return function(e){c(e.target.value)}(e)},placeholder:"Search..."}),Object(O.jsx)(b.a,{"aria-label":"search",onClick:function(e){return function(e){console.log(e),e.stopPropagation(),""===a||!0===/^[" "]+$/.test(a)?v(!0):(v(!1),l.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=36b30956cad8e4c85834f1a46cb61dec")).then((function(e){x(e.data)})),setTimeout((function(){l.a.get("https://api.unsplash.com/search/photos?query=".concat(a,"&client_id=5aualamt2KC7W-6LD_lWJYCZazwNlUMrQ6-KkH3wo9Y")).then((function(e){console.log(e.data.results),S.current.style.backgroundImage="url(".concat(e.data.results[0].urls.full,")")}))}),200))}(e)},style:{marginLeft:"7px"},children:Object(O.jsx)(g.a,{})})]}),i&&Object(O.jsx)("div",{className:"city",style:{width:"100%"},children:Object(O.jsx)(d.a,{children:Object(O.jsx)(u.a,{children:Object(O.jsxs)(p.a,{children:[Object(O.jsxs)(m.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["Weather in ",i.name]}),Object(O.jsxs)(m.a,{color:"textSecondary",variant:"h5",component:"h6",children:[Math.abs((273.15-i.main.temp).toFixed(2))," \xb0C"]}),Object(O.jsx)(m.a,{color:"textSecondary",variant:"h5",component:"h6",children:Object(O.jsx)(j.a,{component:"img",alt:"https://openweathermap.org/img/wn/".concat(i.weather[0].icon,"@2x.png"),image:"https://openweathermap.org/img/wn/".concat(i.weather[0].icon,"@2x.png"),title:"Contemplative Reptile",style:{width:"60px"}})}),Object(O.jsx)(m.a,{color:"textSecondary",variant:"h5",component:"h6",children:i.weather[0].description}),Object(O.jsxs)(m.a,{color:"textSecondary",variant:"h6",component:"h6",children:["Humidity: ",i.main.humidity," %"]}),Object(O.jsxs)(m.a,{color:"textSecondary",variant:"h6",component:"h6",children:["Wind speed: ",i.wind.speed," km/h"]})]})})})})]})})};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(f,{})}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.a657bc36.chunk.js.map