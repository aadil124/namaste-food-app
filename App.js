import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    src="https://www.clipartmax.com/png/middle/111-1118804_android-food-delivery-apps.png"
                    alt="logo"
                />
            </div>
            <div className="nav-items">
                <ul >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>cart</li>
                </ul>
            </div>
        </div>
    );
};


const objData = [
    {
        "info": {
            "id": "375301",
            "name": "Sahil Hotel",
            "cloudinaryImageId": "p5ja9gpligwmvj7rwfk0",
            "locality": "New Gouripada Murtiza Complex",
            "areaName": "Bhiwandi",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Indian",
                "North Indian",
                "Chinese"
            ],
            "avgRating": 3.8,
            "feeDetails": {
                "restaurantId": "375301",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4200
            },
            "parentId": "174729",
            "avgRatingString": "3.8",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-24 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-0a618548-f3bb-4c2f-8c53-0d164fe8f570"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/sahil-hotel-new-gouripada-murtiza-complex-bhiwandi-mumbai-375301",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "557364",
            "name": "Cake House",
            "cloudinaryImageId": "uyvdb3jd2grgbjl5cvrl",
            "locality": "Kamatghar Tadali Road",
            "areaName": "Bhiwandi",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Bakery"
            ],
            "avgRating": 3.7,
            "veg": true,
            "feeDetails": {
                "restaurantId": "557364",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4200
            },
            "parentId": "8539",
            "avgRatingString": "3.7",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-24 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-0a618548-f3bb-4c2f-8c53-0d164fe8f570"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/cake-house-kamatghar-tadali-road-bhiwandi-mumbai-557364",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "553996",
            "name": "Al-Baik",
            "cloudinaryImageId": "myoodjz8cbj3rct4vcvm",
            "locality": "Bhiwandi",
            "areaName": "Sahil Apt",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Fast Food"
            ],
            "avgRating": 3.8,
            "feeDetails": {
                "restaurantId": "553996",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4200
            },
            "parentId": "29746",
            "avgRatingString": "3.8",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 41,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "41 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-24 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-0a618548-f3bb-4c2f-8c53-0d164fe8f570"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/al-baik-bhiwandi-sahil-apt-mumbai-553996",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "711430",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "5fe4444a065b60c4fe39ef975222c12b",
            "locality": "Bhiwandi",
            "areaName": "Anantam Heights",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 3.8,
            "feeDetails": {
                "restaurantId": "711430",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5200
            },
            "parentId": "4961",
            "avgRatingString": "3.8",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-24 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-0a618548-f3bb-4c2f-8c53-0d164fe8f570"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-bhiwandi-anantam-heights-mumbai-711430",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "666743",
            "name": "Ramdev Bites",
            "cloudinaryImageId": "9cae419b865d9dee122ff1578ac35a37",
            "locality": "Nandan arcade",
            "areaName": "BHIWANDI",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Chinese",
                "Indian",
                "North Indian",
                "South Indian",
                "Beverages"
            ],
            "avgRating": 3.9,
            "veg": true,
            "feeDetails": {
                "restaurantId": "666743",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4200
            },
            "parentId": "399896",
            "avgRatingString": "3.9",
            "totalRatingsString": "20+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-24 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "ABOVE ₹1300",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-0a618548-f3bb-4c2f-8c53-0d164fe8f570"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/ramdev-bites-nandan-arcade-bhiwandi-mumbai-666743",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "512457",
            "name": "Bhookad cafe",
            "cloudinaryImageId": "jlczpa8s2mtqrmg74usw",
            "locality": "Gokul Nagar",
            "areaName": "Bhiwandi",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Italian"
            ],
            "avgRating": 3.9,
            "veg": true,
            "feeDetails": {
                "restaurantId": "512457",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4200
            },
            "parentId": "306318",
            "avgRatingString": "3.9",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 37,
                "lastMileTravel": 2.7,
                "serviceability": "SERVICEABLE",
                "slaString": "37 mins",
                "lastMileTravelString": "2.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-24 23:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-0a618548-f3bb-4c2f-8c53-0d164fe8f570"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/bhookad-cafe-gokul-nagar-bhiwandi-mumbai-512457",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "744768",
            "name": "Utsav Garden",
            "cloudinaryImageId": "76cdab9f2c960f4ce5eb44ac7e3c2552",
            "locality": "Ashoknagar",
            "areaName": "Bhiwandi",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "North Indian",
                "Chinese",
                "South Indian",
                "Continental"
            ],
            "avgRating": 4.2,
            "veg": true,
            "feeDetails": {
                "restaurantId": "744768",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5200
            },
            "parentId": "15843",
            "avgRatingString": "4.2",
            "totalRatingsString": "10+",
            "sla": {
                "deliveryTime": 32,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "32 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-24 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-0a618548-f3bb-4c2f-8c53-0d164fe8f570"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/utsav-garden-ashoknagar-bhiwandi-mumbai-744768",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "428447",
            "name": "Zaika Pizza hub",
            "cloudinaryImageId": "hdynbtc4htro2zgyaekn",
            "locality": "Gulzar Nagar",
            "areaName": "Bhiwandi",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Italian",
                "Continental"
            ],
            "avgRating": 3.6,
            "feeDetails": {
                "restaurantId": "428447",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 5200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 5200
            },
            "parentId": "238923",
            "avgRatingString": "3.6",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 55,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "55 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-24 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-0a618548-f3bb-4c2f-8c53-0d164fe8f570"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/zaika-pizza-hub-gulzar-nagar-bhiwandi-mumbai-428447",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "428564",
            "name": "Grill Master",
            "cloudinaryImageId": "msaqzcecb9ytecqluql7",
            "locality": "Konark Arcade",
            "areaName": "Bhiwandi",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Italian",
                "Pizzas",
                "Pastas",
                "Beverages",
                "American",
                "Snacks",
                "Salads"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "428564",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4200
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4200
            },
            "parentId": "90674",
            "avgRatingString": "4.0",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 39,
                "lastMileTravel": 2.7,
                "serviceability": "SERVICEABLE",
                "slaString": "39 mins",
                "lastMileTravelString": "2.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-10-24 23:00:00",
                "opened": true
            },
            "badges": {

            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {

            },
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {

                    },
                    "textBased": {

                    },
                    "textExtendedBadges": {

                    }
                }
            },
            "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {

                    },
                    "video": {

                    }
                }
            },
            "reviewsSummary": {

            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {

            }
        },
        "analytics": {
            "context": "seo-data-0a618548-f3bb-4c2f-8c53-0d164fe8f570"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/grill-master-konark-arcade-bhiwandi-mumbai-428564",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]


const RestaurantCard = ({ restaurant }) => {
    const { name, areaName, avgRating, costForTwo, cuisines, sla, cloudinaryImageId } = restaurant?.info
    console.log(restaurant.info)
    return (
        <div className="rest-card">
            <img className="food-img" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} />
            <div className="card-title">
                <h3>{name}</h3>
            </div>
            <br />
            <h4>{cuisines.join(", ")}</h4>
            <br />
            <h4>{costForTwo}</h4>
            <br />
            <h4>{avgRating} Stars</h4>
            <br />
            <h4>{sla.deliveryTime} Minutes</h4>
            <br />
            <h3>{areaName}</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body-container">
            <div className="search-container">
                Search
            </div>
            <div className="cards-container">
                {
                    objData.map((restaurant) => {
                        return <RestaurantCard restaurant={restaurant} key={restaurant.info.id} />
                    })
                }

            </div>
        </div>
    );
}
const Footer = () => {
    return <div>

    </div>
}

const AppLayout = () => {
    return (
        <div className="App">
            <Header />
            <Body />
            <Footer />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
