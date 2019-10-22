webpackHotUpdate(7,{

/***/ "./src/main/webapp/app/entities/tablet-view/tablet-view.component.ts":
/*!***************************************************************************!*\
  !*** ./src/main/webapp/app/entities/tablet-view/tablet-view.component.ts ***!
  \***************************************************************************/
/*! exports provided: TabletViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TabletViewComponent\", function() { return TabletViewComponent; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ \"./node_modules/rxjs/_esm5/operators/index.js\");\n/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ \"./node_modules/ng-jhipster/fesm5/ng-jhipster.js\");\n/* harmony import */ var app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core */ \"./src/main/webapp/app/core/index.ts\");\n/* harmony import */ var _tablet_view_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tablet-view.service */ \"./src/main/webapp/app/entities/tablet-view/tablet-view.service.ts\");\n/* harmony import */ var app_entities_tickets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/entities/tickets */ \"./src/main/webapp/app/entities/tickets/index.ts\");\n\r\nvar _a, _b, _c, _d, _e;\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet TabletViewComponent = class TabletViewComponent {\r\n    constructor(tabletViewService, jhiAlertService, eventManager, accountService, ticketsService) {\r\n        this.tabletViewService = tabletViewService;\r\n        this.jhiAlertService = jhiAlertService;\r\n        this.eventManager = eventManager;\r\n        this.accountService = accountService;\r\n        this.ticketsService = ticketsService;\r\n    }\r\n    loadAll() {\r\n        this.tabletViewService\r\n            .query()\r\n            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"filter\"])((res) => res.ok), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"map\"])((res) => res.body))\r\n            .subscribe((res) => {\r\n            this.tabletViews = res;\r\n        }, (res) => this.onError(res.message));\r\n        this.ticketsService\r\n            .query()\r\n            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"filter\"])((res) => res.ok), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__[\"map\"])((res) => res.body))\r\n            .subscribe((res) => {\r\n            this.tickets = res;\r\n            console.log(this.tickets);\r\n            this.tickets.forEach(x => {\r\n                this.seats.push('a', x);\r\n            });\r\n        }, (res) => this.onError(res.message));\r\n    }\r\n    ngOnInit() {\r\n        this.loadAll();\r\n        this.accountService.identity().then(account => {\r\n            this.currentAccount = account;\r\n        });\r\n        this.registerChangeInTabletViews();\r\n    }\r\n    ngOnDestroy() {\r\n        this.eventManager.destroy(this.eventSubscriber);\r\n    }\r\n    trackId(index, item) {\r\n        return item.id;\r\n    }\r\n    registerChangeInTabletViews() {\r\n        this.eventSubscriber = this.eventManager.subscribe('tabletViewListModification', response => this.loadAll());\r\n    }\r\n    onError(errorMessage) {\r\n        this.jhiAlertService.error(errorMessage, null, null);\r\n    }\r\n};\r\nTabletViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\r\n    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__[\"Component\"])({\r\n        selector: 'jhi-tablet-view',\r\n        template: __webpack_require__(/*! ./tablet-view.component.html */ \"./src/main/webapp/app/entities/tablet-view/tablet-view.component.html\"),\r\n        styles: [__webpack_require__(/*! ./tablet-view.scss */ \"./src/main/webapp/app/entities/tablet-view/tablet-view.scss\")]\r\n    }),\r\n    tslib__WEBPACK_IMPORTED_MODULE_0__[\"__metadata\"](\"design:paramtypes\", [typeof (_a = typeof _tablet_view_service__WEBPACK_IMPORTED_MODULE_5__[\"TabletViewService\"] !== \"undefined\" && _tablet_view_service__WEBPACK_IMPORTED_MODULE_5__[\"TabletViewService\"]) === \"function\" ? _a : Object, typeof (_b = typeof ng_jhipster__WEBPACK_IMPORTED_MODULE_3__[\"JhiAlertService\"] !== \"undefined\" && ng_jhipster__WEBPACK_IMPORTED_MODULE_3__[\"JhiAlertService\"]) === \"function\" ? _b : Object, typeof (_c = typeof ng_jhipster__WEBPACK_IMPORTED_MODULE_3__[\"JhiEventManager\"] !== \"undefined\" && ng_jhipster__WEBPACK_IMPORTED_MODULE_3__[\"JhiEventManager\"]) === \"function\" ? _c : Object, typeof (_d = typeof app_core__WEBPACK_IMPORTED_MODULE_4__[\"AccountService\"] !== \"undefined\" && app_core__WEBPACK_IMPORTED_MODULE_4__[\"AccountService\"]) === \"function\" ? _d : Object, typeof (_e = typeof app_entities_tickets__WEBPACK_IMPORTED_MODULE_6__[\"TicketsService\"] !== \"undefined\" && app_entities_tickets__WEBPACK_IMPORTED_MODULE_6__[\"TicketsService\"]) === \"function\" ? _e : Object])\r\n], TabletViewComponent);\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3RhYmxldC12aWV3L3RhYmxldC12aWV3LmNvbXBvbmVudC50cz84YzczIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZEO0FBR2hCO0FBQ2tCO0FBR3JCO0FBQ2dCO0FBRU47QUFRcEQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFPOUIsWUFDWSxpQkFBb0MsRUFDcEMsZUFBZ0MsRUFDaEMsWUFBNkIsRUFDN0IsY0FBOEIsRUFDOUIsY0FBOEI7UUFKOUIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsaUJBQVksR0FBWixZQUFZLENBQWlCO1FBQzdCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDdkMsQ0FBQztJQUVKLE9BQU87UUFDTCxJQUFJLENBQUMsaUJBQWlCO2FBQ25CLEtBQUssRUFBRTthQUNQLElBQUksQ0FDSCw2REFBTSxDQUFDLENBQUMsR0FBZ0MsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUNwRCwwREFBRyxDQUFDLENBQUMsR0FBZ0MsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUNwRDthQUNBLFNBQVMsQ0FDUixDQUFDLEdBQWtCLEVBQUUsRUFBRTtZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUN6QixDQUFDLEVBQ0QsQ0FBQyxHQUFzQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FDdEQsQ0FBQztRQUNKLElBQUksQ0FBQyxjQUFjO2FBQ2hCLEtBQUssRUFBRTthQUNQLElBQUksQ0FDSCw2REFBTSxDQUFDLENBQUMsR0FBNkIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUNqRCwwREFBRyxDQUFDLENBQUMsR0FBNkIsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUNqRDthQUNBLFNBQVMsQ0FDUixDQUFDLEdBQWUsRUFBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQyxFQUFFO2dCQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLEVBQ0QsQ0FBQyxHQUFzQixFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FDdEQsQ0FBQztJQUNOLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQWEsRUFBRSxJQUFpQjtRQUN0QyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELDJCQUEyQjtRQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLDRCQUE0QixFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDL0csQ0FBQztJQUVTLE9BQU8sQ0FBQyxZQUFvQjtRQUNwQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDRjtBQXJFWSxtQkFBbUI7SUFML0IsK0RBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsNkJBQWEsNEdBQThCO1FBQzNDLFNBQVMsbUJBQUcsd0ZBQW1CO0tBQ2hDLENBQUM7K0ZBUytCLHNFQUFpQixvQkFBakIsc0VBQWlCLG9EQUNuQiwyREFBZSxvQkFBZiwyREFBZSxvREFDbEIsMkRBQWUsb0JBQWYsMkRBQWUsb0RBQ2IsdURBQWMsb0JBQWQsdURBQWMsb0RBQ2QsbUVBQWMsb0JBQWQsbUVBQWM7R0FaL0IsbUJBQW1CLENBcUUvQjtBQXJFK0IiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3RhYmxldC12aWV3L3RhYmxldC12aWV3LmNvbXBvbmVudC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBFcnJvclJlc3BvbnNlLCBIdHRwUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSmhpRXZlbnRNYW5hZ2VyLCBKaGlBbGVydFNlcnZpY2UgfSBmcm9tICduZy1qaGlwc3Rlcic7XG5cbmltcG9ydCB7IElUYWJsZXRWaWV3IH0gZnJvbSAnYXBwL3NoYXJlZC9tb2RlbC90YWJsZXQtdmlldy5tb2RlbCc7XG5pbXBvcnQgeyBBY2NvdW50U2VydmljZSB9IGZyb20gJ2FwcC9jb3JlJztcbmltcG9ydCB7IFRhYmxldFZpZXdTZXJ2aWNlIH0gZnJvbSAnLi90YWJsZXQtdmlldy5zZXJ2aWNlJztcbmltcG9ydCB7SVRpY2tldHN9IGZyb20gJ2FwcC9zaGFyZWQvbW9kZWwvdGlja2V0cy5tb2RlbCc7XG5pbXBvcnQge1RpY2tldHNTZXJ2aWNlfSBmcm9tICdhcHAvZW50aXRpZXMvdGlja2V0cyc7XG5pbXBvcnQgSXQgPSBqZXN0Lkl0O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdqaGktdGFibGV0LXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGV0LXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsndGFibGV0LXZpZXcuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxldFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc2VhdHM6IHtpZDogc3RyaW5nLCB0aWNrZXQ6IElUaWNrZXRzW119W107XG4gIHRhYmxldFZpZXdzOiBJVGFibGV0Vmlld1tdO1xuICBjdXJyZW50QWNjb3VudDogYW55O1xuICBldmVudFN1YnNjcmliZXI6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSB0aWNrZXRzOiBJVGlja2V0c1tdO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0YWJsZXRWaWV3U2VydmljZTogVGFibGV0Vmlld1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGpoaUFsZXJ0U2VydmljZTogSmhpQWxlcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBldmVudE1hbmFnZXI6IEpoaUV2ZW50TWFuYWdlcixcbiAgICBwcm90ZWN0ZWQgYWNjb3VudFNlcnZpY2U6IEFjY291bnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0aWNrZXRzU2VydmljZTogVGlja2V0c1NlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWRBbGwoKSB7XG4gICAgdGhpcy50YWJsZXRWaWV3U2VydmljZVxuICAgICAgLnF1ZXJ5KClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHJlczogSHR0cFJlc3BvbnNlPElUYWJsZXRWaWV3W10+KSA9PiByZXMub2spLFxuICAgICAgICBtYXAoKHJlczogSHR0cFJlc3BvbnNlPElUYWJsZXRWaWV3W10+KSA9PiByZXMuYm9keSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIChyZXM6IElUYWJsZXRWaWV3W10pID0+IHtcbiAgICAgICAgICB0aGlzLnRhYmxldFZpZXdzID0gcmVzO1xuICAgICAgICB9LFxuICAgICAgICAocmVzOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4gdGhpcy5vbkVycm9yKHJlcy5tZXNzYWdlKVxuICAgICAgKTtcbiAgICB0aGlzLnRpY2tldHNTZXJ2aWNlXG4gICAgICAucXVlcnkoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigocmVzOiBIdHRwUmVzcG9uc2U8SVRpY2tldHNbXT4pID0+IHJlcy5vayksXG4gICAgICAgIG1hcCgocmVzOiBIdHRwUmVzcG9uc2U8SVRpY2tldHNbXT4pID0+IHJlcy5ib2R5KVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKHJlczogSVRpY2tldHNbXSkgPT4ge1xuICAgICAgICAgIHRoaXMudGlja2V0cyA9IHJlcztcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRpY2tldHMpO1xuICAgICAgICAgIHRoaXMudGlja2V0cy5mb3JFYWNoKCB4ID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2VhdHMucHVzaCgnYScsIHgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAocmVzOiBIdHRwRXJyb3JSZXNwb25zZSkgPT4gdGhpcy5vbkVycm9yKHJlcy5tZXNzYWdlKVxuICAgICAgKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZEFsbCgpO1xuICAgIHRoaXMuYWNjb3VudFNlcnZpY2UuaWRlbnRpdHkoKS50aGVuKGFjY291bnQgPT4ge1xuICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IGFjY291bnQ7XG4gICAgfSk7XG4gICAgdGhpcy5yZWdpc3RlckNoYW5nZUluVGFibGV0Vmlld3MoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuZXZlbnRNYW5hZ2VyLmRlc3Ryb3kodGhpcy5ldmVudFN1YnNjcmliZXIpO1xuICB9XG5cbiAgdHJhY2tJZChpbmRleDogbnVtYmVyLCBpdGVtOiBJVGFibGV0Vmlldykge1xuICAgIHJldHVybiBpdGVtLmlkO1xuICB9XG5cbiAgcmVnaXN0ZXJDaGFuZ2VJblRhYmxldFZpZXdzKCkge1xuICAgIHRoaXMuZXZlbnRTdWJzY3JpYmVyID0gdGhpcy5ldmVudE1hbmFnZXIuc3Vic2NyaWJlKCd0YWJsZXRWaWV3TGlzdE1vZGlmaWNhdGlvbicsIHJlc3BvbnNlID0+IHRoaXMubG9hZEFsbCgpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvbkVycm9yKGVycm9yTWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5qaGlBbGVydFNlcnZpY2UuZXJyb3IoZXJyb3JNZXNzYWdlLCBudWxsLCBudWxsKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/tablet-view/tablet-view.component.ts\n");

/***/ })

})