(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height: 80vh;\">\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <button mat-icon-button (click)=\"sidenav.toggle()\" fxShow=\"true\" fxHide.gt-sm>\n        <mat-icon>menu</mat-icon>\n      </button>\n      <span>Winjit App</span>\n      <span class=\"menu-spacer\"></span>\n      <div fxShow=\"true\" fxHide.lt-md>\n        <!-- The following menu items will be hidden on both SM and XS screen sizes -->\n        <a [routerLinkActive]=\"['is-active']\" routerLink=\"/list\" mat-button>User List</a>\n        <a [routerLinkActive]=\"['is-active']\" routerLink=\"/new\" mat-button>New User</a>\n        <a [routerLinkActive]=\"['is-active']\" routerLink=\"/productList\" mat-button>Product List</a>\n        <a href=\"#\" mat-button>Menu Item 5</a>\n        <a href=\"#\" mat-button>Menu Item 6</a>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <mat-sidenav-container fxFlexFill>\n    <mat-sidenav #sidenav style=\"width: 250px;\">\n      <mat-nav-list>\n        <a (click)=\"sidenav.toggle()\" href=\"\" mat-list-item>Close</a>\n       \n        <a [routerLinkActive]=\"['is-active']\" routerLink=\"/list\" mat-list-item>User List</a>\n        <a [routerLinkActive]=\"['is-active']\" routerLink=\"/new\" mat-list-item>New User</a>\n        <a href=\"#\" mat-list-item>Menu Item 3</a>\n        <a href=\"#\" mat-list-item>Menu Item 4</a>\n        <a href=\"#\" mat-list-item>Menu Item 5</a>\n        <a href=\"#\"mat-list-item>Menu Item 6</a>\n      </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content fxFlexFill>\n\n<router-outlet></router-outlet>\n\n\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n<div>\n\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-overview-example-dialog.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-overview-example-dialog.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<mat-card>Name : {{data.employeeName}} <br><br>\r\n          Email : {{data.employeeEmail}} <br><br>\r\n          Gender : {{data.employeeGender}} <br><br>\r\n          Photo : <img src=\"../assets/{{data.profileImg}}\"  style=\"width:80px\"/> <br><br>\r\n          \r\n        </mat-card>\r\n<br><br>\r\n<button mat-button style=\"float: right;\" (click)=\"onNoClick()\">Close</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-overview-update-record.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-overview-update-record.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n  .example-full-width{\r\n    width: 100%;\r\n  }\r\n \r\n  \r\n</style>\r\n <form [formGroup]=\"updateForm\"  novalidate>\r\n\r\n\r\n  <!-- Name -->\r\n  <mat-form-field class=\"example-full-width\">\r\n \r\n    <input matInput placeholder=\"Name\" formControlName=\"name\">\r\n  </mat-form-field>\r\n\r\n  <!-- Email -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n  </mat-form-field>\r\n\r\n  <!-- Gender -->\r\n  <div class=\"example-full-width\">\r\n    <mat-label>Gender:</mat-label>\r\n    <mat-radio-group aria-label=\"Select an option\" formControlName=\"gender\">\r\n      <mat-radio-button [checked]=\"updateForm.controls.gender.value=='Male'\" value=\"Male\">Male</mat-radio-button>\r\n      <mat-radio-button [checked]=\"updateForm.controls.gender.value==='Female'\" value=\"Female\">Female</mat-radio-button>\r\n    </mat-radio-group>\r\n  </div>\r\n\r\n  <!-- Date picker -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput readonly [matDatepicker]=\"picker\"  placeholder=\"Date of birth\" formControlName=\"dob\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker #picker></mat-datepicker>\r\n  </mat-form-field>\r\n\r\n<!-- Class -->\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Grade</mat-label>\r\n    <mat-select  [(value)]=\"updateForm.controls.grade.value\" formControlName=\"grade\">\r\n      <mat-option [value]=\"gradeArray\" *ngFor=\"let gradeArray of GradeArray\">{{gradeArray}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <!-- Add Subjects -->\r\n\r\n\r\n\r\n \r\n\r\n\r\n  <input type=\"file\" formControlName=\"profileImg\" (change)=\"onFileChange($event)\" />\r\n  <img src=\"{{imageURL}}\" /> \r\n  <br><br>\r\n<label><b>Select Hobbies</b></label><br><br>\r\n\r\n\r\n\r\n<!-- <div formArrayName=\"hobbies\" *ngFor=\"let hobby of updateForm.controls.hobbies.controls; let i=index;\">\r\n <mat-checkbox [formControl]=\"hobby\" value=\"{{hobby}}\" style=\"padding: 10px;\">{{myhobbies[i].value}}</mat-checkbox>\r\n</div>  -->\r\n\r\n\r\n<label formArrayName=\"orders\" *ngFor=\"let order of updateForm.controls.orders.controls; let i = index\">\r\n  <mat-checkbox [formControlName]=\"i\" style=\"padding-left: 10px;\">{{ordersData[i].name}}</mat-checkbox>\r\n</label>\r\n\r\n\r\n\r\n\r\n  <!-- Submit --><br><br>\r\n  <div class=\"button-wrapper\">\r\n    <button mat-flat-button [disabled]=\"!updateForm.valid\" color=\"primary\" (click)=\"getSelectedHobbies()\">Submit</button>\r\n    <button mat-button type=\"button\" style=\"float: right;\" (click)=\"onNoClick()\">Close</button>\r\n  </div>\r\n\r\n</form>\r\n\r\n<!-- \r\n<mat-card>Name : {{data.employeeName}} <br><br>\r\n          Email : {{data.employeeEmail}} <br><br>\r\n          Gender : {{data.employeeGender}} <br><br>\r\n          Photo : <img src=\"../assets/{{data.profileImg}}\"  style=\"width:80px\"/> <br><br>\r\n          \r\n        </mat-card> -->\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lazymodule/component1/component1.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lazymodule/component1/component1.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>component1 works!</h3>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lazymodule/component2/component2.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lazymodule/component2/component2.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>component2 works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/lazymodule/component3/component3.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lazymodule/component3/component3.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>component3 works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let product of productList\">\n\n    <mat-card class=\"example-card\" >\n        <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>{{product.productName}}</mat-card-title>\n            <mat-card-subtitle>MRP : {{product.price}} rs</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n        <mat-card-content>\n            <p>\n                {{product.description}}\n            </p>\n        </mat-card-content>\n        <mat-card-actions style=\"text-align: center;\">\n            <button mat-raised-button color=\"primary\">Add To Card</button>\n            \n        </mat-card-actions>\n    </mat-card>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-create/dialog-overview-example-dialog.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-create/dialog-overview-example-dialog.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<mat-card>Name : {{data.employeeName}} <br><br>\r\n          Email : {{data.employeeEmail}} <br><br>\r\n          Gender : {{data.employeeGender}} <br><br>\r\n          Photo : <img src=\"../assets/{{data.profileImg}}\"  style=\"width:80px\"/> <br><br>\r\n          \r\n        </mat-card>\r\n<br><br>\r\n<button mat-button style=\"float: right;\" (click)=\"onNoClick()\">Close</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-create/dialog-overview-update-record.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-create/dialog-overview-update-record.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n  .example-full-width{\r\n    width: 100%;\r\n  }\r\n \r\n  \r\n</style>\r\n <form [formGroup]=\"updateForm\"  novalidate>\r\n\r\n\r\n  <!-- Name -->\r\n  <mat-form-field class=\"example-full-width\">\r\n \r\n    <input matInput placeholder=\"Name\" formControlName=\"name\">\r\n  </mat-form-field>\r\n\r\n  <!-- Email -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n  </mat-form-field>\r\n\r\n  <!-- Gender -->\r\n  <div class=\"example-full-width\">\r\n    <mat-label>Gender:</mat-label>\r\n    <mat-radio-group aria-label=\"Select an option\" formControlName=\"gender\">\r\n      <mat-radio-button [checked]=\"updateForm.controls.gender.value=='Male'\" value=\"Male\">Male</mat-radio-button>\r\n      <mat-radio-button [checked]=\"updateForm.controls.gender.value==='Female'\" value=\"Female\">Female</mat-radio-button>\r\n    </mat-radio-group>\r\n  </div>\r\n\r\n  <!-- Date picker -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput readonly [matDatepicker]=\"picker\"  placeholder=\"Date of birth\" formControlName=\"dob\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker #picker></mat-datepicker>\r\n  </mat-form-field>\r\n\r\n<!-- Class -->\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Grade</mat-label>\r\n    <mat-select  [(value)]=\"updateForm.controls.grade.value\" formControlName=\"grade\">\r\n      <mat-option [value]=\"gradeArray\" *ngFor=\"let gradeArray of GradeArray\">{{gradeArray}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <!-- Add Subjects -->\r\n\r\n\r\n\r\n \r\n\r\n\r\n  <input type=\"file\" formControlName=\"profileImg\" (change)=\"onFileChange($event)\" />\r\n  <img src=\"{{imageURL}}\" /> \r\n  <br><br>\r\n<label><b>Select Hobbies</b></label><br><br>\r\n\r\n\r\n\r\n<!-- <div formArrayName=\"hobbies\" *ngFor=\"let hobby of updateForm.controls.hobbies.controls; let i=index;\">\r\n <mat-checkbox [formControl]=\"hobby\" value=\"{{hobby}}\" style=\"padding: 10px;\">{{myhobbies[i].value}}</mat-checkbox>\r\n</div>  -->\r\n\r\n\r\n<label formArrayName=\"orders\" *ngFor=\"let order of updateForm.controls.orders.controls; let i = index\">\r\n  <mat-checkbox [formControlName]=\"i\" style=\"padding-left: 10px;\">{{ordersData[i].name}}</mat-checkbox>\r\n</label>\r\n\r\n\r\n\r\n\r\n  <!-- Submit --><br><br>\r\n  <div class=\"button-wrapper\">\r\n    <button mat-flat-button [disabled]=\"!updateForm.valid\" color=\"primary\" (click)=\"getSelectedHobbies()\">Submit</button>\r\n    <button mat-button type=\"button\" style=\"float: right;\" (click)=\"onNoClick()\">Close</button>\r\n  </div>\r\n\r\n</form>\r\n\r\n<!-- \r\n<mat-card>Name : {{data.employeeName}} <br><br>\r\n          Email : {{data.employeeEmail}} <br><br>\r\n          Gender : {{data.employeeGender}} <br><br>\r\n          Photo : <img src=\"../assets/{{data.profileImg}}\"  style=\"width:80px\"/> <br><br>\r\n          \r\n        </mat-card> -->\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-create/project-create.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-create/project-create.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"myForm\" (ngSubmit)=\"submitForm()\" novalidate autocomplete=\"off\">\n      \n    <!-- Name -->\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\n\n      <!-- <mat-hint>Errors appear instantly!</mat-hint> -->\n\n      <mat-error *ngIf=\"f.name.errors?.required\">\n        Please enter Name\n      </mat-error>\n\n      <mat-error *ngIf=\"f.name.errors?.pattern\">\n        Enter Valid Name\n      </mat-error>\n\n      <mat-error *ngIf=\"f.name.errors?.minlength\">\n        Name length must be greter than 6 charector\n      </mat-error>\n   \n      \n\n\n    </mat-form-field>\n\n    <!-- Email -->\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Email\" formControlName=\"email\">\n      <mat-error *ngIf=\"f.email.errors?.required\">\n        Please enter Email\n      </mat-error>\n      <mat-error *ngIf=\"f.email.errors?.pattern\">\n        Enter Valid Valid\n      </mat-error>\n\n    </mat-form-field>\n\n    <!-- Gender -->\n    <div class=\"misc-bottom-padding\">\n      <mat-label>Gender:</mat-label>\n      <mat-radio-group aria-label=\"Select an option\" formControlName=\"gender\">\n        <mat-radio-button value=\"Male\">Male</mat-radio-button>\n        <mat-radio-button value=\"Female\">Female</mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <!-- Date picker -->\n    <mat-form-field>\n      <input matInput readonly [matDatepicker]=\"picker\" placeholder=\"Date of birth\" formControlName=\"dob\"\n        (dateChange)=\"date($event)\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n\n\n    <!-- Class -->\n    <mat-form-field>\n      <mat-label>Birth Date</mat-label>\n      <mat-select [(value)]=\"selected\" formControlName=\"grade\">\n        <mat-option [value]=\"gradeArray\" *ngFor=\"let gradeArray of GradeArray\">{{gradeArray}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n\n    <!-- <div class=\"content\">\n      <h2>Cascading or Dependent Dropdown using Angular 8</h2>\n      \n      <div class=\"card-container\">\n        <label>Country</label>\n        <select placeholder=\"Country\" formControlName=\"selectedCountry\" (change)=\"changeCountry($event.target.value)\">\n          <option>--Choose Country--</option>\n          <option *ngFor=\"let country of Countries\">{{country.name}}</option>\n        </select>\n      </div>\n    \n      <div class=\"card-container\">\n        <label>State</label>\n        <select placeholder=\"State\" (change)=\"changeState($event.target.value)\" formControlName=\"selectedState\">\n          <option>--Choose State--</option>\n          <option *ngFor=\"let state of states\">{{state.name}}</option>\n        </select>\n      </div>\n      \n      <div class=\"card-container\">\n        <label>City</label>\n        <select placeholder=\"City\" formControlName=\"selectedCity\">\n          <option>--Choose City--</option>\n          <option *ngFor=\"let city of cities\">{{city}}</option>\n        </select>\n      </div>\n    </div> -->\n\n   \n\n\n\n\n\n\n\n\n    <input type=\"file\" formControlName=\"profileImg\" (change)=\"onFileChange($event)\" />\n    <img src=\"{{imageURL}}\" />\n\n\n   \n\n    <br><br>\n    <button type=\"button\"  (click)=\"addAddress()\">Add Address</button>\n    \n    <section class=\"container border mb-4 p-3\" formArrayName=\"addresses\" \n    *ngFor=\"let address of addressControls; let i = index;\" style=\"padding:10px;background-color:aqua\">\n    <div [formGroupName]=\"i\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n            <h4>Address {{i + 1}}</h4>\n        </div>\n        <div class=\"col-6 text-right\">\n            <button type=\"button\" class=\"btn btn-danger btn-sm\" (click)=\"removeAddress(i)\">Remove</button>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6\">\n            <div class=\"form-group\">\n                <label>Address</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"address\" placeholder=\"St. Thomas Apartment\"/>\n              </div>\n        </div>\n        <div class=\"col-6\">\n            <div class=\"form-group\">\n                <label>Street</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"street\" placeholder=\"South Street\"/>\n              </div>\n        </div>\n      </div>\n      \n      <div class=\"row\">\n        <div class=\"col-6\">\n            <div class=\"form-group\">\n                <label>City</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"city\" placeholder=\"Mumbai\"/>\n              </div>\n        </div> \n        <div class=\"col-6\">\n            <div class=\"form-group\">\n                <label>Country</label>\n                <select class=\"form-control\" formControlName=\"country\" placeholder=\"India\">\n                  <option value=\"india\">India</option>\n                  <option value=\"usa\">USA</option>\n                  <option value=\"england\">England</option>\n                </select>\n              </div>\n        </div>\n\n\n\n\n        \n\n      </div>\n    </div>\n\n  </section>\n\n\n\n\n\n\n    <mat-checkbox matInput formControlName=\"acceptTerms\"> <small>Accept term and condition</small></mat-checkbox>\n\n    <!-- Submit -->\n    <div class=\"button-wrapper\">\n      <button mat-flat-button [disabled]=\"!myForm.valid\" color=\"primary\">Submit</button>\n    </div>\n\n  </form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-list/dialog-overview-example-dialog.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-list/dialog-overview-example-dialog.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<mat-card>Name : {{data.employeeName}} <br><br>\r\n          Email : {{data.employeeEmail}} <br><br>\r\n          Gender : {{data.employeeGender}} <br><br>\r\n          Photo : <img src=\"../assets/{{data.profileImg}}\"  style=\"width:80px\"/> <br><br>\r\n          \r\n        </mat-card>\r\n<br><br>\r\n<button mat-button style=\"float: right;\" (click)=\"onNoClick()\">Close</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-list/dialog-overview-update-record.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-list/dialog-overview-update-record.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n  .example-full-width{\r\n    width: 100%;\r\n  }\r\n \r\n  \r\n</style>\r\n <form [formGroup]=\"updateForm\"  novalidate>\r\n\r\n\r\n  <!-- Name -->\r\n  <mat-form-field class=\"example-full-width\">\r\n \r\n    <input matInput placeholder=\"Name\" formControlName=\"name\">\r\n  </mat-form-field>\r\n\r\n  <!-- Email -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput placeholder=\"Email\" formControlName=\"email\">\r\n  </mat-form-field>\r\n\r\n  <!-- Gender -->\r\n  <div class=\"example-full-width\">\r\n    <mat-label>Gender:</mat-label>\r\n    <mat-radio-group aria-label=\"Select an option\" formControlName=\"gender\">\r\n      <mat-radio-button [checked]=\"updateForm.controls.gender.value=='Male'\" value=\"Male\">Male</mat-radio-button>\r\n      <mat-radio-button [checked]=\"updateForm.controls.gender.value==='Female'\" value=\"Female\">Female</mat-radio-button>\r\n    </mat-radio-group>\r\n  </div>\r\n\r\n  <!-- Date picker -->\r\n  <mat-form-field class=\"example-full-width\">\r\n    <input matInput readonly [matDatepicker]=\"picker\"  placeholder=\"Date of birth\" formControlName=\"dob\">\r\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n    <mat-datepicker #picker></mat-datepicker>\r\n  </mat-form-field>\r\n\r\n<!-- Class -->\r\n\r\n  <mat-form-field class=\"example-full-width\">\r\n    <mat-label>Grade</mat-label>\r\n    <mat-select  [(value)]=\"updateForm.controls.grade.value\" formControlName=\"grade\">\r\n      <mat-option [value]=\"gradeArray\" *ngFor=\"let gradeArray of GradeArray\">{{gradeArray}}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n\r\n  <!-- Add Subjects -->\r\n\r\n\r\n\r\n \r\n\r\n\r\n  <input type=\"file\" formControlName=\"profileImg\" (change)=\"onFileChange($event)\" />\r\n  <img src=\"{{imageURL}}\" /> \r\n  <br><br>\r\n<label><b>Select Hobbies</b></label><br><br>\r\n\r\n\r\n\r\n<!-- <div formArrayName=\"hobbies\" *ngFor=\"let hobby of updateForm.controls.hobbies.controls; let i=index;\">\r\n <mat-checkbox [formControl]=\"hobby\" value=\"{{hobby}}\" style=\"padding: 10px;\">{{myhobbies[i].value}}</mat-checkbox>\r\n</div>  -->\r\n\r\n\r\n<label formArrayName=\"orders\" *ngFor=\"let order of updateForm.controls.orders.controls; let i = index\">\r\n  <mat-checkbox [formControlName]=\"i\" style=\"padding-left: 10px;\">{{ordersData[i].name}}</mat-checkbox>\r\n</label>\r\n\r\n\r\n\r\n\r\n  <!-- Submit --><br><br>\r\n  <div class=\"button-wrapper\">\r\n    <button mat-flat-button [disabled]=\"!updateForm.valid\" color=\"primary\" (click)=\"getSelectedHobbies()\">Submit</button>\r\n    <button mat-button type=\"button\" style=\"float: right;\" (click)=\"onNoClick()\">Close</button>\r\n  </div>\r\n\r\n</form>\r\n\r\n<!-- \r\n<mat-card>Name : {{data.employeeName}} <br><br>\r\n          Email : {{data.employeeEmail}} <br><br>\r\n          Gender : {{data.employeeGender}} <br><br>\r\n          Photo : <img src=\"../assets/{{data.profileImg}}\"  style=\"width:80px\"/> <br><br>\r\n          \r\n        </mat-card> -->\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-list/project-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-list/project-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n      <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\" autocomplete=\"off\">\n      </mat-form-field>\n  \n      <p class=\"lead\" *ngIf=\"loading\">Loading...</p>\n  \n      <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n        <ng-container matColumnDef=\"Name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.employeeName}} </td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"Email\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Email </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.employeeEmail}} </td>\n        </ng-container>\n  \n        <ng-container matColumnDef=\"Gender\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Gender </th>\n          <td mat-cell *matCellDef=\"let element\">\n  \n            <span [style.color]=\"element.employeeGender=='Male'?'red':'blue'\">{{element.employeeGender}}</span>\n  \n  \n          </td>\n        </ng-container>\n  \n  \n  \n        \n  \n        <ng-container matColumnDef=\"Action\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Action </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <div class=\"example-button-row\">\n              <button mat-raised-button color=\"primary\" [routerLink]=\"['/details']\" [queryParams]=\"{ userId: element._id }\" queryParamsHandling=\"merge\" >Details</button>\n              <button mat-raised-button color=\"accent\" style=\"margin-left:10px;\" (click)=\"openDialogForUpdateRecord(element._id)\">Edit</button>\n              <button mat-raised-button color=\"warn\" style=\"margin-left:10px;\" (click)=\"deleteEmployeeRecord(element._id)\">Delete</button>\n            </div>\n  \n          </td>\n        </ng-container>\n  \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\" showFirstLastButtons></mat-paginator>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-update/project-update.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project-update/project-update.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>project-update works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- { \"subject\": [ \"[]\" ], \"_id\": \"5e1eedd1f9eb485b58b7753b\", \"employeeName\": \"testrecord\", \n\"employeeEmail\": \"test99@winjit.com\", \"employeeGender\": \"Male\",\n \"employeeBirthDate\": \"2020-01-14T00:00:00.000Z\", \"grade\": \"\",\n  \"profileImg\": \"../images/1579085265208.jpeg\",\n   \"address\": [ { \"_id\": \"5e1eedd1f9eb485b58b7753a\", \"address\": \"aa\", \"street\": \"b\", \"city\": \"c\", \"country\": \"india\" } ], \n\"createdAt\": \"2020-01-15T10:47:45.245Z\", \"updatedAt\": \"2020-01-15T10:47:45.245Z\", \"__v\": 0 } -->\n\n\n<div class=\"item\" *ngIf=\"loader\"><ngx-skeleton-loader count=\"5\" appearance=\"line\" > </ngx-skeleton-loader>\n</div>\n<div *ngIf=\"!loader\">\n<mat-card>Name : {{userDetails.employeeName}}</mat-card>\n<mat-card>Email : {{userDetails.employeeEmail}}</mat-card>\n<mat-card>Gender : {{userDetails.employeeGender}}</mat-card>\n<mat-card>Birth Date : {{userDetails.employeeBirthDate}}</mat-card>\n\n<mat-card >Address : <br><br>\n\n    <span  *ngFor=\"let addArray of  userDetails.address\">\n                Address : {{addArray.address}}<br>\n                street : {{addArray.street}}<br>\n                city : {{addArray.city}}<br>\n                country : {{addArray.country}}<br><br>\n    </span></mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>test works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/angular/material/material.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/angular/material/material.module.ts ***!
  \*****************************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");











































let DemoMaterialModule = class DemoMaterialModule {
};
DemoMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        ]
    })
], DemoMaterialModule);

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-list/project-list.component */ "./src/app/project-list/project-list.component.ts");
/* harmony import */ var _project_create_project_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-create/project-create.component */ "./src/app/project-create/project-create.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");







//
const routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_3__["ProjectListComponent"] },
    { path: 'new', component: _project_create_project_create_component__WEBPACK_IMPORTED_MODULE_4__["ProjectCreateComponent"] },
    { path: 'details', component: _project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"] },
    { path: 'productList', component: _product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"] },
];
///lazymodule/lazymodule.module#LazyModuleModule
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir=rtl] .example-option-img {\n  margin-right: 0;\n  margin-left: 8px;\n}\n\n.example-card {\n  max-width: 600px;\n}\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\nhtml, body {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\nform {\n  width: 420px;\n  margin: 35px auto 100px;\n  display: block;\n  float: none;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.misc-bottom-padding {\n  margin: 8px 0 20px;\n}\n\n.misc-bottom-padding mat-label {\n  margin-right: 15px;\n}\n\n.mat-radio-label {\n  margin: 0 15px 0 0;\n}\n\n.title-center {\n  margin: 0 auto;\n}\n\n.button-wrapper {\n  margin-top: 10px;\n}\n\ncdk-virtual-scroll-viewport {\n  height: 500px;\n}\n\ntable {\n  width: 100%;\n}\n\n.fill-remaining-space {\n  /*This fills the remaining space, by using flexbox.  \n  Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXGluY0RlbW8vc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLFdBQUE7QUNDSjs7QURFRTtFQUNFLHNCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLG1GQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFRTtFQUFVLFlBQUE7QUNFWjs7QUREQTtFQUFLLFNBQUE7RUFBUyxpREFBQTtBQ01kOztBRExBO0VBQUssWUFBQTtFQUFZLHVCQUFBO0VBQXVCLGNBQUE7RUFBYyxXQUFBO0FDWXREOztBRFhBO0VBQWdCLFdBQUE7QUNlaEI7O0FEZEE7RUFBcUIsa0JBQUE7QUNrQnJCOztBRGpCQTtFQUErQixrQkFBQTtBQ3FCL0I7O0FEcEJBO0VBQWlCLGtCQUFBO0FDd0JqQjs7QUR2QkE7RUFBYyxjQUFBO0FDMkJkOztBRDFCQTtFQUFnQixnQkFBQTtBQzhCaEI7O0FENUJBO0VBQ0UsYUFBQTtBQytCRjs7QUQ3QkE7RUFBTSxXQUFBO0FDaUNOOztBRC9CQTtFQUNFO2dEQUFBO0VBRUQsY0FBQTtBQ2tDRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtb3B0aW9uLWltZyB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIFtkaXI9J3J0bCddIC5leGFtcGxlLW9wdGlvbi1pbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9XHJcblxyXG4gIGh0bWwsYm9keXtoZWlnaHQ6MTAwJTt9XHJcbmJvZHl7bWFyZ2luOjA7Zm9udC1mYW1pbHk6Um9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7fVxyXG5mb3Jte3dpZHRoOjQyMHB4O21hcmdpbjozNXB4IGF1dG8gMTAwcHg7ZGlzcGxheTpibG9jaztmbG9hdDpub25lO31cclxuLm1hdC1mb3JtLWZpZWxke3dpZHRoOjEwMCU7fVxyXG4ubWlzYy1ib3R0b20tcGFkZGluZ3ttYXJnaW46OHB4IDAgMjBweDt9XHJcbi5taXNjLWJvdHRvbS1wYWRkaW5nIG1hdC1sYWJlbHttYXJnaW4tcmlnaHQ6MTVweDt9XHJcbi5tYXQtcmFkaW8tbGFiZWx7bWFyZ2luOjAgMTVweCAwIDA7fVxyXG4udGl0bGUtY2VudGVye21hcmdpbjowIGF1dG87fVxyXG4uYnV0dG9uLXdyYXBwZXJ7bWFyZ2luLXRvcDoxMHB4O31cclxuXHJcbmNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG50YWJsZXt3aWR0aDoxMDAlfVxyXG5cclxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcclxuICAvKlRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC4gIFxyXG4gRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cclxuIGZsZXg6IDEgMSBhdXRvO1xyXG59IiwiLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLW9wdGlvbi1pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuW2Rpcj1ydGxdIC5leGFtcGxlLW9wdGlvbi1pbWcge1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5leGFtcGxlLWNhcmQge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xufVxuXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbmZvcm0ge1xuICB3aWR0aDogNDIwcHg7XG4gIG1hcmdpbjogMzVweCBhdXRvIDEwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IG5vbmU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWlzYy1ib3R0b20tcGFkZGluZyB7XG4gIG1hcmdpbjogOHB4IDAgMjBweDtcbn1cblxuLm1pc2MtYm90dG9tLXBhZGRpbmcgbWF0LWxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ubWF0LXJhZGlvLWxhYmVsIHtcbiAgbWFyZ2luOiAwIDE1cHggMCAwO1xufVxuXG4udGl0bGUtY2VudGVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5idXR0b24td3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbmNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCB7XG4gIGhlaWdodDogNTAwcHg7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gIC8qVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiAgXG4gIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gIGZsZXg6IDEgMSBhdXRvO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, DialogOverviewExampleDialog, DialogOverUpdateRecord, PizzaPartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverUpdateRecord", function() { return DialogOverUpdateRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaPartyComponent", function() { return PizzaPartyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/fesm2015/ngx-permissions.js");












;
let AppComponent = class AppComponent {
    constructor(dialog, _formBuilder, _snackBar, ds, permissionsService) {
        this.dialog = dialog;
        this._formBuilder = _formBuilder;
        this._snackBar = _snackBar;
        this.ds = ds;
        this.permissionsService = permissionsService;
        this.title = 'incDemo';
        this.isLinear = false;
        this.durationInSeconds = 5;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.GradeArray = ['8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
        this.SubjectsArray = [];
        this.latitude = -28.68352;
        this.longitude = -147.20785;
        this.mapType = 'satellite';
        this.loading = false;
        this.tableData = [];
        this.today = Date.now();
        this.items = [];
        this.imgViewPath = "file:///E:/incDemo/images/1578287882506.png";
        this.fruits = ['Lemon'];
        this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.addresses = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.displayedColumns = ['Name', 'Email', 'Gender', 'Birth Date', 'Grade', 'Profile Photo', 'Action'];
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((new Date()).toISOString());
        /* Handle form errors in Angular 8 */
        this.errorHandling = (control, error) => {
            return this.myForm.controls[control].hasError(error);
        };
    }
    openDialog(empId) {
        this.ds.getEmployeeDetails(empId).subscribe(data => {
            if (data['code'] == '00') {
                this.loading = false;
                const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
                    width: '600px',
                    data: data['result'][0]
                });
                dialogRef.afterClosed().subscribe(result => {
                    console.log('The dialog was closed');
                    this.animal = result;
                });
            }
        });
    }
    openDialogForUpdateRecord(empId) {
        this.ds.getEmployeeDetails(empId).subscribe(data => {
            if (data['code'] == '00') {
                this.loading = false;
                const dialogRef = this.dialog.open(DialogOverUpdateRecord, {
                    width: '600px',
                    data: data['result'][0]
                });
                dialogRef.afterClosed().subscribe(result => {
                    console.log('The dialog was closed');
                    this.animal = result;
                });
            }
        });
    }
    openSnackBar(msg) {
        this._snackBar.openFromComponent(PizzaPartyComponent, {
            duration: 2 * 1000,
            verticalPosition: 'top',
            data: msg
        });
    }
    ngOnInit() {
        //this.permissionsService.loadPermissions(perm);
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.reactiveForm();
        this.emplyeeList();
    }
    get f() { return this.myForm.controls; }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    emplyeeList() {
        this.loading = true;
        this.ds.getEmployeeRecord().subscribe(data => {
            if (data['code'] == '00') {
                this.dataSource.data = data['result'];
                this.loading = false;
            }
        }, err => {
            console.log(err);
            let msg = "Sever not Responding";
            this.openSnackBar(msg);
        });
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    onChangePage(pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
    /* Reactive form */
    reactiveForm() {
        this.myForm = this._formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z \-\']+')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)]],
            gender: ['Male'],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            grade: [''],
            subjects: [this.SubjectsArray],
            profileImg: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue],
            addresses: this._formBuilder.array([this.createAddress()])
            // this._formBuilder.control('')
        });
    }
    createAddress() {
        return this._formBuilder.group({
            address: '',
            street: '',
            city: '',
            country: ''
        });
    }
    addAddress() {
        this.addresses = this.myForm.get('addresses');
        this.addresses.push(this.createAddress());
    }
    get addressControls() {
        return this.myForm.get('addresses')['controls'];
    }
    deleteEmployeeRecord(empid) {
        this.ds.deleteEmployeeRecord(empid).subscribe(data => {
            if (data['code'] == '00') {
                let msg = "Remove Successfully";
                this.openSnackBar(msg);
                this.emplyeeList();
            }
            else {
                alert('went wrong');
            }
        });
    }
    onFileChange(event) {
        const file = event.target.files[0];
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.imageURL = reader.result;
        };
        reader.readAsDataURL(file);
    }
    /* Date */
    date(e) {
        var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
        this.myForm.get('dob').setValue(convertDate, {
            onlyself: true
        });
    }
    submitForm() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.myForm.invalid) {
            let msg = "Invalid Data";
            this.openSnackBar(msg);
            return;
        }
        else {
            this.ds.saveEmployee(this.myForm.value, this.imageURL).subscribe(data => {
                if (data['code'] == '00') {
                    let msg = "Save successfully";
                    this.openSnackBar(msg);
                    this.emplyeeList();
                }
                else {
                    alert('went wrong');
                }
            });
        }
    }
    /* Add dynamic languages */
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add language
        if ((value || '').trim() && this.SubjectsArray.length < 5) {
            this.SubjectsArray.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    /* Remove dynamic languages */
    remove(subject) {
        const index = this.SubjectsArray.indexOf(subject);
        if (index >= 0) {
            this.SubjectsArray.splice(index, 1);
        }
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true })
], AppComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true })
], AppComponent.prototype, "sort", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);

let DialogOverviewExampleDialog = class DialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ['Name', 'Value'];
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
DialogOverviewExampleDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
DialogOverviewExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-overview-example-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-overview-example-dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], DialogOverviewExampleDialog);

let DialogOverUpdateRecord = class DialogOverUpdateRecord {
    constructor(dialogRef, data, _formBuilder, datePipe, ds, _snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._formBuilder = _formBuilder;
        this.datePipe = datePipe;
        this.ds = ds;
        this._snackBar = _snackBar;
        this.displayedColumns = ['Name', 'Value'];
        this.GradeArray = ['8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
        this.SubjectsArray = [];
        this.myhobbies = [
            {
                name: "Sports",
                value: "sports"
            },
            {
                name: "Music",
                value: "music"
            },
            {
                name: "Movie",
                value: "movie"
            },
            {
                name: "Reading",
                value: "reading"
            },
            {
                name: "Writing",
                value: "writing"
            }
        ];
        this.ordersData = [
            { id: 1, name: 'sports' },
            { id: 2, name: 'music' },
            { id: 3, name: 'movie' },
            { id: 4, name: 'reading' }
        ];
        this.addresses = [];
        this.myselectedhobbies = ['sports', 'music'];
    }
    ngOnInit() {
        this.updateForm = this._formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: ['Male'],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            grade: [''],
            subjects: [this.SubjectsArray],
            profileImg: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            orders: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            addresses: this._formBuilder.array([this.createAddress()])
        });
        this.addCheckboxes();
        this.selectedId = this.data['_id'];
        //this.datePipe.transform(this.data['employeeBirthDate'],'MM/dd/yyyy')
        this.updateForm.patchValue({
            name: [this.data['employeeName']],
            email: [this.data['employeeEmail']],
            gender: [this.data['employeeGender']],
            dob: new Date(this.data['employeeBirthDate']).toISOString(),
            grade: this.data['grade'],
            profileImg: "",
            orders: [],
            addresses: [this.createAddress()]
        });
    }
    createAddress() {
        return this._formBuilder.group({
            address: '',
            street: '',
            city: '',
            country: ''
        });
    }
    addAddress() {
        this.addresses = this.updateForm.get('addresses');
        this.addresses.push(this.createAddress());
    }
    updateAddress() {
        this.addresses.forEach((o, i) => {
            let result = this.myselectedhobbies.includes(o.name);
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](result); // if first item set to true, else false
            this.updateForm.controls.orders.push(control);
        });
    }
    get addressControls() {
        return this.updateForm.get('addresses')['controls'];
    }
    addCheckboxes() {
        this.ordersData.forEach((o, i) => {
            let result = this.myselectedhobbies.includes(o.name);
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](result); // if first item set to true, else false
            this.updateForm.controls.orders.push(control);
        });
    }
    onNoClick() {
        console.log("@@@@@@@@@@@@@@");
        this.dialogRef.close();
    }
    onFileChange(event) {
        const file = (event.target).files[0];
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.imageURL = reader.result;
        };
        reader.readAsDataURL(file);
    }
    getSelectedHobbies() {
        const selectedOrderIds = this.updateForm.value.orders
            .map((v, i) => v ? this.ordersData[i].id : null)
            .filter(v => v !== null);
        console.log(selectedOrderIds);
    }
    submitUpdateForm() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.updateForm.invalid) {
            let msg = "Invalid Data";
            this.openSnackBar(msg);
            return;
        }
        else {
            this.ds.updateEmployee(this.updateForm.value, this.imageURL, this.selectedId).subscribe(data => {
                if (data['code'] == '00') {
                    let msg = "Save successfully";
                    this.openSnackBar(msg);
                }
                else {
                    alert('went wrong');
                }
            });
        }
    }
    openSnackBar(msg) {
        this._snackBar.openFromComponent(PizzaPartyComponent, {
            duration: 2 * 1000,
            verticalPosition: 'top',
            data: msg
        });
    }
};
DialogOverUpdateRecord.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
DialogOverUpdateRecord = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-overview-update-record.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-overview-update-record.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], DialogOverUpdateRecord);

let PizzaPartyComponent = class PizzaPartyComponent {
    constructor(data) {
        this.data = data;
    }
};
PizzaPartyComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MAT_SNACK_BAR_DATA"],] }] }
];
PizzaPartyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'snack-bar-component-example-snack',
        template: `<span class="example-pizza-party"> {{data}}</span>`,
        styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MAT_SNACK_BAR_DATA"]))
], PizzaPartyComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_intercept_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/intercept.service */ "./src/app/services/intercept.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./angular/material/material.module */ "./src/app/angular/material/material.module.ts");
/* harmony import */ var _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./project-list/project-list.component */ "./src/app/project-list/project-list.component.ts");
/* harmony import */ var _project_create_project_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./project-create/project-create.component */ "./src/app/project-create/project-create.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/ngx-loading/ngx-loading.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngmodule/material-carousel */ "./node_modules/@ngmodule/material-carousel/fesm2015/ngmodule-material-carousel.js");
/* harmony import */ var _lazymodule_lazymodule_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lazymodule/lazymodule.module */ "./src/app/lazymodule/lazymodule.module.ts");
/* harmony import */ var _project_update_project_update_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./project-update/project-update.component */ "./src/app/project-update/project-update.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! jw-angular-pagination */ "./node_modules/jw-angular-pagination/lib/jw-pagination.component.js");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(jw_angular_pagination__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/fesm2015/ngx-permissions.js");
/* harmony import */ var _testd_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./testd.directive */ "./src/app/testd.directive.ts");
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-skeleton-loader */ "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _test_test_component__WEBPACK_IMPORTED_MODULE_5__["TestComponent"],
            _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_12__["DialogOverviewExampleDialog"],
            _project_create_project_create_component__WEBPACK_IMPORTED_MODULE_13__["PizzaPartyComponent"],
            _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_12__["ProjectListComponent"],
            _project_create_project_create_component__WEBPACK_IMPORTED_MODULE_13__["ProjectCreateComponent"],
            _project_update_project_update_component__WEBPACK_IMPORTED_MODULE_19__["ProjectUpdateComponent"],
            _project_project_component__WEBPACK_IMPORTED_MODULE_20__["ProjectComponent"],
            jw_angular_pagination__WEBPACK_IMPORTED_MODULE_21__["JwPaginationComponent"],
            _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_12__["DialogOverUpdateRecord"],
            _testd_directive__WEBPACK_IMPORTED_MODULE_26__["TestdDirective"],
            _product_product_component__WEBPACK_IMPORTED_MODULE_28__["ProductComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _angular_material_material_module__WEBPACK_IMPORTED_MODULE_11__["DemoMaterialModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_14__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyBx5gLh4iP98j0xSwXpaXEFCMRYpwinqU0'
                /* apiKey is required, unless you are a
                premium customer, in which case you can
                use clientId
                */
            }), ngx_loading__WEBPACK_IMPORTED_MODULE_15__["NgxLoadingModule"].forRoot({}), _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_16__["ScrollingModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_17__["MatCarouselModule"],
            _lazymodule_lazymodule_module__WEBPACK_IMPORTED_MODULE_18__["LazymoduleModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_23__["FlexLayoutModule"],
            ngx_permissions__WEBPACK_IMPORTED_MODULE_25__["NgxPermissionsModule"].forRoot(),
            ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_27__["NgxSkeletonLoaderModule"]
        ],
        entryComponents: [
            _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_12__["DialogOverviewExampleDialog"], _project_create_project_create_component__WEBPACK_IMPORTED_MODULE_13__["PizzaPartyComponent"], _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_12__["DialogOverUpdateRecord"]
        ],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HTTP_INTERCEPTORS"],
                useClass: _services_intercept_service__WEBPACK_IMPORTED_MODULE_7__["InterceptService"],
                multi: true
            }, _data_service__WEBPACK_IMPORTED_MODULE_22__["DataService"], _angular_common__WEBPACK_IMPORTED_MODULE_24__["DatePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.localUrl = "http://localhost:6787/api/employee/addEmployee";
    }
    saveEmployee(data, imageURL) {
        //employeeName/employeeEmail/employeeGender/grade/subject
        const postData = {
            employeeName: data['name'],
            employeeEmail: data['email'],
            employeeGender: data['gender'],
            grade: data['grade'],
            employeeBirthDate: data['dob'],
            subject: JSON.stringify(data['subjects']),
            profileImg: imageURL,
            addresses: data['addresses']
        };
        return this.http.post(this.localUrl, postData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getEmployeeRecord() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'auth': 'aaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbccccccccccccccccc'
            })
        };
        return this.http.get("http://localhost:6787/api/employee/employeeList", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getEmployeeDetails(empId) {
        return this.http.get("http://localhost:6787/api/employee/employeeDetails/" + empId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getProductList() {
        return this.http.get("http://localhost:6787/api/product/productList").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    updateEmployee(data, imageURL, selectedId) {
        //employeeName/employeeEmail/employeeGender/grade/subject
        var imageArr;
        imageArr.push(imageURL);
        const postData = {
            employeeName: data['name'],
            employeeEmail: data['email'],
            employeeGender: data['gender'],
            grade: data['grade'],
            employeeBirthDate: data['dob'],
            subject: JSON.stringify(data['subjects']),
            profileImg: imageArr,
        };
        return this.http.post(this.localUrl, postData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteEmployeeRecord(empId) {
        return this.http.get("http://localhost:6787/api/employee/removeEmployee/" + empId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ "./src/app/lazymodule/component1/component1.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/lazymodule/component1/component1.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhenltb2R1bGUvY29tcG9uZW50MS9jb21wb25lbnQxLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/lazymodule/component1/component1.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/lazymodule/component1/component1.component.ts ***!
  \***************************************************************/
/*! exports provided: Component1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component1Component", function() { return Component1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Component1Component = class Component1Component {
    constructor() { }
    ngOnInit() {
    }
};
Component1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-component1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./component1.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lazymodule/component1/component1.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./component1.component.scss */ "./src/app/lazymodule/component1/component1.component.scss")).default]
    })
], Component1Component);



/***/ }),

/***/ "./src/app/lazymodule/component2/component2.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/lazymodule/component2/component2.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhenltb2R1bGUvY29tcG9uZW50Mi9jb21wb25lbnQyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/lazymodule/component2/component2.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/lazymodule/component2/component2.component.ts ***!
  \***************************************************************/
/*! exports provided: Component2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component2Component", function() { return Component2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Component2Component = class Component2Component {
    constructor() { }
    ngOnInit() {
    }
};
Component2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-component2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./component2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lazymodule/component2/component2.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./component2.component.scss */ "./src/app/lazymodule/component2/component2.component.scss")).default]
    })
], Component2Component);



/***/ }),

/***/ "./src/app/lazymodule/component3/component3.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/lazymodule/component3/component3.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xhenltb2R1bGUvY29tcG9uZW50My9jb21wb25lbnQzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/lazymodule/component3/component3.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/lazymodule/component3/component3.component.ts ***!
  \***************************************************************/
/*! exports provided: Component3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component3Component", function() { return Component3Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Component3Component = class Component3Component {
    constructor() { }
    ngOnInit() {
    }
};
Component3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-component3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./component3.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/lazymodule/component3/component3.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./component3.component.scss */ "./src/app/lazymodule/component3/component3.component.scss")).default]
    })
], Component3Component);



/***/ }),

/***/ "./src/app/lazymodule/lazymodule.module.ts":
/*!*************************************************!*\
  !*** ./src/app/lazymodule/lazymodule.module.ts ***!
  \*************************************************/
/*! exports provided: LazymoduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazymoduleModule", function() { return LazymoduleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _component1_component1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component1/component1.component */ "./src/app/lazymodule/component1/component1.component.ts");
/* harmony import */ var _component2_component2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component2/component2.component */ "./src/app/lazymodule/component2/component2.component.ts");
/* harmony import */ var _component3_component3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component3/component3.component */ "./src/app/lazymodule/component3/component3.component.ts");






const routes = [
    { path: '', component: _component1_component1_component__WEBPACK_IMPORTED_MODULE_3__["Component1Component"] },
    { path: 'component2', component: _component2_component2_component__WEBPACK_IMPORTED_MODULE_4__["Component2Component"] },
    { path: 'component3', component: _component3_component3_component__WEBPACK_IMPORTED_MODULE_5__["Component3Component"] },
];
let LazymoduleModule = class LazymoduleModule {
};
LazymoduleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_component1_component1_component__WEBPACK_IMPORTED_MODULE_3__["Component1Component"], _component2_component2_component__WEBPACK_IMPORTED_MODULE_4__["Component2Component"], _component3_component3_component__WEBPACK_IMPORTED_MODULE_5__["Component3Component"]],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]
    })
], LazymoduleModule);



/***/ }),

/***/ "./src/app/product/product.component.scss":
/*!************************************************!*\
  !*** ./src/app/product/product.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-card {\n  margin: 10px;\n  max-width: 300px;\n  float: left;\n}\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9FOlxcaW5jRGVtby9zcmNcXGFwcFxccHJvZHVjdFxccHJvZHVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsbUZBQUE7RUFDQSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICB9IiwiLmV4YW1wbGUtY2FyZCB7XG4gIG1hcmdpbjogMTBweDtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");






let ProductComponent = class ProductComponent {
    constructor(route, ds, _snackBar) {
        this.route = route;
        this.ds = ds;
        this._snackBar = _snackBar;
        this.productList = [];
    }
    ngOnInit() {
        this.getProductList();
    }
    getProductList() {
        this.loader = true;
        this.ds.getProductList().subscribe(data => {
            if (data['code'] == '00') {
                this.productList = data['result'];
                setTimeout(() => {
                    this.loader = false;
                }, 2000);
            }
        });
    }
};
ProductComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product.component.scss */ "./src/app/product/product.component.scss")).default]
    })
], ProductComponent);



/***/ }),

/***/ "./src/app/project-create/project-create.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/project-create/project-create.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir=rtl] .example-option-img {\n  margin-right: 0;\n  margin-left: 8px;\n}\n\n.example-card {\n  max-width: 600px;\n}\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\nhtml, body {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\nform {\n  width: 420px;\n  margin: 35px auto 100px;\n  display: block;\n  float: none;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.misc-bottom-padding {\n  margin: 8px 0 20px;\n}\n\n.misc-bottom-padding mat-label {\n  margin-right: 15px;\n}\n\n.mat-radio-label {\n  margin: 0 15px 0 0;\n}\n\n.title-center {\n  margin: 0 auto;\n}\n\n.button-wrapper {\n  margin-top: 10px;\n}\n\ncdk-virtual-scroll-viewport {\n  height: 500px;\n}\n\ntable {\n  width: 100%;\n}\n\n.fill-remaining-space {\n  /*This fills the remaining space, by using flexbox.  \n  Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1jcmVhdGUvRTpcXGluY0RlbW8vc3JjXFxhcHBcXHByb2plY3QtY3JlYXRlXFxwcm9qZWN0LWNyZWF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdC1jcmVhdGUvcHJvamVjdC1jcmVhdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtBQ0NKOztBREVFO0VBQ0Usc0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsbUZBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVFO0VBQVUsWUFBQTtBQ0VaOztBRERBO0VBQUssU0FBQTtFQUFTLGlEQUFBO0FDTWQ7O0FETEE7RUFBSyxZQUFBO0VBQVksdUJBQUE7RUFBdUIsY0FBQTtFQUFjLFdBQUE7QUNZdEQ7O0FEWEE7RUFBZ0IsV0FBQTtBQ2VoQjs7QURkQTtFQUFxQixrQkFBQTtBQ2tCckI7O0FEakJBO0VBQStCLGtCQUFBO0FDcUIvQjs7QURwQkE7RUFBaUIsa0JBQUE7QUN3QmpCOztBRHZCQTtFQUFjLGNBQUE7QUMyQmQ7O0FEMUJBO0VBQWdCLGdCQUFBO0FDOEJoQjs7QUQ1QkE7RUFDRSxhQUFBO0FDK0JGOztBRDdCQTtFQUFNLFdBQUE7QUNpQ047O0FEL0JBO0VBQ0U7Z0RBQUE7RUFFRCxjQUFBO0FDa0NEIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdC1jcmVhdGUvcHJvamVjdC1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLW9wdGlvbi1pbWcge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIH1cclxuICBcclxuICBbZGlyPSdydGwnXSAuZXhhbXBsZS1vcHRpb24taW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgfVxyXG5cclxuICBodG1sLGJvZHl7aGVpZ2h0OjEwMCU7fVxyXG5ib2R5e21hcmdpbjowO2ZvbnQtZmFtaWx5OlJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO31cclxuZm9ybXt3aWR0aDo0MjBweDttYXJnaW46MzVweCBhdXRvIDEwMHB4O2Rpc3BsYXk6YmxvY2s7ZmxvYXQ6bm9uZTt9XHJcbi5tYXQtZm9ybS1maWVsZHt3aWR0aDoxMDAlO31cclxuLm1pc2MtYm90dG9tLXBhZGRpbmd7bWFyZ2luOjhweCAwIDIwcHg7fVxyXG4ubWlzYy1ib3R0b20tcGFkZGluZyBtYXQtbGFiZWx7bWFyZ2luLXJpZ2h0OjE1cHg7fVxyXG4ubWF0LXJhZGlvLWxhYmVse21hcmdpbjowIDE1cHggMCAwO31cclxuLnRpdGxlLWNlbnRlcnttYXJnaW46MCBhdXRvO31cclxuLmJ1dHRvbi13cmFwcGVye21hcmdpbi10b3A6MTBweDt9XHJcblxyXG5jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQge1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbn1cclxudGFibGV7d2lkdGg6MTAwJX1cclxuXHJcbi5maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgLypUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guICBcclxuIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXHJcbiBmbGV4OiAxIDEgYXV0bztcclxufSIsIi5leGFtcGxlLWZvcm0ge1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1vcHRpb24taW1nIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbltkaXI9cnRsXSAuZXhhbXBsZS1vcHRpb24taW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuaHRtbCwgYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5mb3JtIHtcbiAgd2lkdGg6IDQyMHB4O1xuICBtYXJnaW46IDM1cHggYXV0byAxMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBub25lO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1pc2MtYm90dG9tLXBhZGRpbmcge1xuICBtYXJnaW46IDhweCAwIDIwcHg7XG59XG5cbi5taXNjLWJvdHRvbS1wYWRkaW5nIG1hdC1sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLm1hdC1yYWRpby1sYWJlbCB7XG4gIG1hcmdpbjogMCAxNXB4IDAgMDtcbn1cblxuLnRpdGxlLWNlbnRlciB7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uYnV0dG9uLXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQge1xuICBoZWlnaHQ6IDUwMHB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKlRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC4gIFxuICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICBmbGV4OiAxIDEgYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/project-create/project-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/project-create/project-create.component.ts ***!
  \************************************************************/
/*! exports provided: ProjectCreateComponent, DialogOverviewExampleDialog, DialogOverUpdateRecord, PizzaPartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCreateComponent", function() { return ProjectCreateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverUpdateRecord", function() { return DialogOverUpdateRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaPartyComponent", function() { return PizzaPartyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/fesm2015/ngx-permissions.js");












;
let ProjectCreateComponent = class ProjectCreateComponent {
    constructor(dialog, _formBuilder, _snackBar, ds, permissionsService) {
        this.dialog = dialog;
        this._formBuilder = _formBuilder;
        this._snackBar = _snackBar;
        this.ds = ds;
        this.permissionsService = permissionsService;
        this.title = 'incDemo';
        this.isLinear = false;
        this.durationInSeconds = 5;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.GradeArray = ['8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
        this.SubjectsArray = [];
        this.latitude = -28.68352;
        this.longitude = -147.20785;
        this.mapType = 'satellite';
        this.loading = false;
        this.tableData = [];
        this.today = Date.now();
        this.items = [];
        this.imgViewPath = "file:///E:/incDemo/images/1578287882506.png";
        this.fruits = ['Lemon'];
        this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.addresses = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.displayedColumns = ['Name', 'Email', 'Gender', 'Birth Date', 'Grade', 'Profile Photo', 'Action'];
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((new Date()).toISOString());
        this.Countries = [
            { name: 'Germany', states: [{ name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] }] },
            { name: 'Spain', states: [{ name: 'B', cities: ['Barcelona'] }] },
            { name: 'USA', states: [{ name: 'C', cities: ['Downers Grove'] }] },
            { name: 'Mexico', states: [{ name: 'D', cities: ['Puebla'] }] },
            { name: 'India', states: [{ name: 'E', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore'] }] },
        ];
        this.selectedCountry = "--Choose Country--";
        /* Handle form errors in Angular 8 */
        this.errorHandling = (control, error) => {
            return this.myForm.controls[control].hasError(error);
        };
    }
    openDialog(empId) {
        this.ds.getEmployeeDetails(empId).subscribe(data => {
            if (data['code'] == '00') {
                this.loading = false;
                const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
                    width: '600px',
                    data: data['result'][0]
                });
                dialogRef.afterClosed().subscribe(result => {
                    console.log('The dialog was closed');
                    this.animal = result;
                });
            }
        });
    }
    openDialogForUpdateRecord(empId) {
        this.ds.getEmployeeDetails(empId).subscribe(data => {
            if (data['code'] == '00') {
                this.loading = false;
                const dialogRef = this.dialog.open(DialogOverUpdateRecord, {
                    width: '600px',
                    data: data['result'][0]
                });
                dialogRef.afterClosed().subscribe(result => {
                    console.log('The dialog was closed');
                    this.animal = result;
                });
            }
        });
    }
    openSnackBar(msg) {
        this._snackBar.openFromComponent(PizzaPartyComponent, {
            duration: 2 * 1000,
            verticalPosition: 'top',
            data: msg
        });
    }
    ngOnInit() {
        //this.permissionsService.loadPermissions(perm);
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.reactiveForm();
        this.emplyeeList();
    }
    get f() { return this.myForm.controls; }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    emplyeeList() {
        this.loading = true;
        this.ds.getEmployeeRecord().subscribe(data => {
            if (data['code'] == '00') {
                this.dataSource.data = data['result'];
                this.loading = false;
            }
        }, err => {
            console.log(err);
            let msg = "Sever not Responding";
            this.openSnackBar(msg);
        });
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    onChangePage(pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
    /* Reactive form */
    reactiveForm() {
        this.myForm = this._formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z \-\']+')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)]],
            gender: ['Male'],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            grade: [''],
            subjects: [this.SubjectsArray],
            profileImg: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue],
            addresses: this._formBuilder.array([this.createAddress()]),
            selectedCity: [],
            selectedState: [],
            selectedCountry: []
            // this._formBuilder.control('')
        });
    }
    createAddress() {
        return this._formBuilder.group({
            address: '',
            street: '',
            city: '',
            country: ''
        });
    }
    changeCountry(country) {
        this.states = this.Countries.find(cntry => cntry.name == country).states;
    }
    changeState(state) {
        this.cities = this.Countries.find(cntry => cntry.name == this.myForm.get('selectedCountry').value).states.find(stat => stat.name == state).cities;
    }
    addAddress() {
        this.addresses = this.myForm.get('addresses');
        this.addresses.push(this.createAddress());
    }
    get addressControls() {
        return this.myForm.get('addresses')['controls'];
    }
    deleteEmployeeRecord(empid) {
        this.ds.deleteEmployeeRecord(empid).subscribe(data => {
            if (data['code'] == '00') {
                let msg = "Remove Successfully";
                this.openSnackBar(msg);
                this.emplyeeList();
            }
            else {
                alert('went wrong');
            }
        });
    }
    onFileChange(event) {
        const file = event.target.files[0];
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.imageURL = reader.result;
        };
        reader.readAsDataURL(file);
    }
    /* Date */
    date(e) {
        var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
        this.myForm.get('dob').setValue(convertDate, {
            onlyself: true
        });
    }
    submitForm() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.myForm.invalid) {
            let msg = "Invalid Data";
            this.openSnackBar(msg);
            return;
        }
        else {
            this.ds.saveEmployee(this.myForm.value, this.imageURL).subscribe(data => {
                if (data['code'] == '00') {
                    let msg = "Save successfully";
                    this.openSnackBar(msg);
                    this.emplyeeList();
                }
                else {
                    alert('went wrong');
                }
            });
        }
    }
    /* Add dynamic languages */
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add language
        if ((value || '').trim() && this.SubjectsArray.length < 5) {
            this.SubjectsArray.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    /* Remove dynamic languages */
    remove(subject) {
        const index = this.SubjectsArray.indexOf(subject);
        if (index >= 0) {
            this.SubjectsArray.splice(index, 1);
        }
    }
};
ProjectCreateComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true })
], ProjectCreateComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true })
], ProjectCreateComponent.prototype, "sort", void 0);
ProjectCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-create/project-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-create.component.scss */ "./src/app/project-create/project-create.component.scss")).default]
    })
], ProjectCreateComponent);

let DialogOverviewExampleDialog = class DialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ['Name', 'Value'];
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
DialogOverviewExampleDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
DialogOverviewExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-overview-example-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-create/dialog-overview-example-dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], DialogOverviewExampleDialog);

let DialogOverUpdateRecord = class DialogOverUpdateRecord {
    constructor(dialogRef, data, _formBuilder, datePipe, ds, _snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._formBuilder = _formBuilder;
        this.datePipe = datePipe;
        this.ds = ds;
        this._snackBar = _snackBar;
        this.displayedColumns = ['Name', 'Value'];
        this.GradeArray = ['8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
        this.SubjectsArray = [];
        this.myhobbies = [
            {
                name: "Sports",
                value: "sports"
            },
            {
                name: "Music",
                value: "music"
            },
            {
                name: "Movie",
                value: "movie"
            },
            {
                name: "Reading",
                value: "reading"
            },
            {
                name: "Writing",
                value: "writing"
            }
        ];
        this.ordersData = [
            { id: 1, name: 'sports' },
            { id: 2, name: 'music' },
            { id: 3, name: 'movie' },
            { id: 4, name: 'reading' }
        ];
        this.addresses = [];
        this.myselectedhobbies = ['sports', 'music'];
    }
    ngOnInit() {
        this.updateForm = this._formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: ['Male'],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            grade: [''],
            subjects: [this.SubjectsArray],
            profileImg: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            orders: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            addresses: this._formBuilder.array([this.createAddress()])
        });
        this.addCheckboxes();
        this.selectedId = this.data['_id'];
        //this.datePipe.transform(this.data['employeeBirthDate'],'MM/dd/yyyy')
        this.updateForm.patchValue({
            name: [this.data['employeeName']],
            email: [this.data['employeeEmail']],
            gender: [this.data['employeeGender']],
            dob: new Date(this.data['employeeBirthDate']).toISOString(),
            grade: this.data['grade'],
            profileImg: "",
            orders: [],
            addresses: [this.createAddress()]
        });
    }
    // selectedCountry: String = "--Choose Country--";
    createAddress() {
        return this._formBuilder.group({
            address: '',
            street: '',
            city: '',
            country: ''
        });
    }
    addAddress() {
        this.addresses = this.updateForm.get('addresses');
        this.addresses.push(this.createAddress());
    }
    updateAddress() {
        this.addresses.forEach((o, i) => {
            let result = this.myselectedhobbies.includes(o.name);
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](result); // if first item set to true, else false
            this.updateForm.controls.orders.push(control);
        });
    }
    get addressControls() {
        return this.updateForm.get('addresses')['controls'];
    }
    addCheckboxes() {
        this.ordersData.forEach((o, i) => {
            let result = this.myselectedhobbies.includes(o.name);
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](result); // if first item set to true, else false
            this.updateForm.controls.orders.push(control);
        });
    }
    onNoClick() {
        console.log("@@@@@@@@@@@@@@");
        this.dialogRef.close();
    }
    onFileChange(event) {
        const file = (event.target).files[0];
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.imageURL = reader.result;
        };
        reader.readAsDataURL(file);
    }
    getSelectedHobbies() {
        const selectedOrderIds = this.updateForm.value.orders
            .map((v, i) => v ? this.ordersData[i].id : null)
            .filter(v => v !== null);
        console.log(selectedOrderIds);
    }
    submitUpdateForm() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.updateForm.invalid) {
            let msg = "Invalid Data";
            this.openSnackBar(msg);
            return;
        }
        else {
            this.ds.updateEmployee(this.updateForm.value, this.imageURL, this.selectedId).subscribe(data => {
                if (data['code'] == '00') {
                    let msg = "Save successfully";
                    this.openSnackBar(msg);
                }
                else {
                    alert('went wrong');
                }
            });
        }
    }
    openSnackBar(msg) {
        this._snackBar.openFromComponent(PizzaPartyComponent, {
            duration: 2 * 1000,
            verticalPosition: 'top',
            data: msg
        });
    }
};
DialogOverUpdateRecord.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
DialogOverUpdateRecord = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-overview-update-record.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-create/dialog-overview-update-record.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], DialogOverUpdateRecord);

let PizzaPartyComponent = class PizzaPartyComponent {
    constructor(data) {
        this.data = data;
    }
};
PizzaPartyComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MAT_SNACK_BAR_DATA"],] }] }
];
PizzaPartyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'snack-bar-component-example-snack',
        template: `<span class="example-pizza-party"> {{data}}</span>`,
        styles: ["\n      .example-pizza-party {\n        color: hotpink;\n      }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MAT_SNACK_BAR_DATA"]))
], PizzaPartyComponent);



/***/ }),

/***/ "./src/app/project-list/project-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/project-list/project-list.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-option-img {\n  vertical-align: middle;\n  margin-right: 8px;\n}\n\n[dir=rtl] .example-option-img {\n  margin-right: 0;\n  margin-left: 8px;\n}\n\n.example-card {\n  max-width: 600px;\n}\n\n.example-header-image {\n  background-image: url(\"https://material.angular.io/assets/img/examples/shiba1.jpg\");\n  background-size: cover;\n}\n\nhtml, body {\n  height: 100%;\n}\n\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\nform {\n  width: 420px;\n  margin: 35px auto 100px;\n  display: block;\n  float: none;\n}\n\n.mat-form-field {\n  width: 100%;\n}\n\n.misc-bottom-padding {\n  margin: 8px 0 20px;\n}\n\n.misc-bottom-padding mat-label {\n  margin-right: 15px;\n}\n\n.mat-radio-label {\n  margin: 0 15px 0 0;\n}\n\n.title-center {\n  margin: 0 auto;\n}\n\n.button-wrapper {\n  margin-top: 10px;\n}\n\ncdk-virtual-scroll-viewport {\n  height: 500px;\n}\n\ntable {\n  width: 100%;\n}\n\n.fill-remaining-space {\n  /*This fills the remaining space, by using flexbox.  \n  Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC1saXN0L0U6XFxpbmNEZW1vL3NyY1xcYXBwXFxwcm9qZWN0LWxpc3RcXHByb2plY3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdC1saXN0L3Byb2plY3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0FDQ0o7O0FERUU7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxtRkFBQTtFQUNBLHNCQUFBO0FDQ0o7O0FERUU7RUFBVSxZQUFBO0FDRVo7O0FEREE7RUFBSyxTQUFBO0VBQVMsaURBQUE7QUNNZDs7QURMQTtFQUFLLFlBQUE7RUFBWSx1QkFBQTtFQUF1QixjQUFBO0VBQWMsV0FBQTtBQ1l0RDs7QURYQTtFQUFnQixXQUFBO0FDZWhCOztBRGRBO0VBQXFCLGtCQUFBO0FDa0JyQjs7QURqQkE7RUFBK0Isa0JBQUE7QUNxQi9COztBRHBCQTtFQUFpQixrQkFBQTtBQ3dCakI7O0FEdkJBO0VBQWMsY0FBQTtBQzJCZDs7QUQxQkE7RUFBZ0IsZ0JBQUE7QUM4QmhCOztBRDVCQTtFQUNFLGFBQUE7QUMrQkY7O0FEN0JBO0VBQU0sV0FBQTtBQ2lDTjs7QUQvQkE7RUFDRTtnREFBQTtFQUVELGNBQUE7QUNrQ0QiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0LWxpc3QvcHJvamVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1vcHRpb24taW1nIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICB9XHJcbiAgXHJcbiAgW2Rpcj0ncnRsJ10gLmV4YW1wbGUtb3B0aW9uLWltZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgaHRtbCxib2R5e2hlaWdodDoxMDAlO31cclxuYm9keXttYXJnaW46MDtmb250LWZhbWlseTpSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjt9XHJcbmZvcm17d2lkdGg6NDIwcHg7bWFyZ2luOjM1cHggYXV0byAxMDBweDtkaXNwbGF5OmJsb2NrO2Zsb2F0Om5vbmU7fVxyXG4ubWF0LWZvcm0tZmllbGR7d2lkdGg6MTAwJTt9XHJcbi5taXNjLWJvdHRvbS1wYWRkaW5ne21hcmdpbjo4cHggMCAyMHB4O31cclxuLm1pc2MtYm90dG9tLXBhZGRpbmcgbWF0LWxhYmVse21hcmdpbi1yaWdodDoxNXB4O31cclxuLm1hdC1yYWRpby1sYWJlbHttYXJnaW46MCAxNXB4IDAgMDt9XHJcbi50aXRsZS1jZW50ZXJ7bWFyZ2luOjAgYXV0bzt9XHJcbi5idXR0b24td3JhcHBlcnttYXJnaW4tdG9wOjEwcHg7fVxyXG5cclxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbnRhYmxle3dpZHRoOjEwMCV9XHJcblxyXG4uZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gIC8qVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiAgXHJcbiBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xyXG4gZmxleDogMSAxIGF1dG87XHJcbn0iLCIuZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtb3B0aW9uLWltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG5bZGlyPXJ0bF0gLmV4YW1wbGUtb3B0aW9uLWltZyB7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmV4YW1wbGUtY2FyZCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG5cbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuZm9ybSB7XG4gIHdpZHRoOiA0MjBweDtcbiAgbWFyZ2luOiAzNXB4IGF1dG8gMTAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbm9uZTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5taXNjLWJvdHRvbS1wYWRkaW5nIHtcbiAgbWFyZ2luOiA4cHggMCAyMHB4O1xufVxuXG4ubWlzYy1ib3R0b20tcGFkZGluZyBtYXQtbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5tYXQtcmFkaW8tbGFiZWwge1xuICBtYXJnaW46IDAgMTVweCAwIDA7XG59XG5cbi50aXRsZS1jZW50ZXIge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLmJ1dHRvbi13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgaGVpZ2h0OiA1MDBweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgLypUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guICBcbiAgRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC4gKi9cbiAgZmxleDogMSAxIGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/project-list/project-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/project-list/project-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectListComponent, DialogOverviewExampleDialog, DialogOverUpdateRecord, PizzaPartyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function() { return ProjectListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewExampleDialog", function() { return DialogOverviewExampleDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverUpdateRecord", function() { return DialogOverUpdateRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaPartyComponent", function() { return PizzaPartyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-permissions */ "./node_modules/ngx-permissions/fesm2015/ngx-permissions.js");












;
let ProjectListComponent = class ProjectListComponent {
    constructor(dialog, _formBuilder, _snackBar, ds, permissionsService) {
        this.dialog = dialog;
        this._formBuilder = _formBuilder;
        this._snackBar = _snackBar;
        this.ds = ds;
        this.permissionsService = permissionsService;
        this.title = 'incDemo';
        this.isLinear = false;
        this.durationInSeconds = 5;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.GradeArray = ['8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
        this.SubjectsArray = [];
        this.latitude = -28.68352;
        this.longitude = -147.20785;
        this.mapType = 'satellite';
        this.loading = false;
        this.tableData = [];
        this.today = Date.now();
        this.items = [];
        this.imgViewPath = "file:///E:/incDemo/images/1578287882506.png";
        this.fruits = ['Lemon'];
        this.allFruits = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.addresses = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
        this.displayedColumns = ['Name', 'Email', 'Gender', 'Action'];
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]((new Date()).toISOString());
        /* Handle form errors in Angular 8 */
        this.errorHandling = (control, error) => {
            return this.myForm.controls[control].hasError(error);
        };
    }
    openDialog(empId) {
        this.ds.getEmployeeDetails(empId).subscribe(data => {
            if (data['code'] == '00') {
                this.loading = false;
                const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
                    width: '600px',
                    data: data['result'][0]
                });
                dialogRef.afterClosed().subscribe(result => {
                    console.log('The dialog was closed');
                    this.animal = result;
                });
            }
        });
    }
    openDialogForUpdateRecord(empId) {
        this.ds.getEmployeeDetails(empId).subscribe(data => {
            if (data['code'] == '00') {
                this.loading = false;
                const dialogRef = this.dialog.open(DialogOverUpdateRecord, {
                    width: '600px',
                    data: data['result'][0]
                });
                dialogRef.afterClosed().subscribe(result => {
                    console.log('The dialog was closed');
                    this.animal = result;
                });
            }
        });
    }
    openSnackBar(msg) {
        this._snackBar.openFromComponent(PizzaPartyComponent, {
            duration: 2 * 1000,
            verticalPosition: 'top',
            data: msg
        });
    }
    ngOnInit() {
        //this.permissionsService.loadPermissions(perm);
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.reactiveForm();
        this.emplyeeList();
    }
    get f() { return this.myForm.controls; }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    emplyeeList() {
        this.loading = true;
        this.ds.getEmployeeRecord().subscribe(data => {
            if (data['code'] == '00') {
                this.dataSource.data = data['result'];
                this.loading = false;
            }
        }, err => {
            console.log(err);
            let msg = "Sever not Responding";
            this.openSnackBar(msg);
        });
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    onChangePage(pageOfItems) {
        // update current page of items
        this.pageOfItems = pageOfItems;
    }
    /* Reactive form */
    reactiveForm() {
        this.myForm = this._formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z \-\']+')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailPattern)]],
            gender: ['Male'],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            grade: [''],
            subjects: [this.SubjectsArray],
            profileImg: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue],
            addresses: this._formBuilder.array([this.createAddress()])
            // this._formBuilder.control('')
        });
    }
    createAddress() {
        return this._formBuilder.group({
            address: '',
            street: '',
            city: '',
            country: ''
        });
    }
    addAddress() {
        this.addresses = this.myForm.get('addresses');
        this.addresses.push(this.createAddress());
    }
    get addressControls() {
        return this.myForm.get('addresses')['controls'];
    }
    deleteEmployeeRecord(empid) {
        this.ds.deleteEmployeeRecord(empid).subscribe(data => {
            if (data['code'] == '00') {
                let msg = "Remove Successfully";
                this.openSnackBar(msg);
                this.emplyeeList();
            }
            else {
                alert('went wrong');
            }
        });
    }
    onFileChange(event) {
        const file = event.target.files[0];
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.imageURL = reader.result;
        };
        reader.readAsDataURL(file);
    }
    /* Date */
    date(e) {
        var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
        this.myForm.get('dob').setValue(convertDate, {
            onlyself: true
        });
    }
    submitForm() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.myForm.invalid) {
            let msg = "Invalid Data";
            this.openSnackBar(msg);
            return;
        }
        else {
            this.ds.saveEmployee(this.myForm.value, this.imageURL).subscribe(data => {
                if (data['code'] == '00') {
                    let msg = "Save successfully";
                    this.openSnackBar(msg);
                    this.emplyeeList();
                }
                else {
                    alert('went wrong');
                }
            });
        }
    }
    /* Add dynamic languages */
    add(event) {
        const input = event.input;
        const value = event.value;
        // Add language
        if ((value || '').trim() && this.SubjectsArray.length < 5) {
            this.SubjectsArray.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    /* Remove dynamic languages */
    remove(subject) {
        const index = this.SubjectsArray.indexOf(subject);
        if (index >= 0) {
            this.SubjectsArray.splice(index, 1);
        }
    }
};
ProjectListComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: ngx_permissions__WEBPACK_IMPORTED_MODULE_8__["NgxPermissionsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], { static: true })
], ProjectListComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true })
], ProjectListComponent.prototype, "sort", void 0);
ProjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-list/project-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-list.component.scss */ "./src/app/project-list/project-list.component.scss")).default]
    })
], ProjectListComponent);

let DialogOverviewExampleDialog = class DialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = ['Name', 'Value'];
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
DialogOverviewExampleDialog.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] }
];
DialogOverviewExampleDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-overview-example-dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-list/dialog-overview-example-dialog.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], DialogOverviewExampleDialog);

let DialogOverUpdateRecord = class DialogOverUpdateRecord {
    constructor(dialogRef, data, _formBuilder, datePipe, ds, _snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._formBuilder = _formBuilder;
        this.datePipe = datePipe;
        this.ds = ds;
        this._snackBar = _snackBar;
        this.displayedColumns = ['Name', 'Value'];
        this.GradeArray = ['8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
        this.SubjectsArray = [];
        this.myhobbies = [
            {
                name: "Sports",
                value: "sports"
            },
            {
                name: "Music",
                value: "music"
            },
            {
                name: "Movie",
                value: "movie"
            },
            {
                name: "Reading",
                value: "reading"
            },
            {
                name: "Writing",
                value: "writing"
            }
        ];
        this.ordersData = [
            { id: 1, name: 'sports' },
            { id: 2, name: 'music' },
            { id: 3, name: 'movie' },
            { id: 4, name: 'reading' }
        ];
        this.addresses = [];
        this.myselectedhobbies = ['sports', 'music'];
    }
    ngOnInit() {
        this.updateForm = this._formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            gender: ['Male'],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            grade: [''],
            subjects: [this.SubjectsArray],
            profileImg: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            orders: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            addresses: this._formBuilder.array([this.createAddress()])
        });
        this.addCheckboxes();
        this.selectedId = this.data['_id'];
        //this.datePipe.transform(this.data['employeeBirthDate'],'MM/dd/yyyy')
        this.updateForm.patchValue({
            name: [this.data['employeeName']],
            email: [this.data['employeeEmail']],
            gender: [this.data['employeeGender']],
            dob: new Date(this.data['employeeBirthDate']).toISOString(),
            grade: this.data['grade'],
            profileImg: "",
            orders: [],
            addresses: [this.createAddress()]
        });
    }
    createAddress() {
        return this._formBuilder.group({
            address: '',
            street: '',
            city: '',
            country: ''
        });
    }
    addAddress() {
        this.addresses = this.updateForm.get('addresses');
        this.addresses.push(this.createAddress());
    }
    updateAddress() {
        this.addresses.forEach((o, i) => {
            let result = this.myselectedhobbies.includes(o.name);
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](result); // if first item set to true, else false
            this.updateForm.controls.orders.push(control);
        });
    }
    get addressControls() {
        return this.updateForm.get('addresses')['controls'];
    }
    addCheckboxes() {
        this.ordersData.forEach((o, i) => {
            let result = this.myselectedhobbies.includes(o.name);
            const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](result); // if first item set to true, else false
            this.updateForm.controls.orders.push(control);
        });
    }
    onNoClick() {
        console.log("@@@@@@@@@@@@@@");
        this.dialogRef.close();
    }
    onFileChange(event) {
        const file = (event.target).files[0];
        // File Preview
        const reader = new FileReader();
        reader.onload = () => {
            this.imageURL = reader.result;
        };
        reader.readAsDataURL(file);
    }
    getSelectedHobbies() {
        const selectedOrderIds = this.updateForm.value.orders
            .map((v, i) => v ? this.ordersData[i].id : null)
            .filter(v => v !== null);
        console.log(selectedOrderIds);
    }
    submitUpdateForm() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.updateForm.invalid) {
            let msg = "Invalid Data";
            this.openSnackBar(msg);
            return;
        }
        else {
            this.ds.updateEmployee(this.updateForm.value, this.imageURL, this.selectedId).subscribe(data => {
                if (data['code'] == '00') {
                    let msg = "Save successfully";
                    this.openSnackBar(msg);
                }
                else {
                    alert('went wrong');
                }
            });
        }
    }
    openSnackBar(msg) {
        this._snackBar.openFromComponent(PizzaPartyComponent, {
            duration: 2 * 1000,
            verticalPosition: 'top',
            data: msg
        });
    }
};
DialogOverUpdateRecord.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
DialogOverUpdateRecord = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dialog-overview-example-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-overview-update-record.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-list/dialog-overview-update-record.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], DialogOverUpdateRecord);

let PizzaPartyComponent = class PizzaPartyComponent {
    constructor(data) {
        this.data = data;
    }
};
PizzaPartyComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MAT_SNACK_BAR_DATA"],] }] }
];
PizzaPartyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'snack-bar-component-example-snack',
        template: `<span class="example-pizza-party"> {{data}}</span>`,
        styles: ["\n      .example-pizza-party {\n        color: hotpink;\n      }\n    "]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MAT_SNACK_BAR_DATA"]))
], PizzaPartyComponent);



/***/ }),

/***/ "./src/app/project-update/project-update.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/project-update/project-update.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QtdXBkYXRlL3Byb2plY3QtdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/project-update/project-update.component.ts":
/*!************************************************************!*\
  !*** ./src/app/project-update/project-update.component.ts ***!
  \************************************************************/
/*! exports provided: ProjectUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectUpdateComponent", function() { return ProjectUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectUpdateComponent = class ProjectUpdateComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProjectUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-update',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project-update/project-update.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-update.component.scss */ "./src/app/project-update/project-update.component.scss")).default]
    })
], ProjectUpdateComponent);



/***/ }),

/***/ "./src/app/project/project.component.scss":
/*!************************************************!*\
  !*** ./src/app/project/project.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");





let ProjectComponent = class ProjectComponent {
    constructor(route, ds) {
        this.route = route;
        this.ds = ds;
    }
    ngOnInit() {
        this.loader = true;
        this.route.queryParams
            .filter(params => params.userId)
            .subscribe(params => {
            this.userId = params.userId;
        });
        if (this.userId) {
            this.ds.getEmployeeDetails(this.userId).subscribe(data => {
                if (data['code'] == '00') {
                    this.userDetails = data['result'][0];
                    setTimeout(() => {
                        this.loader = false;
                    }, 2000);
                }
            });
        }
    }
};
ProjectComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project.component.scss */ "./src/app/project/project.component.scss")).default]
    })
], ProjectComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.endpoint = "http://localhost:6786/api/";
    }
    categoryList(product) {
        return this.http.get('http://localhost:6786/api/product/categoryList').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((product) => console.log(`added product w/ id=${1}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addProduct')));
    }
    uploadphoto(product) {
        return this.http.post('http://localhost:6786/api/product/uploadProductImages', { imageURL1: product, productId: 1 }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((product) => console.log(`added product w/ id=${1}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('addProduct')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            //  console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //  console.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/intercept.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/intercept.service.ts ***!
  \***********************************************/
/*! exports provided: InterceptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptService", function() { return InterceptService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let InterceptService = class InterceptService {
    constructor(authService) {
        this.authService = authService;
    }
    // intercept request and add token
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer AZASACADAAAFAFAFAAGAGAHAH`
            }
        });
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(event => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                console.log(" all looks good");
                // http response status code
                console.log(event.status);
            }
        }, error => {
            // http response status code
            console.log("----response----");
            console.error("status code:");
            console.error(error.status);
            console.error(error.message);
            console.log("--- end of response---");
        }));
    }
    ;
};
InterceptService.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
InterceptService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])() //{providedIn: 'root'}
], InterceptService);



/***/ }),

/***/ "./src/app/test/test.component.scss":
/*!******************************************!*\
  !*** ./src/app/test/test.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestComponent = class TestComponent {
    constructor() { }
    ngOnInit() {
    }
};
TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/test/test.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test.component.scss */ "./src/app/test/test.component.scss")).default]
    })
], TestComponent);



/***/ }),

/***/ "./src/app/testd.directive.ts":
/*!************************************!*\
  !*** ./src/app/testd.directive.ts ***!
  \************************************/
/*! exports provided: TestdDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestdDirective", function() { return TestdDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TestdDirective = class TestdDirective {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    onMouseOver() {
        let part = this.el.nativeElement.querySelector('.mat-button');
        console.log(part);
        this.renderer.setElementStyle(part, 'color', 'red');
    }
};
TestdDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseover')
], TestdDirective.prototype, "onMouseOver", null);
TestdDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appTestd]'
    })
], TestdDirective);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\incDemo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map