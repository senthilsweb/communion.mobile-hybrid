Ext.define("vmlabs.model.AddressModel", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: 'Name', type: 'string' },
            { name: 'Street', type: 'string'},
            { name: 'City', type: 'string' },
            { name: 'State', type: 'string' },
            { name: 'Zip', type: 'string' },
            { name: 'Country', type: 'string'},
            { name: 'Phone', type: 'string' },
            { name: 'Mobile', type: 'string' },
            { name: 'Website', type: 'string'},
            { name: 'Latitude', type: 'double'},
            { name: 'Longitude', type: 'double'}
        ],
        proxy: {
            type: 'sqlitestorage',
            dbConfig: {
                tablename: 'AddressDetails',
                dbConn: vmlabs.util.InitSQLite.getConnection()
            }
        }
    }
});