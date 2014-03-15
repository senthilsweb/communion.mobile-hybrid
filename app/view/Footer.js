/**
 * Created with JetBrains WebStorm.
 * User: RamanathanU
 * Date: 2/1/13
 * Time: 1:09 PM
 * To change this template use File | Settings | File Templates.
 */
var flight;
Ext.define('Communion.view.Footer', {
    extend: 'Ext.Panel',
    xtype: 'footer',
    config: {
        style: 'background-color: #3373b8',//#3081FB
        items: [
            {
                docked: 'right',
                id: 'networkStatus',
                itemId: 'networkStatus',
                html: '<div>&nbsp;</div>', //<i class="icon-circle x-html" id="networkValue" style="color: green"></i>
                listeners: {
                    painted: function(){
                        if( flight ){
                            Ext.getCmp('networkStatus').setHtml('<i class="icon-plane x-html" id="networkValue" style="color: red"></i>');
                        }
                        else{
                            Ext.getCmp('networkStatus').setHtml('<div>&nbsp;</div>');
                        }
                    }
                }
            }
        ]
    }
});