Ext.define('vmlabs.view.Navigation', {
    extend: 'Ext.Panel',
    xtype: 'navigation', //xtype is an easy way to create Components without using the full class name
    config: {
        cls: 'background', ////this class will override sencha's form background color 
        layout: 'vbox',
        scrollable: true,
        iconCls: 'home',
        title: 'Home',  //Title appear in Title bar
        items: [
            {
                xtype: 'navigationtitlebar',
                docked: 'top'
            },

            {
                xtype: 'footer',
                docked: 'bottom'
            },
            {
                xtype: 'panel',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        //html: '<div class="home-button"><div class="icon collections"></div></div><div class="vm-dashboard-notes">Users</div>',
                        html: '<div class="home-button"><div class="heading_logo"><div class="icon-group"></div></div></div><div class="vm-dashboard-notes">Residents</div>',
                        width: '33%',
                        action: 'btnResidents', // we are using this inside the controller @
                        ui: 'round',
                        cls: 'vm-btn-dashboard-top'
                    },
                    {
                        xtype: 'button',
                        html: '<div class="home-button"><div class="heading_logo"><div class="icon-calendar"></div></div></div><div class="vm-dashboard-notes">Events</div>',
                        width: '33%',
                        action: 'btnEvents',
                        ui: 'round',
                        cls: 'vm-btn-dashboard-top'
                    },
                    {
                        xtype: 'button',
                        //html: '<div class="home-button"><div class="icon news"></div></div><div class="vm-dashboard-notes">Department</div>',
                        html: '<div class="home-button"><div class="heading_logo"><div class="icon-tags"></div></div></div><div class="vm-dashboard-notes">Classifieds</div>',
                        width: '33%',
                        action: 'btnYellowPagesClick',
                        ui: 'round',
                        cls: 'vm-btn-dashboard-top'
                    }
                ]
            },
            {
                xtype: 'panel',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        //html: '<div class="home-button"><div class="icon news"></div></div><div class="vm-dashboard-notes">Department</div>',
                        html: '<div class="home-button"> <div class="heading_logo"><div class="icon-group"></div></div></div><div class="vm-dashboard-notes">Admin Staff</div>',
                        width: '33%',
                        action: 'btnAdminStaff',
                        ui: 'round',
                        cls: 'vm-btn-dashboard'
                    },
                    {
                        xtype: 'button',
                        //html: '<div class="home-button"><div class="icon places"></div></div><div class="vm-dashboard-notes">Facilities</div>',
                        html: '<div class="home-button"><div class="heading_logo"><div class="icon-map-marker"></div></div></div><div class="vm-dashboard-notes">My Address</div>',
                        width: '33%',
                        action: 'btnAddress',
                        ui: 'round',
                        cls: 'vm-btn-dashboard'
                    },
                    {
                        xtype: 'button',
                        //html: '<div class="home-button"><div class="icon favorites"></div></div><div class="vm-dashboard-notes">BU</div>',
                        html: '<div class="home-button"><div class="heading_logo"><div class="icon-list"></div></div></div><div class="vm-dashboard-notes">My Todos</div>',
                        width: '33%',
                        action: 'btnTodoClick',
                        ui: 'round',
                        cls: 'vm-btn-dashboard'
                    }
                ]

            }
            ,
            {
                xtype: 'panel',
                layout: 'hbox',
                items: [
                    {
                        xtype: 'button',
                        //html: '<div class="home-button"><div class="icon favorites"></div></div><div class="vm-dashboard-notes">BU</div>',
                        html: '<div class="home-button"><div class="heading_logo"><div class="icon-cogs "></div></div></div><div class="vm-dashboard-notes">Settings</div>',
                        width: '33%',
                        action: 'btnSettingsClick',
                        ui: 'round',
                        cls: 'vm-btn-dashboard'
                    },
                    {
                        xtype: 'button',
                        html: '<div class="home-button"><div class="heading_logo"><div class="icon-info-sign"></div></div></div><div class="vm-dashboard-notes">About</div>',
                        width: '33%',
                        action: 'btnAboutClick',
                        ui: 'round',
                        cls: 'vm-btn-dashboard'
                    },
                    {
                        xtype: 'button',
                        //html: '<div class="home-button"><div class="icon places"></div></div><div class="vm-dashboard-notes">Facilities</div>',
                        html: '<div class="home-button"><div class="heading_logo"><div class="icon-off" style="color: red;"></div></div></div><div class="vm-dashboard-notes">Logout</div>',
                        width: '33%',
                        action: 'btnClearMemory',
                        ui: 'round',
                        cls: 'vm-btn-dashboard'
                    }
                ]

            }
        ],
        listeners: {
            painted: function () { console.log('painted'); }
        }
    }
});
