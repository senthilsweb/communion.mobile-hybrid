/**
 * Created with JetBrains WebStorm.
 * User: RamanathanU
 * Date: 1/29/13
 * Time: 10:51 AM
 * To change this template use File | Settings | File Templates.
 */


Ext.application({
    name: 'vmlabs',
    Category: '',
    requires: ['vmlabs.util.InitSQLite'],
    models: ['DepartmentModel', 'EventsModel', 'ResidentsModel', 'AddressModel', 'YellowPagesModel','TodoModel'],
    views: ['Login', 'Navigation', 'DepartmentList', 'Header', 'Footer', 'TitleBar', 'LoginTitleBar', 'Events', 'AddressForm', 'NavigationTitleBar', 'Residents', 'ResidentDetailView', 'AdminStaff', 'YellowPages', 'ClassifiedsDetails', 'Settings', 'AdminStaffDetailView','TodoView','TodoCreateView','Address'],
    controllers: ['LoginController', 'NavigationController', 'DepartmentController', 'TitleBarController', 'LogoutController', 'ResidentsController','BackButtonController', 'ClassifiedsController', 'AdminStaffController','TodoController', 'AddressController', 'SettingsController'],
    stores: ['DepartmentStore', 'EventsStore', 'ResidentsStore', 'YellowPagesStore','TodoStore', 'AddressStore'],
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },
    phoneStartupScreen : 'resources/startup/320x460.jpg',
    isIconPrecomposed: true,
    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.jpg',
        '768x1004': 'resources/startup/768x1004.jpg',
        '748x1024': 'resources/startup/748x1024.jpg',
        '1536x2008': 'resources/startup/1536x2008.jpg',
        '1496x2048': 'resources/startup/1496x2048.jpg'
    },
    launch: function() {
        console.log("Application Launch (Start)")
        //Delay load the Login form by x sec just to feel the Launch UI
        var task = Ext.create('Ext.util.DelayedTask', function() {
            // Destroy the #appLoadingIndicator element
            //Ext.fly('appLoadingIndicator').destroy();
            //Change the index.html background color to white
            //Ext.get('vmlabs-pg-body').setStyle('backgroundColor', 'white');
            /*Todo: Check if authentication ticket already available*/
            Ext.Viewport.add(Ext.create('vmlabs.view.Login'));
            Ext.Viewport.getLayout().setAnimation({type: 'slide', direction: 'right'});
        });
        task.delay(100);
        console.log("Application Launch (End)")
    }

});