Ext.define('Communion.controller.ResidentsController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            'residents': 'residents #residentsLst',
            'residentdetail': 'residentdetailview #residentDetails'
        },
        control: {
            'residents': { disclose: 'showResidentDetails' },
            'button[action=showResidents]': { tap: 'showResidentsList' }
        }
    },
    showResidentDetails: function (list, record, target, index) {
        Ext.Viewport.setMasked({
            xtype: 'loadmask',
            message: 'Loading...'
        });

        var recordData = record.data;
        var dob = recordData.DateOfBirth;
        var dateOfBirthValue;
        if (dob != null) {
            dateOfBirthValue = Communion.classes.Utils.ConvertJsonDateToDDMMYYFormat(dob);
        } else {
            dateOfBirthValue = null;
        }
        var residentDetailsTemplate = '<div>' +
            '<div><h4>' + recordData.Name + '</h4><div>' +
            '<table class="table table-condensed table-striped">' +
            //'<td><i class="icon-user"></i>&nbsp;' + record.data.Name + '</td>' +
            //'<tr>' +
            //                                    '<td>Date of Birth</td>' +
            //'<td>' + dateOfBirthValue + '<i class="icon-calendar" style="color: #3081FB"></i></td>' +
            //'<td></td>' +
            //'</tr>' +
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

        Ext.Viewport.setActiveItem({ xtype: 'residentdetailview', styleHtmlContent: true, html: residentDetailsTemplate,
            listeners: {
                tap: function( tap, element ){
                    if(tap.delegatedTarget.id == 'rowPhoneTap'){
                        window.location = "callto:" + tap.delegatedTarget.innerText.trim() ;
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

    showResidentsList: function () {
        Ext.Viewport.setActiveItem({ xtype: 'residents' });
    }
});