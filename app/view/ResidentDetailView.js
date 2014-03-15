Ext.define('Communion.view.ResidentDetailView', {
    extend: 'Ext.Panel',
    xtype: 'residentdetailview',
    config: {
        layout: 'fit',
        cls: 'whiteBackground',
        scrollable: true,
        items: [
                    {
                        xtype: 'toolbar',
                        itemId: 'residentTitle',
                        docked: 'top', //placed at the top
                        title: 'Resident Details',
                        ui: 'dark',
                        items: [
                            {
                                xtype: 'button',
                                ui: 'back confirm',
                                text: 'Back',
                                action: 'showResidents'
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