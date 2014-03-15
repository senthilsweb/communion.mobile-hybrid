Ext.define('Communion.model.ResidentsModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['Id', 'Name', 'DateOfBirth', 'Phone', 'Mobile', 'Email']
    }
});