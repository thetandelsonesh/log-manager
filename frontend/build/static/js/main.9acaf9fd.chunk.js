(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{176:function(e,t,a){e.exports=a.p+"static/media/logo.125952b3.png"},197:function(e,t,a){e.exports=a(382)},206:function(e,t,a){},207:function(e,t,a){},209:function(e,t,a){},226:function(e,t,a){},237:function(e,t,a){},367:function(e,t,a){},382:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(29),c=a.n(l),o=a(64),i=(a(206),a(69)),s=a(79),u=a(36),m=a(389),d=a(388),p=(a(207),a(85),a(45)),E=a(387),f=(a(209),a(176)),g=a.n(f),h=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{src:g.a,alt:"Log Manager"})),r.a.createElement("div",{className:"button-container"},r.a.createElement(s.b,{to:"/add-log"},r.a.createElement(p.a,{icon:r.a.createElement(E.a,null),size:"large",type:"primary"},"Log Time"))))},v=(a(384),a(195)),O=a(390),b=a(385),y=a(386),j=(a(226),Object(u.f)((function(e){return Object(n.useEffect)((function(){var t=e.history.listen((function(){e.isMobile&&e.hideSidebar(!1)}));return function(){return t()}})),r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"app-name"},r.a.createElement("div",{className:"avatar-container"},r.a.createElement(v.a,{size:"large"},"ST")),r.a.createElement("div",{className:"admin-info"},r.a.createElement("h4",null,"Sonesh Tandel"),r.a.createElement("p",null,"log manager"))),r.a.createElement("ul",null,r.a.createElement(s.c,{exact:!0,to:"/"},r.a.createElement("li",null,r.a.createElement(O.a,null)," Dashboard")),r.a.createElement(s.c,{exact:!0,to:"/employees"},r.a.createElement("li",null,r.a.createElement(b.a,null)," Employees")),r.a.createElement(s.c,{exact:!0,to:"/projects"},r.a.createElement("li",null,r.a.createElement(y.a,null)," Projects"))))}))),S=a(16),T=(a(137),a(92)),x=(a(103),a(67)),_=(a(104),a(46)),L=(a(131),a(47)),I=function(e){if(!e)return null;if((e=parseInt(e))<60)return"".concat(e,"m");var t=e/1440,a=Math.floor(t),n=e%1440,r=n?n/60:(t-a)/60,l=Math.floor(r),c=60*(r-l),o=Math.round(c),i="";return a&&(i+="".concat(a,"d ")),l&&(i+="".concat(l,"h ")),o&&(i+="".concat(o,"m")),i},P=(a(237),[{title:"Project",dataIndex:"project",key:"project",fixed:"left",width:160,render:function(e,t){return t.project.name}},{title:"Employee",dataIndex:"employee",key:"employee",render:function(e,t){return t.employee.name}},{title:"Date",dataIndex:"logDate",key:"logDate"},{title:"Logged Time",dataIndex:"logTime",key:"logTime",render:function(e){return I(e)}}]),G=function(e){var t,a,l,c,o,s,u=Object(n.useState)({}),m=Object(i.a)(u,2),d=m[0],p=m[1],E=Object(n.useState)({}),f=Object(i.a)(E,2),g=f[0],h=f[1],v=Object(n.useState)({current:1,pageSize:10,total:1}),O=Object(i.a)(v,2),b=O[0],y=O[1];Object(n.useEffect)((function(){var t=e.filters,a=t.employeeList;0===t.projectList.length&&e.fetchProjectOptions(),0===a.length&&e.fetchEmployeeOptions(),e.fetchLogs(),e.fetchLogStats()}),[]),Object(n.useEffect)((function(){var t={page:1};d&&d.value&&(t.employee=d.value),g&&g.value&&(t.project=g.value),e.fetchLogs(t),e.fetchLogStats(t)}),[d,g]),Object(n.useEffect)((function(){y(Object(S.a)(Object(S.a)({},b),{},{total:e.logs.total}))}),[e.logs]);var j=e.logStats.stats,G=e.filters,w=G.employeeList,k=G.projectList,C=w.map((function(e,t){var a=e.id,n=e.name;return r.a.createElement(L.a.Option,{key:a,value:a},n)})),R=k.map((function(e,t){var a=e.id,n=e.name;return r.a.createElement(L.a.Option,{key:a,value:a},n)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page-header"},r.a.createElement(x.a,null,r.a.createElement(_.a,{xs:24,sm:24,lg:12},r.a.createElement("h1",null,"Dashboard")),r.a.createElement(_.a,{xs:24,sm:24,lg:12},r.a.createElement("div",{className:"page-filters"},r.a.createElement(L.a,{labelInValue:!0,allowClear:!0,size:"large",placeholder:"Select Project",onChange:function(e){h(e)}},R),r.a.createElement(L.a,{labelInValue:!0,allowClear:!0,size:"large",placeholder:"Select Employee",onChange:function(e){p(e)}},C))))),r.a.createElement("div",{className:"dashboard-stats"},r.a.createElement(x.a,{gutter:40},r.a.createElement(_.a,{xs:24,md:12,lg:8},r.a.createElement("div",{className:"stat-cell"},r.a.createElement("p",null,"Project Time log: ",r.a.createElement("b",null,null!==(t=null===g||void 0===g?void 0:g.label)&&void 0!==t?t:"All")),r.a.createElement("h3",null,null!==(a=I(j.projectLogStat))&&void 0!==a?a:"-"))),r.a.createElement(_.a,{xs:24,md:12,lg:8},r.a.createElement("div",{className:"stat-cell"},r.a.createElement("p",null,"Estimated Project Time: ",r.a.createElement("b",null,null!==(l=null===g||void 0===g?void 0:g.label)&&void 0!==l?l:"All")),r.a.createElement("h3",null,null!==(c=I(j.projectStat))&&void 0!==c?c:"-"))),r.a.createElement(_.a,{xs:24,md:12,lg:8},r.a.createElement("div",{className:"stat-cell"},r.a.createElement("p",null,"Employee Time log: ",r.a.createElement("b",null,null!==(o=null===d||void 0===d?void 0:d.label)&&void 0!==o?o:"All")),r.a.createElement("h3",null,null!==(s=I(j.employeeLogStat))&&void 0!==s?s:"-"))))),r.a.createElement(T.a,{rowKey:"id",columns:P,loading:e.logs.loading,dataSource:e.logs.list,pagination:b,onChange:function(t){var a={page:t.current};d&&d.value&&(a.employee=d.value),g&&g.value&&(a.project=g.value),y(t),e.fetchLogs(a)},scroll:{x:1200}}))},w=a(41),k=a.n(w),C=a(57),R=a(126),N=a.n(R);N.a.defaults.baseURL="http://ec2-13-126-206-180.ap-south-1.compute.amazonaws.com/api/",N.a.interceptors.request.use((function(e){return e.headers["x-api-key"]="dc580f09-3fcb-4da4-8927-40924a329626",e.headers["Content-Type"]="application/json",e}),(function(e){return console.error("Interceptor : Error occured due to : ",e),Promise.reject(e)}));var D=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new Promise((function(r,l){var c={method:e,url:t,config:n};"get"===e?c.params=a:c.data=a,N()(c).then((function(e){var t=e.data,a=t.error,n=t.data,c=t.msg;a?l(a):r({data:n,msg:c})})).catch((function(e){if(e.response){var t=e.response.data;l(t.error)}else l({code:"ERROR",msg:"WE are under maintenance!"})}))}))},M=function(e){return D("get","/log",e)},A=function(e){return D("post","/log",e)},z=function(e){return D("get","/log/stats",e)},F=function(){return{type:"GET_LOGS_PROGRESS"}},Y=function(){return{type:"GET_LOG_STATS_PROGRESS"}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return D("get","/project",{search:e})},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return D("get","/employee",{search:e})},q=function(){return function(){var e=Object(C.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D("get","/project",{minimal:!0});case 3:a=e.sent,t({type:"GET_PROJECT_OPTIONS",payload:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("get project options failed");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},H=function(){return function(){var e=Object(C.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D("get","/employee",{minimal:!0});case 3:a=e.sent,t({type:"GET_EMPLOYEE_OPTIONS",payload:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("get employee options failed");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},V={fetchLogs:function(e){return function(){var t=Object(C.a)(k.a.mark((function t(a){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(F),t.prev=1,t.next=4,M(e);case 4:n=t.sent,a({type:"GET_LOGS_SUCCESS",payload:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"GET_LOGS_FAILED",err:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},fetchLogStats:function(e){return function(){var t=Object(C.a)(k.a.mark((function t(a){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Y),t.prev=1,t.next=4,z(e);case 4:n=t.sent,a({type:"GET_LOG_STATS_SUCCESS",payload:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"GET_LOG_STATS_FAILED",err:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},fetchEmployeeOptions:H,fetchProjectOptions:q},K=Object(o.b)((function(e){return{logs:Object(S.a)({},e.logs),logStats:Object(S.a)({},e.logStats),filters:e.filters}}),V)(G),W=(a(174),a(124)),B=function(){var e=null;return function(t,a){e&&clearTimeout(e),e=setTimeout(t,a)}},Q=B(),X=[{title:"Name",dataIndex:"name",key:"name",fixed:"left",width:160},{title:"Employee ID",dataIndex:"employeeId",key:"employeeId"},{title:"Designation",dataIndex:"designation",key:"designation"},{title:"Email ID",dataIndex:"emailId",key:"emailId"},{title:"Gender",dataIndex:"gender",key:"gender"},{title:"DOB",dataIndex:"dob",key:"dob"}],Z=function(e){Object(n.useEffect)((function(){e.fetchEmployees()}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page-header"},r.a.createElement(x.a,null,r.a.createElement(_.a,{xs:24,sm:24,lg:12},r.a.createElement("h1",null,"Employees")),r.a.createElement(_.a,{xs:24,sm:24,lg:12},r.a.createElement("div",{className:"page-filters"},r.a.createElement(W.a.Search,{allowClear:!0,placeholder:"Search Employees...",size:"large",onChange:function(t){var a=t.target.value;Q((function(){return e.fetchEmployees(a)}),300)}}))))),r.a.createElement(T.a,{rowKey:"id",columns:X,loading:e.loading,pagination:!1,dataSource:e.list,scroll:{x:1200}}))},$=function(){return{type:"GET_EMPLOYEES_PROGRESS"}},ee={fetchEmployees:function(e){return function(){var t=Object(C.a)(k.a.mark((function t(a){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a($),t.prev=1,t.next=4,U(e);case 4:n=t.sent,a({type:"GET_EMPLOYEES_SUCCESS",payload:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"GET_EMPLOYEES_FAILED",err:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},te=Object(o.b)((function(e){return Object(S.a)({},e.employee)}),ee)(Z),ae=B(),ne=[{title:"Project Name",dataIndex:"name",key:"name",fixed:"left",width:160},{title:"Client",dataIndex:"client",key:"client"},{title:"Client Email ID",dataIndex:"clientEmailId",key:"clientEmailId"},{title:"Estimate",dataIndex:"estimate",key:"estimate",render:function(e){return I(e)}}],re=function(e){Object(n.useEffect)((function(){e.fetchProjects()}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"page-header"},r.a.createElement(x.a,null,r.a.createElement(_.a,{xs:24,sm:24,lg:12},r.a.createElement("h1",null,"Projects")),r.a.createElement(_.a,{xs:24,sm:24,lg:12},r.a.createElement("div",{className:"page-filters"},r.a.createElement(W.a.Search,{allowClear:!0,placeholder:"Search Projects...",size:"large",onChange:function(t){var a=t.target.value;ae((function(){return e.fetchProjects(a)}),300)}}))))),r.a.createElement(T.a,{rowKey:"id",columns:ne,loading:e.loading,pagination:!1,dataSource:e.list,scroll:{x:1200}}))},le=function(){return{type:"GET_PROJECTS_PROGRESS"}},ce={fetchProjects:function(e){return function(){var t=Object(C.a)(k.a.mark((function t(a){var n;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(le),t.prev=1,t.next=4,J(e);case 4:n=t.sent,a({type:"GET_PROJECTS_SUCCESS",payload:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"GET_PROJECTS_FAILED",err:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},oe=Object(o.b)((function(e){return Object(S.a)({},e.project)}),ce)(re),ie=(a(359),a(145)),se=(a(383),a(194)),ue=(a(363),a(144)),me=(a(365),a(72)),de=a(70),pe=a.n(de),Ee=(a(367),function(e){var t=me.a.useForm(),a=Object(i.a)(t,1)[0],l=function(){var e=Object(C.a)(k.a.mark((function e(t){var n,r,l,c,o,i,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.projectId,r=t.employeeId,l=t.logTimeH,c=t.logTimeM,o=pe()(t.logDate).format("YYYY-MM-DD"),i=60*parseInt(l)+parseInt(c),s={projectId:n,employeeId:r,logDate:o,logTime:i},e.prev=4,e.next=7,A({data:s});case 7:e.sent,ue.b.success("Log has been added!"),a.resetFields(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),ue.b.error("Something went wrong. Please try again!");case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){var t=e.filters,a=t.employeeList;0===t.projectList.length&&e.fetchProjectOptions(),0===a.length&&e.fetchEmployeeOptions()}),[]);var c=e.filters,o=c.employeeList,s=c.projectList,u=o.map((function(e,t){var a=e.id,n=e.name;return r.a.createElement(L.a.Option,{key:a,value:a},n)})),m=s.map((function(e,t){var a=e.id,n=e.name;return r.a.createElement(L.a.Option,{key:a,value:a},n)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Add Log"),r.a.createElement("div",{className:"log-form-container"},r.a.createElement(me.a,{form:a,layout:"vertical",onFinish:l},r.a.createElement(me.a.Item,{label:"Log Date",name:"logDate",colon:!1,rules:[{required:!0,message:"Please select Log Date!"}]},r.a.createElement(se.a,{size:"large"})),r.a.createElement(me.a.Item,{label:"Employee",name:"employeeId",colon:!1,rules:[{required:!0,message:"Please select Employee!"}]},r.a.createElement(L.a,{size:"large",placeholder:"Select Employee"},u)),r.a.createElement(me.a.Item,{label:"Project",name:"projectId",colon:!1,rules:[{required:!0,message:"Please select Project!"}]},r.a.createElement(L.a,{size:"large",placeholder:"Select Project"},m)),r.a.createElement(x.a,null,r.a.createElement(_.a,{span:12},r.a.createElement(me.a.Item,{label:"Log Time (Hours)",name:"logTimeH",colon:!1,initialValue:1,rules:[{required:!0,message:"Please select Hours!"}]},r.a.createElement(ie.a,{size:"large",min:0,max:100}))),r.a.createElement(_.a,{span:12},r.a.createElement(me.a.Item,{label:"Log Time (Minutes)",name:"logTimeM",colon:!1,initialValue:0,rules:[{required:!0,message:"Please select Minutes!"}]},r.a.createElement(ie.a,{size:"large",min:0,max:59})))),r.a.createElement(me.a.Item,null,r.a.createElement(p.a,{htmlType:"submit",block:!0,size:"large",type:"primary"},"Submit")))))}),fe={fetchEmployeeOptions:H,fetchProjectOptions:q},ge=Object(o.b)((function(e){return{filters:e.filters}}),fe)(Ee),he=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(!1),p=Object(i.a)(o,2),E=p[0],f=p[1],g=function(e){c(!l)},v=function(){window.innerWidth>991?(c(!1),f(!1)):(c(!0),f(!0))};Object(n.useEffect)((function(){return window.addEventListener("resize",v),v(window.innerWidth),console.log(e),function(){window.removeEventListener("resize",v)}}),[]);var O=[];return l?O.push("no-sidebar"):O.push("has-sidebar"),E&&O.push("is-mobile"),r.a.createElement("main",{className:O.join(" ")},r.a.createElement(s.a,null,r.a.createElement(h,null),r.a.createElement(j,{isMobile:E,hideSidebar:function(){c(!0)}}),r.a.createElement("div",{id:"mobile-overlay",onClick:g}),r.a.createElement("button",{className:"sidebar-ctrl",onClick:g},r.a.createElement("svg",{id:"sidebar-ctrl-bg",height:"50",width:"50"},r.a.createElement("polygon",{points:"0,0 0,50 50,0",className:"triangle"})),l?r.a.createElement(m.a,null):r.a.createElement(d.a,null)),r.a.createElement("div",{className:"main"},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:K}),r.a.createElement(u.a,{exact:!0,path:"/employees",component:te}),r.a.createElement(u.a,{exact:!0,path:"/projects",component:oe}),r.a.createElement(u.a,{exact:!0,path:"/add-log",component:ge})))))},ve=a(81),Oe=a(193),be={list:[],loading:!0,error:{}},ye={list:[],loading:!0,error:{}},je={list:[],total:0,loading:!0,error:{}},Se={stats:{},loading:!0,error:{}},Te={projectList:[],employeeList:[]},xe=Object(ve.c)({project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{list:t.payload.data,loading:!1});case"GET_PROJECTS_PROGRESS":return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case"GET_PROJECTS_FAILED":return Object(S.a)(Object(S.a)({},e),{},{error:t.err,loading:!1});default:return e}},employee:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_EMPLOYEES_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{list:t.payload.data,loading:!1});case"GET_EMPLOYEES_PROGRESS":return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case"GET_EMPLOYEES_FAILED":return Object(S.a)(Object(S.a)({},e),{},{error:t.err,loading:!1});default:return e}},logs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LOGS_SUCCESS":var a=t.payload.data,n=a.list,r=a.total;return Object(S.a)(Object(S.a)({},e),{},{list:n,total:r,loading:!1});case"GET_LOGS_PROGRESS":return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case"GET_LOGS_FAILED":return Object(S.a)(Object(S.a)({},e),{},{error:t.err,loading:!1});default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECT_OPTIONS":return Object(S.a)(Object(S.a)({},e),{},{projectList:t.payload.data});case"GET_EMPLOYEE_OPTIONS":return Object(S.a)(Object(S.a)({},e),{},{employeeList:t.payload.data});default:return e}},logStats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LOG_STATS_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{stats:t.payload.data,loading:!1});case"GET_LOG_STATS_PROGRESS":return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case"GET_LOG_STATS_FAILED":return Object(S.a)(Object(S.a)({},e),{},{error:t.err,loading:!1});default:return e}}}),_e=Object(ve.d)(xe,{},Object(ve.a)(Oe.a));c.a.render(r.a.createElement(o.a,{store:_e},r.a.createElement(he,null)),document.getElementById("root"))}},[[197,1,2]]]);
//# sourceMappingURL=main.9acaf9fd.chunk.js.map