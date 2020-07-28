/*global QUnit*/

sap.ui.define([
	"ns/HTML5Module/controller/Test_View1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Test_View1 Controller");

	QUnit.test("I should test the Test_View1 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
