"use strict";(self.webpackChunkskeleton=self.webpackChunkskeleton||[]).push([[593],{8593:(_e,D,s)=>{s.r(D),s.d(D,{VoucherModule:()=>ge});var u=s(6814),d=s(9772),v=s(9397),U=s(7101),A=s(694),c=s(95),m=s(3026),e=s(9468),g=s(3719),f=s(5051),_=s(5056),I=s(2051),Z=s(3838),x=s(6472),q=s(7398),N=s(165);let F=(()=>{class o{constructor(t){this.userStoreService=t}transform(t){return this.userStoreService.selectById(t).pipe((0,q.U)(r=>r?.name??"N/A"))}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(N.p,16))};static#t=this.\u0275pipe=e.Yjl({name:"getUserByRoleId",type:o,pure:!0})}return o})();var T=s(2336);function J(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"span",26),e.NdJ("mouseenter",function(){const n=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.hoveredDate=n)})("mouseleave",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.hoveredDate=null)}),e._uU(1),e.qZA()}if(2&o){const t=a.$implicit,r=a.focused,i=e.oxw(2);e.ekj("focused",r)("range",i.isRange(t))("faded",i.isHovered(t)||i.isInside(t)),e.xp6(1),e.hij(" ",t.day," ")}}function L(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.ALo(7,"titlecase"),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.ALo(12,"titlecase"),e.ALo(13,"async"),e.ALo(14,"getUserByRoleId"),e.qZA(),e.TgZ(15,"td")(16,"i",27),e.NdJ("click",function(){const n=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.navigateVoucher(n.id))}),e.qZA(),e.TgZ(17,"i",28),e.NdJ("click",function(){const n=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.openDeleteConfirmationModal(n))}),e.qZA()()()}if(2&o){const t=a.$implicit;e.xp6(2),e.Oqu(t.voucherCode),e.xp6(2),e.Oqu(t.companyName),e.xp6(2),e.Oqu(e.lcZ(7,5,t.guideName||"N/A")),e.xp6(3),e.Oqu(t.vehicleNumber||"N/A"),e.xp6(2),e.Oqu(e.lcZ(12,7,e.lcZ(13,9,e.lcZ(14,11,t.salesManId))))}}function S(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"div",1)(2,"app-card",2),e._UZ(3,"h4",3),e.TgZ(4,"h4",4)(5,"h4"),e._uU(6,"Voucher List"),e.qZA(),e.TgZ(7,"button",5),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.navigateVoucher())}),e._UZ(8,"i",6),e._uU(9," Add "),e.qZA()(),e._UZ(10,"hr"),e.TgZ(11,"form",7)(12,"div",8)(13,"div",9)(14,"div",10)(15,"input",11,12),e.NdJ("dateSelect",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.onDateSelection(i))}),e.qZA(),e.YNc(17,J,2,7,"ng-template",null,13,e.W1O),e.qZA()(),e.TgZ(19,"div",10)(20,"input",14,15),e.NdJ("input",function(){e.CHM(t);const i=e.MAs(21),n=e.oxw();return e.KtG(n.fromDate1=n.validateInput(n.fromDate1,i.value))}),e.qZA(),e.TgZ(22,"button",16),e.NdJ("click",function(){e.CHM(t);const i=e.MAs(16);return e.KtG(i.toggle())}),e.qZA()()(),e.TgZ(23,"div",8)(24,"div",10)(25,"input",17,18),e.NdJ("input",function(){e.CHM(t);const i=e.MAs(26),n=e.oxw();return e.KtG(n.toDate1=n.validateInput(n.toDate1,i.value))}),e.qZA(),e.TgZ(27,"button",16),e.NdJ("click",function(){e.CHM(t);const i=e.MAs(16);return e.KtG(i.toggle())}),e.qZA()()(),e.TgZ(28,"button",19),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.filterClick())}),e._uU(29,"Filter"),e.qZA(),e.TgZ(30,"button",20),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.resetClick())}),e._uU(31,"Reset"),e.qZA()(),e.TgZ(32,"div",21)(33,"table",22)(34,"thead")(35,"tr")(36,"th"),e._uU(37,"voucher No."),e.qZA(),e.TgZ(38,"th"),e._uU(39,"Company Name"),e.qZA(),e.TgZ(40,"th"),e._uU(41,"Guide"),e.qZA(),e.TgZ(42,"th"),e._uU(43,"Vehicle No."),e.qZA(),e.TgZ(44,"th"),e._uU(45,"Sales Man"),e.qZA(),e.TgZ(46,"th"),e._uU(47,"Action"),e.qZA()()(),e.TgZ(48,"tbody"),e.YNc(49,L,18,13,"tr",23),e.ALo(50,"paginate"),e.ALo(51,"sortDescending"),e.qZA()()(),e.TgZ(52,"div",24)(53,"pagination-controls",25),e.NdJ("pageChange",function(i){e.CHM(t);const n=e.oxw();return e.KtG(n.pagingConfig.currentPage=i)}),e.qZA()()()()()}if(2&o){const t=a.ngIf,r=e.MAs(18),i=e.oxw();e.xp6(2),e.Q6J("hidHeader",!0)("options",!1),e.xp6(9),e.Q6J("formGroup",i.dateFilterForm),e.xp6(4),e.Q6J("autoClose","outside")("displayMonths",2)("dayTemplate",r)("startDate",i.fromDate1),e.xp6(5),e.Q6J("value",i.formatter.format(i.fromDate1)),e.xp6(5),e.Q6J("value",i.formatter.format(i.toDate1)),e.xp6(3),e.Q6J("disabled",i.dateFilterForm.invalid),e.xp6(21),e.Q6J("ngForOf",e.xi3(50,11,e.xi3(51,14,t.voucherList,"desc"),i.pagingConfig))}}const Y=function(){return[]},O=function(o){return{voucherList:o}};let H=(()=>{class o{get fromDate(){return this.dateFilterForm.get("fromDate")}get toDate(){return this.dateFilterForm.get("toDate")}constructor(t,r,i,n,l,h,p,C,y){this.router=t,this.formBuilder=r,this.store=i,this.service=n,this.userService=l,this.modalService=h,this.calendar=p,this.formatter=C,this.datePipe=y,this.subscriptions=[],this.pagingConfig=(0,U.F)({}),this.voucherList$=this.store.selectAll(),this.dateFilterForm=this.formBuilder.nonNullable.group({fromDate:[new Date,c.kI.required],toDate:[new Date,c.kI.required]}),this.hoveredDate=null,this.fromDate1=this.calendar.getPrev(this.calendar.getToday(),"d",10),this.toDate1=this.calendar.getToday()}ngOnInit(){this.subscriptions.push(this.service.getAll().subscribe(),this.userService.getAll().subscribe())}navigateVoucher(t=0){this.router.navigate(["voucher",t])}openDeleteConfirmationModal(t){const r={item:t,message:`delete voucher: ${t.voucherCode}`,modalType:A.w.Confirmation},n=this.modalService.show(A.b,{initialState:r,class:"modal-sm modal-dialog-centered"}).content?.onClose.pipe((0,v.b)(l=>{l&&this.service.deleteVoucher(t)})).subscribe();n&&this.subscriptions.push(n)}onDateSelection(t){this.fromDate||this.toDate?this.fromDate1&&!this.toDate1&&t&&t.after(this.fromDate1)?this.toDate1=t:(this.toDate1=null,this.fromDate1=t):this.fromDate1=t}isHovered(t){return this.fromDate&&!this.toDate&&this.hoveredDate&&t.after(this.fromDate1)&&t.before(this.hoveredDate)}isInside(t){return this.toDate&&t.after(this.fromDate1)&&t.before(this.toDate1)}isRange(t){return t.equals(this.fromDate1)||this.toDate&&t.equals(this.toDate1)||this.isInside(t)||this.isHovered(t)}validateInput(t,r){const i=this.formatter.parse(r);return i&&this.calendar.isValid(m.qj.from(i))?m.qj.from(i):t}filterClick(){this.fromDate.setValue(new Date(this.fromDate1.year,this.fromDate1.month-1,this.fromDate1.day)),this.fromDate.setValue(this.datePipe.transform(this.fromDate.value,"yyyy-MM-ddTHH:mm:ss.SSSS")),this.toDate.setValue(new Date(this.toDate1.year,this.toDate1.month-1,this.toDate1.day,23,59,59,999)),this.toDate.setValue(this.datePipe.transform(this.toDate.value,"yyyy-MM-ddTHH:mm:ss.SSSS")),(this.dateFilterForm.valid||this.dateFilterForm.disabled)&&(console.log(this.fromDate.value),console.log(this.toDate.value),this.voucherList$=this.store.filterByDateRange(this.fromDate.value,this.toDate.value))}resetClick(){this.voucherList$=this.store.selectAll(),this.fromDate.setValue(new Date),this.toDate.setValue(new Date)}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(d.F0),e.Y36(c.qu),e.Y36(g.Z),e.Y36(f.H),e.Y36(_.K),e.Y36(I.tT),e.Y36(m.vL),e.Y36(m.NG),e.Y36(u.uU))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-voucher-list"]],decls:2,vars:6,consts:[[4,"ngIf"],[1,"col-xl-12"],["cardTitle","","blockClass","table-border-style",3,"hidHeader","options"],[1,"d-flex"],[1,"text-end","d-flex","flex-row","justify-content-between"],[1,"btn","btn-primary",3,"click"],[1,"feather","icon-plus"],[1,"row","row-cols-sm-auto",3,"formGroup"],[1,"col-12"],[1,"dp-hidden","position-absolute"],[1,"input-group"],["name","datepicker","ngbDatepicker","","outsideDays","hidden","tabindex","-1",1,"form-control",3,"autoClose","displayMonths","dayTemplate","startDate","dateSelect"],["datepicker","ngbDatepicker"],["t",""],["placeholder","yyyy-mm-dd","name","dpFromDate",1,"form-control",3,"value","input"],["dpFromDate",""],["type","button",1,"btn","btn-outline-secondary","bi","bi-calendar3",3,"click"],["placeholder","yyyy-mm-dd","name","dpToDate",1,"form-control",3,"value","input"],["dpToDate",""],["id","filterAndResetBtn",1,"btn","btn-primary","m-r-10",3,"disabled","click"],["id","filterAndResetBtn",1,"btn","btn-primary",3,"click"],[1,"table-responsive"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"],[1,"custom-day",3,"mouseenter","mouseleave"],["id","actionsBtn",1,"feather","icon-edit","m-r-15",3,"click"],["id","actionsBtn",1,"feather","icon-trash-2",3,"click"]],template:function(r,i){if(1&r&&(e.YNc(0,S,54,17,"div",0),e.ALo(1,"async")),2&r){let n;e.Q6J("ngIf",e.VKq(4,O,null!==(n=e.lcZ(1,1,i.voucherList$))&&void 0!==n?n:e.DdM(3,Y)))}},dependencies:[u.sg,u.O5,c._Y,c.JL,c.sg,Z.A,m.J4,x.LS,u.Ov,u.rS,x._s,F,T.K],styles:[".icon-trash-2[_ngcontent-%COMP%]{color:red}.icon-edit[_ngcontent-%COMP%]{color:#00f}#actionsBtn[_ngcontent-%COMP%]{cursor:pointer}ul[_ngcontent-%COMP%]{padding:0}li[_ngcontent-%COMP%]{list-style-type:none}.dp-hidden[_ngcontent-%COMP%]{width:0;margin:0;border:none;padding:0}.custom-day[_ngcontent-%COMP%]{text-align:center;padding:.185rem .25rem;display:inline-block;height:2rem;width:2rem}.custom-day.focused[_ngcontent-%COMP%]{background-color:#e6e6e6}.custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover{background-color:#0275d8;color:#fff}.custom-day.faded[_ngcontent-%COMP%]{background-color:#0275d880}@media screen and (max-width: 768px){#filterAndResetBtn[_ngcontent-%COMP%]{width:25%;margin:1em 0 0 1em}}"]})}return o})();var Q=s(2572),P=s(355);function b({id:o=0,companyName:a="",driverName:t="",guideName:r="",vehicleNumber:i="",createdOn:n=new Date,salesManId:l=0,comments:h="",voucherCode:p=""}){return{id:o,companyName:a,driverName:t,guideName:r,vehicleNumber:i,createdOn:n,salesManId:l,comments:h,voucherCode:p}}var M=s(1549),V=s(9157);function K(o,a){1&o&&(e.TgZ(0,"li",27),e._uU(1,"Company Name is required"),e.qZA())}function G(o,a){if(1&o&&(e.TgZ(0,"li",27),e._uU(1),e.qZA()),2&o){const t=e.oxw(3);e.xp6(1),e.Oqu(null==t.companyName.errors?null:t.companyName.errors.message)}}function B(o,a){if(1&o&&(e.TgZ(0,"ul"),e.YNc(1,K,2,0,"li",26),e.YNc(2,G,2,1,"li",26),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",null==t.companyName.errors?null:t.companyName.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.companyName.errors?null:t.companyName.errors.message)}}function k(o,a){1&o&&(e.TgZ(0,"li",27),e._uU(1,"Driver Name is required"),e.qZA())}function R(o,a){if(1&o&&(e.TgZ(0,"li",27),e._uU(1),e.qZA()),2&o){const t=e.oxw(3);e.xp6(1),e.Oqu(null==t.driverName.errors?null:t.driverName.errors.message)}}function w(o,a){if(1&o&&(e.TgZ(0,"ul"),e.YNc(1,k,2,0,"li",26),e.YNc(2,R,2,1,"li",26),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",null==t.driverName.errors?null:t.driverName.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.driverName.errors?null:t.driverName.errors.message)}}function $(o,a){if(1&o&&(e.TgZ(0,"option",28),e._uU(1),e.ALo(2,"titlecase"),e.qZA()),2&o){const t=a.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij(" ",e.lcZ(2,2,t.name)," ")}}function j(o,a){1&o&&(e.TgZ(0,"li",27),e._uU(1,"Sales Man is required"),e.qZA())}function E(o,a){if(1&o&&(e.TgZ(0,"li",27),e._uU(1),e.qZA()),2&o){const t=e.oxw(3);e.xp6(1),e.Oqu(null==t.salesManId.errors?null:t.salesManId.errors.message)}}function z(o,a){if(1&o&&(e.TgZ(0,"ul"),e.YNc(1,j,2,0,"li",26),e.YNc(2,E,2,1,"li",26),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",null==t.salesManId.errors?null:t.salesManId.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.salesManId.errors?null:t.salesManId.errors.message)}}function X(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2);return e.KtG(i.uppertVoucher())}),e._uU(1),e.qZA()}if(2&o){const t=e.oxw(2);e.Q6J("disabled",t.voucherForm.invalid),e.xp6(1),e.hij("",0===t.voucherForm.value.id?"Save":"update"," ")}}function W(o,a){if(1&o&&(e.TgZ(0,"div")(1,"div",1)(2,"app-card",2)(3,"form",3)(4,"h5"),e._uU(5),e.qZA(),e._UZ(6,"hr"),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"label",7),e._uU(11,"Voucher Number"),e.TgZ(12,"span",8),e._uU(13,"*"),e.qZA()(),e._UZ(14,"input",9),e.qZA()(),e.TgZ(15,"div",5)(16,"div",6)(17,"label",10),e._uU(18,"Company Name"),e.TgZ(19,"span",8),e._uU(20,"*"),e.qZA()(),e._UZ(21,"input",11),e.YNc(22,B,3,2,"ul",0),e.qZA()(),e.TgZ(23,"div",5)(24,"div",6)(25,"label",12),e._uU(26,"Driver Name"),e.TgZ(27,"span",8),e._uU(28,"*"),e.qZA()(),e._UZ(29,"input",13),e.YNc(30,w,3,2,"ul",0),e.qZA()(),e.TgZ(31,"div",5)(32,"div",6)(33,"label",14),e._uU(34,"Vehicle Number"),e.qZA(),e._UZ(35,"input",15),e.qZA()(),e.TgZ(36,"div",5)(37,"div",6)(38,"label",16),e._uU(39,"Guide Name"),e.qZA(),e._UZ(40,"input",17),e.qZA()(),e.TgZ(41,"div",5)(42,"div",6)(43,"label",18),e._uU(44,"Salesman"),e.TgZ(45,"span",8),e._uU(46,"*"),e.qZA()(),e.TgZ(47,"select",19)(48,"option",20),e._uU(49,"Select"),e.qZA(),e.YNc(50,$,3,4,"option",21),e.ALo(51,"sortDescending"),e.qZA(),e.YNc(52,z,3,2,"ul",0),e.qZA()(),e.TgZ(53,"div",5)(54,"div",6)(55,"label",22),e._uU(56,"Comments"),e.qZA(),e._UZ(57,"textarea",23),e.qZA()()()(),e.TgZ(58,"div",1)(59,"button",24),e._uU(60,"Cancel"),e.qZA(),e.YNc(61,X,2,2,"button",25),e.qZA()()()()),2&o){const t=a.ngIf,r=e.oxw();e.xp6(2),e.Q6J("hidHeader",!0)("options",!1),e.xp6(1),e.Q6J("formGroup",r.voucherForm),e.xp6(2),e.hij("",0===r.voucherForm.value.id?"Add":"Edit"," Voucher"),e.xp6(17),e.Q6J("ngIf",r.companyName.touched&&r.companyName.invalid),e.xp6(8),e.Q6J("ngIf",r.driverName.touched&&r.driverName.invalid),e.xp6(20),e.Q6J("ngForOf",e.xi3(51,10,t.salesManUserList,"desc")),e.xp6(2),e.Q6J("ngIf",r.salesManId.touched&&r.salesManId.invalid),e.xp6(7),e.Q6J("routerLink","/voucher"),e.xp6(2),e.Q6J("ngIf",r.voucherForm.dirty)}}const ee=function(){return[]},te=function(o){return{salesManUserList:o}},oe=[{path:"",component:H},{path:":id",component:(()=>{class o{get id(){return this.voucherForm.get("id")}get companyName(){return this.voucherForm.get("companyName")}get guideName(){return this.voucherForm.get("guideName")}get vehicleNumber(){return this.voucherForm.get("vehicleNumber")}get driverName(){return this.voucherForm.get("driverName")}get comments(){return this.voucherForm.get("comments")}get salesManId(){return this.voucherForm.get("salesManId")}get voucherCode(){return this.voucherForm.get("voucherCode")}constructor(t,r,i,n,l,h,p,C,y){this.route=t,this.formBuilder=r,this.store=i,this.voucherService=n,this.roleService=l,this.roleStoreService=h,this.userService=p,this.userStoreService=C,this._router=y,this.subscriptions=[],this.salesManUserList$=this.userStoreService.selectByRoleId(),this.voucherForm=this.formBuilder.nonNullable.group({id:[0],companyName:["",c.kI.required],driverName:["",c.kI.required],guideName:[""],comments:[""],salesManId:[0,[c.kI.required,fe=>(0,P.$)(fe,"Sales Man")]],vehicleNumber:[""],voucherCode:[{value:"",disabled:!0},c.kI.required]})}ngOnInit(){this.subscriptions.push((0,Q.a)([this.route.params,this.voucherService.getVoucherNo(),this.voucherService.getAll(),this.roleService.getAll(),this.userService.getAll()]).pipe((0,v.b)(([t,r])=>{if(t.id){console.log(r);const i=Number(t.id),n=this.store.getById(i)??b({voucherCode:r});this.voucherForm.setValue({id:n.id,companyName:n.companyName,driverName:n.driverName,guideName:n.guideName,vehicleNumber:n.vehicleNumber,salesManId:n.salesManId,comments:n.comments,voucherCode:n.voucherCode})}})).subscribe())}uppertVoucher(){const t=b({id:this.id.value,companyName:this.companyName.value,driverName:this.driverName.value,guideName:this.guideName.value,vehicleNumber:this.vehicleNumber.value,salesManId:this.salesManId.value,comments:this.comments.value,voucherCode:this.voucherCode.value});(this.voucherForm.valid||this.voucherForm.disabled)&&this.subscriptions.push(this.voucherService.upsertVoucher(t).pipe((0,v.b)(()=>{this.voucherForm.markAsPristine(),this.navigate()})).subscribe())}cancel(){}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}navigate(){this._router.navigate(["/voucher"])}static#e=this.\u0275fac=function(r){return new(r||o)(e.Y36(d.gz),e.Y36(c.qu),e.Y36(g.Z),e.Y36(f.H),e.Y36(M.N),e.Y36(V.M),e.Y36(_.K),e.Y36(N.p),e.Y36(d.F0))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-voucher-detail"]],decls:2,vars:6,consts:[[4,"ngIf"],[1,"col-md-12"],["cardTitle","",3,"hidHeader","options"],[3,"formGroup"],[1,"row"],[1,"col-md-6"],[1,"form-group"],["for","voucherNo"],[1,"required"],["type","text","id","name","formControlName","voucherCode",1,"form-control"],["for","companyName"],["type","text","id","companyName","placeholder","Ex: KCI","formControlName","companyName",1,"form-control","text-capitalize"],["for","driverName"],["type","text","id","driverName","placeholder","Ex: John","formControlName","driverName",1,"form-control","text-capitalize"],["for","vehicleNumber"],["id","vehicleNumber","placeholder","Ex: UP 80 4512","formControlName","vehicleNumber",1,"form-control"],["for","guideName"],["type","text","id","guideName","placeholder","Ex: John","formControlName","guideName",1,"form-control","text-capitalize"],["for","salesMan"],["id","salesMan","formControlName","salesManId",1,"form-control"],["value","0","disabled",""],[3,"value",4,"ngFor","ngForOf"],["for","comments"],["rows","2","id","comments","formControlName","comments",1,"form-control"],["type","button",1,"btn","btn-outline-primary","m-r-15",3,"routerLink"],["type","button","class","btn btn-primary",3,"disabled","click",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"text-danger"],[3,"value"],["type","button",1,"btn","btn-primary",3,"disabled","click"]],template:function(r,i){if(1&r&&(e.YNc(0,W,62,13,"div",0),e.ALo(1,"async")),2&r){let n;e.Q6J("ngIf",e.VKq(4,te,null!==(n=e.lcZ(1,1,i.salesManUserList$))&&void 0!==n?n:e.DdM(3,ee)))}},dependencies:[u.sg,u.O5,d.rH,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.sg,c.u,Z.A,u.Ov,u.rS,T.K],styles:[".required[_ngcontent-%COMP%]{color:red}ul[_ngcontent-%COMP%]{padding:0}li[_ngcontent-%COMP%]{list-style-type:none}"]})}return o})()}];let re=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(oe),d.Bz]})}return o})();var ie=s(6208),ne=s(2524),se=s(4587),ae=s(2704),ce=s(5872),le=s(1753),ue=s(6178),de=s(6837),me=s(6414),he=s(3729),pe=s(1088),ve=s(7849);let ge=(()=>{class o{static#e=this.\u0275fac=function(r){return new(r||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({providers:[g.Z,f.H,se.t,ae.M,ce.V,he.R,le.h,ue.x,de.A,me.Z,M.N,V.M,_.K,N.p,u.uU],imports:[u.ez,re,u.ez,ie.m,x.JX,ne.D,Z.A,pe.N8,ve.H3]})}return o})()}}]);