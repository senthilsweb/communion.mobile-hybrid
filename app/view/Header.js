/**
 * Created with JetBrains WebStorm.
 * User: RamanathanU
 * Date: 2/1/13
 * Time: 9:47 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Communion.view.Header', {
    extend: 'Ext.Panel',
    xtype: 'header',
    config: {
        items: [
            {
                xtype: 'panel',
                html: '<div><img src="resources/images/communion_src.png"></div></div>'
            }
        ]
    }
});
