var detailsView;
var latlng;
Ext.define('Communion.controller.ClassifiedsController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            classifieds: 'yellowpages #yellowpagesLst'
        },
        control: {
            classifieds: { disclose: 'classifiedsListDetails' },
            'button[action=mapDirections]': { tap: 'showDirections' }
        }
    },
    classifiedsListDetails: function (list, record, target, index) {
        Communion.app.Category = record.data.Code;
        var classifiedStore = Ext.create('Ext.data.Store', {
            model: 'Communion.model.YellowPagesModel',
            filters: {
                property: 'CategoryCode',
                value: Communion.app.Category
            },
            autoLoad: true, //If set to true then the data will be retrieved during application launch
            clearOnPageLoad: true, //True to empty the store when loading another page via loadPage, nextPage or previousPage (defaults to true). Setting to false keeps existing records, allowing large data sets to be loaded one page at a time but rendered all together.
            pageSize: 12,
            proxy: {
                type: 'ajax',
                url: 'app/data/Yellowpages.json',
                reader: {
                    type: 'json',
                    rootProperty: 'aaData.YellowPageViewModels' //The result json is (may be) complex and nested objects hence we specify the root property to look for
                }
            }
        });


        var classifiedsView = Ext.create('Ext.Panel', {
            layout: 'fit',
            cls: 'whiteBackground',
            items: [
                {
                    xtype: 'toolbar',
                    docked: 'top', //placed at the top
                    title: record.data.SyscodeDesc,
                    ui: 'dark',
                    items: [
                        {
                            xtype: 'button',
                            ui: 'back confirm',
                            text: 'Back',
                            action: 'showClassifieds',
                            listeners: {
                                tap: function () {
                                    Ext.Viewport.setActiveItem({ xtype: 'yellowpages' });
                                }
                            }
                        }
                    ]
                },
                {
                    xtype: 'footer',
                    docked: 'bottom'
                },
                {
                    xtype: 'list',
                    itemId: 'yellowpagesLst',
                    styleHtmlContent: true,
                    onItemDisclosure: true,
                    store: classifiedStore,
                    itemTpl: '{OrganizationName}',
                    listeners: {
                        disclose: function (list, record, target, index) {
                            latlng = record.data;
                            detailsTemplate = '<div>' +
                                '<div><h4>' + record.data.OrganizationName + '</h4><div>' +
                                '<table class="table table-condensed table-striped">' +
                            //'<td><i class="icon-user"></i>&nbsp;' + record.data.Name + '</td>' +
                                '<tr>' +
                            //                                    '<td>Date of Birth</td>' +
                                '<td>' + record.data.OrganizationDescription + '</td>' +
                                '</tr>' +
                                '<tr>' +
                            //                                    '<td>Office Phone</td>' +
                                '<td>' + record.data.Address + '</td>' +
                                '</tr>' +
                                '<tr>' +
                                '<tr id="idPhone">' +
                            //                                    '<td>Office Phone</td>' +
                                '<td><i class="icon-phone" style="color: #3081FB"></i>&nbsp;&nbsp;' + record.data.Phone + '</td>' +
                                '</tr>' +
                                '<tr id="idMobile">' +
                            //                                    '<td>Cell Phone</td>' +
                                '<td><i class="icon-mobile-phone" style="color: #3081FB"></i>&nbsp;&nbsp;' + record.data.Mobile + '</td>' +
                                '</tr>' +
                                '<tr id="idEmail">' +
                            //                                    '<td>Email</td>' +
                                '<td><i class="icon-envelope" style="color: #3081FB"></i>&nbsp;&nbsp;' + record.data.Email + '</td>' +
                                '</tr>' +

                                '<tr>' +
                                '<td><i class="icon-laptop" style="color: #3081FB"></i>&nbsp;&nbsp;' + record.data.Website + '</td>' +
                                '</tr>' +
                                '<tr>' +
                            //                                    '<td>Email</td>' +
                                '<td><b>' + 'Contact person details:' + '</b></td>' +
                                '</tr>' +
                            //                               '<td>Email</td>' +
                                '<td>' + record.data.ContactPersonName + '</td>' +
                                '</tr>' +
                                '<tr>' +
                                '<td><i class="icon-mobile-phone" style="color: #3081FB"></i>&nbsp;&nbsp;' + record.data.ContactPersonMobile + '</td>' +
                                '</tr>' +
                                '</table>' +
                                '</div>';

                            detailsView = Ext.create('Ext.Panel', {
                                layout: 'fit',
                                cls: 'whiteBackground',
                                items: [
                                    {
                                        xtype: 'titlebar',
                                        docked: 'top', //placed at the top
                                        title: 'Details', //record.data.OrganizationName,
                                        ui: 'dark',
                                        items: [
                                            {
                                                xtype: 'button',
                                                ui: 'back confirm',
                                                text: 'Back',
                                                action: 'showClassifieds',
                                                listeners: {
                                                    tap: function () {
                                                        Ext.Viewport.setActiveItem(classifiedsView);
                                                    }
                                                }
                                            },
                                            {
                                                xtype: "segmentedbutton",
                                                align: 'right',
                                                items: [
                                                    {
                                                        iconCls: 'locate',
                                                        iconMask: true,
                                                        ui: 'confirm',
                                                        pressed: false
                                                    }
                                                ],
                                                listeners: {
                                                    toggle: function (btn, segmented, pressed) {
                                                        if (pressed == true) {
                                                            detailsView.getItems().items[2].getItems().items[1].setHidden(false);
                                                            Ext.getCmp('idMapDirections').setHidden(false);
                                                        }
                                                        else {
                                                            detailsView.getItems().items[2].getItems().items[1].setHidden(true);
                                                            Ext.getCmp('idMapDirections').setHidden(true);
                                                        }
                                                    }
                                                }
                                            },
                                            {
                                                xtype: 'button',
                                                iconCls: 'maps',
                                                iconMask: true,
                                                hidden: true,
                                                id: 'idMapDirections',
                                                action: 'mapDirections',
                                                align: 'right',
                                                ui: 'confirm'
                                            }
                                        ]
                                    },
                                    {
                                        xtype: 'footer',
                                        docked: 'bottom'
                                    },
                                    {
                                        xtype: 'panel',
                                        itemId: 'mapPanel',
                                        layout: 'fit',
                                        items: [
                                            {
                                                xtype: 'panel',
                                                height: '81%',
                                                html: detailsTemplate,
                                                styleHtmlContent: true,
                                                scrollable: 'vertical',
                                                listeners: {
                                                    tap: function( tap, element ){
                                                        if(tap.delegatedTarget.id == 'idPhone'){
                                                            window.location = "callto:" + tap.delegatedTarget.innerText.trim() ;
                                                         }
                                                        else if (tap.delegatedTarget.id == 'idMobile') {
                                                            window.location = "callto:" + tap.delegatedTarget.innerText.trim() ;
                                                        }
                                                        else{
                                                            window.location = "mailto:" + tap.delegatedTarget.innerText.trim() ;
                                                        }
                                                    },
                                                    element: 'element',
                                                    delegate: 'tr'
                                                }
                                            },
                                            {
                                                xtype: 'map',
                                                //id: 'showMap',
                                                hidden: true,
                                                style: 'top: 62%; margin-left: 1%;',
                                                height: '37%',
                                                itemId: 'showMap',
                                                width: '98%',
                                                //useCurrentLocation: true,
                                                mapOptions: {
                                                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                                                    navigationControl: true,
                                                    navigationControlOptions: {
                                                        style: google.maps.NavigationControlStyle.DEFAULT
                                                    },
                                                    zoom: 15
                                                },
                                                listeners: {
                                                    maprender: function (map, gmap, options) {
                                                        var marker = new google.maps.Marker({
                                                            position: new google.maps.LatLng(+record.data.latitude, +record.data.longitude),
                                                            //center: new google.maps.LatLng(+store.Latitude, +store.Longitude),
                                                            map: gmap//map
                                                        });
                                                        this._map.setCenter(marker.position);
                                                        var infowindow = new google.maps.InfoWindow({
                                                            cls: 'mapOptions', content: '<div>' + record.data.OrganizationName + '</div><div>' + record.data.Street + '</div><div>' + record.data.City + ' ' + record.data.PostalCode + '</div><span>' + record.data.State + '</span><span> ' + record.data.Country + '</span>'
                                                        });
                                                        google.maps.event.addListener(marker, 'click', function () {
                                                            infowindow.open(gmap, marker); //map
                                                        });
                                                    }
                                                }
                                            }
                                        ]
                                    }
                                ]
                            });
                            Ext.Viewport.setActiveItem(detailsView);
                        }
                    }
                }
            ]
        });
        Ext.Viewport.setActiveItem(classifiedsView);
    },
    showDirections: function (btn) {
        var mapDirections = Ext.create('Ext.Panel', {
            centered: true,
            padding: '2% 2% 2% 0%',
            modal: true,
            hideOnMaskTap: true,
            items: [
                {
                    xtype: 'fieldset',
                    itemId: 'mapLocation',
                    items: [
                        {
                            xtype: 'radiofield',
                            name: 'currentLocation',
                            itemId: 'useCurLoc',
                            //labelWrap: true,
                            labelWidth: '70%',
                            //padding: '2%',
                            value: 'currentLocation',
                            label: 'Use Current Location'
                        },
                        {
                            xtype: 'spacer'
                        },
                        {
                            xtype: 'radiofield',
                            itemId: 'useInput',
                            name: 'currentLocation',
                            labelWidth: '70%',
                            //padding: '2%',
                            value: 'input',
                            label: 'Input'
                        }
                    ]
                },
            /*{
            xtype: 'spacer',
            height: '10%'
            },*/
                {
                xtype: 'button',
                text: 'Submit',
                left: '25%',
                top: '73.9%',
                height: '20%',
                ui: 'action',
                width: '50%',
                listeners: {
                    tap: function (btn) {
                        var curLoc = btn.up().getItems().items[0].getItems().items[0]._checked;
                        var input = btn.up().getItems().items[0].getItems().items[2]._checked;
                        if (curLoc) {
                            this.up('panel').hide();
                            //this.up('panel').destroy();
                            var mapRoute = {
                                maprender: function (map, gmap, options) {
                                    navigator.geolocation.getCurrentPosition(function (position) {
                                        var start = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                                        var end = new google.maps.LatLng(latlng.latitude, latlng.longitude);

                                        var directionsDisplay = new google.maps.DirectionsRenderer();
                                        var directionsService = new google.maps.DirectionsService();

                                        directionsDisplay.setMap(gmap);

                                        var request = {
                                            origin: start,
                                            destination: end,
                                            travelMode: google.maps.DirectionsTravelMode.DRIVING
                                        };

                                        directionsService.route(request, function (response, status) {
                                            if (status == google.maps.DirectionsStatus.OK) {
                                                directionsDisplay.setDirections(response);
                                            }
                                        });
                                    });
                                }
                            };

                            var mapView = Ext.create('Ext.Panel', {
                                hideOnMaskTap: true,
                                modal: true,
                                height: '70%',
                                width: '90%',
                                layout: 'fit',
                                centered: true,
                                items: [
                                        {
                                            xtype: 'map',
                                            mapOptions: {
                                                mapTypeId: google.maps.MapTypeId.ROADMAP,
                                                navigationControl: true,
                                                navigationControlOptions: {
                                                    style: google.maps.NavigationControlStyle.DEFAULT
                                                },
                                                zoom: 15
                                            },
                                            listeners: mapRoute
                                        }
                                    ]
                            });

                            Ext.Viewport.add(mapView);
                        }
                        else if (input) {
                            this.up('panel').hide();
                            var inputVals = Ext.create('Ext.Panel', {
                                centered: true,
                                padding: '2% 2% 2% 0%',
                                modal: true,
                                hideOnMaskTap: true,
                                items: [
                                        {
                                            xtype: 'fieldset',
                                            itemId: 'mapLocation',
                                            items: [
                                                {
                                                    xtype: 'textfield',
                                                    name: 'latitude',
                                                    labelWidth: '35%',
                                                    label: 'Latitude'
                                                },
                                                {
                                                    xtype: 'textfield',
                                                    name: 'longitude',
                                                    labelWidth: '35%',
                                                    label: 'Longitude'
                                                }
                                            ]
                                        },
                                /*{
                                xtype: 'spacer',
                                height: '10%'
                                },*/
                                        {
                                        xtype: 'button',
                                        //margin: '4%',
                                        text: 'Submit',
                                        ui: 'action',
                                        width: '50%',
                                        left: '25%',
                                        top: '74.8%',
                                        height: '20%',
                                        listeners: {
                                            tap: function (btn) {
                                                this.up('panel').hide();
                                                var lat = this.up('panel').getItems().items[0].getItems().items[0]._value;
                                                var lng = this.up('panel').getItems().items[0].getItems().items[1]._value;
                                                if ((lat != '' && lng != '') && (lat != null && lng != null)) {
                                                    var mapRoute = {
                                                        maprender: function (map, gmap, options) {
                                                            var start = new google.maps.LatLng(lat, lng);
                                                            var end = new google.maps.LatLng(latlng.latitude, latlng.longitude);

                                                            var directionsDisplay = new google.maps.DirectionsRenderer();
                                                            var directionsService = new google.maps.DirectionsService();

                                                            directionsDisplay.setMap(gmap);

                                                            var request = {
                                                                origin: start,
                                                                destination: end,
                                                                travelMode: google.maps.DirectionsTravelMode.DRIVING
                                                            };

                                                            directionsService.route(request, function (response, status) {
                                                                if (status == google.maps.DirectionsStatus.OK) {
                                                                    directionsDisplay.setDirections(response);
                                                                }
                                                            });
                                                        }
                                                    };

                                                    var mapView = Ext.create('Ext.Panel', {
                                                        hideOnMaskTap: true,
                                                        modal: true,
                                                        height: '70%',
                                                        width: '90%',
                                                        layout: 'fit',
                                                        centered: true,
                                                        items: [
                                                                {
                                                                    xtype: 'map',
                                                                    mapOptions: {
                                                                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                                                                        navigationControl: true,
                                                                        navigationControlOptions: {
                                                                            style: google.maps.NavigationControlStyle.DEFAULT
                                                                        },
                                                                        zoom: 15
                                                                    },
                                                                    listeners: mapRoute
                                                                }
                                                            ]
                                                    });

                                                    Ext.Viewport.add(mapView);
                                                }
                                            }
                                        }
                                    }
                                    ]
                            });
                            Ext.Viewport.add(inputVals);
                        }
                        else {
                            this.up('panel').hide();
                        }
                    }
                }
            }
            ]
        });
        Ext.Viewport.add(mapDirections);
    }
});