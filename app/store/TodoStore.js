Ext.define("vmlabs.store.TodoStore", {
    extend: "Ext.data.Store",
    config: {
        model: "vmlabs.model.TodoModel",

        autoLoad: true,

        pageSize: 20,

//        
                       grouper: {
                           groupFn: function (record) {
                               return record.get('Date')[8] + record.get('Date')[9] + '-' + record.get('Date')[4] + record.get('Date')[5] + record.get('Date')[6] + '-' + record.get('Date')[13] + record.get('Date')[14];
                            }
                        }


        
    }
});