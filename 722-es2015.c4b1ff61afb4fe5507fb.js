(self.webpackChunkmaterial=self.webpackChunkmaterial||[]).push([[722],{89722:function(e,n,a){"use strict";a.r(n),a.d(n,{DataTablesModule:function(){return k}});var t=a(71398),r=a(61511),o=a(26756),m=a(48333),l=a(37703),i=a(31572),c=a(27439);const d=a(29083);let s=(()=>{class e{constructor(){this.editing={},this.rows=[],this.temp=[...d],this.loadingIndicator=!0,this.reorderable=!0,this.columns=[{prop:"name"},{name:"Gender"},{name:"Company"}],this.rows=d,this.temp=[...d],setTimeout(()=>{this.loadingIndicator=!1},1500)}updateFilter(e){e.target.value.toLowerCase()}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-data-table"]],viewQuery:function(n,a){if(1&n&&i["\u0275\u0275viewQuery"](e,7),2&n){let e;i["\u0275\u0275queryRefresh"](e=i["\u0275\u0275loadQuery"]())&&(a.table=e.first)}},decls:6,vars:7,consts:[[1,"material",3,"columns","columnMode","headerHeight","footerHeight","rowHeight","limit","rows"],["table",""]],template:function(e,n){1&e&&(i["\u0275\u0275elementStart"](0,"mat-card"),i["\u0275\u0275elementStart"](1,"mat-card-content"),i["\u0275\u0275elementStart"](2,"mat-card-title"),i["\u0275\u0275text"](3,"Basic Data table"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](4,"ngx-datatable",0,1),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("columns",n.columns)("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto")("limit",10)("rows",n.rows))},directives:[c.a8,c.dn,c.n5,l.nE],styles:[".datatable[_ngcontent-%COMP%], .datatable.fixed-header[_ngcontent-%COMP%]   .datatable-header[_ngcontent-%COMP%]   .datatable-header-inner[_ngcontent-%COMP%], .datatable[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{height:100%}"]}),e})();function p(e,n){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"span",8),i["\u0275\u0275listener"]("dblclick",function(){i["\u0275\u0275restoreView"](e);const n=i["\u0275\u0275nextContext"]().rowIndex;return i["\u0275\u0275nextContext"]().editing[n+"-name"]=!0}),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]().value;i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",e," ")}}function g(e,n){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"input",9),i["\u0275\u0275listener"]("blur",function(n){i["\u0275\u0275restoreView"](e);const a=i["\u0275\u0275nextContext"]().rowIndex;return i["\u0275\u0275nextContext"]().updateValue(n,"name",a)}),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]().value;i["\u0275\u0275property"]("value",e)}}function y(e,n){if(1&e&&(i["\u0275\u0275template"](0,p,2,1,"span",6),i["\u0275\u0275template"](1,g,1,1,"input",7)),2&e){const e=n.rowIndex,a=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("ngIf",!a.editing[e+"-name"]),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",a.editing[e+"-name"])}}function u(e,n){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"span",8),i["\u0275\u0275listener"]("dblclick",function(){i["\u0275\u0275restoreView"](e);const n=i["\u0275\u0275nextContext"]().rowIndex;return i["\u0275\u0275nextContext"]().editing[n+"-gender"]=!0}),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]().value;i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",e," ")}}function f(e,n){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"select",11),i["\u0275\u0275listener"]("change",function(n){i["\u0275\u0275restoreView"](e);const a=i["\u0275\u0275nextContext"]().rowIndex;return i["\u0275\u0275nextContext"]().updateValue(n,"gender",a)}),i["\u0275\u0275elementStart"](1,"option",12),i["\u0275\u0275text"](2,"Male"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"option",13),i["\u0275\u0275text"](4,"Female"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=i["\u0275\u0275nextContext"]().value;i["\u0275\u0275property"]("value",e)}}function h(e,n){if(1&e&&(i["\u0275\u0275template"](0,u,2,1,"span",6),i["\u0275\u0275template"](1,f,5,1,"select",10)),2&e){const e=n.rowIndex,a=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("ngIf",!a.editing[e+"-gender"]),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",a.editing[e+"-gender"])}}function x(e,n){1&e&&i["\u0275\u0275text"](0),2&e&&i["\u0275\u0275textInterpolate1"](" ",n.value," ")}const w=a(29083);let C=(()=>{class e{constructor(){this.editing={},this.rows=[],this.temp=[...w],this.loadingIndicator=!0,this.reorderable=!0,this.columns=[{prop:"name"},{name:"Gender"},{name:"Company"}],this.rows=w,this.temp=[...w],setTimeout(()=>{this.loadingIndicator=!1},1500)}updateFilter(e){e.target.value.toLowerCase(),this.table=w}updateValue(e,n,a){console.log("inline editing rowIndex",a),this.editing[a+"-"+n]=!1,this.rows[a][n]=e.target.value,this.rows=[...this.rows],console.log("UPDATED!",this.rows[a][n])}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-table-editing"]],viewQuery:function(n,a){if(1&n&&i["\u0275\u0275viewQuery"](e,7),2&n){let e;i["\u0275\u0275queryRefresh"](e=i["\u0275\u0275loadQuery"]())&&(a.table=e.first)}},decls:12,vars:6,consts:[[1,"material",3,"headerHeight","limit","columnMode","footerHeight","rowHeight","rows"],["mydatatable",""],["name","Name"],["ngx-datatable-cell-template",""],["name","Gender"],["name","Age"],["title","Double click to edit",3,"dblclick",4,"ngIf"],["autofocus","","type","text",3,"value","blur",4,"ngIf"],["title","Double click to edit",3,"dblclick"],["autofocus","","type","text",3,"value","blur"],[3,"value","change",4,"ngIf"],[3,"value","change"],["value","male"],["value","female"]],template:function(e,n){1&e&&(i["\u0275\u0275elementStart"](0,"mat-card"),i["\u0275\u0275elementStart"](1,"mat-card-content"),i["\u0275\u0275elementStart"](2,"mat-card-title"),i["\u0275\u0275text"](3,"Editable table"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"ngx-datatable",0,1),i["\u0275\u0275elementStart"](6,"ngx-datatable-column",2),i["\u0275\u0275template"](7,y,2,2,"ng-template",3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](8,"ngx-datatable-column",4),i["\u0275\u0275template"](9,h,2,2,"ng-template",3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](10,"ngx-datatable-column",5),i["\u0275\u0275template"](11,x,1,1,"ng-template",3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("headerHeight",50)("limit",5)("columnMode","force")("footerHeight",50)("rowHeight","auto")("rows",n.rows))},directives:[c.a8,c.dn,c.n5,l.nE,l.UC,l.vq,r.O5],styles:[""]}),e})();var b=a(66283);const v=a(29083),S=[{path:"",children:[{path:"basicdatatable",component:s},{path:"editing",component:C},{path:"filter",component:(()=>{class e{constructor(){this.editing={},this.rows=[],this.temp=[...v],this.loadingIndicator=!0,this.reorderable=!0,this.columns=[{prop:"name"},{name:"Gender"},{name:"Company"}],this.rows=v,this.temp=[...v],setTimeout(()=>{this.loadingIndicator=!1},1500)}updateFilter(e){const n=e.target.value.toLowerCase(),a=this.temp.filter(function(e){return-1!==e.name.toLowerCase().indexOf(n)||!n});this.rows=a,this.table=v}updateValue(e,n,a){console.log("inline editing rowIndex",a),this.editing[a+"-"+n]=!1,this.rows[a][n]=e.target.value,this.rows=[...this.rows],console.log("UPDATED!",this.rows[a][n])}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-table-filter"]],viewQuery:function(n,a){if(1&n&&i["\u0275\u0275viewQuery"](e,7),2&n){let e;i["\u0275\u0275queryRefresh"](e=i["\u0275\u0275loadQuery"]())&&(a.table=e.first)}},decls:8,vars:7,consts:[["matInput","","type","text","placeholder","Type to filter the name column...",1,"form-control",3,"keyup"],[1,"material",3,"columns","columnMode","headerHeight","footerHeight","rowHeight","limit","rows"],["table",""]],template:function(e,n){1&e&&(i["\u0275\u0275elementStart"](0,"mat-card"),i["\u0275\u0275elementStart"](1,"mat-card-content"),i["\u0275\u0275elementStart"](2,"mat-card-title"),i["\u0275\u0275text"](3,"Filtered table"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"mat-form-field"),i["\u0275\u0275elementStart"](5,"input",0),i["\u0275\u0275listener"]("keyup",function(e){return n.updateFilter(e)}),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](6,"ngx-datatable",1,2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](6),i["\u0275\u0275property"]("columns",n.columns)("columnMode","force")("headerHeight",50)("footerHeight",50)("rowHeight","auto")("limit",10)("rows",n.rows))},directives:[c.a8,c.dn,c.n5,b.KE,o.Nt,l.nE],styles:[""]}),e})()}]}];let k=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({imports:[[r.ez,t.Bz.forChild(S),o.c,l.xD,m.O]]}),e})()},29083:function(e){"use strict";e.exports=JSON.parse('[{"name":"Ethel Price","gender":"female","company":"Johnson","age":22},{"name":"Claudine Neal","gender":"female","company":"Sealoud","age":55},{"name":"Beryl Rice","gender":"female","company":"Velity","age":67},{"name":"Wilder Gonzales","gender":"male","company":"Geekko"},{"name":"Georgina Schultz","gender":"female","company":"Suretech"},{"name":"Carroll Buchanan","gender":"male","company":"Ecosys"},{"name":"Valarie Atkinson","gender":"female","company":"Hopeli"},{"name":"Schroeder Mathews","gender":"male","company":"Polarium"},{"name":"Lynda Mendoza","gender":"female","company":"Dogspa"},{"name":"Sarah Massey","gender":"female","company":"Bisba"},{"name":"Robles Boyle","gender":"male","company":"Comtract"},{"name":"Evans Hickman","gender":"male","company":"Parleynet"},{"name":"Dawson Barber","gender":"male","company":"Dymi"},{"name":"Bruce Strong","gender":"male","company":"Xyqag"},{"name":"Nellie Whitfield","gender":"female","company":"Exospace"},{"name":"Jackson Macias","gender":"male","company":"Aquamate"},{"name":"Pena Pena","gender":"male","company":"Quarx"},{"name":"Lelia Gates","gender":"female","company":"Proxsoft"},{"name":"Letitia Vasquez","gender":"female","company":"Slumberia"},{"name":"Trevino Moreno","gender":"male","company":"Conjurica"},{"name":"Barr Page","gender":"male","company":"Apex"},{"name":"Kirkland Merrill","gender":"male","company":"Utara"},{"name":"Blanche Conley","gender":"female","company":"Imkan"},{"name":"Atkins Dunlap","gender":"male","company":"Comveyor"},{"name":"Everett Foreman","gender":"male","company":"Maineland"},{"name":"Gould Randolph","gender":"male","company":"Intergeek"},{"name":"Kelli Leon","gender":"female","company":"Verbus"},{"name":"Freda Mason","gender":"female","company":"Accidency"},{"name":"Tucker Maxwell","gender":"male","company":"Lumbrex"},{"name":"Yvonne Parsons","gender":"female","company":"Zolar"},{"name":"Woods Key","gender":"male","company":"Bedder"},{"name":"Stephens Reilly","gender":"male","company":"Acusage"},{"name":"Mcfarland Sparks","gender":"male","company":"Comvey"},{"name":"Jocelyn Sawyer","gender":"female","company":"Fortean"},{"name":"Renee Barr","gender":"female","company":"Kiggle"},{"name":"Gaines Beck","gender":"male","company":"Sequitur"},{"name":"Luisa Farrell","gender":"female","company":"Cinesanct"},{"name":"Robyn Strickland","gender":"female","company":"Obones"},{"name":"Roseann Jarvis","gender":"female","company":"Aquazure"},{"name":"Johnston Park","gender":"male","company":"Netur"},{"name":"Wong Craft","gender":"male","company":"Opticall"},{"name":"Merritt Cole","gender":"male","company":"Techtrix"},{"name":"Dale Byrd","gender":"female","company":"Kneedles"},{"name":"Sara Delgado","gender":"female","company":"Netagy"},{"name":"Alisha Myers","gender":"female","company":"Intradisk"},{"name":"Felecia Smith","gender":"female","company":"Futurity"},{"name":"Neal Harvey","gender":"male","company":"Pyramax"},{"name":"Nola Miles","gender":"female","company":"Sonique"},{"name":"Herring Pierce","gender":"male","company":"Geeketron"},{"name":"Shelley Rodriquez","gender":"female","company":"Bostonic"},{"name":"Cora Chase","gender":"female","company":"Isonus"},{"name":"Mckay Santos","gender":"male","company":"Amtas"},{"name":"Hilda Crane","gender":"female","company":"Jumpstack"},{"name":"Jeanne Lindsay","gender":"female","company":"Genesynk"},{"name":"Frye Sharpe","gender":"male","company":"Eplode"},{"name":"Velma Fry","gender":"female","company":"Ronelon"},{"name":"Reyna Espinoza","gender":"female","company":"Prismatic"},{"name":"Spencer Sloan","gender":"male","company":"Comverges"},{"name":"Graham Marsh","gender":"male","company":"Medifax"},{"name":"Hale Boone","gender":"male","company":"Digial"},{"name":"Wiley Hubbard","gender":"male","company":"Zensus"},{"name":"Blackburn Drake","gender":"male","company":"Frenex"},{"name":"Franco Hunter","gender":"male","company":"Rockabye"},{"name":"Barnett Case","gender":"male","company":"Norali"},{"name":"Alexander Foley","gender":"male","company":"Geekosis"},{"name":"Lynette Stein","gender":"female","company":"Macronaut"},{"name":"Anthony Joyner","gender":"male","company":"Senmei"},{"name":"Garrett Brennan","gender":"male","company":"Bluegrain"},{"name":"Betsy Horton","gender":"female","company":"Zilla"},{"name":"Patton Small","gender":"male","company":"Genmex"},{"name":"Lakisha Huber","gender":"female","company":"Insource"},{"name":"Lindsay Avery","gender":"female","company":"Unq"},{"name":"Ayers Hood","gender":"male","company":"Accuprint"},{"name":"Torres Durham","gender":"male","company":"Uplinx"},{"name":"Vincent Hernandez","gender":"male","company":"Talendula"},{"name":"Baird Ryan","gender":"male","company":"Aquasseur"},{"name":"Georgia Mercer","gender":"female","company":"Skyplex"},{"name":"Francesca Elliott","gender":"female","company":"Nspire"},{"name":"Lyons Peters","gender":"male","company":"Quinex"},{"name":"Kristi Brewer","gender":"female","company":"Oronoko"},{"name":"Tonya Bray","gender":"female","company":"Insuron"},{"name":"Valenzuela Huff","gender":"male","company":"Applideck"},{"name":"Tiffany Anderson","gender":"female","company":"Zanymax"},{"name":"Jerri King","gender":"female","company":"Eventex"},{"name":"Rocha Meadows","gender":"male","company":"Goko"},{"name":"Marcy Green","gender":"female","company":"Pharmex"},{"name":"Kirk Cross","gender":"male","company":"Portico"},{"name":"Hattie Mullen","gender":"female","company":"Zilencio"},{"name":"Deann Bridges","gender":"female","company":"Equitox"},{"name":"Chaney Roach","gender":"male","company":"Qualitern"},{"name":"Consuelo Dickson","gender":"female","company":"Poshome"},{"name":"Billie Rowe","gender":"female","company":"Cemention"},{"name":"Bean Donovan","gender":"male","company":"Mantro"},{"name":"Lancaster Patel","gender":"male","company":"Krog"},{"name":"Rosa Dyer","gender":"female","company":"Netility"},{"name":"Christine Compton","gender":"female","company":"Bleeko"},{"name":"Milagros Finch","gender":"female","company":"Handshake"},{"name":"Ericka Alvarado","gender":"female","company":"Lyrichord"},{"name":"Sylvia Sosa","gender":"female","company":"Circum"},{"name":"Humphrey Curtis","gender":"male","company":"Corepan"}]')}}]);