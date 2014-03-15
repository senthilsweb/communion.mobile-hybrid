Ext.define('Communion.classes.EventsTemplate', {
    statics: {
        /*
        * A template for rendering a summary of an event.
        */
    //startDate: Communion.classes.utils.ConvertJsonDateToDDMMYYFormat('{StartDate}'),
    //endDate: Communion.classes.utils.ConvertJsonDateToDDMMYYFormat('{EndDate}'),
    eventsSummary: Ext.create('Ext.XTemplate',

        // Left Column
            '<div class="vm-custom-events-font ml-date">',
        // Date & Time
                '<div class="vm-custom-events-font date-time">',
                    '<div class="vm-custom-events-font calendar">',
                        '<div class="vm-custom-events-font month">',
                            '{StartDate:date("M")}',
                        '</div>',
                        '<div class="vm-custom-events-font date">',
                            '{StartDate:date("j")}',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>',

        // Middle Column
            '<div class="vm-custom-events-font ml-details">',
        // Meeting Name
                '<div class="vm-custom-events-font meeting-name">',
                    '<a href="javascript:null;" action="details" class="vm-custom-events-font detail summary-detail" mu:id="{id}">{Name}</a>', //({StartDate:date("dd/mm/yy")}-{EndDate:date("d/m/y")})
                '</div>',

        // Group Name
                '<div class="vm-custom-events-font group-name" title="{Description}">',
                    '{Description:ellipsis(145, true)}<br/>',
                '</div>',

        // Location Name
                '<div class="vm-custom-events-font location-name">',
                    '{Location}',
                '</div>',
            '</div>')
    }
});