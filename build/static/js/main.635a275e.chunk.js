(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),o=t.n(c),u=(t(19),t(2)),l=function(e){var n=e.filter,t=e.handleFilter;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},i=function(e){var n=e.addPhoneBook,t=e.newName,a=e.handleNameChange,c=e.newNumber,o=e.handleNumberChange;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"Number: ",r.a.createElement("input",{value:c,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},m=t(3),f=t.n(m),d="/api/persons",h=function(){return f.a.get(d).then((function(e){return e.data}))},s=function(e){return f.a.post(d,e).then((function(e){return e.data}))},b=function(e,n){return f.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},v=function(e){return f.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},E=function(e){var n=e.handleClick,t=e.text;return r.a.createElement("button",{onClick:n},t)},g=function(e){var n=e.message,t=e.flag;return null===n?null:t?r.a.createElement("div",{className:"information"},n):r.a.createElement("div",{className:"error"},n)},p=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),m=Object(u.a)(o,2),f=m[0],d=m[1],p=Object(a.useState)(""),w=Object(u.a)(p,2),j=w[0],O=w[1],N=Object(a.useState)(""),k=Object(u.a)(N,2),C=k[0],S=k[1],y=Object(a.useState)(t),x=Object(u.a)(y,2),T=x[0],B=x[1],P=Object(a.useState)(null),A=Object(u.a)(P,2),D=A[0],F=A[1],I=Object(a.useState)(!1),J=Object(u.a)(I,2),R=J[0],q=J[1];Object(a.useEffect)((function(){h().then((function(e){c(e)}))}),[]);var z=""===C?t:T;return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{message:D,flag:R}),r.a.createElement(l,{filter:C,handleFilter:function(e){var n=new RegExp("("+C+")w*","gi");console.log(e.target.value),S(e.target.value),B(t.filter((function(e){return e.name.match(n)||e.number.match(n)}))),console.log(T)}}),r.a.createElement("h3",null,"Add a new"),r.a.createElement(i,{addPhoneBook:function(e){e.preventDefault();try{var n={name:f,number:j};if(""===f||""===j)throw new Error;var a=t.find((function(e){return e.name===f}));if(a)console.log(a),window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one"))&&b(a.id,n).then((function(e){c(t.map((function(n){return n.id!==a.id?n:e})))})).catch((function(e){q(!1),F("Information of ".concat(a.name," has already been removed from server")),setTimeout((function(){F(null)}),3e3)}));else s(n).then((function(e){c(t.concat(e)),q(!0),F("Added ".concat(f)),setTimeout((function(){F(null)}),3e3),d(""),O("")})).catch((function(e){q(!1),F(e.response.data.error),setTimeout((function(){F(null)}),3e3)}))}catch(r){q(!1),F("missing information"),setTimeout((function(){F(null)}),3e3)}},newName:f,handleNameChange:function(e){d(e.target.value)},newNumber:j,handleNumberChange:function(e){O(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement("ul",null,z.map((function(e){return r.a.createElement("li",{key:e.id},e.name," ",e.number,r.a.createElement(E,{handleClick:function(){var n=e.id;window.confirm("Delete ".concat(e.name," ?"))&&v(e.id).then(c(t.filter((function(e){return e.id!==n}))))},text:"delete"}))}))))};o.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.635a275e.chunk.js.map