(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a(37)},,,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(12),i=a.n(r),c=(a(20),a(9)),o=a(2),l=a(3),u=a(5),m=a(4),d=a(6),p=s.a.createContext(),h=(a(21),function(e){var t=e.header;return s.a.createElement("h1",null,t)}),f=a(7),v=(a(11),function(e){var t=e.wifiStatus,a=e.network,n=e.ip,r=e.gtw,i=e.mask,c=e.dhcpIP,o=e.handleInputChange,l=e.ipRef,u=e.maskRef,m=e.gtwRef,d="".concat(a,"-ip-addr"),p="".concat(a,"-mask"),h="".concat(a,"-gtw"),f="input-text opacity-".concat(c||!t);return s.a.createElement("div",{className:f},s.a.createElement("label",{htmlFor:d},s.a.createElement("span",{className:"name-field"},"IP address: \xa0",s.a.createElement("span",{className:"asterisk"},"*")),s.a.createElement("input",{name:d,type:"text",id:d,disabled:c||!t,noValidate:c||!t,value:n,onChange:o,ref:l,required:!0})),s.a.createElement("label",{htmlFor:p},s.a.createElement("span",{className:"name-field"},"Subnet Mask: \xa0",s.a.createElement("span",{className:"asterisk"},"*")),s.a.createElement("input",{name:p,type:"text",id:p,disabled:c||!t,noValidate:c||!t,value:i,onChange:o,ref:u,required:!0})),s.a.createElement("label",{htmlFor:h},s.a.createElement("span",{className:"name-field"},"Default gateway:"),s.a.createElement("input",{name:h,type:"text",id:h,disabled:c||!t,noValidate:c||!t,value:r,onChange:o,ref:m})))}),g=a(1),b=a.n(g),w=b.a.shape({favorite:b.a.bool,name:b.a.string,security:b.a.arrayOf(b.a.string),strength:b.a.number}),S=(b.a.shape({"eth-ip":b.a.string,"eth-ip-addr":b.a.string,"eth-mask":b.a.string,"eth-gtw":b.a.string,"eth-dns":b.a.string,"eth-main-dns":b.a.string,"eth-sub-dns":b.a.string,wifi:b.a.bool,point:w,security:b.a.bool,key:b.a.string,"wifi-ip":b.a.string,"wifi-ip-addr":b.a.string,"wifi-mask":b.a.string,"wifi-gtw":b.a.string,"wifi-dns":b.a.string,"wifi-main-dns":b.a.string,"wifi-sub-dns":b.a.string,reset:b.a.bool}),{task:"labinvent","eth-ip":"dhcp","eth-ip-addr":"","eth-mask":"","eth-gtw":"","eth-dns":"dhcp","eth-main-dns":"","eth-sub-dns":"",wifi:!1,point:{favorite:!1,name:"",strength:0,security:[""]},security:!1,key:"","wifi-ip":"dhcp","wifi-ip-addr":"","wifi-mask":"","wifi-gtw":"","wifi-dns":"dhcp","wifi-main-dns":"","wifi-sub-dns":""}),E={"255.255.255.255":32,"255.255.255.254":31,"255.255.255.252":30,"255.255.255.248":29,"255.255.255.240":28,"255.255.255.224":27,"255.255.255.192":26,"255.255.255.128":25,"255.255.255.0":24,"255.255.254.0":23,"255.255.252.0":22,"255.255.248.0":21,"255.255.240.0":20,"255.255.224.0":19,"255.255.192.0":18,"255.255.128.0":17,"255.255.0.0":16,"255.254.0.0":15,"255.252.0.0":14,"255.248.0.0":13,"255.240.0.0":12,"255.224.0.0":11,"255.192.0.0":10,"255.128.0.0":9,"255.0.0.0":8,"254.0.0.0":7,"252.0.0.0":6,"248.0.0.0":5,"240.0.0.0":4,"224.0.0.0":3,"192.0.0.0":2,"128.0.0.0":1,"0.0.0.0":0},y="https://labinvent.herokuapp.com/form",k=[/[a-z]/,/[A-Z]/,/\d/,/[!@#$&*]/],C={Accept:"application/json, text/plain, */*","Content-Type":"application/json"},O="This is an incorrect IP-address",j="You filled in an incorrect mask",N="You have to filled in a mask",P="Gateway and host aren't in the same subnet",D="Password does not meet the requirements",I="You have to set a password",R="Please select",A="There has been a problem with fetch. Try again.",F=function(e){var t=e.split(".");return 4===t.length&&t.every(function(e){return parseInt(e,10)>=0&&parseInt(e,10)<=255&&!/\D/.test(e)&&!("0"===e[0]&&e.length>1)})},x=function(e,t){return!e&&t?"You have to fill this field":F(e)||!e?"":O},V=function(e){return Object.keys(E).includes(e)?"":e?j:N},T=a(8),_=function(e){return e.split(".").map(function(e){return parseInt(e,10).toString(2)}).toString().split(",").map(function(e){var t=Array(8-e.length).fill("0");return[].concat(Object(T.a)(t),Object(T.a)(e)).join("")}).join("").split("")},M=function(e,t){return e.map(function(e,a){return e*t[a]}).join("")},L=function(e,t,a){var n=_(e),s=_(t),r=_(a);return M(n,s)===M(r,s)?"":P},U=function(e){return!(e.length<8)&&k.every(function(t){return t.test(e)})},Y=function(e){return e?U(e)?"":D:I},q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={ip:"",mask:"",gtw:"",reset:!1},a.ipRef=s.a.createRef(),a.maskRef=s.a.createRef(),a.gtwRef=s.a.createRef(),a.handleInputChange=function(e){var t=e.target,n=t.value,s=t.name.split("-")[1];a.setState(Object(f.a)({},s,n))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.network,a=e.config;this.setState({ip:a["".concat(t,"-ip-addr")],mask:a["".concat(t,"-mask")],gtw:a["".concat(t,"-gtw")]})}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.ip,a=e.gtw,n=e.mask;this.ipRef.current.setCustomValidity(x(t,!0)),this.maskRef.current.setCustomValidity(V(n)),this.gtwRef.current.setCustomValidity(x(a,!1)),!x(a)&&a&&this.gtwRef.current.setCustomValidity(L(t,n,a))}},{key:"render",value:function(){var e=this.props,t=e.network,a=e.dhcpIP,n=e.wifiStatus,r=this.state,i=r.ip,c=r.mask,o=r.gtw;return s.a.createElement(v,{network:t,ip:i,mask:c,gtw:o,dhcpIP:a,wifiStatus:n,handleInputChange:this.handleInputChange,ipRef:this.ipRef,maskRef:this.maskRef,gtwRef:this.gtwRef})}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.network,n=e.config;return e.config.reset!==t.reset?{ip:n["".concat(a,"-ip-addr")],mask:n["".concat(a,"-mask")],gtw:n["".concat(a,"-gtw")],reset:n.reset}:null}}]),t}(n.PureComponent),W=function(e){return s.a.createElement(p.Consumer,null,function(t){return s.a.createElement(q,Object.assign({},e,{config:t}))})},H=function(e){var t=e.wifiStatus,a=e.network,n=e.main,r=e.sub,i=e.dhcpDNS,c=e.handleInputChange,o=e.mainRef,l=e.subRef,u="".concat(a,"-main-dns"),m="".concat(a,"-sub-dns"),d=i||!t,p="input-text opacity-".concat(d);return s.a.createElement("div",{className:p},s.a.createElement("label",{htmlFor:u},s.a.createElement("span",{className:"name-field"},"Prefered DNS server: \xa0",s.a.createElement("span",{className:"asterisk"},"*")),s.a.createElement("input",{name:u,type:"text",id:u,disabled:d,noValidate:d,value:n,onChange:c,ref:o,required:!0})),s.a.createElement("label",{htmlFor:m},s.a.createElement("span",{className:"name-field"},"Alternative DNS server:"),s.a.createElement("input",{name:m,type:"text",id:m,disabled:d,noValidate:d,value:r,onChange:c,ref:l})))},J=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={main:"",sub:"",reset:!1},a.mainRef=s.a.createRef(),a.subRef=s.a.createRef(),a.handleInputChange=function(e){var t=e.target,n=t.value,s=t.name.split("-")[1];a.setState(Object(f.a)({},s,n))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.network,a=e.config;this.setState({main:a["".concat(t,"-main-dns")],sub:a["".concat(t,"-sub-dns")]})}},{key:"componentDidUpdate",value:function(){var e=this.state,t=e.main,a=e.sub;this.mainRef.current.setCustomValidity(x(t)),this.subRef.current.setCustomValidity(x(a))}},{key:"render",value:function(){var e=this.props,t=e.network,a=e.wifiStatus,n=e.dhcpDNS,r=this.state,i=r.main,c=r.sub;return s.a.createElement(H,{network:t,main:i,sub:c,dhcpDNS:n,wifiStatus:a,handleInputChange:this.handleInputChange,mainRef:this.mainRef,subRef:this.subRef})}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.network,n=e.config;return e.config.reset!==t.reset?{main:n["".concat(a,"-main-dns")],sub:n["".concat(a,"-sub-dns")],reset:n.reset}:null}}]),t}(n.PureComponent),K=function(e){return s.a.createElement(p.Consumer,null,function(t){return s.a.createElement(J,Object.assign({},e,{config:t}))})},B=(a(24),function(e){var t=e.wifiStatus,a=e.purpose,n=e.network,r=e.handleChange,i=e.value,c=e.radioOne,o=e.radioTwo,l="".concat(n,"-").concat(a,"-dhcp"),u="".concat(n,"-").concat(a,"-static"),m="".concat(n,"-").concat(a),d="radiobuttons opacity-".concat(!t);return s.a.createElement("div",{className:d},s.a.createElement("label",{htmlFor:l},s.a.createElement("input",{type:"radio",value:"dhcp",id:l,name:m,disabled:!t,checked:"dhcp"===i,onChange:r}),s.a.createElement("span",null,c)),s.a.createElement("label",{htmlFor:u},s.a.createElement("input",{type:"radio",value:"static",id:u,name:m,disabled:!t,checked:"static"===i,onChange:r}),s.a.createElement("span",null,o)))}),z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={value:"dhcp",reset:!1},a.handleChange=function(e){var t=e.target.value;a.setState({value:t})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.purpose,a=e.config,n=e.network,s=a["".concat(n,"-").concat(t)];this.setState({value:s})}},{key:"componentDidUpdate",value:function(){var e=this.props.setDHCP;e("dhcp"===this.state.value)}},{key:"render",value:function(){var e=this.props,t=e.radioOne,a=e.radioTwo,n=e.network,r=e.purpose,i=e.wifiStatus,c=this.state.value;return s.a.createElement(B,{value:c,radioOne:t,radioTwo:a,network:n,purpose:r,handleChange:this.handleChange,wifiStatus:i})}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.config,n=e.purpose,s=e.network,r=a["".concat(s,"-").concat(n)];return e.config.reset!==t.reset?{value:r,reset:a.reset}:null}}]),t}(n.PureComponent);z.defaultProps={purpose:"ip"};var G=function(e){return s.a.createElement(p.Consumer,null,function(t){return s.a.createElement(z,Object.assign({},e,{config:t}))})},Z=function(e){var t=e.network,a=e.wifiStatus,n=e.dhcpIP,r=e.dhcpDNS,i=e.setIPdhcp,c=e.setDNSdhcp;return s.a.createElement("div",{className:"networkSettings"},s.a.createElement(G,{radioOne:"Obtain an IP address automatically (DHCP/BootP)",radioTwo:"Use the following IP address:",network:t,wifiStatus:a,setDHCP:i}),s.a.createElement(W,{network:t,dhcp:!1,wifiStatus:a,dhcpIP:n}),s.a.createElement(G,{radioOne:"Obtain DNS server address automatically",radioTwo:"Use the following DNS server address:",network:t,purpose:"dns",wifiStatus:a,setDHCP:c}),s.a.createElement(K,{network:t,dhcp:!1,wifiStatus:a,dhcpDNS:r}))};Z.defaultProps={network:"eth",wifiStatus:!0};var $=Z,Q=(a(25),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={dhcpIP:!0,dhcpDNS:!0},a.setIPdhcp=function(e){a.setState({dhcpIP:e})},a.setDNSdhcp=function(e){a.setState({dhcpDNS:e})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.dhcpIP,a=e.dhcpDNS;return s.a.createElement("div",{className:"ethernet"},s.a.createElement(h,{header:"Ethernet Settings"}),s.a.createElement($,{dhcpIP:t,dhcpDNS:a,setIPdhcp:this.setIPdhcp,setDNSdhcp:this.setDNSdhcp}))}}]),t}(n.Component)),X=(a(26),function(e){var t=e.wifiStatus,a=e.purpose,n=e.handleCheckboxChange,r=e.status,i=e.description,c="opacity-".concat(!t);return s.a.createElement("label",{htmlFor:a,className:c},s.a.createElement("input",{type:"checkbox",id:a,disabled:!t,onChange:n,checked:r,name:a,value:r}),s.a.createElement("span",null,i))}),ee=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={status:!1,reset:!1},a.handleCheckboxChange=function(e){var t=e.target;(0,a.props.setStatus)(t.checked),a.setState({status:t.checked})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.purpose,a=e.config;(0,e.setStatus)(a["".concat(t)]),this.setState({status:a["".concat(t)]})}},{key:"render",value:function(){var e=this.props,t=e.description,a=e.purpose,n=e.wifiStatus,r=this.state.status;return s.a.createElement(X,{description:t,purpose:a,wifiStatus:n,status:r,handleCheckboxChange:this.handleCheckboxChange})}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.config,n=e.purpose,s=e.setStatus;return e.config.reset!==t.reset?(s(a["".concat(n)]),{status:a["".concat(n)],reset:a.reset}):null}}]),t}(n.Component);ee.defaultProps={wifiStatus:!0,purpose:"wifi"};var te=function(e){return s.a.createElement(p.Consumer,null,function(t){return s.a.createElement(ee,Object.assign({},e,{config:t}))})},ae=(a(27),function(e){var t=e.wifiStatus,a=e.securityStatus,n=e.handleInputChange,r=e.pswd,i=e.inputRef,c=!a||!t,o="input-text opacity-".concat(c);return s.a.createElement("div",{className:o},s.a.createElement("label",{htmlFor:"securityKey"},s.a.createElement("span",{className:"name-field"},"Security Key: \xa0",s.a.createElement("span",{className:"asterisk"},"*")),s.a.createElement("input",{name:"key",type:"password",id:"securityKey",disabled:c,noValidate:c,value:r,onChange:n,autoComplete:"off",ref:i,required:!0})))}),ne=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={pswd:"",reset:!1},a.inputRef=s.a.createRef(),a.handleInputChange=function(e){var t=e.target.value;a.setState({pswd:t})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.config.key;this.setState({pswd:e})}},{key:"componentDidUpdate",value:function(){var e=this.state.pswd;this.inputRef.current.setCustomValidity(Y(e))}},{key:"render",value:function(){var e=this.props,t=e.securityStatus,a=e.wifiStatus,n=this.state.pswd;return s.a.createElement(ae,{securityStatus:t,wifiStatus:a,pswd:n,handleInputChange:this.handleInputChange,inputRef:this.inputRef})}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.config,n=a.key;return e.config.reset!==t.reset?{pass:n,reset:a.reset}:null}}]),t}(n.PureComponent),se=function(e){return s.a.createElement(p.Consumer,null,function(t){return s.a.createElement(ne,Object.assign({},e,{config:t}))})},re=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={sec:!1},a.setSec=function(e){a.setState({sec:e})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.sec,t=this.props.wifiStatus;return s.a.createElement("div",{className:"security"},s.a.createElement(te,{description:"Enable Wireless Security:",purpose:"security",setStatus:this.setSec,wifiStatus:t}),s.a.createElement(se,{securityStatus:e,wifiStatus:t}))}}]),t}(n.Component),ie=function(e,t){return t.strength-e.strength},ce=function(e){var t=e.filter(function(e){return e.favorite}),a=e.filter(function(e){return!e.favorite});return t.sort(ie),a.sort(ie),[].concat(Object(T.a)(t),Object(T.a)(a))},oe=function(){return new Promise(function(e,t){fetch("https://labinvent.herokuapp.com/ponts").then(function(e){return e.json()}).then(function(t){return e(ce(t))}).catch(function(e){var a=e.message;console.log("".concat(A).concat(a)),t(a)})})},le=a(13),ue=(a(28),function(e){var t,a=e.message,n=e.handleAnimation;switch(a){case"Searching access points":t="message search";break;case"Form was send incorrectly. Try again.":t="message err-submit";break;case"You need to select access point":t="message point";break;case"".concat(A):t="message err-fetch";break;default:t="message"}return s.a.createElement("div",{className:t,onAnimationEnd:n},a)}),me=function(e){var t=e.wifiStatus,a=e.handleMessage,r=e.handleAnimation,i=e.handlePoints,c=e.message;return s.a.createElement(n.Fragment,null,c&&s.a.createElement(ue,{message:c,handleAnimation:r}),s.a.createElement("button",{type:"button",className:"round",onClick:function(){i(),a()},disabled:!t},s.a.createElement("div",{className:"arrow-round"})))},de=(a(29),function(e){var t=e.wifiStatus,a=e.handlePoints,r=Object(n.useState)(""),i=Object(le.a)(r,2),c=i[0],o=i[1];return s.a.createElement(me,{handlePoints:a,handleAnimation:function(){o("")},handleMessage:function(){o("Searching access points")},message:c,wifiStatus:t})}),pe=(a(30),function(e){var t=e.wifiStatus,a=e.arrowClass,r=e.message,i=e.handleAnimation,c=e.valueSlt,o=e.slt,l=e.handleChange,u=e.liClass,m=e.points,d=e.handlePoints,p="dropdown opacity-".concat(!t);return s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:a}),r&&s.a.createElement(ue,{message:r,handleAnimation:i}),s.a.createElement("div",{className:p},s.a.createElement("span",{className:"name-field"},"Wireless Network Name:",s.a.createElement("span",{className:"asterisk"},"*")),s.a.createElement("ul",{className:"select"},s.a.createElement("span",{className:"select_label select_label-placeholder"},c),s.a.createElement("input",{className:"select_close",type:"radio",name:"point",id:"closer",value:"closer",disabled:!t,checked:"closer"===o,onChange:l}),s.a.createElement("li",{className:u},s.a.createElement("input",{className:"select_expand",value:"opener",type:"radio",name:"point",id:"opener",disabled:!t,checked:"opener"===o,onChange:l}),s.a.createElement("label",{className:"select_closeLabel",htmlFor:"closer"}),s.a.createElement("ul",{className:"select_options"},0!==m.length&&m.map(function(e){return s.a.createElement("li",{className:"select_option",key:e.name},s.a.createElement("input",{className:"select_input",value:e.name,type:"radio",name:"point",id:e.name,onChange:l,checked:o===e.name}),s.a.createElement("label",{className:"select_label",htmlFor:e.name},e.name))})),s.a.createElement("label",{className:"select_expandLabel",htmlFor:"opener"})))),s.a.createElement(de,{wifiStatus:t,handlePoints:d}))}),he=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={valueSlt:R,slt:"",points:[],message:"",reset:!1,firstLoad:!0},a.handleChange=function(e){var t=a.state.points,n=a.props.config.savePoint,s=e.target.value;"closer"===s?a.setState({valueSlt:R,slt:R,firstLoad:!1}):"opener"!==s?a.setState({valueSlt:s,slt:s,firstLoad:!1}):a.setState({valueSlt:R,slt:"opener",firstLoad:!1}),n(t.filter(function(e){return e.name===s})[0])},a.handlePoints=function(){oe().then(function(e){return a.setState({points:e})}).catch(function(){a.setState({message:"".concat(A)})})},a.handleAnimation=function(){a.setState({message:""})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.config.point,t=[];e.name&&(t.push(e),this.setState({points:t,valueSlt:e.name,slt:e.name}))}},{key:"render",value:function(){var e=this.props.wifiStatus,t=this.state,a=t.valueSlt,n=t.slt,r=t.message,i=t.points,c="opener"===n?"select_items violet":"select_items",o="opener"===n?"arrow up":"arrow down";return t.firstLoad&&(o="arrow"),s.a.createElement(pe,{liClass:c,arrowClass:o,message:r,handleAnimation:this.handleAnimation,valueSlt:a,slt:n,points:i,handleChange:this.handleChange,wifiStatus:e,handlePoints:this.handlePoints})}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a=e.config;return e.config.reset!==t.reset?{valueSlt:R,reset:a.reset}:null}}]),t}(n.Component),fe=function(e){return s.a.createElement(p.Consumer,null,function(t){return s.a.createElement(he,Object.assign({},e,{config:t}))})},ve=(a(31),function(e){var t=e.setStatus,a=e.wifiStatus;return s.a.createElement("div",{className:"enable-wifi"},s.a.createElement(te,{description:"Enable wifi:",setStatus:t}),s.a.createElement("div",{className:"wireless-name"},s.a.createElement(fe,{wifiStatus:a})))}),ge=(a(32),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={wifi:!1,dhcpIP:!0,dhcpDNS:!0},a.setStatusWiFi=function(e){a.setState({wifi:e})},a.setIPdhcp=function(e){a.setState({dhcpIP:e})},a.setDNSdhcp=function(e){a.setState({dhcpDNS:e})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.wifi,a=e.dhcpIP,n=e.dhcpDNS;return s.a.createElement("div",{className:"wireless"},s.a.createElement(h,{header:"Wireless Settings"}),s.a.createElement(ve,{wifiStatus:t,setStatus:this.setStatusWiFi}),s.a.createElement(re,{wifiStatus:t}),s.a.createElement($,{network:"wifi",wifiStatus:t,dhcpIP:a,dhcpDNS:n,setIPdhcp:this.setIPdhcp,setDNSdhcp:this.setDNSdhcp}))}}]),t}(n.Component)),be=(a(33),function(e){var t=e.text,a=e.handleCancel,n="button ".concat(t).toLowerCase();return"Save"===t?s.a.createElement("button",{type:"submit",className:n,form:"data"},t):s.a.createElement("button",{type:"button",className:n,onClick:a},t)}),we=(a(34),function(e){var t=e.handleCancel;return s.a.createElement("div",{className:"buttons"},s.a.createElement(be,{text:"Save",handleCancel:t}),s.a.createElement(be,{text:"Cancel",handleCancel:t}))}),Se=(a(35),function(){return s.a.createElement("div",{className:"loading"},s.a.createElement("div",{className:"lds-spinner"},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null)),s.a.createElement("h2",null,"Loading last configuration"))}),Ee=(a(36),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={config:"",message:"",savePoint:null},a.handleSubmit=function(e){var t=a.state,n=t.config,s=t.savePoint,r=e.target,i=r.point,o=r.wifi,l={},u=new FormData(e.target);if(e.preventDefault(),"true"===o.value&&(""===i.value||"opener"===i.value))return a.setState({message:"You need to select access point"}),null;u.forEach(function(e,t){switch(e){case"true":l[t]=!0;break;case"false":l[t]=!1;break;default:l[t]=e}});var m=JSON.stringify(Object(c.a)({},S,l,{point:s})),d=Object(c.a)({},n,S,l,{point:s});return a.setState({config:d,message:"Saving data"}),fetch(y,{method:"POST",headers:C,body:m}).then(function(e){return e.json()}).catch(function(e){console.log("".concat(e)),a.setState({message:"Form was send incorrectly. Try again."})}),null},a.handleCancel=function(e){e.preventDefault();var t=a.state.config,n=Object(c.a)({},t,{reset:!t.reset});a.setState({config:n,message:"Cancel unsaved data"})},a.handleAnimation=function(){a.setState({message:""})},a.saveSltPoint=function(e){a.setState({savePoint:e})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(y).then(function(e){return e.json()}).then(function(e){return e.data[0]}).then(function(e){if(e){var t=Object(c.a)({},{},e);return delete t.url,t}return S}).then(function(t){var a=Object(c.a)({},t,{reset:!1,savePoint:e.saveSltPoint});e.setState({config:a}),e.saveSltPoint(t.point)}).catch(function(e){var t=e.message;console.log("".concat(t))})}},{key:"render",value:function(){var e=this.state,t=e.config,a=e.message;return s.a.createElement(p.Provider,{value:t},s.a.createElement("form",{className:"App",id:"data",onSubmit:this.handleSubmit},a&&s.a.createElement(ue,{message:a,handleAnimation:this.handleAnimation}),!t&&s.a.createElement(Se,null),t&&s.a.createElement(Q,null),t&&s.a.createElement(ge,null),t&&s.a.createElement(we,{handleCancel:this.handleCancel})))}}]),t}(n.Component));i.a.render(s.a.createElement(Ee,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.88f94b52.chunk.js.map