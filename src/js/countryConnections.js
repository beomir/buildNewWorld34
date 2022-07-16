
export let countryConnections = {
    land: {
        poland:{
            direct:{
                "germany": 573,
                "eastPrussia": 382,
                "czechoslovakia": 637,
                "latvia": 670,
                "lithuania": 409,
                "romania": 1301,
                "ussr": 1264
            },
            transit:{
                france: {
                    distance: 1594,
                    route: ["germany"]
                },
                spain: {
                    distance: 2859,
                    route: ["germany","france"]
                }, 
                portugal:{
                    distance: 3393,
                    route: ["germany","france","spain"]
                },
                belgium:{
                    distance: 1292,
                    route: ["germany"]
                },
                netherland:{
                    distance: 1193,
                    route: ["germany"]
                },
                denmark:{
                    distance: 1331,
                    route: ["germany"]
                },
                switzerland:{
                    distnace: 1443,
                    route: ["germany"]
                },
                austria:{
                    distance: 671,
                    route: ["czechoslovakia"]
                },
                hungary:{
                    distance: 783,
                    route: ["czechoslovakia"]
                },
                yugoslavia:{
                    distance: 1153,
                    route: ["czechoslovakia","hungary"]
                },
                albania:{
                    distance: 1878,
                    route:  ["czechoslovakia","hungary","yugoslavia"]
                },
                greece:{
                    distance: 2244,
                    route: ["czechoslovakia","hungary","yugoslavia"],
                    distance1: 2464,
                    alternativeRoute1: ["romania","bulgaria"]
                },
                turkey:{
                    distance: 2374,
                    route: ["romania","bulgaria"],
                    distance1: 2464,
                    alternativeRoute1: ["czechoslovakia","hungary","serbia","bulgaria"]
                },
                bulgaria:{
                    distance: 1674,
                    route: ["romania"]
                },
                italy:{
                    distance: 1783,
                    route: ["czechoslovakia","austria"]
                },
                estonia:{
                    distance: 976,
                    route: ["lithuania","latvia"],
                    distance1: 1350,
                    alternativeRoute1: ["latvia"]
                },
                finland:{
                    distance: 1556,
                    route: ["lithuania","latvia","ussr"],
                    distance1: 1726,
                    alternativeRoute1: ["ussr"]
                },
                sweden:{
                    distance: 3212,
                    route:["ussr","finland"]
                },
                norway:{
                    distance: 3441,
                    route:["ussr","finland","sweden"]
                }
            }
        
        },
        germany:{
            direct:{
                "denmark": 766,
                "netherland": 655,
                "belgium": 754,
                "france": 1110,
                "switzerland": 959,
                "austria": 987,
                "czechoslovakia": 350,
                "poland": 573,
                "lithuania": 258 // from koningsberg
            },
            transit:{
            }
        },
        france:{
            direct:{
                "germany": 1110,
                "spain": 1275,
                "italy": 1421,
                "belgium": 313,
                "switzerland": 571

            },
            transit:{

            }
        },
        spain:{
            direct:{
                "france": 1275,
                "portugal": 612

            },
            transit:{
                
            }
        },
        portugal:{
            direct:{
                "spain": 612
            },
            transit:{
                
            }
        },
        italy:{
            direct:{
                "france" : 1421,
                "switzerland" : 924,
                "austria" : 1122,
                "yugoslavia" : 1277
            },
            transit:{
                
            }
        },
        yugoslavia:{
            direct:{
            "italy"   : 1277,
            "austria" : 763,
            "greece"  : 1094,
            "hungary" : 378,
            "romania" : 593,
            "bulgaria": 392,
            "albania" : 628
            },
            transit:{
                
            }
        },
        switzerland:{
            direct:{
                "germany" : 959,
                "france" : 571,
                "italy" : 924,
                "austria" : 887
            },
            transit:{
                
            }
        },
        austria:{
            direct:{
                "germany" : 987,
                "switzerland" : 887,
                "hungary" : 243,
                "yugoslavia" : 763,
                "czechoslovakia" : 291,
                "italy" : 1122
            },
            transit:{
                
            }
        },
        czechoslovakia:{
            direct:{
                "poland" : 637,
                "germany" : 350,
                "austria" : 291,
                "hungary" : 525,
                "romania" : 1540
            },
            transit:{
                
            }
        },
        hungary:{
            direct:{
                "czechoslovakia" : 525,
                "austria" : 243,
                "romania" : 836,
                "yugoslavia" : 378 
            },
            transit:{
                
            }
        },
        romania:{
            direct:{
                "czechoslovakia" : 1540,
                "ussr" : 1809,
                "poland": 1301,
                "hungary" : 836,
                "yugoslavia": 593,
                "bulgaria" : 356
            },
            transit:{
                
            }
        },
        bulgaria:{
            direct:{
                "turkey" : 550,
                "romania": 356,
                "greece" : 792,
                "yugoslavia" : 392
            },
            transit:{
                
            }
        },
        albania:{
            direct:{
                "yugoslavia" : 628,
                "greece" : 730
            },
            transit:{
                
            }
        },
        greece:{
            direct:{
                "yugoslavia" : 1094,
                "turkey": 1094,
                "albania" : 730,
                "bulgaria": 792
            },
            transit:{
                
            }
        },
        turkey:{ //from stambul
            direct:{
                "ussr" : 3637,
                "bulgaria" : 550,
                "greece" : 1094
            },
            transit:{
                
            }
        },
        ussr:{
            direct:{
                "finland" : 1088,
                "estonia" : 1025,
                "latvia" : 925,
                "poland" : 1264,
                "romania" : 1809,
                "turkey" : 3637,
                "norway" : 4661
            },
            transit:{
                
            }
        },
        estonia:{
            direct:{
                "latvia" : 308,
                "ussr" : 1025
            },
            transit:{
                
            }
        },
        latvia:{
            direct:{
                "estonia" : 308,
                "ussr" : 925,
                "poland" : 670,
                "lithuania" : 267,
            },
            transit:{
                
            }
        },
        lithuania:{
            direct:{
                "latvia" : 267,
                "germany" : 258, //koningsberg
                "poland" : 409
            },
            transit:{
                
            }
        },
        finland:{
            direct:{
                "norway" : 1991,
                "sweden" : 1762,
                "ussr" : 1088,
            },
            transit:{
                
            }
        },
        sweden:{
            direct:{
                "norway" : 522,
                "finland" : 1762,
                "denmark" : 658,
            },
            transit:{
                
            }
        },
        norway:{
            direct:{
                "sweden" : 522,
                "finland" : 1991,
                "ussr" : 4661
            },
            transit:{
                
            }
        },
        ireland:{
            direct:{
                "greatBritain" : 166//belfast
            },
            transit:{
                
            }
        },
        ireland:{
            direct:{
                "greatBritain" : 166//belfast
            },
            transit:{
                
            }
        },
        denmark:{
            direct:{
                "germany" : 766,
                "sweden" : 658
            },
            transit:{
                
            }
        },
        greatBritain:{
            direct:{
                "ireland" : 166//belfast
            },
            transit:{
                
            }
        },belgium:{
            direct:{
                "netherland" : 210,
                "france" : 313,
                "germany" : 754
            },
            transit:{

            }
        },
        netherland:{
            direct:{
                "belgium" : 210,
                "germany" : 655
            },
            transit:{

            }
        },
    },
    sea:{
        poland:{ //gdańsk
            "sweden": 638,
            "norway": 996,
            "denmark": 507,
            "greatBritain": 1979,
            "lithuania": 216,
            "latvia": 614,
            "estonia": 751,
            "ussr": 1046,
            "finland": 781,
            "germany": 803,
            "netherland": 1551,
            "belgium": 1796,
            "france": 2027,
            "spain": 2940,
            "portugal": 3524,
            "italy": 5602,
            "yugoslavia": 6789,
            "albania": 6404,
            "greece": 6776,
            "turkey": 7367,
            "bulgaria": 7643,
            "romania": 7730,
            "iceland": 2824,
            "ireland" : 2346
        },
        sweden:{ //Sztokholm
            "poland": 638,
            "norway": 1285,
            "denmark": 790,
            "greatBritain": 2268, //southhampton
            "lithuania": 490, //klaipeda
            "latvia": 492, //riga 
            "estonia": 401,
            "ussr": 713, //leningrad
            "finland": 438,
            "germany": 1087, //hamburg
            "netherland": 1840,
            "belgium": 2085, //anwerp
            "france": 2316, //cherburg
            "spain": 3229, //bilbao
            "portugal": 3813, //lisboa
            "italy": 5891, //genoa
            "yugoslavia": 7078, //split
            "albania": 6693, //vlore
            "greece": 7065, //pireus
            "turkey": 7656, //istanbul
            "bulgaria": 7932, //varna
            "romania": 8019, //costantza
            "iceland": 3113, //ryjkavik
            "ireland" : 2631 //dublin
        },
        finland:{ // Helsinki
            "poland": 781,
            "sweden": 438,
            "denmark": 1027,
            "greatBritain": 2505,
            "lithuania": 624,
            "latvia": 585,
            "estonia": 88,
            "ussr": 316,
            "norway": 1516, 
            "germany": 1335,
            "netherland": 2077,
            "belgium": 2322,
            "france": 2553,
            "spain": 3446,
            "portugal": 4050,
            "italy": 6128,
            "yugoslavia": 7315,
            "albania": 6930,
            "greece": 7302,
            "turkey": 7893,
            "bulgaria": 8169,
            "romania": 8256,
            "iceland": 3350,
            "ireland" : 2865
        },
        denmark:{ // Kopenhaga
            "poland": 507,
            "sweden": 790,
            "finland": 1027,
            "greatBritain": 1487,
            "lithuania": 598,
            "latvia": 885,
            "estonia": 987,
            "ussr": 1294,
            "norway": 503,
            "germany": 466,
            "netherland": 1059,
            "belgium": 1303,
            "france": 1535,
            "spain": 2448,
            "portugal": 3031,
            "italy": 5109,
            "yugoslavia": 6296,
            "albania": 5911,
            "greece": 6283,
            "turkey": 6874,
            "bulgaria": 7150,
            "romania": 7237,
            "iceland": 2331,
            "ireland" : 1861
        },
        greatBritain:{ // Southampton
            "poland": 1979,
            "sweden": 2268,
            "finland": 2505,
            "denmark": 1487,
            "lithuania": 2074, 
            "latvia": 2355,
            "estonia": 2466,
            "ussr": 2766,
            "norway": 1401, 
            "germany": 935,
            "netherland": 518,
            "belgium": 475,
            "france": 155,
            "spain": 1020,
            "portugal": 1603,
            "italy": 3681,
            "yugoslavia": 4868,
            "albania": 4483,
            "greece": 4855,
            "turkey": 5446,
            "bulgaria": 5722,
            "romania": 5809,
            "iceland": 2342,
            "ireland" : 722
        },
        lithuania:{ // Kłajpeda
            "poland": 216,
            "sweden": 490,
            "finland": 624,
            "denmark": 598,
            "greatBritain": 2074, 
            "latvia": 430, 
            "estonia": 576,
            "ussr": 872,
            "norway": 1056, 
            "germany": 888,
            "netherland": 1622,
            "belgium": 1863,
            "france": 2091,
            "spain": 2991,
            "portugal": 3566,
            "italy": 5613,
            "yugoslavia": 6783,
            "albania": 6403,
            "greece": 6770,
            "turkey": 7352,
            "bulgaria": 7624,
            "romania": 7710,
            "iceland": 2876,
            "ireland" : 2440
        },
        latvia:{ // Ryga
            "poland": 614,
            "sweden": 492,
            "finland": 585,
            "denmark": 885,
            "greatBritain": 2355, 
            "lithuania": 430, 
            "estonia": 531,
            "ussr": 834,
            "norway": 1357, 
            "germany": 1168,
            "netherland": 1899,
            "belgium": 2140,
            "france": 2368,
            "spain": 3268,
            "portugal": 3843,
            "italy": 5891,
            "yugoslavia": 7060,
            "albania": 6681,
            "greece": 7048,
            "turkey": 7630,
            "bulgaria": 7902,
            "romania": 7988,
            "iceland": 3153,
            "ireland" : 2717
        },
        estonia:{ // Talin
            "poland": 751,
            "sweden": 401,
            "finland": 88,
            "denmark": 987,
            "greatBritain": 2466, 
            "lithuania": 576, 
            "latvia": 531,
            "ussr": 341,
            "norway": 1483, 
            "germany": 1277,
            "netherland": 2009,
            "belgium": 2250,
            "france": 2478,
            "spain": 3378,
            "portugal": 3952,
            "italy": 6000,
            "yugoslavia": 7170,
            "albania": 6790,
            "greece": 7157,
            "turkey": 7739,
            "bulgaria": 8011,
            "romania": 8097,
            "iceland": 3263,
            "ireland" : 2826
        },
        ussr:{ //from leningrad
            "poland": 1046,
            "sweden": 713,
            "finland": 316,
            "denmark": 1294,
            "greatBritain": 2766, 
            "lithuania": 872, 
            "latvia": 834,
            "estonia": 341,
            "norway": 1787, 
            "germany": 1584,
            "netherland": 2304,
            "belgium": 2545,
            "france": 2774,
            "spain": 3673,
            "portugal": 4248,
            "italy": 6296,
            "yugoslavia": 7466,
            "albania": 7086,
            "greece": 7453,
            "turkey": 8035,
            "bulgaria": 8265,
            "romania": 8393,
            "iceland": 3558,
            "ireland" : 3122
        },
        norway:{ // Oslo
            "poland": 996,
            "sweden": 1285,
            "denmark": 503,
            "greatBritain": 1401,
            "lithuania": 1072,
            "latvia": 1377,
            "estonia": 1483,
            "ussr": 1787,
            "finland": 1516,
            "germany": 824,
            "netherland": 970,
            "belgium": 1216,
            "france": 1450,
            "spain": 2363,
            "portugal": 2946,
            "italy": 5024,
            "yugoslavia": 6211,
            "albania": 5826,
            "greece": 6198,
            "turkey": 6789,
            "bulgaria": 7065,
            "romania": 7152,
            "iceland": 2183,
            "ireland" : 1713
        },
        germany:{ // Hamburg
            "poland": 803,
            "sweden": 1087,
            "finland": 1335,
            "denmark": 466,
            "greatBritain": 935,
            "lithuania": 888,
            "latvia": 1168,
            "estonia": 1277,
            "ussr": 1584,
            "norway": 824,
            "netherland": 492,
            "belgium": 739,
            "france": 969,
            "spain": 1868,
            "portugal": 2443,
            "italy": 4491,
            "yugoslavia": 5661,
            "albania": 5281,
            "greece": 5648,
            "turkey": 6230,
            "bulgaria": 6502,
            "romania": 6588,
            "iceland": 2252,
            "ireland" : 1607
        },
        netherland:{ // Amsterdam
            "poland": 1551,
            "sweden": 1840,
            "finland": 2077,
            "denmark": 1059,
            "greatBritain": 518,
            "lithuania": 1622,
            "latvia": 1899,
            "estonia": 2009,
            "ussr": 2304,
            "norway": 970,
            "germany": 492,
            "belgium": 326,
            "france": 558,
            "spain": 1458,
            "portugal": 2033,
            "italy": 4080,
            "yugoslavia": 5250,
            "albania": 4870,
            "greece": 5237,
            "turkey": 5819,
            "bulgaria": 6091,
            "romania": 6177,
            "iceland": 2120,
            "ireland" : 1197
        },
        belgium:{ // Antwerpia
            "poland": 1796,
            "sweden": 2085,
            "finland": 2322,
            "denmark": 1303,
            "greatBritain": 475,
            "lithuania": 1863,
            "latvia": 2140,
            "estonia": 2250,
            "ussr": 2545,
            "norway": 1216,
            "germany": 739,
            "netherland": 326,
            "france": 516,
            "spain": 1416,
            "portugal": 1991,
            "italy": 4038,
            "yugoslavia": 5208,
            "albania": 4828,
            "greece": 5195,
            "turkey": 5777,
            "bulgaria": 6049,
            "romania": 6135,
            "iceland": 2279,
            "ireland" : 1155
        },
        france:{ //from cherbourg
            "poland": 2027,
            "sweden": 2316,
            "finland": 2553,
            "denmark": 1535,
            "greatBritain": 155,
            "lithuania": 2091,
            "latvia": 2368,
            "estonia": 2478,
            "ussr": 2774,
            "norway": 1450,
            "germany": 969,
            "netherland": 558,
            "belgium": 516,
            "spain": 919,
            "portugal": 1494,
            "italy": 3542,
            "yugoslavia": 4712,
            "albania": 4332,
            "greece": 4699,
            "turkey": 5271,
            "bulgaria": 5553,
            "romania": 5639,
            "iceland": 2263,
            "ireland" : 678
        },
        spain:{ //from bilbao
            "poland": 2940,
            "sweden": 3229,
            "finland": 3446,
            "denmark": 2448,
            "greatBritain": 1020,
            "lithuania": 2991,
            "latvia": 3268,
            "estonia": 3378,
            "ussr": 3673,
            "norway": 2363,
            "germany": 1868,
            "netherland": 1458,
            "belgium": 1416,
            "france": 919,
            "portugal": 1069,
            "italy": 3117,
            "yugoslavia": 4286,
            "albania": 3907,
            "greece": 4274,
            "turkey": 4856,
            "bulgaria": 5128,
            "romania": 5214,
            "iceland": 2660,
            "ireland" : 1153
        },
        portugal:{ // Lizbona
            "poland": 3524,
            "sweden": 3813,
            "finland": 4050,
            "denmark": 3031,
            "greatBritain": 1603,
            "lithuania": 3566,
            "latvia": 3843,
            "estonia": 3952,
            "ussr": 4248,
            "norway": 2946,
            "germany": 2443,
            "netherland": 2033,
            "belgium": 1991,
            "france": 1494,
            "spain": 1069,
            "italy": 2091,
            "yugoslavia": 3261,
            "albania": 2881,
            "greece": 3248,
            "turkey": 3830,
            "bulgaria": 4102,
            "romania": 4188,
            "iceland": 2993,
            "ireland" : 1677
        },
        italy:{ //from genoa
            "poland": 5602,
            "sweden": 5891,
            "finland": 6128,
            "denmark": 5109,
            "greatBritain": 3681,
            "lithuania": 5613,
            "latvia": 5891,
            "estonia": 6000,
            "ussr": 6296,
            "norway": 5024,
            "germany": 4491,
            "netherland": 4080,
            "belgium": 4038,
            "france": 3542,
            "spain": 3117,
            "portugal": 2091,
            "yugoslavia": 1735,
            "albania": 1355,
            "greece": 1773,
            "turkey": 2345,
            "bulgaria": 2617,
            "romania": 2702,
            "iceland": 5062,
            "ireland" : 3728
        },
        yugoslavia:{ //from split
            "poland": 6789,
            "sweden": 7078,
            "finland": 7315,
            "denmark": 6296,
            "greatBritain": 4868,
            "lithuania": 6783,
            "latvia": 7060,
            "estonia": 7170,
            "ussr": 7466,
            "norway": 6211,
            "germany": 5661,
            "netherland": 5250,
            "belgium": 5208,
            "france": 4712,
            "spain": 4286,
            "portugal": 3261,
            "italy": 1735,
            "albania": 494,
            "greece": 1237,
            "turkey": 1808,
            "bulgaria": 2080,
            "romania": 2166,
            "iceland": 6232,
            "ireland" : 4898
        },
        albania:{ // Vlore
            "poland": 6404,
            "sweden": 6693,
            "finland": 6930,
            "denmark": 5911,
            "greatBritain": 4483,
            "lithuania": 6403,
            "latvia": 6681,
            "estonia": 6790,
            "ussr": 7086,
            "norway": 5826,
            "germany": 5281,
            "netherland": 4870,
            "belgium": 4828,
            "france": 4332,
            "spain": 3907,
            "portugal": 2881,
            "italy": 1335,
            "yugoslavia": 494,
            "greece": 803,
            "turkey": 1374,
            "bulgaria": 1646,
            "romania": 1731,
            "iceland": 5852,
            "ireland" : 4518
        },
        greece:{ //from pireus
            "poland": 6776,
            "sweden": 7065,
            "finland": 7302,
            "denmark": 6283,
            "greatBritain": 4855,
            "lithuania": 6770,
            "latvia": 7048,
            "estonia": 7157,
            "ussr": 7453,
            "norway": 6198,
            "germany": 5648,
            "netherland": 5237,
            "belgium": 5195,
            "france": 4699,
            "spain": 4274,
            "portugal": 3248,
            "italy": 1773,
            "yugoslavia": 1237,
            "albania": 803,
            "turkey": 642,
            "bulgaria": 914,
            "romania": 1000,
            "iceland": 6219,
            "ireland" : 4885
        },
        turkey:{ //from istanbul
            "poland": 7367,
            "sweden": 7656,
            "finland": 7893,
            "denmark": 6874,
            "greatBritain": 5446,
            "lithuania": 7352,
            "latvia": 7630,
            "estonia": 7739,
            "ussr": 8035,
            "norway": 6789,
            "germany": 6230,
            "netherland": 5237,
            "belgium": 5819,
            "france": 5777,
            "spain": 5271,
            "portugal": 4856,
            "italy": 3830,
            "yugoslavia": 2345,
            "albania": 1808,
            "greece": 1374,
            "bulgaria": 271,
            "romania": 357,
            "iceland": 6801,
            "ireland" : 5467
        },
        bulgaria:{ //from varna
            "poland": 7643,
            "sweden": 7932,
            "finland": 8169,
            "denmark": 7150,
            "greatBritain": 5722,
            "lithuania": 7624,
            "latvia": 7902,
            "estonia": 8011,
            "ussr": 8265,
            "norway": 7065,
            "germany": 6502,
            "netherland": 6091,
            "belgium": 6049,
            "france": 5553,
            "spain": 5128,
            "portugal": 4102,
            "italy": 2617,
            "yugoslavia": 2080,
            "albania": 1646,
            "greece": 914,
            "turkey": 271,
            "romania": 138,
            "iceland": 7073,
            "ireland" : 5739
        },
        romania:{ // Kostancja
            "poland": 7730,
            "sweden": 8019,
            "finland": 8256,
            "denmark": 7237,
            "greatBritain": 5809,
            "lithuania": 7710,
            "latvia": 7988,
            "estonia": 8097,
            "ussr": 8393,
            "norway": 7152,
            "germany": 6588,
            "netherland": 6177,
            "belgium": 6135,
            "france": 5639,
            "spain": 5214,
            "portugal": 4188,
            "italy": 2702,
            "yugoslavia": 2166,
            "albania": 1731,
            "greece": 1000,
            "turkey": 357,
            "bulgaria": 138,
            "iceland": 7159,
            "ireland" : 5825
        },
        iceland:{ //Reykiavik
            "poland": 2824,
            "sweden": 3113,
            "finland": 3350,
            "denmark": 2331,
            "greatBritain": 2342,
            "lithuania": 2876,
            "latvia": 3153,
            "estonia": 3263,
            "ussr": 3558,
            "norway": 2183,
            "germany": 2252,
            "netherland": 2252,
            "belgium": 2279,
            "france": 2263,
            "spain": 2660,
            "portugal": 2993,
            "italy": 5062,
            "yugoslavia": 6232,
            "albania": 5852,
            "greece": 6219,
            "turkey": 6801,
            "bulgaria": 7073,
            "romania": 7159,
            "ireland" : 1635
        },
        ireland:{ //Dublin
            "poland": 2346,
            "sweden": 2631,
            "finland": 2865,
            "denmark": 1861,
            "greatBritain": 722,
            "lithuania": 2440, 
            "latvia": 2717,
            "estonia": 2826,
            "ussr": 3122,
            "norway": 1713, 
            "germany": 1607,
            "netherland": 1197,
            "belgium": 1155,
            "france": 678,
            "spain": 1153,
            "portugal": 1677,
            "italy": 3728,
            "yugoslavia": 4898,
            "albania": 4518,//
            "greece": 4885,
            "turkey": 5467,
            "bulgaria": 5739,
            "romania": 5825,
            "iceland": 1635 
        }
    }
}