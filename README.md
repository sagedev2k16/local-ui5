# Steps

## Hello world

### Bootstraping
1. Install @ui5/cli using npm
2. Create a root folder and a package.json inside it.
3. Create a folder named "webapp" besides package.json
4. Create "index.html" in webapp folder.
5. Create "manifest.json" in webapp folder.
6. Run "ui5 init" in root folder. Add start script in package.json.
7. Do "npm start"
8. Run "ui5 use OpenUI5".
9. Run "ui5 add sap.ui.core sap.m themelib_sap_horizon"
10. Edit index.html to add UI5 bootstrap script tag.
11. Create "index.js" besides index.html.
12. Restart the UI5 server using "npm start"
13. Add class and id to the body tag in "index.html".
14. Add a UI5 Text control in "index.js" and place it at "content"

### XML views
15. Add a "view" folder in the webapp folder.
16. Add a file "App.view.xml" in the view folder.
17. Update "index.js" file to show the newly created view.

### Controllers
18. Add a folder called "controller" in the webapp folder.
19. Add a file "App.controller.js" in the controller folder.
20. Update App view to reference the newly created controller file.

### JSON model
21. Add JSONModel in controller.
22. Add onInit lifecycle method in controller.
23. Initialize the JSONModel with some data.
24. Set the JSONModel on the App view.
25. Add an Input in App view and bind JSONModel property with it.

## Concepts - 1

### Modules
1. Add MessageToast in controller instead of the JS alert.

### Internationalization (i18n)
1. Create a new folder in webapp called "i18n".
2. Add a file called "i18n.properties" in the "i18n" folder.
3. Add ResourceModel in controller file.
4. In the onInit method add a resource model by using the i18n resource bundle.
5. Assign the resource model "i18n" to the view.
6. In the onShowHello method get access to resource bundle via i18n model.
7. Get the default model property (/user/name).
8. Create msg by getting i18n text from bundle and passing the user name as argument.
9. Show MessageToast.
10. Add another i18n file for German language in the i18n folder.

### Application descriptor
#### Component creation
1. Create a new file "Component.js" besides index.html
2. Add metadata property and init method.
3. In init method create JSONModel and ResourceModel.
4. Remove onInit method from App.controller.js
5. Update index.js to create the component instead of the view.

#### Descriptor creation
1. Update the manifest.json file.
2. Update the metadata property of Component.js to provide manifest json property.
3. Remove the lines in Component.js where we created a resource model.

## Concepts - 2

### Shell, App and Pages
1. Update App.view.xml to transform it into an app with multiple pages.
2. Add a page with a panel.
3. Put the button and input into the panel.
4. Wrap the App in a Shell.

### Margin, Padding and Density
1. Add responsive margin to the panel and width auto to compensate for margin.
2. Add margin end to the button.
3. Add content density compact / cozy to the page.

### Icons
1. Add icon property to the button (sap-icon://world)
2. Find more icons here - https://sapui5.hana.ondemand.com/sdk/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons
3. Use the Icon control to display icon.

## Concepts - 3

### Custom CSS
1. Create a new folder "css" in webapp folder.
2. Create a new file style.css in the "css" folder.
3. Add a class to the icon in App.view.xml
4. Add custom css resource in manifest.json file.
2. Create CSS rule in the style.css file.

### Dialogs & Fragments
1. Create a new folder "fragment" in webapp folder.
2. Create a new file in the "fragment" folder called "HelloDialog.fragment.xml"
3. Create a new button in App.view.xml to open the dialog.
4. Create onOpenDialog method in App.controller.js
5. Create onCloseDialog fragment callback in App.controller.js

## Concepts - 4

### Aggregation binding
1. Create students_data.json file besides index.html
2. Create students JSON model in manifest.json
3. Create a List in App.view.xml
4. Bind the items aggregation of list with students model.
5. Add ObjectListItem with title and icon properties.

### Expression binding
1. Add numberState property to the ObjectListItem.
2. Add expression to put a simple calculation to show error or success state.

### Filtering, Sorting and Grouping

#### Filtering
1. Add a Toolbar with Search field in the headerToolbar in Panel.
2. Add a search event handler in the search field.
3. Provide an id to the list.
4. Define the search event handler in controller. Use the default event argument.
5. Create an empty filter array and get query from event.
6. Create a new filter and push it in the filter array.
7. Get the items binding from list by using list id.
8. Filter the binding using the filter array.

#### Sorting
1. Modify the items binding to use path syntax.
2. Add a sorter property and provide the path.
3. (Optional) Add "descending" true property in the sorter for reverse sorting.

#### Grouping
3. Add group true property in the sorter.

## Routing and Navigation
