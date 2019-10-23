/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"DevOpsPOC/Fiori_Northwind/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});