(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{173:function(e,t,a){e.exports=a.p+"static/media/logo.125952b3.png"},193:function(e,t,a){e.exports=a(373)},202:function(e,t,a){},203:function(e,t,a){},205:function(e,t,a){},222:function(e,t,a){},233:function(e,t,a){},358:function(e,t,a){},373:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),o=a(61),i=(a(202),a(78)),s=a(77),u=a(34),m=a(380),p=a(379),d=(a(203),a(94),a(47)),E=a(381),f=(a(205),a(173)),g=a.n(f),O=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{src:g.a,alt:"Log Manager"})),r.a.createElement("div",{className:"button-container"},r.a.createElement(s.b,{to:"/add-log"},r.a.createElement(d.a,{icon:r.a.createElement(E.a,null),size:"large",type:"primary"},"Log Time"))))},v=(a(374),a(191)),h=a(377),b=a(378),y=a(376),j=(a(222),function(){return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"app-name"},r.a.createElement("div",{className:"avatar-container"},r.a.createElement(v.a,{size:"large"},"ST")),r.a.createElement("div",{className:"admin-info"},r.a.createElement("h4",null,"Sonesh Tandel"),r.a.createElement("p",null,"log manager"))),r.a.createElement("ul",null,r.a.createElement(s.c,{exact:!0,to:"/"},r.a.createElement("li",null,r.a.createElement(h.a,null)," Dashboard")),r.a.createElement(s.c,{exact:!0,to:"/employees"},r.a.createElement("li",null,r.a.createElement(b.a,null)," Employees")),r.a.createElement(s.c,{exact:!0,to:"/projects"},r.a.createElement("li",null,r.a.createElement(y.a,null)," Projects"))))}),S=a(16),T=(a(133),a(90)),_=(a(152),a(99)),L=(a(153),a(66)),x=(a(127),a(45)),I=function(e){if((e=parseInt(e))<60)return"".concat(e,"m");var t=e/1440,a=Math.floor(t),n=e%1440,r=n?n/60:(t-a)/60,l=Math.floor(r),c=60*(r-l),o=Math.round(c),i="";return a&&(i+="".concat(a,"d ")),l&&(i+="".concat(l,"h ")),o&&(i+="".concat(o,"m")),i},P=(a(233),[{title:"Project",dataIndex:"project",key:"project",fixed:"left",render:function(e,t){return t.project.name}},{title:"Employee",dataIndex:"employee",key:"employee",render:function(e,t){return t.employee.name}},{title:"Date",dataIndex:"logDate",key:"logDate"},{title:"Logged Time",dataIndex:"logTime",key:"logTime",render:function(e){return I(e)}}]),G=function(e){var t,a,l,c=Object(n.useState)({}),o=Object(i.a)(c,2),s=o[0],u=o[1],m=Object(n.useState)({}),p=Object(i.a)(m,2),d=p[0],E=p[1],f=Object(n.useState)({current:1,pageSize:10,total:1}),g=Object(i.a)(f,2),O=g[0],v=g[1];Object(n.useEffect)((function(){var t=e.filters,a=t.employeeList;0===t.projectList.length&&e.fetchProjectOptions(),0===a.length&&e.fetchEmployeeOptions(),e.fetchLogs(),e.fetchLogStats()}),[]),Object(n.useEffect)((function(){var t={page:1};s&&s.value&&(t.employee=s.value),d&&d.value&&(t.project=d.value),e.fetchLogs(t),e.fetchLogStats(t)}),[s,d]),Object(n.useEffect)((function(){v(Object(S.a)(Object(S.a)({},O),{},{total:e.logs.total}))}),[e.logs]);var h=e.logStats.stats,b=e.filters,y=b.employeeList,j=b.projectList,G=y.map((function(e,t){var a=e.id,n=e.name;return r.a.createElement(x.a.Option,{key:a,value:a},n)})),k=j.map((function(e,t){var a=e.id,n=e.name;return r.a.createElement(x.a.Option,{key:a,value:a},n)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"dashboard-header"},r.a.createElement(_.a,null,r.a.createElement(L.a,{xs:24,sm:12},r.a.createElement("h1",null,"Dashboard")),r.a.createElement(L.a,{xs:24,sm:12},r.a.createElement("div",{className:"dashboard-filters"},r.a.createElement(x.a,{labelInValue:!0,allowClear:!0,size:"large",placeholder:"Select Project",onChange:function(e){E(e)}},k),r.a.createElement(x.a,{labelInValue:!0,allowClear:!0,size:"large",placeholder:"Select Employee",onChange:function(e){u(e)}},G))))),r.a.createElement("div",{className:"dashboard-stats"},r.a.createElement(_.a,{gutter:40},r.a.createElement(L.a,{xs:24,sm:8},r.a.createElement("div",{className:"stat-cell"},r.a.createElement("p",null,"Project Time log: ",null!==(t=null===d||void 0===d?void 0:d.label)&&void 0!==t?t:"All"),r.a.createElement("h3",null,I(h.projectLogStat)))),r.a.createElement(L.a,{xs:24,sm:8},r.a.createElement("div",{className:"stat-cell"},r.a.createElement("p",null,"Estimated Project Time: ",null!==(a=null===d||void 0===d?void 0:d.label)&&void 0!==a?a:"All"),r.a.createElement("h3",null,I(h.projectStat)))),r.a.createElement(L.a,{xs:24,sm:8},r.a.createElement("div",{className:"stat-cell"},r.a.createElement("p",null,"Employee Time log: ",null!==(l=null===s||void 0===s?void 0:s.label)&&void 0!==l?l:"All"),r.a.createElement("h3",null,I(h.employeeLogStat)))))),r.a.createElement(T.a,{rowKey:"id",columns:P,loading:e.logs.loading,dataSource:e.logs.list,pagination:O,onChange:function(t){var a={page:t.current};s&&s.value&&(a.employee=s.value),d&&d.value&&(a.project=d.value),v(t),e.fetchLogs(a)},scroll:{x:1200}}))},k=a(39),C=a.n(k),w=a(53),R=a(122),D=a.n(R);D.a.defaults.baseURL="http://ec2-13-126-206-180.ap-south-1.compute.amazonaws.com/api/",D.a.interceptors.request.use((function(e){return e.headers["x-api-key"]="dc580f09-3fcb-4da4-8927-40924a329626",e.headers["Content-Type"]="application/json",e}),(function(e){return console.error("Interceptor : Error occured due to : ",e),Promise.reject(e)}));var N=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new Promise((function(r,l){var c={method:e,url:t,config:n};"get"===e?c.params=a:c.data=a,D()(c).then((function(e){var t=e.data,a=t.error,n=t.data,c=t.msg;a?l(a):r({data:n,msg:c})})).catch((function(e){if(e.response){var t=e.response.data;l(t.error)}else l({code:"ERROR",msg:"WE are under maintenance!"})}))}))},A=function(e){return N("get","/log",e)},M=function(e){return N("post","/log",e)},F=function(e){return N("get","/log/stats",e)},z=function(){return{type:"GET_LOGS_PROGRESS"}},Y=function(){return{type:"GET_LOG_STATS_PROGRESS"}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return N("get","/project",{search:e})},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return N("get","/employee",{search:e})},q=function(){return function(){var e=Object(w.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N("get","/project",{minimal:!0});case 3:a=e.sent,t({type:"GET_PROJECT_OPTIONS",payload:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("get project options failed");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},H=function(){return function(){var e=Object(w.a)(C.a.mark((function e(t){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N("get","/employee",{minimal:!0});case 3:a=e.sent,t({type:"GET_EMPLOYEE_OPTIONS",payload:a}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("get employee options failed");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},V={fetchLogs:function(e){return function(){var t=Object(w.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(z),t.prev=1,t.next=4,A(e);case 4:n=t.sent,a({type:"GET_LOGS_SUCCESS",payload:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"GET_LOGS_FAILED",err:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},fetchLogStats:function(e){return function(){var t=Object(w.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Y),t.prev=1,t.next=4,F(e);case 4:n=t.sent,a({type:"GET_LOG_STATS_SUCCESS",payload:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"GET_LOG_STATS_FAILED",err:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},fetchEmployeeOptions:H,fetchProjectOptions:q},K=Object(o.b)((function(e){return{logs:Object(S.a)({},e.logs),logStats:Object(S.a)({},e.logStats),filters:e.filters}}),V)(G),B=[{title:"Name",dataIndex:"name",key:"name",fixed:"left"},{title:"Employee ID",dataIndex:"employeeId",key:"employeeId"},{title:"Designation",dataIndex:"designation",key:"designation"},{title:"Email ID",dataIndex:"emailId",key:"emailId"},{title:"Gender",dataIndex:"gender",key:"gender"},{title:"DOB",dataIndex:"dob",key:"dob"}],W=function(e){return Object(n.useEffect)((function(){e.fetchEmployees()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Employees"),r.a.createElement(T.a,{rowKey:"id",columns:B,loading:e.loading,pagination:!1,dataSource:e.list,scroll:{x:1200}}))},Q=function(){return{type:"GET_EMPLOYEES_PROGRESS"}},X={fetchEmployees:function(e){return function(){var t=Object(w.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(Q),t.prev=1,t.next=4,U(e);case 4:n=t.sent,a({type:"GET_EMPLOYEES_SUCCESS",payload:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"GET_EMPLOYEES_FAILED",err:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},Z=Object(o.b)((function(e){return Object(S.a)({},e.employee)}),X)(W),$=[{title:"Project Name",dataIndex:"name",key:"name",fixed:"left"},{title:"Client",dataIndex:"client",key:"client"},{title:"Client Email ID",dataIndex:"clientEmailId",key:"clientEmailId"},{title:"Estimate",dataIndex:"estimate",key:"estimate",render:function(e){return I(e)}}],ee=function(e){return Object(n.useEffect)((function(){e.fetchProjects()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Projects"),r.a.createElement(T.a,{rowKey:"id",columns:$,loading:e.loading,pagination:!1,dataSource:e.list,scroll:{x:1200}}))},te=function(){return{type:"GET_PROJECTS_PROGRESS"}},ae={fetchProjects:function(e){return function(){var t=Object(w.a)(C.a.mark((function t(a){var n;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(te),t.prev=1,t.next=4,J(e);case 4:n=t.sent,a({type:"GET_PROJECTS_SUCCESS",payload:n}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:"GET_PROJECTS_FAILED",err:t.t0});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}},ne=Object(o.b)((function(e){return Object(S.a)({},e.project)}),ae)(ee),re=(a(350),a(141)),le=(a(375),a(190)),ce=(a(354),a(140)),oe=(a(356),a(69)),ie=a(67),se=a.n(ie),ue=(a(358),function(e){var t=oe.a.useForm(),a=Object(i.a)(t,1)[0],l=function(){var e=Object(w.a)(C.a.mark((function e(t){var n,r,l,c,o,i,s;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.projectId,r=t.employeeId,l=t.logTimeH,c=t.logTimeM,o=se()(t.logDate).format("YYYY-MM-DD"),i=60*parseInt(l)+parseInt(c),s={projectId:n,employeeId:r,logDate:o,logTime:i},e.prev=4,e.next=7,M({data:s});case 7:e.sent,ce.b.success("Log has been added!"),a.resetFields(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(4),ce.b.error("Something went wrong. Please try again!");case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){var t=e.filters,a=t.employeeList;0===t.projectList.length&&e.fetchProjectOptions(),0===a.length&&e.fetchEmployeeOptions()}),[]);var c=e.filters,o=c.employeeList,s=c.projectList,u=o.map((function(e,t){var a=e.id,n=e.name;return r.a.createElement(x.a.Option,{key:a,value:a},n)})),m=s.map((function(e,t){var a=e.id,n=e.name;return r.a.createElement(x.a.Option,{key:a,value:a},n)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Add Log"),r.a.createElement("div",{className:"log-form-container"},r.a.createElement(oe.a,{form:a,layout:"vertical",onFinish:l},r.a.createElement(oe.a.Item,{label:"Log Date",name:"logDate",colon:!1,rules:[{required:!0,message:"Please select Log Date!"}]},r.a.createElement(le.a,{size:"large"})),r.a.createElement(oe.a.Item,{label:"Employee",name:"employeeId",colon:!1,rules:[{required:!0,message:"Please select Employee!"}]},r.a.createElement(x.a,{size:"large",placeholder:"Select Employee"},u)),r.a.createElement(oe.a.Item,{label:"Project",name:"projectId",colon:!1,rules:[{required:!0,message:"Please select Project!"}]},r.a.createElement(x.a,{size:"large",placeholder:"Select Project"},m)),r.a.createElement(_.a,null,r.a.createElement(L.a,{span:12},r.a.createElement(oe.a.Item,{label:"Log Time (Hours)",name:"logTimeH",colon:!1,initialValue:1,rules:[{required:!0,message:"Please select Hours!"}]},r.a.createElement(re.a,{size:"large",min:0,max:100}))),r.a.createElement(L.a,{span:12},r.a.createElement(oe.a.Item,{label:"Log Time (Minutes)",name:"logTimeM",colon:!1,initialValue:0,rules:[{required:!0,message:"Please select Minutes!"}]},r.a.createElement(re.a,{size:"large",min:0,max:59})))),r.a.createElement(oe.a.Item,null,r.a.createElement(d.a,{htmlType:"submit",block:!0,size:"large",type:"primary"},"Submit")))))}),me={fetchEmployeeOptions:H,fetchProjectOptions:q},pe=Object(o.b)((function(e){return{filters:e.filters}}),me)(ue),de=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("main",{className:a?"no-sidebar":""},r.a.createElement(s.a,null,r.a.createElement(O,null),r.a.createElement(j,null),r.a.createElement("button",{className:"sidebar-ctrl",onClick:function(){l(!a)}},r.a.createElement("svg",{id:"sidebar-ctrl-bg",height:"50",width:"50"},r.a.createElement("polygon",{points:"0,0 0,50 50,0",className:"triangle"})),a?r.a.createElement(m.a,null):r.a.createElement(p.a,null)),r.a.createElement("div",{className:"main"},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/",component:K}),r.a.createElement(u.a,{exact:!0,path:"/employees",component:Z}),r.a.createElement(u.a,{exact:!0,path:"/projects",component:ne}),r.a.createElement(u.a,{exact:!0,path:"/add-log",component:pe})))))},Ee=a(80),fe=a(189),ge={list:[],loading:!0,error:{}},Oe={list:[],loading:!0,error:{}},ve={list:[],total:0,loading:!0,error:{}},he={stats:{},loading:!0,error:{}},be={projectList:[],employeeList:[]},ye=Object(Ee.c)({project:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECTS_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{list:t.payload.data,loading:!1});case"GET_PROJECTS_PROGRESS":return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case"GET_PROJECTS_FAILED":return Object(S.a)(Object(S.a)({},e),{},{error:t.err,loading:!1});default:return e}},employee:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_EMPLOYEES_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{list:t.payload.data,loading:!1});case"GET_EMPLOYEES_PROGRESS":return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case"GET_EMPLOYEES_FAILED":return Object(S.a)(Object(S.a)({},e),{},{error:t.err,loading:!1});default:return e}},logs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LOGS_SUCCESS":var a=t.payload.data,n=a.list,r=a.total;return Object(S.a)(Object(S.a)({},e),{},{list:n,total:r,loading:!1});case"GET_LOGS_PROGRESS":return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case"GET_LOGS_FAILED":return Object(S.a)(Object(S.a)({},e),{},{error:t.err,loading:!1});default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_PROJECT_OPTIONS":return Object(S.a)(Object(S.a)({},e),{},{projectList:t.payload.data});case"GET_EMPLOYEE_OPTIONS":return Object(S.a)(Object(S.a)({},e),{},{employeeList:t.payload.data});default:return e}},logStats:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LOG_STATS_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{stats:t.payload.data,loading:!1});case"GET_LOG_STATS_PROGRESS":return Object(S.a)(Object(S.a)({},e),{},{loading:!0});case"GET_LOG_STATS_FAILED":return Object(S.a)(Object(S.a)({},e),{},{error:t.err,loading:!1});default:return e}}}),je=Object(Ee.d)(ye,{},Object(Ee.a)(fe.a));c.a.render(r.a.createElement(o.a,{store:je},r.a.createElement(de,null)),document.getElementById("root"))}},[[193,1,2]]]);
//# sourceMappingURL=main.c0873a4c.chunk.js.map