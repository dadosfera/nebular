(self.webpackChunknebular=self.webpackChunknebular||[]).push([[7145],{77145:function(t,e,n){"use strict";n.r(e),n.d(e,{NgdExampleModule:function(){return d}});var i=n(63260),o=n(55959),r=n(40878),c=n(82628),s=n(25416),u=n(2440),h=n(11785),p=n(17504),a=n(63005),l=[{path:"",component:function(){function t(t,e,n,i,r){this.communicator=t,this.themeService=e,this.router=n,this.analytics=i,this.document=r,this.destroy$=new o.xQ}return t.prototype.ngOnInit=function(){this.setupId(),this.subscribeOnThemeSwitch(),this.analytics.trackEvent("initExampleView",this.id)},t.prototype.ngAfterViewInit=function(){var t=this;(0,r.of)(null).pipe((0,c.g)(500)).subscribe(function(){return t.sendHeight()})},t.prototype.ngOnDestroy=function(){this.destroy$.next(),this.destroy$.complete()},t.prototype.setupId=function(){this.id=this.getId()},t.prototype.subscribeOnThemeSwitch=function(){var t=this;this.communicator.receive(this.id).pipe((0,s.R)(this.destroy$)).subscribe(function(e){return t.changeTheme(e)})},t.prototype.changeTheme=function(t){this.themeService.changeTheme(t.theme),this.sendHeight()},t.prototype.getId=function(){var t=this.router.url.split("/");return t.splice(0,2),t.join("/")},t.prototype.sendHeight=function(){this.communicator.send({id:this.id,height:this.document.body.clientHeight})},t.\u0275fac=function(e){return new(e||t)(h.Y36(p.fU),h.Y36(a.W),h.Y36(i.F0),h.Y36(p._V),h.Y36(u.qT))},t.\u0275cmp=h.Xpm({type:t,selectors:[["ngd-example"]],decls:1,vars:0,template:function(t,e){1&t&&h._UZ(0,"router-outlet")},directives:[i.lC],styles:["[_nghost-%COMP%]{display:block;background-color:#f1f2f3}"]}),t}(),children:[{path:"",loadChildren:function(){return n.e(5582).then(n.bind(n,35582)).then(function(t){return t.PlaygroundModule})}},{path:"**",component:function(){function t(t){this.themeService=t,this.themeService.changeTheme("default")}return t.\u0275fac=function(e){return new(e||t)(h.Y36(a.W))},t.\u0275cmp=h.Xpm({type:t,selectors:[["ngd-example-404"]],decls:1,vars:0,template:function(t,e){1&t&&h._uU(0," Example not found. ")},styles:["[_nghost-%COMP%]{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;color:gray;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:5rem}"]}),t}()}]}],f=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[i.Bz.forChild(l)],i.Bz]}),t}(),d=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[f]]}),t}()}}]);