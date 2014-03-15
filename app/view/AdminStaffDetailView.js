Ext.define('vmlabs.view.AdminStaffDetailView', {
    extend: 'Ext.Panel',
    xtype: 'adminstaffdetailview',
    config: {
        layout: 'fit',
        cls: 'whiteBackground',
        scrollable: true,
        items: [
                    {
                        xtype: 'toolbar',
                        docked: 'top', //placed at the top
                        title: 'Admin Details',//:ellipsis(10, true)
                        ui: 'dark',
                        items: [
                            {
                                xtype: 'button',
                                ui: 'back confirm',
                                text: 'Back',
                                action: 'showAdminStaff'
                            }
                        ]
                    },
                    {
                            xtype: 'footer',
                            docked: 'bottom'
                    }
               ]
    }
});
