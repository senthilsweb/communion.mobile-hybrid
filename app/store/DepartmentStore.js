Ext.define('Communion.store.DepartmentStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Communion.model.DepartmentModel',
        sorters: [
            {
                property : 'Id',
                direction: 'DESC'
            }
        ],
        autoLoad: false, //If set to true then the data will be retrieved during application launch
        clearOnPageLoad: true, //True to empty the store when loading another page via loadPage, nextPage or previousPage (defaults to true). Setting to false keeps existing records, allowing large data sets to be loaded one page at a time but rendered all together.
        pageSize: 5,
        proxy: {
            type: 'jsonp', //for cross domain calls
            url: 'http://10.10.5.30/Communion-dev/department/0',
            //url : 'http://localhost:85/Source/Communion.Mobile/department.json',
            //url : 'http://wgo-hung-ror.herokuapp.com/users.json',
            /*pageParam: 'mypage',
            limitParam: 'mylimit',*/
            reader: {
                type: 'json',
                rootProperty:'aaData.DepartmentDetailsViewModels' //The result json is (may be) complex and nested objects hence we specify the root property to look for
            }
        }
    }
});