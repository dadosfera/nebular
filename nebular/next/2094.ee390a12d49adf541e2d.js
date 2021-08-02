(self.webpackChunknebular=self.webpackChunknebular||[]).push([[2094],{42094:function(e,t,n){"use strict";n.r(t),n.d(t,{WindowModule:function(){return oe}});var i=n(61116),o=n(10688),c=n(55074),r=n(27054),s=n(86884),a=n(11785),l=n(43835),u=n(8825),f=function(){return(f=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},p=function(e,t){for(var n=0,i=t.length,o=e.length;n<i;n++,o++)e[o]=t[n];return e},d=function(e){return e.MINIMIZED="minimized",e.MAXIMIZED="maximized",e.FULL_SCREEN="full-screen",e}({}),m={minimize:!0,maximize:!0,fullScreen:!0},h=function(){function e(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.title="",this.initialState=d.FULL_SCREEN,this.hasBackdrop=!0,this.closeOnBackdropClick=!0,this.closeOnEsc=!0,this.windowClass="",this.context={},this.viewContainerRef=null,this.buttons={},Object.assign.apply(Object,p([this],e)),this.applyDefaultButtonConfig()}return e.prototype.applyDefaultButtonConfig=function(){Object.assign(this,{buttons:f(f({},m),this.buttons)})},e}(),b=new a.OlP("Nebular Window Content"),w=new a.OlP("Nebular Window Config"),g=new a.OlP("Nebular Window Context"),y=n(26019),x=n(55959),v=function(){function e(e){this.config=e,this.stateChange$=new y.t(1),this._closed=!1,this.closed$=new x.xQ,this.state=e.initialState}return Object.defineProperty(e.prototype,"state",{get:function(){return this.stateValue},set:function(e){e&&this.stateValue!==e&&(this.prevStateValue=this.state,this.stateValue=e,this.stateChange$.next({oldState:this.prevStateValue,newState:e}))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"stateChange",{get:function(){return this.stateChange$.asObservable()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onClose",{get:function(){return this.closed$.asObservable()},enumerable:!1,configurable:!0}),e.prototype.minimize=function(){this.state=d.MINIMIZED},e.prototype.maximize=function(){this.state=d.MAXIMIZED},e.prototype.fullScreen=function(){this.state=d.FULL_SCREEN},e.prototype.toPreviousState=function(){this.state=this.prevStateValue},e.prototype.close=function(){this._closed||(this._closed=!0,this.componentRef.destroy(),this.stateChange$.complete(),this.closed$.next(),this.closed$.complete())},e}(),C=["viewContainerRef"],k=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Xpm({type:e,selectors:[["nb-windows-container"]],viewQuery:function(e,t){var n;1&e&&a.Gf(C,7,a.s_b),2&e&&a.iGM(n=a.CRH())&&(t.viewContainerRef=n.first)},decls:2,vars:0,consts:[["viewContainerRef",""]],template:function(e,t){1&e&&a.GkF(0,null,0)},styles:["[_nghost-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;overflow-x:auto}[_nghost-%COMP%]     nb-window:not(.full-screen){margin:0 2rem}"]}),e}(),O=n(41165),M=n(4110),_=n(96843),Z=n(42177),S=n(88543);function R(e,t){if(1&e){var n=a.EpF();a.ynx(0),a.TgZ(1,"button",3),a.NdJ("click",function(){return a.CHM(n),a.oxw().minimize()}),a._UZ(2,"nb-icon",5),a.qZA(),a.BQk()}}function P(e,t){if(1&e){var n=a.EpF();a.TgZ(0,"button",3),a.NdJ("click",function(){return a.CHM(n),a.oxw(2).maximize()}),a._UZ(1,"nb-icon",7),a.qZA()}}function z(e,t){if(1&e&&(a.ynx(0),a.YNc(1,P,2,0,"button",6),a.BQk()),2&e){var n=a.oxw();a.xp6(1),a.Q6J("ngIf",n.isFullScreen)}}function T(e,t){if(1&e){var n=a.EpF();a.TgZ(0,"button",3),a.NdJ("click",function(){return a.CHM(n),a.oxw(2).maximizeOrFullScreen()}),a._UZ(1,"nb-icon",8),a.qZA()}}function A(e,t){if(1&e&&(a.ynx(0),a.YNc(1,T,2,0,"button",6),a.BQk()),2&e){var n=a.oxw();a.xp6(1),a.Q6J("ngIf",n.minimized||n.maximized)}}function E(e,t){1&e&&(a.TgZ(0,"nb-card-body"),a._UZ(1,"nb-overlay-container"),a.qZA())}var W=function(){function e(e,t,n,i,o,c,r){this.content=e,this.context=t,this.windowRef=n,this.config=i,this.focusTrapFactory=o,this.elementRef=c,this.renderer=r}return Object.defineProperty(e.prototype,"isFullScreen",{get:function(){return this.windowRef.state===d.FULL_SCREEN},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maximized",{get:function(){return this.windowRef.state===d.MAXIMIZED},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minimized",{get:function(){return this.windowRef.state===d.MINIMIZED},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"showMinimize",{get:function(){return this.config.buttons.minimize},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"showMaximize",{get:function(){return this.config.buttons.maximize},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"showFullScreen",{get:function(){return this.config.buttons.fullScreen},enumerable:!1,configurable:!0}),e.prototype.ngOnInit=function(){this.focusTrap=this.focusTrapFactory.create(this.elementRef.nativeElement),this.focusTrap.blurPreviouslyFocusedElement(),this.focusTrap.focusInitialElement(),this.config.windowClass&&this.renderer.addClass(this.elementRef.nativeElement,this.config.windowClass)},e.prototype.ngAfterViewChecked=function(){this.overlayContainer&&!this.overlayContainer.isAttached&&(this.content instanceof a.Rgc?this.attachTemplate():this.attachComponent())},e.prototype.ngOnDestroy=function(){this.focusTrap&&this.focusTrap.restoreFocus(),this.close()},e.prototype.minimize=function(){this.windowRef.state===d.MINIMIZED?this.windowRef.toPreviousState():this.windowRef.minimize()},e.prototype.maximize=function(){this.windowRef.maximize()},e.prototype.fullScreen=function(){this.windowRef.fullScreen()},e.prototype.maximizeOrFullScreen=function(){this.windowRef.state===d.MINIMIZED&&this.showMaximize?this.maximize():this.fullScreen()},e.prototype.close=function(){this.windowRef.close()},e.prototype.attachTemplate=function(){this.overlayContainer.attachTemplatePortal(new u.U2(this.content,null,this.context))},e.prototype.attachComponent=function(){var e=new u.Qi(this.content,null,null,this.cfr);this.overlayContainer.attachComponentPortal(e,this.context).changeDetectorRef.detectChanges()},e.\u0275fac=function(t){return new(t||e)(a.Y36(b),a.Y36(g),a.Y36(v),a.Y36(h),a.Y36(M.E),a.Y36(a.SBq),a.Y36(a.Qsj))},e.\u0275cmp=a.Xpm({type:e,selectors:[["nb-window"]],viewQuery:function(e,t){var n;1&e&&a.Gf(O.C,5),2&e&&a.iGM(n=a.CRH())&&(t.overlayContainer=n.first)},hostVars:6,hostBindings:function(e,t){2&e&&a.ekj("full-screen",t.isFullScreen)("maximized",t.maximized)("minimized",t.minimized)},inputs:{cfr:"cfr"},decls:11,vars:5,consts:[["cdkFocusInitial","","tabindex","-1",1,"title"],[1,"buttons"],[4,"ngIf"],["nbButton","","ghost","",3,"click"],["icon","close-outline","pack","nebular-essentials"],["icon","minus-outline","pack","nebular-essentials"],["nbButton","","ghost","",3,"click",4,"ngIf"],["icon","collapse-outline","pack","nebular-essentials"],["icon","expand-outline","pack","nebular-essentials"]],template:function(e,t){1&e&&(a.TgZ(0,"nb-card"),a.TgZ(1,"nb-card-header"),a.TgZ(2,"div",0),a._uU(3),a.qZA(),a.TgZ(4,"div",1),a.YNc(5,R,3,0,"ng-container",2),a.YNc(6,z,2,1,"ng-container",2),a.YNc(7,A,2,1,"ng-container",2),a.TgZ(8,"button",3),a.NdJ("click",function(){return t.close()}),a._UZ(9,"nb-icon",4),a.qZA(),a.qZA(),a.qZA(),a.YNc(10,E,2,0,"nb-card-body",2),a.qZA()),2&e&&(a.xp6(3),a.Oqu(t.config.title),a.xp6(2),a.Q6J("ngIf",t.showMinimize),a.xp6(1),a.Q6J("ngIf",t.showMaximize),a.xp6(1),a.Q6J("ngIf",t.showFullScreen),a.xp6(3),a.Q6J("ngIf",t.maximized||t.isFullScreen))},directives:[_.As,_.nd,i.O5,Z.D,S.f,_.yK,O.C],styles:["[_nghost-%COMP%]{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;min-width:20rem}[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{margin:0}[_nghost-%COMP%]   nb-card-header[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow:hidden}[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{-webkit-box-flex:1;-ms-flex:1 0 auto;flex:1 0 auto;margin-right:3rem;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%]{width:9.5rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}[_nghost-%COMP%]   .buttons[_ngcontent-%COMP%]   [nbButton][_ngcontent-%COMP%]{-webkit-box-flex:0;-ms-flex:0 0 3rem;flex:0 0 3rem}.full-screen[_nghost-%COMP%]{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.maximized[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-bottom-right-radius:0}.minimized[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-bottom-right-radius:0;height:auto}.minimized[_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border-bottom:none}"]}),e}(),N=n(2440),I=n(63795),B=n(98620),F=function(){function e(e,t,n,i,o,c,r){this.componentFactoryResolver=e,this.overlayService=t,this.overlayPositionBuilder=n,this.blockScrollStrategy=i,this.defaultWindowsConfig=o,this.cfr=c,this.openWindows=[],this.document=r}return e.prototype.open=function(e,t){void 0===t&&(t={}),this.shouldCreateWindowsContainer()&&this.createWindowsContainer();var n=new h(this.defaultWindowsConfig,t),i=new v(n);return i.componentRef=this.appendWindow(e,n,i),this.openWindows.push(i),this.subscribeToEvents(i),i},e.prototype.shouldCreateWindowsContainer=function(){return!this.windowsContainerViewRef||!this.document.body.contains(this.windowsContainerViewRef.element.nativeElement)},e.prototype.createWindowsContainer=function(){this.overlayRef&&this.overlayRef.dispose(),this.overlayRef=this.overlayService.create({scrollStrategy:this.overlayService.scrollStrategies.noop(),positionStrategy:this.overlayPositionBuilder.global().bottom().right(),hasBackdrop:!0});var e=new u.Qi(k,null,null,this.cfr),t=this.overlayRef.attach(e);this.windowsContainerViewRef=t.instance.viewContainerRef},e.prototype.appendWindow=function(e,t,n){var i=a.zs3.create({parent:t.viewContainerRef?t.viewContainerRef.injector:this.windowsContainerViewRef.injector,providers:[{provide:b,useValue:e},{provide:g,useValue:e instanceof a.Rgc?{$implicit:t.context,windowRef:n}:t.context},{provide:h,useValue:t},{provide:v,useValue:n}]}),o=this.componentFactoryResolver.resolveComponentFactory(W),c=this.windowsContainerViewRef.createComponent(o,null,i);return c.instance.cfr=this.cfr,c.changeDetectorRef.detectChanges(),c},e.prototype.subscribeToEvents=function(e){var t=this;e.config.closeOnBackdropClick&&this.overlayRef.backdropClick().subscribe(function(){return e.close()}),e.config.closeOnEsc&&this.overlayRef.keydownEvents().pipe((0,l.h)(function(e){return 27===e.keyCode})).subscribe(function(){return e.close()}),e.stateChange.subscribe(function(){return t.checkAndUpdateOverlay()}),e.onClose.subscribe(function(){t.openWindows.splice(t.openWindows.indexOf(e),1),t.checkAndUpdateOverlay()})},e.prototype.checkAndUpdateOverlay=function(){var e=this.openWindows.filter(function(e){return e.state===d.FULL_SCREEN});e.length>0?this.blockScrollStrategy.enable():this.blockScrollStrategy.disable(),e.some(function(e){return e.config.hasBackdrop})?this.overlayRef.backdropElement.removeAttribute("hidden"):this.overlayRef.backdropElement.setAttribute("hidden","")},e.\u0275fac=function(t){return new(t||e)(a.LFG(a._Vd),a.LFG(I.Pn),a.LFG(u.yV),a.LFG(B.h),a.LFG(w),a.LFG(a._Vd),a.LFG(N.qT))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac}),e}(),U=function(){function e(){}return e.forRoot=function(t){return{ngModule:e,providers:[F,{provide:w,useValue:t}]}},e.forChild=function(t){return{ngModule:e,providers:[F,{provide:w,useValue:t}]}},e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[i.ez,o.j,c.z,r.K,s.T]]}),e}(),j=n(46489),q=n(27259),J=n(63260),V=["contentTemplate"];function Y(e,t){if(1&e&&(a.TgZ(0,"p"),a._uU(1),a.qZA()),2&e){var n=t.$implicit;a.xp6(1),a.hij('Here is the text provided via config: "',n.text,'"')}}var D=function(){function e(e){this.windowService=e}return e.prototype.openWindow=function(){this.windowService.open(this.contentTemplate,{title:"Window content from template",context:{text:"some text to pass into template"}})},e.\u0275fac=function(t){return new(t||e)(a.Y36(F))},e.\u0275cmp=a.Xpm({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){var n;1&e&&a.Gf(V,5),2&e&&a.iGM(n=a.CRH())&&(t.contentTemplate=n.first)},decls:4,vars:0,consts:[["nbButton","",3,"click"],["contentTemplate",""]],template:function(e,t){1&e&&(a.TgZ(0,"button",0),a.NdJ("click",function(){return t.openWindow()}),a._uU(1,"Open window"),a.qZA(),a.YNc(2,Y,2,1,"ng-template",null,1,a.W1O))},directives:[Z.D],styles:["nb-layout-column{height:400px}  .form{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}  .form .text-label{margin-top:1.5rem}button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{margin-left:2rem}"]}),e}(),Q=n(45773),G=function(){function e(e){this.windowRef=e}return e.prototype.close=function(){this.windowRef.close()},e.\u0275fac=function(t){return new(t||e)(a.Y36(v))},e.\u0275cmp=a.Xpm({type:e,selectors:[["ng-component"]],decls:7,vars:0,consts:[[1,"form"],["for","subject"],["nbInput","","id","subject","type","text"],["for","text",1,"text-label"],["nbInput","","id","text"]],template:function(e,t){1&e&&(a.TgZ(0,"form",0),a.TgZ(1,"label",1),a._uU(2,"Subject:"),a.qZA(),a._UZ(3,"input",2),a.TgZ(4,"label",3),a._uU(5,"Text:"),a.qZA(),a._UZ(6,"textarea",4),a.qZA())},directives:[Q.h],encapsulation:2}),e}(),L=function(){function e(e){this.windowService=e}return e.prototype.openWindow=function(){this.windowService.open(G,{title:"Window"})},e.\u0275fac=function(t){return new(t||e)(a.Y36(F))},e.\u0275cmp=a.Xpm({type:e,selectors:[["ng-component"]],decls:2,vars:0,consts:[["nbButton","",3,"click"]],template:function(e,t){1&e&&(a.TgZ(0,"button",0),a.NdJ("click",function(){return t.openWindow()}),a._uU(1,"Open window"),a.qZA())},directives:[Z.D],styles:["nb-layout-column{height:400px}  .form{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}  .form .text-label{margin-top:1.5rem}button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{margin-left:2rem}"]}),e}(),X=["escClose"],$=["disabledEsc"];function H(e,t){1&e&&a._uU(0," Disabled close on escape click. ")}function K(e,t){1&e&&a._uU(0," Click escape to close. ")}var ee=function(){function e(e){this.windowService=e}return e.prototype.openWindowWithBackdrop=function(){this.windowService.open(this.escCloseTemplate,{title:"Window with backdrop",hasBackdrop:!0})},e.prototype.openWindowWithoutBackdrop=function(){this.windowService.open(this.disabledEscTemplate,{title:"Window without backdrop",hasBackdrop:!1,closeOnEsc:!1})},e.\u0275fac=function(t){return new(t||e)(a.Y36(F))},e.\u0275cmp=a.Xpm({type:e,selectors:[["ng-component"]],viewQuery:function(e,t){if(1&e&&(a.Gf(X,5,a.Rgc),a.Gf($,5,a.Rgc)),2&e){var n=void 0;a.iGM(n=a.CRH())&&(t.escCloseTemplate=n.first),a.iGM(n=a.CRH())&&(t.disabledEscTemplate=n.first)}},decls:8,vars:0,consts:[["nbButton","",3,"click"],["disabledEsc",""],["escClose",""]],template:function(e,t){1&e&&(a.TgZ(0,"button",0),a.NdJ("click",function(){return t.openWindowWithBackdrop()}),a._uU(1,"Open window with backdrop"),a.qZA(),a.TgZ(2,"button",0),a.NdJ("click",function(){return t.openWindowWithoutBackdrop()}),a._uU(3,"Open window without backdrop"),a.qZA(),a.YNc(4,H,1,0,"ng-template",null,1,a.W1O),a.YNc(6,K,1,0,"ng-template",null,2,a.W1O))},directives:[Z.D],styles:["nb-layout-column{height:400px}  .form{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}  .form .text-label{margin-top:1.5rem}button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{margin-left:2rem}"]}),e}(),te=n(95234),ne=[{path:"template-window.component",component:D},{path:"window-showcase.component",component:L},{path:"windows-backdrop.component",component:ee},{path:"window-controls.component",component:function(){function e(e){this.windowService=e,this.minimize=!0,this.maximize=!0,this.fullScreen=!0}return e.prototype.openWindow=function(){this.windowService.open(G,{title:"Window",buttons:{minimize:this.minimize,maximize:this.maximize,fullScreen:this.fullScreen}})},e.\u0275fac=function(t){return new(t||e)(a.Y36(F))},e.\u0275cmp=a.Xpm({type:e,selectors:[["ng-component"]],decls:12,vars:3,consts:[[1,"subtitle","config-title"],[3,"checked","checkedChange"],["nbButton","",1,"open-window",3,"click"]],template:function(e,t){1&e&&(a.TgZ(0,"nb-card"),a.TgZ(1,"nb-card-body"),a.TgZ(2,"p",0),a._uU(3,"Buttons config:"),a.qZA(),a.TgZ(4,"nb-checkbox",1),a.NdJ("checkedChange",function(e){return t.minimize=e}),a._uU(5,"Minimize"),a.qZA(),a.TgZ(6,"nb-checkbox",1),a.NdJ("checkedChange",function(e){return t.maximize=e}),a._uU(7,"Maximize"),a.qZA(),a.TgZ(8,"nb-checkbox",1),a.NdJ("checkedChange",function(e){return t.fullScreen=e}),a._uU(9,"Full Screen"),a.qZA(),a.TgZ(10,"button",2),a.NdJ("click",function(){return t.openWindow()}),a._uU(11,"Open window"),a.qZA(),a.qZA(),a.qZA()),2&e&&(a.xp6(4),a.Q6J("checked",t.minimize),a.xp6(2),a.Q6J("checked",t.maximize),a.xp6(2),a.Q6J("checked",t.fullScreen))},directives:[_.As,_.yK,te.N,Z.D],styles:["nb-layout-column{height:400px}  .form{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}  .form .text-label{margin-top:1.5rem}button[_ngcontent-%COMP%] + button[_ngcontent-%COMP%]{margin-left:2rem}",".config-title[_ngcontent-%COMP%]{margin-top:0;margin-bottom:.25rem}nb-checkbox[_ngcontent-%COMP%]{display:block}.open-window[_ngcontent-%COMP%]{margin-top:1rem}"],changeDetection:0}),e}()}],ie=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[J.Bz.forChild(ne)],J.Bz]}),e}(),oe=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[U.forRoot(),s.T,j.n,q.M,c.z,ie]]}),e}()}}]);