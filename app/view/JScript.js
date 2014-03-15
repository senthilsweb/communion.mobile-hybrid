Ext.define('Communion.view.TitleBar', {
    extend: 'Ext.TitleBar',
    xtype: 'titlebar',
    config: {
        docked: 'top',
        title: '',
        cls: 'topToolbar',
        defaults: {
            xtype: 'button'
        },
        items: [{
            itemId: 'homeButton',
            hidden: false,
            iconMask: true,
            iconCls: 'home',
            action: 'home',
            align: 'left',
            ui: 'confirm'
        }, {
            itemId: 'addButton',
            action: 'add',
            hidden: true,
            iconMask: true,
            iconCls: 'add',
            align: 'right',
            ui: 'confirm'
        },

        {
            xtype: 'button',
            itemId: 'backButton',
            hidden: false,
            align: 'right',
            action: 'btnBackClick',
            text: 'back',
            ui: 'back'
        },
        {
            itemId: 'logoutButton',
            action: 'logout',
            hidden: true,
            iconMask: true,
            align: 'right',
            ui: 'confirm'
        }, {
            itemId: 'findButton',
            iconMask: true,
            iconCls: 'search',
            align: 'right',
            action: 'find',
            hidden: true,
            ui: 'confirm'
        }]
    }
});