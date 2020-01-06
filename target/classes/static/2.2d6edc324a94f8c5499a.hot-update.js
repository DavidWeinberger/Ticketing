webpackHotUpdate(2,{

/***/ "./src/main/webapp/app/entities/tablet-view/displaysector/displaysector.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/tablet-view/displaysector/displaysector.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DisplaysectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DisplaysectorComponent\", function() { return DisplaysectorComponent; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ \"./node_modules/rxjs/_esm5/operators/index.js\");\n/* harmony import */ var app_entities_tickets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/entities/tickets */ \"./src/main/webapp/app/entities/tickets/index.ts\");\n/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-jhipster */ \"./node_modules/ng-jhipster/fesm5/ng-jhipster.js\");\n/* harmony import */ var app_shared_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/notification.service */ \"./src/main/webapp/app/shared/notification.service.ts\");\n\r\nvar _a, _b, _c, _d;\r\n\r\n\r\n\r\n\r\n\r\nlet DisplaysectorComponent = class DisplaysectorComponent {\r\n    constructor(ticketsService, jhiAlertService, notificationService) {\r\n        this.ticketsService = ticketsService;\r\n        this.jhiAlertService = jhiAlertService;\r\n        this.notificationService = notificationService;\r\n        this.tickets = [];\r\n    }\r\n    loadAll() {\r\n        this.ticketsService\r\n            .query()\r\n            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"filter\"])((res) => res.ok), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"map\"])((res) => res.body))\r\n            .subscribe((res) => {\r\n            this.tickets = res;\r\n            console.log(this.sector);\r\n            this.tickets = this.tickets.filter(x => x.place === this.sector);\r\n            console.log(this.tickets);\r\n            this.rows = Math.max.apply(Math, this.tickets.map(o => o.rows));\r\n            this.seats = Math.max.apply(Math, this.tickets.map(o => o.seats));\r\n            console.log(this.rows);\r\n            console.log(this.seats);\r\n            this.rowArr = new Array(this.rows);\r\n            this.seatArr = new Array(this.seats);\r\n        }, (res) => this.onError(res.message));\r\n    }\r\n    onError(errorMessage) {\r\n        this.jhiAlertService.error(errorMessage, null, null);\r\n    }\r\n    ngOnInit() {\r\n        this.loadAll();\r\n        this.notificationService.listen().subscribe(data => {\r\n            this.loadAll();\r\n        });\r\n    }\r\n    getState(row, seat) {\r\n        seat++;\r\n        row = this.rows - row;\r\n        const ticket = this.tickets.find(x => x.rows === row && x.seats === seat);\r\n        // console.log(ticket);\r\n        if (ticket.state === null || ticket.state == null || ticket.state === undefined) {\r\n            // console.log('i am here');\r\n            ticket.state = 0;\r\n        }\r\n        return ticket.state;\r\n    }\r\n    getColor(state) {\r\n        switch (state) {\r\n            case 0:\r\n                return 'green';\r\n            case 1:\r\n                return 'gold';\r\n            case 2:\r\n                return 'darkgrey';\r\n        }\r\n    }\r\n};\r\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\r\n    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__[\"Input\"])(),\r\n    tslib__WEBPACK_IMPORTED_MODULE_0__[\"__metadata\"](\"design:type\", typeof (_a = typeof String !== \"undefined\" && String) === \"function\" ? _a : Object)\r\n], DisplaysectorComponent.prototype, \"sector\", void 0);\r\nDisplaysectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\r\n    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__[\"Component\"])({\r\n        selector: 'jhi-displaysector',\r\n        template: __webpack_require__(/*! ./displaysector.component.html */ \"./src/main/webapp/app/entities/tablet-view/displaysector/displaysector.component.html\"),\r\n        styles: [__webpack_require__(/*! ./displaysector.component.scss */ \"./src/main/webapp/app/entities/tablet-view/displaysector/displaysector.component.scss\")]\r\n    }),\r\n    tslib__WEBPACK_IMPORTED_MODULE_0__[\"__metadata\"](\"design:paramtypes\", [typeof (_b = typeof app_entities_tickets__WEBPACK_IMPORTED_MODULE_3__[\"TicketsService\"] !== \"undefined\" && app_entities_tickets__WEBPACK_IMPORTED_MODULE_3__[\"TicketsService\"]) === \"function\" ? _b : Object, typeof (_c = typeof ng_jhipster__WEBPACK_IMPORTED_MODULE_4__[\"JhiAlertService\"] !== \"undefined\" && ng_jhipster__WEBPACK_IMPORTED_MODULE_4__[\"JhiAlertService\"]) === \"function\" ? _c : Object, typeof (_d = typeof app_shared_notification_service__WEBPACK_IMPORTED_MODULE_5__[\"NotificationService\"] !== \"undefined\" && app_shared_notification_service__WEBPACK_IMPORTED_MODULE_5__[\"NotificationService\"]) === \"function\" ? _d : Object])\r\n], DisplaysectorComponent);\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3RhYmxldC12aWV3L2Rpc3BsYXlzZWN0b3IvZGlzcGxheXNlY3Rvci5jb21wb25lbnQudHM/MDk5ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlEO0FBQ2Q7QUFHUztBQUVSO0FBQ3dCO0FBT3BFLElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0lBUWpDLFlBQXVCLGNBQThCLEVBQy9CLGVBQWdDLEVBQ2hDLG1CQUF3QztRQUZ2QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDL0Isb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFScEQsWUFBTyxHQUFlLEVBQUUsQ0FBQztJQVNuQyxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxjQUFjO2FBQ2hCLEtBQUssRUFBRTthQUNQLElBQUksQ0FDSCw2REFBTSxDQUFDLENBQUMsR0FBNkIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUNqRCwwREFBRyxDQUFDLENBQUMsR0FBNkIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUNqRDthQUNBLFNBQVMsQ0FDUixDQUFDLEdBQWUsRUFBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElB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bGF5c2VjdG9yL2Rpc3BsYXlzZWN0b3IuY29tcG9uZW50LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge2ZpbHRlciwgbWFwfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge0h0dHBFcnJvclJlc3BvbnNlLCBIdHRwUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7SVRpY2tldHN9IGZyb20gJ2FwcC9zaGFyZWQvbW9kZWwvdGlja2V0cy5tb2RlbCc7XG5pbXBvcnQge1RpY2tldHNTZXJ2aWNlfSBmcm9tICdhcHAvZW50aXRpZXMvdGlja2V0cyc7XG5pbXBvcnQge0NhcnR9IGZyb20gJ2FwcC9zaGFyZWQvbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQge0poaUFsZXJ0U2VydmljZX0gZnJvbSAnbmctamhpcHN0ZXInO1xuaW1wb3J0IHtOb3RpZmljYXRpb25TZXJ2aWNlfSBmcm9tICdhcHAvc2hhcmVkL25vdGlmaWNhdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnamhpLWRpc3BsYXlzZWN0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vZGlzcGxheXNlY3Rvci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Rpc3BsYXlzZWN0b3IuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEaXNwbGF5c2VjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgc2VjdG9yOiBTdHJpbmc7XG4gIHByb3RlY3RlZCB0aWNrZXRzOiBJVGlja2V0c1tdID0gW107XG4gIHByaXZhdGUgcm93czogbnVtYmVyO1xuICBwcml2YXRlIHNlYXRzOiBudW1iZXI7XG4gIHJvd0FycjogbnVtYmVyW107XG4gIHNlYXRBcnI6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCAgdGlja2V0c1NlcnZpY2U6IFRpY2tldHNTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgamhpQWxlcnRTZXJ2aWNlOiBKaGlBbGVydFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByb3RlY3RlZCBub3RpZmljYXRpb25TZXJ2aWNlOiBOb3RpZmljYXRpb25TZXJ2aWNlKSB7XG4gIH1cblxuICBsb2FkQWxsKCkge1xuICAgIHRoaXMudGlja2V0c1NlcnZpY2VcbiAgICAgIC5xdWVyeSgpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChyZXM6IEh0dHBSZXNwb25zZTxJVGlja2V0c1tdPikgPT4gcmVzLm9rKSxcbiAgICAgICAgbWFwKChyZXM6IEh0dHBSZXNwb25zZTxJVGlja2V0c1tdPikgPT4gcmVzLmJvZHkpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAocmVzOiBJVGlja2V0c1tdKSA9PiB7XG4gICAgICAgICAgdGhpcy50aWNrZXRzID0gcmVzO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VjdG9yKTtcbiAgICAgICAgICB0aGlzLnRpY2tldHMgPSB0aGlzLnRpY2tldHMuZmlsdGVyKHggPT4geC5wbGFjZSA9PT0gdGhpcy5zZWN0b3IpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGlja2V0cyk7XG4gICAgICAgICAgdGhpcy5yb3dzID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgdGhpcy50aWNrZXRzLm1hcChvID0+IG8ucm93cykpO1xuICAgICAgICAgIHRoaXMuc2VhdHMgPSBNYXRoLm1heC5hcHBseShNYXRoLCB0aGlzLnRpY2tldHMubWFwKG8gPT4gby5zZWF0cykpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucm93cyk7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWF0cyk7XG4gICAgICAgICAgdGhpcy5yb3dBcnIgPSBuZXcgQXJyYXkodGhpcy5yb3dzKTtcbiAgICAgICAgICB0aGlzLnNlYXRBcnIgPSBuZXcgQXJyYXkodGhpcy5zZWF0cyk7XG4gICAgICAgIH0sXG4gICAgICAgIChyZXM6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB0aGlzLm9uRXJyb3IocmVzLm1lc3NhZ2UpXG4gICAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIG9uRXJyb3IoZXJyb3JNZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmpoaUFsZXJ0U2VydmljZS5lcnJvcihlcnJvck1lc3NhZ2UsIG51bGwsIG51bGwpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkQWxsKCk7XG4gICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLmxpc3RlbigpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMubG9hZEFsbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0U3RhdGUocm93LCBzZWF0KSB7XG4gICAgc2VhdCsrO1xuICAgIHJvdyA9IHRoaXMucm93cyAtIHJvdztcbiAgICBjb25zdCB0aWNrZXQgPSB0aGlzLnRpY2tldHMuZmluZCh4ID0+IHgucm93cyA9PT0gcm93ICYmIHguc2VhdHMgPT09IHNlYXQpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRpY2tldCk7XG4gICAgaWYgKHRpY2tldC5zdGF0ZSA9PT0gbnVsbCB8fCB0aWNrZXQuc3RhdGUgPT0gbnVsbCB8fCB0aWNrZXQuc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2kgYW0gaGVyZScpO1xuICAgICAgdGlja2V0LnN0YXRlID0gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRpY2tldC5zdGF0ZTtcbiAgfVxuXG4gIGdldENvbG9yKHN0YXRlKSB7XG4gICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gJ2dyZWVuJztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuICdnb2xkJztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuICdkYXJrZ3JleSc7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/tablet-view/displaysector/displaysector.component.ts\n");

/***/ })

})