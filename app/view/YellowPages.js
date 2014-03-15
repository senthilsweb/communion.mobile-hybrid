Ext.define('vmlabs.view.YellowPages', {
    extend: 'Ext.Panel',
    xtype: 'yellowpages',
    config: {
        layout: 'fit',
        cls: 'whiteBackground',
        items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top', //placed at the top
                        title: 'Classifieds'
                    },
                    {
                        xtype: 'footer',
                        docked: 'bottom'
                    },
                    {
                        xtype: 'list',
                        itemId: 'yellowpagesLst',
                        styleHtmlContent: true,
                        onItemDisclosure: true,
                        store: 'YellowPagesStore',
                        //disableSelection: true,
                        itemTpl: '{SyscodeDesc}'
                    }
               ]
    }
});
