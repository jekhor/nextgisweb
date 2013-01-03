define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dijit/_WidgetsInTemplateMixin",
    "style/StyleWidgetBase",
    "dojo/text!./templates/Widget.html",
    "dojox/layout/TableContainer",
    "ngw/form/DisplayNameTextBox",
], function (
    declare,
    _WidgetBase,
    _TemplatedMixin,
    _WidgetsInTemplateMixin,
    StyleWidgetBase,
    template
) {
    return declare("style.Widget", [_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin, StyleWidgetBase], {
        templateString: template,
        identity: "style",

        postCreate: function () {
            if (this.iData.display_name) { this.wDisplayName.setValue(this.iData.display_name) };
        },

        getIData: function () {
            return {
                display_name: this.wDisplayName.getValue()
            };
        }
    });
})