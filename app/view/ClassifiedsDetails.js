Ext.define('vmlabs.view.ClassifiedsDetails', {
    extend: 'Ext.Panel',
    xtype: 'classifiedsdetails',
    config: {
        layout: 'fit',
        cls: 'whiteBackground',
        //scrollable: true,
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
                        id: 'classifieds',
                        itemId: 'yellowpagesLst',
                        styleHtmlContent: true,
                        onItemDisclosure: true,
                        //store: 'YellowPagesDetailStore',
                        disableSelection: true,
                        itemTpl: '{OrganizationName}'
                    }
               ]
    }
});
