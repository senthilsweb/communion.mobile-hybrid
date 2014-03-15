Ext.define('Communion.view.AdminStaff', {
    extend: 'Ext.Panel',
    xtype: 'adminstaff',
    config: {
        layout: 'fit',
        cls: 'whiteBackground',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Admin Staff'
            },

            {
                xtype: 'footer',
                docked: 'bottom'
            },
            {
                xtype: 'list',
                itemId: 'adminStaffLst',
                styleHtmlContent: true,
                onItemDisclosure: true,
                store: 'ResidentsStore',
                //disableSelection: true,
                indexBar: true,
                grouped: false,
                itemTpl: '{Name}'
            }
        ]
    }
});