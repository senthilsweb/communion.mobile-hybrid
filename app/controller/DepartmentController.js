Ext.define('Communion.controller.DepartmentController', {
    extend: 'Ext.app.Controller',
    config: {
        stores: ['Communion.store.DepartmentStore'],
        refs: {},
        control: {
            'departmentlist': { show: 'showDepartmentListToolBar' },
            'button[action=btnLoginSubmit]' : {tap:"btnLoginSubmitClick"}
        }
    },
    showDepartmentListToolBar: function () {
        console.log("inside department controller");
        this.getApplication().getController('TitleBarController').enableDepartmentListView();
    }
});