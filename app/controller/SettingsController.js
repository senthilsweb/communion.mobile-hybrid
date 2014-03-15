Ext.define('Communion.controller.SettingsController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            'flightMode': 'settings #mode #modeFlight #flight',
            'footerIcon': 'footer #networkStatus'
        },
        control: {
            'flightMode': { toggle: 'showPlaneIcon' }
        }
    },
    showPlaneIcon: function (container, button, pressed) {
        if(pressed == false){
            button.setUi('default');
            flight = false;
            Ext.getCmp('networkStatus').setHtml('<div>&nbsp;</div>');
        }
        else{
            button.setUi('confirm');
            flight = true;
            Ext.getCmp('networkStatus').setHtml('<i class="icon-plane x-html" id="networkValue" style="color: red"></i>');
        }
    }
});