Ext.define('vmlabs.controller.DepartmentController', {
    extend: 'Ext.app.Controller',
    config: {
        stores: ['vmlabs.store.DepartmentStore'],
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