sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], (UIComponent, JSONModel, ResourceModel) => {
    "use strict";
 
    return UIComponent.extend("ui5.training.Component", {
        metadata: {
            // Async creation of component
            "interfaces": ["sap.ui.core.IAsyncContentCreation"],
            // Define root view
            // "rootView": {
            //     "viewName": "ui5.training.view.App",
            //     "type": "XML",
            //     "id": "app"
            // }
            "manifest": "json"
        },

        init() {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);

            // set data model which will be visible throughout the app
            const oData = {
                user : {
                    name : "John"
                }
            };
            
            const oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set i18n model
            // const i18nModel = new ResourceModel({
            //     bundleName: "ui5.training.i18n.i18n"
            // });
            
            // this.setModel(i18nModel, "i18n");
        }
    });
});
