!function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function t(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{dgxB:function(e,a,i){"use strict";i.r(a),i.d(a,"ControlModule",(function(){return He}));var o=i("ofXK"),l=i("tyNb"),r=i("mhfV"),s=function e(){n(this,e),this.type="[Control] GET_NEWS_CG_NEWS"},c=function e(t){n(this,e),this.payload=t,this.type="[Control] GET_NEWS_CG_NEWS_SUCCESS"},d=function e(){n(this,e),this.type="[Control] GET_NEWS_CG_NEWS_ERROR"},m=function e(t){n(this,e),this.payload=t,this.type="[Control] UPDATE_NEWS_CG_NEWS"},u=function e(){n(this,e),this.type="[Control] UPDATE_NEWS_CG_NEWS_SUCCESS"},p=function e(){n(this,e),this.type="[Control] UPDATE_NEWS_CG_NEWS_ERROR"},f=function e(){n(this,e),this.type="[Control] STOP_NEWS_CG"},g=function e(){n(this,e),this.type="[Control] STOP_NEWS_CG_SUCCESS"},h=function e(){n(this,e),this.type="[Control] STOP_NEWS_CG_ERROR"},v=i("9jGm"),w=i("fXoL"),x=i("l7P3"),S=i("XiUz"),b=i("Wp6s"),y=i("bTqV"),E=i("NFeN"),_=i("lDzL");function C(e,t){if(1&e&&(w["\u0275\u0275elementStart"](0,"span",16),w["\u0275\u0275text"](1),w["\u0275\u0275elementEnd"]()),2&e){var n=w["\u0275\u0275nextContext"](3);w["\u0275\u0275advance"](1),w["\u0275\u0275textInterpolate"](n.selectedNews.news.heading)}}function N(e,t){if(1&e&&(w["\u0275\u0275elementStart"](0,"span",17),w["\u0275\u0275text"](1),w["\u0275\u0275elementEnd"]()),2&e){var n=w["\u0275\u0275nextContext"](3);w["\u0275\u0275advance"](1),w["\u0275\u0275textInterpolate"](n.selectedNews.news.heading)}}function k(e,t){if(1&e&&(w["\u0275\u0275elementStart"](0,"div",11),w["\u0275\u0275elementStart"](1,"h4",12),w["\u0275\u0275text"](2),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementStart"](3,"div",13),w["\u0275\u0275template"](4,C,2,1,"span",14),w["\u0275\u0275template"](5,N,2,1,"span",15),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"]()),2&e){var n=w["\u0275\u0275nextContext"](2);w["\u0275\u0275advance"](2),w["\u0275\u0275textInterpolate"](n.selectedNews.news.news_name),w["\u0275\u0275advance"](2),w["\u0275\u0275property"]("ngIf","Dhv"==n.selectedNews.news.language.language_code),w["\u0275\u0275advance"](1),w["\u0275\u0275property"]("ngIf","Dhv"!=n.selectedNews.news.language.language_code)}}function O(e,t){if(1&e&&(w["\u0275\u0275elementStart"](0,"div",0),w["\u0275\u0275template"](1,k,6,3,"div",10),w["\u0275\u0275elementEnd"]()),2&e){var n=w["\u0275\u0275nextContext"]();w["\u0275\u0275advance"](1),w["\u0275\u0275property"]("ngIf",n.selectedNews)}}function I(e,t){1&e&&(w["\u0275\u0275elementStart"](0,"mat-card-content",18),w["\u0275\u0275elementStart"](1,"div",19),w["\u0275\u0275elementStart"](2,"div",20),w["\u0275\u0275elementStart"](3,"div",21),w["\u0275\u0275element"](4,"img",22),w["\u0275\u0275element"](5,"br"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementStart"](6,"div",20),w["\u0275\u0275elementStart"](7,"div",21),w["\u0275\u0275elementStart"](8,"h3"),w["\u0275\u0275text"](9,"No News in the List"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"]())}function j(e,t){if(1&e&&(w["\u0275\u0275elementStart"](0,"strong",31),w["\u0275\u0275text"](1),w["\u0275\u0275elementEnd"]()),2&e){var n=w["\u0275\u0275nextContext"]().row;w["\u0275\u0275advance"](1),w["\u0275\u0275textInterpolate"](n.title)}}function T(e,t){if(1&e&&(w["\u0275\u0275elementStart"](0,"strong"),w["\u0275\u0275text"](1),w["\u0275\u0275elementEnd"]()),2&e){var n=w["\u0275\u0275nextContext"]().row;w["\u0275\u0275advance"](1),w["\u0275\u0275textInterpolate"](n.title)}}function G(e,t){if(1&e&&(w["\u0275\u0275elementStart"](0,"span",31),w["\u0275\u0275text"](1),w["\u0275\u0275elementEnd"]()),2&e){var n=w["\u0275\u0275nextContext"]().row;w["\u0275\u0275advance"](1),w["\u0275\u0275textInterpolate"](n.detail)}}function P(e,t){if(1&e&&(w["\u0275\u0275elementStart"](0,"span",32),w["\u0275\u0275text"](1),w["\u0275\u0275elementEnd"]()),2&e){var n=w["\u0275\u0275nextContext"]().row;w["\u0275\u0275advance"](1),w["\u0275\u0275textInterpolate"](n.detail)}}function L(e,t){if(1&e&&(w["\u0275\u0275template"](0,j,2,1,"strong",27),w["\u0275\u0275template"](1,T,2,1,"strong",28),w["\u0275\u0275element"](2,"br"),w["\u0275\u0275template"](3,G,2,1,"span",29),w["\u0275\u0275template"](4,P,2,1,"span",30)),2&e){var n=w["\u0275\u0275nextContext"](2);w["\u0275\u0275property"]("ngIf","Dhv"==n.selectedNews.news.language.language_code),w["\u0275\u0275advance"](1),w["\u0275\u0275property"]("ngIf","Dhv"!=n.selectedNews.news.language.language_code),w["\u0275\u0275advance"](2),w["\u0275\u0275property"]("ngIf","Dhv"==n.selectedNews.news.language.language_code),w["\u0275\u0275advance"](1),w["\u0275\u0275property"]("ngIf","Dhv"!=n.selectedNews.news.language.language_code)}}function M(e,t){if(1&e){var n=w["\u0275\u0275getCurrentView"]();w["\u0275\u0275elementStart"](0,"button",34),w["\u0275\u0275listener"]("click",(function(){w["\u0275\u0275restoreView"](n);var e=w["\u0275\u0275nextContext"]().row;return w["\u0275\u0275nextContext"](2).updateCg(e.id)})),w["\u0275\u0275elementStart"](1,"mat-icon",35),w["\u0275\u0275text"](2,"play_circle_outline"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"]()}}function D(e,t){if(1&e){var n=w["\u0275\u0275getCurrentView"]();w["\u0275\u0275elementStart"](0,"button",34),w["\u0275\u0275listener"]("click",(function(){w["\u0275\u0275restoreView"](n);var e=w["\u0275\u0275nextContext"]().row;return w["\u0275\u0275nextContext"](2).updateCg(e.id)})),w["\u0275\u0275elementStart"](1,"mat-icon",35),w["\u0275\u0275text"](2,"play_circle_filled"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"]()}}function F(e,t){if(1&e&&(w["\u0275\u0275template"](0,M,3,0,"button",33),w["\u0275\u0275template"](1,D,3,0,"button",33)),2&e){var n=t.row,a=w["\u0275\u0275nextContext"](2);w["\u0275\u0275property"]("ngIf",a.viewingKey!=n.id),w["\u0275\u0275advance"](1),w["\u0275\u0275property"]("ngIf",a.viewingKey==n.id)}}function W(e,t){if(1&e&&(w["\u0275\u0275elementStart"](0,"mat-card-content",18),w["\u0275\u0275elementStart"](1,"ngx-datatable",23),w["\u0275\u0275elementStart"](2,"ngx-datatable-column",24),w["\u0275\u0275template"](3,L,5,4,"ng-template",25),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementStart"](4,"ngx-datatable-column",26),w["\u0275\u0275template"](5,F,2,2,"ng-template",25),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"]()),2&e){var n=w["\u0275\u0275nextContext"]();w["\u0275\u0275advance"](1),w["\u0275\u0275property"]("rows",n.selectedNews.news.newsbar)("columnMode","flex")("headerHeight",50)("footerHeight",0)("rowHeight","auto"),w["\u0275\u0275advance"](1),w["\u0275\u0275property"]("flexGrow",4),w["\u0275\u0275advance"](2),w["\u0275\u0275property"]("flexGrow",1)}}var U,R,A,K,$,V=((A=function(){function e(t,a){n(this,e),this.store=t,this.updates$=a,this.NewsList=new r.f,this.selectedNewsKey=0,this.viewingKeyTmp=null,this.viewingKey=null}return t(e,[{key:"ngOnInit",value:function(){var e=this;this.store.dispatch(new s),this.updates$.pipe(Object(v.d)("[Control] GET_NEWS_CG_NEWS_SUCCESS")).subscribe((function(){e.store.select((function(e){return e.ControlState.newsCgState})).subscribe((function(t){e.NewsList=t,e.selectedNews=e.NewsList.list_news?e.NewsList.list_news[e.selectedNewsKey]:null}))})),this.updates$.pipe(Object(v.d)("[Control] UPDATE_NEWS_CG_NEWS_SUCCESS")).subscribe((function(){e.viewingKey=e.viewingKeyTmp}))}},{key:"nextNews",value:function(){this.selectedNewsKey<this.NewsList.list_news.length-1&&(this.selectedNewsKey=this.selectedNewsKey+1),this.selectedNews=this.NewsList.list_news[this.selectedNewsKey]}},{key:"previousNews",value:function(){this.selectedNewsKey>0&&(this.selectedNewsKey=this.selectedNewsKey-1),this.selectedNews=this.NewsList.list_news[this.selectedNewsKey]}},{key:"updateCg",value:function(e){this.viewingKeyTmp=e,this.store.dispatch(new m({news_bar_id:e}))}},{key:"stopCg",value:function(){this.store.dispatch(new f)}}]),e}()).\u0275fac=function(e){return new(e||A)(w["\u0275\u0275directiveInject"](x.h),w["\u0275\u0275directiveInject"](v.a))},A.\u0275cmp=w["\u0275\u0275defineComponent"]({type:A,selectors:[["app-news-cg"]],decls:19,vars:6,consts:[["fxLayout","row","fxLayoutWrap","wrap"],["fxFlex.gt-lg","75","fxFlex.gt-md","60","fxFlex.gt-xs","100","fxFlex","100"],[1,"mb-1"],[1,"mt-0"],["fxLayout","row","fxLayoutWrap","wrap",4,"ngIf"],["class","table-responsive",4,"ngIf"],[1,"bg-light"],[1,"d-flex"],["mat-icon-button","","color","primary",3,"disabled","click"],["aria-label","Example icon-button with a heart icon"],["fxFlex.gt-xs","100","fxFlex","100",4,"ngIf"],["fxFlex.gt-xs","100","fxFlex","100"],[1,"text-danger","font-bold",2,"text-align","center"],["fxLayout","column"],["class","dhv","style","text-align:center;",4,"ngIf"],["style","text-align:center;",4,"ngIf"],[1,"dhv",2,"text-align","center"],[2,"text-align","center"],[1,"table-responsive"],[2,"padding-top","100px"],["fxLayout","row","fxLayoutWrap","wrap",2,"height","100%","padding","0","margin","0","display","-webkit-box","display","-moz-box","display","-ms-flexbox","display","-webkit-flex","display","flex","align-items","center","justify-content","center"],["fxLayout","row"],["src","/assets/images/nothing-states/nothing-in-list.png",2,"width","auto","height","200px"],[1,"material",3,"rows","columnMode","headerHeight","footerHeight","rowHeight"],["name","News Bar",3,"flexGrow"],["ngx-datatable-cell-template",""],["name","Action",3,"flexGrow"],["class","dhv",4,"ngIf"],[4,"ngIf"],["class","mat-text-muted","class","dhv",4,"ngIf"],["class","mat-text-muted",4,"ngIf"],[1,"dhv"],[1,"mat-text-muted"],["mat-icon-button","","color","warn",3,"click",4,"ngIf"],["mat-icon-button","","color","warn",3,"click"],["aria-label","Play CG"]],template:function(e,t){1&e&&(w["\u0275\u0275elementStart"](0,"div",0),w["\u0275\u0275elementStart"](1,"div",1),w["\u0275\u0275elementStart"](2,"mat-card"),w["\u0275\u0275elementStart"](3,"mat-card-content"),w["\u0275\u0275elementStart"](4,"div",2),w["\u0275\u0275elementStart"](5,"h1",3),w["\u0275\u0275elementStart"](6,"strong"),w["\u0275\u0275text"](7),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275template"](8,O,2,1,"div",4),w["\u0275\u0275elementEnd"](),w["\u0275\u0275template"](9,I,10,0,"mat-card-content",5),w["\u0275\u0275template"](10,W,6,7,"mat-card-content",5),w["\u0275\u0275elementStart"](11,"mat-card-content",6),w["\u0275\u0275elementStart"](12,"div",7),w["\u0275\u0275elementStart"](13,"button",8),w["\u0275\u0275listener"]("click",(function(){return t.previousNews()})),w["\u0275\u0275elementStart"](14,"mat-icon",9),w["\u0275\u0275text"](15,"chevron_left"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementStart"](16,"button",8),w["\u0275\u0275listener"]("click",(function(){return t.nextNews()})),w["\u0275\u0275elementStart"](17,"mat-icon",9),w["\u0275\u0275text"](18,"chevron_right"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"]()),2&e&&(w["\u0275\u0275advance"](7),w["\u0275\u0275textInterpolate"](t.NewsList.name),w["\u0275\u0275advance"](1),w["\u0275\u0275property"]("ngIf",t.NewsList.list_news.length>0),w["\u0275\u0275advance"](1),w["\u0275\u0275property"]("ngIf",0==t.NewsList.list_news.length),w["\u0275\u0275advance"](1),w["\u0275\u0275property"]("ngIf",t.NewsList.list_news.length>0&&t.selectedNews),w["\u0275\u0275advance"](3),w["\u0275\u0275property"]("disabled",!t.NewsList.list_news),w["\u0275\u0275advance"](3),w["\u0275\u0275property"]("disabled",!t.NewsList.list_news))},directives:[S.d,S.b,b.a,b.d,o.p,y.b,E.a,_.c,_.b,_.a],styles:[""]}),A),z=((R=function(){function e(){n(this,e)}return t(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||R)},R.\u0275cmp=w["\u0275\u0275defineComponent"]({type:R,selectors:[["app-cg-text"]],decls:2,vars:0,template:function(e,t){1&e&&(w["\u0275\u0275elementStart"](0,"p"),w["\u0275\u0275text"](1," cg-text works!\n"),w["\u0275\u0275elementEnd"]())},styles:[""]}),R),H=((U=function(){function e(){n(this,e)}return t(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||U)},U.\u0275cmp=w["\u0275\u0275defineComponent"]({type:U,selectors:[["app-ticker"]],decls:2,vars:0,template:function(e,t){1&e&&(w["\u0275\u0275elementStart"](0,"p"),w["\u0275\u0275text"](1," ticker works!\n"),w["\u0275\u0275elementEnd"]())},styles:[""]}),U),B=i("AytR"),q=i("tk/3"),J=((K=function(){function e(t){n(this,e),this.http=t,this.apiUrl=B.a.apiUrl}return t(e,[{key:"getSlides",value:function(){return this.http.get(this.apiUrl+"control/onair/slides")}},{key:"addSlideData",value:function(e){return this.http.post(this.apiUrl+"control/onair/slide/data",e)}},{key:"deleteSlideData",value:function(e){return this.http.delete(this.apiUrl+"control/onair/slide/data/"+e)}}]),e}()).\u0275fac=function(e){return new(e||K)(w["\u0275\u0275inject"](q.b))},K.\u0275prov=w["\u0275\u0275defineInjectable"]({token:K,factory:K.\u0275fac,providedIn:"root"}),K),X=i("0IaG"),Q=i("1jcm"),Y=i("3Pt+"),Z=i("kmnG"),ee=i("qFsG"),te=i("nJ5Y"),ne=(($=function(){function e(t,a){n(this,e),this.dialogRef=t,this.data=a,this.dhivehiEnabled=!0,this.slide_data=new Ce(null,new r.b("Dhv"),null),this.onAdd=new w.EventEmitter}return t(e,[{key:"ngOnInit",value:function(){this.slide_data=this.data}},{key:"closeDialog",value:function(e){this.dialogRef.close(e)}},{key:"changeLanguage",value:function(){this.slide_data.language.language_code=this.dhivehiEnabled?"Dhv":"Eng"}},{key:"addData",value:function(){this.onAdd.emit(this.slide_data),this.dialogRef.close(!0)}}]),e}()).\u0275fac=function(e){return new(e||$)(w["\u0275\u0275directiveInject"](X.g),w["\u0275\u0275directiveInject"](X.a))},$.\u0275cmp=w["\u0275\u0275defineComponent"]({type:$,selectors:[["app-slide-data-dialog"]],inputs:{dhivehiEnabled:"dhivehiEnabled"},decls:20,vars:8,consts:[["mat-dialog-title",""],["labelPosition","after","color","secondary",3,"ngModel","ngModelChange"],[1,"basic-form"],["userForm","ngForm"],["mat-dialog-content",""],["fxLayout","row","fxLayoutWrap","wrap",2,"margin-top","20px"],["fxFlex.gt-sm","100","fxFlex","100"],["appearance","outline"],["matInput","","mat-autosize","","required","","name","templateName",3,"ngModel","appDnrmsThaana","ngModelChange"],["mat-dialog-actions","","align","end"],["mat-button","","color","basic",3,"click"],["mat-raised-button","","color","primary",3,"disabled","click"]],template:function(e,t){if(1&e&&(w["\u0275\u0275elementStart"](0,"h3",0),w["\u0275\u0275text"](1,"Add Data To Slide"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementStart"](2,"mat-slide-toggle",1),w["\u0275\u0275listener"]("ngModelChange",(function(e){return t.dhivehiEnabled=e}))("ngModelChange",(function(){return t.changeLanguage()})),w["\u0275\u0275text"](3),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementStart"](4,"form",2,3),w["\u0275\u0275elementStart"](6,"div",4),w["\u0275\u0275elementStart"](7,"div",5),w["\u0275\u0275elementStart"](8,"div",6),w["\u0275\u0275elementStart"](9,"mat-form-field",7),w["\u0275\u0275elementStart"](10,"mat-label"),w["\u0275\u0275text"](11,"Slide Data"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementStart"](12,"input",8),w["\u0275\u0275listener"]("ngModelChange",(function(e){return t.slide_data.data=e})),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275text"](13),w["\u0275\u0275pipe"](14,"json"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementStart"](15,"div",9),w["\u0275\u0275elementStart"](16,"button",10),w["\u0275\u0275listener"]("click",(function(){return t.closeDialog(!0)})),w["\u0275\u0275text"](17,"Cancel"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementStart"](18,"button",11),w["\u0275\u0275listener"]("click",(function(){return t.addData()})),w["\u0275\u0275text"](19,"Add"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"]()),2&e){var n=w["\u0275\u0275reference"](5);w["\u0275\u0275advance"](2),w["\u0275\u0275property"]("ngModel",t.dhivehiEnabled),w["\u0275\u0275advance"](1),w["\u0275\u0275textInterpolate"](t.slide_data.language.language_code),w["\u0275\u0275advance"](9),w["\u0275\u0275property"]("ngModel",t.slide_data.data)("appDnrmsThaana",t.dhivehiEnabled),w["\u0275\u0275advance"](1),w["\u0275\u0275textInterpolate1"](" ",w["\u0275\u0275pipeBind1"](14,6,t.slide_data)," "),w["\u0275\u0275advance"](5),w["\u0275\u0275property"]("disabled",!n.form.valid)}},directives:[X.h,Q.a,Y.NgControlStatus,Y.NgModel,Y["\u0275angular_packages_forms_forms_y"],Y.NgControlStatusGroup,Y.NgForm,X.e,S.d,S.b,Z.c,Z.g,ee.b,Y.DefaultValueAccessor,Y.RequiredValidator,te.a,X.c,y.b],pipes:[o.j],styles:[""]}),$),ae=i("XNiG"),ie=i("dNgK"),oe=i("XhcP"),le=i("znSr"),re=i("/t3+"),se=i("iadO"),ce=i("MutI"),de=i("FKr1"),me=i("STbY"),ue=i("Qu3c"),pe=["sidebar"];function fe(e,t){1&e&&(w["\u0275\u0275elementStart"](0,"mat-icon",32),w["\u0275\u0275text"](1,"subdirectory_arrow_right"),w["\u0275\u0275elementEnd"]())}function ge(e,t){1&e&&(w["\u0275\u0275elementStart"](0,"mat-icon",33),w["\u0275\u0275text"](1,"offline_pin"),w["\u0275\u0275elementEnd"]())}function he(e,t){if(1&e&&(w["\u0275\u0275elementStart"](0,"button",34),w["\u0275\u0275elementStart"](1,"mat-icon"),w["\u0275\u0275text"](2,"more_vert"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"]()),2&e){w["\u0275\u0275nextContext"]();var n=w["\u0275\u0275reference"](9);w["\u0275\u0275property"]("matMenuTriggerFor",n)}}function ve(e,t){if(1&e){var n=w["\u0275\u0275getCurrentView"]();w["\u0275\u0275elementStart"](0,"mat-list-item",23),w["\u0275\u0275listener"]("click",(function(){w["\u0275\u0275restoreView"](n);var e=t.$implicit;return w["\u0275\u0275nextContext"]().onSelectSlide(e)})),w["\u0275\u0275template"](1,fe,2,0,"mat-icon",24),w["\u0275\u0275elementStart"](2,"h3",25),w["\u0275\u0275text"](3),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementStart"](4,"p",26),w["\u0275\u0275text"](5),w["\u0275\u0275elementEnd"](),w["\u0275\u0275template"](6,ge,2,0,"mat-icon",27),w["\u0275\u0275template"](7,he,3,1,"button",28),w["\u0275\u0275elementStart"](8,"mat-menu",29,30),w["\u0275\u0275elementStart"](10,"button",31),w["\u0275\u0275listener"]("click",(function(){w["\u0275\u0275restoreView"](n);var e=t.$implicit;return w["\u0275\u0275nextContext"]().updateSelectedSlide(e.id)})),w["\u0275\u0275text"](11,"Set Selected"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit,i=w["\u0275\u0275nextContext"]();w["\u0275\u0275styleProp"]("background-color",a==i.selectedSlide?"rgba(127, 255, 212, 0.6)":"rgba(255, 255, 255, 0)"),w["\u0275\u0275advance"](1),w["\u0275\u0275property"]("ngIf",a==i.selectedSlide),w["\u0275\u0275advance"](2),w["\u0275\u0275textInterpolate1"](" ",a.slide_name," "),w["\u0275\u0275advance"](2),w["\u0275\u0275textInterpolate1"](" ",a.slide_id," "),w["\u0275\u0275advance"](1),w["\u0275\u0275property"]("ngIf",a.id==i.settings_selected_slide),w["\u0275\u0275advance"](1),w["\u0275\u0275property"]("ngIf",a.id!=i.settings_selected_slide)}}function we(e,t){1&e&&(w["\u0275\u0275elementStart"](0,"button",48),w["\u0275\u0275elementStart"](1,"mat-icon",49),w["\u0275\u0275text"](2,"zoom_in"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"]())}function xe(e,t){if(1&e){var n=w["\u0275\u0275getCurrentView"]();w["\u0275\u0275elementStart"](0,"div",42),w["\u0275\u0275elementStart"](1,"div",43),w["\u0275\u0275text"](2),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementStart"](3,"div",44),w["\u0275\u0275template"](4,we,3,0,"button",45),w["\u0275\u0275elementStart"](5,"button",46),w["\u0275\u0275listener"]("click",(function(){w["\u0275\u0275restoreView"](n);var e=t.$implicit;return w["\u0275\u0275nextContext"](2).deleteContent(e.id)})),w["\u0275\u0275elementStart"](6,"mat-icon",47),w["\u0275\u0275text"](7,"delete"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"]()}if(2&e){var a=t.$implicit,i=w["\u0275\u0275nextContext"](2);w["\u0275\u0275classMapInterpolate1"]("table-row status_",a.id,""),w["\u0275\u0275propertyInterpolate"]("id",a.id),w["\u0275\u0275advance"](2),w["\u0275\u0275textInterpolate"](a.value),w["\u0275\u0275advance"](2),w["\u0275\u0275property"]("ngIf",1===i.active)}}function Se(e,t){if(1&e&&(w["\u0275\u0275elementStart"](0,"div",35),w["\u0275\u0275elementStart"](1,"div",36),w["\u0275\u0275elementStart"](2,"div",37),w["\u0275\u0275elementStart"](3,"div",38),w["\u0275\u0275text"](4,"Data"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementStart"](5,"div",39),w["\u0275\u0275text"](6,"Actions"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementStart"](7,"div",40),w["\u0275\u0275template"](8,xe,8,6,"div",41),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"]()),2&e){var n=w["\u0275\u0275nextContext"]();w["\u0275\u0275advance"](8),w["\u0275\u0275property"]("ngForOf",n.selectedSlide.onairslidecontent)}}var be,ye,Ee=function(e,t){return{"side-panel-opened":e,"side-panel-closed":t}},_e=((be=function(){function e(t,a,i){n(this,e),this.onAirService=t,this.dialog=a,this.snackBar=i,this.sidePanelOpened=!0,this.sidePanelOpened_noNews=!0,this.destroySubject$=new ae.a}return t(e,[{key:"ngOnInit",value:function(){var e=this;this.onAirService.getSlides().subscribe((function(t){e.slides=t,console.log(e.slides)}))}},{key:"sideBarToggle",value:function(){this.sidenav.toggle()}},{key:"isOver",value:function(){return window.matchMedia("(max-width: 960px)").matches}},{key:"onSelectSlide",value:function(e){this.selectedSlide=e,this.settings_selected_slide=e.id,console.log(e)}},{key:"addSlideData",value:function(e){var t=this,n=new Ce(null,new r.b("Dhv"),this.settings_selected_slide,0);this.dialog.open(ne,{width:"40%",height:"auto",maxHeight:"95%",data:n}).componentInstance.onAdd.subscribe((function(e){console.log(e),t.onAirService.addSlideData(e).subscribe((function(e){console.log(e),t.slides=e,t.slides.forEach((function(e){e.id===t.settings_selected_slide&&(t.selectedSlide=e)}))}))}),(function(e){console.log("status code---\x3e"+e.status)}))}},{key:"deleteContent",value:function(e){var t=this;this.onAirService.deleteSlideData(e).subscribe((function(e){t.onAirService.getSlides().subscribe((function(e){t.slides=e,t.slides.forEach((function(e){e.id===t.settings_selected_slide&&(t.selectedSlide=e)}))}))}),(function(e){console.log("Err Deleting Slide Data, status code---\x3e"+e.status)}))}}]),e}()).\u0275fac=function(e){return new(e||be)(w["\u0275\u0275directiveInject"](J),w["\u0275\u0275directiveInject"](X.b),w["\u0275\u0275directiveInject"](ie.a))},be.\u0275cmp=w["\u0275\u0275defineComponent"]({type:be,selectors:[["app-onair"]],viewQuery:function(e,t){var n;1&e&&w["\u0275\u0275staticViewQuery"](pe,!0),2&e&&w["\u0275\u0275queryRefresh"](n=w["\u0275\u0275loadQuery"]())&&(t.sidenav=n.first)},decls:33,vars:11,consts:[["fxLayout","row","fxLayoutAlign","center start"],["fxFlex.gt-md","100","fxFlex.gt-sm","100","fxFlex","100"],[1,"mat-card-top"],[3,"ngClass"],[3,"mode","opened","open","close"],["sidebar",""],["color","primary",1,"no-shadow"],["fxLayout","row","fxFlex","100"],[1,"m-t-0","font-14"],["matInput","",3,"matDatepicker"],["matSuffix","",3,"for"],["picker",""],[3,"background-color","click",4,"ngFor","ngForOf"],["color","warn",1,"bg-success","no-shadow","chat-right-panel"],["fxLayout","row","fxFlex","100","fxLayoutAlign","center center"],["mat-icon-button","",1,"mr-1",3,"click"],["fxFlex",""],[1,"font-14"],[1,"chat-middle-box",2,"min-height","700px"],["class","table-rasponsive",4,"ngIf"],[1,"chat-footer"],["align","end"],["mat-raised-button","","color","primary",3,"disabled","click"],[3,"click"],["color","primary",4,"ngIf"],["matLine",""],["matLine","",1,"text-muted"],["color","warn",4,"ngIf"],["mat-icon-button","","class","ml-1",3,"matMenuTriggerFor",4,"ngIf"],["x-position","before"],["them","matMenu"],["mat-menu-item","","color","primary",3,"click"],["color","primary"],["color","warn"],["mat-icon-button","",1,"ml-1",3,"matMenuTriggerFor"],[1,"table-rasponsive"],[1,"table"],[1,"table-header"],[1,"header__item","column-value"],[1,"header__item","column-actions"],[1,"table-content"],[3,"class","id",4,"ngFor","ngForOf"],[3,"id"],[1,"table-data","column-value"],[1,"table-data","column-actions"],["mat-icon-button","","color","basic","matTooltip","View News","matTooltipPosition","below",4,"ngIf"],["mat-icon-button","","color","warn","matTooltip","Remove News","matTooltipPosition","below",3,"click"],["aria-label","Edit"],["mat-icon-button","","color","basic","matTooltip","View News","matTooltipPosition","below"],["aria-label","view news"]],template:function(e,t){if(1&e&&(w["\u0275\u0275elementStart"](0,"div",0),w["\u0275\u0275elementStart"](1,"div",1),w["\u0275\u0275elementStart"](2,"mat-card",2),w["\u0275\u0275elementStart"](3,"mat-sidenav-container",3),w["\u0275\u0275elementStart"](4,"mat-sidenav",4,5),w["\u0275\u0275listener"]("open",(function(){return t.sidePanelOpened=!0}))("close",(function(){return t.sidePanelOpened=0==t.sidePanelOpened_noNews})),w["\u0275\u0275elementStart"](6,"mat-toolbar",6),w["\u0275\u0275elementStart"](7,"div",7),w["\u0275\u0275elementStart"](8,"span",8),w["\u0275\u0275elementStart"](9,"mat-form-field"),w["\u0275\u0275element"](10,"input",9),w["\u0275\u0275element"](11,"mat-datepicker-toggle",10),w["\u0275\u0275element"](12,"mat-datepicker",null,11),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementStart"](14,"mat-nav-list"),w["\u0275\u0275template"](15,ve,12,7,"mat-list-item",12),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementStart"](16,"mat-toolbar",13),w["\u0275\u0275elementStart"](17,"div",14),w["\u0275\u0275elementStart"](18,"button",15),w["\u0275\u0275listener"]("click",(function(){return t.sideBarToggle()})),w["\u0275\u0275elementStart"](19,"mat-icon"),w["\u0275\u0275text"](20,"short_text"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementStart"](21,"div",16),w["\u0275\u0275elementStart"](22,"div",17),w["\u0275\u0275text"](23,"\xa0"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementStart"](24,"div",16),w["\u0275\u0275elementStart"](25,"div",17),w["\u0275\u0275text"](26,"News"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementStart"](27,"mat-card-content",18),w["\u0275\u0275template"](28,Se,9,1,"div",19),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementStart"](29,"mat-card-actions",20),w["\u0275\u0275elementStart"](30,"div",21),w["\u0275\u0275elementStart"](31,"button",22),w["\u0275\u0275listener"]("click",(function(){return t.addSlideData(t.selectedSlide.id)})),w["\u0275\u0275text"](32,"Add New"),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"](),w["\u0275\u0275elementEnd"]()),2&e){var n=w["\u0275\u0275reference"](13);w["\u0275\u0275advance"](3),w["\u0275\u0275property"]("ngClass",w["\u0275\u0275pureFunction2"](8,Ee,t.sidePanelOpened,!t.sidePanelOpened)),w["\u0275\u0275advance"](1),w["\u0275\u0275property"]("mode",t.isOver()?"over":"side")("opened",!t.isOver()),w["\u0275\u0275advance"](6),w["\u0275\u0275property"]("matDatepicker",n),w["\u0275\u0275advance"](1),w["\u0275\u0275property"]("for",n),w["\u0275\u0275advance"](4),w["\u0275\u0275property"]("ngForOf",t.slides),w["\u0275\u0275advance"](13),w["\u0275\u0275property"]("ngIf",t.selectedSlide),w["\u0275\u0275advance"](3),w["\u0275\u0275property"]("disabled",!t.selectedSlide)}},directives:[S.d,S.c,S.b,b.a,oe.b,o.n,le.a,oe.a,re.a,Z.c,ee.b,se.b,se.d,Z.j,se.a,ce.h,o.o,y.b,E.a,b.d,o.p,b.b,ce.d,de.k,me.d,me.a,me.c,ue.a],styles:['.table[_ngcontent-%COMP%]{width:100%;border:0 solid #eee}.table-header[_ngcontent-%COMP%]{padding:10px 0;font-size:12px}.table-header[_ngcontent-%COMP%], .table-row[_ngcontent-%COMP%]{display:flex;width:100%;border-bottom:1px solid #eee}.table-row[_ngcontent-%COMP%]{padding-left:10px 0;transition:all .2s ease-in-out}.table-row[_ngcontent-%COMP%]:hover{background-color:rgba(97,97,97,.068)}.table-row.status_breaker[_ngcontent-%COMP%]{background-color:rgba(127,255,212,.2)}.table-row[_ngcontent-%COMP%]:hover.status_breaker{background-color:rgba(127,255,212,.7)}.header__item[_ngcontent-%COMP%], .table-data[_ngcontent-%COMP%]{flex:1 1 20%;text-align:center;padding:5px}.header__item[_ngcontent-%COMP%]{text-transform:uppercase;font-family:Verdana,Geneva,Tahoma,sans-serif;font-weight:700;font-size:12px}.filter__link[_ngcontent-%COMP%]{color:#fff;text-decoration:none;position:relative;display:inline-block;padding-left:24px;padding-right:24px}.filter__link[_ngcontent-%COMP%]:after{content:"";position:absolute;right:-18px;color:#fff;font-size:12px;top:50%;transform:translateY(-50%)}.filter__link.desc[_ngcontent-%COMP%]:after{content:"(desc)"}.filter__link.asc[_ngcontent-%COMP%]:after{content:"(asc)"}.column-value[_ngcontent-%COMP%]{flex:0 0 80%;font-size:12px;text-align:left;font-family:Verdana,Geneva,Tahoma,sans-serif}.column-actions[_ngcontent-%COMP%]{flex:0 0 20%}']}),be),Ce=function e(t,a,i,o){n(this,e),this.data=t,this.language=a,this.on_air_slides_id=i,this.active=o},Ne=[{path:"",children:[{path:"news-cg",component:V,data:{role:"control"}},{path:"cg-text",component:z,data:{role:"control"}},{path:"ticker",component:H,data:{role:"control"}},{path:"on-air",component:_e,data:{role:"control"}},{path:"sms",component:(ye=function(){function e(){n(this,e)}return t(e,[{key:"ngOnInit",value:function(){}}]),e}(),ye.\u0275fac=function(e){return new(e||ye)},ye.\u0275cmp=w["\u0275\u0275defineComponent"]({type:ye,selectors:[["app-sms"]],decls:2,vars:0,template:function(e,t){1&e&&(w["\u0275\u0275elementStart"](0,"p"),w["\u0275\u0275text"](1," sms works!\n"),w["\u0275\u0275elementEnd"]())},styles:[""]}),ye),data:{role:"control"}}]}],ke=i("onrN"),Oe=i("YUcS"),Ie=i("bFKe"),je=i("9Ejp"),Te=i("PCNd"),Ge={isLoaded:!0,cgSettings:null,newsCgState:null};function Pe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1?arguments[1]:void 0;switch(console.log(e,t),t.type){case"[Control] GET_NEWS_CG_NEWS":return Object.assign(Object.assign({},e),{isLoaded:!1});case"[Control] GET_NEWS_CG_NEWS_SUCCESS":return Object.assign(Object.assign({},e),{isLoaded:!0,newsCgState:t.payload});case"[Control] GET_CG_SETTINGS":return Object.assign(Object.assign({},e),{isLoaded:!1});case"[Control] GET_CG_SETTINGS_SUCCESS":return Object.assign(Object.assign({},e),{isLoaded:!0,cgSettings:t.payload});case"[Control] LOGOUT_CONTROL":return Ge;default:return e}}Object(x.o)("ControlState");var Le,Me,De,Fe=i("5+tZ"),We=i("lJxs"),Ue=i("JIr8"),Re=i("LRne"),Ae=i("HDdC"),Ke=((Le=function(){function e(t){n(this,e),this.http=t,this.apiUrl=B.a.apiUrl}return t(e,[{key:"getNewsCgNews",value:function(){return this.http.get(this.apiUrl+"control/news/cg")}},{key:"getNewsCgSettings",value:function(){return console.log("Getting cg settings"),this.http.get(this.apiUrl+"control/news/cg")}},{key:"updateNewsCgText",value:function(e){return this.http.put(this.apiUrl+"control/news/cg/update/",{news_bar_id:e,ip:""})}},{key:"stopNewsCg",value:function(){return this.http.post(this.apiUrl+"control/cg/news/stop",{})}}]),e}()).\u0275fac=function(e){return new(e||Le)(w["\u0275\u0275inject"](q.b))},Le.\u0275prov=w["\u0275\u0275defineInjectable"]({token:Le,factory:Le.\u0275fac,providedIn:"root"}),Le),$e=function(e,t,n,a){var i,o=arguments.length,l=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,a);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(l=(o<3?i(l):o>3?i(t,n,l):i(t,n))||l);return o>3&&l&&Object.defineProperty(t,n,l),l},Ve=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},ze=((De=function e(t,a){var i=this;n(this,e),this.actions$=t,this.controlService=a,this.GetNewsCgNews$=this.actions$.pipe(Object(v.d)("[Control] GET_NEWS_CG_NEWS"),Object(Fe.b)((function(e){return i.controlService.getNewsCgNews().pipe(Object(We.a)((function(e){return console.log(e),new c(e)})),Object(Ue.a)((function(){return Object(Re.a)(new d)})))}))),this.UpdateNewsCgNews$=this.actions$.pipe(Object(v.d)("[Control] UPDATE_NEWS_CG_NEWS"),Object(Fe.b)((function(e){return i.controlService.updateNewsCgText(e.payload.news_bar_id).pipe(Object(We.a)((function(e){return console.log(e),new u})),Object(Ue.a)((function(){return Object(Re.a)(new p)})))}))),this.StopNewsCg$=this.actions$.pipe(Object(v.d)("[Control] STOP_NEWS_CG"),Object(Fe.b)((function(e){return i.controlService.stopNewsCg().pipe(Object(We.a)((function(e){return console.log(e),new g})),Object(Ue.a)((function(){return Object(Re.a)(new h)})))})))}).\u0275fac=function(e){return new(e||De)(w["\u0275\u0275inject"](v.a),w["\u0275\u0275inject"](Ke))},De.\u0275prov=w["\u0275\u0275defineInjectable"]({token:De,factory:De.\u0275fac}),$e([Object(v.b)(),Ve("design:type",Ae.a)],De.prototype,"GetNewsCgNews$",void 0),$e([Object(v.b)(),Ve("design:type",Ae.a)],De.prototype,"UpdateNewsCgNews$",void 0),$e([Object(v.b)(),Ve("design:type",Ae.a)],De.prototype,"StopNewsCg$",void 0),De),He=((Me=function e(){n(this,e)}).\u0275mod=w["\u0275\u0275defineNgModule"]({type:Me}),Me.\u0275inj=w["\u0275\u0275defineInjector"]({factory:function(e){return new(e||Me)},imports:[[o.c,l.j.forChild(Ne),Y.FormsModule,ke.a,Oe.a,Ie.d,je.b,Te.a,_.d,x.j.forFeature("ControlState",Pe),v.c.forFeature([ze])]]}),Me)}}])}();