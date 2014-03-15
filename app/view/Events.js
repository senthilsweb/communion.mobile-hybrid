
Ext.define('Communion.view.Events', {
    extend: 'Ext.Panel',
    requires: ['Communion.store.EventsStore'],
    xtype: 'events',
    config: {
        layout: 'fit',
        scrollable: false,
        items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top', //placed at the top
                        title: 'Events'
                    },
                    {
                        xtype: 'footer',
                        docked: 'bottom'
                    },
                    {
                        xtype: 'list',
                        //onItemDisclosure: 'true',
                        //disableSelection: true,
                        store: 'EventsStore',
                        itemTpl: Communion.classes.EventsTemplate.eventsSummary//,
//                        plugins: [
//                            {
//                                xclass: 'Ext.plugin.ListPaging',
//                                autoPaging: true,
//                                // These override the text; use CSS for styling
//                                loadMoreText: 'Loading more records...',
//                                noMoreRecordsText: 'Finished Loading'
//                            }
//                        ]
                    }
               ]
    },

    initialize: function () {
    }
});
