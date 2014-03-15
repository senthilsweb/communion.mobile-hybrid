Ext.define('Communion.store.EventsStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'Communion.model.EventsModel',
//        sorters: [
//        {
//        property : 'Id',
//        direction: 'DESC'
//        }
//        ],
        autoLoad: true, //If set to true then the data will be retrieved during application launch
        clearOnPageLoad: false, //True to empty the store when loading another page via loadPage, nextPage or previousPage (defaults to true). Setting to false keeps existing records, allowing large data sets to be loaded one page at a time but rendered all together.
        pageSize: 2,
        /*data: [
            {
                name: 'Ugadi Festival',
                description: 'According to the Hindu mythology Ugadi is called as start of a new year.',
                place: 'India',
                time: Date()
            },
            {
                name: 'Anacondas Festival',
                description: 'Once upon a time there lived a king and queen called Wodiyar Royals. While he went for hunting with his wife, he found Anaconda ...',
                place: 'Bannnerghatta National Park',
                time: Date()
            },
            {
                name: 'Dasara Festival',
                description: 'Once upon a time there lived a king and queen called Wodeyar Royals. They started this festival ...',
                place: 'Mysore',
                time: Date()
            }
        ]*/
        proxy: {
            type: 'jsonp',
            url: 'app/data/Events.json',
            /*pageParam: 'mypage',
            limitParam: 'mylimit',*/
            reader: {
                type: 'json',
                rootProperty: 'aaData.eventViewModels' //The result json is (may be) complex and nested objects hence we specify the root property to look for
            }
        }
    }
});