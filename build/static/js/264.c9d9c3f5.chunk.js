(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[264],{2043:function(e,t,a){},2404:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(12),l=a(14),c=a(13),o=a(1),i=a.n(o),s=a(850),u=a(821),m=a(822),h=a(45),A=a(823),f=a(824),d=a(825),p=a(826),E=a(199),b=a(1223),w=a.n(b),C=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={basicAlert:!1,titleAlert:!1,htmlAlert:!1},e.handleAlert=function(t,a){e.setState(Object(h.a)({},t,a))},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(A.a,null,i.a.createElement(f.a,null,i.a.createElement(d.a,null,"Basic")),i.a.createElement(p.a,null,i.a.createElement("p",null,"SweetAlert automatically centers itself on the page and looks great no matter if you're using a desktop computer, mobile or tablet. It's even highly customizable, as you can see below!"),i.a.createElement(E.a,{className:"mr-1 mb-1",color:"primary",onClick:function(){return e.handleAlert("basicAlert",!0)},outline:!0},"Basic"),i.a.createElement(E.a,{className:"mr-1 mb-1",color:"primary",onClick:function(){return e.handleAlert("titleAlert",!0)},outline:!0},"With Title"),i.a.createElement(E.a,{className:"mb-1",color:"primary",onClick:function(){return e.handleAlert("htmlAlert",!0)},outline:!0},"HTML"),i.a.createElement(w.a,{title:"Any fool can use a computer",show:this.state.basicAlert,onConfirm:function(){return e.handleAlert("basicAlert",!1)}}),i.a.createElement(w.a,{title:"The Internet?,",show:this.state.titleAlert,onConfirm:function(){return e.handleAlert("titleAlert",!1)}},i.a.createElement("p",{className:"sweet-alert-text"},"That thing is still around?")),i.a.createElement(w.a,{title:i.a.createElement("strong",null,"HTML ",i.a.createElement("u",null,"example")),show:this.state.htmlAlert,onConfirm:function(){return e.handleAlert("htmlAlert",!1)}},i.a.createElement("p",{className:"sweet-alert-text"},"You can use bold text,"," ",i.a.createElement("a",{href:"http://pixinvent.com",target:"_blank",rel:"noopener noreferrer"},"links")," "," ","and other HTML tags"))))}}]),a}(i.a.Component),y=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={successAlert:!1,errorAlert:!1,infoAlert:!1,warningAlert:!1},e.handleAlert=function(t,a){e.setState(Object(h.a)({},t,a))},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(A.a,null,i.a.createElement(f.a,null,i.a.createElement(d.a,null,"Types")),i.a.createElement(p.a,null,i.a.createElement("p",null,'SweetAlert comes with 4 built-in types which will show a corresponding icon animation: "warning", "error", "success" and "info".'),i.a.createElement(E.a,{className:"mr-1 mb-1",color:"success",onClick:function(){return e.handleAlert("successAlert",!0)},outline:!0},"Success"),i.a.createElement(E.a,{className:"mr-1 mb-1",color:"danger",onClick:function(){return e.handleAlert("errorAlert",!0)},outline:!0},"Error"),i.a.createElement(E.a,{className:"mr-1 mb-1",color:"warning",onClick:function(){return e.handleAlert("warningAlert",!0)},outline:!0},"Warning"),i.a.createElement(E.a,{className:"mb-1",color:"info",onClick:function(){return e.handleAlert("infoAlert",!0)},outline:!0},"Info"),i.a.createElement(w.a,{success:!0,title:"Success",show:this.state.successAlert,onConfirm:function(){return e.handleAlert("successAlert",!1)}},i.a.createElement("p",{className:"sweet-alert-text"},"You clicked the button!")),i.a.createElement(w.a,{error:!0,title:"Error",show:this.state.errorAlert,onConfirm:function(){return e.handleAlert("errorAlert",!1)}},i.a.createElement("p",{className:"sweet-alert-text"},"You clicked the button!")),i.a.createElement(w.a,{info:!0,title:"Info!",show:this.state.infoAlert,onConfirm:function(){return e.handleAlert("infoAlert",!1)}},i.a.createElement("p",{className:"sweet-alert-text"},"You clicked the button!")),i.a.createElement(w.a,{warning:!0,title:"Warning",show:this.state.warningAlert,onConfirm:function(){return e.handleAlert("warningAlert",!1)}},i.a.createElement("p",{className:"sweet-alert-text"},"You clicked the button!"))))}}]),a}(i.a.Component),k=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={imgAlert:!1,timerAlert:!1,outsideClickAlert:!1,overlayAlert:!1,inputAlert:!1},e.handleAlert=function(t,a){e.setState(Object(h.a)({},t,a))},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(A.a,null,i.a.createElement(f.a,null,i.a.createElement(d.a,null,"Options")),i.a.createElement(p.a,null,i.a.createElement(E.a,{className:"mr-1 mb-1",color:"primary",onClick:function(){return e.handleAlert("imgAlert",!0)},outline:!0},"Image"),i.a.createElement(E.a,{className:"mr-1 mb-1",color:"primary",onClick:function(){return e.handleAlert("timerAlert",!0)},outline:!0},"Timeout"),i.a.createElement(E.a,{className:"mr-1 mb-1",color:"primary",onClick:function(){return e.handleAlert("overlayAlert",!0)},outline:!0},"Overlay"),i.a.createElement(E.a,{className:"mr-1 mb-1",color:"primary",onClick:function(){return e.handleAlert("outsideClickAlert",!0)},outline:!0},"Outside Click"),i.a.createElement(E.a,{className:"mb-1",color:"primary",onClick:function(){return e.handleAlert("inputAlert",!0)},outline:!0},"Input Alert"),i.a.createElement(w.a,{title:"Sweet!",custom:!0,show:this.state.imgAlert,customIcon:"https://raw.githubusercontent.com/djorg83/react-bootstrap-sweetalert/master/demo/assets/thumbs-up.jpg",onConfirm:function(){return e.handleAlert("imgAlert",!1)}},i.a.createElement("p",{className:"sweet-alert-text"},"Sweet Alert with an image.")),i.a.createElement(w.a,{title:"Auto close alert!",timeout:2e3,show:this.state.timerAlert,onConfirm:function(){return e.handleAlert("timerAlert",!1)},onCancel:function(){return e.handleAlert("timerAlert",!1)}},i.a.createElement("p",{className:"sweet-alert-text"},"I will close in 2 seconds.")),i.a.createElement(w.a,{title:"Click outside to close!",closeOnClickOutside:!0,show:this.state.outsideClickAlert,onConfirm:function(){return e.handleAlert("outsideClickAlert",!1)},onCancel:function(){return e.handleAlert("outsideClickAlert",!1)}},i.a.createElement("p",{className:"sweet-alert-text"},"You clicked the button!")),i.a.createElement(w.a,{title:"No Overlay",hideOverlay:!0,show:this.state.overlayAlert,onConfirm:function(){return e.handleAlert("overlayAlert",!1)}},i.a.createElement("p",{className:"sweet-alert-text"},"You clicked the button!")),i.a.createElement(w.a,{title:"An input!",input:!0,show:this.state.inputAlert,placeHolder:"Write something",onConfirm:function(){return e.handleAlert("inputAlert",!1)}},i.a.createElement("p",{className:"sweet-alert-text"},"Write something interesting:"))))}}]),a}(i.a.Component),g=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),c=0;c<r;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={defaultAlert:!1,confirmAlert:!1,cancelAlert:!1},e.handleAlert=function(t,a){e.setState(Object(h.a)({},t,a))},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(A.a,null,i.a.createElement(f.a,null,i.a.createElement(d.a,null,"Callback")),i.a.createElement(p.a,null,i.a.createElement(E.a,{className:"mr-1 mb-1",color:"primary",onClick:function(){return e.handleAlert("defaultAlert",!0)},outline:!0},"Callback"),i.a.createElement(w.a,{title:"Are you sure?",warning:!0,show:this.state.defaultAlert,showCancel:!0,reverseButtons:!0,cancelBtnBsStyle:"danger",confirmBtnText:"Yes, delete it!",cancelBtnText:"Cancel",onConfirm:function(){e.handleAlert("basicAlert",!1),e.handleAlert("confirmAlert",!0)},onCancel:function(){e.handleAlert("basicAlert",!1),e.handleAlert("cancelAlert",!0)}},"You won't be able to revert this!"),i.a.createElement(w.a,{success:!0,title:"Deleted!",confirmBtnBsStyle:"success",show:this.state.confirmAlert,onConfirm:function(){e.handleAlert("defaultAlert",!1),e.handleAlert("confirmAlert",!1)}},i.a.createElement("p",{className:"sweet-alert-text"},"Your file has been deleted.")),i.a.createElement(w.a,{error:!0,title:"Cancelled",confirmBtnBsStyle:"success",show:this.state.cancelAlert,onConfirm:function(){e.handleAlert("defaultAlert",!1),e.handleAlert("cancelAlert",!1)}},i.a.createElement("p",{className:"sweet-alert-text"},"Your imaginary file is safe :)"))))}}]),a}(i.a.Component),v=(a(2043),function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:"Sweet Alerts",subTitle:"A React implementation of SweetAlert",link:"https://github.com/djorg83/react-bootstrap-sweetalert"}),i.a.createElement(u.a,null,i.a.createElement(m.a,{sm:"12"},i.a.createElement(C,null)),i.a.createElement(m.a,{sm:"12"},i.a.createElement(y,null)),i.a.createElement(m.a,{sm:"12"},i.a.createElement(k,null)),i.a.createElement(m.a,{sm:"12"},i.a.createElement(g,null))))}}]),a}(i.a.Component));t.default=v},850:function(e,t,a){"use strict";var n=a(11),r=a(12),l=a(14),c=a(13),o=a(1),i=a.n(o),s=a(821),u=a(822),m=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(s.a,{className:"mb-2"},i.a.createElement(u.a,{sm:"12",className:"ml-50"},i.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?i.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):i.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),a}(i.a.Component);t.a=m}}]);
//# sourceMappingURL=264.c9d9c3f5.chunk.js.map