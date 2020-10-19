(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{19:function(e,t,a){e.exports=a(30)},29:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(17),o=a(2),s=a(9),d=a(4),l=a.n(d),i=a(18),u=a.n(i),m=(a(25),u.a.initializeApp({apiKey:"AIzaSyAp0xnkvzXSxGMQgM3Q1lY_b7uB8S80Qpo",authDomain:"react-todo-3ddd0.firebaseapp.com",databaseURL:"https://react-todo-3ddd0.firebaseio.com",projectId:"react-todo-3ddd0",storageBucket:"react-todo-3ddd0.appspot.com",messagingSenderId:"104063289410",appId:"1:104063289410:web:929e08350e4459213085db"})),j=[{key:"INBOX",name:"Inbox"},{key:"TODAY",name:"Today"},{key:"WEEK",name:"Week"}],k=function(e){return j.find((function(t){return t.key===e}))},E=function(){var e="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",t=[];return function(){for(var a=(new Date).getTime(),n=new Array(8),c=7;c>=0;c--)n[c]=e.charAt(a%64),a=Math.floor(a/64);var r=n.join("");for(c=0;c<12;c++)r+=e.charAt(t[c]);return r}}(),p=Object(n.createContext)(),f=function(e){var t=e.children,a=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){m.firestore().collection("projects").where("userId","==","999").orderBy("projectId").get().then((function(e){var t=e.docs.map((function(e){return Object(s.a)(Object(s.a)({},e.data()),{},{docId:e.id})}));JSON.stringify(a.map((function(e){return e.projectId})))!==JSON.stringify(t.map((function(e){return e.projectId})))&&c(t)}))}),[a]),{projects:a,setProjects:c}}(),r=a.projects,d=a.setProjects;return c.a.createElement(p.Provider,{value:{projects:r,setProjects:d}},t)},b=function(){return Object(n.useContext)(p)},v=Object(n.createContext)(),h=function(e){var t=e.children,a=Object(n.useState)("INBOX"),r=Object(o.a)(a,2),s=r[0],d=r[1];return c.a.createElement(v.Provider,{value:{selectedProject:s,setSelectedProject:d}},t)},O=function(){return Object(n.useContext)(v)},y=a(3),_=function(e){var t=e.setProject,a=e.showProjectOverlay,n=e.setShowProjectOverlay,r=b().projects;return r&&a&&c.a.createElement("div",{className:"project-overlay","data-testid":"project-overlay"},c.a.createElement("ul",{className:"project-overlay__list"},r.map((function(e){return c.a.createElement("li",{key:e.projectId,"data-testid":"project-overlay-action",onClick:function(){t(e.projectId),n(!1)}},e.name)}))))},N=function(e){var t=e.setTaskDate,a=e.showTaskDate,n=e.setShowTaskDate;return a&&c.a.createElement("div",{className:"task-date","data-testid":"task-date-overlay"},c.a.createElement("ul",{className:"task-date__list"},c.a.createElement("li",{"data-testid":"task-date-overlay",onClick:function(){n(!1),t(l()().format("DD/MM/YYYY"))}},c.a.createElement(y.h,null),c.a.createElement("span",null,"Today")),c.a.createElement("li",{"data-testid":"task-date-tomorrow",onClick:function(){n(!1),t(l()().add(1,"day").format("DD/MM/YYYY"))}},c.a.createElement(y.i,null),c.a.createElement("span",null,"Tomorrow")),c.a.createElement("li",{"data-testid":"task-date-next-week",onClick:function(){n(!1),t(l()().add(7,"days").format("DD/MM/YYYY"))}},c.a.createElement(y.g,null),c.a.createElement("span",null,"Next Week"))))},w=function(e){var t=e.showAddTaskMain,a=void 0===t||t,r=e.shouldShowMain,s=void 0!==r&&r,d=e.showQuickAddTask,i=e.setShowQuickAddTask,u=Object(n.useState)(""),j=Object(o.a)(u,2),k=j[0],E=j[1],p=Object(n.useState)(""),f=Object(o.a)(p,2),b=f[0],v=f[1],h=Object(n.useState)(""),w=Object(o.a)(h,2),S=w[0],I=w[1],D=Object(n.useState)(s),x=Object(o.a)(D,2),Y=x[0],C=x[1],M=Object(n.useState)(!1),T=Object(o.a)(M,2),P=T[0],g=T[1],A=Object(n.useState)(!1),K=Object(o.a)(A,2),B=K[0],Q=K[1],W=O().selectedProject,X=function(){var e=S||W,t="";return""!==b?t=b:"TODAY"===e?t=l()().format("DD/MM/YYYY"):"WEEK"===e&&(t=l()().add(7,"days").format("DD/MM/YYYY")),d&&i(!1),k&&e&&m.firestore().collection("tasks").add({archived:!1,projectId:e,task:k,date:t,userId:"999"}).then((function(){E(""),I(""),C(""),g(!1),Q(!1)}))};return c.a.createElement("div",{className:d?"add-task add-task__overlay":"add-task","data-testid":"add-task-comp"},a&&c.a.createElement("div",{className:"add-task__shallow","data-testid":"show-main-action",onClick:function(){return C(!Y)}},c.a.createElement("span",{className:"add-task__plus"},"+"),c.a.createElement("span",{className:"add-task__text"},"Add Task")),(Y||d)&&c.a.createElement("div",{className:"add-task__main","data-testid":"add-task-main"},d&&c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{"data-testid":"quick-add-task"},c.a.createElement("h2",{className:"header"},"Quick Add Task"),c.a.createElement("span",{className:"add-task__cancel-x","data-testid":"add-task-quick-cancel",onClick:function(){C(!1),g(!1),i(!1)}},"x"))),c.a.createElement(_,{setProject:I,showProjectOverlay:P,setShowProjectOverlay:g}),c.a.createElement(N,{setTaskDate:v,showTaskDate:B,setShowTaskDate:Q}),c.a.createElement("input",{type:"text",className:"add-task__content","data-testid":"add-task-content",value:k,onChange:function(e){return E(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&X()}}),c.a.createElement("button",{className:"add-task__submit","data-testid":"add-task",onClick:function(){return X()}},"Add Task"),!d&&c.a.createElement("span",{className:"add-task__cancel","data-testid":"add-task-main-cancel",onClick:function(){C(!1),g(!1),Q(!1)}},"Cancel"),c.a.createElement("span",{className:"add-task__project","data-testid":"show-project-overlay",onClick:function(){Q(!1),g(!P)}},c.a.createElement(y.f,null)),c.a.createElement("span",{className:"add-task__date","data-testid":"show-task-date-overlay",onClick:function(){g(!1),Q(!B)}},c.a.createElement(y.e,null))))},S=a(11),I=function(e){var t=e.darkMode,a=e.setDarkMode,r=Object(n.useState)(!1),s=Object(o.a)(r,2),d=s[0],l=s[1],i=Object(n.useState)(!1),u=Object(o.a)(i,2),m=u[0],j=u[1];return c.a.createElement("header",{className:"header",id:"header","data-testid":"header"},c.a.createElement("nav",null,c.a.createElement("div",{className:"logo"},c.a.createElement(y.c,null),c.a.createElement("span",{className:"title"}," Todo")),c.a.createElement("div",{className:"settings"},c.a.createElement("ul",null,c.a.createElement("li",{className:"settings__add","data-testid":"quick-add-task-action",onClick:function(){j(!0),l(!0)}},"+"),c.a.createElement("li",{className:"settings__darkMode","data-testid":"dark-mode-action"},t?c.a.createElement(S.b,{onClick:function(){return a(!1)}}):c.a.createElement(S.a,{onClick:function(){return a(!0)}}))))),c.a.createElement(w,{showAddTaskMain:!1,shouldShowMain:d,showQuickAddTask:m,setShowQuickAddTask:j}))},D=a(8),x=function(e){var t=e.project,a=b(),n=a.projects,r=a.setProjects,o=O().setSelectedProject;return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"sidebar__dot"},"\u2022"),c.a.createElement("span",{className:"sidebar__project-name"},t.name),c.a.createElement("span",{className:"sidebar__project-delete","data-testid":"delete-project",onClick:function(){return e=t.docId,void m.firestore().collection("projects").doc(e).delete().then((function(){r(Object(D.a)(n)),o("INBOX")}));var e}},c.a.createElement(y.j,null)))},Y=function(e){var t=e.activeValue,a=void 0===t?null:t,r=Object(n.useState)(a),s=Object(o.a)(r,2),d=s[0],l=s[1],i=O().setSelectedProject,u=b().projects;return u&&u.map((function(e){return c.a.createElement("li",{key:e.projectId,"data-testid":"project-action-parent","data-doc-id":e.docId,className:d===e.projectId?"active sidebar__project":"sidebar__project"},c.a.createElement("div",{role:"button","data-testid":"project-action",tabIndex:0,"aria-label":"Select ".concat(e.name," as the task project"),onClick:function(){l(e.projectId),i(e.projectId)},onKeyDown:function(t){"Enter"===t.key&&(l(e.projectId),i(e.projectId))}},c.a.createElement(x,{project:e})))}))},C=function(e){var t=e.shouldShow,a=void 0!==t&&t,r=Object(n.useState)(a),s=Object(o.a)(r,2),d=s[0],l=s[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),j=u[0],k=u[1],p=E(),f=b(),v=f.projects,h=f.setProjects,O=function(){j&&m.firestore().collection("projects").add({projectId:p,name:j,userId:"999"}).then((function(){h(Object(D.a)(v)),k(""),l(!1)}))};return c.a.createElement("div",{className:"add-project","data-testid":"add-project"},d&&c.a.createElement("div",{className:"add-project__input"},c.a.createElement("input",{value:j,onChange:function(e){k(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&O()},className:"add-project__name","data-testid":"project-name",type:"text",placeholder:"Project name"}),c.a.createElement("button",{className:"add-project__submit",type:"button",onClick:function(){return O()},"data-testid":"add-project-submit"},"Add Project"),c.a.createElement("span",{role:"button",tabIndex:0,"data-testid":"hide-project-overlay",className:"add-project__cancel",onClick:function(){l(!1)}},"Cancel")),!d&&c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"add-project__plus"},"+"),c.a.createElement("span",{"data-testid":"add-project-action",className:"add-project__text",onClick:function(){return l(!d)}},"Project")))},M=function(){var e=O().setSelectedProject,t=Object(n.useState)("inbox"),a=Object(o.a)(t,2),r=a[0],s=a[1],d=Object(n.useState)(!0),l=Object(o.a)(d,2),i=l[0],u=l[1];return c.a.createElement("div",{className:"sidebar","data-testid":"sidebar"},c.a.createElement("ul",{className:"sidebar__generic"},c.a.createElement("li",{"data-testid":"inbox",className:"inbox"===r?"active":void 0},c.a.createElement("div",{"data-testid":"inbox-action","aria-label":"Show inbox tasks",tabIndex:0,role:"button",onClick:function(){s("inbox"),e("INBOX")},onKeyDown:function(t){"Enter"===t.key&&(s("inbox"),e("INBOX"))}},c.a.createElement("span",null,c.a.createElement(y.b,null)),c.a.createElement("span",null,"Inbox"))),c.a.createElement("li",{"data-testid":"today",className:"today"===r?"active":void 0},c.a.createElement("div",{"data-testid":"today-action","aria-label":"Show today's tasks",tabIndex:0,role:"button",onClick:function(){s("today"),e("TODAY")},onKeyDown:function(t){"Enter"===t.key&&(s("today"),e("TODAY"))}},c.a.createElement("span",null,c.a.createElement(y.d,null)),c.a.createElement("span",null,"Today"))),c.a.createElement("li",{"data-testid":"week",className:"week"===r?"active":void 0},c.a.createElement("div",{"data-testid":"week-action","aria-label":"Show tasks for the next 7 days",tabIndex:0,role:"button",onClick:function(){s("week"),e("WEEK")},onKeyDown:function(t){"Enter"===t.key&&(s("week"),e("WEEK"))}},c.a.createElement("span",null,c.a.createElement(y.e,null)),c.a.createElement("span",null,"Next 7 days")))),c.a.createElement("div",{className:"sidebar__middle","aria-label":"Show/hide projects",onClick:function(){return u(!i)},onKeyDown:function(e){"Enter"===e.key&&u(!i)},role:"button",tabIndex:0},c.a.createElement("span",null,c.a.createElement(y.a,{className:i?void 0:"hidden-projects"})),c.a.createElement("h2",null,"Projects")),c.a.createElement("ul",{className:"sidebar__projects"},i&&c.a.createElement(Y,null)),i&&c.a.createElement(C,null))},T=function(e){var t=e.id,a=(e.taskDesc,function(){m.firestore().collection("tasks").doc(t).update({archived:!0})});return c.a.createElement("div",{className:"checkbox-holder","data-testid":"checkbox-action",onClick:function(){return a()},onKeyDown:function(e){"Enter"===e.key&&a()}},c.a.createElement("span",{className:"checkbox"}))},P=function(){var e=b().projects,t=O().selectedProject,a=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],r=a[1],d=Object(n.useState)([]),i=Object(o.a)(d,2),u=i[0],j=i[1];return Object(n.useEffect)((function(){var t=m.firestore().collection("tasks").where("userId","==","999");return t=(t=e&&!k(e)?t=t.where("projectId","==",e):"TODAY"===e?t=t.where("date","==",l()().format("DD/MM/YYYY")):"INBOX"===e||0===e?t=t.where("date","==",""):t).onSnapshot((function(t){var a=t.docs.map((function(e){return Object(s.a)({id:e.id},e.data())}));r("WEEK"===e?a.filter((function(e){return l()(e.date,"DD/MM/YYYY").diff(l()(),"days")<=7})):a.filter((function(e){return!1===e.archived}))),j(a.filter((function(e){return!0===e.archived})))})),function(){return t()}}),[e]),{tasks:c,archivedTasks:u}}(t).tasks,r="ProjectName";return e&&t&&!k(t)&&(r=function(e,t){return e.find((function(e){return e.projectId===t}))}(e,t).name),e.length>0&&t&&k(t)&&(r=function(e,t){return e.find((function(e){return e.key===t}))}(j,t).name),Object(n.useEffect)((function(){document.title="Todo: ".concat(r)}),[r]),c.a.createElement("div",{className:"tasks","data-testid":"tasks"},c.a.createElement("h2",{"data-testid":"project-name"},r),c.a.createElement("ul",{className:"tasks__list"},a.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(T,{id:e.id,taskDesc:e.task}),c.a.createElement("span",null,e.task))}))),c.a.createElement(w,null))},g=function(){return c.a.createElement("section",{className:"content"},c.a.createElement(M,null),c.a.createElement(P,null))},A=(a(29),function(e){var t=e.darkModeDefault,a=void 0===t||t,r=Object(n.useState)(a),s=Object(o.a)(r,2),d=s[0],l=s[1];return c.a.createElement(h,null,c.a.createElement(f,null,c.a.createElement("main",{"data-testid":"application",className:d?"darkmode":void 0},c.a.createElement(I,{darkMode:d,setDarkMode:l}),c.a.createElement(g,null))))});Object(r.render)(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.1a23f63b.chunk.js.map