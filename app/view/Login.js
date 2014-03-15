Ext.define("Communion.view.Login", {
    extend: "Ext.form.Panel",
    xtype: 'login',
   
    config: {
        scrollable: false,
        style: 'background-color: #FFFFFF;', //this will override sencha default backgound color
        items: [
            {
                xtype: 'container',                       
                items: [

                    {
                        xtype: 'Communionlogintitlebar',                        
                        docked: 'top'
                    }
                ]
            },

            {
                xtype: 'fieldset',
                style: 'padding-left:10%;padding-right:10%;', /*padding-top:50%*/
                itemId: 'loginFields',
                cls: 'loginField',                           
                items: [
                    {
                        xtype: 'textfield',
                        name: 'txtUserName', // We use this to get the values from the form object i.e. form.getValues().txtUserName
                        placeHolder: 'Username',
                        value: 'swathi',
                        style: 'background: #EEE;',
                        required: true
                    },
                    {
                        xtype: 'passwordfield',
                        name: 'txtPassword',
                        placeHolder: 'Password',
                        value: 'swathi',
                        style: 'background: #EEE;',
                        required: true
                    }
                ]
            },
            /*{
                xtype: 'spacer',
                height: '15px'
            },*/
            {
            xtype: 'fieldset',
            style: 'padding-left:10%;padding-right:10%',
                items: [
                    {
                        xtype: 'button',
                        name: 'btnLoginSubmit',
                        action: 'btnLoginSubmit', //Find button by action name inside the controller to attach event handlers
                        text: 'Sign In',
                        ui: 'confirm' //Blue Theme
                    }
                ]
            }
        ]
    }
});
