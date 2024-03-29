sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
 ], (Controller, MessageToast, JSONModel, ResourceModel, Filter, FilterOperator) => {
    "use strict";
 
    return Controller.extend("ui5.training.controller.App", {
        // onInit() {
        //     const data = {
        //         user: {
        //             name: "John"
        //         }
        //     };

        //     const model = new JSONModel(data);
        //     this.getView().setModel(model);

        //     const i18nModel = new ResourceModel({
        //         bundleName: "ui5.training.i18n.i18n"
        //     });
        //     this.getView().setModel(i18nModel, "i18n");
        // },

        onShowHello() {
            //show a native JavaScript alert
            //alert("Hello World");
            // MessageToast.show("Button clicked");

            const bundle = this.getView().getModel("i18n").getResourceBundle();
            const user = this.getView().getModel().getProperty("/user/name");
            const msg = bundle.getText("helloMsg", [user]);

            MessageToast.show(msg);
        },

        onOpenDialog() {
            // create dialog lazily
            this.pDialog ??= this.loadFragment({
                name: "ui5.training.fragment.HelloDialog"
            });
        
            this.pDialog.then((oDialog) => oDialog.open());
        },

        onCloseDialog() {
			this.byId("helloDialog").close();
		},

        onFilterStudents(evt) {
            const filter = [];
            const query = evt.getParameter("query");

            if(query) {
                filter.push(new Filter("name", FilterOperator.Contains, query))
            }

            const list = this.byId("studentsList");
            const binding = list.getBinding("items");
            binding.filter(filter);
        },

        onPress(evt) {
            const studentInfo = evt.getSource();
			const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail", {
                studentInfo: window.encodeURIComponent(
                    studentInfo.getBindingContext("students").getPath().substr(1)
                )
            });
		}
    });
 });