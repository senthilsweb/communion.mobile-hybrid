Ext.define('Communion.controller.LoginController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            loginForm: 'login' // <anyKey> : <object/dom identifier> this will freely create a function called get<AnyKey>()
            // We can also use xtype i.e. loginForm:'login'
        },
        control: {
            'button[action=btnLoginSubmit]': { tap: "btnLoginSubmitClick" },
           
            
        }
    },
    btnLoginSubmitClick: function () {
        console.log("btnLoginSubmitClick")
        var form = this.getLoginForm(); //We got this for free through refs above

        var Username = form.getValues().txtUserName,
            Password = form.getValues().txtPassword,
            error = '';

//        if (Username == '' || Password == '') {
//            if (Username == '')
//                error = 'Username is required \n';
//            else if (Password == '')
//                error = error + 'Password is required \n';
//            Ext.Msg.alert('', error);
//        }
//        else {
//            Ext.Viewport.mask();
//            console.log("user=" + Username)
//            console.log("pass=" + Password)
//            //TODO: Implement Authentication
//            Ext.Ajax.request({
//                url: 'http://10.10.5.30/Communion-DEV/Account/Authenticate',
//                headers: { "Content-Type": "application/json", "Accept": "application/json" },
//                method: 'POST',
//                type: 'JSON',
//                params: '{"Username":"' + Username + '", "Password":"' + Password + '"}'
//        ,
//                success: function (result, request) {

//                    var response = Ext.JSON.decode(result.responseText)
//                    if (response.aaData.UserDetailsViewModel) {
//                        console.log("Authentication success")
//                        Ext.Viewport.unmask();
//                        window.localStorage.setItem('Communion.user', result.responseText);
//                        //window.localStorage("Communion.user") = result.aaData.UserDetailsViewModel;
//                        Ext.Viewport.setActiveItem({ xtype: 'navigation' });
//                        //Ext.Viewport.setAc    tiveItem({xtype:'navigation'},{type: 'slide', direction: 'right'});
//                    } else {
//                        console.log("Authentication failure")
//                        Ext.Msg.alert("Authentication failure");
//                        Ext.Viewport.unmask();
//                    }
//                },
//                failure: function (result, request) {
//                    // Unmask the viewport
//                    Ext.Viewport.unmask();
//                    console.log("Entered into the error routine")
//                    Ext.Msg.alert("Time out happened"); //Network Failure or Time out happened
//                    Ext.Viewport.unmask();
//                    //Ext.Viewport.setActiveItem({xtype:'main'},{type: 'slide', direction: 'right'});
//                    //Ext.Msg.alert("Network Failure or Time out happened");
//                }
//            });

//        }
        Ext.Viewport.setActiveItem({ xtype: 'navigation' });

    }
});