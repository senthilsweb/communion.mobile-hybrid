Ext.define('Communion.store.ResidentsStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Communion.model.ResidentsModel',
        grouper: {
            groupFn: function (record) {
                return record.get('Name')[0];
            }
        },
        remoteFilter: true,
        sorters: [
            {
                property : 'Id',
                direction: 'ASC'
            }
        ],
        autoLoad: true, //If set to true then the data will be retrieved during application launch
        clearOnPageLoad: false, //True to empty the store when loading another page via loadPage, nextPage or previousPage (defaults to true). Setting to false keeps existing records, allowing large data sets to be loaded one page at a time but rendered all together.
        pageSize: 12,
        proxy: {
            type: 'jsonp',
            url: 'app/data/Residents.json',
            reader: {
                type: 'json',
                rootProperty: 'aaData.UserDetailsViewModels' //The result json is (may be) complex and nested objects hence we specify the root property to look for
            }
        }
    }
});