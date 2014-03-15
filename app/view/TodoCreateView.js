Ext.define('Communion.view.TodoCreateView', {
    extend: 'Ext.form.Panel',
    xtype: 'todocreateview',
    config: {
        scrollable: false,
        cls: 'background',
        padding: '1%',
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
                xtype: 'textfield',
                styleHtmlContent: true,
                //'width: "30%",
                name: 'Name',
                placeHolder: 'ToDo'
                //itemId: 'addressForm1',

            },
            

            {
                xtype: 'datepickerfield',
                //xtype:'textfield',
                styleHtmlContent: true,
                //width: "30%",
                name: 'Date',
                placeHolder: 'Due Date',
                //itemId: 'addressForm1',
                value: new Date()

            },
            
            {
                xtype: 'spacer',
                height: '10px'
            },
            {
                xtype: 'button',
                action: 'btncreatesubmit',
                //width: "30%",
                //style: 'float: right;',
                text: 'save',
                ui: 'confirm'
            }

        ]
    }
});