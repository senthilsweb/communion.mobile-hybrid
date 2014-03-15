
Ext.define('vmlabs.controller.TitleBarController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            'titleBar': 'titlebar', //this will give the instance of titlebar view
            'homeButton': 'titlebar button[action=home]',
            'findButton': 'titlebar button[action=find]',
            'addButton': 'titlebar button[action=add]',
            'backButton': 'titlebar button[action=btnBackClick]',
            'AddressForm': 'addressform',
            'editButton': 'titlebar #editButton'//,
            //'delButton': 'button[action=btndelete]'


        },
        control: {
            'homeButton': { tap: 'onHomeButtonClick' },
            'addButton': { tap: 'onAddButtonClick' },
            'button[action=btnFormsubmit]': { tap: 'saveform' }
            //Attach event handlers for controls matched by component queries. In this case button whose action="btnLoginSubmit" is queried
        }
    },
    /**
    * Handle the home button being clicked.
    */

    //Event Handler for the selected Icon
    onHomeButtonClick: function () {
        var me = this;
        //me.getApplication().getController('HomeScreen').showHomeScreen();
        //Ext.Viewport.removeAll(true,true);
        //Ext.Viewport._activeItem = null;
        Ext.Viewport.setActiveItem({ xtype: 'navigation' });
    },

    onAddButtonClick: function () {
        //var me = this;
        //this.disableAddressView();
        //me.getApplication().getController('HomeScreen').showHomeScreen();
        //Ext.Viewport.removeAll(true,true);
        //Ext.Viewport._activeItem = null;
        //this.getBackButton().setHidden('false');
        Ext.Viewport.setActiveItem({ xtype: 'addressform' });
    },

    saveform: function (btn) {
//        var networkState = navigator.network.connection.type;
//        if (networkState != Connection.NONE || networkState != Connection.UNKNOWN) {
//            Ext.Msg.alert('No Network Found');
//        }
//        else {

            var formVals = btn.up('formpanel').getValues();
            var record = formVals,
                store = Ext.getStore('addressstore');
            store.setData('');
            store.add(record);
            store.sync();
            var htmlValue =
            '<address>'
                + '<strong>' + record.Name + '</strong><br>'
                + record.Street + '<br>'
                + record.City + ' ' + record.State + ' ' + record.Zip + '<br>';
            if (record.Phone != null && record.Phone != "") {
                htmlValue = htmlValue + '<i class="icon-phone" style="color: #3081FB"></i>&nbsp;' + record.Phone + '&nbsp;';
            }
            if (record.Mobile != null && record.Mobile != "") {
                htmlValue = htmlValue + '<i class="icon-mobile-phone" style="color: #3081FB"></i>&nbsp;' + record.Mobile + '<br>';
            }
            htmlValue = htmlValue + '<a>' + record.Website + '</a>'
            + '</address>';

            var myAdd = Ext.create('vmlabs.view.Address'); //,{ id: 'myAdd' }
            myAdd.getItems().items[0].getItems().items[2].items.items[2].setHidden(false);
            myAdd.getItems().items[0].getItems().items[2].items.items[5].setHidden(false);
            Ext.Viewport.setActiveItem(myAdd);
            Ext.getCmp('myAddress').setHtml(htmlValue);
            alert(Ext.device.Connection.isOnline());
            //}
            /*else{
            Ext.Msg.alert("Error!","No Network connection!");
            }*/
        //}
    },


    enableDepartmentListView: function () {
        var me = this;
        me.getFindButton().show();
        console.log("inside department list");
        me.getTitleBar().setTitle('Department');
    },

    enableAddressView: function () {
        console.log("inside enableAddressView start");
        var me = this;
        //me.getAddButton().show();

        me.getFindButton().hide();
        //me.getEditButton().hide();
        me.getBackButton().hide();
        console.log("inside location list");
        me.getTitleBar().setTitle('My Address');
        //me.getHomeButton().hide();
        console.log("inside enableAddressView end");
    },
    toggleAddFormButtons: function () {
        //Ext.getCmp('idBtnAdd').hide();
        Ext.getCmp('idBtnBack').show();
        //Ext.getCmp('btnUserSubmit').setText("");
    }



});