Ext.define('vmlabs.controller.NavigationController', {
    extend: 'Ext.app.Controller',
    requires: ['vmlabs.view.About', 'vmlabs.ux.Cover'],
    config: {
        refs: {
            'homeButton': 'titlebar button[action=home]'   // We can also use xtype i.e. loginForm:'login'
        },

        control: {
            'button[action=btnEvents]': { tap: "btnEventsClick" },
            'button[action=btnResidents]': { tap: "btnResidentsClick" },
            'button[action=btnAdminStaff]': { tap: "btnAdminStaffClick" },
            'button[action=btnYellowPagesClick]': { tap: "btnYellowPageClick" },
            'button[action=btnSettingsClick]': { tap: "btnSettingsClick" },
            'button[action=btnAboutClick]': { tap: "btnAboutClick" },
            'button[action=showalbum]': { tap: "showAlbum" }
        }
    },
    btnSettingsClick: function () {
        Ext.Viewport.setActiveItem({ xtype: 'settings' });
    },
    btnEventsClick: function () {
        Ext.Viewport.setActiveItem({ xtype: 'events' });
    },
    btnResidentsClick: function () {
        Ext.Viewport.setActiveItem({ xtype: 'residents' });
    },
    btnAdminStaffClick: function () {
        Ext.Viewport.setActiveItem({ xtype: 'adminstaff' });
    },
    btnYellowPageClick: function () {
        Ext.Viewport.setActiveItem({ xtype: 'yellowpages' });
    },
    btnAboutClick: function() {
        var aboutView = Ext.create('vmlabs.view.About');
        Ext.Viewport.setActiveItem(aboutView);
    },
    showAlbum: function(btn){
        var cover = Ext.create('vmlabs.ux.Cover', {
            itemCls: 'my-cover-item',
            //These are just for demo purposes.
            centered: true,
            height: (Ext.os.deviceType !== 'Phone')? '30%': '65%',
            width: (Ext.os.deviceType !== 'Phone')? '80%': '90%',
            //end-demo
            itemTpl : [
                '<div>',
                /*'<div class="dev">{firstName} {lastName}</div>',
                '<div class="company">{company}</div>',*/
                '<div class="image"><img  src="{image}" /></div>',
                '</div>'
            ],
            store : {
                fields: ['image'],
                data: [
                    {image: 'resources/images/nature2.jpg'},
                    {image: 'resources/images/nature3.jpg'},
                    {image: 'resources/images/nature4.jpg'},
                    {image: 'resources/images/nature5.jpg'},
                    {image: 'resources/images/nature6.jpg'},
                    {image: 'resources/images/nature7.jpg'},
                    {image: 'resources/images/nature8.jpg'},
                    {image: 'resources/images/nature9.jpg'},
                    {image: 'resources/images/nature10.jpg'},
                    {image: 'resources/images/nature11.jpg'},
                    {image: 'resources/images/nature12.jpg'},
                    {image: 'resources/images/nature13.jpg'},
                    {image: 'resources/images/nature14.jpg'},
                    {image: 'resources/images/nature15.jpg'},
                    {image: 'resources/images/nature16.jpg'},
                    {image: 'resources/images/nature17.jpg'},
                    {image: 'resources/images/nature18.jpg'},
                    {image: 'resources/images/nature19.jpg'},
                    {image: 'resources/images/nature20.jpg'},
                    {image: 'resources/images/nature21.jpg'}
                ]
            },
            selectedIndex: 2,
            listeners:{
                itemdoubletap: function(){
                    console.log('itemdbltap', arguments);
                },
                itemtap: function(cover, idx){
                    console.log('itemtap', arguments);
                },
                scope: this
            }
        });


        /*var tab = Ext.create('Ext.tab.Panel',{
            tabBarPosition: 'bottom',
            items:[{
                title: 'cover',
                iconCls: 'favorites',
                //Demo purpose
                layout: (Ext.os.deviceType === 'Phone')? 'fit': {
                    type: 'vbox',
                    pack:'center',
                    align: 'center'
                },
                //end demo
                items: [cover]
            }]
        });*/

        var tab = Ext.create('Ext.Panel',{
            layout: (Ext.os.deviceType === 'Phone')? 'fit': {
                type: 'vbox',
                pack:'center',
                align: 'center'
            },
            items:[
                {
                    xtype: 'titlebar',
                    title: 'Cover Flow'
                },
                cover
            ]
        });

        //weird fix to call refresh when orientation changes
        //	Ext.Viewport.on('orientationchange', function(){cover.refresh();})
        Ext.Viewport.setActiveItem(tab);
    }
});