
Ext.define("vmlabs.store.AddressStore", {
    extend: "Ext.data.Store",
    config: {
        model: "vmlabs.model.AddressModel",
        autoLoad: true,
        storeId: 'addressstore',
        pageSize: 15
    }
});