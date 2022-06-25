import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import './translations';

let selectedCountryName;
let selectedCountry;
let specialitiesList = "";

// Confirm.init({
//   width: '350px',
//   position: 'right-center',
//   timeout: 3000,
//   info: {
//     background: '#2b1675',
//   },
// });

Notify.init({
  width: '350px',
  position: 'right-bottom',
  timeout: 3000,
  plainText: false,
  showOnlyTheLastOne: true,
  info: {
    background: '#2b1675',
  },
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
        4: selectedLanguage.mechanicalParts
      }
    }

    let date = {
      fontSize: 35,
      height: 30,
      
    }

    let norway = {
      height: 330,
      width: 290.4,
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
          mechanicalParts: 150
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
          mechanicalParts: 5
        },
        population: 2.9
      }

      let sweden = {
        height: 427.45,
        width: 354.8,
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
            mechanicalParts: 150
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
            mechanicalParts: 5
          },
          population: 6.2
        }

   let ussr = {
    height: 840,
    width: 398,
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
        mechanicalParts: 150
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
        mechanicalParts: 5
      },
      population: 159
    }

    let germany = {
      height:  260.4,
      width: 420 ,
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
        mechanicalParts: 150
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
        mechanicalParts: 5
      },
      population: 74
    }

   let lithuania = {
    height: 101, 
    width: 134, 
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
        mechanicalParts: 150
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
        mechanicalParts: 5
      },
      population: 2
    }

    let poland = {
      height: 298,
      width: 286,
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
          mechanicalParts: 150
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
          mechanicalParts: 5
        },
        population: 30
      }

    let czechoslovakia = {
      height: 110.2,
      width: 334,
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
          mechanicalParts: 150
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
          mechanicalParts: 5
        },
        population: 13
    }

    let greatBritain = {
      height: 400,
      width: 286,
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
          mechanicalParts: 150
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
          mechanicalParts: 5
        },
      population: 47
    }

    let austria = {
      height: 79.2,
      width: 180,
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
          mechanicalParts: 150
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
          mechanicalParts: 5
        },
        population: 6.8
    }

    let france = {
      height: 365,
      width: 324.8,
      specialities: {
        1: goods.main[1],
        2: goods.main[2],
        3: goods.main[5],
        4: goods.additional[1]
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
          mechanicalParts: 150
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
          mechanicalParts: 5
        },
        population: 42
    }
    

    let polishMap = document.querySelector("#polishMap");
    const polishMapLocation = $(".polishMapLocation")[0];

    const lithuanianMapLocation = $(".lithuanianMapLocation")[0];
    let lithuaniaMap = document.querySelector("#lithuaniaMap");

    const ussrMapLocation = $(".ussrMapLocation")[0];
    let ussrMap = document.querySelector("#ussrMap");

    const czechoslovakiaMapLocation = $(".czechoslovakiaMapLocation")[0];
    let czechoslovakiaMap = document.querySelector("#czechoslovakiaMap");

    const austriaMapLocation = $(".austriaMapLocation")[0];
    let austriaMap = document.querySelector("#austriaMap");

    const germanyMapLocation = $(".germanyMapLocation")[0];
    let germanyMap = document.querySelector("#germanyMap");

    const franceMapLocation = $(".franceMapLocation")[0];
    let franceMap = document.querySelector("#franceMap");

    const greatBritainMapLocation = $(".greatBritainMapLocation")[0];
    let greatBritainMap = document.querySelector("#greatBritainMap");

    const norwayMapLocation = $(".norwayMapLocation")[0];
    let norwayMap = document.querySelector("#norwayMap");

    const swedenMapLocation = $(".swedenMapLocation")[0];
    let swedenMap = document.querySelector("#swedenMap");

  
    const dateValueOnMap = document.querySelector(".dateValue");
    const dateOnMap = document.querySelector(".date");

    let resolution = $("#mainNav").width();
    let factor;
    
    calculateResoluctionFactor(resolution)
    recalculateCountriesPositionsBasedOnResolution(factor)

    window.addEventListener("resize",function(){
      resolution = $("#mainNav").width();
      calculateResoluctionFactor(resolution)
      recalculateCountriesPositionsBasedOnResolution(factor)
    })
    
    ////Poland
    polishMap.addEventListener("click", 
    function(){ 
        alert("You chosen Poland, good move!"); 
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
        alert("You chosen Norway, good move!"); 
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
        alert("You chosen Norway, good move!"); 
      }
    );
    swedenMap.addEventListener("mouseover", 
    function(){ 
          selectedCountryName = "sweden";
          countrySpecialities(selectedCountryName)
      });
      

    ////Germany
    germanyMap.addEventListener("click", 
    function(){ alert("You chosen Germany, bad move!"); }
    );

    germanyMap.addEventListener("mouseover", 
    function(){ 
          selectedCountryName = "germany";
          countrySpecialities(selectedCountryName)
      });

      

    ////GB
    greatBritainMap.addEventListener("click", 
    function(){ alert("You chosen GB, bad move!"); }
    );

    greatBritainMap.addEventListener("mouseover", 
    function(){ 
      selectedCountryName = "greatBritain";
      countrySpecialities(selectedCountryName)
      });

    ////USSR
    ussrMap.addEventListener("click", 
    function(){ alert("You chosen USSR, bad move!"); }
    );

    ussrMap.addEventListener("mouseover", 
    function(){ 
      selectedCountryName = "ussr";
      countrySpecialities(selectedCountryName)
      });


    ///Czechoslovakia
    czechoslovakiaMap.addEventListener("click", 
    function(){ alert("You chosen Czechoslovakia, good move!"); }
    );

    czechoslovakiaMap.addEventListener("mouseover", 
    function(){ 
          selectedCountryName = "czechoslovakia";
          countrySpecialities(selectedCountryName)
    
      });

    ////Austria
    austriaMap.addEventListener("click", 
    function(){ alert("You chosen Austria, good move!"); }
    );

    austriaMap.addEventListener("mouseover", 
    function(){ 
      selectedCountryName = "austria";
      countrySpecialities(selectedCountryName)
      });

    ////France
    franceMap.addEventListener("click", 
    function(){ alert("You chosen France, good move!"); }
    );

    franceMap.addEventListener("mouseover", 
    function(){ 
      selectedCountryName = "france";
      countrySpecialities(selectedCountryName)
      });

    ////Lituenia
    lithuaniaMap.addEventListener("click", 
    function(){ alert("You chosen Lithuania, good move!"); }
    );

    lithuaniaMap.addEventListener("mouseover", 
    function(){ 
      selectedCountryName = "lithuania";
      countrySpecialities(selectedCountryName)
      });





    function recalculateCountriesPositionsBasedOnResolution(){
  
      polishMapLocation.style.height = (factor * poland.height) + "px";
      polishMapLocation.style.width = (factor * poland.width) + "px";

      lithuanianMapLocation.style.height = (factor * lithuania.height) + "px";
      lithuanianMapLocation.style.width = (factor * lithuania.width) + "px";

      germanyMapLocation.style.height = (factor * germany.height) + "px";
      germanyMapLocation.style.width = (factor * germany.width) + "px";

      ussrMapLocation.style.height = (factor * ussr.height) + "px";
      ussrMapLocation.style.width = (factor * ussr.width) + "px";

      czechoslovakiaMapLocation.style.height = (factor * czechoslovakia.height) + "px";
      czechoslovakiaMapLocation.style.width = (factor * czechoslovakia.width) + "px";

      greatBritainMapLocation.style.height = (factor * greatBritain.height) + "px";
      greatBritainMapLocation.style.width = (factor * greatBritain.width) + "px";
      
      austriaMapLocation.style.height = (factor * austria.height) + "px";
      austriaMapLocation.style.width = (factor * austria.width) + "px";

      franceMapLocation.style.height = (factor * france.height) + "px";
      franceMapLocation.style.width = (factor * france.width) + "px";

      norwayMapLocation.style.height = (factor * norway.height) + "px";
      norwayMapLocation.style.width = (factor * norway.width) + "px";

      swedenMapLocation.style.height = (factor * sweden.height) + "px";
      swedenMapLocation.style.width = (factor * sweden.width) + "px";
      
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
        Notify.info(notifyInfoValue)
    }

    function notifyInfo(selectedCountry){
    return  "<b>" + selectedLanguage[selectedCountryName] + "</b>" + ": <br> " + selectedLanguage.population + ": " + selectedCountry.population + " " + selectedLanguage.milionShortcut
            + "<br>" + selectedLanguage.specialization + ": " + specialitiesList
    }



