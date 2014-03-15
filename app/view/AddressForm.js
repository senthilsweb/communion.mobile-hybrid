Ext.define("vmlabs.view.AddressForm", {
    extend: "Ext.form.Panel",
    xtype: 'addressform',
    config: {
              
        scrollable: true,
        style: 'background-color: white;', //this will override sencha default backgound color
        items: [


            {
               xtype: 'toolbar',
               docked: 'top', //placed at the top
               title: 'My Address',
               ui: 'dark',
               items: [
                {
                    xtype: 'button',
                    ui: 'back confirm',
                    text: 'Back',
                    action: 'btnBackClick'
                }
               ]
            },

            {
                xtype: 'footer',
                docked: 'bottom'
            },

            {
                xtype: 'fieldset',
                //title: 'UserDetails',
                //style: 'background-color: white',
                styleHtmlContent: true,
                itemId: 'addressForm1',
                items: [
                    {
                       xtype: 'textfield',
                       name: 'Name',
                       placeHolder: 'Name'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Street',
                        placeHolder: 'Street'
                    },

                    {
                        xtype: 'textfield',
                        name: 'City',
                        placeHolder: 'City'
                    },
                    {
                        xtype: 'textfield',
                        name: 'State',
                        placeHolder: 'State'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Zip',
                        placeHolder: 'Zip'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Country',
                        placeHolder: 'Country'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Phone',
                        placeHolder: 'Phone'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Mobile',
                        placeHolder: 'Mobile'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Website',
                        placeHolder: 'Website'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Latitude',
                        placeHolder: 'Latitude'
                    },
                    {
                        xtype: 'textfield',
                        name: 'Longitude',
                        placeHolder: 'Longitude'
                    }




                ]
            },
            {
                xtype: 'panel',
                style: 'padding-left:30%;padding-right:10%;padding-top:5%',
                items: [
                    {
                        xtype: 'button',
                        //name: 'btndetails',
                        action: 'btnFormsubmit',
                        height:"20%",
                        //align: 'right',
                        width: "70%",
                        //centered: true,
                        //action: 'btnLoginSubmit', //Find button by action name inside the controller to attach event handlers
                        text: 'Submit',
                        ui: 'action'
                    }
                ]
            }
        ]
    }
});
