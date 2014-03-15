/**
 * Created with JetBrains WebStorm.
 * User: SureshM
 * Date: 2/15/13
 * Time: 11:42 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Communion.view.About', {
    extend: 'Ext.Container',
    xtype: 'about',
    config: {
        scrollable: true,
        cls: 'whiteBackground',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'About Us'
            },
            {
                xtype: 'footer',
                docked: 'bottom'
            },
            {
                html: '<br><div>'+
                    '<div align ="center">'+
                    '<img src="resources/images/communion_blue.png"/></div>'+
                    '<br><div align ="center">'+
                    '<table>'+
                    '<tr>'+
                    '<td class="vmAbout_Label">Developed With : </td>'+
                    '<td  class="vmAbout_Text"> PhoneGap and Sencha touch 2.0 </td>'+
                    '</tr>'+                   
                    '<tr>'+
                    '<td  class="vmAbout_Label">Version : </td>'+
                    '<td  class="vmAbout_Text"> 1.0 </td>'+
                    '</tr>'+
                    '</table></div></div>'
            },
            {
                html: '<div>&nbsp;</div>'
            },
            {
                xtype: 'button',
                text: 'MyAlbum',
                width: '50%',
                action: 'showalbum'
            }
        ]
    }
});
