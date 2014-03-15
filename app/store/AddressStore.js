
Ext.define("Communion.store.AddressStore", {
    extend: "Ext.data.Store",
    config: {
        model: "Communion.model.AddressModel",
        autoLoad: true,
        storeId: 'addressstore',
        pageSize: 15
    }
});