(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(7),u=n.n(r),c=n(1),o=n(2),i=n(4),s=n(3),m=(n(13),function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement("h1",null,"Resty ... A Simple ReST Client")}}]),n}(l.a.Component)),d=n(5),h=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={value:"",method:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(o.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){console.log("A request was submitted"),e.preventDefault()}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"form"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("legend",null,"Enter API URL, and click on desired METHOD"),l.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange,placeholder:"URL"}),l.a.createElement("button",{type:"submit",value:"Submit"},l.a.createElement("span",null,"GO!"))),l.a.createElement("section",{id:"methods"},l.a.createElement("button",{onClick:function(){return e.setState({method:"get"})},type:"radio"},l.a.createElement("span",null,"GET")),l.a.createElement("button",{onClick:function(){return e.setState({method:"post"})},type:"radio"},l.a.createElement("span",null,"POST")),l.a.createElement("button",{onClick:function(){return e.setState({method:"put"})},type:"radio"},l.a.createElement("span",null,"PUT")),l.a.createElement("button",{onClick:function(){return e.setState({method:"patch"})},type:"radio"},l.a.createElement("span",null,"PATCH")),l.a.createElement("button",{onClick:function(){return e.setState({method:"delete"})},type:"radio"},l.a.createElement("span",null,"DELETE"))),l.a.createElement("section",{id:"apiRequest"},l.a.createElement("p",null,this.state.method,this.state.value)))}}]),n}(l.a.Component),p=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement("p",{id:"footer"},"\xa9 2020 Biermann - Code Fellows Project")}}]),n}(l.a.Component),b=function(e){Object(i.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(h,null),l.a.createElement(p,null))}}]),n}(l.a.Component);console.log(b);var E=document.getElementById("root");u.a.render(l.a.createElement(b,null),E)},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.72d385e1.chunk.js.map