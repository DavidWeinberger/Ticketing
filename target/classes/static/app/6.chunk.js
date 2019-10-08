(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./src/main/webapp/app/entities/tickets/tickets.module.ts":
/*!****************************************************************!*\
  !*** ./src/main/webapp/app/entities/tickets/tickets.module.ts ***!
  \****************************************************************/
/*! exports provided: TicketingProjectTicketsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TicketingProjectTicketsModule\", function() { return TicketingProjectTicketsModule; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ \"./node_modules/@angular/core/fesm5/core.js\");\n/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ \"./node_modules/@angular/router/fesm5/router.js\");\n/* harmony import */ var ng_jhipster__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-jhipster */ \"./node_modules/ng-jhipster/fesm5/ng-jhipster.js\");\n/* harmony import */ var app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/core */ \"./src/main/webapp/app/core/index.ts\");\n/* harmony import */ var app_shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared */ \"./src/main/webapp/app/shared/index.ts\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ */ \"./src/main/webapp/app/entities/tickets/index.ts\");\n\r\nvar _a, _b;\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst ENTITY_STATES = [...___WEBPACK_IMPORTED_MODULE_6__[\"ticketsRoute\"], ...___WEBPACK_IMPORTED_MODULE_6__[\"ticketsPopupRoute\"]];\r\nlet TicketingProjectTicketsModule = class TicketingProjectTicketsModule {\r\n    constructor(languageService, languageHelper) {\r\n        this.languageService = languageService;\r\n        this.languageHelper = languageHelper;\r\n        this.languageHelper.language.subscribe((languageKey) => {\r\n            if (languageKey) {\r\n                this.languageService.changeLanguage(languageKey);\r\n            }\r\n        });\r\n    }\r\n};\r\nTicketingProjectTicketsModule = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\r\n    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__[\"NgModule\"])({\r\n        imports: [app_shared__WEBPACK_IMPORTED_MODULE_5__[\"TicketingProjectSharedModule\"], _angular_router__WEBPACK_IMPORTED_MODULE_2__[\"RouterModule\"].forChild(ENTITY_STATES)],\r\n        declarations: [\r\n            ___WEBPACK_IMPORTED_MODULE_6__[\"TicketsComponent\"],\r\n            ___WEBPACK_IMPORTED_MODULE_6__[\"TicketsDetailComponent\"],\r\n            ___WEBPACK_IMPORTED_MODULE_6__[\"TicketsUpdateComponent\"],\r\n            ___WEBPACK_IMPORTED_MODULE_6__[\"TicketsDeleteDialogComponent\"],\r\n            ___WEBPACK_IMPORTED_MODULE_6__[\"TicketsDeletePopupComponent\"]\r\n        ],\r\n        entryComponents: [___WEBPACK_IMPORTED_MODULE_6__[\"TicketsComponent\"], ___WEBPACK_IMPORTED_MODULE_6__[\"TicketsUpdateComponent\"], ___WEBPACK_IMPORTED_MODULE_6__[\"TicketsDeleteDialogComponent\"], ___WEBPACK_IMPORTED_MODULE_6__[\"TicketsDeletePopupComponent\"]],\r\n        providers: [{ provide: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__[\"JhiLanguageService\"], useClass: ng_jhipster__WEBPACK_IMPORTED_MODULE_3__[\"JhiLanguageService\"] }],\r\n        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__[\"CUSTOM_ELEMENTS_SCHEMA\"]]\r\n    }),\r\n    tslib__WEBPACK_IMPORTED_MODULE_0__[\"__metadata\"](\"design:paramtypes\", [typeof (_a = typeof ng_jhipster__WEBPACK_IMPORTED_MODULE_3__[\"JhiLanguageService\"] !== \"undefined\" && ng_jhipster__WEBPACK_IMPORTED_MODULE_3__[\"JhiLanguageService\"]) === \"function\" ? _a : Object, typeof (_b = typeof app_core__WEBPACK_IMPORTED_MODULE_4__[\"JhiLanguageHelper\"] !== \"undefined\" && app_core__WEBPACK_IMPORTED_MODULE_4__[\"JhiLanguageHelper\"]) === \"function\" ? _b : Object])\r\n], TicketingProjectTicketsModule);\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3RpY2tldHMvdGlja2V0cy5tb2R1bGUudHM/YWQxNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpRTtBQUNsQjtBQUNFO0FBQ0o7QUFFYTtBQVM5QztBQUVaLE1BQU0sYUFBYSxHQUFHLENBQUMsR0FBRyw4Q0FBWSxFQUFFLEdBQUcsbURBQWlCLENBQUMsQ0FBQztBQWU5RCxJQUFhLDZCQUE2QixHQUExQyxNQUFhLDZCQUE2QjtJQUN4QyxZQUFvQixlQUFtQyxFQUFVLGNBQWlDO1FBQTlFLG9CQUFlLEdBQWYsZUFBZSxDQUFvQjtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtRQUNoRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFtQixFQUFFLEVBQUU7WUFDN0QsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDbEQ7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQVJZLDZCQUE2QjtJQWJ6Qyw4REFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsdUVBQTRCLEVBQUUsNERBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0UsWUFBWSxFQUFFO1lBQ1osa0RBQWdCO1lBQ2hCLHdEQUFzQjtZQUN0Qix3REFBc0I7WUFDdEIsOERBQTRCO1lBQzVCLDZEQUEyQjtTQUM1QjtRQUNELGVBQWUsRUFBRSxDQUFDLGtEQUFnQixFQUFFLHdEQUFzQixFQUFFLDhEQUE0QixFQUFFLDZEQUEyQixDQUFDO1FBQ3RILFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLDhEQUFrQixFQUFFLFFBQVEsRUFBRSw4REFBa0IsRUFBRSxDQUFDO1FBQzFFLE9BQU8sRUFBRSxDQUFDLG9FQUFzQixDQUFDO0tBQ2xDLENBQUM7K0ZBRXFDLDhEQUFrQixvQkFBbEIsOERBQWtCLG9EQUEwQiwwREFBaUIsb0JBQWpCLDBEQUFpQjtHQUR2Riw2QkFBNkIsQ0FRekM7QUFSeUMiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3RpY2tldHMvdGlja2V0cy5tb2R1bGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEpoaUxhbmd1YWdlU2VydmljZSB9IGZyb20gJ25nLWpoaXBzdGVyJztcbmltcG9ydCB7IEpoaUxhbmd1YWdlSGVscGVyIH0gZnJvbSAnYXBwL2NvcmUnO1xuXG5pbXBvcnQgeyBUaWNrZXRpbmdQcm9qZWN0U2hhcmVkTW9kdWxlIH0gZnJvbSAnYXBwL3NoYXJlZCc7XG5pbXBvcnQge1xuICBUaWNrZXRzQ29tcG9uZW50LFxuICBUaWNrZXRzRGV0YWlsQ29tcG9uZW50LFxuICBUaWNrZXRzVXBkYXRlQ29tcG9uZW50LFxuICBUaWNrZXRzRGVsZXRlUG9wdXBDb21wb25lbnQsXG4gIFRpY2tldHNEZWxldGVEaWFsb2dDb21wb25lbnQsXG4gIHRpY2tldHNSb3V0ZSxcbiAgdGlja2V0c1BvcHVwUm91dGVcbn0gZnJvbSAnLi8nO1xuXG5jb25zdCBFTlRJVFlfU1RBVEVTID0gWy4uLnRpY2tldHNSb3V0ZSwgLi4udGlja2V0c1BvcHVwUm91dGVdO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbVGlja2V0aW5nUHJvamVjdFNoYXJlZE1vZHVsZSwgUm91dGVyTW9kdWxlLmZvckNoaWxkKEVOVElUWV9TVEFURVMpXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGlja2V0c0NvbXBvbmVudCxcbiAgICBUaWNrZXRzRGV0YWlsQ29tcG9uZW50LFxuICAgIFRpY2tldHNVcGRhdGVDb21wb25lbnQsXG4gICAgVGlja2V0c0RlbGV0ZURpYWxvZ0NvbXBvbmVudCxcbiAgICBUaWNrZXRzRGVsZXRlUG9wdXBDb21wb25lbnRcbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbVGlja2V0c0NvbXBvbmVudCwgVGlja2V0c1VwZGF0ZUNvbXBvbmVudCwgVGlja2V0c0RlbGV0ZURpYWxvZ0NvbXBvbmVudCwgVGlja2V0c0RlbGV0ZVBvcHVwQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBKaGlMYW5ndWFnZVNlcnZpY2UsIHVzZUNsYXNzOiBKaGlMYW5ndWFnZVNlcnZpY2UgfV0sXG4gIHNjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBUaWNrZXRpbmdQcm9qZWN0VGlja2V0c01vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBKaGlMYW5ndWFnZVNlcnZpY2UsIHByaXZhdGUgbGFuZ3VhZ2VIZWxwZXI6IEpoaUxhbmd1YWdlSGVscGVyKSB7XG4gICAgdGhpcy5sYW5ndWFnZUhlbHBlci5sYW5ndWFnZS5zdWJzY3JpYmUoKGxhbmd1YWdlS2V5OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChsYW5ndWFnZUtleSkge1xuICAgICAgICB0aGlzLmxhbmd1YWdlU2VydmljZS5jaGFuZ2VMYW5ndWFnZShsYW5ndWFnZUtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/tickets/tickets.module.ts\n");

/***/ })

}]);