(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[187],{2244:function(e,t,a){"use strict";a.r(t),a.d(t,"AddSubCategory",(function(){return E}));var n=a(45),s=a(11),r=a(12),l=a(14),o=a(13),c=a(1),i=a.n(c),u=a(823),d=a(821),m=a(822),f=a(199),p=a(826),b=a(834),h=a(835),g=a(832),v=a(813),y=(a(22),a(830)),O=a(62),E=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",r.state.name),t.append("sortorder",r.state.sortorder),t.append("desc",r.state.desc),t.append("status",r.state.status),null!==r.state.selectedFile&&t.append("brand_img",r.state.selectedFile,r.state.selectedName),y.a.post("/addbrand",t).then((function(e){console.log(e),r.props.history.push("/app/freshlist/subcategory/subcategoryList")})).catch((function(e){console.log(e)}))},r.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",brand_img:"",status:""},r}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(u.a,null,i.a.createElement(d.a,{className:"m-2"},i.a.createElement(m.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add SubCategory")),i.a.createElement(m.a,null,i.a.createElement(O.b,{render:function(e){var t=e.history;return i.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/subcategory/subcategoryList")}},"Back")}}))),i.a.createElement(p.a,null,i.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(d.a,{className:"mb-2"},i.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(h.a,null,"SubCategory Name"),i.a.createElement(g.a,{type:"text",placeholder:"Customer Name",name:"name",value:this.state.name,onChange:this.changeHandler})),i.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(h.a,null,"Priority"),i.a.createElement(g.a,{type:"number",placeholder:"Sort Order",name:"sortorder",value:this.state.sortorder,onChange:this.changeHandler})),i.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(h.a,null,"Category"),i.a.createElement(v.a,{type:"select",name:"type",value:this.state.type,onChange:this.changeHandler},i.a.createElement("option",null,"---Select Product---"),i.a.createElement("option",{value:"1"},"1"),i.a.createElement("option",{value:"2"},"2"),i.a.createElement("option",{value:"3"},"3")))),i.a.createElement(d.a,null,i.a.createElement(f.a.Ripple,{color:"danger",type:"submit",className:"mr-1 mb-1"},"Add SubCategory"))))))}}]),a}(c.Component);t.default=E},830:function(e,t,a){"use strict";var n=a(44),s=a.n(n).a.create({baseURL:"http://3.6.37.16:8000"});t.a=s},832:function(e,t,a){"use strict";var n=a(6),s=a(7),r=a(17),l=a(19),o=a(1),c=a.n(o),i=a(2),u=a.n(i),d=a(5),m=a.n(d),f=a(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,l=e.bsSize,o=e.valid,i=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,p),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),O=u||("select"===r||"textarea"===r?r:"input"),E="form-control";b?(E+="-plaintext",O=u||"input"):"file"===r?E+="-file":"range"===r?E+="-range":v&&(E=d?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(f.mapToCssModules)(m()(t,i&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,E),a);return("input"===O||u&&"function"===typeof u)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof O&&"select"!==O&&(Object(f.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(O,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":i}))},t}(c.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},834:function(e,t,a){"use strict";var n=a(6),s=a(7),r=a(17),l=a(19),o=a(1),c=a.n(o),i=a(2),u=a.n(i),d=a(5),m=a.n(d),f=a(4),p=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,l=e.tag,o=e.innerRef,i=Object(s.a)(e,p),u=Object(f.mapToCssModules)(m()(t,!!r&&"form-inline"),a);return c.a.createElement(l,Object(n.a)({},i,{ref:o,className:u}))},t}(o.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h},835:function(e,t,a){"use strict";var n=a(6),s=a(7),r=a(1),l=a.n(r),o=a(2),c=a.n(o),i=a(5),u=a.n(i),d=a(4),m=["className","cssModule","hidden","widths","tag","check","size","for"],f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:f,order:f,offset:f})]),b={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.tagPropType,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},v=function(e){var t=e.className,a=e.cssModule,r=e.hidden,o=e.widths,c=e.tag,i=e.check,f=e.size,p=e.for,b=Object(s.a)(e,m),h=[];o.forEach((function(t,n){var s=e[t];if(delete b[t],s||""===s){var r,l=!n;if(Object(d.isObject)(s)){var o,c=l?"-":"-"+t+"-";r=g(l,t,s.size),h.push(Object(d.mapToCssModules)(u()(((o={})[r]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o))),a)}else r=g(l,t,s),h.push(r)}}));var v=Object(d.mapToCssModules)(u()(t,!!r&&"sr-only",!!i&&"form-check-label",!!f&&"col-form-label-"+f,h,!!h.length&&"col-form-label"),a);return l.a.createElement(c,Object(n.a)({htmlFor:p},b,{className:v}))};v.propTypes=b,v.defaultProps=h,t.a=v}}]);
//# sourceMappingURL=187.ca1e15a2.chunk.js.map