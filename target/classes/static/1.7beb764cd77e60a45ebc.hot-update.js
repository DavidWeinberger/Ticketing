webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/tablet-view/sectors/sectors.component.html":
/*!*********************************************************************************!*\
  !*** ./src/main/webapp/app/entities/tablet-view/sectors/sectors.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div> <div class=\\\"container\\\"> <div class=\\\"row\\\"> <div class=\\\"col\\\"> <h2 style=\\\"font-weight: bold\\\">Sektor - {{sector}}</h2> </div> <div *ngIf=\\\"tickets.length > 0\\\"> <h2 style=\\\"float: right; font-weight: bold; margin-right: 2vh\\\">Ticketpreis: {{tickets[0].price}}€</h2> </div> </div> </div> <div class=\\\"container\\\"> <div class=\\\"row\\\"> <div style=\\\"width: 12vh; font-weight: bold; font-size: 3vh\\\"> <span>Sitz ↦</span> <br> <span>↧ Reihe</span> </div> <div class=\\\"col-sm\\\" style=\\\"font-size: 3vh; font-weight: bold\\\" *ngFor=\\\"let z of seatArr; let c = index\\\"> <span>{{c+1 + (10 * page)}}</span> </div> </div> <div class=\\\"row\\\" *ngFor=\\\"let x of rowArr; let a = index\\\"> <div style=\\\"width: 12vh; font-weight: bold; font-size: 3vh\\\"> <span>{{rowArr.length - a}}</span> </div> <div *ngFor=\\\"let y of seatArr; let b = index\\\" class=\\\"col-sm\\\"> <span class=\\\"dot places\\\" style=\\\"width: 3vh; height: 3vh\\\" [style.backgroundColor]=\\\"getColor(getState(a,b+ (10 * page)))\\\" (click)=\\\"dotClick(a,b+ (10 * page))\\\"></span> </div> </div> </div> </div> <button *ngIf=\\\"page < \\\" class=\\\"btn\\\" style=\\\"float: right;\\\" (click)=\\\"nextPage()\\\"><h1 style=\\\"font-weight: bold; font-size: 90px;\\\">〉</h1></button> <button class=\\\"btn\\\" style=\\\"float: left;\\\" (click)=\\\"nextPage()\\\"><h1 style=\\\"font-weight: bold; font-size: 90px;\\\">〈</h1></button> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3RhYmxldC12aWV3L3NlY3RvcnMvc2VjdG9ycy5jb21wb25lbnQuaHRtbD8yNTY5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFJQUFxSSxRQUFRLHlFQUF5RSxtQkFBbUIsb0NBQW9DLGtCQUFrQixtR0FBbUcsbUJBQW1CLHFIQUFxSCwrQ0FBK0MsMEJBQTBCLG1CQUFtQixrRUFBa0UsMkNBQTJDLG1CQUFtQiwyQkFBMkIsbUJBQW1CLDhDQUE4QyxpRkFBaUYsd05BQXdOLHdEQUF3RCxpQkFBaUIsNkRBQTZELHdEQUF3RCxpQkFBaUIiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3RhYmxldC12aWV3L3NlY3RvcnMvc2VjdG9ycy5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPiA8aDIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkXFxcIj5TZWt0b3IgLSB7e3NlY3Rvcn19PC9oMj4gPC9kaXY+IDxkaXYgKm5nSWY9XFxcInRpY2tldHMubGVuZ3RoID4gMFxcXCI+IDxoMiBzdHlsZT1cXFwiZmxvYXQ6IHJpZ2h0OyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luLXJpZ2h0OiAydmhcXFwiPlRpY2tldHByZWlzOiB7e3RpY2tldHNbMF0ucHJpY2V9feKCrDwvaDI+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgc3R5bGU9XFxcIndpZHRoOiAxMnZoOyBmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAzdmhcXFwiPiA8c3Bhbj5TaXR6IOKGpjwvc3Bhbj4gPGJyPiA8c3Bhbj7ihqcgUmVpaGU8L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtc21cXFwiIHN0eWxlPVxcXCJmb250LXNpemU6IDN2aDsgZm9udC13ZWlnaHQ6IGJvbGRcXFwiICpuZ0Zvcj1cXFwibGV0IHogb2Ygc2VhdEFycjsgbGV0IGMgPSBpbmRleFxcXCI+IDxzcGFuPnt7YysxICsgKDEwICogcGFnZSl9fTwvc3Bhbj4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0Zvcj1cXFwibGV0IHggb2Ygcm93QXJyOyBsZXQgYSA9IGluZGV4XFxcIj4gPGRpdiBzdHlsZT1cXFwid2lkdGg6IDEydmg7IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDN2aFxcXCI+IDxzcGFuPnt7cm93QXJyLmxlbmd0aCAtIGF9fTwvc3Bhbj4gPC9kaXY+IDxkaXYgKm5nRm9yPVxcXCJsZXQgeSBvZiBzZWF0QXJyOyBsZXQgYiA9IGluZGV4XFxcIiBjbGFzcz1cXFwiY29sLXNtXFxcIj4gPHNwYW4gY2xhc3M9XFxcImRvdCBwbGFjZXNcXFwiIHN0eWxlPVxcXCJ3aWR0aDogM3ZoOyBoZWlnaHQ6IDN2aFxcXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XFxcImdldENvbG9yKGdldFN0YXRlKGEsYisgKDEwICogcGFnZSkpKVxcXCIgKGNsaWNrKT1cXFwiZG90Q2xpY2soYSxiKyAoMTAgKiBwYWdlKSlcXFwiPjwvc3Bhbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDxidXR0b24gKm5nSWY9XFxcInBhZ2UgPCBcXFwiIGNsYXNzPVxcXCJidG5cXFwiIHN0eWxlPVxcXCJmbG9hdDogcmlnaHQ7XFxcIiAoY2xpY2spPVxcXCJuZXh0UGFnZSgpXFxcIj48aDEgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDkwcHg7XFxcIj7ijKo8L2gxPjwvYnV0dG9uPiA8YnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiIHN0eWxlPVxcXCJmbG9hdDogbGVmdDtcXFwiIChjbGljayk9XFxcIm5leHRQYWdlKClcXFwiPjxoMSBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGZvbnQtc2l6ZTogOTBweDtcXFwiPuKMqTwvaDE+PC9idXR0b24+IFwiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/tablet-view/sectors/sectors.component.html\n");

/***/ }),

/***/ "./src/main/webapp/app/entities/tablet-view/sectors/sectors.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/main/webapp/app/entities/tablet-view/sectors/sectors.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SectorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SectorsComponent\", function() { return SectorsComponent; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ \"./node_modules/rxjs/_esm5/operators/index.js\");\n/* harmony import */ var app_entities_tickets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/entities/tickets */ \"./src/main/webapp/app/entities/tickets/index.ts\");\n/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ \"./node_modules/ng-jhipster/fesm5/ng-jhipster.js\");\n/* harmony import */ var app_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core */ \"./src/main/webapp/app/core/index.ts\");\n/* harmony import */ var app_entities_cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/entities/cart */ \"./src/main/webapp/app/entities/cart/index.ts\");\n/* harmony import */ var app_shared_model_cart_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/model/cart.model */ \"./src/main/webapp/app/shared/model/cart.model.ts\");\n/* harmony import */ var app_shared_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/notification.service */ \"./src/main/webapp/app/shared/notification.service.ts\");\n\r\nvar _a, _b, _c, _d, _e, _f;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet SectorsComponent = class SectorsComponent {\r\n    constructor(accountService, cartService, jhiAlertService, ticketsService, notificationService) {\r\n        this.accountService = accountService;\r\n        this.cartService = cartService;\r\n        this.jhiAlertService = jhiAlertService;\r\n        this.ticketsService = ticketsService;\r\n        this.notificationService = notificationService;\r\n        this.tickets = [];\r\n        this.cart = new app_shared_model_cart_model__WEBPACK_IMPORTED_MODULE_7__[\"Cart\"]();\r\n        this.paging = false;\r\n        this.page = 0;\r\n        this.sides = 0;\r\n    }\r\n    loadAll() {\r\n        this.ticketsService\r\n            .query()\r\n            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"filter\"])((res) => res.ok), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"map\"])((res) => res.body))\r\n            .subscribe((res) => {\r\n            this.tickets = res;\r\n            this.tickets = this.tickets.filter(x => x.place === this.sector.toString());\r\n            console.log(this.tickets);\r\n            this.rows = Math.max.apply(Math, this.tickets.map(o => o.rows));\r\n            this.seats = Math.max.apply(Math, this.tickets.map(o => o.seats));\r\n            console.log(this.rows);\r\n            this.rowArr = new Array(this.rows);\r\n            this.seatArr = new Array(this.seats).fill(1, 0, this.seats);\r\n            if (this.seatArr.length > 10) {\r\n                this.sides = this.seatArr.length / 10;\r\n                if (this.seatArr.length % 10 !== 0) {\r\n                    this.sides++;\r\n                }\r\n                this.paging = true;\r\n                if (this.page === sides) {\r\n                    this.seatArr = this.seatArr.slice(0 + 10 * this.page);\r\n                }\r\n                else {\r\n                    this.seatArr = this.seatArr.slice(0 + 10 * this.page, 10 + 10 * this.page);\r\n                }\r\n                console.log(this.seatArr);\r\n            }\r\n        }, (res) => this.onError(res.message));\r\n    }\r\n    ngOnInit() {\r\n        this.account = this.accountService.identity().then();\r\n        this.account.then(x => {\r\n            this.userId = Number(x.id);\r\n        });\r\n        this.loadAll();\r\n        this.notificationService.listen().subscribe(data => {\r\n            if (data !== undefined) {\r\n                const parts = data.toString().split('|');\r\n                console.log(parts);\r\n                if (parts.length > 1) {\r\n                    const chunks = parts[2].split(':');\r\n                    if (this.sector === chunks[1]) {\r\n                        this.loadAll();\r\n                    }\r\n                }\r\n                else {\r\n                    this.loadAll();\r\n                }\r\n            }\r\n        });\r\n    }\r\n    onError(errorMessage) {\r\n        this.jhiAlertService.error(errorMessage, null, null);\r\n    }\r\n    getState(row, seat) {\r\n        seat++;\r\n        row = this.rows - row;\r\n        const ticket = this.tickets.find(x => x.rows === row && x.seats === seat);\r\n        if (ticket !== undefined) {\r\n            if (ticket.state === null || ticket.state == null || ticket.state === undefined) {\r\n                // console.log('i am here');\r\n                ticket.state = 0;\r\n            }\r\n            return ticket.state;\r\n        }\r\n        return 0;\r\n    }\r\n    dotClick(row, seat) {\r\n        seat++;\r\n        row = this.rows - row;\r\n        this.ticket = this.tickets.find(x => x.rows === row && x.seats === seat);\r\n        console.log(this.userId);\r\n        if (this.ticket.state === 0) {\r\n            this.reserve();\r\n        }\r\n        else if (this.ticket.state === 1) {\r\n            this.cartService.findCartsByUserId(this.userId).subscribe(data => {\r\n                console.log(data);\r\n                data.body.forEach(carts => {\r\n                    if (this.ticket.id === carts.ticketId) {\r\n                        console.log('found');\r\n                        this.ticketsService\r\n                            .find(carts.ticketId)\r\n                            .toPromise()\r\n                            .then(_ticket => {\r\n                            console.log('got ticket');\r\n                            console.log(_ticket);\r\n                            this.remove(_ticket.body);\r\n                        });\r\n                    }\r\n                });\r\n            });\r\n        }\r\n    }\r\n    remove(ticket) {\r\n        this.cartService.deleteByTicketId(ticket.id).subscribe();\r\n        ticket.state = 0;\r\n        this.ticketsService.update(ticket).subscribe();\r\n    }\r\n    reserve() {\r\n        this.cart.userId = this.userId;\r\n        this.cart.ticketId = this.ticket.id;\r\n        this.cartService.create(this.cart).subscribe();\r\n        this.ticket.state = 1;\r\n        this.ticketsService.update(this.ticket).subscribe();\r\n    }\r\n    getColor(state) {\r\n        switch (state) {\r\n            case 0:\r\n                return 'green';\r\n            case 1:\r\n                return 'gold';\r\n            case 2:\r\n                return 'darkgrey';\r\n        }\r\n    }\r\n    nextPage() {\r\n        if (this.paging) {\r\n            this.page++;\r\n            this.loadAll();\r\n        }\r\n    }\r\n    backPage() {\r\n        if (this.paging) {\r\n            this.page--;\r\n        }\r\n    }\r\n};\r\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\r\n    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__[\"Input\"])(),\r\n    tslib__WEBPACK_IMPORTED_MODULE_0__[\"__metadata\"](\"design:type\", typeof (_a = typeof String !== \"undefined\" && String) === \"function\" ? _a : Object)\r\n], SectorsComponent.prototype, \"sector\", void 0);\r\nSectorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\r\n    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__[\"Component\"])({\r\n        selector: 'jhi-sectors',\r\n        template: __webpack_require__(/*! ./sectors.component.html */ \"./src/main/webapp/app/entities/tablet-view/sectors/sectors.component.html\"),\r\n        styles: [__webpack_require__(/*! ./sectors.component.scss */ \"./src/main/webapp/app/entities/tablet-view/sectors/sectors.component.scss\")]\r\n    }),\r\n    tslib__WEBPACK_IMPORTED_MODULE_0__[\"__metadata\"](\"design:paramtypes\", [typeof (_b = typeof app_core__WEBPACK_IMPORTED_MODULE_5__[\"AccountService\"] !== \"undefined\" && app_core__WEBPACK_IMPORTED_MODULE_5__[\"AccountService\"]) === \"function\" ? _b : Object, typeof (_c = typeof app_entities_cart__WEBPACK_IMPORTED_MODULE_6__[\"CartService\"] !== \"undefined\" && app_entities_cart__WEBPACK_IMPORTED_MODULE_6__[\"CartService\"]) === \"function\" ? _c : Object, typeof (_d = typeof ng_jhipster__WEBPACK_IMPORTED_MODULE_4__[\"JhiAlertService\"] !== \"undefined\" && ng_jhipster__WEBPACK_IMPORTED_MODULE_4__[\"JhiAlertService\"]) === \"function\" ? _d : Object, typeof (_e = typeof app_entities_tickets__WEBPACK_IMPORTED_MODULE_3__[\"TicketsService\"] !== \"undefined\" && app_entities_tickets__WEBPACK_IMPORTED_MODULE_3__[\"TicketsService\"]) === \"function\" ? _e : Object, typeof (_f = typeof app_shared_notification_service__WEBPACK_IMPORTED_MODULE_8__[\"NotificationService\"] !== \"undefined\" && app_shared_notification_service__WEBPACK_IMPORTED_MODULE_8__[\"NotificationService\"]) === \"function\" ? _f : Object])\r\n], SectorsComponent);\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3RhYmxldC12aWV3L3NlY3RvcnMvc2VjdG9ycy5jb21wb25lbnQudHM/NTgwYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlEO0FBQ1o7QUFHUztBQUNSO0FBQ0o7QUFDTTtBQUNHO0FBQ21CO0FBT3RFLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBZ0IzQixZQUNVLGNBQThCLEVBQzlCLFdBQXdCLEVBQ3RCLGVBQWdDLEVBQ2hDLGNBQThCLEVBQzlCLG1CQUF3QztRQUoxQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBbkIxQyxZQUFPLEdBQWUsRUFBRSxDQUFDO1FBTTNCLFNBQUksR0FBUyxJQUFJLGdFQUFJLEVBQUUsQ0FBQztRQUl4QixXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFVBQUssR0FBRyxDQUFDLENBQUM7SUFRZixDQUFDO0lBRUosT0FBTztRQUNMLElBQUksQ0FBQyxjQUFjO2FBQ2hCLEtBQUssRUFBRTthQUNQLElBQUksQ0FDSCw2REFBTSxDQUFDLENBQUMsR0FBNkIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUNqRCwwREFBRyxDQUFDLENBQUMsR0FBNkIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUNqRDthQUNBLFNBQVMsQ0FDUixDQUFDLEdBQWUsRUFBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUM1RSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO2dCQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFDdEMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFO29CQUNsQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ2Q7Z0JBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLLEVBQUU7b0JBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3ZEO3FCQUFNO29CQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM1RTtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMzQjtRQUNILENBQUMsRUFDRCxDQUFDLEdBQXNCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUN0RCxDQUFDO0lBQ04sQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7Z0JBQ3RCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3BCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25DLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzdCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztxQkFDaEI7aUJBQ0Y7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUNoQjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRVMsT0FBTyxDQUFDLFlBQW9CO1FBQ3BDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSTtRQUNoQixJQUFJLEVBQUUsQ0FBQztRQUNQLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUN0QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDMUUsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0JBQy9FLDRCQUE0QjtnQkFDNUIsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7YUFDbEI7WUFDRCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDckI7UUFDRCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUk7UUFDaEIsSUFBSSxFQUFFLENBQUM7UUFDUCxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDekUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDM0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDeEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxLQUFLLENBQUMsUUFBUSxFQUFFO3dCQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsY0FBYzs2QkFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUM7NkJBQ3BCLFNBQVMsRUFBRTs2QkFDWCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7NEJBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzVCLENBQUMsQ0FBQyxDQUFDO3FCQUNOO2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFTSxNQUFNLENBQUMsTUFBZ0I7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDekQsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUMvQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFDRCxRQUFRLENBQUMsS0FBSztRQUNaLFFBQVEsS0FBSyxFQUFFO1lBQ2IsS0FBSyxDQUFDO2dCQUNKLE9BQU8sT0FBTyxDQUFDO1lBQ2pCLEtBQUssQ0FBQztnQkFDSixPQUFPLE1BQU0sQ0FBQztZQUNoQixLQUFLLENBQUM7Z0JBQ0osT0FBTyxVQUFVLENBQUM7U0FDckI7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0NBQ0Y7QUFqS1U7SUFBUiwyREFBSyxFQUFFO3dGQUFTLE1BQU0sb0JBQU4sTUFBTTtnREFBQztBQURiLGdCQUFnQjtJQUw1QiwrREFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGFBQWE7UUFDdkIsNkJBQWEsNEdBQTBCO1FBQ3ZDLFNBQVMsbUJBQUcsNEdBQTJCO0tBQ3hDLENBQUM7K0ZBa0IwQix1REFBYyxvQkFBZCx1REFBYyxvREFDakIsNkRBQVcsb0JBQVgsNkRBQVcsb0RBQ0wsMkRBQWUsb0JBQWYsMkRBQWUsb0RBQ2hCLG1FQUFjLG9CQUFkLG1FQUFjLG9EQUNULG1GQUFtQixvQkFBbkIsbUZBQW1CO0dBckJ6QyxnQkFBZ0IsQ0FrSzVCO0FBbEs0QiIsImZpbGUiOiIuL3NyYy9tYWluL3dlYmFwcC9hcHAvZW50aXRpZXMvdGFibGV0LXZpZXcvc2VjdG9ycy9zZWN0b3JzLmNvbXBvbmVudC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIdHRwRXJyb3JSZXNwb25zZSwgSHR0cFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSVRpY2tldHMgfSBmcm9tICdhcHAvc2hhcmVkL21vZGVsL3RpY2tldHMubW9kZWwnO1xuaW1wb3J0IHsgVGlja2V0c1NlcnZpY2UgfSBmcm9tICdhcHAvZW50aXRpZXMvdGlja2V0cyc7XG5pbXBvcnQgeyBKaGlBbGVydFNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJ2FwcC9jb3JlJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnYXBwL2VudGl0aWVzL2NhcnQnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJ2FwcC9zaGFyZWQvbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnYXBwL3NoYXJlZC9ub3RpZmljYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2poaS1zZWN0b3JzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlY3RvcnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zZWN0b3JzLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2VjdG9yc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNlY3RvcjogU3RyaW5nO1xuICBwcm90ZWN0ZWQgdGlja2V0czogSVRpY2tldHNbXSA9IFtdO1xuICBwcml2YXRlIHJvd3M6IG51bWJlcjtcbiAgcHJpdmF0ZSBzZWF0czogbnVtYmVyO1xuICByb3dBcnI6IG51bWJlcltdO1xuICBzZWF0QXJyOiBudW1iZXJbXTtcbiAgYWxsU2VhdHM6IG51bWJlcltdO1xuICBwcml2YXRlIGNhcnQ6IENhcnQgPSBuZXcgQ2FydCgpO1xuICBwcml2YXRlIGFjY291bnQ6IFByb21pc2U8QWNjb3VudD47XG4gIHByaXZhdGUgdXNlcklkOiBudW1iZXI7XG4gIHByaXZhdGUgdGlja2V0OiBJVGlja2V0cztcbiAgcHJpdmF0ZSBwYWdpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBwYWdlID0gMDtcbiAgcHJpdmF0ZSBzaWRlcyA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY2NvdW50U2VydmljZTogQWNjb3VudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGpoaUFsZXJ0U2VydmljZTogSmhpQWxlcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0aWNrZXRzU2VydmljZTogVGlja2V0c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG5vdGlmaWNhdGlvblNlcnZpY2U6IE5vdGlmaWNhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWRBbGwoKSB7XG4gICAgdGhpcy50aWNrZXRzU2VydmljZVxuICAgICAgLnF1ZXJ5KClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHJlczogSHR0cFJlc3BvbnNlPElUaWNrZXRzW10+KSA9PiByZXMub2spLFxuICAgICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPElUaWNrZXRzW10+KSA9PiByZXMuYm9keSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXM6IElUaWNrZXRzW10pID0+IHtcbiAgICAgICAgICB0aGlzLnRpY2tldHMgPSByZXM7XG4gICAgICAgICAgdGhpcy50aWNrZXRzID0gdGhpcy50aWNrZXRzLmZpbHRlcih4ID0+IHgucGxhY2UgPT09IHRoaXMuc2VjdG9yLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGlja2V0cyk7XG4gICAgICAgICAgdGhpcy5yb3dzID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgdGhpcy50aWNrZXRzLm1hcChvID0+IG8ucm93cykpO1xuICAgICAgICAgIHRoaXMuc2VhdHMgPSBNYXRoLm1heC5hcHBseShNYXRoLCB0aGlzLnRpY2tldHMubWFwKG8gPT4gby5zZWF0cykpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucm93cyk7XG4gICAgICAgICAgdGhpcy5yb3dBcnIgPSBuZXcgQXJyYXkodGhpcy5yb3dzKTtcbiAgICAgICAgICB0aGlzLnNlYXRBcnIgPSBuZXcgQXJyYXkodGhpcy5zZWF0cykuZmlsbCgxLCAwLCB0aGlzLnNlYXRzKTtcbiAgICAgICAgICBpZiAodGhpcy5zZWF0QXJyLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgICAgICB0aGlzLnNpZGVzID0gdGhpcy5zZWF0QXJyLmxlbmd0aCAvIDEwO1xuICAgICAgICAgICAgaWYgKHRoaXMuc2VhdEFyci5sZW5ndGggJSAxMCAhPT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLnNpZGVzKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhZ2luZyA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy5wYWdlID09PSBzaWRlcykge1xuICAgICAgICAgICAgICB0aGlzLnNlYXRBcnIgPSB0aGlzLnNlYXRBcnIuc2xpY2UoMCArIDEwICogdGhpcy5wYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2VhdEFyciA9IHRoaXMuc2VhdEFyci5zbGljZSgwICsgMTAgKiB0aGlzLnBhZ2UsIDEwICsgMTAgKiB0aGlzLnBhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWF0QXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIChyZXM6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB0aGlzLm9uRXJyb3IocmVzLm1lc3NhZ2UpXG4gICAgICApO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hY2NvdW50ID0gdGhpcy5hY2NvdW50U2VydmljZS5pZGVudGl0eSgpLnRoZW4oKTtcbiAgICB0aGlzLmFjY291bnQudGhlbih4ID0+IHtcbiAgICAgIHRoaXMudXNlcklkID0gTnVtYmVyKHguaWQpO1xuICAgIH0pO1xuICAgIHRoaXMubG9hZEFsbCgpO1xuICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5saXN0ZW4oKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gZGF0YS50b1N0cmluZygpLnNwbGl0KCd8Jyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBhcnRzKTtcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBjb25zdCBjaHVua3MgPSBwYXJ0c1syXS5zcGxpdCgnOicpO1xuICAgICAgICAgIGlmICh0aGlzLnNlY3RvciA9PT0gY2h1bmtzWzFdKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRBbGwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5sb2FkQWxsKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkVycm9yKGVycm9yTWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5qaGlBbGVydFNlcnZpY2UuZXJyb3IoZXJyb3JNZXNzYWdlLCBudWxsLCBudWxsKTtcbiAgfVxuXG4gIGdldFN0YXRlKHJvdywgc2VhdCkge1xuICAgIHNlYXQrKztcbiAgICByb3cgPSB0aGlzLnJvd3MgLSByb3c7XG4gICAgY29uc3QgdGlja2V0ID0gdGhpcy50aWNrZXRzLmZpbmQoeCA9PiB4LnJvd3MgPT09IHJvdyAmJiB4LnNlYXRzID09PSBzZWF0KTtcbiAgICBpZiAodGlja2V0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0aWNrZXQuc3RhdGUgPT09IG51bGwgfHwgdGlja2V0LnN0YXRlID09IG51bGwgfHwgdGlja2V0LnN0YXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2kgYW0gaGVyZScpO1xuICAgICAgICB0aWNrZXQuc3RhdGUgPSAwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRpY2tldC5zdGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBkb3RDbGljayhyb3csIHNlYXQpIHtcbiAgICBzZWF0Kys7XG4gICAgcm93ID0gdGhpcy5yb3dzIC0gcm93O1xuICAgIHRoaXMudGlja2V0ID0gdGhpcy50aWNrZXRzLmZpbmQoeCA9PiB4LnJvd3MgPT09IHJvdyAmJiB4LnNlYXRzID09PSBzZWF0KTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJJZCk7XG4gICAgaWYgKHRoaXMudGlja2V0LnN0YXRlID09PSAwKSB7XG4gICAgICB0aGlzLnJlc2VydmUoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudGlja2V0LnN0YXRlID09PSAxKSB7XG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlLmZpbmRDYXJ0c0J5VXNlcklkKHRoaXMudXNlcklkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICBkYXRhLmJvZHkuZm9yRWFjaChjYXJ0cyA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMudGlja2V0LmlkID09PSBjYXJ0cy50aWNrZXRJZCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZvdW5kJyk7XG4gICAgICAgICAgICB0aGlzLnRpY2tldHNTZXJ2aWNlXG4gICAgICAgICAgICAgIC5maW5kKGNhcnRzLnRpY2tldElkKVxuICAgICAgICAgICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgICAgICAgLnRoZW4oX3RpY2tldCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2dvdCB0aWNrZXQnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhfdGlja2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZShfdGlja2V0LmJvZHkpO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbW92ZSh0aWNrZXQ6IElUaWNrZXRzKSB7XG4gICAgdGhpcy5jYXJ0U2VydmljZS5kZWxldGVCeVRpY2tldElkKHRpY2tldC5pZCkuc3Vic2NyaWJlKCk7XG4gICAgdGlja2V0LnN0YXRlID0gMDtcbiAgICB0aGlzLnRpY2tldHNTZXJ2aWNlLnVwZGF0ZSh0aWNrZXQpLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVzZXJ2ZSgpIHtcbiAgICB0aGlzLmNhcnQudXNlcklkID0gdGhpcy51c2VySWQ7XG4gICAgdGhpcy5jYXJ0LnRpY2tldElkID0gdGhpcy50aWNrZXQuaWQ7XG4gICAgdGhpcy5jYXJ0U2VydmljZS5jcmVhdGUodGhpcy5jYXJ0KS5zdWJzY3JpYmUoKTtcbiAgICB0aGlzLnRpY2tldC5zdGF0ZSA9IDE7XG4gICAgdGhpcy50aWNrZXRzU2VydmljZS51cGRhdGUodGhpcy50aWNrZXQpLnN1YnNjcmliZSgpO1xuICB9XG4gIGdldENvbG9yKHN0YXRlKSB7XG4gICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gJ2dyZWVuJztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuICdnb2xkJztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuICdkYXJrZ3JleSc7XG4gICAgfVxuICB9XG5cbiAgbmV4dFBhZ2UoKSB7XG4gICAgaWYgKHRoaXMucGFnaW5nKSB7XG4gICAgICB0aGlzLnBhZ2UrKztcbiAgICAgIHRoaXMubG9hZEFsbCgpO1xuICAgIH1cbiAgfVxuXG4gIGJhY2tQYWdlKCkge1xuICAgIGlmICh0aGlzLnBhZ2luZykge1xuICAgICAgdGhpcy5wYWdlLS07XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/tablet-view/sectors/sectors.component.ts\n");

/***/ })

})