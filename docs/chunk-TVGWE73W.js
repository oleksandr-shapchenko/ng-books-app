import{A as W,C as X,D as Z,E as $,F as ee,f as T,g as F,h as N,i as A,j as V,k as q,l as v,m as R,n as G,o as j,p as L,r as U,s as g,t as Y,u as z,w as H,x as J,y as K,z as Q}from "./chunk-FHTB2GHB.js";import"./chunk-P6WBFVPQ.js";import"./chunk-XAZLOLJU.js";import{f as O,j as w}from "./chunk-ZDALHIYY.js";import{Bb as I,Db as y,Eb as p,Pb as a,Qb as s,Rb as C,Tb as k,Ya as o,a as D,b as S,ea as u,hb as B,ia as b,ob as c,ra as h,sa as E,sb as m,uc as P,wb as f,xb as n,yb as t,zb as d}from "./chunk-RLV5OM3A.js";function ie(i, l){if(i&1&&(n(0,"mat-error"),a(1),t()),i&2){let e=p();o(),s(e.errorMessage())}}function ne(i, l){if(i&1&&(n(0,"mat-error"),a(1),t()),i&2){let e=p();o(),s(e.errorMessage())}}function re(i, l){if(i&1&&(n(0,"mat-error"),a(1),t()),i&2){let e=p();o(),s(e.errorMessage())}}function ae(i, l){if(i&1&&(n(0,"mat-error"),a(1),t()),i&2){let e=p();o(),s(e.errorMessage())}}function le(i, l){if(i&1&&(n(0,"mat-error"),a(1),t()),i&2){let e=p();o(),s(e.errorMessage())}}var _=class i{book=u(T);form=u(W).group({title:[this.book.title,[g.required]],author:[this.book.author,[g.required]],year:[this.book.year,[g.required]],publisher:[this.book.publisher,[g.required]],description:[this.book.description,[g.required]],coverImage:[null]});errorMessage=B("This field is required");getDialogResult(){return S(D({},this.form.value),{id:this.book.id})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["app-book-edit-dialog"]],standalone:!0,features:[k],decls:37,vars:16,consts:[["mat-dialog-title","",1,"title"],["fontIcon","close",3,"mat-dialog-close"],[3,"formGroup"],[1,"form-fields"],["appearance","outline"],["matInput","","placeholder","Enter title",3,"formControl"],["matInput","","placeholder","Enter author",3,"formControl"],["type","number","matInput","","placeholder","Enter year",3,"formControl"],["matInput","","placeholder","Enter publisher",3,"formControl"],["matInput","","placeholder","Enter description",3,"formControl"],["label","Cover Image",3,"formControl"],["mat-flat-button","",3,"disabled","mat-dialog-close"]],template:function(e, r){e&1&&(n(0,"h2",0),a(1),d(2,"mat-icon",1),t(),n(3,"mat-dialog-content")(4,"form",2)(5,"div",3)(6,"mat-form-field",4)(7,"mat-label"),a(8,"Title"),t(),d(9,"input",5),c(10,ie,2,1,"mat-error"),t(),n(11,"mat-form-field",4)(12,"mat-label"),a(13,"Author"),t(),d(14,"input",6),c(15,ne,2,1,"mat-error"),t()(),n(16,"div",3)(17,"mat-form-field",4)(18,"mat-label"),a(19,"Year"),t(),d(20,"input",7),c(21,re,2,1,"mat-error"),t(),n(22,"mat-form-field",4)(23,"mat-label"),a(24,"Publisher"),t(),d(25,"input",8),c(26,ae,2,1,"mat-error"),t()(),n(27,"mat-form-field",4)(28,"mat-label"),a(29,"Description"),t(),d(30,"textarea",9),c(31,le,2,1,"mat-error"),t(),n(32,"div"),d(33,"app-file-upload",10),t()()(),n(34,"mat-dialog-actions")(35,"button",11),a(36," Update "),t()()),e&2&&(o(),C(" ",r.book.title," "),o(),m("mat-dialog-close",!1),o(2),m("formGroup",r.form),o(5),m("formControl",r.form.controls.title),o(),f(r.form.controls.title.invalid?10:-1),o(4),m("formControl",r.form.controls.author),o(),f(r.form.controls.author.invalid?15:-1),o(5),m("formControl",r.form.controls.year),o(),f(r.form.controls.year.invalid?21:-1),o(4),m("formControl",r.form.controls.publisher),o(),f(r.form.controls.publisher.invalid?26:-1),o(4),m("formControl",r.form.controls.description),o(),f(r.form.controls.description.invalid?31:-1),o(2),m("formControl",r.form.controls.coverImage),o(2),m("disabled",r.form.invalid)("mat-dialog-close",r.getDialogResult()))},dependencies:[V,q,v,N,A,$,L,Z,G,j,X,H,U,J,Y,z,K,Q,ee],styles:[".title[_ngcontent-%COMP%]{display:flex;align-items:center}.title[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{margin-left:auto;cursor:pointer}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-top:10px;padding-bottom:10px}form[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;column-gap:8px;margin-bottom:12px}@media (max-width: 500px){form[_ngcontent-%COMP%]   .form-fields[_ngcontent-%COMP%]{flex-direction:column}}"]})};function me(i, l){if(i&1){let e=I();n(0,"div",0)(1,"div",2)(2,"h2",3),a(3),t(),n(4,"h4",4),a(5),t(),n(6,"p"),a(7),t(),n(8,"p"),a(9),t(),n(10,"p"),a(11),t()(),n(12,"div",5),d(13,"img",6),t(),n(14,"div",7)(15,"button",8),y("click",function(){h(e);let x=p();return E(x.deleteBook())}),a(16,"Delete"),t(),n(17,"button",9),y("click",function(){h(e);let x=p();return E(x.openEditDialog(x.book()))}),a(18,"Edit"),t()()()}if(i&2){let e=p();o(3),s(e.book().title),o(2),s(e.book().author),o(2),C("Year: ",e.book().year,""),o(2),C("Publisher: ",e.book().publisher,""),o(2),s(e.book().description),o(2),m("ngSrc",e.book().coverImageUrl||"/img/book-cover/placeholder.png")}}function de(i, l){i&1&&(n(0,"div",1),d(1,"mat-spinner"),t())}var M=class i{store=u(w);dialog=u(F);router=u(O);set id(l){this.book=this.store.getBookById(Number(l))}book;deleteBook(){this.store.deleteBook(this.book().id),this.router.navigate(["books"])}openEditDialog(l){this.dialog.open(_,{data:l,autoFocus:!1}).afterClosed().subscribe(r=>{r&&this.store.updateBook(r)})}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=b({type:i,selectors:[["app-book-details"]],inputs:{id:"id"},standalone:!0,features:[k],decls:2,vars:1,consts:[[1,"container"],[1,"spinner-container"],[1,"left"],[1,"title"],[1,"subtitle"],[1,"img-container"],["priority","","fill","","alt","book cover",3,"ngSrc"],[1,"actions"],["mat-button","",1,"tertiary-button",3,"click"],["mat-flat-button","",3,"click"]],template:function(e, r){e&1&&c(0,me,19,6,"div",0)(1,de,2,0,"div",1),e&2&&f(r.book()&&!r.store.isLoading()?0:1)},dependencies:[v,P,R],styles:[".container[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}@media (max-width: 500px){.container[_ngcontent-%COMP%]{grid-template-columns:1fr;grid-template-rows:250px 1fr 1fr}}.container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]{width:230px;height:230px;position:relative;margin-left:auto;aspect-ratio:1/1}@media (max-width: 500px){.container[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]{grid-row:1/2;margin:0}}.container[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{margin-top:20px;display:flex;column-gap:8px}.spinner-container[_ngcontent-%COMP%]{margin-top:20px;display:flex;justify-content:center}"],changeDetection:0})};export{M as default};
