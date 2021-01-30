(this["webpackJsonpspa-crud-frontend"]=this["webpackJsonpspa-crud-frontend"]||[]).push([[0],{134:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n(0),i=n.n(s),r=n(11),c=n.n(r),o=n(26),l=n(17),d=n(18),j=n(20),h=n(19),b=n(12),u=n(191),p=n(87),O=n(35),m=n(177),g=n(179),x=n(180),f=n(181),v=n(196),y=n(175),C=n(10),k=n(80),w=n.n(k),S=n(81),L=n.n(S),I=n(86),R=n(195),D=Object(y.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(O.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(O.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(C.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(C.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(O.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function A(){var e=D(),t=i.a.useState(null),n=Object(p.a)(t,2),s=n[0],r=n[1],c=Boolean(s),l=function(){r(null)};return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(m.a,{position:"static",children:Object(a.jsxs)(g.a,{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(x.a,{edge:"start","aria-label":"menu",onClick:function(e){r(e.currentTarget)},color:"inherit",children:Object(a.jsx)(w.a,{})}),Object(a.jsxs)(I.a,{anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:c,onClose:l,children:[Object(a.jsx)(R.a,{onClick:l,component:o.b,to:"/",children:"Home"}),Object(a.jsx)(R.a,{onClick:l,component:o.b,to:"/list",children:"All members"}),Object(a.jsx)(R.a,{onClick:l,component:o.b,to:"/create",children:"Add member"})]})]}),Object(a.jsx)(f.a,{variant:"h6",className:e.title,children:"SPA-CRUD Demo Application"}),Object(a.jsxs)("div",{className:e.search,children:[Object(a.jsx)("div",{className:e.searchIcon,children:Object(a.jsx)(L.a,{})}),Object(a.jsx)(v.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})]})})})}var q=n(68),B=n(39),E=n(193),F=n(182),N=n(192),P=n(183),M=n(194),z=n(82),G=n.n(z).a.create({baseURL:"https://spa-crud-backend.heckenspringen.de/api",headers:{"Content-type":"application/json"}}),J=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleChange=a.handleChange.bind(Object(B.a)(a)),a.onSubmit=a.onSubmit.bind(Object(B.a)(a)),a.state={message:"",error:!1,isLoading:!1,success:!1,errorfields:[],form:{}},a}return Object(d.a)(n,[{key:"handleChange",value:function(e){console.log(e.target.id,e.target.value),this.setState({form:Object(q.a)(Object(q.a)({},this.state.form),{},Object(O.a)({},e.target.id,e.target.value))})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault(),G.post("/member",this.state.form).then((function(e){console.log(e.data),t.setState({error:!1,message:"Done!",success:!0}),setTimeout((function(){return t.props.history.push("/list")}),1e3)})).catch((function(e){if(e.response){if(console.log(e.response.data),e.response.data.errors){var n=e.response.data.errors.map((function(e){return Object(a.jsxs)("div",{children:["- ",e]})}));t.setState({error:!0,errorfields:e.response.data.errorfields?e.response.data.errorfields:[],message:n})}}else console.log("Error",e.message),t.setState({error:!0,message:"Something failed at backend"})})),console.log(this.state)}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[this.state.message&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(M.a,{severity:this.state.error?"error":this.state.success?"success":"info",children:this.state.message}),Object(a.jsx)("br",{})]}),Object(a.jsx)("form",{noValidate:!0,autoComplete:"off",onSubmit:this.onSubmit,children:Object(a.jsxs)(F.a,{children:[Object(a.jsx)(N.a,{margin:1,children:Object(a.jsx)(E.a,{id:"firstname",variant:"outlined",label:"Firstname",required:!0,disabled:this.state.success,error:this.state.errorfields.includes("firstname"),autoFocus:!0,onChange:this.handleChange},"firstname")}),Object(a.jsx)(N.a,{margin:1,children:Object(a.jsx)(E.a,{id:"lastname",variant:"outlined",label:"Lastname",required:!0,disabled:this.state.success,error:this.state.errorfields.includes("lastname"),onChange:this.handleChange},"lastname")}),Object(a.jsx)(N.a,{margin:1,children:Object(a.jsx)(E.a,{id:"birthday",variant:"outlined",label:"Birthday",InputLabelProps:{shrink:!0},type:"date",required:!0,disabled:this.state.success,error:this.state.errorfields.includes("birthday"),onChange:this.handleChange},"birthday")}),Object(a.jsx)(N.a,{margin:1,children:Object(a.jsx)(E.a,{id:"street",variant:"outlined",label:"Street",required:!0,disabled:this.state.success,error:this.state.errorfields.includes("street"),onChange:this.handleChange},"street")}),Object(a.jsx)(N.a,{margin:1,children:Object(a.jsx)(E.a,{id:"city",variant:"outlined",label:"City",required:!0,disabled:this.state.success,error:this.state.errorfields.includes("city"),onChange:this.handleChange},"city")}),Object(a.jsx)(N.a,{margin:1,children:Object(a.jsx)(E.a,{id:"phone",variant:"outlined",label:"Phone",disabled:this.state.success,error:this.state.errorfields.includes("phone"),onChange:this.handleChange},"phone")}),Object(a.jsx)(N.a,{margin:1,children:Object(a.jsx)(E.a,{id:"email",variant:"outlined",label:"eMail",disabled:this.state.success,error:this.state.errorfields.includes("email"),type:"email",onChange:this.handleChange},"email")}),Object(a.jsx)(P.a,{type:"submit",variant:"contained",disabled:this.state.success,color:"primary",children:"Create"})]})})]})}}]),n}(s.Component),T=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"Welcome to Edit Component!!"})})}}]),n}(s.Component),U=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"Index"})})}}]),n}(s.Component),V=n(187),H=n(189),W=n(185),K=n(186),Q=n(188),X=n(184),Y=n(136),Z=n(190),$=n(85),_=n.n($),ee=n(84),te=n.n(ee),ne=n(83),ae=n.n(ne),se=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).delete=a.delete.bind(Object(B.a)(a)),a}return Object(d.a)(n,[{key:"delete",value:function(e){console.log(e),G.delete("/member/"+this.props.obj.id).then(console.log("Deleted")).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(a.jsxs)(X.a,{children:[Object(a.jsx)(W.a,{component:"th",scope:"row",children:this.props.obj.id}),Object(a.jsx)(W.a,{align:"left",children:this.props.obj.firstname}),Object(a.jsx)(W.a,{align:"left",children:this.props.obj.lastname}),Object(a.jsx)(W.a,{align:"left",children:this.props.obj.birthday}),Object(a.jsxs)(W.a,{align:"left",children:[this.props.obj.street,", ",this.props.obj.city]}),Object(a.jsxs)(W.a,{align:"right",children:[Object(a.jsx)(x.a,{"aria-label":"view",component:o.b,to:"/view/"+this.props.obj.id,children:Object(a.jsx)(ae.a,{})}),Object(a.jsx)(x.a,{"aria-label":"edit",component:o.b,color:"primary",to:"/edit/"+this.props.obj.id,children:Object(a.jsx)(te.a,{})}),Object(a.jsx)(x.a,{"aria-label":"delete",color:"secondary",onClick:this.delete,children:Object(a.jsx)(_.a,{})})]})]},this.props.obj.id)}}]),n}(s.Component),ie=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={isLoading:!0,members:[]},a}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;G.get("/members").then((function(t){e.setState({members:t.data,isLoading:!1}),console.log(t)})).catch((function(e){console.log(e)}))}},{key:"tabRow",value:function(){return this.state.members.map((function(e,t){return Object(a.jsx)(se,{obj:e},t)}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(K.a,{component:Y.a,children:Object(a.jsxs)(V.a,{children:[Object(a.jsx)(Q.a,{children:Object(a.jsxs)(X.a,{children:[Object(a.jsx)(W.a,{children:"ID"}),Object(a.jsx)(W.a,{align:"left",children:"Firstname"}),Object(a.jsx)(W.a,{align:"left",children:"Lastname"}),Object(a.jsx)(W.a,{align:"left",children:"Birthday"}),Object(a.jsx)(W.a,{align:"left",children:"Adress"}),Object(a.jsx)(W.a,{align:"right",children:"Actions"})]})}),Object(a.jsx)(H.a,{children:this.tabRow()})]})}),this.state.isLoading&&Object(a.jsx)(Z.a,{})]})}}]),n}(s.Component),re=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("p",{children:"View"})})}}]),n}(s.Component),ce=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)(o.a,{children:Object(a.jsxs)(u.a,{children:[Object(a.jsx)(A,{}),Object(a.jsx)("br",{}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.a,{path:"/list",component:ie}),Object(a.jsx)(b.a,{path:"/view/:id",component:re}),Object(a.jsx)(b.a,{exact:!0,path:"/create",component:J}),Object(a.jsx)(b.a,{path:"/edit/:id",component:T}),Object(a.jsx)(b.a,{path:"/",component:U})]})]})})}}]),n}(s.Component);c.a.render(Object(a.jsx)(o.a,{children:Object(a.jsx)(ce,{})}),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.8f03121e.chunk.js.map