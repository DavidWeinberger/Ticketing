webpackHotUpdate("main",{

/***/ "./src/main/webapp/app/app.module.ts":
/*!*******************************************!*\
  !*** ./src/main/webapp/app/app.module.ts ***!
  \*******************************************/
/*! exports provided: TicketingProjectAppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TicketingProjectAppModule\", function() { return TicketingProjectAppModule; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _vendor_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor.ts */ \"./src/main/webapp/app/vendor.ts\");\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\n/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ \"./node_modules/@angular/platform-browser/fesm5/platform-browser.js\");\n/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ \"./node_modules/@angular/common/fesm5/http.js\");\n/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ \"./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js\");\n/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-webstorage */ \"./node_modules/ngx-webstorage/fesm5/ngx-webstorage.js\");\n/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-jhipster */ \"./node_modules/ng-jhipster/fesm5/ng-jhipster.js\");\n/* harmony import */ var _blocks_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/interceptor/auth.interceptor */ \"./src/main/webapp/app/blocks/interceptor/auth.interceptor.ts\");\n/* harmony import */ var _blocks_interceptor_auth_expired_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/interceptor/auth-expired.interceptor */ \"./src/main/webapp/app/blocks/interceptor/auth-expired.interceptor.ts\");\n/* harmony import */ var _blocks_interceptor_errorhandler_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/interceptor/errorhandler.interceptor */ \"./src/main/webapp/app/blocks/interceptor/errorhandler.interceptor.ts\");\n/* harmony import */ var _blocks_interceptor_notification_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/interceptor/notification.interceptor */ \"./src/main/webapp/app/blocks/interceptor/notification.interceptor.ts\");\n/* harmony import */ var app_shared__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\n/* harmony import */ var app_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/core */ \"./src/main/webapp/app/core/index.ts\");\n/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ \"./src/main/webapp/app/app-routing.module.ts\");\n/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.module */ \"./src/main/webapp/app/home/home.module.ts\");\n/* harmony import */ var _account_account_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./account/account.module */ \"./src/main/webapp/app/account/account.module.ts\");\n/* harmony import */ var _entities_entity_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./entities/entity.module */ \"./src/main/webapp/app/entities/entity.module.ts\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layouts */ \"./src/main/webapp/app/layouts/index.ts\");\n\r\nvar _a;\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// jhipster-needle-angular-add-module-import JHipster will add new module here\r\n\r\nlet TicketingProjectAppModule = class TicketingProjectAppModule {\r\n    constructor(dpConfig) {\r\n        this.dpConfig = dpConfig;\r\n        this.dpConfig.minDate = { year: moment__WEBPACK_IMPORTED_MODULE_18__().year() - 100, month: 1, day: 1 };\r\n    }\r\n};\r\nTicketingProjectAppModule = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\r\n    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__[\"NgModule\"])({\r\n        imports: [\r\n            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__[\"BrowserModule\"],\r\n            ngx_webstorage__WEBPACK_IMPORTED_MODULE_6__[\"NgxWebstorageModule\"].forRoot({ prefix: 'jhi', separator: '-' }),\r\n            ng_jhipster__WEBPACK_IMPORTED_MODULE_7__[\"NgJhipsterModule\"].forRoot({\r\n                // set below to true to make alerts look like toast\r\n                alertAsToast: false,\r\n                alertTimeout: 5000,\r\n                i18nEnabled: true,\r\n                defaultI18nLang: 'en'\r\n            }),\r\n            app_shared__WEBPACK_IMPORTED_MODULE_12__[\"TicketingProjectSharedModule\"].forRoot(),\r\n            app_core__WEBPACK_IMPORTED_MODULE_13__[\"TicketingProjectCoreModule\"],\r\n            _home_home_module__WEBPACK_IMPORTED_MODULE_15__[\"TicketingProjectHomeModule\"],\r\n            _account_account_module__WEBPACK_IMPORTED_MODULE_16__[\"TicketingProjectAccountModule\"],\r\n            // jhipster-needle-angular-add-module JHipster will add new module here\r\n            _entities_entity_module__WEBPACK_IMPORTED_MODULE_17__[\"TicketingProjectEntityModule\"],\r\n            _app_routing_module__WEBPACK_IMPORTED_MODULE_14__[\"TicketingProjectAppRoutingModule\"]\r\n        ],\r\n        declarations: [_layouts__WEBPACK_IMPORTED_MODULE_19__[\"JhiMainComponent\"], _layouts__WEBPACK_IMPORTED_MODULE_19__[\"NavbarComponent\"], _layouts__WEBPACK_IMPORTED_MODULE_19__[\"ErrorComponent\"], _layouts__WEBPACK_IMPORTED_MODULE_19__[\"PageRibbonComponent\"], _layouts__WEBPACK_IMPORTED_MODULE_19__[\"ActiveMenuDirective\"], _layouts__WEBPACK_IMPORTED_MODULE_19__[\"FooterComponent\"]],\r\n        providers: [\r\n            {\r\n                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__[\"HTTP_INTERCEPTORS\"],\r\n                useClass: _blocks_interceptor_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__[\"AuthInterceptor\"],\r\n                multi: true\r\n            },\r\n            {\r\n                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__[\"HTTP_INTERCEPTORS\"],\r\n                useClass: _blocks_interceptor_auth_expired_interceptor__WEBPACK_IMPORTED_MODULE_9__[\"AuthExpiredInterceptor\"],\r\n                multi: true\r\n            },\r\n            {\r\n                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__[\"HTTP_INTERCEPTORS\"],\r\n                useClass: _blocks_interceptor_errorhandler_interceptor__WEBPACK_IMPORTED_MODULE_10__[\"ErrorHandlerInterceptor\"],\r\n                multi: true\r\n            },\r\n            {\r\n                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__[\"HTTP_INTERCEPTORS\"],\r\n                useClass: _blocks_interceptor_notification_interceptor__WEBPACK_IMPORTED_MODULE_11__[\"NotificationInterceptor\"],\r\n                multi: true\r\n            }\r\n        ],\r\n        bootstrap: [_layouts__WEBPACK_IMPORTED_MODULE_19__[\"JhiMainComponent\"]]\r\n    }),\r\n    tslib__WEBPACK_IMPORTED_MODULE_0__[\"__metadata\"](\"design:paramtypes\", [typeof (_a = typeof _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"NgbDatepickerConfig\"] !== \"undefined\" && _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__[\"NgbDatepickerConfig\"]) === \"function\" ? _a : Object])\r\n], TicketingProjectAppModule);\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2FwcC5tb2R1bGUudHM/YzVmOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFCO0FBRW9CO0FBQ2lCO0FBQ0Q7QUFDUTtBQUNaO0FBQ047QUFFeUI7QUFDZTtBQUNDO0FBQ0E7QUFDOUI7QUFDSjtBQUNrQjtBQUNSO0FBQ1M7QUFDRDtBQUN2QztBQUNqQyw4RUFBOEU7QUFDMkQ7QUE4Q3pJLElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBQ3BDLFlBQW9CLFFBQTZCO1FBQTdCLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBQy9DLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLG9DQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDNUUsQ0FBQztDQUNGO0FBSlkseUJBQXlCO0lBNUNyQyw4REFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsdUVBQWE7WUFDYixrRUFBbUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQztZQUM5RCw0REFBZ0IsQ0FBQyxPQUFPLENBQUM7Z0JBQ3ZCLG1EQUFtRDtnQkFDbkQsWUFBWSxFQUFFLEtBQUs7Z0JBQ25CLFlBQVksRUFBRSxJQUFJO2dCQUNsQixXQUFXLEVBQUUsSUFBSTtnQkFDakIsZUFBZSxFQUFFLElBQUk7YUFDdEIsQ0FBQztZQUNGLHdFQUE0QixDQUFDLE9BQU8sRUFBRTtZQUN0QyxvRUFBMEI7WUFDMUIsNkVBQTBCO1lBQzFCLHNGQUE2QjtZQUM3Qix1RUFBdUU7WUFDdkUscUZBQTRCO1lBQzVCLHFGQUFnQztTQUNqQztRQUNELFlBQVksRUFBRSxDQUFDLDBEQUFnQixFQUFFLHlEQUFlLEVBQUUsd0RBQWMsRUFBRSw2REFBbUIsRUFBRSw2REFBbUIsRUFBRSx5REFBZSxDQUFDO1FBQzVILFNBQVMsRUFBRTtZQUNUO2dCQUNFLE9BQU8sRUFBRSxzRUFBaUI7Z0JBQzFCLFFBQVEsRUFBRSxvRkFBZTtnQkFDekIsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxzRUFBaUI7Z0JBQzFCLFFBQVEsRUFBRSxtR0FBc0I7Z0JBQ2hDLEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFDRDtnQkFDRSxPQUFPLEVBQUUsc0VBQWlCO2dCQUMxQixRQUFRLEVBQUUscUdBQXVCO2dCQUNqQyxLQUFLLEVBQUUsSUFBSTthQUNaO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLHNFQUFpQjtnQkFDMUIsUUFBUSxFQUFFLHFHQUF1QjtnQkFDakMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGO1FBQ0QsU0FBUyxFQUFFLENBQUMsMERBQWdCLENBQUM7S0FDOUIsQ0FBQzsrRkFFOEIsOEVBQW1CLG9CQUFuQiw4RUFBbUI7R0FEdEMseUJBQXlCLENBSXJDO0FBSnFDIiwiZmlsZSI6Ii4vc3JjL21haW4vd2ViYXBwL2FwcC9hcHAubW9kdWxlLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3ZlbmRvci50cyc7XG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nYkRhdGVwaWNrZXJDb25maWcgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBOZ3hXZWJzdG9yYWdlTW9kdWxlIH0gZnJvbSAnbmd4LXdlYnN0b3JhZ2UnO1xuaW1wb3J0IHsgTmdKaGlwc3Rlck1vZHVsZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcblxuaW1wb3J0IHsgQXV0aEludGVyY2VwdG9yIH0gZnJvbSAnLi9ibG9ja3MvaW50ZXJjZXB0b3IvYXV0aC5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBBdXRoRXhwaXJlZEludGVyY2VwdG9yIH0gZnJvbSAnLi9ibG9ja3MvaW50ZXJjZXB0b3IvYXV0aC1leHBpcmVkLmludGVyY2VwdG9yJztcbmltcG9ydCB7IEVycm9ySGFuZGxlckludGVyY2VwdG9yIH0gZnJvbSAnLi9ibG9ja3MvaW50ZXJjZXB0b3IvZXJyb3JoYW5kbGVyLmludGVyY2VwdG9yJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbkludGVyY2VwdG9yIH0gZnJvbSAnLi9ibG9ja3MvaW50ZXJjZXB0b3Ivbm90aWZpY2F0aW9uLmludGVyY2VwdG9yJztcbmltcG9ydCB7IFRpY2tldGluZ1Byb2plY3RTaGFyZWRNb2R1bGUgfSBmcm9tICdhcHAvc2hhcmVkJztcbmltcG9ydCB7IFRpY2tldGluZ1Byb2plY3RDb3JlTW9kdWxlIH0gZnJvbSAnYXBwL2NvcmUnO1xuaW1wb3J0IHsgVGlja2V0aW5nUHJvamVjdEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQgeyBUaWNrZXRpbmdQcm9qZWN0SG9tZU1vZHVsZSB9IGZyb20gJy4vaG9tZS9ob21lLm1vZHVsZSc7XG5pbXBvcnQgeyBUaWNrZXRpbmdQcm9qZWN0QWNjb3VudE1vZHVsZSB9IGZyb20gJy4vYWNjb3VudC9hY2NvdW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBUaWNrZXRpbmdQcm9qZWN0RW50aXR5TW9kdWxlIH0gZnJvbSAnLi9lbnRpdGllcy9lbnRpdHkubW9kdWxlJztcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xuLy8gamhpcHN0ZXItbmVlZGxlLWFuZ3VsYXItYWRkLW1vZHVsZS1pbXBvcnQgSkhpcHN0ZXIgd2lsbCBhZGQgbmV3IG1vZHVsZSBoZXJlXG5pbXBvcnQgeyBKaGlNYWluQ29tcG9uZW50LCBOYXZiYXJDb21wb25lbnQsIEZvb3RlckNvbXBvbmVudCwgUGFnZVJpYmJvbkNvbXBvbmVudCwgQWN0aXZlTWVudURpcmVjdGl2ZSwgRXJyb3JDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBOZ3hXZWJzdG9yYWdlTW9kdWxlLmZvclJvb3QoeyBwcmVmaXg6ICdqaGknLCBzZXBhcmF0b3I6ICctJyB9KSxcbiAgICBOZ0poaXBzdGVyTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgLy8gc2V0IGJlbG93IHRvIHRydWUgdG8gbWFrZSBhbGVydHMgbG9vayBsaWtlIHRvYXN0XG4gICAgICBhbGVydEFzVG9hc3Q6IGZhbHNlLFxuICAgICAgYWxlcnRUaW1lb3V0OiA1MDAwLFxuICAgICAgaTE4bkVuYWJsZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0STE4bkxhbmc6ICdlbidcbiAgICB9KSxcbiAgICBUaWNrZXRpbmdQcm9qZWN0U2hhcmVkTW9kdWxlLmZvclJvb3QoKSxcbiAgICBUaWNrZXRpbmdQcm9qZWN0Q29yZU1vZHVsZSxcbiAgICBUaWNrZXRpbmdQcm9qZWN0SG9tZU1vZHVsZSxcbiAgICBUaWNrZXRpbmdQcm9qZWN0QWNjb3VudE1vZHVsZSxcbiAgICAvLyBqaGlwc3Rlci1uZWVkbGUtYW5ndWxhci1hZGQtbW9kdWxlIEpIaXBzdGVyIHdpbGwgYWRkIG5ldyBtb2R1bGUgaGVyZVxuICAgIFRpY2tldGluZ1Byb2plY3RFbnRpdHlNb2R1bGUsXG4gICAgVGlja2V0aW5nUHJvamVjdEFwcFJvdXRpbmdNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbSmhpTWFpbkNvbXBvbmVudCwgTmF2YmFyQ29tcG9uZW50LCBFcnJvckNvbXBvbmVudCwgUGFnZVJpYmJvbkNvbXBvbmVudCwgQWN0aXZlTWVudURpcmVjdGl2ZSwgRm9vdGVyQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogQXV0aEludGVyY2VwdG9yLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgICAgdXNlQ2xhc3M6IEF1dGhFeHBpcmVkSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogRXJyb3JIYW5kbGVySW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogTm90aWZpY2F0aW9uSW50ZXJjZXB0b3IsXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgYm9vdHN0cmFwOiBbSmhpTWFpbkNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgVGlja2V0aW5nUHJvamVjdEFwcE1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZHBDb25maWc6IE5nYkRhdGVwaWNrZXJDb25maWcpIHtcbiAgICB0aGlzLmRwQ29uZmlnLm1pbkRhdGUgPSB7IHllYXI6IG1vbWVudCgpLnllYXIoKSAtIDEwMCwgbW9udGg6IDEsIGRheTogMSB9O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/app.module.ts\n");

/***/ })

})