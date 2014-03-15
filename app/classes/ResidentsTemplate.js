Ext.define('Communion.classes.ResidentsTemplate', {
    statics: {
        /*
        * A template for rendering a summary of a Resident.
        */
        residentsList: Ext.create('Ext.XTemplate',
            '<div>' +
                '<p class="line1">{firstName} {lastName}</p>' +
                '<p class="line2">{city}</p>' +
            '</div>'
        )//,
//        residentsSummary: 
//        Ext.create('Ext.XTemplate',
//            '<div class="employee">'+
//                '<div id="employeeDetails" style="padding-right:10px;">'+
//                    '<img id="employeePic" src="resources/images/{picture}"/>'+
//                        '<h2 id="fullName" {firstName}'+' '+'{lastName}</h3></br>'+
//                        '<p class="line2">{title}</p><p class="line2" id="city">{city}</p></div>'+
//                        '<ul id="actionlist"><li id="liManager"><p class="line1">View Manager</p><p class="line2">{managerId}</p></li>'+
//                        '<li><p class="line1">Email</p><p class="line2">{email}</p>'+
//                        '<img src="resources/images/email.png" class="action-icon"/></li>'+
//                        '<li><p class="line1">Call Office</p><p class="line2">{officePhone}</p>'+
//                        '<img src="resources/images/phone.png" class="action-icon"/></li>'+
//                        '<li><p class="line1">Call Cell</p><p class="line2">{cellPhone}</p>'+
//                        '<img src="resources/images/phone.png" class="action-icon"/></li>'+
//                        '<li><p class="line1">SMS</p><p class="line2">{cellPhone}</p>'+
//                        '<img src="resources/images/sms.png" class="action-icon"/></li>'+
//                        '<li><p class="line1">Bio</p><p class="line2">{bio}</p></li>'+
//                        '</ul>' +
//            '</div>'
//        )
    }
});