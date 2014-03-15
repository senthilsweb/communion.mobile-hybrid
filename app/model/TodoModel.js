


Ext.define("Communion.model.TodoModel", {
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
                dbConn: Communion.util.InitSQLite.getConnection()
            }
        }
    }
});