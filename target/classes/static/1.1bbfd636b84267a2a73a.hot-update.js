webpackHotUpdate(1,{

/***/ "./src/main/webapp/app/entities/tablet-view/sectors/sectors.component.html":
/*!*********************************************************************************!*\
  !*** ./src/main/webapp/app/entities/tablet-view/sectors/sectors.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div> <div class=\\\"container\\\"> <div class=\\\"row\\\"> <div class=\\\"col\\\"> <h2 style=\\\"font-weight: bold\\\">Sektor - {{sector}}</h2> </div> <div *ngIf=\\\"tickets.length > 0\\\"> <h2 style=\\\"float: right; font-weight: bold; margin-right: 2vh\\\">Ticketpreis: {{tickets[0].price}}€</h2> </div> </div> </div> <div class=\\\"container\\\"> <div class=\\\"row\\\"> <div style=\\\"width: 12vh; font-weight: bold; font-size: 3vh\\\"> <span>Sitz ↦</span> <br> <span>↧ Reihe</span> </div> <div class=\\\"col-sm\\\" style=\\\"font-size: 3vh; font-weight: bold\\\" *ngFor=\\\"let z of seatArr; let c = index\\\"> <span>{{c+1 + (10 * page)}}</span> </div> </div> <div class=\\\"row\\\" *ngFor=\\\"let x of rowArr; let a = index\\\"> <div style=\\\"width: 12vh; font-weight: bold; font-size: 3vh\\\"> <span>{{rowArr.length - a}}</span> </div> <div *ngFor=\\\"let y of seatArr; let b = index\\\" class=\\\"col-sm\\\"> <span class=\\\"dot places\\\" style=\\\"width: 3vh; height: 3vh\\\" [style.backgroundColor]=\\\"getColor(getState(a,b+ (10 * page)))\\\" (click)=\\\"dotClick(a,b+ (10 * page))\\\"></span> </div> </div> </div> </div> <button class=\\\"btn\\\" (click)=\\\"nextPage()\\\"><h1 style=\\\"font-weight: bold; font-size: 90px;position: fixed; right: -10vh\\\">〉</h1></button> \";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3RhYmxldC12aWV3L3NlY3RvcnMvc2VjdG9ycy5jb21wb25lbnQuaHRtbD8yNTY5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHFJQUFxSSxRQUFRLHlFQUF5RSxtQkFBbUIsb0NBQW9DLGtCQUFrQixtR0FBbUcsbUJBQW1CLHFIQUFxSCwrQ0FBK0MsMEJBQTBCLG1CQUFtQixrRUFBa0UsMkNBQTJDLG1CQUFtQiwyQkFBMkIsbUJBQW1CLDhDQUE4QyxpRkFBaUYsc09BQXNPLGlCQUFpQixnQkFBZ0IiLCJmaWxlIjoiLi9zcmMvbWFpbi93ZWJhcHAvYXBwL2VudGl0aWVzL3RhYmxldC12aWV3L3NlY3RvcnMvc2VjdG9ycy5jb21wb25lbnQuaHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXJcXFwiPiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjb2xcXFwiPiA8aDIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkXFxcIj5TZWt0b3IgLSB7e3NlY3Rvcn19PC9oMj4gPC9kaXY+IDxkaXYgKm5nSWY9XFxcInRpY2tldHMubGVuZ3RoID4gMFxcXCI+IDxoMiBzdHlsZT1cXFwiZmxvYXQ6IHJpZ2h0OyBmb250LXdlaWdodDogYm9sZDsgbWFyZ2luLXJpZ2h0OiAydmhcXFwiPlRpY2tldHByZWlzOiB7e3RpY2tldHNbMF0ucHJpY2V9feKCrDwvaDI+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNvbnRhaW5lclxcXCI+IDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+IDxkaXYgc3R5bGU9XFxcIndpZHRoOiAxMnZoOyBmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiAzdmhcXFwiPiA8c3Bhbj5TaXR6IOKGpjwvc3Bhbj4gPGJyPiA8c3Bhbj7ihqcgUmVpaGU8L3NwYW4+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjb2wtc21cXFwiIHN0eWxlPVxcXCJmb250LXNpemU6IDN2aDsgZm9udC13ZWlnaHQ6IGJvbGRcXFwiICpuZ0Zvcj1cXFwibGV0IHogb2Ygc2VhdEFycjsgbGV0IGMgPSBpbmRleFxcXCI+IDxzcGFuPnt7YysxICsgKDEwICogcGFnZSl9fTwvc3Bhbj4gPC9kaXY+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiICpuZ0Zvcj1cXFwibGV0IHggb2Ygcm93QXJyOyBsZXQgYSA9IGluZGV4XFxcIj4gPGRpdiBzdHlsZT1cXFwid2lkdGg6IDEydmg7IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LXNpemU6IDN2aFxcXCI+IDxzcGFuPnt7cm93QXJyLmxlbmd0aCAtIGF9fTwvc3Bhbj4gPC9kaXY+IDxkaXYgKm5nRm9yPVxcXCJsZXQgeSBvZiBzZWF0QXJyOyBsZXQgYiA9IGluZGV4XFxcIiBjbGFzcz1cXFwiY29sLXNtXFxcIj4gPHNwYW4gY2xhc3M9XFxcImRvdCBwbGFjZXNcXFwiIHN0eWxlPVxcXCJ3aWR0aDogM3ZoOyBoZWlnaHQ6IDN2aFxcXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XFxcImdldENvbG9yKGdldFN0YXRlKGEsYisgKDEwICogcGFnZSkpKVxcXCIgKGNsaWNrKT1cXFwiZG90Q2xpY2soYSxiKyAoMTAgKiBwYWdlKSlcXFwiPjwvc3Bhbj4gPC9kaXY+IDwvZGl2PiA8L2Rpdj4gPC9kaXY+IDxidXR0b24gY2xhc3M9XFxcImJ0blxcXCIgKGNsaWNrKT1cXFwibmV4dFBhZ2UoKVxcXCI+PGgxIHN0eWxlPVxcXCJmb250LXdlaWdodDogYm9sZDsgZm9udC1zaXplOiA5MHB4O3Bvc2l0aW9uOiBmaXhlZDsgcmlnaHQ6IC0xMHZoXFxcIj7ijKo8L2gxPjwvYnV0dG9uPiBcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main/webapp/app/entities/tablet-view/sectors/sectors.component.html\n");

/***/ })

})