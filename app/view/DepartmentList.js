
Ext.define('vmlabs.view.DepartmentList', {
    extend: 'Ext.Panel',
    xtype: 'departmentlist',
    config: {
        ui: 'neutral',
        layout: 'fit',
        //scrollable: true,
        items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top' //placed at the top
                    },

                    {
                        xtype: 'footer',
                        docked: 'bottom'
                    },

                    {
                        xtype: 'list',
                        cls: 'disclosure',
                        ui : 'confirm',
                        title: 'Departments', //Title appears in the titlebar
                        store: 'DepartmentStore', 
                        pageSize: 2,
                        onItemDisclosure: 'true',
                        itemTpl:
                                '<div class="vm_statusGreen">' +
                                '<div class="vm_title">{Id} {DepartmentCode}</div>'
                                + '<div class="vm_subDesc">{DepartmentName}</div></div></div>',
                        scrollable: 'vertical'
                        , plugins: [
                            {
                                xclass: 'Ext.plugin.ListPaging',
                                autoPaging: true, 
                                // These override the text; use CSS for styling
                                loadMoreText: 'Loading more records...',
                                noMoreRecordsText: 'Finished Loading'
                            }],
                            clearSelectionOnDeactivate: true
                    }]
    },

    initialize: function () {
        
        //this.getComponent("vmlabstitlebar").setTitle('Department');
        //this.getComponent("vmlabstitlebar").getComponent("homeButton").hide();
    }
});
