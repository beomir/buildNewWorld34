import {clickedCountryName, listObjects, hideActionForCountryList, toggleCountryPanelListClicked, toggleClickedCreateTransport,cleanCurrentRoute,currentRoute,currentRouteTranslated,lastClickedCountryTag,dateValue,time} from './map';
import {selectedLanguage} from './translations';
import {countryConnections} from './countryConnections';
import {meansOfTransportList,additionalTransportCost} from './meansOfTransport'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {passengers,calculatePassengersForCountry} from './passengers';


const createTransport = document.querySelector("#createTransport")
const createTransportPanel = $(".createTransportPanel")[0];
const countryStartNameValue = $(".countryStartNameValue")[0];
const createTransportPanelSwitchOff = $(".createTransportPanelSwitchOff")[0];

const wares = $(".wares")[0];
const truckOption = document.getElementById("truck");
const busOption = document.getElementById("bus");
const transportTypeList = document.getElementById("transportTypeList");

const endCountryOfTheRoute = $(".endCountryOfTheRoute")[1];
const goodCostInStartedCountryValue = $(".goodCostInStartedCountryValue")[0];
const goodCostInEndCountryValue = $(".goodCostInEndCountryValue")[0];
const availableQtyValue = $(".availableQtyValue")[0];

const howManyToTransportValue = document.getElementById("howManyToTransportValue");
const transportTypeValue = document.getElementById("transportTypeValue");
const capacityValue = document.querySelector(".capacityValue");
const neccesseryQtyValue = document.querySelector(".neccesseryQtyValue");

const earnings = document.getElementById("earnings");
const incomeValue = document.querySelector(".incomeValue");
const profitValue = document.querySelector(".profitValue");
const speedValue = document.querySelector(".speedValue");

const transportTypeImg = document.querySelector(".transportTypeImg");
const estimatedArrivalValue = document.querySelector(".estimatedArrivalValue");
const travelTimeValue = document.querySelector(".travelTimeValue");
const transportTypeData = document.querySelector(".transportTypeData");

const calculatedCostValueTag = document.querySelector(".calculatedCostValue");
const meanOfTransport = document.querySelector(".meanOfTransport");
const singularCostValue = document.querySelector(".singularCostValue");
const addToRouteImg = document.querySelector(".addRoute"); 

const route = $(".route")[0];
const routeDistanceValue = $(".routeDistanceValue")[0];
let temporaryRouteValues = [];
let startedCountry;


const blockageForInfoNotifyTime = 5000;
export let blockageForInfoNotify = false;
let selectedWare;
let currentEndCountryOfTheRoute;

let endCountryObject;
let goodPriceInEndCountry;
export let availableGoodQuantity;
let neededTimeForTransport;

let type;
let lastTransportType;
let typeDetail;
export let calculetedRouteDistance = 0;

let distanceRoute = [];
const bigCountry = ["ussr","germany","france","italy","spain","sweden","norwnpmay","poland","greatBritain"];
let clickedCountryTags = [];
const originNameOfWares = new Map();

const originalNameOfVehicles = new Map(); // to future use for translate for example ship names

let speedValueOfSelectedTransport;
let capacityOfSelectedTransport;
let neededTransportUnits = 0;
let calculatedIncomeValue;

let calculatedProfitValue;
let calculatedCostValue;
let goodPriceInStartedCountry;
let estimatedTimeOfArrival;

const thirtyOneDayMonths = ["1","3","5","7","8","10","12"];
const thirtyDayMonths = ["2","4","6","9","11"];


let transportType =  {
    land:{
        bus: true,
        railway: false,
        truck: false
    },
    sea:{
        maritime: false
    },
    air:{
        plane: false,
        airship: false
    }
}

let lastActiveTransportType = ["land","bus"];

createTransport.addEventListener("click", function(){ 

    hideActionForCountryList();
    toggleCountryPanelListClicked();
    toggleClickedCreateTransport();
    cleanCurrentRoute();

    setProperTransportBasedOnGoods();
    startedCountry = clickedCountryName;
    addAvaiableGoodOptions();
    countryStartNameValue.innerHTML = selectedLanguage[clickedCountryName];

    createTransportPanel.classList.remove("createTransportPanel--inactive");
    highlightCountry(startedCountry,lastClickedCountryTag);

});

export function addAvaiableGoodOptions(){

    let myObject = listObjects[clickedCountryName];
    const availableGoodOption = $(".availableGoodOption");
    availableGoodOption.remove();
    let passengers = document.createElement('option');

    passengers.classList.add('availableGoodOption');
    passengers.value = selectedLanguage.passengers;
    passengers.innerHTML = selectedLanguage.passengers;
    wares.appendChild(passengers);

    let availableGoods = myObject.goodsAvailability;

    for(let availableGood in availableGoods){

        originNameOfWares.set(selectedLanguage[availableGood],availableGood)

        let availableGoodName = selectedLanguage[availableGood];
        let selectedGoodOption = document.createElement('option');
        selectedGoodOption.classList.add('availableGoodOption');
        selectedGoodOption.value = availableGoodName;

        selectedGoodOption.innerHTML = availableGoodName;
        wares.appendChild(selectedGoodOption);
    }
}

createTransportPanelSwitchOff.addEventListener('click',function(){

    createTransportPanel.classList.add('createTransportPanel--inactive');
    earnings.classList.add('earnings--inactive');
    addToRouteImg.classList.add('addRoute--inactive');
    cleanCurrentRoute();
    toggleClickedCreateTransport();
    cleanRouteDistance();

    currentEndCountryOfTheRoute = null;
    endCountryOfTheRoute.innerHTML = "";
    goodPriceInEndCountry = 0;
    goodCostInEndCountryValue.innerHTML = 0

    howManyToTransportValue.value = 0;
    availableQtyValue.innerHTML = 0;

    goodCostInStartedCountryValue.innerHTML = "";
    wares.value = selectedLanguage["passengers"];

})

export function buildRoute(firstClickedCountryName,event){
    
    if(startedCountry == firstClickedCountryName){
        let notifyFailureValue = startCountryCannotBeAPartOfRoute(startedCountry);
        Notify.failure(notifyFailureValue);
    }
    else if(!currentRoute.includes(firstClickedCountryName)){
        let selectedTransportTypeToTransfer
            //land type:
            if(lastActiveTransportType[0] == "land"){
                selectedTransportTypeToTransfer = "land";
                if(currentRoute.length == 0){
                    let startLandRouteCountry = countryConnections.land[startedCountry].direct 

                    //check startedCountry neighbors
                    if(startLandRouteCountry[firstClickedCountryName] != null){
                        addToRoute(firstClickedCountryName,startedCountry,selectedTransportTypeToTransfer,event);
                    } else{
                        let notANeighbors = notANeighborsMessage(startedCountry,firstClickedCountryName)
                        Notify.failure(notANeighbors);
                    }
                    
                }else{
                    let lastCountryInRoute = currentRoute[currentRoute.length - 1];
                    let lastCountryInRouteConnections = countryConnections.land[lastCountryInRoute].direct

                    if(lastCountryInRouteConnections[firstClickedCountryName] != null){
                        addToRoute(firstClickedCountryName,startedCountry,selectedTransportTypeToTransfer,event);
                    }else{
                        let notANeighbors = notANeighborsMessage(lastCountryInRoute,firstClickedCountryName)
                        Notify.failure(notANeighbors);
                    }  
                }
            } else if(lastActiveTransportType[0] == "sea"){
                selectedTransportTypeToTransfer = "sea";
                let startSeaRouteCountry = countryConnections.sea[startedCountry]
                if(currentRoute.length > 0){
                    let maritimeRouteFailure = selectedLanguage.maritimeRouteOverSize;
                    blockInfoNotify();
                    Notify.failure(maritimeRouteFailure);
                }
                else if(startSeaRouteCountry[firstClickedCountryName] != null){
                    addToRoute(firstClickedCountryName,startedCountry,selectedTransportTypeToTransfer,event);
                }else if(!listObjects[firstClickedCountryName].accessToWaterReservoirs){
                    let withoutAccessToSeaMessage = withoutAccessToSea(firstClickedCountryName);
                    Notify.failure(withoutAccessToSeaMessage);
                }
            }
    } else if(firstClickedCountryName == currentRoute[currentRoute.length - 1]){
        removeLastElementFromRoute(event,firstClickedCountryName);
    } else{
        let notifyFailureValue = countryAlreadyInRoute(firstClickedCountryName)
        Notify.failure(notifyFailureValue)
    }
}

function countryAlreadyInRoute(firstClickedCountryName){
    blockInfoNotify();
    return selectedLanguage.country + ": <strong>" + selectedLanguage[firstClickedCountryName] + "</strong>, " + selectedLanguage.alreadyAddedToRoute
}

function startCountryCannotBeAPartOfRoute(startedCountry){
    blockInfoNotify();
    return selectedLanguage.cannotAddCountry + ": <strong>" + selectedLanguage[startedCountry] + "</strong> " + selectedLanguage.toRouteBecauseItIsTheStartingCountry
}

function notANeighborsMessage(startedCountry,firstClickedCountryName){
    blockInfoNotify();
    return "<strong>" +selectedLanguage[startedCountry] + "</strong> " + selectedLanguage.isNotANeighborOf +": <strong><i>" +  selectedLanguage[firstClickedCountryName] + "</i></strong>";
}

function withoutAccessToSea(firstClickedCountryName){
    blockInfoNotify();
    return "<strong>" + selectedLanguage[firstClickedCountryName] + "</strong> " + selectedLanguage.doNotHaveAccessToSea
}

function alreadyAllCountriesDeletedFromRoute(){
    blockInfoNotify();
    return selectedLanguage.alreadyAllCountriesDeletedFromRoute;
}

export function translateCurrentRoute(currentRoute){
    cleanCurrentRoute();
    if(temporaryRouteValues.length>0){
        currentRoute = temporaryRouteValues;
    }
    if(currentRoute.length>0){
        for(let nbrInArray in currentRoute){
            let countryName = currentRoute[nbrInArray];
            currentRouteTranslated.push(selectedLanguage[countryName])
                if(!temporaryRouteValues.includes(countryName)){
                temporaryRouteValues.push(countryName)
            }
            route.innerHTML = currentRouteTranslated;
        }
    }
    //translate typeOfTransportValue
    transportTypeValue.innerHTML = selectedLanguage[lastActiveTransportType[0]];


}

wares.addEventListener("change",function(){

    setProperTransportBasedOnGoods();  
    calculateCostValue()
    setProperMeansOfTransport(transportTypeList.value);  

    selectedWare = originNameOfWares.get(wares.value);
    let startCountryObject = listObjects[startedCountry];
    
    availableGoodQuantity = startCountryObject.goodsAvailability[selectedWare];
    goodPriceInStartedCountry = startCountryObject.goodCosts[selectedWare];
    
    goodCostInStartedCountryValue.innerHTML = goodPriceInStartedCountry;
    availableQtyValue.innerHTML = availableGoodQuantity;
    howManyToTransportValue.max = availableGoodQuantity;

        if(currentEndCountryOfTheRoute !=null){
        endCountryObject = listObjects[currentEndCountryOfTheRoute];
        goodPriceInEndCountry = endCountryObject.goodCosts[selectedWare];
        goodCostInEndCountryValue.innerHTML = goodPriceInEndCountry;
    }
        if(howManyToTransportValue.value > availableGoodQuantity){
        howManyToTransportValue.value = availableGoodQuantity;
    }

    if(wares.value == selectedLanguage["passengers"]){
        calculatePassengersForCountry(0,startedCountry)
    }
});

howManyToTransportValue.addEventListener("change",function(){
    restoreMaxAvailableQtyToTransport();
    calculateCostValue();
});

howManyToTransportValue.oninput = function () {
    var max = parseInt(this.max);

    if (parseInt(this.value) > max) {
        this.value = max; 
    }
}



transportTypeList.addEventListener("change",function(){
    originNameOfSelectedTransport = getObjKeysByObjectAndValue(selectedLanguage,transportTypeList.value)[0];
    let lastActiveTransportBeforeChange = lastActiveTransportType[0];
    
    checkWhichTransportType(originNameOfSelectedTransport);
    setProperMeansOfTransport(transportTypeList.value);
    calculateCostValue();

    
    if(lastActiveTransportBeforeChange != lastActiveTransportType[0]){
         cleanCurrentRoute();
         resetCostsAndEarnings();
         distanceRoute = [];
         calculetedRouteDistance = 0;
         routeDistanceValue.innerHTML = calculetedRouteDistance;
     
         for(let i=0; i < clickedCountryTags.length; i++){
             clickedCountryTags[i].parentElement.classList.remove("inRouteBigCountry");
             clickedCountryTags[i].classList.remove("inRouteBorderBigCountry");
             clickedCountryTags[i].parentElement.classList.remove("inRoute");
             clickedCountryTags[i].classList.remove("inRouteBorder");
         };

         clickedCountryTags = [];

        currentEndCountryOfTheRoute = null;
        endCountryOfTheRoute.innerHTML = "";
        goodPriceInEndCountry = 0;
        goodCostInEndCountryValue.innerHTML = 0;
        

    }
})

function blockInfoNotify(){
    blockageForInfoNotify = true;
    setTimeout(allowToDisplayInfoNotify, blockageForInfoNotifyTime);
}

function allowToDisplayInfoNotify(){
    blockageForInfoNotify = false;
}

function setProperMeansOfTransport(transportTypeName){
    let passengersTranslation = selectedLanguage["passengers"];
    let truckTranslation = selectedLanguage["truck"];
    let busTranslation = selectedLanguage["bus"]; 
    let maritimeTranslation = selectedLanguage["maritime"]; 
    let railwayTranslation = selectedLanguage["railway"];

    const transportModel = $(".transportModel");
    transportModel.remove();

    if(transportTypeName == truckTranslation){
        let vechicles = meansOfTransportList[dateValue.year].vechicles.truck
        for(let vehicle in vechicles){
            addOptionsToMeanOfTransport(vehicle);
        }
    } else if(transportTypeName == busTranslation){
        let buses = meansOfTransportList[dateValue.year].vechicles.bus
        for(let bus in buses){
            addOptionsToMeanOfTransport(bus);
        }

    } else if(transportTypeName == maritimeTranslation){
            if(wares.value == passengersTranslation){
                let passengerShips = meansOfTransportList[dateValue.year].maritime.passangerShips
                for(let passengerShip in passengerShips){
                    addOptionsToMeanOfTransport(passengerShip);
                }
            } else {
                let loadShips = meansOfTransportList[dateValue.year].maritime.loadShips
                for(let loadShip in loadShips){
                    addOptionsToMeanOfTransport(loadShip);
                }
            }

    } else if(transportTypeName == railwayTranslation){
        if(wares.value == passengersTranslation){
            let passengerRailways = meansOfTransportList[dateValue.year].trains.passengerTrains
            for(let passengerRailway in passengerRailways){
                addOptionsToMeanOfTransport(passengerRailway);
                
            }
        } else {
            let loadRailways = meansOfTransportList[dateValue.year].trains.loadTrains
            for(let loadRailway in loadRailways){
                addOptionsToMeanOfTransport(loadRailway);
            }
        }
    }
}

function setProperTransportBasedOnGoods(){
    let passengersTranslation = selectedLanguage["passengers"];
    let truckTranslation = selectedLanguage["truck"];
    let busTranslation = selectedLanguage["bus"];
    let railwayTranslation = selectedLanguage["railway"];

    if(transportTypeList.value == railwayTranslation){
        lastActiveTransportType = ["land","railway"];
        setProperMeansOfTransport(selectedLanguage["railway"]);
        calculateCostValue();
    }  

    if(wares.value == passengersTranslation || wares.value == ""){ 
        truckOption.style.display = "none"
        busOption.style.display = ""
        if(transportTypeList.value == truckTranslation){
            transportTypeList.value = busTranslation
            lastActiveTransportType = ["land","bus"];
            setProperMeansOfTransport(selectedLanguage["bus"]);
            calculateCostValue();
        }
    } else {
        truckOption.style.display = ""
        busOption.style.display = "none"
        if(transportTypeList.value == busTranslation){
            transportTypeList.value = truckTranslation
            lastActiveTransportType = ["land","truck"];
            setProperMeansOfTransport(selectedLanguage["truck"]);
            calculateCostValue();
        }
    }
};

function addToRoute(firstClickedCountryName,startedCountry,selectedTransportTypeToTransfer,event){

    currentRoute.push(firstClickedCountryName);
    clickedCountryTags.push(event.target)
    currentRouteTranslated.push(selectedLanguage[firstClickedCountryName]);
    route.innerHTML = currentRouteTranslated;
    currentEndCountryOfTheRoute = currentRoute[currentRoute.length - 1];

    endCountryOfTheRoute.innerHTML = selectedLanguage[currentEndCountryOfTheRoute];
    endCountryObject = listObjects[currentEndCountryOfTheRoute];
    goodPriceInEndCountry = endCountryObject.goodCosts[selectedWare];
    goodCostInEndCountryValue.innerHTML = goodPriceInEndCountry;

    //calculate route distance
    let distance
    if(currentRoute.length == 1){ //first country connected
        if(selectedTransportTypeToTransfer =="land"){
            distance = countryConnections.land[startedCountry].direct[firstClickedCountryName];
            calculetedRouteDistance += distance ;
            distanceRoute.push(distance);
            routeDistanceValue.innerHTML = calculetedRouteDistance;
            
            
        } else if(selectedTransportTypeToTransfer =="sea"){
            distance = countryConnections.sea[startedCountry][firstClickedCountryName];
            calculetedRouteDistance += distance ;
            distanceRoute.push(distance)
            routeDistanceValue.innerHTML = calculetedRouteDistance;
        }

    }else{ //next country connected
        distance = countryConnections.land[currentRoute[currentRoute.length - 2]].direct[firstClickedCountryName];
        calculetedRouteDistance += distance 
        distanceRoute.push(distance);
        routeDistanceValue.innerHTML = calculetedRouteDistance;
    };

    highlightCountry(firstClickedCountryName,event.target);
    if(wares.value == selectedLanguage["passengers"]){
    calculatePassengersForCountry(firstClickedCountryName,startedCountry)
}
    
    calculateCostValue();
    calculateEstimatedTimeOfArrival();
};

function checkWhichTransportType(selectedTransportType){
    if(transportType.land[selectedTransportType] != null){
        transportType.land[selectedTransportType] = true;

        type = lastActiveTransportType[0];
        lastTransportType = transportType[type];
        typeDetail = lastActiveTransportType[1];

        lastTransportType[typeDetail] = false;
        lastActiveTransportType = ["land",selectedTransportType];
        transportTypeValue.innerHTML = selectedLanguage.land;

        // return typeDetail;
    } else if(transportType.sea[selectedTransportType] != null){
        transportType.sea[selectedTransportType] = true;

        type = lastActiveTransportType[0];
        lastTransportType = transportType[type];
        typeDetail = lastActiveTransportType[1];

        lastTransportType[typeDetail] = false;
        lastActiveTransportType = ["sea",selectedTransportType];
        transportTypeValue.innerHTML = selectedLanguage.maritime;

        // return typeDetail;

    } else if(transportType.air[selectedTransportType] != null){
        transportType.air[selectedTransportType] = true;

        type = lastActiveTransportType[0];
        lastTransportType = transportType[type];
        typeDetail = lastActiveTransportType[1];
        
        lastTransportType[typeDetail] = false;
        lastActiveTransportType = ["air",selectedTransportType];
        transportTypeValue.innerHTML = selectedLanguage.air;

        // return typeDetail;
    }
};

function getObjKeysByObjectAndValue(obj, value) {
    return Object.keys(obj).filter(key => obj[key] === value);
  };

  function cleanRouteDistance(){
    distanceRoute = [];
    calculetedRouteDistance = 0;
    routeDistanceValue.innerHTML = calculetedRouteDistance;

    for(let i=0; i < clickedCountryTags.length; i++){
        clickedCountryTags[i].parentElement.classList.remove("inRouteBigCountry");
        clickedCountryTags[i].classList.remove("inRouteBorderBigCountry");
        clickedCountryTags[i].parentElement.classList.remove("inRoute");
        clickedCountryTags[i].classList.remove("inRouteBorder");
    };

    clickedCountryTags = [];

    lastClickedCountryTag.parentElement.classList.remove("inRouteBigCountry");
    lastClickedCountryTag.classList.remove("inRouteBorderBigCountry");
    lastClickedCountryTag.parentElement.classList.remove("inRoute");
    lastClickedCountryTag.classList.remove("inRouteBorder");

   
  };


  function removeLastElementFromRoute(event,firstClickedCountryName){
        if(distanceRoute.length > 0){
        const distanceForLastCountryInRoute = distanceRoute[distanceRoute.length - 1];

        distanceRoute.pop();
        currentRoute.pop();
        currentRouteTranslated.pop();
        clickedCountryTags.pop();
        highlightCountryOff(firstClickedCountryName,event.target)

        if(currentRoute[currentRoute.length - 1] == null){
            endCountryOfTheRoute.innerHTML = "";
            goodCostInEndCountryValue.innerHTML = 0;
            availableQtyValue.innerHTML = 0;
        } else{
            currentEndCountryOfTheRoute = currentRoute[currentRoute.length - 1]; 
            endCountryOfTheRoute.innerHTML = selectedLanguage[currentEndCountryOfTheRoute];
        }
        calculetedRouteDistance -= distanceForLastCountryInRoute;
        routeDistanceValue.innerHTML = calculetedRouteDistance;
        if(wares.value == selectedLanguage["passengers"]){
            calculatePassengersForCountry(currentRoute[currentRoute.length - 1],startedCountry);
        }

        route.innerHTML = currentRouteTranslated;     
        calculateCostValue();
    } else{
        Notify.failure(alreadyAllCountriesDeletedFromRoute());
    }
  };

  function highlightCountry(firstClickedCountryName,tagToHighlight){
    if(bigCountry.includes(firstClickedCountryName)){
        tagToHighlight.parentElement.classList.add("inRouteBigCountry");
        tagToHighlight.classList.add("inRouteBorderBigCountry");
    } else{
        tagToHighlight.parentElement.classList.add("inRoute");
        tagToHighlight.classList.add("inRouteBorder");
    }
  };

  function highlightCountryOff(firstClickedCountryName,tagToHighlightOff){
    if(bigCountry.includes(firstClickedCountryName)){
        tagToHighlightOff.parentElement.classList.remove("inRouteBigCountry");
        tagToHighlightOff.classList.remove("inRouteBorderBigCountry");
    } else{
        tagToHighlightOff.parentElement.classList.remove("inRoute")
        tagToHighlightOff.classList.remove("inRouteBorder")
    }
  };

  function addOptionsToMeanOfTransport(optionValue){
    // originalNameOfVehicles.set(selectedLanguage[vehicle],vehicle)
    let selectedGoodOption = document.createElement('option');
    selectedGoodOption.classList.add('transportModel');
    selectedGoodOption.value = optionValue;

    selectedGoodOption.innerHTML = optionValue;
    meanOfTransport.appendChild(selectedGoodOption);
  };
  

  meanOfTransport.addEventListener("change",function(){    
    calculateCostValue();
  })

  function calculateCostValue(){
    
    let mainTransportTypeName;
    let middleTransportTypeName;
    if(lastActiveTransportType[1] == "bus" || lastActiveTransportType[1] == "truck"){
        mainTransportTypeName = "vechicles"
        middleTransportTypeName = lastActiveTransportType[1];
    } else if(lastActiveTransportType[1] == "railway"){
            mainTransportTypeName = "trains"
            if(wares.value == selectedLanguage.passengers){
                middleTransportTypeName = "passengerTrains"
            } else {
                middleTransportTypeName = "loadTrains"
            }

    }else if(lastActiveTransportType[1] == "maritime"){
        mainTransportTypeName = lastActiveTransportType[1]
        if(wares.value == selectedLanguage.passengers){
            middleTransportTypeName = "passangerShips"
        } else {
            middleTransportTypeName = "loadShips"
        }
    };

    if(wares.value == selectedLanguage.passengers){
        
    }

    displayTransportTypeCapacity(mainTransportTypeName,middleTransportTypeName);
    displayTransportTypeSpeed(mainTransportTypeName,middleTransportTypeName);
    calculateNeededTransportUnits();

    let selectedTransportTypeCost = meansOfTransportList[dateValue.year][mainTransportTypeName][middleTransportTypeName][meanOfTransport.value].cost;
    singularCostValue.innerHTML = selectedTransportTypeCost;
    calculatedCostValue = Math.round(selectedTransportTypeCost * calculetedRouteDistance * neededTransportUnits*100)/100;
    calculatedCostValueTag.innerHTML = calculatedCostValue;

    calculateEarnings();
    displayEarningPanel();
    setPoperTransportTypeImage();
    displayEarningPanel()
  };

  function displayTransportTypeCapacity(mainTransportTypeName,middleTransportTypeName){
    if(middleTransportTypeName == "bus" || middleTransportTypeName == "passangerShips" || middleTransportTypeName == "passengerTrains"){
        capacityOfSelectedTransport = meansOfTransportList[dateValue.year][mainTransportTypeName][middleTransportTypeName][meanOfTransport.value].passengers
        capacityValue.innerHTML = capacityOfSelectedTransport
    } else {
        capacityOfSelectedTransport = meansOfTransportList[dateValue.year][mainTransportTypeName][middleTransportTypeName][meanOfTransport.value].payLoad
        capacityValue.innerHTML = capacityOfSelectedTransport
    }
  };

  function displayTransportTypeSpeed(mainTransportTypeName,middleTransportTypeName){
    speedValueOfSelectedTransport = meansOfTransportList[dateValue.year][mainTransportTypeName][middleTransportTypeName][meanOfTransport.value].speed;
    speedValue.innerHTML = speedValueOfSelectedTransport
  };

  function calculateEarnings(){
   
    if(!isNaN(howManyToTransportValue.value) && !isNaN(goodPriceInStartedCountry) && !isNaN(goodPriceInEndCountry)){
    calculatedIncomeValue = Math.round(((goodPriceInEndCountry - goodPriceInStartedCountry) * howManyToTransportValue.value)*100)/100;
    incomeValue.innerHTML = calculatedIncomeValue;
    };

    if(!isNaN(calculatedIncomeValue) && !isNaN(calculatedCostValue)){
     calculatedProfitValue = Math.round((calculatedIncomeValue - calculatedCostValue)*100)/100;
     profitValue.innerHTML = calculatedProfitValue;
    };

    calculateEstimatedTimeOfArrival();
  };

  function displayEarningPanel(){
    if(calculatedIncomeValue != null && calculatedIncomeValue != 0){
        earnings.classList.remove('earnings--inactive');
        addToRouteImg.classList.remove('addRoute--inactive');
        if(calculatedProfitValue > 0){ //if calculatedProfitValue is bigger than 0 then mark background color on green
            earnings.classList.remove("earningsMinus");
            earnings.classList.add("earningsPlus");
        } else{ //otherwise in red 
            earnings.classList.remove("earningsPlus");
            earnings.classList.add("earningsMinus");
        }
    } else {
        earnings.classList.add('earnings--inactive');
        addToRouteImg.classList.add('addRoute--inactive');
    }
    
  };

  function calculateNeededTransportUnits(){
    neededTransportUnits = howManyToTransportValue.value / capacityOfSelectedTransport ;
    if(Math.ceil(neededTransportUnits) == 0){
        neededTransportUnits = 1;
    } else{
        neededTransportUnits =  Math.ceil(neededTransportUnits);
    };
    neccesseryQtyValue.innerHTML = neededTransportUnits;
  };

  function resetCostsAndEarnings(){
    calculatedCostValue = 0;
    calculatedCostValueTag.innerHTML = calculatedCostValue;
    calculatedProfitValue = 0;
    profitValue.innerHTML = calculatedProfitValue;

    calculatedIncomeValue = 0;
    incomeValue.innerHTML = calculatedIncomeValue;
    displayEarningPanel();
  };

  function setPoperTransportTypeImage(){
    let transportTypeValue = transportTypeList.value;

    if(selectedLanguage["bus"] == transportTypeValue){
        transportTypeImg.src = "/bus-icon.04337034.png"
        transportTypeData.style.backgroundColor = "#c34f7f"
    } else if(selectedLanguage["railway"] == transportTypeValue){
        transportTypeImg.src = "/train-icon.8bd23904.png"
        transportTypeData.style.backgroundColor = "#c40856"
    } else if(selectedLanguage["truck"] == transportTypeValue){
        transportTypeImg.src = "/truck-icon.57ecb994.png"
        transportTypeData.style.backgroundColor = "#863859"
    } else if(selectedLanguage["maritime"] == transportTypeValue){
        transportTypeImg.src = "/ship-icon.dfd19004.png"
        transportTypeData.style.backgroundColor = "#6c58da"
    }
  };

export  function calculateEstimatedTimeOfArrival(){
    neededTimeForTransport = Math.round(calculetedRouteDistance / speedValueOfSelectedTransport);
    travelTimeValue.innerHTML = neededTimeForTransport;
    
    estimatedTimeOfArrival = getDateFromCurrentDatePlusHours(neededTimeForTransport)
    estimatedArrivalValue.innerHTML = estimatedTimeOfArrival[0] + " " + selectedLanguage.hour + ": " + estimatedTimeOfArrival[1];
  }

  function getDateFromCurrentDatePlusHours(plusHours){
    let newDate;
    let plusDays;
    let newHour;
 
    if(time.hour + plusHours > 24){
 
        plusDays = Math.floor((time.hour + plusHours) / 24);
        newHour = addZeroToStringIfValueUnderTen(((time.hour + plusHours)*1) % 24);

        if(dateValue.month == 2 && parseInt(dateValue.day) + parseInt(plusDays) > 28){ //if currently is february and we pass to next month
   
            let dayInNewMonth = plusDays - (28 - dateValue.day);
            newDate = addZeroToStringIfValueUnderTen(dayInNewMonth) + ".03." + dateValue.year
        } else if(dateValue.month == 2 && parseInt(dateValue.day) + parseInt(plusDays) <= 28){
            newDate = addZeroToStringIfValueUnderTen(parseInt(dateValue.day) + parseInt(plusDays)) + "." + dateValue.month + "." + dateValue.year
       
        }
        if(thirtyDayMonths.includes(dateValue.month) && parseInt(dateValue.day) + parseInt(plusDays) > 30){ //if currently is thirty day month and we pass to next one
            let dayInNewMonth = plusDays - (30 - dateValue.day);
            newDate = addZeroToStringIfValueUnderTen(dayInNewMonth) + "." + addZeroToStringIfValueUnderTen(parseInt(dateValue.month) + 1)+ "." + dateValue.year
      
        } else if(thirtyDayMonths.includes(dateValue.month) && parseInt(dateValue.day) + parseInt(plusDays) <= 30){
            newDate = addZeroToStringIfValueUnderTen(parseInt(dateValue.day) + parseInt(plusDays)) + "." + addZeroToStringIfValueUnderTen(dateValue.month) + "." + dateValue.year
       
        }
        if(thirtyOneDayMonths.includes(dateValue.month) && parseInt(dateValue.day) + parseInt(plusDays) > 31){  //if currently is thirtyone day month and we pass to next one
            if(dateValue.month == 12){
                let dayInNewMonth = plusDays - (31 - dateValue.day);
                let nextMonth = '01'
                let nextYear = (dateValue.year + 1)*1
                newDate = addZeroToStringIfValueUnderTen(dayInNewMonth) + "." + nextMonth + "." + nextYear
               
            } else{
                let dayInNewMonth = plusDays - (31 - dateValue.day);
                newDate = addZeroToStringIfValueUnderTen(dayInNewMonth) + "." + addZeroToStringIfValueUnderTen(parseInt(dateValue.month) + 1)  + "." + dateValue.year
              
            }
        } else if(thirtyOneDayMonths.includes(dateValue.month) && parseInt(dateValue.day) + parseInt(plusDays) <= 31){
            newDate = addZeroToStringIfValueUnderTen(parseInt(dateValue.day) + parseInt(plusDays)) + "." + addZeroToStringIfValueUnderTen(dateValue.month) + "." + dateValue.year
            
        }
    } else {
        newDate = dateValue.day + "." + dateValue.month + "." + dateValue.year
        newHour = addZeroToStringIfValueUnderTen(parseInt(time.hour) + parseInt(plusHours));
  
    }

    let dateTimeAfterAddingHours = [newDate,newHour]
    return dateTimeAfterAddingHours;
  };

  function addZeroToStringIfValueUnderTen(intToStringWithZero){
    if(intToStringWithZero < 10){
        intToStringWithZero = "0" + intToStringWithZero;
    } else{
        String(intToStringWithZero);
    }
    return intToStringWithZero;
  }

export function setCostInStartAndInEndCountry(startCountryCost,EndCountryCost){
    goodPriceInStartedCountry = startCountryCost;
    goodPriceInEndCountry = EndCountryCost;

    goodCostInEndCountryValue.innerHTML = goodPriceInEndCountry;
    goodCostInStartedCountryValue.innerHTML = goodPriceInStartedCountry;
};

export function restoreMaxAvailableQtyToTransport(){
    if(howManyToTransportValue.value>availableGoodQuantity){
        howManyToTransportValue.value = availableGoodQuantity;
    }
    if(howManyToTransportValue.value<0){
        howManyToTransportValue.value = 0;
    }   
}

  /////TODO add logic with passangers --> balance costs and profits

  /////////TODO add efect rolling on for transport panel