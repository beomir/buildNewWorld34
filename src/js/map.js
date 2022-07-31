import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {selectedLanguage, refreshObjectsTranslation} from './translations';
import {buildRoute,blockageForInfoNotify} from './transportPanel';
import {calculateDateTime } from './dateTime';
import {historicalRoutes} from './gameLogic'


let selectedCountryName;
let selectedCountry;
let specialitiesList = "";


let firstClickedCountryName;
export let clickedCountryName = 'poland'; 
let smallFlagSrc;

let clickedPositionY;
let clickedPositionX;
let controlPanelWidth;
let controlPanelHeight;

export let clickedCreateTransport = false;
export let currentRoute = [];
export let currentRouteTranslated = [];
const route = $(".route")[0];


export let lastClickedCountryTag;




Notify.init({
  width: '350px',
  position: 'right-bottom',
  timeout: 5000,
  messageMaxLength: 500,
  plainText: false,
  showOnlyTheLastOne: true,
  info: {
    background: '#2b1675',
    notiflixIconColor: '#eee4e4',
  },
  failure: {
    background: '#751b1b',
    notiflixIconColor: '#eee4e4',
  },
  warning:{
    background: '#4fc419',
    notiflixIconColor: '#751b1b',
  },
  success:{
    background: '#4cf100',
    textColor: "black"
  }
});



    let goods ={
      main: {
            1: selectedLanguage.coal,
            2: selectedLanguage.steel,
            3: selectedLanguage.aluminium,
            4: selectedLanguage.copper,
            5: selectedLanguage.lead,
            6: selectedLanguage.grain,
            7: selectedLanguage.oil
      },
      additional: {
        1: selectedLanguage.wine,
        2: selectedLanguage.fish,
        3: selectedLanguage.flour,
        4: selectedLanguage.clothes
      },
      specific: {
        1: selectedLanguage.zinc,
        2: selectedLanguage.wolfram,
        3: selectedLanguage.ideas,
        4: selectedLanguage.mechanicalParts,
        5: selectedLanguage.chrome,
        6: selectedLanguage.nickel,
        7: selectedLanguage.forestGoods
      }
    }

    let date = {
      fontSize: 35,
      height: 30,
      
    }

export let countries = {
     norway: {
      height: 330,
      width: 290.4,
      neighbors :{
        1 : "sweden",
        2 : "finland",
        3 : "ussr"
      },
      accessToWaterReservoirs : true,
      balticSea: false,
      blackSea: false,
      specialities: {
          1: goods.additional[2]
        },  
        goodCosts: {
          coal: 30,
          steel: 70,
          aluminium: 80,
          copper: 60,
          lead: 50,
          grain: 5,
          oil: 100,
          wine: 35,
          fish: 5,
          flour: 10,
          clothes: 20,
          zinc: 75,
          wolfram: 100,
          mechanicalParts: 150,
          chrome : 5,
          nickel: 3,
          forestGoods: 20
        },
        goodsAvailability: {
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        maxGoodsAvailability: {
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        population: 2.9,
        renown: 0
      },

       sweden: {
        height: 427.45,
        width: 354.8,
        neighbors :{
          1 : "norway",
          2 : "finland",
          3 : "denmark",
        },
        accessToWaterReservoirs : true,
        balticSea: true,
        blackSea: false,
        otherSea: true,
        specialities: {
            1: goods.specific[2],
            2: goods.main[4],
            3: goods.main[2]
          },  
          goodCosts: {
            coal: 30,
            steel: 70,
            aluminium: 80,
            copper: 60,
            lead: 50,
            grain: 5,
            oil: 100,
            wine: 35,
            fish: 5,
            flour: 10,
            clothes: 20,
            zinc: 75,
            wolfram: 100,
            mechanicalParts: 150,
            chrome : 5,
            nickel: 3,
            forestGoods: 20
          },
          goodsAvailability: {
            coal: 100,
            steel: 80,
            aluminium: 50,
            copper: 120,
            lead: 80,
            grain: 1000,
            oil: 300,
            wine: 50,
            fish: 70,
            flour: 80,
            clothes: 90,
            zinc: 15,
            wolfram: 40,
            mechanicalParts: 5,
            chrome : 1,
            nickel: 2,
            forestGoods: 50
          },
          maxGoodsAvailability: {
            coal: 100,
            steel: 80,
            aluminium: 50,
            copper: 120,
            lead: 80,
            grain: 1000,
            oil: 300,
            wine: 50,
            fish: 70,
            flour: 80,
            clothes: 90,
            zinc: 15,
            wolfram: 40,
            mechanicalParts: 5,
            chrome : 1,
            nickel: 2,
            forestGoods: 50
          },
          population: 6.2,
          renown: 0
        },

       finland: {
          height: 257.1,
          width: 275,
          neighbors :{
            1 : "norway",
            2 : "sweden",
            3 : "ussr",
          },
          accessToWaterReservoirs : true,
          balticSea: true,
          blackSea: false,
          otherSea: false,
          specialities: {
              1: goods.specific[6],
              2: goods.additional[2]
            },  
            goodCosts: {
              coal: 30,
              steel: 70,
              aluminium: 80,
              copper: 60,
              lead: 50,
              grain: 5,
              oil: 100,
              wine: 35,
              fish: 5,
              flour: 10,
              clothes: 20,
              zinc: 75,
              wolfram: 100,
              mechanicalParts: 150,
              chrome : 5,
              nickel: 3,
              forestGoods: 20
            },
            goodsAvailability: {
              coal: 100,
              steel: 80,
              aluminium: 50,
              copper: 120,
              lead: 80,
              grain: 1000,
              oil: 300,
              wine: 50,
              fish: 70,
              flour: 80,
              clothes: 90,
              zinc: 15,
              wolfram: 40,
              mechanicalParts: 5,
              chrome : 1,
              nickel: 2,
              forestGoods: 50
            },
            maxGoodsAvailability:{
              coal: 100,
              steel: 80,
              aluminium: 50,
              copper: 120,
              lead: 80,
              grain: 1000,
              oil: 300,
              wine: 50,
              fish: 70,
              flour: 80,
              clothes: 90,
              zinc: 15,
              wolfram: 40,
              mechanicalParts: 5,
              chrome : 1,
              nickel: 2,
              forestGoods: 50
            },
            population: 3.5,
            renown: 0
          },

          latvia: {
            height: 86.1,
            width: 170,
            neighbors :{
              1 : "estonia",
              2 : "ussr",
              3 : "poland",
              4 : "lithuania",
            },
            accessToWaterReservoirs : true,
            balticSea: true,
            blackSea: false,
            otherSea: false,
            specialities: {
                1: goods.specific[7]
              },  
              goodCosts: {
                coal: 30,
                steel: 70,
                aluminium: 80,
                copper: 60,
                lead: 50,
                grain: 5,
                oil: 100,
                wine: 35,
                fish: 5,
                flour: 10,
                clothes: 20,
                zinc: 75,
                wolfram: 100,
                mechanicalParts: 150,
                chrome : 5,
                nickel: 3,
                forestGoods: 20
              },
              goodsAvailability: {
                coal: 100,
                steel: 80,
                aluminium: 50,
                copper: 120,
                lead: 80,
                grain: 1000,
                oil: 300,
                wine: 50,
                fish: 70,
                flour: 80,
                clothes: 90,
                zinc: 15,
                wolfram: 40,
                mechanicalParts: 5,
                chrome : 1,
                nickel: 2,
                forestGoods: 50
              },
              maxGoodsAvailability: {
                coal: 100,
                steel: 80,
                aluminium: 50,
                copper: 120,
                lead: 80,
                grain: 1000,
                oil: 300,
                wine: 50,
                fish: 70,
                flour: 80,
                clothes: 90,
                zinc: 15,
                wolfram: 40,
                mechanicalParts: 5,
                chrome : 1,
                nickel: 2,
                forestGoods: 50
              },
              population: 1.9,
              renown: 0
            },

            estonia: {
              height: 82.5,
              width: 150,
              neighbors :{
                1 : "latvia",
                2 : "ussr"
              },
              accessToWaterReservoirs : true,
              balticSea: true,
              blackSea: false,
              otherSea: false,
              specialities: {
                1: goods.additional[2]
                },  
                goodCosts: {
                  coal: 30,
                  steel: 70,
                  aluminium: 80,
                  copper: 60,
                  lead: 50,
                  grain: 5,
                  oil: 100,
                  wine: 35,
                  fish: 5,
                  flour: 10,
                  clothes: 20,
                  zinc: 75,
                  wolfram: 100,
                  mechanicalParts: 150,
                  chrome : 5,
                  nickel: 3,
                  forestGoods: 20
                },
                goodsAvailability: {
                  coal: 100,
                  steel: 80,
                  aluminium: 50,
                  copper: 120,
                  lead: 80,
                  grain: 1000,
                  oil: 300,
                  wine: 50,
                  fish: 70,
                  flour: 80,
                  clothes: 90,
                  zinc: 15,
                  wolfram: 40,
                  mechanicalParts: 5,
                  chrome : 1,
                  nickel: 2,
                  forestGoods: 50
                },
                maxGoodsAvailability: {
                  coal: 100,
                  steel: 80,
                  aluminium: 50,
                  copper: 120,
                  lead: 80,
                  grain: 1000,
                  oil: 300,
                  wine: 50,
                  fish: 70,
                  flour: 80,
                  clothes: 90,
                  zinc: 15,
                  wolfram: 40,
                  mechanicalParts: 5,
                  chrome : 1,
                  nickel: 2,
                  forestGoods: 50
                },
                population: 1.1,
                renown: 0
              },

              romania: {
                height: 178.75,
                width: 250,
                neighbors :{
                  1 : "czechoslovakia",
                  2 : "ussr",
                  3 : "poland",
                  4 : "hungary",
                  5 : "yugoslavia",
                  6 : "bulgaria"
                },
                accessToWaterReservoirs : true,
                balticSea: false,
                blackSea: true,
                otherSea: false,
                specialities: {
                    1: goods.specific[2],
                    2: goods.specific[3],
                    3: goods.main[2]
                  },  
                  goodCosts: {
                    coal: 30,
                    steel: 70,
                    aluminium: 80,
                    copper: 60,
                    lead: 50,
                    grain: 5,
                    oil: 100,
                    wine: 35,
                    fish: 5,
                    flour: 10,
                    clothes: 20,
                    zinc: 75,
                    wolfram: 100,
                    mechanicalParts: 150,
                    chrome : 5,
                    nickel: 3,
                    forestGoods: 20
                  },
                  goodsAvailability: {
                    coal: 100,
                    steel: 80,
                    aluminium: 50,
                    copper: 120,
                    lead: 80,
                    grain: 1000,
                    oil: 300,
                    wine: 50,
                    fish: 70,
                    flour: 80,
                    clothes: 90,
                    zinc: 15,
                    wolfram: 40,
                    mechanicalParts: 5,
                    chrome : 1,
                    nickel: 2,
                    forestGoods: 50
                  },
                  maxGoodsAvailability:{
                    coal: 100,
                    steel: 80,
                    aluminium: 50,
                    copper: 120,
                    lead: 80,
                    grain: 1000,
                    oil: 300,
                    wine: 50,
                    fish: 70,
                    flour: 80,
                    clothes: 90,
                    zinc: 15,
                    wolfram: 40,
                    mechanicalParts: 5,
                    chrome : 1,
                    nickel: 2,
                    forestGoods: 50 
                  },
                  population: 15,
                  renown: 0
                }

                , hungary: {
                  height: 96,
                  width: 160,
                  neighbors :{
                    1 : "czechoslovakia",
                    2 : "austria",
                    3 : "romania",
                    4 : "yugoslavia"
                  },
                  accessToWaterReservoirs : false,
                  balticSea: false,
                  blackSea: false,
                  otherSea: false,
                  specialities: {
                      1: goods.specific[2],
                      2: goods.specific[3],
                      3: goods.main[2]
                    },  
                    goodCosts: {
                      coal: 30,
                      steel: 70,
                      aluminium: 80,
                      copper: 60,
                      lead: 50,
                      grain: 5,
                      oil: 100,
                      wine: 35,
                      fish: 5,
                      flour: 10,
                      clothes: 20,
                      zinc: 75,
                      wolfram: 100,
                      mechanicalParts: 150,
                      chrome : 5,
                      nickel: 3,
                      forestGoods: 20
                    },
                    goodsAvailability: {
                      coal: 100,
                      steel: 80,
                      aluminium: 50,
                      copper: 120,
                      lead: 80,
                      grain: 1000,
                      oil: 300,
                      wine: 50,
                      fish: 70,
                      flour: 80,
                      clothes: 90,
                      zinc: 15,
                      wolfram: 40,
                      mechanicalParts: 5,
                      chrome : 1,
                      nickel: 2,
                      forestGoods: 50
                    },
                    maxGoodsAvailability:{
                      coal: 100,
                      steel: 80,
                      aluminium: 50,
                      copper: 120,
                      lead: 80,
                      grain: 1000,
                      oil: 300,
                      wine: 50,
                      fish: 70,
                      flour: 80,
                      clothes: 90,
                      zinc: 15,
                      wolfram: 40,
                      mechanicalParts: 5,
                      chrome : 1,
                      nickel: 2,
                      forestGoods: 50  
                    },
                    population: 8.9,
                    renown: 0
                  }

          , turkey: {
          height: 188.9,
          width: 385,
          neighbors :{
            1 : "ussr",
            2 : "bulgaria",
            3 : "greece"
          },
          accessToWaterReservoirs : true,
          balticSea: false,
          blackSea: true,
          otherSea: true,
          specialities: {
              1: goods.specific[2],
              2: goods.specific[3],
              3: goods.main[2]
            },  
            goodCosts: {
              coal: 30,
              steel: 70,
              aluminium: 80,
              copper: 60,
              lead: 50,
              grain: 5,
              oil: 100,
              wine: 35,
              fish: 5,
              flour: 10,
              clothes: 20,
              zinc: 75,
              wolfram: 100,
              mechanicalParts: 150,
              chrome : 5,
              nickel: 3,
              forestGoods: 20
            },
            goodsAvailability: {
              coal: 100,
              steel: 80,
              aluminium: 50,
              copper: 120,
              lead: 80,
              grain: 1000,
              oil: 300,
              wine: 50,
              fish: 70,
              flour: 80,
              clothes: 90,
              zinc: 15,
              wolfram: 40,
              mechanicalParts: 5,
              chrome : 1,
              nickel: 2,
              forestGoods: 50
            },
            maxGoodsAvailability:{
              coal: 100,
              steel: 80,
              aluminium: 50,
              copper: 120,
              lead: 80,
              grain: 1000,
              oil: 300,
              wine: 50,
              fish: 70,
              flour: 80,
              clothes: 90,
              zinc: 15,
              wolfram: 40,
              mechanicalParts: 5,
              chrome : 1,
              nickel: 2,
              forestGoods: 50
            },
            population: 16.2,
            renown: 0
          }


          , yugoslavia: {
            height: 184.8,
            width: 220,
            neighbors :{
              1 : "italy",
              2 : "austria",
              3 : "greece",
              4 : "hungary",
              5 : "romania",
              6 : "bulgaria",
              7 : "albania"
            },
            accessToWaterReservoirs : true,
            balticSea: false,
            blackSea: false,
            otherSea: true,
            specialities: {
                1: goods.specific[2],
                2: goods.specific[3],
                3: goods.main[2]
              },  
              goodCosts: {
                coal: 30,
                steel: 70,
                aluminium: 80,
                copper: 60,
                lead: 50,
                grain: 5,
                oil: 100,
                wine: 35,
                fish: 5,
                flour: 10,
                clothes: 20,
                zinc: 75,
                wolfram: 100,
                mechanicalParts: 150,
                chrome : 5,
                nickel: 3,
                forestGoods: 20
              },
              goodsAvailability: {
                coal: 100,
                steel: 80,
                aluminium: 50,
                copper: 120,
                lead: 80,
                grain: 1000,
                oil: 300,
                wine: 50,
                fish: 70,
                flour: 80,
                clothes: 90,
                zinc: 15,
                wolfram: 40,
                mechanicalParts: 5,
                chrome : 1,
                nickel: 2,
                forestGoods: 50
              },
              maxGoodsAvailability: {
                coal: 100,
                steel: 80,
                aluminium: 50,
                copper: 120,
                lead: 80,
                grain: 1000,
                oil: 300,
                wine: 50,
                fish: 70,
                flour: 80,
                clothes: 90,
                zinc: 15,
                wolfram: 40,
                mechanicalParts: 5,
                chrome : 1,
                nickel: 2,
                forestGoods: 50
              },
              population: 14,
              renown: 0
            }

            , greece: {
              height: 230 ,
              width: 220,
              neighbors :{
                1 : "turkey",
                2 : "yugoslavia",
                3 : "bulgaria",
                4 : "albania"
              },
              specialities: {
                  1: goods.specific[2],
                  2: goods.specific[3],
                  3: goods.main[2]
                },  
                goodCosts: {
                  coal: 30,
                  steel: 70,
                  aluminium: 80,
                  copper: 60,
                  lead: 50,
                  grain: 5,
                  oil: 100,
                  wine: 35,
                  fish: 5,
                  flour: 10,
                  clothes: 20,
                  zinc: 75,
                  wolfram: 100,
                  mechanicalParts: 150,
                  chrome : 5,
                  nickel: 3,
                  forestGoods: 20
                },
                goodsAvailability: {
                  coal: 100,
                  steel: 80,
                  aluminium: 50,
                  copper: 120,
                  lead: 80,
                  grain: 1000,
                  oil: 300,
                  wine: 50,
                  fish: 70,
                  flour: 80,
                  clothes: 90,
                  zinc: 15,
                  wolfram: 40,
                  mechanicalParts: 5,
                  chrome : 1,
                  nickel: 2,
                  forestGoods: 50
                },
                maxGoodsAvailability:{
                  coal: 100,
                  steel: 80,
                  aluminium: 50,
                  copper: 120,
                  lead: 80,
                  grain: 1000,
                  oil: 300,
                  wine: 50,
                  fish: 70,
                  flour: 80,
                  clothes: 90,
                  zinc: 15,
                  wolfram: 40,
                  mechanicalParts: 5,
                  chrome : 1,
                  nickel: 2,
                  forestGoods: 50  
                },
                population: 6.8,
                renown: 0
              }

              , italy: {
                height: 330,
                width: 290.4,
                neighbors :{
                  1 : "france",
                  2 : "switzerland",
                  3 : "austria",
                  4 : "yugoslavia"
                },
                accessToWaterReservoirs : true,
                balticSea: false,
                blackSea: false,
                otherSea: true,
                specialities: {
                    1: goods.specific[2],
                    2: goods.specific[3],
                    3: goods.main[2]
                  },  
                  goodCosts: {
                    coal: 30,
                    steel: 70,
                    aluminium: 80,
                    copper: 60,
                    lead: 50,
                    grain: 5,
                    oil: 100,
                    wine: 35,
                    fish: 5,
                    flour: 10,
                    clothes: 20,
                    zinc: 75,
                    wolfram: 100,
                    mechanicalParts: 150,
                    chrome : 5,
                    nickel: 3,
                    forestGoods: 20
                  },
                  goodsAvailability: {
                    coal: 100,
                    steel: 80,
                    aluminium: 50,
                    copper: 120,
                    lead: 80,
                    grain: 1000,
                    oil: 300,
                    wine: 50,
                    fish: 70,
                    flour: 80,
                    clothes: 90,
                    zinc: 15,
                    wolfram: 40,
                    mechanicalParts: 5,
                    chrome : 1,
                    nickel: 2,
                    forestGoods: 50
                  },
                  maxGoodsAvailability:{
                    coal: 100,
                    steel: 80,
                    aluminium: 50,
                    copper: 120,
                    lead: 80,
                    grain: 1000,
                    oil: 300,
                    wine: 50,
                    fish: 70,
                    flour: 80,
                    clothes: 90,
                    zinc: 15,
                    wolfram: 40,
                    mechanicalParts: 5,
                    chrome : 1,
                    nickel: 2,
                    forestGoods: 50
                  },
                  population: 42,
                  renown: 0
                }

          , spain: {
              height: 263,
              width: 311 ,
              neighbors :{
                1 : "france",
                2 : "portugal"
              },
              accessToWaterReservoirs : true,
              balticSea: false,
              blackSea: false,
              otherSea: true,
              specialities: {
                  1: goods.specific[2],
                  2: goods.specific[3],
                  3: goods.main[2]
                },  
                goodCosts: {
                  coal: 30,
                  steel: 70,
                  aluminium: 80,
                  copper: 60,
                  lead: 50,
                  grain: 5,
                  oil: 100,
                  wine: 35,
                  fish: 5,
                  flour: 10,
                  clothes: 20,
                  zinc: 75,
                  wolfram: 100,
                  mechanicalParts: 150,
                  chrome : 5,
                  nickel: 3,
                  forestGoods: 20
                },
                goodsAvailability: {
                  coal: 100,
                  steel: 80,
                  aluminium: 50,
                  copper: 120,
                  lead: 80,
                  grain: 1000,
                  oil: 300,
                  wine: 50,
                  fish: 70,
                  flour: 80,
                  clothes: 90,
                  zinc: 15,
                  wolfram: 40,
                  mechanicalParts: 5,
                  chrome : 1,
                  nickel: 2,
                  forestGoods: 50
                },
                maxGoodsAvailability:{
                  coal: 100,
                  steel: 80,
                  aluminium: 50,
                  copper: 120,
                  lead: 80,
                  grain: 1000,
                  oil: 300,
                  wine: 50,
                  fish: 70,
                  flour: 80,
                  clothes: 90,
                  zinc: 15,
                  wolfram: 40,
                  mechanicalParts: 5,
                  chrome : 1,
                  nickel: 2,
                  forestGoods: 50
                },
                population: 24,
                renown: 0
              }

              , portugal: {
                height: 155,
                width: 83.7,
                neighbors :{
                  1 : "spain"
                },
                accessToWaterReservoirs : true,
                balticSea: false,
                blackSea: false,
                otherSea: true,
                specialities: {
                    1: goods.specific[2],
                    2: goods.specific[3],
                    3: goods.main[2]
                  },  
                  goodCosts: {
                    coal: 30,
                    steel: 70,
                    aluminium: 80,
                    copper: 60,
                    lead: 50,
                    grain: 5,
                    oil: 100,
                    wine: 35,
                    fish: 5,
                    flour: 10,
                    clothes: 20,
                    zinc: 75,
                    wolfram: 100,
                    mechanicalParts: 150,
                    chrome : 5,
                    nickel: 3,
                    forestGoods: 20
                  },
                  goodsAvailability: {
                    coal: 100,
                    steel: 80,
                    aluminium: 50,
                    copper: 120,
                    lead: 80,
                    grain: 1000,
                    oil: 300,
                    wine: 50,
                    fish: 70,
                    flour: 80,
                    clothes: 90,
                    zinc: 15,
                    wolfram: 40,
                    mechanicalParts: 5,
                    chrome : 1,
                    nickel: 2,
                    forestGoods: 50
                  },
                  maxGoodsAvailability:{
                    coal: 100,
                    steel: 80,
                    aluminium: 50,
                    copper: 120,
                    lead: 80,
                    grain: 1000,
                    oil: 300,
                    wine: 50,
                    fish: 70,
                    flour: 80,
                    clothes: 90,
                    zinc: 15,
                    wolfram: 40,
                    mechanicalParts: 5,
                    chrome : 1,
                    nickel: 2,
                    forestGoods: 50
                  },
                  population: 7.1,
                  renown: 0
                }

                , bulgaria: {
                  height: 114.7,
                  width: 155,
                  neighbors :{
                    1 : "turkey",
                    2 : "romania",
                    3 : "greece",
                    4 : "yugoslavia"
                  },
                  accessToWaterReservoirs : true,
                  balticSea: false,
                  blackSea: true,
                  otherSea: false,
                  specialities: {
                      1: goods.specific[2],
                      2: goods.specific[3],
                      3: goods.main[2]
                    },  
                    goodCosts: {
                      coal: 30,
                      steel: 70,
                      aluminium: 80,
                      copper: 60,
                      lead: 50,
                      grain: 5,
                      oil: 100,
                      wine: 35,
                      fish: 5,
                      flour: 10,
                      clothes: 20,
                      zinc: 75,
                      wolfram: 100,
                      mechanicalParts: 150,
                      chrome : 5,
                      nickel: 3,
                      forestGoods: 20
                    },
                    goodsAvailability: {
                      coal: 100,
                      steel: 80,
                      aluminium: 50,
                      copper: 120,
                      lead: 80,
                      grain: 1000,
                      oil: 300,
                      wine: 50,
                      fish: 70,
                      flour: 80,
                      clothes: 90,
                      zinc: 15,
                      wolfram: 40,
                      mechanicalParts: 5,
                      chrome : 1,
                      nickel: 2,
                      forestGoods: 50
                    },
                    maxGoodsAvailability:{
                      coal: 100,
                      steel: 80,
                      aluminium: 50,
                      copper: 120,
                      lead: 80,
                      grain: 1000,
                      oil: 300,
                      wine: 50,
                      fish: 70,
                      flour: 80,
                      clothes: 90,
                      zinc: 15,
                      wolfram: 40,
                      mechanicalParts: 5,
                      chrome : 1,
                      nickel: 2,
                      forestGoods: 50
                    },
                    population: 6.3,
                    renown: 0
                  }

   , ussr: {
    height: 830,
    width: 398,
    neighbors :{
      1 : "finland",
      2 : "estonia",
      3 : "latvia",
      4 : "poland",
      5 : "romania",
      6 : "turkey",
      7 : "norway"
    },
    accessToWaterReservoirs : true,
    balticSea: true,
    blackSea: true,
    otherSea: false,
    specialities: {
        1: goods.main[1],
        2: goods.main[2],
        3: goods.specific[3],
        4: goods.main[7]
      },  
      goodCosts: {
        coal: 30,
        steel: 70,
        aluminium: 80,
        copper: 60,
        lead: 50,
        grain: 5,
        oil: 100,
        wine: 35,
        fish: 5,
        flour: 10,
        clothes: 20,
        zinc: 75,
        wolfram: 100,
        mechanicalParts: 150,
        chrome : 5,
        nickel: 3,
        forestGoods: 20
      },
      goodsAvailability: {
        coal: 100,
        steel: 80,
        aluminium: 50,
        copper: 120,
        lead: 80,
        grain: 1000,
        oil: 300,
        wine: 50,
        fish: 70,
        flour: 80,
        clothes: 90,
        zinc: 15,
        wolfram: 40,
        mechanicalParts: 5,
        chrome : 1,
        nickel: 2,
        forestGoods: 50
      },
      maxGoodsAvailability:{
        coal: 100,
        steel: 80,
        aluminium: 50,
        copper: 120,
        lead: 80,
        grain: 1000,
        oil: 300,
        wine: 50,
        fish: 70,
        flour: 80,
        clothes: 90,
        zinc: 15,
        wolfram: 40,
        mechanicalParts: 5,
        chrome : 1,
        nickel: 2,
        forestGoods: 50
      },
      population: 159,
      renown: 0
    }

    , germany: {
      height:  260.4,
      width: 420 ,
      neighbors :{
        1 : "denmark",
        2 : "netherland",
        3 : "belgium",
        4 : "france",
        5 : "switzerland",
        6 : "austria",
        7 : "czechoslovakia",
        8 : "poland",
        9 : "lithuania"
      },
      accessToWaterReservoirs : true,
      balticSea: true,
      blackSea: false,
      otherSea: true,
      specialities: {
        1: goods.main[1],
        2: goods.main[2],
        3: goods.specific[3]
      },
      goodCosts: {
        coal: 30,
        steel: 70,
        aluminium: 80,
        copper: 60,
        lead: 50,
        grain: 5,
        oil: 100,
        wine: 35,
        fish: 5,
        flour: 10,
        clothes: 20,
        zinc: 75,
        wolfram: 100,
        mechanicalParts: 150,
        chrome : 5,
        nickel: 3,
        forestGoods: 20
      },
      goodsAvailability: {
        coal: 100,
        steel: 80,
        aluminium: 50,
        copper: 120,
        lead: 80,
        grain: 1000,
        oil: 300,
        wine: 50,
        fish: 70,
        flour: 80,
        clothes: 90,
        zinc: 15,
        wolfram: 40,
        mechanicalParts: 5,
        chrome : 1,
        nickel: 2,
        forestGoods: 50
      },
      maxGoodsAvailability:{
        coal: 100,
        steel: 80,
        aluminium: 50,
        copper: 120,
        lead: 80,
        grain: 1000,
        oil: 300,
        wine: 50,
        fish: 70,
        flour: 80,
        clothes: 90,
        zinc: 15,
        wolfram: 40,
        mechanicalParts: 5,
        chrome : 1,
        nickel: 2,
        forestGoods: 50
      },
      population: 74,
      renown: 0
    }

   , lithuania: {
    height: 101, 
    width: 134, 
    neighbors :{
      1 : "latvia",
      2 : "germany",
      3 : "poland"
    },
    accessToWaterReservoirs : true,
    balticSea: true,
    blackSea: false,
    otherSea: false,
    specialities: {
      1: goods.main[6],
      2: goods.main[7],
      3: goods.additional[3]
      },
      goodCosts: {
        coal: 30,
        steel: 70,
        aluminium: 80,
        copper: 60,
        lead: 50,
        grain: 5,
        oil: 100,
        wine: 35,
        fish: 5,
        flour: 10,
        clothes: 20,
        zinc: 75,
        wolfram: 100,
        mechanicalParts: 150,
        chrome : 5,
        nickel: 3,
        forestGoods: 20
      },
      goodsAvailability: {
        coal: 100,
        steel: 80,
        aluminium: 50,
        copper: 120,
        lead: 80,
        grain: 1000,
        oil: 300,
        wine: 50,
        fish: 70,
        flour: 80,
        clothes: 90,
        zinc: 15,
        wolfram: 40,
        mechanicalParts: 5,
        chrome : 1,
        nickel: 2,
        forestGoods: 50
      },
      maxGoodsAvailability:{
        coal: 100,
        steel: 80,
        aluminium: 50,
        copper: 120,
        lead: 80,
        grain: 1000,
        oil: 300,
        wine: 50,
        fish: 70,
        flour: 80,
        clothes: 90,
        zinc: 15,
        wolfram: 40,
        mechanicalParts: 5,
        chrome : 1,
        nickel: 2,
        forestGoods: 50
      },
      population: 2,
      renown: 0
    }

    , poland: {
      height: 298,
      width: 286,
      neighbors :{
        1 : "latvia",
        2 : "germany",
        3 : "lithuania",
        4 : "czechoslovakia",
        5 : "ussr",
        6 : "romania"
      },
      accessToWaterReservoirs : true,
      balticSea: true,
      blackSea: false,
      otherSea: false,
      specialities: {
        1: goods.main[6],
        2: goods.main[7],
        3: goods.additional[3]
        },
        goodCosts: {
          coal: 30,
          steel: 70,
          aluminium: 80,
          copper: 60,
          lead: 50,
          grain: 5,
          oil: 100,
          wine: 35,
          fish: 5,
          flour: 10,
          clothes: 20,
          zinc: 75,
          wolfram: 100,
          mechanicalParts: 150,
          chrome : 5,
          nickel: 3,
          forestGoods: 20
        },
        goodsAvailability: {
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        maxGoodsAvailability:{
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        population: 30,
        renown: 0
      }

    , czechoslovakia: {
      height: 105.9,
      width: 325,
      neighbors :{
        1 : "poland",
        2 : "germany",
        3 : "austria",
        4 : "hungary",
        5 : "romania"
      },
      accessToWaterReservoirs : false,
      balticSea: false,
      blackSea: false,
      otherSea: false,
      specialities: {
        1: goods.main[2],
        2: goods.main[4],
        3: goods.specific[4]
        },
        goodCosts: {
          coal: 30,
          steel: 70,
          aluminium: 80,
          copper: 60,
          lead: 50,
          grain: 5,
          oil: 100,
          wine: 35,
          fish: 5,
          flour: 10,
          clothes: 20,
          zinc: 75,
          wolfram: 100,
          mechanicalParts: 150,
          chrome : 5,
          nickel: 3,
          forestGoods: 20
        },
        goodsAvailability: {
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        maxGoodsAvailability:{
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        population: 13,
        renown: 0
    }

    , greatBritain: {
      height: 400,
      width: 286,
      neighbors :{
        1 : "ireland"
      },
      accessToWaterReservoirs : true,
      balticSea: false,
      blackSea: false,
      otherSea: true,
      specialities: {
        1: goods.main[1],
        2: goods.main[2],
        3: goods.additional[2],
        4: goods.specific[1]
        },
        goodCosts: {
          coal: 30,
          steel: 70,
          aluminium: 80,
          copper: 60,
          lead: 50,
          grain: 5,
          oil: 100,
          wine: 35,
          fish: 5,
          flour: 10,
          clothes: 20,
          zinc: 75,
          wolfram: 100,
          mechanicalParts: 150,
          chrome : 5,
          nickel: 3,
          forestGoods: 20
        },
        goodsAvailability: {
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 180,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        maxGoodsAvailability:{
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 180,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
      population: 47,
      renown: 0
    }

    , austria: {
      height: 79.2,
      width: 180,
      neighbors :{
        1 : "germany",
        2 : "switzerland",
        3 : "hungary",
        4 : "yugoslavia",
        5 : "czechoslovakia",
        6 : "italy"
      },
      accessToWaterReservoirs : false,
      balticSea: false,
      blackSea: false,
      otherSea: false,
      specialities: {
        1: goods.additional[3]
        },
        goodCosts: {
          coal: 30,
          steel: 70,
          aluminium: 80,
          copper: 60,
          lead: 50,
          grain: 5,
          oil: 100,
          wine: 35,
          fish: 5,
          flour: 10,
          clothes: 20,
          zinc: 75,
          wolfram: 100,
          mechanicalParts: 150,
          chrome : 5,
          nickel: 3,
          forestGoods: 20
        },
        goodsAvailability: {
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        maxGoodsAvailability:{
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        population: 6.8,
        renown: 0
    }

    , france: {
      height: 365,
      width: 324.8,
      neighbors :{
        1 : "germany",
        2 : "switzerland",
        3 : "belgium",
        4 : "spain",
        5 : "italy"
      },
      accessToWaterReservoirs : true,
      balticSea: false,
      blackSea: false,
      otherSea: true,
      specialities: {
        1: goods.main[1],
        2: goods.main[2],
        3: goods.main[5],
        4: goods.additional[1]
        },
        goodCosts: {
          coal: 35,
          steel: 75,
          aluminium: 85,
          copper: 65,
          lead: 53,
          grain: 3,
          oil: 120,
          wine: 20,
          fish: 7,
          flour: 12,
          clothes: 18,
          zinc: 78,
          wolfram: 150,
          mechanicalParts: 177,
          chrome : 550,
          nickel: 333,
          forestGoods: 22
        },
        goodsAvailability: {
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        maxGoodsAvailability:{
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50 
        },
        population: 42,
        renown: 0
    }

    , denmark: {
      height: 110,
      width: 105.6,
      neighbors :{
        1 : "germany",
        2 : "sweden"
      },
      accessToWaterReservoirs : true,
      balticSea: true,
      blackSea: false,
      otherSea: true,
      specialities: {
        1: goods.additional[2]
        },
        goodCosts: {
          coal: 30,
          steel: 70,
          aluminium: 80,
          copper: 60,
          lead: 50,
          grain: 5,
          oil: 100,
          wine: 35,
          fish: 5,
          flour: 10,
          clothes: 20,
          zinc: 75,
          wolfram: 100,
          mechanicalParts: 150,
          chrome : 5,
          nickel: 3,
          forestGoods: 20
        },
        goodsAvailability: {
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        maxGoodsAvailability:{
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        population: 3.7,
        renown: 0
    }

    ,iceland: {
      height: 123.5,
      width: 260,
      neighbors :{
      },
      accessToWaterReservoirs : true,
      balticSea: false,
      blackSea: false,
      otherSea: true,
      specialities: {
        1: goods.additional[2]
        },
        goodCosts: {
          coal: 30,
          steel: 70,
          aluminium: 80,
          copper: 60,
          lead: 50,
          grain: 5,
          oil: 100,
          wine: 35,
          fish: 5,
          flour: 10,
          clothes: 20,
          zinc: 75,
          wolfram: 100,
          mechanicalParts: 150,
          chrome : 5,
          nickel: 3,
          forestGoods: 20
        },
        goodsAvailability: {
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        maxGoodsAvailability:{
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        population: 0.5,
        renown: 0
    }

    , belgium: {
      height: 78.7,
      width: 100,
      neighbors :{
        1 : "netherland",
        2 : "france",
        3 : "germany"
      },
      accessToWaterReservoirs : true,
      balticSea: false,
      blackSea: false,
      otherSea: true,
      specialities: {
        1: goods.additional[2]
        },
        goodCosts: {
          coal: 33,
          steel: 75,
          aluminium: 88,
          copper: 54,
          lead: 32,
          grain: 3,
          oil: 121,
          wine: 35,
          fish: 7,
          flour: 13,
          clothes: 25,
          zinc: 88,
          wolfram: 123,
          mechanicalParts: 170,
          chrome : 7,
          nickel: 5,
          forestGoods: 25
        },
        goodsAvailability: {
          coal: 20,
          steel: 10,
          aluminium: 20,
          copper: 20,
          lead: 80,
          grain: 200,
          oil: 20,
          wine: 30,
          fish: 40,
          flour: 20,
          clothes: 50,
          zinc: 5,
          wolfram: 2,
          mechanicalParts: 1,
          chrome : 1,
          nickel: 2,
          forestGoods: 3
        },
        maxGoodsAvailability:{
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        population: 8.3,
        renown: 0
    }

    , netherland: {
      height: 100,
      width: 89,
      neighbors :{
        1 : "belgium",
        2 : "germany"
      },
      accessToWaterReservoirs : true,
      balticSea: false,
      blackSea: false,
      otherSea: true,
      specialities: {
        1: goods.additional[2]
        },
        goodCosts: {
          coal: 37,
          steel: 77,
          aluminium: 86,
          copper: 71,
          lead: 62,
          grain: 6,
          oil: 115,
          wine: 45,
          fish: 6,
          flour: 15,
          clothes: 27,
          zinc: 79,
          wolfram: 120,
          mechanicalParts: 155,
          chrome : 7,
          nickel: 5,
          forestGoods: 23
        },
        goodsAvailability: {
          coal: 10,
          steel: 15,
          aluminium: 17,
          copper: 22,
          lead: 12,
          grain: 100,
          oil: 30,
          wine: 5,
          fish: 50,
          flour: 15,
          clothes: 15,
          zinc: 8,
          wolfram: 6,
          mechanicalParts: 2,
          chrome : 1,
          nickel: 2,
          forestGoods: 10
        },
        maxGoodsAvailability:{
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        population: 8.3,
        renown: 0
    }

    ,albania: {
      height: 80,
      width: 45.6,
      neighbors :{
        1 : "yugoslavia",
        2 : "greece"
      },
      accessToWaterReservoirs : true,
      balticSea: false,
      blackSea: false,
      otherSea: true,
      specialities: {
        1: goods.additional[2]
        },
        goodCosts: {
          coal: 30,
          steel: 70,
          aluminium: 80,
          copper: 60,
          lead: 50,
          grain: 5,
          oil: 100,
          wine: 35,
          fish: 5,
          flour: 10,
          clothes: 20,
          zinc: 75,
          wolfram: 100,
          mechanicalParts: 150,
          chrome : 5,
          nickel: 3,
          forestGoods: 20
        },
        goodsAvailability: {
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        maxGoodsAvailability:{
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        population: 1,
        renown: 0
    }

    ,switzerland: {
      height: 54,
      width: 100,
      neighbors :{
        1 : "germany",
        2 : "france",
        3 : "italy",
        4 : "austria"
      },
      accessToWaterReservoirs : false,
      balticSea: false,
      blackSea: false,
      otherSea: false,
      specialities: {
        1: goods.additional[2]
        },
        goodCosts: {
          coal: 30,
          steel: 70,
          aluminium: 80,
          copper: 60,
          lead: 50,
          grain: 5,
          oil: 100,
          wine: 35,
          fish: 5,
          flour: 10,
          clothes: 20,
          zinc: 75,
          wolfram: 100,
          mechanicalParts: 150,
          chrome : 5,
          nickel: 3,
          forestGoods: 20
        },
        goodsAvailability: {
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        maxGoodsAvailability:{
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        population: 4.1,
        renown: 0
    }

    ,sicily: {
      height: 54.2,
      width: 80,
      neighbors :{
        1 : "italy"
      },
      accessToWaterReservoirs : true,
      balticSea: false,
      blackSea: false,
      otherSea: true,
      specialities: {
        1: goods.additional[2]
        },
        goodCosts: {
          coal: 30,
          steel: 70,
          aluminium: 80,
          copper: 60,
          lead: 50,
          grain: 5,
          oil: 100,
          wine: 35,
          fish: 5,
          flour: 10,
          clothes: 20,
          zinc: 75,
          wolfram: 100,
          mechanicalParts: 150,
          chrome : 5,
          nickel: 3,
          forestGoods: 20
        },
        goodsAvailability: {
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        maxGoodsAvailability:{
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        population: 4,
        renown: 0
    }

    ,sardynia: {
      height: 80,
      width: 53.6,
      neighbors :{
      },
      accessToWaterReservoirs : true,
      balticSea: false,
      blackSea: false,
      otherSea: true,
      specialities: {
        1: goods.additional[2]
        },
        goodCosts: {
          coal: 30,
          steel: 70,
          aluminium: 80,
          copper: 60,
          lead: 50,
          grain: 5,
          oil: 100,
          wine: 35,
          fish: 5,
          flour: 10,
          clothes: 20,
          zinc: 75,
          wolfram: 100,
          mechanicalParts: 150,
          chrome : 5,
          nickel: 3,
          forestGoods: 20
        },
        goodsAvailability: {
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        maxGoodsAvailability:{
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        population: 1,
        renown: 0
    }

    ,corsica: {
      height: 55,
      width: 34.65,
      neighbors :{
      },
      accessToWaterReservoirs : true,
      balticSea: false,
      blackSea: false,
      otherSea: true,
      specialities: {
        1: goods.additional[2]
        },
        goodCosts: {
          coal: 30,
          steel: 70,
          aluminium: 80,
          copper: 60,
          lead: 50,
          grain: 5,
          oil: 100,
          wine: 35,
          fish: 5,
          flour: 10,
          clothes: 20,
          zinc: 75,
          wolfram: 100,
          mechanicalParts: 150,
          chrome : 5,
          nickel: 3,
          forestGoods: 20
        },
        goodsAvailability: {
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        maxGoodsAvailability:{
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        population: 0.2,
        renown: 0
    }

    ,algieria: {
      height: 95.2,
      width: 280,
      neighbors :{
      },
      accessToWaterReservoirs : true,
      balticSea: false,
      blackSea: false,
      otherSea: true,
      specialities: {
        1: goods.additional[2]
        },
        goodCosts: {
          coal: 30,
          steel: 70,
          aluminium: 80,
          copper: 60,
          lead: 50,
          grain: 5,
          oil: 100,
          wine: 35,
          fish: 5,
          flour: 10,
          clothes: 20,
          zinc: 75,
          wolfram: 100,
          mechanicalParts: 150,
          chrome : 5,
          nickel: 3,
          forestGoods: 20
        },
        goodsAvailability: {
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        maxGoodsAvailability:{
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        population: 7,
        renown: 0
    }

 
    ,irelandNorth: {
      height: 50.4,
      width: 70,
      neighbors :{
        1 : "ireland",
        2 : "greatBritain"
      },
      accessToWaterReservoirs : true,
      balticSea: false,
      blackSea: false,
      otherSea: true,
      specialities: {
        1: goods.additional[2]
        },
        goodCosts: {
          coal: 30,
          steel: 70,
          aluminium: 80,
          copper: 60,
          lead: 50,
          grain: 5,
          oil: 100,
          wine: 35,
          fish: 5,
          flour: 10,
          clothes: 20,
          zinc: 75,
          wolfram: 100,
          mechanicalParts: 150,
          chrome : 5,
          nickel: 3,
          forestGoods: 20
        },
        goodsAvailability: {
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        maxGoodsAvailability:{
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        population: 1.3,
        renown: 0
    }

    ,ireland: {
      height: 155,
      width: 139.5,
      neighbors :{
        1 : "greatBritain"
      },
      accessToWaterReservoirs : true,
      balticSea: false,
      blackSea: false,
      otherSea: true,
      specialities: {
        1: goods.additional[2]
        },
        goodCosts: {
          coal: 30,
          steel: 70,
          aluminium: 80,
          copper: 60,
          lead: 50,
          grain: 5,
          oil: 100,
          wine: 35,
          fish: 5,
          flour: 10,
          clothes: 20,
          zinc: 75,
          wolfram: 100,
          mechanicalParts: 150,
          chrome : 5,
          nickel: 3,
          forestGoods: 20
        },
        goodsAvailability: {
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        maxGoodsAvailability:{
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        population: 3,
        renown: 0
    }

    ,easternPrussia: {
      height: 81.5,
      width: 100 ,
      neighbors :{
        1 : "poland",
        2 : "lithuania"
      },
      accessToWaterReservoirs : true,
      balticSea: true,
      blackSea: false,
      otherSea: false,
      specialities: {
        1: goods.additional[2]
        },
        goodCosts: {
          coal: 30,
          steel: 70,
          aluminium: 80,
          copper: 60,
          lead: 50,
          grain: 5,
          oil: 100,
          wine: 35,
          fish: 5,
          flour: 10,
          clothes: 20,
          zinc: 75,
          wolfram: 100,
          mechanicalParts: 150,
          chrome : 5,
          nickel: 3,
          forestGoods: 20
        },
        goodsAvailability: {
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        maxGoodsAvailability:{
          coal: 100,
          steel: 80,
          aluminium: 50,
          copper: 120,
          lead: 80,
          grain: 1000,
          oil: 300,
          wine: 50,
          fish: 70,
          flour: 80,
          clothes: 90,
          zinc: 15,
          wolfram: 40,
          mechanicalParts: 5,
          chrome : 1,
          nickel: 2,
          forestGoods: 50
        },
        population: 2.5,
        renown: 0
    }
  }

    const polishMapLocation = $(".polishMapLocation")[0];
    let polishMap = document.querySelector(".polishMap");

    const lithuanianMapLocation = $(".lithuanianMapLocation")[0];
    let lithuaniaMap = document.querySelector(".lithuaniaMap");

    const ussrMapLocation = $(".ussrMapLocation")[0];
    let ussrMap = document.querySelector(".ussrMap");

    const czechoslovakiaMapLocation = $(".czechoslovakiaMapLocation")[0];
    let czechoslovakiaMap = document.querySelector(".czechoslovakiaMap");

    const austriaMapLocation = $(".austriaMapLocation")[0];
    let austriaMap = document.querySelector(".austriaMap");

    const germanyMapLocation = $(".germanyMapLocation")[0];
    let germanyMap = document.querySelector(".germanyMap");

    const easternPrussiaMapLocation = $(".easternPrussiaMapLocation")[0];
    let easternPrussiaMap = document.querySelector(".easternPrussiaMap");

    const franceMapLocation = $(".franceMapLocation")[0];
    let franceMap = document.querySelector(".franceMap");

    const greatBritainMapLocation = $(".greatBritainMapLocation")[0];
    let greatBritainMap = document.querySelector(".greatBritainMap");

    const norwayMapLocation = $(".norwayMapLocation")[0];
    let norwayMap = document.querySelector(".norwayMap");

    const swedenMapLocation = $(".swedenMapLocation")[0];
    let swedenMap = document.querySelector(".swedenMap");

    const finlandMapLocation = $(".finlandMapLocation")[0];
    let finlandMap = document.querySelector(".finlandMap");

    const estoniaMapLocation = $(".estoniaMapLocation")[0];
    let estoniaMap = document.querySelector(".estoniaMap");

    const latviaMapLocation = $(".latviaMapLocation")[0];
    let latviaMap = document.querySelector(".latviaMap");

    const denmarkMapLocation = $(".denmarkMapLocation")[0];
    let denmarkMap = document.querySelector(".denmarkMap");

    const icelandMapLocation = $(".icelandMapLocation")[0];
    let icelandMap = document.querySelector(".icelandMap");

    const belgiumMapLocation = $(".belgiumMapLocation")[0];
    let belgiumMap = document.querySelector(".belgiumMap");

    const netherlandMapLocation = $(".netherlandMapLocation")[0];
    let netherlandMap = document.querySelector(".netherlandMap");

    const hungaryMapLocation = $(".hungaryMapLocation")[0];
    let hungaryMap = $(".hungaryMap")[0];

    const romaniaMapLocation = $(".romaniaMapLocation")[0];
    let romaniaMap = document.querySelector(".romaniaMap");

    const bulgariaMapLocation = $(".bulgariaMapLocation")[0];
    let bulgariaMap = document.querySelector(".bulgariaMap");

    const yugoslaviaMapLocation = $(".yugoslaviaMapLocation")[0];
    let yugoslaviaMap = document.querySelector(".yugoslaviaMap");

    const albaniaMapLocation = $(".albaniaMapLocation")[0];
    let albaniaMap = document.querySelector(".albaniaMap");

    const greeceMapLocation = $(".greeceMapLocation")[0];
    let greeceMap = document.querySelector(".greeceMap");

    const turkeyMapLocation = $(".turkeyMapLocation")[0];
    let turkeyMap = document.querySelector(".turkeyMap");

    const italyMapLocation = $(".italyMapLocation")[0];
    let italyMap = document.querySelector(".italyMap");

    const sicilyMapLocation = $(".sicilyMapLocation")[0];
    let sicilyMap = document.querySelector(".sicilyMap");

    const sardyniaMapLocation = $(".sardyniaMapLocation")[0];
    let sardyniaMap = document.querySelector(".sardyniaMap");

    const corsicaMapLocation = $(".corsicaMapLocation")[0];
    let corsicaMap = document.querySelector(".corsicaMap");

    const algieriaMapLocation = $(".algieriaMapLocation")[0];
    let algieriaMap = document.querySelector(".algieriaMap");

    const switzerlandMapLocation = $(".switzerlandMapLocation")[0];
    let switzerlandMap = document.querySelector(".switzerlandMap");

    const spainMapLocation = $(".spainMapLocation")[0];
    let spainMap = document.querySelector(".spainMap");

    const portugalMapLocation = $(".portugalMapLocation")[0];
    let portugalMap = document.querySelector(".portugalMap");

    const irelandNorthMapLocation = $(".irelandNorthMapLocation")[0];
    let irelandNorthMap = document.querySelector(".irelandNorthMap");

    const irelandMapLocation = $(".irelandMapLocation")[0];
    let irelandMap = document.querySelector(".irelandMap");
    
    export const dateValueOnMap = document.querySelector(".dateValue");
    const dateOnMap = document.querySelector(".date");
    
    let resolutionBodyX = window.screen.width
    let resolutionBodyY = window.screen.height
    let resolution = $("#mainNav").width();
    let factor;

    let italyTerritories = ["Italy","Sardynia","Sicily"];
    let franceTerritories = ["France","Algieria","Corsica"];
    let denmarkTerritories = ["Denmark","Iceland"];
    let greatBritainTerritories = ["GB","IrelandNorth"];
    let irishTerritories = ["Ireland"];
    let germanyTerritories = ["Germany","EasternPrussia"];

    calculateResoluctionFactor(resolution)
    recalculateCountriesPositionsBasedOnResolution(factor)

    window.addEventListener("resize",function(){
      resolution = $("#mainNav").width();
      calculateResoluctionFactor(resolution)
      recalculateCountriesPositionsBasedOnResolution(factor)
    })

    ////Portugal
    portugalMap.addEventListener("click", 
    function(){ 
      firstClickedCountryName = "portugal"
      smallFlagSrc = "/Portugal-icon.7b1944da.png"
        if(!clickedCreateTransport){
        showList(event,firstClickedCountryName,smallFlagSrc)
        } else {
          buildRoute(firstClickedCountryName,event);
        }
      }
    );
    portugalMap.addEventListener("mouseover", 
    function(){ 
          selectedCountryName = "portugal";
          countrySpecialities(selectedCountryName)
      });

    ////Spain
    spainMap.addEventListener("click", 
    function(){ 
      firstClickedCountryName = "spain"
      smallFlagSrc = "/Spain-icon.36bb6066.png"
      if(!clickedCreateTransport){
        showList(event,firstClickedCountryName,smallFlagSrc)
        } else {
          buildRoute(firstClickedCountryName,event);
        }
      }
    );
    spainMap.addEventListener("mouseover", 
    function(){ 
          selectedCountryName = "spain";
          countrySpecialities(selectedCountryName)
      });
    
    ////Poland
    polishMap.addEventListener("click", 
    function(){ 
        // alert("You chosen Poland, good move!"); 
        firstClickedCountryName = "poland"
        smallFlagSrc = "/Poland-icon.532b2fd1.png"
        if(!clickedCreateTransport){
          showList(event,firstClickedCountryName,smallFlagSrc)
          } else {
            buildRoute(firstClickedCountryName,event);
          }
      }
    );
    polishMap.addEventListener("mouseover", 
    function(){ 
          selectedCountryName = "poland";
          countrySpecialities(selectedCountryName)
      });

          ////Norway
    norwayMap.addEventListener("click", 
    function(){ 
      firstClickedCountryName = "norway"
      smallFlagSrc = "/Norway-icon.4a8c8a5e.png"
      if(!clickedCreateTransport){
        showList(event,firstClickedCountryName,smallFlagSrc)
        } else {
          buildRoute(firstClickedCountryName,event);
        }
      }
    );
    norwayMap.addEventListener("mouseover", 
    function(){ 
          selectedCountryName = "norway";
          countrySpecialities(selectedCountryName)
      });

      ////Sweden
    swedenMap.addEventListener("click", 
    function(){ 
      firstClickedCountryName = "sweden"
      smallFlagSrc = "/Sweden-icon.da710607.png"
      if(!clickedCreateTransport){
        showList(event,firstClickedCountryName,smallFlagSrc)
        } else {
          buildRoute(firstClickedCountryName,event);
        }
      }
    );
    swedenMap.addEventListener("mouseover", 
    function(){ 
          selectedCountryName = "sweden";
          countrySpecialities(selectedCountryName)
      });

      ////Finland
      finlandMap.addEventListener("click", 
      function(){ 
        firstClickedCountryName = "finland"
        smallFlagSrc = "/Finland-icon.779ab3d0.png"
        if(!clickedCreateTransport){
          showList(event,firstClickedCountryName,smallFlagSrc)
          } else {
            buildRoute(firstClickedCountryName,event);
          }
        }
      );

      finlandMap.addEventListener("mouseover", 
      function(){ 
            selectedCountryName = "finland";
            countrySpecialities(selectedCountryName)
        });

      ////Latvia
      latviaMap.addEventListener("click", 
      function(){ 
        firstClickedCountryName = "latvia"
        smallFlagSrc = "/Latvia-Flag-icon.1009b424.png"
        if(!clickedCreateTransport){
          showList(event,firstClickedCountryName,smallFlagSrc)
          } else {
            buildRoute(firstClickedCountryName,event);
          }
        }
      );

      latviaMap.addEventListener("mouseover", 
      function(){ 
            selectedCountryName = "latvia";
            countrySpecialities(selectedCountryName)
        });

      ////Estonia
      estoniaMap.addEventListener("click", 
      function(){ 
        firstClickedCountryName = "estonia"
        smallFlagSrc = "/Estonia-icon.039201d6.png"
        if(!clickedCreateTransport){
          showList(event,firstClickedCountryName,smallFlagSrc)
          } else {
            buildRoute(firstClickedCountryName,event);
          }
        }
      );

      estoniaMap.addEventListener("mouseover", 
      function(){ 
            selectedCountryName = "estonia";
            countrySpecialities(selectedCountryName)
        });
      

    ////Germany
    germanyMap.addEventListener("click", 
    function(){ 
      // alert("You chosen Germany, bad move!"); 
      firstClickedCountryName = "germany"
      smallFlagSrc = "/German-Reich-icon.d05c90e8.png"
      if(!clickedCreateTransport){
        showList(event,firstClickedCountryName,smallFlagSrc)
        } else {
          buildRoute(firstClickedCountryName,event);
        }
      }
    );

    germanyMap.addEventListener("mouseover", 
    function(){ 
          checkGermanTerritoriesMouseover();
          selectedCountryName = "germany";
          countrySpecialities(selectedCountryName);
      });

      germanyMap.addEventListener("mouseout", 
      function(){ 
            checkGermanTerritoriesMouseout();
        });

////EasternPrussia
    easternPrussiaMap.addEventListener("click", 
    function(){ 
      if(germanyTerritories.includes("EasternPrussia")){
        firstClickedCountryName = "germany"
        smallFlagSrc = "/German-Reich-icon.d05c90e8.png"
        if(!clickedCreateTransport){
          showList(event,firstClickedCountryName,smallFlagSrc)
          } else {
            buildRoute(firstClickedCountryName,event);
          }
      } else{
        firstClickedCountryName = "easternPrussia"
        smallFlagSrc = "/Iceland-icon.193b3236.png"
        if(!clickedCreateTransport){
          showList(event,firstClickedCountryName,smallFlagSrc)
          } else {
            buildRoute(firstClickedCountryName,event);
          }
      }
  }
    );

    easternPrussiaMap.addEventListener("mouseover", 
    function(){ 
      if(germanyTerritories.includes("EasternPrussia")){
          checkGermanTerritoriesMouseover();
          selectedCountryName = "germany";
          countrySpecialities(selectedCountryName);
        } else {
          $(easternPrussiaMap).addClass("mediumMapOnYellow");
          selectedCountryName = "easternPrussia";
          countrySpecialities(selectedCountryName);
        }
      });

      easternPrussiaMap.addEventListener("mouseout", 
      function(){ 
        if(germanyTerritories.includes("EasternPrussia")){
            checkGermanTerritoriesMouseout();
        } else{
          $(easternPrussiaMap).removeClass("mediumMapOnYellow");
        }
        });


    ////USSR
    ussrMap.addEventListener("click", 
    function(){ 
      firstClickedCountryName = "ussr"
      smallFlagSrc = "/ussr.2fdc3809.png"
      if(!clickedCreateTransport){
        showList(event,firstClickedCountryName,smallFlagSrc)
        } else {
          buildRoute(firstClickedCountryName,event);
        }
     }
    );

    ussrMap.addEventListener("mouseover", 
    function(){ 
      selectedCountryName = "ussr";
      countrySpecialities(selectedCountryName)
      });


    ///Czechoslovakia
    czechoslovakiaMap.addEventListener("click", 
    function(){ 
      firstClickedCountryName = "czechoslovakia"
      smallFlagSrc = "/Czech-Republic-icon.7f214b3b.png"
      if(!clickedCreateTransport){
        showList(event,firstClickedCountryName,smallFlagSrc)
        } else {
          buildRoute(firstClickedCountryName,event);
        }
    }
    );

    czechoslovakiaMap.addEventListener("mouseover", 
    function(){ 
          selectedCountryName = "czechoslovakia";
          countrySpecialities(selectedCountryName)
    
      });

    ////Austria
    austriaMap.addEventListener("click", 
    function(){ 
      firstClickedCountryName = "austria"
      smallFlagSrc = "/Austria-icon.41c64192.png"
      if(!clickedCreateTransport){
        showList(event,firstClickedCountryName,smallFlagSrc)
        } else {
          buildRoute(firstClickedCountryName,event);
        }
    }
    );

    austriaMap.addEventListener("mouseover", 
    function(){ 
      selectedCountryName = "austria";
      countrySpecialities(selectedCountryName)
      });

    ////France
    franceMap.addEventListener("click", 
    function(){ 
      firstClickedCountryName = "france"
      smallFlagSrc = "/France-icon.2690ec9f.png"
      if(!clickedCreateTransport){
        showList(event,firstClickedCountryName,smallFlagSrc)
        } else {
          buildRoute(firstClickedCountryName,event);
        }
    });

    franceMap.addEventListener("mouseover", 
    function(){ 
      checkFrenchTerritoriesMouseover();
      selectedCountryName = "france";
      countrySpecialities(selectedCountryName)
      });

      franceMap.addEventListener("mouseout", 
      function(){ 
        checkFrenchTerritoriesMouseout();
        });

    ////Lithuania
    lithuaniaMap.addEventListener("click", 
    function(){ 
      firstClickedCountryName = "lithuania"
      smallFlagSrc = "/Lithuania-icon.4c393325.png"
      if(!clickedCreateTransport){
        showList(event,firstClickedCountryName,smallFlagSrc)
        } else {
          buildRoute(firstClickedCountryName,event);
        }
    });

    lithuaniaMap.addEventListener("mouseover", 
    function(){ 
      selectedCountryName = "lithuania";
      countrySpecialities(selectedCountryName)
      });

    ////Denmark
    denmarkMap.addEventListener("click", 
    function(){ 
      firstClickedCountryName = "denmark"
      smallFlagSrc = "/Denmark-icon.5e272e41.png"
      if(!clickedCreateTransport){
        showList(event,firstClickedCountryName,smallFlagSrc)
        } else {
          buildRoute(firstClickedCountryName,event);
        } 
    });

    denmarkMap.addEventListener("mouseover", 
    function(){ 
      checkDannishTerritoriesMouseover();
      selectedCountryName = "denmark";
      countrySpecialities(selectedCountryName)
      });

    denmarkMap.addEventListener("mouseout", 
    function(){ 
      checkDannishTerritoriesMouseout();
      });
   

 ////Iceland
 icelandMap.addEventListener("click", 
 function(){ 
  if(denmarkTerritories.includes("Iceland")){
    firstClickedCountryName = "denmark"
    smallFlagSrc = "/Denmark-icon.5e272e41.png"
    if(!clickedCreateTransport){
      showList(event,firstClickedCountryName,smallFlagSrc)
      } else {
        buildRoute(firstClickedCountryName,event);
      }
  } else {
    firstClickedCountryName = "iceland"
    smallFlagSrc = "/Iceland-icon.193b3236.png"
    if(!clickedCreateTransport){
      showList(event,firstClickedCountryName,smallFlagSrc)
      } else {
        buildRoute(firstClickedCountryName,event);
      }
  }
});

 icelandMap.addEventListener("mouseover", 
 function(){ 
  if(denmarkTerritories.includes("Iceland")){
  checkDannishTerritoriesMouseover();
   selectedCountryName = "denmark";
  } else{
    $(icelandMap).addClass("mediumMapOnYellow");
    selectedCountryName = "iceland";
  }
   countrySpecialities(selectedCountryName)
   });

   icelandMap.addEventListener("mouseout", 
   function(){ 
    if(denmarkTerritories.includes("Iceland")){
      checkDannishTerritoriesMouseout();;
      } else{
        $(icelandMap).removeClass("mediumMapOnYellow");
      }
      
     });

 ////Belgium - benelux
 belgiumMap.addEventListener("click", 
 function(){ 
  firstClickedCountryName = "belgium"
  smallFlagSrc = "/Belgium-icon.b3905659.png"
  if(!clickedCreateTransport){
    showList(event,firstClickedCountryName,smallFlagSrc)
    } else {
      buildRoute(firstClickedCountryName,event);
    }
}
 );

 belgiumMap.addEventListener("mouseover", 
 function(){ 
   selectedCountryName = "belgium";
   countrySpecialities(selectedCountryName)
   });

    ////Netherland - benelux
 netherlandMap.addEventListener("click", 
 function(){ 
  firstClickedCountryName = "netherland"
  smallFlagSrc = "/Netherlands-icon.f7101548.png"
  if(!clickedCreateTransport){
    showList(event,firstClickedCountryName,smallFlagSrc)
    } else {
      buildRoute(firstClickedCountryName,event);
    }
});

 netherlandMap.addEventListener("mouseover", 
 function(){ 
   selectedCountryName = "netherland";
   countrySpecialities(selectedCountryName)
   });

  ////Hungary 
 hungaryMap.addEventListener("click", 
 function(){ 
  firstClickedCountryName = "hungary"
  smallFlagSrc = "/Hungary-icon.c113b3fb.png"
  if(!clickedCreateTransport){
    showList(event,firstClickedCountryName,smallFlagSrc)
    } else {
      buildRoute(firstClickedCountryName,event);
    }
 });

 hungaryMap.addEventListener("mouseover", 
 function(){ 
   selectedCountryName = "hungary";
   countrySpecialities(selectedCountryName)
   });

 ////Romania 
 romaniaMap.addEventListener("click", 
 function(){ 
  firstClickedCountryName = "romania"
  smallFlagSrc = "/Romania-icon.0e037d14.png"
  if(!clickedCreateTransport){
    showList(event,firstClickedCountryName,smallFlagSrc)
    } else {
      buildRoute(firstClickedCountryName,event);
    }
});

 romaniaMap.addEventListener("mouseover", 
 function(){ 
   selectedCountryName = "romania";
   countrySpecialities(selectedCountryName)
   });

 ////Bulgaria 
 bulgariaMap.addEventListener("click", 
 function(){ 
  firstClickedCountryName = "bulgaria"
  smallFlagSrc = "/Bulgaria-icon.3b362cd7.png"
  if(!clickedCreateTransport){
    showList(event,firstClickedCountryName,smallFlagSrc)
    } else {
      buildRoute(firstClickedCountryName,event);
    } 
});

 bulgariaMap.addEventListener("mouseover", 
 function(){ 
   selectedCountryName = "bulgaria";
   countrySpecialities(selectedCountryName)
   });

////Yugoslavia 
 yugoslaviaMap.addEventListener("click", 
 function(){ 
  firstClickedCountryName = "yugoslavia"
  smallFlagSrc = "/Yugoslavia-Flag-icon.40aaaf55.png"
  if(!clickedCreateTransport){
    showList(event,firstClickedCountryName,smallFlagSrc)
    } else {
      buildRoute(firstClickedCountryName,event);
    } 
});

 yugoslaviaMap.addEventListener("mouseover", 
 function(){ 
   selectedCountryName = "yugoslavia";
   countrySpecialities(selectedCountryName)
});

////Albania 
albaniaMap.addEventListener("click", 
function(){ 
  firstClickedCountryName = "albania"
  smallFlagSrc = "/Albania-Flag-icon.d5ddd13c.png"
  if(!clickedCreateTransport){
    showList(event,firstClickedCountryName,smallFlagSrc)
    } else {
      buildRoute(firstClickedCountryName,event);
    } 
});

albaniaMap.addEventListener("mouseover", 
function(){ 
  selectedCountryName = "albania";
  countrySpecialities(selectedCountryName)
});

////Greece 
greeceMap.addEventListener("click", 
function(){ 
  firstClickedCountryName = "greece"
  smallFlagSrc = "/Greece-icon.cfb72f5d.png"
  if(!clickedCreateTransport){
    showList(event,firstClickedCountryName,smallFlagSrc)
    } else {
      buildRoute(firstClickedCountryName,event);
    }
});

greeceMap.addEventListener("mouseover", 
function(){ 
  selectedCountryName = "greece";
  countrySpecialities(selectedCountryName)
});

////Turkey 
turkeyMap.addEventListener("click", 
function(){ 
  firstClickedCountryName = "turkey"
  smallFlagSrc = "/Turkey-icon.722b7d32.png"
  if(!clickedCreateTransport){
    showList(event,firstClickedCountryName,smallFlagSrc)
    } else {
      buildRoute(firstClickedCountryName,event);
    }
});

turkeyMap.addEventListener("mouseover", 
function(){ 
  selectedCountryName = "turkey";
  countrySpecialities(selectedCountryName)
});

////Italy 
italyMap.addEventListener("click", 
function(){ 
  firstClickedCountryName = "italy"
  smallFlagSrc = "/Italy-icon.a50e5bdf.png"
  if(!clickedCreateTransport){
    showList(event,firstClickedCountryName,smallFlagSrc)
    } else {
      buildRoute(firstClickedCountryName,event);
    }
});

italyMap.addEventListener("mouseover", 
function(){ 
  checkItalianTerritoriesMouseover();
  selectedCountryName = "italy";
  countrySpecialities(selectedCountryName)
});

italyMap.addEventListener("mouseout", 
function(){ 
  checkItalianTerritoriesMouseout();
});

////Sicily 
sicilyMap.addEventListener("click", 
function(){ 
  if(italyTerritories.includes("Sicily")){
    firstClickedCountryName = "italy"
    smallFlagSrc = "/Italy-icon.a50e5bdf.png"
    if(!clickedCreateTransport){
      showList(event,firstClickedCountryName,smallFlagSrc)
      } else {
        buildRoute(firstClickedCountryName,event);
      }
  } else {
    firstClickedCountryName = "sicily"
    smallFlagSrc = "/Iceland-icon.193b3236.png"
    if(!clickedCreateTransport){
      showList(event,firstClickedCountryName,smallFlagSrc)
      } else {
        buildRoute(firstClickedCountryName,event);
      }
  }
});

sicilyMap.addEventListener("mouseover", 
function(){ 
  if(italyTerritories.includes("Sicily")){
  checkItalianTerritoriesMouseover();
  selectedCountryName = "italy";
} else {
  $(sicilyMap).addClass("smallMapOnViolet");
  selectedCountryName = "sicily";
}
  countrySpecialities(selectedCountryName)
});

sicilyMap.addEventListener("mouseout", 
function(){ 
  if(italyTerritories.includes("Sicily")){
    checkItalianTerritoriesMouseout();
  } else {
    $(sicilyMap).removeClass("smallMapOnViolet");
  }
  
});

////Sardynia 
sardyniaMap.addEventListener("click", 
function(){
  if(italyTerritories.includes("Sardynia")){
    firstClickedCountryName = "italy"
    smallFlagSrc = "/Italy-icon.a50e5bdf.png"
    if(!clickedCreateTransport){
      showList(event,firstClickedCountryName,smallFlagSrc)
      } else {
        buildRoute(firstClickedCountryName,event);
      }
  } else {
    firstClickedCountryName = "sardynia"
    smallFlagSrc = "/Iceland-icon.193b3236.png"
    if(!clickedCreateTransport){
      showList(event,firstClickedCountryName,smallFlagSrc)
      } else {
        buildRoute(firstClickedCountryName,event);
      }
  }
});

sardyniaMap.addEventListener("mouseover", 
function(){ 
    if(italyTerritories.includes("Sardynia")){
    checkItalianTerritoriesMouseover();
    selectedCountryName = "italy";
    countrySpecialities(selectedCountryName)
  } else {
    $(sardyniaMap).addClass("smallMapOnViolet");
    selectedCountryName = "sardynia";
    countrySpecialities(selectedCountryName)
  }
});

sardyniaMap.addEventListener("mouseout", 
function(){ 
  if(italyTerritories.includes("Sardynia")){
  checkItalianTerritoriesMouseout();
  } else {
    $(sardyniaMap).removeClass("smallMapOnViolet");
  }
});

////Corsica 
corsicaMap.addEventListener("click", 
function(){ 
  if(franceTerritories.includes("Corsica")){
    firstClickedCountryName = "france"
    smallFlagSrc = "/France-icon.2690ec9f.png"
    if(!clickedCreateTransport){
      showList(event,firstClickedCountryName,smallFlagSrc)
      } else {
        buildRoute(firstClickedCountryName,event);
      } 
  } else {
    firstClickedCountryName = "corsica"
    smallFlagSrc = "/Iceland-icon.193b3236.png"
    if(!clickedCreateTransport){
      showList(event,firstClickedCountryName,smallFlagSrc)
      } else {
        buildRoute(firstClickedCountryName,event);
      }
  }
});

corsicaMap.addEventListener("mouseover", 
function(){ 
  if(franceTerritories.includes("Corsica")){
    checkFrenchTerritoriesMouseover();
    selectedCountryName = "france";
    countrySpecialities(selectedCountryName)
  } else{
    $(corsicaMap).addClass("smallMapOnYellow");
    selectedCountryName = "corsica";
    countrySpecialities(selectedCountryName)
  }

});


corsicaMap.addEventListener("mouseout", 
function(){ 
  if(franceTerritories.includes("Corsica")){
    checkFrenchTerritoriesMouseout();
  } else {
    $(corsicaMap).removeClass("smallMapOnYellow");
  }
});

////Algieria 
algieriaMap.addEventListener("click", 
function(){ 
  if(franceTerritories.includes("Algieria")){
    firstClickedCountryName = "france"
    smallFlagSrc = "/France-icon.2690ec9f.png"
    if(!clickedCreateTransport){
      showList(event,firstClickedCountryName,smallFlagSrc)
      } else {
        buildRoute(firstClickedCountryName,event);
      }
  } else {
    firstClickedCountryName = "algieria"
    smallFlagSrc = "/Iceland-icon.193b3236.png"
    if(!clickedCreateTransport){
      showList(event,firstClickedCountryName,smallFlagSrc)
      } else {
        buildRoute(firstClickedCountryName,event);
      }
  }

});

algieriaMap.addEventListener("mouseover", 
function(){ 
  if(franceTerritories.includes("Algieria")){
    checkFrenchTerritoriesMouseover();
    selectedCountryName = "france";
    countrySpecialities(selectedCountryName)
  } else {
    $(algieriaMap).addClass("smallMapOnYellow");
    selectedCountryName = "algieria";
    countrySpecialities(selectedCountryName)
  }
  
});

algieriaMap.addEventListener("mouseout", 
function(){ 
  if(franceTerritories.includes("Algieria")){
  checkFrenchTerritoriesMouseout();
  } else {
    $(algieriaMap).removeClass("smallMapOnYellow");
  }
});

///Switzerland
switzerlandMap.addEventListener("click", 
function(){ 
  firstClickedCountryName = "switzerland"
  smallFlagSrc = "/Switzerland-Flag-icon.791820a4.png"
  if(!clickedCreateTransport){
    showList(event,firstClickedCountryName,smallFlagSrc)
    } else {
      buildRoute(firstClickedCountryName,event);
    }
});

switzerlandMap.addEventListener("mouseover", 
function(){ 
  selectedCountryName = "switzerland";
  countrySpecialities(selectedCountryName)
});


      

  ////GB
greatBritainMap.addEventListener("click", 
  function(){ 
    firstClickedCountryName = "greatBritain"
    smallFlagSrc = "/United-Kingdom-icon.9151695f.png"
    if(!clickedCreateTransport){
      showList(event,firstClickedCountryName,smallFlagSrc)
      } else {
        buildRoute(firstClickedCountryName,event);
      }
  });

  greatBritainMap.addEventListener("mouseover", 
  function(){ 
  checkBritishTerritoriesMouseover();
  selectedCountryName = "greatBritain";
  countrySpecialities(selectedCountryName)
  });

  greatBritainMap.addEventListener("mouseout", 
  function(){ 
    checkBritishTerritoriesMouseout();
});

//Ireland
irelandMap.addEventListener("click", 
function(){ 
  if(greatBritainTerritories.includes("Ireland")){
    firstClickedCountryName = "greatBritain"
    smallFlagSrc = "/United-Kingdom-icon.9151695f.png"
    if(!clickedCreateTransport){
      showList(event,firstClickedCountryName,smallFlagSrc)
      } else {
        buildRoute(firstClickedCountryName,event);
      }
  } else{
    firstClickedCountryName = "ireland"
    smallFlagSrc = "/Ireland-icon.c30a36d6.png"
    if(!clickedCreateTransport){
      showList(event,firstClickedCountryName,smallFlagSrc)
      } else {
        buildRoute(firstClickedCountryName,event);
      }
  }
});

irelandMap.addEventListener("mouseover", 
function(){ 
  if(greatBritainTerritories.includes("Ireland")){
    checkBritishTerritoriesMouseover();
    selectedCountryName = "greatBritain";
    countrySpecialities(selectedCountryName)
  } else {
    $(irelandMap).addClass("bigMapOnViolet");
    selectedCountryName = "ireland";
    countrySpecialities(selectedCountryName)
  } 
});

irelandMap.addEventListener("mouseout", 
function(){ 
  if(greatBritainTerritories.includes("Ireland")){
  checkBritishTerritoriesMouseout();
  } else {
    $(irelandMap).removeClass("bigMapOnViolet");
  }
});


//Northern Ireland
irelandNorthMap.addEventListener("click", 
function(){
  
  if(greatBritainTerritories.includes("IrelandNorth")){
    firstClickedCountryName = "greatBritain"
    smallFlagSrc = "/United-Kingdom-icon.9151695f.png"
    if(!clickedCreateTransport){
      showList(event,firstClickedCountryName,smallFlagSrc)
      } else {
        buildRoute(firstClickedCountryName,event);
      }
  } else{
    firstClickedCountryName = "irelandNorth"
    smallFlagSrc = "/Ulster-icon.653d30c0.png"
    if(!clickedCreateTransport){
      showList(event,firstClickedCountryName,smallFlagSrc)
      } else {
        buildRoute(firstClickedCountryName,event);
      }
  }

 });

irelandNorthMap.addEventListener("mouseover", 
function(){ 
  if(greatBritainTerritories.includes("IrelandNorth")){
    checkBritishTerritoriesMouseover();
    selectedCountryName = "greatBritain";
    countrySpecialities(selectedCountryName)
  } else if(irishTerritories.includes("IrelandNorth")){
    selectedCountryName = "ireland";
  } else{
    $(irelandNorthMap).addClass("smallMapOnYellow");
    selectedCountryName = "irelandNorth";
    countrySpecialities(selectedCountryName)
  } 
});

irelandNorthMap.addEventListener("mouseout", 
function(){ 
  if(greatBritainTerritories.includes("IrelandNorth")){
  checkBritishTerritoriesMouseout();
  } else {
    $(irelandNorthMap).removeClass("smallMapOnYellow");
  }
});



    function recalculateCountriesPositionsBasedOnResolution(){
  
      polishMapLocation.style.height = (factor * countries.poland.height) + "px";
      polishMapLocation.style.width = (factor * countries.poland.width) + "px";

      lithuanianMapLocation.style.height = (factor * countries.lithuania.height) + "px";
      lithuanianMapLocation.style.width = (factor * countries.lithuania.width) + "px";

      germanyMapLocation.style.height = (factor * countries.germany.height) + "px";
      germanyMapLocation.style.width = (factor * countries.germany.width) + "px";

      ussrMapLocation.style.height = (factor * countries.ussr.height) + "px";
      ussrMapLocation.style.width = (factor * countries.ussr.width) + "px";

      czechoslovakiaMapLocation.style.height = (factor * countries.czechoslovakia.height) + "px";
      czechoslovakiaMapLocation.style.width = (factor * countries.czechoslovakia.width) + "px";

      greatBritainMapLocation.style.height = (factor * countries.greatBritain.height) + "px";
      greatBritainMapLocation.style.width = (factor * countries.greatBritain.width) + "px";
      
      austriaMapLocation.style.height = (factor * countries.austria.height) + "px";
      austriaMapLocation.style.width = (factor * countries.austria.width) + "px";

      franceMapLocation.style.height = (factor * countries.france.height) + "px";
      franceMapLocation.style.width = (factor * countries.france.width) + "px";

      norwayMapLocation.style.height = (factor * countries.norway.height) + "px";
      norwayMapLocation.style.width = (factor * countries.norway.width) + "px";

      swedenMapLocation.style.height = (factor * countries.sweden.height) + "px";
      swedenMapLocation.style.width = (factor * countries.sweden.width) + "px";

      finlandMapLocation.style.height = (factor * countries.finland.height) + "px";
      finlandMapLocation.style.width = (factor * countries.finland.width) + "px";

      estoniaMapLocation.style.height = (factor * countries.estonia.height) + "px";
      estoniaMapLocation.style.width = (factor * countries.estonia.width) + "px";

      latviaMapLocation.style.height = (factor * countries.latvia.height) + "px";
      latviaMapLocation.style.width = (factor * countries.latvia.width) + "px";

      denmarkMapLocation.style.height = (factor * countries.denmark.height) + "px";
      denmarkMapLocation.style.width = (factor * countries.denmark.width) + "px";

      icelandMapLocation.style.height = (factor * countries.iceland.height) + "px";
      icelandMapLocation.style.width = (factor * countries.iceland.width) + "px";

      belgiumMapLocation.style.height = (factor * countries.belgium.height) + "px";
      belgiumMapLocation.style.width = (factor * countries.belgium.width) + "px";
      
      netherlandMapLocation.style.height = (factor * countries.netherland.height) + "px";
      netherlandMapLocation.style.width = (factor * countries.netherland.width) + "px";

      hungaryMapLocation.style.height = (factor * countries.hungary.height) + "px";
      hungaryMapLocation.style.width = (factor * countries.hungary.width) + "px";

      romaniaMapLocation.style.height = (factor * countries.romania.height) + "px";
      romaniaMapLocation.style.width = (factor * countries.romania.width) + "px";

      bulgariaMapLocation.style.height = (factor * countries.bulgaria.height) + "px";
      bulgariaMapLocation.style.width = (factor * countries.bulgaria.width) + "px";

      yugoslaviaMapLocation.style.height = (factor * countries.yugoslavia.height) + "px";
      yugoslaviaMapLocation.style.width = (factor * countries.yugoslavia.width) + "px";

      albaniaMapLocation.style.height = (factor * countries.albania.height) + "px";
      albaniaMapLocation.style.width = (factor * countries.albania.width) + "px";

      greeceMapLocation.style.height = (factor * countries.greece.height) + "px";
      greeceMapLocation.style.width = (factor * countries.greece.width) + "px";
      
      turkeyMapLocation.style.height = (factor * countries.turkey.height) + "px";
      turkeyMapLocation.style.width = (factor * countries.turkey.width) + "px";

      italyMapLocation.style.height = (factor * countries.italy.height) + "px";
      italyMapLocation.style.width = (factor * countries.italy.width) + "px";

      sicilyMapLocation.style.height = (factor * countries.sicily.height) + "px";
      sicilyMapLocation.style.width = (factor * countries.sicily.width) + "px";

      sardyniaMapLocation.style.height = (factor * countries.sardynia.height) + "px";
      sardyniaMapLocation.style.width = (factor * countries.sardynia.width) + "px";

      corsicaMapLocation.style.height = (factor * countries.corsica.height) + "px";
      corsicaMapLocation.style.width = (factor * countries.corsica.width) + "px";

      algieriaMapLocation.style.height = (factor * countries.algieria.height) + "px";
      algieriaMapLocation.style.width = (factor * countries.algieria.width) + "px";

      switzerlandMapLocation.style.height = (factor * countries.switzerland.height) + "px";
      switzerlandMapLocation.style.width = (factor * countries.switzerland.width) + "px";

      spainMapLocation.style.height = (factor * countries.spain.height) + "px";
      spainMapLocation.style.width = (factor * countries.spain.width) + "px";

      portugalMapLocation.style.height = (factor * countries.portugal.height) + "px";
      portugalMapLocation.style.width = (factor * countries.portugal.width) + "px";

      irelandNorthMapLocation.style.height = (factor * countries.irelandNorth.height) + "px";
      irelandNorthMapLocation.style.width = (factor * countries.irelandNorth.width) + "px";

      irelandMapLocation.style.height = (factor * countries.ireland.height) + "px";
      irelandMapLocation.style.width = (factor * countries.ireland.width) + "px";
      
      easternPrussiaMapLocation.style.height = (factor * countries.easternPrussia.height) + "px";
      easternPrussiaMapLocation.style.width = (factor * countries.easternPrussia.width) + "px";

      
      dateValueOnMap.style.fontSize = (factor * date.fontSize) + "px"
      dateOnMap.style.fontSize = (factor * date.height) + "px"
    }

    function calculateResoluctionFactor(){
      factor = resolution / 1887 ;
    }

    function countrySpecialities(selectedCountryName){
      selectedCountry = refreshObjectsTranslation(selectedCountryName);
      specialitiesList = "";
      for(let specNbr in selectedCountry.specialities){
        if(specNbr < Object.keys(selectedCountry.specialities).length){
        specialitiesList += selectedCountry.specialities[specNbr] + ", "
      } else {
        specialitiesList += selectedCountry.specialities[specNbr]
      }
      }
     let notifyInfoValue = notifyInfo(selectedCountry)
     if(!blockageForInfoNotify){
        Notify.info(notifyInfoValue)
     }
    }

    function notifyInfo(selectedCountry){
    return  "<b>" + selectedLanguage[selectedCountryName] + "</b>" + ": <br> " + selectedLanguage.population + ": " + selectedCountry.population + " " + selectedLanguage.milionShortcut
            + "<br>" + selectedLanguage.specialization + ": " + specialitiesList
    }

    function checkItalianTerritoriesMouseover(){
      if(italyTerritories.includes("Italy") && italyTerritories.includes("Sicily") && italyTerritories.includes("Sardynia")){
        $(italyMap).addClass("italyMapOn")
        $(sicilyMap).addClass("smallMapOnViolet");
        $(sardyniaMap).addClass("smallMapOnViolet");
      }
      else if(italyTerritories.includes("Italy") && italyTerritories.includes("Sicily")){
        $(italyMap).addClass("italyMapOn")
        $(sicilyMap).addClass("smallMapOnViolet");
      } else if(italyTerritories.includes("Italy") && italyTerritories.includes("Sardynia")){
        $(italyMap).addClass("italyMapOn")
        $(sardyniaMap).addClass("smallMapOnViolet");
      }  else if(italyTerritories.includes("Italy")){
        $(italyMap).addClass("italyMapOn")
      }
    }

    function checkItalianTerritoriesMouseout(){
      if(italyTerritories.includes("Italy") && italyTerritories.includes("Sicily") && italyTerritories.includes("Sardynia")){
        $(italyMap).removeClass("italyMapOn")
        $(sicilyMap).removeClass("smallMapOnViolet");
        $(sardyniaMap).removeClass("smallMapOnViolet");
      }   else if(italyTerritories.includes("Italy") && italyTerritories.includes("Sicily")){
        $(italyMap).removeClass("italyMapOn")
        $(sicilyMap).removeClass("smallMapOnViolet");
      } else if(italyTerritories.includes("Italy") && italyTerritories.includes("Sardynia")){
        $(italyMap).removeClass("italyMapOn")
        $(sardyniaMap).removeClass("smallMapOnViolet");
      }else if(italyTerritories.includes("Italy")){
        $(italyMap).removeClass("italyMapOn")
      }
    }

    function checkFrenchTerritoriesMouseover(){
    
      if(franceTerritories.includes("France") && franceTerritories.includes("Corsica") && franceTerritories.includes("Algieria")){
        $(franceMap).addClass("hugeMapOnYellow")
        $(corsicaMap).addClass("smallMapOnYellow");
        $(algieriaMap).addClass("smallMapOnYellow");
      } else if(franceTerritories.includes("France") && franceTerritories.includes("Corsica")){
        $(franceMap).addClass("hugeMapOnYellow")
        $(corsicaMap).addClass("smallMapOnYellow");
      } else if(franceTerritories.includes("France") && franceTerritories.includes("Corsica")){
        $(franceMap).addClass("hugeMapOnYellow")
        $(algieriaMap).addClass("smallMapOnYellow");
      } else if(franceTerritories.includes("France")){
        $(franceMap).addClass("hugeMapOnYellow")
      }
    }

    function checkFrenchTerritoriesMouseout(){
      if(franceTerritories.includes("France") && franceTerritories.includes("Corsica") && franceTerritories.includes("Algieria")){
        $(franceMap).removeClass("hugeMapOnYellow")
        $(corsicaMap).removeClass("smallMapOnYellow");
        $(algieriaMap).removeClass("smallMapOnYellow");
      } else if(franceTerritories.includes("France") && franceTerritories.includes("Corsica")){
        $(franceMap).removeClass("hugeMapOnYellow")
        $(corsicaMap).removeClass("smallMapOnYellow");
      } else if(franceTerritories.includes("France") && franceTerritories.includes("Corsica")){
        $(franceMap).removeClass("hugeMapOnYellow")
        $(algieriaMap).removeClass("smallMapOnYellow");
      } else if(franceTerritories.includes("France")){
        $(franceMap).removeClass("hugeMapOnYellow")
      }
    }

    function checkDannishTerritoriesMouseover(){
      if(denmarkTerritories.includes("Denmark") && denmarkTerritories.includes("Iceland")){
        $(denmarkMap).addClass("mediumMapOnYellow")
        $(icelandMap).addClass("mediumMapOnYellow");
      } else if(denmarkTerritories.includes("Denmark")){
        $(denmarkMap).addClass("mediumMapOnYellow")
      }
    }

    function checkDannishTerritoriesMouseout(){
      if(denmarkTerritories.includes("Denmark") && denmarkTerritories.includes("Iceland")){
      $(denmarkMap).removeClass("mediumMapOnYellow")
      $(icelandMap).removeClass("mediumMapOnYellow");
      }
      else if(denmarkTerritories.includes("Denmark")){
        $(denmarkMap).removeClass("mediumMapOnYellow")
      }
    }

    function checkBritishTerritoriesMouseover(){
      if(greatBritainTerritories.includes("GB") && greatBritainTerritories.includes("IrelandNorth")){
        $(greatBritainMap).addClass("hugeMapOnYellow")
        $(irelandNorthMap).addClass("mediumMapOnYellow");
        }
        else if(greatBritainTerritories.includes("GB")){
          $(greatBritainMap).addClass("hugeMapOnYellow")
        }
    }

    function checkBritishTerritoriesMouseout(){
      if(greatBritainTerritories.includes("GB") && greatBritainTerritories.includes("IrelandNorth")){
        $(greatBritainMap).removeClass("hugeMapOnYellow")
        $(irelandNorthMap).removeClass("mediumMapOnYellow");
        }
        else if(greatBritainTerritories.includes("GB")){
          $(greatBritainMap).removeClass("hugeMapOnYellow")
        }
    }

    function checkGermanTerritoriesMouseover(){
      if(germanyTerritories.includes("Germany") && germanyTerritories.includes("EasternPrussia")){
        $(germanyMap).addClass("hugeMapOnYellow")
        $(easternPrussiaMap).addClass("mediumMapOnYellow");
        }
        else if(germanyTerritories.includes("Germany")){
          $(germanyMap).addClass("hugeMapOnYellow")
        }
    }

    function checkGermanTerritoriesMouseout(){
      if(germanyTerritories.includes("Germany") && germanyTerritories.includes("EasternPrussia")){
        $(germanyMap).removeClass("hugeMapOnYellow")
        $(easternPrussiaMap).removeClass("mediumMapOnYellow");
        }
        else if(germanyTerritories.includes("Germany")){
          $(germanyMap).removeClass("hugeMapOnYellow")
        }
    }

  const countryPanelList = document.querySelector(".countryPanelList");
  const placeForFlag = document.querySelector("#placeForFlag");  
  const countryFlagActionCountry = $(".countryFlagActionCountry")[0]
  export let countryPanelListClicked = false;

  placeForFlag.addEventListener('click',function(){
    hideActionForCountryList();
    toggleCountryPanelListClicked();
    // countryPanelListClicked = false;
  })

  function showList(event){
    if(firstClickedCountryName == clickedCountryName){ //if second click is about the same country
      hideActionForCountryList();
    };

    lastClickedCountryTag = event.target;
    controlPanelWidth = $(".countryPanelList").width(); //Y
    controlPanelHeight = $(".countryPanelList").height(); //X

    //save displaying list on map
    //width position
    if(controlPanelWidth + event.clientY  + 20 > resolutionBodyY){
      clickedPositionY = resolutionBodyY - controlPanelWidth ;
    } else {
      clickedPositionY = event.clientY + window.scrollY - controlPanelWidth;

    }

    //height position
    if(controlPanelHeight + event.clientX + window.scrollX + 15 > resolution){
      clickedPositionX = resolution - (controlPanelHeight*2.5)  - 10;
    } else {
      clickedPositionX = event.clientX + window.scrollX + (controlPanelHeight * 0,5) + 10;
    }
     
      if(countryPanelListClicked && firstClickedCountryName == clickedCountryName){
         countryPanelListClicked = false;
      } else{
          countryPanelListClicked = true;
          countryPanelList.style.left = clickedPositionX + "px" //event.clientX + 20 + "px";
          countryPanelList.style.transition = "all 1.5s";
          countryPanelList.style.top = clickedPositionY + "px"//event.clientY + window.scrollY - controlPanelWidth + "px";
          countryPanelList.style.visibility = "visible";
          countryPanelList.style.opacity = "1";
          placeForFlag.src = smallFlagSrc;
          countryFlagActionCountry.style.transition = "0.3s"
        }

      clickedCountryName = firstClickedCountryName
  }

export function hideActionForCountryList(){
    countryPanelList.style.transition = "opacity 1s ease-out";
    countryPanelList.style.opacity = "0.5";
    countryPanelList.style.visibility = "hidden";
    countryFlagActionCountry.style.transition = "0s"
  }
export function toggleCountryPanelListClicked(){
  if(countryPanelListClicked){
    countryPanelListClicked = false;
  } else {
    countryPanelListClicked = true;
  }
}

export function toggleClickedCreateTransport(){
  if(clickedCreateTransport){
    clickedCreateTransport = false;
  } else {
    clickedCreateTransport = true;
  }
}

export function cleanCurrentRoute(){
  currentRoute = [];
  currentRouteTranslated = [];
  route.innerHTML = "";
}

export function cleanCurrentRouteTranslated(){
  currentRouteTranslated = [];
  route.innerHTML = "";
}


export let listObjects = {
    "goods" : goods,
    "ussr" : countries.ussr,
    "germany" : countries.germany,
    "lithuania" : countries.lithuania,
    "poland" : countries.poland,
    "czechoslovakia" : countries.czechoslovakia,
    "greatBritain" : countries.greatBritain,
    "austria" : countries.austria,
    "france" : countries.france,
    "norway" : countries.norway,
    "finland" : countries.finland,
    "sweden" : countries.sweden,
    "latvia" : countries.latvia,
    "estonia" : countries.estonia,
    "romania" : countries.romania,
    "hungary" : countries.hungary,
    "yugoslavia" : countries.yugoslavia,
    "bulgaria" : countries.bulgaria,
    "turkey" : countries.turkey,
    "greece" : countries.greece,
    "italy" : countries.italy,
    "spain" : countries.spain,
    "portugal" : countries.portugal,
    "denmark" : countries.denmark,
    "belgium" : countries.belgium,
    "netherland" : countries.netherland,
    "albania" : countries.albania,
    "iceland" : countries.iceland,
    "switzerland" : countries.switzerland,
    "sicily" : countries.sicily,
    "sardynia" : countries.sardynia,
    "corsica" : countries.corsica,
    "algieria" : countries.algieria,
    "irelandNorth" : countries.irelandNorth,
    "ireland" : countries.ireland,
    "easternPrussia" : countries.easternPrussia
};

let countriesArray = [
    "ussr" ,
    "germany",
    "lithuania",
    "poland" ,
    "czechoslovakia" ,
    "greatBritain" ,
    "austria" ,
    "france" ,
    "norway" ,
    "finland" ,
    "sweden" ,
    "latvia",
    "estonia" ,
    "romania" ,
    "hungary" ,
    "yugoslavia" ,
    "bulgaria" ,
    "turkey" ,
    "greece",
    "italy" ,
    "spain" ,
    "portugal" ,
    "denmark" ,
    "belgium",
    "netherland" ,
    "albania",
    "iceland" ,
    "switzerland" ,
    "sicily" ,
    "sardynia" ,
    "corsica" ,
    "algieria",
    "irelandNorth",
    "ireland",
    "easternPrussia"
  ]

export function renownIncrease(countryName,transportQty){
  let countryToIncreaseRenown = countries[countryName]
  let populationToTransportRatio = transportQty / (countryToIncreaseRenown["population"] * 100);
  let qtyOfRoutesFrequencyFromCountry = 0;

  let historicalRoutesKeys = Object.keys(historicalRoutes);
  let lastHistoricalRouteNumber = historicalRoutesKeys.length
  for(let i=lastHistoricalRouteNumber;i>50;i--){ 
    console.log("countryName to Renown " + countryName);
    console.log("country in historicalRoutes: " + historicalRoutes[i]["startCountry"]);
    if(historicalRoutes[i]["startCountry"] == countryName){
      qtyOfRoutesFrequencyFromCountry++;
    }
  }

  console.log("populationToTransportRatio " + populationToTransportRatio);
  console.log("qtyOfRoutesFrequencyFromCountry " + qtyOfRoutesFrequencyFromCountry);
  let renownBonus = Math.ceil((populationToTransportRatio * (qtyOfRoutesFrequencyFromCountry+1))*100)/100;
  if(renownBonus>3){
    renownBonus = 3;
  }

  console.log("renownBonus " + renownBonus);
  console.log("country renown before bunus: " + countryToIncreaseRenown["renown"]);
  if(countryToIncreaseRenown["renown"] + renownBonus <= 100){
    countryToIncreaseRenown["renown"] += renownBonus;
  }

  console.log("Renown after bonus: " + countryToIncreaseRenown["renown"]);

  equalizeRenown(countryName);
};

export function equalizeRenown(countryToEqualizeRenown){
  
};

export function changeWareAvailableQty(transportQty,wareName,countryName){
  console.log("changeWareAvailableQty started " + wareName);
  if(wareName != selectedCountry["passengers"]){
    let countryObject = countries[countryName];
    let currentAvailableQty = countryObject["goodsAvailability"][wareName];
    countryObject["goodsAvailability"][wareName] = Math.ceil(currentAvailableQty + transportQty);
  } else{
    //TODO calculate for passengers
  }

};

export function changePriceOfWare(transportQty,wareName,countryName,direction){
  console.log("changePriceOfWare started " + wareName);
  if(wareName != selectedCountry["passengers"]){
    let countryObject = countries[countryName];
    let availableQtyOnEuropeanMarket = 0;

    for(let i=0;i<countriesArray.length;i++){
      availableQtyOnEuropeanMarket += countries[countriesArray[i]]["goodsAvailability"][wareName]
    }

    let priceCorrectionInEndCountry = 0.9;

    let calculateRatioAvailableToTransported = Math.round((transportQty/availableQtyOnEuropeanMarket)*100)/100;
    if(direction<0){
      calculateRatioAvailableToTransported = priceCorrectionInEndCountry * calculateRatioAvailableToTransported;
    }

    countryObject["goodCosts"][wareName] = Math.ceil((countryObject["goodCosts"][wareName] + ((calculateRatioAvailableToTransported * countryObject["goodCosts"][wareName]) * direction))*100)/100
  
  } else{
    //TODO calculate for passengers
  }
};

