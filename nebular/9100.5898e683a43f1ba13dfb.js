(self.webpackChunknebular=self.webpackChunknebular||[]).push([[9100],{9100:function(e,t,n){"use strict";n.r(t),n.d(t,{ProgressBarModule:function(){return y}});var r=n(83725),s=n(45443),a=n(55074),o=n(63260),i=n(11785),u=n(96843),c=n(7367),l=n(11590),p=n(61116);function g(e,t){if(1&e&&(i.TgZ(0,"span"),i._uU(1),i.qZA()),2&e){var n=i.oxw();i.xp6(1),i.hij("",n.value,"%")}}var b=["*"],f=function(){function e(e){this.statusService=e,this.value=0,this.status="basic",this.size="medium",this.displayValue=!1}return Object.defineProperty(e.prototype,"tiny",{get:function(){return"tiny"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"small",{get:function(){return"small"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"medium",{get:function(){return"medium"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"large",{get:function(){return"large"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"giant",{get:function(){return"giant"===this.size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"primary",{get:function(){return"primary"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"success",{get:function(){return"success"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"info",{get:function(){return"info"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"warning",{get:function(){return"warning"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"danger",{get:function(){return"danger"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"basic",{get:function(){return"basic"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"control",{get:function(){return"control"===this.status},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"additionalClasses",{get:function(){return this.statusService.isCustomStatus(this.status)?[this.statusService.getStatusClass(this.status)]:[]},enumerable:!1,configurable:!0}),e.\u0275fac=function(t){return new(t||e)(i.Y36(l.Y))},e.\u0275cmp=i.Xpm({type:e,selectors:[["nb-progress-bar"]],hostVars:26,hostBindings:function(e,t){2&e&&(i.Tol(t.additionalClasses),i.ekj("size-tiny",t.tiny)("size-small",t.small)("size-medium",t.medium)("size-large",t.large)("size-giant",t.giant)("status-primary",t.primary)("status-success",t.success)("status-info",t.info)("status-warning",t.warning)("status-danger",t.danger)("status-basic",t.basic)("status-control",t.control))},inputs:{value:"value",status:"status",size:"size",displayValue:"displayValue"},ngContentSelectors:b,decls:4,vars:3,consts:[[1,"progress-container"],[1,"progress-value"],[4,"ngIf"]],template:function(e,t){1&e&&(i.F$t(),i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.YNc(2,g,2,1,"span",2),i.Hsn(3),i.qZA(),i.qZA()),2&e&&(i.xp6(1),i.Udp("width",t.value,"%"),i.xp6(1),i.Q6J("ngIf",t.displayValue))},directives:[p.O5],styles:["[_nghost-%COMP%]{display:block}.progress-container[_ngcontent-%COMP%]{overflow:hidden}.progress-value[_ngcontent-%COMP%]{height:100%;text-align:center;overflow:hidden}"]}),e}(),m=[{path:"progress-bar-interactive.component",component:function(){function e(){this.value=25}return e.prototype.setValue=function(e){this.value=Math.min(Math.max(e,0),100)},Object.defineProperty(e.prototype,"status",{get:function(){return this.value<=25?"danger":this.value<=50?"warning":this.value<=75?"info":"success"},enumerable:!1,configurable:!0}),e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["nb-progress-bar-interactive"]],decls:8,vars:3,consts:[[1,"container"],["size","medium"],["icon","minus-outline",3,"click"],[3,"value","status","displayValue"],["icon","plus-outline",3,"click"]],template:function(e,t){1&e&&(i.TgZ(0,"nb-card"),i.TgZ(1,"nb-card-body"),i.TgZ(2,"div",0),i.TgZ(3,"nb-actions",1),i.TgZ(4,"nb-action",2),i.NdJ("click",function(){return t.setValue(t.value-25)}),i.qZA(),i.qZA(),i._UZ(5,"nb-progress-bar",3),i.TgZ(6,"nb-actions",1),i.TgZ(7,"nb-action",4),i.NdJ("click",function(){return t.setValue(t.value+25)}),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(5),i.Q6J("value",t.value)("status",t.status)("displayValue",!0))},directives:[u.As,u.yK,c.l,c.B,f],styles:[".container[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}nb-progress-bar[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1;flex:1}"]}),e}()},{path:"progress-bar-showcase.component",component:function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["nb-progress-bar-showcase"]],decls:3,vars:1,consts:[[3,"value"]],template:function(e,t){1&e&&(i.TgZ(0,"nb-card"),i.TgZ(1,"nb-card-body"),i._UZ(2,"nb-progress-bar",0),i.qZA(),i.qZA()),2&e&&(i.xp6(2),i.Q6J("value",40))},directives:[u.As,u.yK,f],encapsulation:2}),e}()},{path:"progress-bar-size.component",component:function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["nb-progress-bar-size"]],decls:12,vars:5,consts:[["size","tiny",3,"value"],["size","small",3,"value"],[3,"value"],["size","large",3,"value"],["size","giant",3,"value"]],template:function(e,t){1&e&&(i.TgZ(0,"nb-card"),i.TgZ(1,"nb-card-body"),i.TgZ(2,"nb-progress-bar",0),i._uU(3,"tiny"),i.qZA(),i.TgZ(4,"nb-progress-bar",1),i._uU(5,"small"),i.qZA(),i.TgZ(6,"nb-progress-bar",2),i._uU(7,"medium"),i.qZA(),i.TgZ(8,"nb-progress-bar",3),i._uU(9,"large"),i.qZA(),i.TgZ(10,"nb-progress-bar",4),i._uU(11,"giant"),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(2),i.Q6J("value",20),i.xp6(2),i.Q6J("value",40),i.xp6(2),i.Q6J("value",60),i.xp6(2),i.Q6J("value",80),i.xp6(2),i.Q6J("value",100))},directives:[u.As,u.yK,f],styles:["nb-progress-bar[_ngcontent-%COMP%] ~ nb-progress-bar[_ngcontent-%COMP%]{margin-top:1rem}"]}),e}()},{path:"progress-bar-status.component",component:function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["nb-progress-bar-status"]],decls:17,vars:7,consts:[["status","basic",3,"value"],["status","primary",3,"value"],["status","info",3,"value"],["status","success",3,"value"],["status","warning",3,"value"],["status","danger",3,"value"],[1,"control-status-example"],["status","control",3,"value"]],template:function(e,t){1&e&&(i.TgZ(0,"nb-card"),i.TgZ(1,"nb-card-body"),i.TgZ(2,"nb-progress-bar",0),i._uU(3,"basic"),i.qZA(),i.TgZ(4,"nb-progress-bar",1),i._uU(5,"primary"),i.qZA(),i.TgZ(6,"nb-progress-bar",2),i._uU(7,"info"),i.qZA(),i.TgZ(8,"nb-progress-bar",3),i._uU(9,"success"),i.qZA(),i.TgZ(10,"nb-progress-bar",4),i._uU(11,"warning"),i.qZA(),i.TgZ(12,"nb-progress-bar",5),i._uU(13,"danger"),i.qZA(),i.TgZ(14,"div",6),i.TgZ(15,"nb-progress-bar",7),i._uU(16,"control"),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(2),i.Q6J("value",20),i.xp6(2),i.Q6J("value",30),i.xp6(2),i.Q6J("value",50),i.xp6(2),i.Q6J("value",60),i.xp6(2),i.Q6J("value",70),i.xp6(2),i.Q6J("value",80),i.xp6(3),i.Q6J("value",90))},directives:[u.As,u.yK,f],styles:[".control-status-example[_ngcontent-%COMP%], nb-progress-bar[_ngcontent-%COMP%] ~ nb-progress-bar[_ngcontent-%COMP%]{margin-top:1rem}"]}),e}()},{path:"progress-bar-value.component",component:function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["nb-progress-bar-value"]],decls:5,vars:3,consts:[["status","primary",3,"value","displayValue"],["status","primary",3,"value"]],template:function(e,t){1&e&&(i.TgZ(0,"nb-card"),i.TgZ(1,"nb-card-body"),i._UZ(2,"nb-progress-bar",0),i.TgZ(3,"nb-progress-bar",1),i._uU(4,"Custom value"),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(2),i.Q6J("value",40)("displayValue",!0),i.xp6(1),i.Q6J("value",60))},directives:[u.As,u.yK,f],styles:["nb-progress-bar[_ngcontent-%COMP%] ~ nb-progress-bar[_ngcontent-%COMP%]{margin-top:1rem}"]}),e}()}],d=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[o.Bz.forChild(m)],o.Bz]}),e}(),y=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[r.D,s.M,a.z,d]]}),e}()}}]);