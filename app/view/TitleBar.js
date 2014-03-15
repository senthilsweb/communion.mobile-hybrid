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
            itemId: 'backButton',
            hidden: true,
            align: 'right',
            action: 'btnBackClick',
            text: 'back',
            ui: 'back'
        },
         {
             itemId: 'editButton',
             hidden: true,
             align: 'right',
             action: 'btnEditClick',
             iconMask: true,
             iconCls: 'compose',
             ui: 'confirm'
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
        }, {
            itemId: 'deleteButton',
            iconMask: true,
            iconCls: 'trash',
            align: 'right',
            action: 'btndelete',
            hidden: true,
            //pressed: false,
            ui: 'decline'


        }
        ]
    }
});