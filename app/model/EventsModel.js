Ext.define('Communion.model.EventsModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['Id', 'Name', 'Description', 'Location', 'StartDate', 'EndDate', 'IsActive']
    }
});