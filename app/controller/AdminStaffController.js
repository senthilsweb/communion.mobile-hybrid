/**
 * Created with JetBrains WebStorm.
 * User: SureshM
 * Date: 2/12/13
 * Time: 5:20 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('vmlabs.controller.AdminStaffController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            'adminStaff': 'adminstaff #adminStaffLst',
            'adminStaffdetail': 'adminstaffdetailview #AdminStaffDetails'
        },
        control: {
            'adminStaff': { disclose: 'showAdminStaffDetails' },
            'button[action=showAdminStaff]': { tap: 'showAdminStaffList' }
        }
    },
    showAdminStaffDetails: function (list, record, target, index) {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Loading...'
        });

        var recordData = record.data;
        var dob = recordData.DateOfBirth;
        var dateOfBirthValue;
        if (dob != null) {
            dateOfBirthValue = vmlabs.classes.Utils.ConvertJsonDateToDDMMYYFormat(dob);
        } else {
            dateOfBirthValue = null;
        }
        var adminStaffDetailsTemplate = '<div>' +
            '<div><h4>' + recordData.Name + '</h4><div>' +
            '<table class="table table-condensed table-striped">' +

            '<a href="callto:"+recordData.Phone><tr id="rowPhoneTap">' +
        //                                    '<td>Office Phone</td>' +
            '<td><div><i class="icon-phone" style="color: #3373b8">&nbsp phone</i></div>' + recordData.Phone + '</td>' +
            '<td><img src="resources/images/phone.png" align="right" style="width: 40px;"/></td>' +
            '</tr></a>' +

            '<a href="callto:"+recordData.Mobile><tr id="rowMobileTap">' +
        //                                    '<td>Cell Phone</td>' +
            '<td><div><i class="icon-mobile-phone" style="color: #3373b8">&nbsp Mobile</i></div>' + recordData.Mobile + '</td>' +
            '<td><img id="imgCallPhone" src="resources/images/phone.png" align="right" style="width: 40px;"/></td>' +
            '</tr></a>' +

           '<a href="mailto:"+recordData.Email><tr id="rowEmailTap">' +
        //                                    '<td>Email</td>' +
            '<td><div><i class="icon-envelope" style="color: #3373b8">&nbsp Email</i></div>' + recordData.Email + '</td>' +
            '<td><img id="imgEmail" src="resources/images/email.png" align="right" style="width: 40px;"/></td>' +
            '</tr></a>' +
            '</table>' +
            '</div>';


        Ext.Viewport.setActiveItem({ xtype: 'adminstaffdetailview', styleHtmlContent: true, html: adminStaffDetailsTemplate,
            listeners: {
                tap: function( tap, element ){
                    if(tap.delegatedTarget.id == 'rowPhoneTap'){
                        window.location = "wtai://wp/mc;[" + tap.delegatedTarget.innerText.trim() + "]";//tap.delegatedTarget.innerText.trim() ;
                    }
                    else if(tap.delegatedTarget.id == 'rowMobileTap'){
                        window.location = "callto:" + tap.delegatedTarget.innerText.trim() ;
                    }
                    else{
                        /*var msg = {
                         subject : "My Address",
                         body : "Address Details \n"+ addressValue.Name +"\n"+ addressValue.Street +","+ addressValue.City +","+ addressValue.State +","+ addressValue.Zip +","+ addressValue.Country +"\n"+ addressValue.Phone +"\n"+ addressValue.Mobile +"\n"+ addressValue.Website
                         };*/
                        window.location = "mailto:" + tap.delegatedTarget.innerText.trim() ;
                    }
                },
                element: 'element',
                delegate: 'tr'
            }});
        Ext.Viewport.unmask();
    },

    showAdminStaffList: function () {
        Ext.Viewport.setActiveItem({ xtype: 'adminstaff' });
    }
});