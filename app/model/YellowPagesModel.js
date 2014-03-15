Ext.define('Communion.model.YellowPagesModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['Id', 'Code', 'SyscodeDesc', 'OrganizationName', 'OrganizationDescription', 'CategoryCode', 'Street', 'City', 'State', 'PostalCode', 'Country', 'Phone', 'Mobile', 'Email', 'Website', 'ContactPersonName', 'ContactPersonMobile', 'Address', 'latitude', 'longitude']
    }
});