jQuery(document).ready(function() {
    jQuery("#map15165177541502474508").simplegmaps({
        MapOptions: {
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 16,
            scrollwheel: false,
            styles: 

            [
                {
                    "featureType": "landscape",
                    "stylers": [
                        {
                            "hue": "#FFAD00"
                        },
                        {
                            "saturation": 50.2
                        },
                        {
                            "lightness": -34.8
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "stylers": [
                        {
                            "hue": "#FFAD00"
                        },
                        {
                            "saturation": -19.8
                        },
                        {
                            "lightness": -1.8
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "stylers": [
                        {
                            "hue": "#FFAD00"
                        },
                        {
                            "saturation": 72.4
                        },
                        {
                            "lightness": -32.6
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "stylers": [
                        {
                            "hue": "#FFAD00"
                        },
                        {
                            "saturation": 74.4
                        },
                        {
                            "lightness": -18
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "stylers": [
                        {
                            "hue": "#00FFA6"
                        },
                        {
                            "saturation": -63.2
                        },
                        {
                            "lightness": 38
                        },
                        {
                            "gamma": 1
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "stylers": [
                        {
                            "hue": "#FFC300"
                        },
                        {
                            "saturation": 54.2
                        },
                        {
                            "lightness": -14.4
                        },
                        {
                            "gamma": 1
                        }
                    ]
                }
            ],
        }
    });
});