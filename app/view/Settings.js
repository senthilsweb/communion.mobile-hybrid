/**
 * Created with JetBrains WebStorm.
 * User: SureshM
 * Date: 2/11/13
 * Time: 1:22 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Communion.view.Settings', {
    extend: 'Ext.Container',
    xtype: 'settings',
    config: {
        scrollable: true,
        cls: 'whiteBackground',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top', //placed at the top
                title: 'Settings'
            },
            {
                xtype: 'footer',
                docked: 'bottom'
            },
            {
                xtype: "fieldset",
                itemId: 'mode',
                items: [
                    {
                    xtype: "togglefield",
                    name: "Toggle",
                    label: 'Keep me logged in?',
                    labelWidth: '45%',
                    style: "font-size:0.8em;",
                    value: 0/*,
                     listeners: {
                     change: function (value) {
                     var val = Ext.getCmp("idToggle").getValues();
                     console.log(val);
                     localStorage.setItem("rememberUser", val);
                     if (val == 1) localStorage.setItem("rememberUserLogged", localStorage.getItem('userData'));
                     else localStorage.removeItem("rememberUserLogged");
                     }
                     }*/
                    },
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        itemId: 'modeFlight',
                        items: [
                            {
                                xtype: 'field',
                                label: 'Mode',
                                width: '45%',
                                labelWidth: '100%'
                            },
                            {
                                xtype: "segmentedbutton",
                                left: '46%',
                                top: '15%',
                                itemId: 'flight',
                                //styleHtmlContent: true,
                                /*items: [
                                    {
                                        text: '<i class="icon-plane"></i>',
                                        pressed: false
                                    }
                                ],*/
                                listeners: {
                                    initialize: function(button){
                                        if( flight ){
                                            var item = [
                                                {
                                                    text: '<i class="icon-plane"></i>',
                                                    pressed: true
                                                }
                                            ];
                                            button.setItems(item);
                                            button.getItems().items[0].setUi('confirm');
                                        }
                                        else{
                                            var item = [
                                                {
                                                    text: '<i class="icon-plane"></i>',
                                                    pressed: false
                                                }
                                            ];
                                            button.setItems(item);
                                            button.getItems().items[0].setUi('default');
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'field',
                                label: 'Sync',
                                width: '45%',
                                labelWidth: '100%'
                            },
                            {
                                left: '46%',
                                top: '10%',
                                //styleHtmlContent: true,
                                //cls: 'button',
                                items: [
                                    {
                                       xtype: "button",
                                       text: '<i class="icon-refresh"></i>'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
});