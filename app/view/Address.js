Ext.define('vmlabs.view.Address', {
    extend: 'Ext.form.Panel',
    xtype: 'address',
    config: {
        scrollable: false,
        //style: 'background-color: white;',
        cls: 'background',
        items: [

            {
                xtype: 'titlebar',
                docked: 'top' //placed at the top
            },

            {
                xtype: 'footer',
                docked: 'bottom'
            },
            {
                xtype: 'panel',
                id: 'myAddress',
                //scrollable: true,
                styleHtmlContent: true,
                store: 'addressStore',
                html: ''

            },
            {
                xtype: 'fieldset',
                layout: 'hbox',
                title: '<span class="x-html">Send Address</span>',
                items: [
                    {
                        xtype: 'button',
                        cls: 'addressBtn',
                        text: '<i class="icon-envelope-alt"></i>&nbsp;E-mail',
                        style: " width:150px; height:40px; left: 2%; background-color: #3081FB;",
                        action: 'btnSendmail',
                        //html: '<div><b><input type="button" onclick="sendaddressEmail()" value="E-mail" style=" width:150px; height:40px;" /></b></div>',
                        styleHtmlContent: true
                    },
                    {
                        xtype: 'spacer',
                        width: '3%',
                        ui: 'plain'
                    },
                    {
                        xtype: 'button',
                        text: '<i class="icon-envelope"></i>&nbsp;SMS',
                        style: " width:150px; height:40px;",
                        action: 'btnSendsms',
                        //html: '<div><b><input type="button" onclick="sendaddressSms()" value="SMS" style=" width:150px; height:40px;" /></b></div>',
                        styleHtmlContent: true
                    }
                ]
            },

            {
                xtype: 'map',
                margin: '2%',
                height: 400,
                //useCurrentLocation: true,
                mapOptions: {
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    navigationControl: true,
                    navigationControlOptions: {
                        style: google.maps.NavigationControlStyle.DEFAULT
                    },
                    zoom: 10
                },

                listeners: {
                    maprender: function (comp, map) {
                        var marker;
                        var store = Ext.getStore('addressstore').getData().all[0].getData();
                        if (store.Latitude != '' && store.Latitude != null && store.Longitude != '' && store.Longitude != null) {
                            marker = new google.maps.Marker({
                                position: new google.maps.LatLng(store.Latitude, store.Longitude),
                                map: map
                            });
                            map.setCenter(marker.position);
                            var infowindow = new google.maps.InfoWindow({
                                cls: 'mapOptions', content: '<div>' + store.Name + '</div><div>' + store.Zip + '</div><span>' + store.State + '</span><span>,' + store.Country + '</span>'
                            });
                            google.maps.event.addListener(marker, 'click', function () {
                                infowindow.open(map, marker);
                            });
                        }
                        else {
                            navigator.geolocation.getCurrentPosition(function (pos) {
                                marker = new google.maps.Marker({
                                    position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                                    //center: new google.maps.LatLng(+store.Latitude, +store.Longitude),
                                    map: map
                                });
                                map.setCenter(marker.position);
                                var infowindow = new google.maps.InfoWindow({
                                    cls: 'mapOptions', content: '<div>' + store.Name + '</div><div>' + store.Zip + '</div><span>' + store.State + '</span><span>,' + store.Country + '</span>'
                                });
                                google.maps.event.addListener(marker, 'click', function () {
                                    infowindow.open(map, marker);
                                });
                            });
                        }
                    }
                }
            }
        ]
        
        /*initialize: function(){
        var script = document.createElement("script");
        script.src = "http://maps.google.com/maps/api/js?sensor=true";
        document.body.appendChild(script);
        }*/
    }
});