(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[169],{2312:function(e,t,a){"use strict";a.r(t),a.d(t,"AddVideo",(function(){return E}));var n=a(838),r=a(45),o=a(11),s=a(12),i=a(14),l=a(13),c=a(1),u=a.n(c),d=a(823),f=a(821),p=a(822),m=a(199),b=a(826),h=a(835),v=a(836),g=a(832),y=a(813),O=a(22),j=a(830),E=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler=function(e){s.setState(Object(r.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault(),console.log(s.state);var t=new FormData;t.append("video_title",s.state.video_title),null!==s.state.selectedFile&&t.append("video_url",s.state.selectedFile,s.state.selectedName);var a,r=Object(n.a)(t.values());try{for(r.s();!(a=r.n()).done;){var o=a.value;console.log(o)}}catch(u){r.e(u)}finally{r.f()}var i,l=Object(n.a)(t.keys());try{for(l.s();!(i=l.n()).done;){var c=i.value;console.log(c)}}catch(u){l.e(u)}finally{l.f()}j.a.post("/addvideo",t).then((function(e){console.log(e),s.props.history.push("/app/website/videos/videosList"),alert("Video Added")})).catch((function(e){console.log(e)}))},s.state={video_title:"",video_url:"",selectedFile:null,selectedName:""},s}return Object(s.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(f.a,{className:"m-2"},u.a.createElement(p.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Video")),u.a.createElement(p.a,null,u.a.createElement(m.a,{className:" btn btn-danger float-right",onClick:function(){return O.a.push("/app/website/videos/videosList")}},"Back"))),u.a.createElement(b.a,null,u.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(f.a,{className:"mb-2"},u.a.createElement(p.a,{lg:"6",md:"6"},u.a.createElement(v.a,null,"Video Title"),u.a.createElement(g.a,{type:"text",name:"video_title",value:this.state.video_title,onChange:this.changeHandler})),u.a.createElement(p.a,{lg:"6",md:"6",className:"mb-2"},u.a.createElement(v.a,null,"Video"),u.a.createElement(y.a,{type:"file",onChange:this.onChangeHandler}))),u.a.createElement(f.a,null,u.a.createElement(m.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Video"))))))}}]),a}(c.Component);t.default=E},830:function(e,t,a){"use strict";var n=a(44),r=a.n(n).a.create({baseURL:"http://3.6.37.16:8000"});t.a=r},832:function(e,t,a){"use strict";var n=a(6),r=a(8),o=a(17),s=a(19),i=a(1),l=a.n(i),c=a(2),u=a.n(c),d=a(5),f=a.n(d),p=a(4),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.focus=a.focus.bind(Object(o.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.type,s=e.bsSize,i=e.valid,c=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,h=e.innerRef,v=Object(r.a)(e,m),g=["radio","checkbox"].indexOf(o)>-1,y=new RegExp("\\D","g"),O=u||("select"===o||"textarea"===o?o:"input"),j="form-control";b?(j+="-plaintext",O=u||"input"):"file"===o?j+="-file":"range"===o?j+="-range":g&&(j=d?null:"form-check-input"),v.size&&y.test(v.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=v.size,delete v.size);var E=Object(p.mapToCssModules)(f()(t,c&&"is-invalid",i&&"is-valid",!!s&&"form-control-"+s,j),a);return("input"===O||u&&"function"===typeof u)&&(v.type=o),v.children&&!b&&"select"!==o&&"string"===typeof O&&"select"!==O&&(Object(p.warnOnce)('Input with a type of "'+o+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),l.a.createElement(O,Object(n.a)({},v,{ref:h,className:E,"aria-invalid":c}))},t}(l.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},835:function(e,t,a){"use strict";var n=a(6),r=a(8),o=a(17),s=a(19),i=a(1),l=a.n(i),c=a(2),u=a.n(c),d=a(5),f=a.n(d),p=a(4),m=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,s=e.tag,i=e.innerRef,c=Object(r.a)(e,m),u=Object(p.mapToCssModules)(f()(t,!!o&&"form-inline"),a);return l.a.createElement(s,Object(n.a)({},c,{ref:i,className:u}))},t}(i.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h},836:function(e,t,a){"use strict";var n=a(6),r=a(8),o=a(1),s=a.n(o),i=a(2),l=a.n(i),c=a(5),u=a.n(c),d=a(4),f=["className","cssModule","hidden","widths","tag","check","size","for"],p=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:p,order:p,offset:p})]),b={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:d.tagPropType,className:l.a.string,cssModule:l.a.object,xs:m,sm:m,md:m,lg:m,xl:m,widths:l.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},v=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,o=e.hidden,i=e.widths,l=e.tag,c=e.check,p=e.size,m=e.for,b=Object(r.a)(e,f),h=[];i.forEach((function(t,n){var r=e[t];if(delete b[t],r||""===r){var o,s=!n;if(Object(d.isObject)(r)){var i,l=s?"-":"-"+t+"-";o=v(s,t,r.size),h.push(Object(d.mapToCssModules)(u()(((i={})[o]=r.size||""===r.size,i["order"+l+r.order]=r.order||0===r.order,i["offset"+l+r.offset]=r.offset||0===r.offset,i))),a)}else o=v(s,t,r),h.push(o)}}));var g=Object(d.mapToCssModules)(u()(t,!!o&&"sr-only",!!c&&"form-check-label",!!p&&"col-form-label-"+p,h,!!h.length&&"col-form-label"),a);return s.a.createElement(l,Object(n.a)({htmlFor:m},b,{className:g}))};g.propTypes=b,g.defaultProps=h,t.a=g},838:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(105);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,s=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){i=!0,o=e},f:function(){try{s||null==r.return||r.return()}finally{if(i)throw o}}}}}}]);
//# sourceMappingURL=169.9f813c2b.chunk.js.map