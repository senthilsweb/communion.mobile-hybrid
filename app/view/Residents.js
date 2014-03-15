Ext.define('Communion.view.Residents', {
    extend: 'Ext.Panel',
    xtype: 'residents',
    config: {
        layout: 'fit',
        cls: 'whiteBackground',
        items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top', //placed at the top
                        title: 'Residents'
                    },

                    {
                        xtype: 'footer',
                        docked: 'bottom'
                    },
                    {
                        xtype: 'list',
                        itemId: 'residentsLst',
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
