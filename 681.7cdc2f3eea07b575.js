"use strict";(self.webpackChunkdirectorsview=self.webpackChunkdirectorsview||[]).push([[681],{1681:(v,u,r)=>{r.r(u),r.d(u,{SigninModule:()=>y});var c=r(9808),o=r(3075),t=r(5e3),d=r(7556),m=r(4259),l=r(4106),g=r(7531),p=r(7423);function h(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"E-Mail must not be empty"),t.qZA())}function Z(e,s){1&e&&(t.TgZ(0,"mat-error"),t._uU(1,"Password must not be empty"),t.qZA())}function C(e,s){if(1&e&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&e){const n=t.oxw();t.xp6(1),t.Oqu(n.responseMessage)}}const M=[{path:"",component:(()=>{class e{constructor(n,i,a){this.auth=n,this.router=i,this.route=a,this.formGroup=e.createFormGroup(),this.responseMessage=null}ngOnInit(){}submit(){this.formGroup.valid&&this.auth.signIn(this.formGroup.value.email,this.formGroup.value.password).then(()=>{this.route.queryParams.subscribe(n=>{n.redirectUrl&&this.router.navigateByUrl(n.redirectUrl,{replaceUrl:!0}).catch(i=>{console.error(i)})})}).catch(n=>{this.responseMessage=n})}static createFormGroup(){return new o.cw({email:new o.NI("",[o.kI.required]),password:new o.NI("",[o.kI.required])})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(d.e),t.Y36(m.F0),t.Y36(m.gz))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-signin"]],decls:23,vars:5,consts:[["src","/assets/images/logo.svg","alt","Logo"],[3,"formGroup","ngSubmit"],["matInput","","placeholder","Email","type","email","name","email","formControlName","email"],[4,"ngIf"],["matInput","","placeholder","Password","type","password","name","password","formControlName","password"],[1,"button-wrapper"],["mat-raised-button","","color","primary","type","submit",3,"disabled"],["routerLink","/signup",1,"link"]],template:function(n,i){if(1&n&&(t.TgZ(0,"header"),t._UZ(1,"img",0),t.TgZ(2,"h1"),t._uU(3,"DirectorsView"),t.qZA(),t.qZA(),t.TgZ(4,"form",1),t.NdJ("ngSubmit",function(){return i.submit()}),t.TgZ(5,"mat-form-field"),t.TgZ(6,"mat-label"),t._uU(7,"E-Mail Address"),t.qZA(),t._UZ(8,"input",2),t.YNc(9,h,2,0,"mat-error",3),t.qZA(),t.TgZ(10,"mat-form-field"),t.TgZ(11,"mat-label"),t._uU(12,"Password"),t.qZA(),t._UZ(13,"input",4),t.YNc(14,Z,2,0,"mat-error",3),t.qZA(),t.TgZ(15,"div",5),t.TgZ(16,"button",6),t._uU(17," Sign in "),t.qZA(),t.qZA(),t.qZA(),t.YNc(18,C,2,1,"mat-error",3),t.TgZ(19,"p"),t._uU(20,"No Account? "),t.TgZ(21,"a",7),t._uU(22,"Register now!"),t.qZA(),t.qZA()),2&n){let a,f;t.xp6(4),t.Q6J("formGroup",i.formGroup),t.xp6(5),t.Q6J("ngIf",null==(a=i.formGroup.get("email"))?null:a.hasError("required")),t.xp6(5),t.Q6J("ngIf",null==(f=i.formGroup.get("password"))?null:f.hasError("required")),t.xp6(2),t.Q6J("disabled",!i.formGroup.valid),t.xp6(2),t.Q6J("ngIf",i.responseMessage)}},directives:[o._Y,o.JL,o.sg,l.KE,l.hX,g.Nt,o.Fj,o.JJ,o.u,c.O5,l.TO,p.lW,m.yS],styles:["[_nghost-%COMP%]{display:flex;align-items:center;justify-content:flex-start;flex-direction:column;padding-top:10vh}header[_ngcontent-%COMP%]{width:80%;margin-bottom:7vh;display:flex;justify-content:center;align-items:center;flex-direction:column;-webkit-user-select:none;user-select:none}header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:10%}header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:0;font-size:2em}form[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%]{width:20%}form[_ngcontent-%COMP%]   .button-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.link[_ngcontent-%COMP%]{color:var(--primary-color);text-decoration:underline}"]}),e})()}];let y=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[c.ez,m.Bz.forChild(M),l.lN,g.c,p.ot,o.UX]]}),e})()}}]);