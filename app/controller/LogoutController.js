Ext.define('Communion.controller.LogoutController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            
        },
        control: {
            'button[action=btnClearMemory]': { tap: "btnLogOut" }
           
        }
    },
    btnLogOut: function () {
    Ext.Msg.confirm('logout?', 'Are you sure you want to logout?', function (answer) 
    {
        if (answer === "yes") 
            {
                //refreshing the page and erasing the memory 
                window.location.href = "";
               //window.location.href = window.location.href; //If the above function not working properly, try this function
                }
            })
    
    }
   



});