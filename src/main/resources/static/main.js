(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bismarck/Documentos/Proyectos Angular/KamAnalysis-client/src/main.ts */"zUnb");


/***/ }),

/***/ "1//4":
/*!********************************!*\
  !*** ./src/app/gap.service.ts ***!
  \********************************/
/*! exports provided: GapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GapService", function() { return GapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");





class GapService {
    constructor(http) {
        this.http = http;
        this.gapUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url + "gap";
    }
    addGap(gap) {
        const httpOptions = this.configHeader();
        return this.http.post(this.gapUrl, gap, httpOptions);
    }
    getGaps(page, size) {
        let url = `${this.gapUrl}?page=${page}&size=${size}`;
        return this.http.get(url);
    }
    deleteGap(id) {
        const httpOptions = this.configHeader();
        return this.http.delete(`${this.gapUrl}/${id}`, httpOptions);
    }
    configHeader() {
        const CSRF_TOKEN = document.cookie.match(new RegExp(`XSRF-TOKEN=([^;]+)`))[1];
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': CSRF_TOKEN
            })
        };
        return httpOptions;
    }
}
GapService.ɵfac = function GapService_Factory(t) { return new (t || GapService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
GapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GapService, factory: GapService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GapService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "4QAB":
/*!****************************************************!*\
  !*** ./src/app/statistics/statistics.component.ts ***!
  \****************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _gap_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gap.service */ "1//4");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function StatisticsComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.gapError);
} }
function StatisticsComponent_tr_33_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StatisticsComponent_tr_33_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const gap_r3 = ctx.$implicit; const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.deleteGap(gap_r3.id, i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gap_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@gapAnimation", ctx_r1.animationList);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 4, gap_r3.dateSelected, "d MMM, y"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", gap_r3.gapClose, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r1.isAuthenticated());
} }
function StatisticsComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StatisticsComponent_div_35_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.onChangePage(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "u");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menu_r7, " ");
} }
function StatisticsComponent_div_35_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StatisticsComponent_div_35_ng_template_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.onChangePage(i_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", menu_r7, " ");
} }
function StatisticsComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StatisticsComponent_div_35_div_1_Template, 4, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StatisticsComponent_div_35_ng_template_2_Template, 2, 1, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.index;
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.page == i_r8)("ngIfElse", _r10);
} }
class StatisticsComponent {
    constructor(formBuilder, gapService, auth) {
        this.formBuilder = formBuilder;
        this.gapService = gapService;
        this.auth = auth;
        this.percentage = 0;
        this.gapError = null;
        this.menuDisplay = [];
        this.page = 0;
        this.animationList = null;
        this.isAuthenticate = false;
        const dateLength = 10;
        let todayDate = new Date().toISOString().substring(0, dateLength);
        this.checkoutForm = this.formBuilder.group({
            gapClose: ['No', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateSelected: [todayDate, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        this.getGaps(this.page);
        this.isAuthenticated();
        console.log("Esta autorizado ", this.isAuthenticate);
    }
    isAuthenticated() {
        return this.isAuthenticate = this.auth.authenticated();
    }
    onChangePage(i) {
        this.animationList = null;
        this.page = i;
        this.getGaps(i);
    }
    getMenuGaps(totalPages) {
        this.menuDisplay = [];
        for (let index = 0; index < totalPages; index++) {
            this.menuDisplay.push(index + 1);
        }
    }
    deleteGap(id, index) {
        this.gapError = null;
        this.animationList = "delete";
        this.gapService.deleteGap(id).subscribe(() => {
            this.gapHistory.splice(index, 1);
        });
    }
    addGap() {
        this.gapError = null;
        this.animationList = "add";
        let gap = this.checkoutForm.value;
        this.gapService.addGap(gap).subscribe(newGap => {
            this.checkoutForm.reset();
            this.updatePercentage();
            this.gapHistory.unshift(newGap);
        }, (error) => {
            console.log("El error es: ", error.status);
            if (error.status === 401) {
                this.gapError = "Usuario no autorizado";
            }
            else {
                if (error.status === 302) {
                    this.gapError = "Fecha duplicada";
                }
            }
            this.checkoutForm.reset();
        });
    }
    getGaps(pageSelect) {
        let size = 20;
        this.gapService.getGaps(pageSelect, size).subscribe((gaps) => {
            this.gapHistory = gaps.content;
            let totalPages = gaps.totalPages;
            this.updatePercentage();
            this.getMenuGaps(totalPages);
        });
    }
    updatePercentage() {
        let total = 0;
        let gapclose = 0;
        this.gapHistory.forEach(gap => {
            if (gap.gapClose == 'Si') {
                gapclose++;
                total++;
            }
            else {
                total++;
            }
            this.percentage = gapclose / total;
        });
    }
}
StatisticsComponent.ɵfac = function StatisticsComponent_Factory(t) { return new (t || StatisticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_gap_service__WEBPACK_IMPORTED_MODULE_3__["GapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
StatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StatisticsComponent, selectors: [["app-statistics"]], decls: 36, vars: 10, consts: [[1, "container"], [1, "percentage"], [1, "element-header"], [1, "element-percentage"], [3, "formGroup", "ngSubmit"], [1, "form"], ["for", "gap"], ["id", "gap", "type", "radio", "value", "Si", "formControlName", "gapClose"], ["id", "gap", "type", "radio", "value", "No", "formControlName", "gapClose"], ["for", "date"], ["id", "date", "type", "date", "formControlName", "dateSelected", 1, "date"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["class", "gap-error", 4, "ngIf"], [1, "header-history"], [4, "ngFor", "ngForOf"], [1, "menu"], [1, "gap-error"], [1, "data-gap"], [1, "btn", "btn-secondary", 3, "disabled", "click"], [4, "ngIf", "ngIfElse"], ["elementMenu", ""], [1, "element-menu", 3, "click"]], template: function StatisticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "El hueco tiene una probablidad de cierre del:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "percent");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function StatisticsComponent_Template_form_ngSubmit_9_listener() { return ctx.addGap(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Se cierra el hueco:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Si ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Fecha: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, StatisticsComponent_div_25_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Historico");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Cierre");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, StatisticsComponent_tr_33_Template, 9, 7, "tr", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, StatisticsComponent_div_35_Template, 4, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 7, ctx.percentage, "1.0-2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.checkoutForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.checkoutForm.valid)("disabled", !ctx.isAuthenticated());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.gapError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.gapHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.menuDisplay);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["p[_ngcontent-%COMP%] {\n    \n    text-align: center;\n}\n\nlabel[_ngcontent-%COMP%] {\n    width: 115px;\n    text-align: right;\n    margin-right: 5px;\n}\n\ntable[_ngcontent-%COMP%] {\n    margin: auto;\n}\n\n.gap-error[_ngcontent-%COMP%] {\n    text-align: center;\n    color: red;\n}\n\n.data-gap[_ngcontent-%COMP%] {\n    color: #007bff;\n}\n\n.form[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    align-items: baseline;\n}\n\n.btn-header[_ngcontent-%COMP%] {\n    display: flex;\n}\n\n.spacer[_ngcontent-%COMP%] {\n    flex: 0 1 125px;\n    margin-right: 5px;\n}\n\n.button-save[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n}\n\n.container[_ngcontent-%COMP%] {\n    color: rgb(213, 235, 20);\n}\n\n.date[_ngcontent-%COMP%] {\n    width: 130px;\n}\n\n.percentage[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    font-size: large;\n    margin: 10px;\n}\n\n.element-header[_ngcontent-%COMP%] {\n    flex: 0 1 auto;\n    margin-right: 5px;\n}\n\n.element-percentage[_ngcontent-%COMP%] {\n    flex: 0 1 auto;\n    margin-right: 5px;\n    color: #28a745;\n}\n\ntable[_ngcontent-%COMP%] {\n    border-collapse: separate;\n    border-spacing: 25px 5px;\n}\n\n.header-history[_ngcontent-%COMP%] {\n    margin: 20px;\n    text-align: center;\n    font-size: 20px;\n}\n\n.menu[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n.element-menu[_ngcontent-%COMP%] {\n    flex: 0 1 auto;\n    margin-right: 5px;\n    color: chartreuse;\n    cursor: pointer;\n}\n\n@media (min-width: 480px) {\n    .form[_ngcontent-%COMP%] {\n        justify-content: space-evenly;\n    }\n    label[_ngcontent-%COMP%] {\n        width: auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXRpc3RpY3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSTtRQUNJLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoic3RhdGlzdGljcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5sYWJlbCB7XG4gICAgd2lkdGg6IDExNXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG50YWJsZSB7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZ2FwLWVycm9yIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLmRhdGEtZ2FwIHtcbiAgICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG59XG5cbi5idG4taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3BhY2VyIHtcbiAgICBmbGV4OiAwIDEgMTI1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5idXR0b24tc2F2ZSB7XG4gICAgZmxleDogMSAxIGF1dG87XG59XG5cbi5jb250YWluZXIge1xuICAgIGNvbG9yOiByZ2IoMjEzLCAyMzUsIDIwKTtcbn1cblxuLmRhdGUge1xuICAgIHdpZHRoOiAxMzBweDtcbn1cbi5wZXJjZW50YWdlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuLmVsZW1lbnQtaGVhZGVyIHtcbiAgICBmbGV4OiAwIDEgYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmVsZW1lbnQtcGVyY2VudGFnZSB7XG4gICAgZmxleDogMCAxIGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgY29sb3I6ICMyOGE3NDU7XG59XG5cbnRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAyNXB4IDVweDtcbn1cblxuLmhlYWRlci1oaXN0b3J5IHtcbiAgICBtYXJnaW46IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLm1lbnUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5lbGVtZW50LW1lbnUge1xuICAgIGZsZXg6IDAgMSBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGNvbG9yOiBjaGFydHJldXNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgLmZvcm0ge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICB9XG4gICAgbGFiZWwge1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG59XG5cbiJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('gapAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('add', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1,
                    color: '#daf13e',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('delete', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 1,
                    color: '#daf13e',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => add', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-60px)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ color: "blue", offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ color: "#daf13e", offset: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)', offset: 1 }),
                    ]))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('delete => void', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ color: "red", offset: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-60px)', offset: 1 }),
                    ]))
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StatisticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-statistics',
                templateUrl: './statistics.component.html',
                styleUrls: ['./statistics.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('gapAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('add', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            opacity: 1,
                            color: '#daf13e',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('delete', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                            opacity: 1,
                            color: '#daf13e',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => add', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('700ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-60px)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ color: "blue", offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ color: "#daf13e", offset: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)', offset: 1 }),
                            ]))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('delete => void', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('300ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ color: "red", offset: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-60px)', offset: 1 }),
                            ]))
                        ]),
                    ]),
                ]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _gap_service__WEBPACK_IMPORTED_MODULE_3__["GapService"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "6aUP":
/*!***************************************!*\
  !*** ./src/app/api-crypto.service.ts ***!
  \***************************************/
/*! exports provided: ApiCryptoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiCryptoService", function() { return ApiCryptoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ApiCryptoService {
    constructor(http) {
        this.http = http;
    }
    getCrypto(cryptoName) {
        return this.http.get(`https://api.coinbase.com/v2/prices/${cryptoName}/buy`);
    }
}
ApiCryptoService.ɵfac = function ApiCryptoService_Factory(t) { return new (t || ApiCryptoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiCryptoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiCryptoService, factory: ApiCryptoService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiCryptoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AOm2":
/*!******************************************!*\
  !*** ./src/app/timer/timer.component.ts ***!
  \******************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/observable/interval */ "CIkO");
/* harmony import */ var rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators/debounceTime */ "dMDw");
/* harmony import */ var rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/take */ "Dxa7");
/* harmony import */ var rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function TimerComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Error, no acepta valores alfanumericos.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimerComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.result);
} }
function TimerComponent_h2_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Finalizado timer de ", ctx_r2.timer, " segundos a las ", ctx_r2.endTime, " ");
} }
function TimerComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_div_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.restartNow(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reiniciar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TimerComponent {
    constructor() {
        this.timer$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"];
        this.finished = true;
        this.timer$.pipe(Object(rxjs_internal_operators_debounceTime__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(1000)).subscribe(seconds => {
            this.workTimer(seconds);
        });
    }
    ngOnInit() {
    }
    workTimer(seconds) {
        this.error = false;
        if (seconds > 0) {
            this.result = seconds;
            this.finished = false;
            this.timer = seconds;
            this.timer = parseInt(this.timer);
            this.subscription = Object(rxjs_internal_observable_interval__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).pipe(Object(rxjs_internal_operators_take__WEBPACK_IMPORTED_MODULE_3__["take"])(this.timer)).subscribe(count => {
                this.result = this.timer - (count + 1);
                this.result == 0 ? this.printFinish() : this.result;
            });
        }
        else {
            this.time = null;
            this.finished = true;
            this.error = true;
        }
    }
    restartNow() {
        this.subscription.unsubscribe();
        this.time = null;
        this.finished = true;
        this.result = null;
    }
    startTimer(seconds) {
        this.timer$.next(seconds);
    }
    printFinish() {
        this.time = null;
        this.finished = true;
        let audio = new Audio();
        audio.src = 'https://kamanalysys.s3.eu-central-1.amazonaws.com/assets/alarma_alarma_es_tu_mujer.mp3';
        audio.play();
        this.finishTime();
    }
    finishTime() {
        this.newDate = new Date();
        let endHours = this.newDate.getHours();
        let endMinutes = this.newDate.getMinutes() < 10 ? "0" + this.newDate.getMinutes() : this.newDate.getMinutes();
        let endSeconds = this.newDate.getSeconds() < 10 ? "0" + this.newDate.getSeconds() : this.newDate.getSeconds();
        this.endTime = `${endHours}:${endMinutes}:${endSeconds}`;
    }
}
TimerComponent.ɵfac = function TimerComponent_Factory(t) { return new (t || TimerComponent)(); };
TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimerComponent, selectors: [["app-timer"]], decls: 12, vars: 6, consts: [[1, "container"], [1, "timer"], ["for", "time"], ["type", "text", "id", "time", "placeholder", "Segundos", "name", "time", 1, "time", 3, "ngModel", "disabled", "ngModelChange"], ["class", "error", 4, "ngIf"], [1, "finishTimer"], ["class", "countDown", 4, "ngIf"], [4, "ngIf"], ["class", "restart", 4, "ngIf"], [1, "error"], [1, "countDown"], [1, "restart"], [1, "btn", "btn-success", 3, "click"]], template: function TimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Timer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Insertar tiempo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimerComponent_Template_input_ngModelChange_6_listener($event) { return ctx.time = $event; })("ngModelChange", function TimerComponent_Template_input_ngModelChange_6_listener($event) { return ctx.startTimer($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TimerComponent_div_7_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TimerComponent_div_9_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TimerComponent_h2_10_Template, 2, 2, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TimerComponent_div_11_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.time)("disabled", !ctx.finished);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.result > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.result == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.finished && ctx.result != null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n    margin-top: 15px;\n    \n    padding: 25px;\n    background-image: url(https://kamanalysys.s3.eu-central-1.amazonaws.com/assets/images/reloj.jpeg); \n\n    background-size: 100% 100%;\n}\n\nh1[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #daf13e;\n}\n\nh2[_ngcontent-%COMP%] {\n    text-align: center;  \n    color: green;\n}\n\nlabel[_ngcontent-%COMP%] {\n    \n    color: green;\n}\n\ninput[_ngcontent-%COMP%] {\n    border-radius: 10px;\n    text-align: center;\n}\n\n.error[_ngcontent-%COMP%] {\n    text-align: center;\n    color: brown;\n}\n\n.restart[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n\n.back[_ngcontent-%COMP%] {\n    background-color: honeydew;\n}\n\n.time[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border: 1px solid green;\n    max-width: 120px;\n    color: #daf13e;\n}\n\n.timer[_ngcontent-%COMP%] {\n    display: flex;\n    font-size: 20px;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n}\n\n.finishTimer[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    margin: 15px;\n    text-align: center;\n    font-size: 30px;\n}\n\n.countDown[_ngcontent-%COMP%] {\n    color: green;\n    background-color: transparent;\n    border-radius: 50%;\n    width: 120px;\n    height: 120px;\n    line-height: 120px;\n    border: 1px solid green;\n}\n\n.spacer[_ngcontent-%COMP%] {\n    display: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixpR0FBaUc7QUFDckc7O0NBRUM7SUFDRywwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InRpbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIC8qIG1heC13aWR0aDogNDAwcHg7ICovXG4gICAgcGFkZGluZzogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9rYW1hbmFseXN5cy5zMy5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9hc3NldHMvaW1hZ2VzL3JlbG9qLmpwZWcpOyBcbi8qICAgIFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL21hc3Rlci5kMmdnZnlzaWJmbjVpNS5hbXBsaWZ5YXBwLmNvbS9hc3NldHMvaW1hZ2VzL3JlbG9qLmpwZWcpOyBcbiovXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG59XG5cbmgxIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6ICNkYWYxM2U7XG59XG5oMiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgXG4gICAgY29sb3I6IGdyZWVuO1xufVxuXG5sYWJlbCB7XG4gICAgLyogbWFyZ2luLXJpZ2h0OiAxNXB4OyAgKi9cbiAgICBjb2xvcjogZ3JlZW47XG59XG5cbmlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVycm9yIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJyb3duO1xufVxuXG4ucmVzdGFydCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJhY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhvbmV5ZGV3O1xufVxuXG4udGltZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICBjb2xvcjogI2RhZjEzZTtcbn1cblxuLnRpbWVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5maW5pc2hUaW1lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmNvdW50RG93biB7XG4gICAgY29sb3I6IGdyZWVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxMjBweDtcbiAgICBsaW5lLWhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG59XG5cbi5zcGFjZXIge1xuICAgIGRpc3BsYXk6IDEgMSBhdXRvO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timer',
                templateUrl: './timer.component.html',
                styleUrls: ['./timer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: "http://localhost:8080/"
    //url: "https://kamanalysis.herokuapp.com/api"
    //url: "http://kamanalysis.eu-central-1.elasticbeanstalk.com/api"
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

/***/ "B9OW":
/*!************************************************!*\
  !*** ./src/app/analysis/analysis.component.ts ***!
  \************************************************/
/*! exports provided: AnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisComponent", function() { return AnalysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _api_crypto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-crypto.service */ "6aUP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function AnalysisComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Detalles");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item_r2.srcImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item_r2.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.strategy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r2.price, " ");
} }
function AnalysisComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item2_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", item2_r3.srcImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", item2_r3.alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item2_r3.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item2_r3.strategy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item2_r3.price, " ");
} }
class AnalysisComponent {
    constructor(apiCrypto, router) {
        this.apiCrypto = apiCrypto;
        this.router = router;
        this.outIn = 'in';
        this.asset = [];
        this.assets = [
            {
                name: "Header",
                strategy: "Estrategia: posicionarse corto, es decir venta del USD y compra del MXN.",
                price: "Precio de entrada en los 21, con objetivo de los 20 y limite de perdidas en los 22",
                srcImage: "../assets/img/USDMXN.png",
                alt: "Image Header",
            },
            {
                name: "MXN",
                strategy: "Estrategia: posicionarse corto, es decir venta del USD y compra del MXN.",
                price: "Precio de entrada en los 21, con objetivo de los 20 y limite de perdidas en los 22",
                srcImage: "../assets/img/USDMXN.png",
                alt: "Image MXN",
            },
            {
                name: "MXN",
                strategy: "Estrategia: posicionarse corto, es decir venta del USD y compra del MXN.",
                price: "Precio de entrada en los 21, con objetivo de los 20 y limite de perdidas en los 22",
                srcImage: "../assets/img/USDMXN.png",
                alt: "Image MXN",
            },
            {
                name: "MXN",
                strategy: "Estrategia: posicionarse corto, es decir venta del USD y compra del MXN.",
                price: "Precio de entrada en los 21, con objetivo de los 20 y limite de perdidas en los 22",
                srcImage: "../assets/img/USDMXN.png",
                alt: "Image MXN",
            }
        ];
        this.crypto$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(tick => this.getCrypto()));
    }
    ngOnInit() {
        this.endCrypto$ = this.crypto$.subscribe();
        this.asset.push(this.assets[0]);
        this.assets.splice(0, 1);
    }
    getCrypto() {
        let nameCrypto = "BTC-USD";
        this.apiCrypto.getCrypto(nameCrypto).subscribe((crypto) => {
            this.base = crypto.data.base;
            this.currency = crypto.data.currency;
            this.amount = crypto.data.amount;
            console.log(`Recibo ${this.base} y ${this.amount}`);
        });
    }
    ngOnDestroy() {
        this.endCrypto$.unsubscribe();
    }
}
AnalysisComponent.ɵfac = function AnalysisComponent_Factory(t) { return new (t || AnalysisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_crypto_service__WEBPACK_IMPORTED_MODULE_4__["ApiCryptoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AnalysisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalysisComponent, selectors: [["app-analysis"]], decls: 7, vars: 7, consts: [[1, "crypto"], ["class", "strategy-head", 4, "ngFor", "ngForOf"], [1, "container"], ["class", "strategy", 4, "ngFor", "ngForOf"], [1, "strategy-head"], [1, "container-img"], [1, "strategy-img", 3, "src", "alt"], [1, "strategy-item"], [1, "strategy"]], template: function AnalysisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AnalysisComponent_section_4_Template, 12, 5, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AnalysisComponent_div_6_Template, 10, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@outIn", ctx.outIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.base, "-", ctx.currency, " Compra: ", ctx.amount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@imgAnimation", ctx.imgAnimation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.asset);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.assets);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], styles: [".banner[_ngcontent-%COMP%] {\n  color: #daf13e;\n  text-align: center;\n  transform: translateX(100%);\n}\n\nh2[_ngcontent-%COMP%] {\n  color: cadetblue;\n}\n\n.container-img[_ngcontent-%COMP%] {\n  min-width: 140px;\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0px;\n}\n\n.strategy-head[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.strategy[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 5px;\n}\n\n.strategy[_ngcontent-%COMP%]   .container-img[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.strategy-img[_ngcontent-%COMP%] {\n  max-width: 100%;\n\n}\n\n@media (min-width: 480px)  { \n\n  .strategy-head[_ngcontent-%COMP%] {\n    display: flex;\n    margin-bottom: 5px;\n  }\n\n  .strategy-head[_ngcontent-%COMP%]   .container-img[_ngcontent-%COMP%] {\n    margin-right: 5px;\n  }\n\n  .container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: nowrap;\n    padding: 0;\n  }\n  \n  .strategy[_ngcontent-%COMP%]   .container-img[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  \n  .strategy[_ngcontent-%COMP%] {\n    display: inline-block;\n    margin-right: 5px;\n  }\n    \n  .strategy[_ngcontent-%COMP%]:last-child {\n    margin-right: 0px;\n  }\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWx5c2lzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7O0FBRWpCOztBQUVBOztFQUVFO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsU0FBUztFQUNYOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7QUFFRiIsImZpbGUiOiJhbmFseXNpcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lciB7XG4gIGNvbG9yOiAjZGFmMTNlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbn1cblxuaDIge1xuICBjb2xvcjogY2FkZXRibHVlO1xufVxuXG4uY29udGFpbmVyLWltZyB7XG4gIG1pbi13aWR0aDogMTQwcHg7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnN0cmF0ZWd5LWhlYWQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zdHJhdGVneSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnN0cmF0ZWd5IC5jb250YWluZXItaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5zdHJhdGVneS1pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG5cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSAgeyBcblxuICAuc3RyYXRlZ3ktaGVhZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cblxuICAuc3RyYXRlZ3ktaGVhZCAuY29udGFpbmVyLWltZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbiAgXG4gIC5zdHJhdGVneSAuY29udGFpbmVyLWltZyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG4gIFxuICAuc3RyYXRlZ3kge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICAgIFxuICAuc3RyYXRlZ3k6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbiAgXG59XG5cbiAgIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('outIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    opacity: 1,
                    color: '#daf13e',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => in', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(-100%)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ color: "#daf13e", offset: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(0%)', offset: 1 }),
                    ]))
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('imgAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])('img', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])('img', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])('300ms', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('2000ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 })),
                    ]), { optional: true }),
                ])
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalysisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-analysis',
                templateUrl: './analysis.component.html',
                styleUrls: ['./analysis.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('outIn', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                            opacity: 1,
                            color: '#daf13e',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => in', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('2s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(-100%)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ color: "#daf13e", offset: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(0%)', offset: 1 }),
                            ]))
                        ]),
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('imgAnimation', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('void => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])('img', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 0 })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["query"])('img', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["stagger"])('300ms', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('2000ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: 1 })),
                            ]), { optional: true }),
                        ])
                    ]),
                ]
            }]
    }], function () { return [{ type: _api_crypto_service__WEBPACK_IMPORTED_MODULE_4__["ApiCryptoService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "P5AS":
/*!********************************************!*\
  !*** ./src/app/xhr-interceptor.service.ts ***!
  \********************************************/
/*! exports provided: XhrInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrInterceptorService", function() { return XhrInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class XhrInterceptorService {
    intercept(req, next) {
        const xhr = req.clone({
            headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
        });
        return next.handle(xhr);
    }
}
XhrInterceptorService.ɵfac = function XhrInterceptorService_Factory(t) { return new (t || XhrInterceptorService)(); };
XhrInterceptorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: XhrInterceptorService, factory: XhrInterceptorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](XhrInterceptorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");



class AppComponent {
    constructor() {
        this.title = 'kamanalysis-client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "WIqF":
/*!****************************************************************!*\
  !*** ./src/app/performance-risk/performance-risk.component.ts ***!
  \****************************************************************/
/*! exports provided: PerformanceRiskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceRiskComponent", function() { return PerformanceRiskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





const _c0 = ["stopLoss"];
const _c1 = ["buySell"];
const _c2 = ["takeProfit"];
function PerformanceRiskComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acepta numeros enteros o con decimales.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PerformanceRiskComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PerformanceRiskComponent_div_10_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.ratioForm.get("stopLoss").errors.pattern);
} }
function PerformanceRiskComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acepta numeros enteros o con decimales.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PerformanceRiskComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PerformanceRiskComponent_div_16_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.ratioForm.get("buySell").errors.pattern);
} }
function PerformanceRiskComponent_div_22_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Acepta numeros enteros o con decimales.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PerformanceRiskComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PerformanceRiskComponent_div_22_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.ratioForm.get("takeProfit").errors.pattern);
} }
class PerformanceRiskComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.ratioForm = formBuilder.group({
            stopLoss: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+([.][0-9]+)?$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            buySell: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+([.][0-9]+)?$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            takeProfit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[0-9]+([.][0-9]+)?$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    ngOnInit() {
    }
    onChangeValue(nextInput) {
        if (nextInput == "buySell") {
            this.buySell.nativeElement.focus();
        }
        else {
            if (nextInput == "profit") {
                this.takeProfit.nativeElement.focus();
            }
            else {
                this.stopLoss.nativeElement.focus();
            }
        }
    }
    riskPerformance() {
        console.log("los datos son ", this.ratioForm.value);
        let stopLoss = this.ratioForm.value.stopLoss;
        let buySell = this.ratioForm.value.buySell;
        let takeProfit = this.ratioForm.value.takeProfit;
        if (takeProfit >= 0 && buySell >= 0 && stopLoss >= 0) {
            this.performanceRisk = (takeProfit - buySell) / (buySell - stopLoss);
        }
        else {
            this.performanceRisk = null;
        }
    }
}
PerformanceRiskComponent.ɵfac = function PerformanceRiskComponent_Factory(t) { return new (t || PerformanceRiskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
PerformanceRiskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PerformanceRiskComponent, selectors: [["app-performance-risk"]], viewQuery: function PerformanceRiskComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stopLoss = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.buySell = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.takeProfit = _t.first);
    } }, decls: 34, vars: 9, consts: [[1, "container"], [3, "formGroup", "ngSubmit"], [1, "fields"], [1, "field"], ["for", "stopLoss"], ["placeholder", "100.00", "maxlength", "10", "type", "text", "formControlName", "stopLoss", 3, "keyup.enter"], ["stopLoss", ""], [4, "ngIf"], ["for", "buySell"], ["placeholder", "150.00", "maxlength", "10", "type", "text", "formControlName", "buySell", 3, "keyup.enter"], ["buySell", ""], ["for", "takeProfit"], ["placeholder", "200.00", "maxlength", "10", "type", "text", "formControlName", "takeProfit", 3, "keyup.enter"], ["takeProfit", ""], [1, "calculate"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], [1, "result-items"], [1, "result"], ["class", "error-numerico", 4, "ngIf"], [1, "error-numerico"]], template: function PerformanceRiskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rendimiento/Riesgo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PerformanceRiskComponent_Template_form_ngSubmit_3_listener() { return ctx.riskPerformance(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Limite de perdida:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PerformanceRiskComponent_Template_input_keyup_enter_8_listener() { return ctx.onChangeValue("buySell"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PerformanceRiskComponent_div_10_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Compra/Venta: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PerformanceRiskComponent_Template_input_keyup_enter_14_listener() { return ctx.onChangeValue("profit"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PerformanceRiskComponent_div_16_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Toma de utilidades:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PerformanceRiskComponent_Template_input_keyup_enter_20_listener() { return ctx.onChangeValue("stopLoss"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, PerformanceRiskComponent_div_22_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Calcular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "El ratio es: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](31, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "a 1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.ratioForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ratioForm.get("stopLoss").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ratioForm.get("buySell").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ratioForm.get("takeProfit").errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.ratioForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](31, 6, ctx.performanceRisk, "1.0-2"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: ["h1[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #daf13e;\n}\n\nlabel[_ngcontent-%COMP%] {\n    color: #daf13e;\n    width: 125px;\n    text-align: right;\n}\n\ninput[_ngcontent-%COMP%] {\n    border: 0;\n    background-color: transparent;\n    color: #45a12e;\n    border-bottom: 1px solid green;\n    text-align: center;\n    width: 100px;\n}\n\n.error-numerico[_ngcontent-%COMP%] {\n    color: brown;\n}\n\n.fields[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 15px;\n}\n\n.field[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n}\n\n.calculate[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-evenly;\n}\n\n.result-items[_ngcontent-%COMP%] {\n    color: #daf13e;\n    display: flex;\n    align-items: center ;\n}\n\n.result[_ngcontent-%COMP%] {\n    align-content: center;\n    width: 100px;\n    height: 47px;\n    line-height: 47px;\n    font-size: 30px;\n    font-weight: 800;\n    text-align: center;\n    color: rgb(87, 93, 173);\n    border-bottom: 1px solid rgb(87, 93, 173);\n    border-right: 1px solid rgb(87, 93, 173);\n    box-shadow: 5px 5px 15px rgb(87, 93, 173);\n    border-radius: 5px;\n    margin: 0 15px 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZvcm1hbmNlLXJpc2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIseUNBQXlDO0lBQ3pDLHdDQUF3QztJQUN4Qyx5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJwZXJmb3JtYW5jZS1yaXNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZGFmMTNlO1xufVxuXG5sYWJlbCB7XG4gICAgY29sb3I6ICNkYWYxM2U7XG4gICAgd2lkdGg6IDEyNXB4O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5pbnB1dCB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjNDVhMTJlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmVlbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG4uZXJyb3ItbnVtZXJpY28ge1xuICAgIGNvbG9yOiBicm93bjtcbn1cbi5maWVsZHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbjogMTVweDtcbn1cblxuLmZpZWxkIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmNhbGN1bGF0ZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLnJlc3VsdC1pdGVtcyB7XG4gICAgY29sb3I6ICNkYWYxM2U7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyIDtcbn1cblxuLnJlc3VsdCB7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDQ3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ3cHg7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiByZ2IoODcsIDkzLCAxNzMpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoODcsIDkzLCAxNzMpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYig4NywgOTMsIDE3Myk7XG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IHJnYig4NywgOTMsIDE3Myk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIG1hcmdpbjogMCAxNXB4IDAgMTVweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerformanceRiskComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-performance-risk',
                templateUrl: './performance-risk.component.html',
                styleUrls: ['./performance-risk.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { stopLoss: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["stopLoss"]
        }], buySell: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["buySell"]
        }], takeProfit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["takeProfit"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timer/timer.component */ "AOm2");
/* harmony import */ var _performance_risk_performance_risk_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./performance-risk/performance-risk.component */ "WIqF");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _analysis_analysis_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./analysis/analysis.component */ "B9OW");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./statistics/statistics.component */ "4QAB");
/* harmony import */ var _xhr_interceptor_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./xhr-interceptor.service */ "P5AS");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./presentation/presentation.component */ "gVBG");
/* harmony import */ var _idea_idea_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./idea/idea.component */ "zr1q");




























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _xhr_interceptor_service__WEBPACK_IMPORTED_MODULE_20__["XhrInterceptorService"], multi: true }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _performance_risk_performance_risk_component__WEBPACK_IMPORTED_MODULE_7__["PerformanceRiskComponent"],
        _timer_timer_component__WEBPACK_IMPORTED_MODULE_6__["TimerComponent"],
        _analysis_analysis_component__WEBPACK_IMPORTED_MODULE_15__["AnalysisComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
        _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_19__["StatisticsComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
        _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_22__["PageNotFoundComponent"],
        _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_23__["PresentationComponent"],
        _idea_idea_component__WEBPACK_IMPORTED_MODULE_24__["IdeaComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _performance_risk_performance_risk_component__WEBPACK_IMPORTED_MODULE_7__["PerformanceRiskComponent"],
                    _timer_timer_component__WEBPACK_IMPORTED_MODULE_6__["TimerComponent"],
                    _analysis_analysis_component__WEBPACK_IMPORTED_MODULE_15__["AnalysisComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                    _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_19__["StatisticsComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
                    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_22__["PageNotFoundComponent"],
                    _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_23__["PresentationComponent"],
                    _idea_idea_component__WEBPACK_IMPORTED_MODULE_24__["IdeaComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production })
                ],
                providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _xhr_interceptor_service__WEBPACK_IMPORTED_MODULE_20__["XhrInterceptorService"], multi: true }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ccyI":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AuthService {
    constructor(http) {
        this.http = http;
        this.isAuthenticate = false;
    }
    authenticated() {
        return this.isAuthenticate;
    }
    login(credentials) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"](credentials ? {
            authorization: 'Basic ' + btoa(credentials.user + ':' + credentials.password)
        } : {});
        return this.http.get('user', { headers: headers });
    }
    logout() {
        // const CSRF_TOKEN = document.cookie.match(new RegExp(`XSRF-TOKEN=([^;]+)`))[1];
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //     'Content-Type': 'application/json',
        //     'X-XSRF-TOKEN': CSRF_TOKEN 
        //   })
        // };
        return this.http.post('logout', {}).subscribe(() => {
            this.isAuthenticate = false;
        });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators/map */ "q3Kh");
/* harmony import */ var rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/observable/timer */ "eJ3O");
/* harmony import */ var rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









class HeaderComponent {
    constructor() {
        this.time$ = Object(rxjs_internal_observable_timer__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, 1000).pipe(Object(rxjs_internal_operators_map__WEBPACK_IMPORTED_MODULE_1__["map"])(() => new Date()));
    }
    ngOnInit() {
        this.time$.subscribe(t => {
            this.hours = t.getHours();
            this.minutes = t.getMinutes() < 10 ? "0" + t.getMinutes() : t.getMinutes();
            this.seconds = t.getSeconds() < 10 ? "0" + t.getSeconds() : t.getSeconds();
        }, () => console.log("Error"), () => console.log("Terminado"));
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 24, vars: 3, consts: [[1, "container"], [1, "sidenav"], ["drawer", ""], ["mat-button", "", "name", "inicio", "routerLink", "/", 3, "click"], ["name", "ideas", "mat-button", "", "routerLink", "/ideas", 1, "mat-button", 3, "click"], ["name", "risk/performance", "mat-button", "", "routerLink", "/rendimiento-riesgo", 1, "mat-button", 3, "click"], ["name", "statistics", "mat-button", "", "routerLink", "/estadisticas", 1, "mat-button", 3, "click"], ["name", "login", "mat-button", "", "routerLink", "/login", 1, "mat-button", 3, "click"], [1, "sidenav-content"], ["color", "primary"], [1, "toolbar"], ["name", "menu", "aria-hidden", "true", "mat-icon-button", "", 1, "nav-link1", 3, "click"], ["routerLink", "/", 1, "title"], ["routerLink", "timer", 1, "time"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ideas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Rendimiento/Riesgo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Estadisticas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-toolbar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-toolbar-row", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "KamAnalysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.hours, ":", ctx.minutes, ":", ctx.seconds, "");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawer"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarRow"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n    margin-top: 0px ;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n\n.container[_ngcontent-%COMP%]   .mat-drawer[_ngcontent-%COMP%] {\n    min-width:200px;\n}\n\n.container[_ngcontent-%COMP%]   .mat-drawer[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    text-align: left;\n}\n\n.toolbar[_ngcontent-%COMP%]{\n    background-color: whitesmoke;\n    color: #e01e47;\n    display: flex;\n    justify-content: space-between;\n}\n\n.mat-button[_ngcontent-%COMP%] {\n    color: #daf13e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsY0FBYztJQUNkLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXRvcDogMHB4IDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xufVxuXG4uY29udGFpbmVyIC5tYXQtZHJhd2VyIHtcbiAgICBtaW4td2lkdGg6MjAwcHg7XG59XG5cbi5jb250YWluZXIgLm1hdC1kcmF3ZXIgLm1hdC1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50b29sYmFye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gICAgY29sb3I6ICNlMDFlNDc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5tYXQtYnV0dG9uIHtcbiAgICBjb2xvcjogI2RhZjEzZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "gVBG":
/*!********************************************************!*\
  !*** ./src/app/presentation/presentation.component.ts ***!
  \********************************************************/
/*! exports provided: PresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationComponent", function() { return PresentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class PresentationComponent {
    constructor() { }
    ngOnInit() {
    }
}
PresentationComponent.ɵfac = function PresentationComponent_Factory(t) { return new (t || PresentationComponent)(); };
PresentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PresentationComponent, selectors: [["app-presentation"]], decls: 5, vars: 0, consts: [[1, "container"], ["routerLink", "/analysis", 1, "bull"], ["src", "../assets/img/bear2.jpeg", "alt", "bear"], ["routerLink", "/analysis", 1, "bear"], ["src", "../assets/img/bull.jpg", "alt", "bull"]], template: function PresentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".container[_ngcontent-%COMP%] {\n    display: flex;\n}\n\nimg[_ngcontent-%COMP%]{\n    max-width: 100%;\n}\n\n.bear[_ngcontent-%COMP%]   .bull[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n}\n\n.bear[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n    border: 5px solid green;\n}\n\n.bull[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n    border: 5px solid red;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUJBQXFCOztBQUV6QiIsImZpbGUiOiJwcmVzZW50YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbmltZ3tcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbi5iZWFyIC5idWxsIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmJlYXIgaW1nOmhvdmVyIHtcbiAgICBib3JkZXI6IDVweCBzb2xpZCBncmVlbjtcbn1cblxuLmJ1bGwgaW1nOmhvdmVyIHtcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XG5cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-presentation',
                templateUrl: './presentation.component.html',
                styleUrls: ['./presentation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "rQPh":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Page not found 404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tIkO":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.auth.authenticated()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _analysis_analysis_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analysis/analysis.component */ "B9OW");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.guard */ "tIkO");
/* harmony import */ var _idea_idea_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./idea/idea.component */ "zr1q");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "rQPh");
/* harmony import */ var _performance_risk_performance_risk_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./performance-risk/performance-risk.component */ "WIqF");
/* harmony import */ var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./presentation/presentation.component */ "gVBG");
/* harmony import */ var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./statistics/statistics.component */ "4QAB");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timer/timer.component */ "AOm2");













const routes = [
    { path: '', redirectTo: 'presentation', pathMatch: 'full' },
    { path: 'presentation', component: _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_8__["PresentationComponent"] },
    { path: 'analysis', component: _analysis_analysis_component__WEBPACK_IMPORTED_MODULE_2__["AnalysisComponent"] },
    { path: 'timer', component: _timer_timer_component__WEBPACK_IMPORTED_MODULE_10__["TimerComponent"] },
    { path: 'rendimiento-riesgo', component: _performance_risk_performance_risk_component__WEBPACK_IMPORTED_MODULE_7__["PerformanceRiskComponent"] },
    { path: 'ideas', component: _idea_idea_component__WEBPACK_IMPORTED_MODULE_4__["IdeaComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'estadisticas', component: _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_9__["StatisticsComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true }),], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true }),],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







class LoginComponent {
    constructor(http, auth, router) {
        this.http = http;
        this.auth = auth;
        this.router = router;
        this.continue = true;
    }
    ngOnInit() {
        this.verifyUser();
    }
    verifyUser() {
        if (this.auth.authenticated()) {
            console.log("Esta autorizado en login ", this.auth.authenticated());
            this.router.navigate(['']);
        }
    }
    onSubmit() {
        this.continue = true;
        let credentials = { user: this.user, password: this.password };
        this.auth.login(credentials).subscribe(() => {
            this.auth.isAuthenticate = true;
            this.router.navigate(['']);
            this.continue = true;
        }, error => {
            this.continue = false;
            console.log("El error es ", error);
        });
    }
    logout() {
        this.auth.logout();
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 11, vars: 4, consts: [[3, "ngSubmit"], ["loginForm", "ngForm"], [1, "input-text"], ["placeholder", "Username", "type", "text", "required", "", "name", "user", 1, "form-control", 3, "ngModel", "ngModelChange"], ["placeholder", "Password", "type", "password", "required", "", "name", "password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_5_listener($event) { return ctx.user = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Iniciar sesi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@login", ctx.continue ? "continue" : "stop")("disabled", !_r0.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["h1[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #daf13e;\n    margin-top: 15px;\n}\n\ninput[_ngcontent-%COMP%] {\n    width: 50%;\n    margin: auto;\n}\n\n.input-text[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n    text-align: center;\n}\n\nbutton[_ngcontent-%COMP%] {\n    width: 50%;\n    margin: auto;\n    margin-top: 15px;\n    display: flex;\n    justify-content: center;    \n    \n}\n\n@media (min-width: 480px) {\n    button[_ngcontent-%COMP%] {\n        width: 25%;\n    }\n    input[_ngcontent-%COMP%] {\n        width: 25%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7O0FBRTNCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjZGFmMTNlO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbmlucHV0IHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmlucHV0LXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgICBcbiAgICBcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG4gICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICB9XG4gICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgIH1cbn1cblxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('login', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('continue', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    opacity: 1,
                    color: '#daf13e',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('stop', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    opacity: 1,
                    // color: '#daf13e',
                    color: 'red',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => stop', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('700ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-10px)', offset: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(10px)', offset: .1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-10px)', offset: .2 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(10px)', offset: .3 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-10px)', offset: .4 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(10px)', offset: .5 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-10px)', offset: .6 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(10px)', offset: .7 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-10px)', offset: .8 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(10px)', offset: .9 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-10px)', offset: 1 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ color: "red", offset: 1 }),
                    ]))
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('login', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('continue', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                            color: '#daf13e',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('stop', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                            // color: '#daf13e',
                            color: 'red',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => stop', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('700ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-10px)', offset: 0 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(10px)', offset: .1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-10px)', offset: .2 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(10px)', offset: .3 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-10px)', offset: .4 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(10px)', offset: .5 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-10px)', offset: .6 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(10px)', offset: .7 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-10px)', offset: .8 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(10px)', offset: .9 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translateX(-10px)', offset: 1 }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ color: "red", offset: 1 }),
                            ]))
                        ]),
                    ]),
                ]
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "yOJJ":
/*!*********************************!*\
  !*** ./src/app/idea.service.ts ***!
  \*********************************/
/*! exports provided: IdeaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeaService", function() { return IdeaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "AytR");







class IdeaService {
    constructor(http) {
        this.http = http;
        this.ideaUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url + "idea";
        this.size = "100";
    }
    addStrategy(idea) {
        const httpOptions = this.configHeader();
        return this.http.post(this.ideaUrl, idea, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return console.log("Error en el add", error); })));
    }
    getIdeas() {
        return this.http.get(this.ideaUrl + `?size=${this.size}`, { observe: 'response' });
    }
    updateidea(idea) {
        const httpOptions = this.configHeader();
        return this.http.put(this.ideaUrl, idea, httpOptions);
    }
    deleteIdea(id) {
        const url = `${this.ideaUrl}/${id}`;
        const httpOptions = this.configHeader();
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return console.log("Error en el delete", error); })));
    }
    configHeader() {
        const CSRF_TOKEN = document.cookie.match(new RegExp(`XSRF-TOKEN=([^;]+)`))[1];
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': CSRF_TOKEN
            })
        };
        return httpOptions;
    }
}
IdeaService.ɵfac = function IdeaService_Factory(t) { return new (t || IdeaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
IdeaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: IdeaService, factory: IdeaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](IdeaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zr1q":
/*!****************************************!*\
  !*** ./src/app/idea/idea.component.ts ***!
  \****************************************/
/*! exports provided: IdeaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeaComponent", function() { return IdeaComponent; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _idea_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../idea.service */ "yOJJ");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "ccyI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");











function IdeaComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7.idea);
} }
function IdeaComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r8.idea);
} }
function IdeaComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r9.idea);
} }
function IdeaComponent_div_32_li_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 30);
} }
function IdeaComponent_div_32_li_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](0);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r12 = ctx_r18.index;
    const item_r11 = ctx_r18.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", i_r12 + 1, ") ", item_r11.idea, " ");
} }
function IdeaComponent_div_32_li_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keyup.enter", function IdeaComponent_div_32_li_2_ng_template_5_Template_input_keyup_enter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r19.updateIdea(item_r11.id, $event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", item_r11.idea);
} }
function IdeaComponent_div_32_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, IdeaComponent_div_32_li_2_div_2_Template, 1, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, IdeaComponent_div_32_li_2_ng_template_3_Template, 1, 2, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, IdeaComponent_div_32_li_2_ng_template_5_Template, 1, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IdeaComponent_div_32_li_2_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const i_r12 = ctx.index; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return (ctx_r23.ideaEdit = true) && (ctx_r23.idEdit = i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IdeaComponent_div_32_li_2_Template_div_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r24); const item_r11 = ctx.$implicit; const i_r12 = ctx.index; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r25.onDeleteIdea(item_r11, i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "path", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "path", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r12 = ctx.index;
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r10.ideaEdit && ctx_r10.idEdit == i_r12)("ngIfThen", _r16)("ngIfElse", _r14);
} }
function IdeaComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, IdeaComponent_div_32_li_2_Template, 15, 3, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.ideas);
} }
const _c0 = function (a0, a1) { return [a0, a1]; };
class IdeaComponent {
    constructor(ideaService, document, auth) {
        this.ideaService = ideaService;
        this.document = document;
        this.auth = auth;
        this.inputChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"];
        this.ideas = [];
        this.strategies = [];
        this.conclusion = [];
        this.ideaEdit = true;
    }
    ngOnInit() {
        this.inputChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(2000)).subscribe(x => {
            let idea = { id: undefined, idea: undefined, type: undefined };
            let newIdea = x;
            idea.idea = newIdea;
            this.addIdea(idea), () => console.log("Error "), () => console.log("Terminado");
        });
        this.getIdeas();
    }
    logout() {
        this.auth.logout();
    }
    inputChange($event) {
        this.inputChange$.next($event);
    }
    addIdea(idea) {
        this.ideaService.addStrategy(idea).subscribe((x) => {
            this.newIdea = null;
            if (x != null) {
                this.ideas.push(x);
            }
        });
    }
    getIdeas() {
        this.ideaService.getIdeas().subscribe(resp => {
            let allIdeas;
            allIdeas = resp.body;
            let totalIdeas = allIdeas.content;
            totalIdeas.forEach(idea => {
                if (idea.type == "strategy") {
                    this.strategies.push(idea);
                }
                else if (idea.type == "conclusion") {
                    this.conclusion.push(idea);
                }
                else {
                    this.ideas.push(idea);
                }
            });
        }, error => {
            console.log("Error en getIdeas", error.status);
            if (error.status == 200) {
                this.document.location.href = "http://localhost:8080/login";
            }
        });
    }
    updateIdea(id, idea) {
        let newIdea = { id: undefined, idea: undefined, type: undefined };
        newIdea.id = id;
        newIdea.idea = idea;
        this.ideaService.updateidea(newIdea).subscribe((ideaUpdate) => {
            this.ideaEdit = false;
            this.ideas.forEach((x) => {
                if (x.id == ideaUpdate.id) {
                    x.idea = ideaUpdate.idea;
                }
            });
        });
    }
    onDeleteIdea(idea, i) {
        let index = i;
        this.ideaService.deleteIdea(idea.id).subscribe(() => {
            this.ideas.splice(index, 1);
        });
    }
    dropIdeas(event) {
        let ideasList = [];
        ideasList = event.container.data;
        ideasList.forEach(idea => {
            if (idea.type != "idea") {
                idea.type = "idea";
                console.log("La idea para actualizar", idea);
                this.ideaService.updateidea(idea).subscribe();
            }
        });
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    dropStrategies(event) {
        let strategyList;
        strategyList = event.container.data;
        strategyList.forEach(idea => {
            if (idea.type != "strategy") {
                idea.type = "strategy";
                console.log("La estrategia para actualizar", idea);
                this.ideaService.updateidea(idea).subscribe();
            }
        });
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    dropConclusion(event) {
        let conclusionList = [];
        conclusionList = event.container.data;
        conclusionList.forEach(idea => {
            if (idea.type != "conclusion") {
                idea.type = "conclusion";
                console.log("La conclusion para actualizar", idea);
                this.ideaService.updateidea(idea).subscribe();
            }
        });
        if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
}
IdeaComponent.ɵfac = function IdeaComponent_Factory(t) { return new (t || IdeaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_idea_service__WEBPACK_IMPORTED_MODULE_5__["IdeaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
IdeaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: IdeaComponent, selectors: [["app-idea"]], decls: 33, vars: 20, consts: [[1, "header"], [1, "btn", "btn-primary", 3, "click"], [1, "header-idea"], ["for", "idea", 1, "idea-label"], ["placeholder", "Idea", "id", "newIdea", "type", "text", "name", "newIdea", 1, "idea-input", 3, "ngModel", "ngModelChange"], [1, "ideas-list"], ["cdkDropList", "", 1, "box-list", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["ideasList", "cdkDropList"], ["class", "box-item", "cdkDrag", "", 4, "ngFor", "ngForOf"], [1, "strategy-list"], [1, "example-container"], ["cdkDropList", "", 1, "box-list2", 3, "cdkDropListData", "cdkDropListConnectedTo", "cdkDropListDropped"], ["strategiesList", "cdkDropList"], ["class", "box-item2", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["conclusionList", "cdkDropList"], [4, "ngIf"], ["cdkDrag", "", 1, "box-item"], ["cdkDrag", "", 1, "box-item2"], [4, "ngFor", "ngForOf"], [1, "ideas"], ["class", "idea", 4, "ngIf", "ngIfThen", "ngIfElse"], ["showIdea", ""], ["showEdit", ""], [1, "spacer"], [1, "btn-edit", "btn", 3, "click"], ["name", "delete", 3, "click"], ["width", "1.5em", "height", "1.5em", "viewBox", "0 0 16 16", "fill", "currentColor", "xmlns", "http://www.w3.org/2000/svg", 1, "bi", "bi-x-square"], ["fill-rule", "evenodd", "d", "M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"], ["fill-rule", "evenodd", "d", "M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"], ["fill-rule", "evenodd", "d", "M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"], [1, "idea"], ["id", "newIdea", "type", "text", "name", "newIdea", 1, "idea-trading-input", 3, "value", "keyup.enter"]], template: function IdeaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Estrategias y conclusiones");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function IdeaComponent_Template_button_click_5_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Idea de trading:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function IdeaComponent_Template_input_ngModelChange_11_listener($event) { return ctx.newIdea = $event; })("ngModelChange", function IdeaComponent_Template_input_ngModelChange_11_listener($event) { return ctx.inputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Ideas");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function IdeaComponent_Template_div_cdkDropListDropped_15_listener($event) { return ctx.dropIdeas($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, IdeaComponent_div_17_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Estrategias");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function IdeaComponent_Template_div_cdkDropListDropped_22_listener($event) { return ctx.dropStrategies($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, IdeaComponent_div_24_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Conclusiones");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 11, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("cdkDropListDropped", function IdeaComponent_Template_div_cdkDropListDropped_28_listener($event) { return ctx.dropConclusion($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, IdeaComponent_div_30_Template, 2, 1, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, IdeaComponent_div_32_Template, 3, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](23);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newIdea);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDropListData", ctx.ideas)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](11, _c0, _r2, _r4));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ideas);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDropListData", ctx.strategies)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](14, _c0, _r0, _r4));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.strategies);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkDropListData", ctx.conclusion)("cdkDropListConnectedTo", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](17, _c0, _r0, _r2));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.conclusion);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ideas);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"]], styles: ["h1[_ngcontent-%COMP%] {\n    text-align: center;\n    color: #daf13e;\n    margin-top: 15px;\n}\n\ninput[_ngcontent-%COMP%] {\n  \n    border: 0;\n    background-color: transparent;\n    color: #45a12e;\n    border-bottom: 1px solid #daf13e;\n    text-align: left;\n}\n\nsvg[_ngcontent-%COMP%] {\n    margin-right: 5px;\n}\n\nhr[_ngcontent-%COMP%] {\n  background-color: antiquewhite;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.ideas-list[_ngcontent-%COMP%] {\n  text-align: center;\n  color:#daf13e;\n\n}\n\n.bi[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.header[_ngcontent-%COMP%] {\n    display: flex;\n    color: #daf13e;\n    margin-bottom: 15px;\n}\n\n.header-idea[_ngcontent-%COMP%] {\n  display: flex;\n  color: #daf13e;\n  margin-bottom: 15px;\n  flex-wrap: nowrap;\n  text-align: center;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  text-align: center;\n}\n\n.idea-label[_ngcontent-%COMP%] {\n   text-align: right;\n   margin: 0 15px 0 0;\n   flex: 0 1 25%;\n\n}\n\n.idea-input[_ngcontent-%COMP%] {\n    flex: 0 1 50%;\n}\n\n.ideas[_ngcontent-%COMP%] {\n  display: flex;\n  color:green;\n  margin-bottom: 1px;\n  align-items: center;\n}\n\n.idea[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.idea-trading-input[_ngcontent-%COMP%] {\n  flex: 1 1 400px;\n}\n\n.btn-edit[_ngcontent-%COMP%] {\n  background-color: transparent;\n  margin-right: 15px;\n  color: green;\n  border: 1px solid green ;\n}\n\n.strategy-list[_ngcontent-%COMP%] {\n    display: flex;\n    text-align: center;\n    color: #daf13e;\n    justify-content: space-around;\n    flex-wrap: wrap;\n}\n\nli[_ngcontent-%COMP%] {\n    list-style: none;\n}\n\n.example-container[_ngcontent-%COMP%] {\n    width: 400px;\n    max-width: 100%;\n    margin: 0 0px 25px 0px;\n    display: inline-block;\n    vertical-align: top;\n  }\n\n.box-list[_ngcontent-%COMP%] {\n  max-width: 400px;\n  border: solid 1px green;\n  \n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 15px;\n}\n\n.box-list2[_ngcontent-%COMP%] {\n  border: solid 1px green;\n  min-height: 60px;\n  background: whitesmoke;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.box-item[_ngcontent-%COMP%] {\n  padding: 10px 10px;\n  border-bottom: solid 1px green;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  color:green;\n  background:whitesmoke;\n  font-size: 14px;\n}\n\n.box-item2[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px green;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  color:green;\n  font-size: 14px;\n}\n\n.box-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: solid 0px green;\n}\n\n.box-item2[_ngcontent-%COMP%]:last-child {\n  border-bottom: solid 0px green;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlkZWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0lBQ2QsU0FBUztJQUNULDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTs7QUFFZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtHQUNHLGlCQUFpQjtHQUNqQixrQkFBa0I7R0FDbEIsYUFBYTs7QUFFaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix3QkFBd0I7QUFDMUI7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixtQkFBbUI7RUFDckI7O0FBRUY7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsY0FBYztFQUNkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCOztnREFFOEM7QUFDaEQ7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzREFBc0Q7QUFDeEQiLCJmaWxlIjoiaWRlYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2RhZjEzZTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5pbnB1dCB7XG4gIC8qIHdpZHRoOiA3NSU7ICovXG4gICAgYm9yZGVyOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjNDVhMTJlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGFmMTNlO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbnN2ZyB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaWRlYXMtbGlzdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6I2RhZjEzZTtcblxufVxuXG4uYmkge1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICNkYWYxM2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmhlYWRlci1pZGVhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICNkYWYxM2U7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlkZWEtbGFiZWwge1xuICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICBtYXJnaW46IDAgMTVweCAwIDA7XG4gICBmbGV4OiAwIDEgMjUlO1xuXG59XG5cbi5pZGVhLWlucHV0IHtcbiAgICBmbGV4OiAwIDEgNTAlO1xufVxuICBcbi5pZGVhcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOmdyZWVuO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pZGVhIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5pZGVhLXRyYWRpbmctaW5wdXQge1xuICBmbGV4OiAxIDEgNDAwcHg7XG59XG5cbi5idG4tZWRpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGNvbG9yOiBncmVlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW4gO1xufVxuXG5cbi5zdHJhdGVneS1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI2RhZjEzZTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbmxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwIDBweCAyNXB4IDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgfVxuICBcbi5ib3gtbGlzdCB7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4IGdyZWVuO1xuICAvKm1pbi1oZWlnaHQ6IDQwcHg7Ki9cbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uYm94LWxpc3QyIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggZ3JlZW47XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4gIFxuLmJveC1pdGVtIHtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggZ3JlZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBjb2xvcjpncmVlbjtcbiAgYmFja2dyb3VuZDp3aGl0ZXNtb2tlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5ib3gtaXRlbTIge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBncmVlbjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY3Vyc29yOiBtb3ZlO1xuICBjb2xvcjpncmVlbjtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYm94LWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDBweCBncmVlbjtcbn1cblxuLmJveC1pdGVtMjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMHB4IGdyZWVuO1xufVxuICBcbi5jZGstZHJhZy1wcmV2aWV3IHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4gIFxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cbiAgXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xufVxuICBcbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuICBcbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](IdeaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-idea',
                templateUrl: './idea.component.html',
                styleUrls: ['./idea.component.css']
            }]
    }], function () { return [{ type: _idea_service__WEBPACK_IMPORTED_MODULE_5__["IdeaService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }, { type: _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map