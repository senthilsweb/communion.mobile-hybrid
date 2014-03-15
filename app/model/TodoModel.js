


Ext.define("vmlabs.model.TodoModel", {
    extend: "Ext.data.Model",
    config: {
        fields:[
           { name: 'Name', type: 'string' },
            { name: 'Date', type: 'string' }
            //{ name: 'Description', type: 'string' }
            ],
        proxy: {
            type: 'sqlitestorage',
            dbConfig: {
                tablename: 'TodoList',
                dbConn: vmlabs.util.InitSQLite.getConnection()
            }
        }
    }
});