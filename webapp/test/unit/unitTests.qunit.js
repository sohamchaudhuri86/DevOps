/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"DevOpsPOC/Fiori_Northwind/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});