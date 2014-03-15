var addressView = Ext.create('Ext.Panel', {

    cls: 'background',
    items: [
                        {
                            xtype: 'titlebar',
                            docked: 'top' //placed at the top
                        },
                        {
                            xtype: 'footer',
                            docked: 'bottom'
                        },
                        {
                            xtype: 'panel',
                            html: '<div>'
                                + '<Table class="table table-condensed table-striped">'
                                + '<Tr>'
                                + '<Th>No Address details</Th>'
                                + '</Tr>'

                                + '<Tr>'
                                + '<Td>Please use add button above to add address.</Td>'
                                + '</Tr>'
                                + '</Table>'
                                + '</div>'
                        }
                    ]
});




Ext.define('Communion.controller.AddressController', {
    extend: 'Ext.app.Controller',
    //requires: ['Communion.view.Address'],
    config: {
        refs: {
            addressDtls: 'address #myAddress',
            'editAddress': 'addressform',
            'addBtn': 'titlebar #addButton'
        },
        control: {
            'address': { show: 'showAddressToolBar' },
            'button[action=btnAddress]': { tap: "btnAddressClick" },
            'button[action=btnBackClick]': { tap: "btnAddressClick" },
            'button[action=btnEditClick]': { tap: "btnEditClick" },
            'button[action=btnSendmail]': { tap: "btnSendmailClick" },
            'button[action=btnSendsms]': { tap: "btnSendsmsClick" },
            'button[action=btndelete]': { tap: "btndeletedetails" }
        }
    },
    //Code for including the google maps api
    loadScript: function () {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://maps.google.com/maps/api/js?sensor=true";
        document.head.appendChild(script);
    },

    btndeletedetails: function () {


        //        var store = Ext.getStore('addressstore');
        //        store.setData('');
        //        store.sync();

        //Ext.Viewport.setActiveItem(addressView);
        //Ext.Msg.alert("Message!", "Successfully Deleted");
        Ext.Msg.confirm('Delete?', 'Are you sure you want to delete?', function (ans) {
            if (ans === "yes") {
                var store = Ext.getStore('addressstore');
                store.setData('');
                store.sync();
                Ext.Viewport.setActiveItem(addressView);
            }
        })

    },


    btnAddressClick: function () {
        var networkState = navigator.network.connection.type;
        if (networkState == Connection.NONE || networkState == Connection.UNKNOWN) {
            Ext.Msg.alert('No Network Found');
        }
        else {
            var count = Ext.getStore('addressstore').getData().length;
            if (count == 1) {
                var addressValue = Ext.getStore('addressstore').getData().all[0].getData();
                var htmlValue =
              '<address>'
                    + '<strong>' + addressValue.Name + '</strong><br>'
                    + addressValue.Street + '<br>'
                    + addressValue.City + ' ' + addressValue.State + ' ' + addressValue.Zip + '<br>';
                if (addressValue.Phone != null && addressValue.Phone != "") {
                    htmlValue = htmlValue + '<i class="icon-phone" style="color: #3081FB"></i>&nbsp;' + addressValue.Phone + '&nbsp;';
                }
                if (addressValue.Mobile != null && addressValue.Mobile != "") {
                    htmlValue = htmlValue + '<i class="icon-mobile-phone" style="color: #3081FB"></i>&nbsp;' + addressValue.Mobile + '<br>';
                }
                htmlValue = htmlValue + '<a>' + addressValue.Website + '</a>'
                + '</address>';


                var add = Ext.create('Communion.view.Address');
                add.getItems().items[0].getItems().items[2].items.items[2].setHidden(false);
                add.getItems().items[0].getItems().items[2].items.items[5].setHidden(false);
                Ext.Viewport.setActiveItem(add);   //{ xtype: 'address' }
                Ext.getCmp('myAddress').setHtml(htmlValue);
                this.getAddBtn().setHidden(true);
                //Ext.getCmp('addButton').hide();
                //Ext.getCmp('editButton').show();
            }
            else {

                Ext.Viewport.setActiveItem(addressView);
                //Ext.getCmp('addButton').show();
                this.getAddBtn().setHidden(false);
                //Ext.getCmp('editButton').hide();
            }
        }
    },
    showAddressToolBar: function () {
        console.log("inside showAddressToolBar");
        this.getApplication().getController('TitleBarController').enableAddressView();
    },
    btnEditClick: function () {

        var record = Ext.getStore('addressstore').getData().all[0].getData();
        var addressForm = Ext.create('Communion.view.AddressForm');
        addressForm.setValues(record);
        Ext.Viewport.setActiveItem(addressForm);
        //this.getEditAddress().setValues(record);
    },

    btnSendmailClick: function (btn) {
        var addressValue = Ext.getStore('addressstore').getData().all[0].getData();
        var msg = {
            subject: "My Address",
            body: "Address Details \n" + addressValue.Name + "\n" + addressValue.Street + "," + addressValue.City + "," + addressValue.State + "," + addressValue.Zip + "," + addressValue.Country + "\n" + addressValue.Phone + "\n" + addressValue.Mobile + "\n" + addressValue.Website
        };
        window.location = "mailto:?" + Ext.urlEncode(msg);
    },

    btnSendsmsClick: function (btn) {
        var addressValue = Ext.getStore('addressstore').getData().all[0].getData();
        window.location = "sms:?body=" + "Address Details \n" + addressValue.Name + "\n" + addressValue.Street + "," + addressValue.City + "," + addressValue.State + "," + addressValue.Zip + "," + addressValue.Country + "\n" + addressValue.Phone + "\n" + addressValue.Mobile + "\n" + addressValue.Website;
    }
});