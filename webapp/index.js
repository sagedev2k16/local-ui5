// sap.ui.define([
//     "sap/m/Text"
// ], (Text) => {
// 	"use strict";
// 	console.log("UI5 is ready");

//     new Text({
//         text: "Hello from UI5"
//     }).placeAt("content");
// });

// sap.ui.define([
//     "sap/ui/core/mvc/XMLView"
// ], (XMLView) => {
//     "use strict";

//     XMLView.create({
//         viewName: "ui5.training.view.App"
//     }).then((v) => v.placeAt("content"));
// });

sap.ui.define([
	"sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
	"use strict";

	new ComponentContainer({
		name: "ui5.training",
		settings : {
			id : "training"
		},
		async: true
	}).placeAt("content");
});