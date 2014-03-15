Ext.define('Communion.util.InitSQLite', {
  singleton : true,

  requires: [
      //'Sqlite.Connection',
      //'Sqlite.data.proxy.SqliteStorage',
    'Ext.data.reader.Array'
  ],
  
  initDb: function() {
    Ext.ns('DbConnection');
    
    this.DbConnection = Ext.create('Sqlite.Connection', {
      dbName: 'Communion',
      dbDescription: 'Used to store the data'
    });
  },
  
  getConnection: function() {
    if(!Ext.isDefined(this.DbConnection)) this.initDb();
    return this.DbConnection;
  }
});
