import {clickedCountryName, listObjects, hideActionForCountryList, toggleCountryPanelListClicked, toggleClickedCreateTransport,cleanCurrentRoute,currentRoute,currentRouteTranslated} from './map';
import {selectedLanguage} from './translations'
import {countryConnections} from './countryConnections'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const createTransport = document.querySelector("#createTransport")
const createTransportPanel = $(".createTransportPanel")[0];
const countryStartNameValue = $(".countryStartNameValue")[0];
const createTransportPanelSwitchOff = $(".createTransportPanelSwitchOff")[0];

const wares = $(".wares")[0];
const truckOption = document.getElementById("truck");
const busOption = document.getElementById("bus");
const transportTypeList = $(".transportType")[2];

const blockageForInfoNotifyTime = 5000;
export let blockageForInfoNotify = false;
const endCountryOfTheRoute = $(".endCountryOfTheRoute")[1];
let currentEndCountryOfTheRoute;

const route = $(".route")[0];
let temporaryRouteValues = [];
let startedCountry;
const originNameOfWares = new Map();

const goodCostInStartedCountryValue = $(".goodCostInStartedCountryValue")[0];
const goodCostInEndCountryValue = $(".goodCostInEndCountryValue")[0];
const availableQtyValue = $(".availableQtyValue")[0];
let selectedWare;

let endCountryObject;
let goodPriceInEndCountry;
const howManyToTransportValue = document.getElementById("howManyToTransportValue");


createTransport.addEventListener("click", 
function(){ 
    hideActionForCountryList();
    toggleCountryPanelListClicked();
    toggleClickedCreateTransport();
    cleanCurrentRoute();

    setProperTransportBasedOnGoods()

    let myObject = listObjects[clickedCountryName];
    startedCountry = clickedCountryName;
    addAvaiableGoodOptions();
    countryStartNameValue.innerHTML = selectedLanguage[clickedCountryName]
    createTransportPanel.style.visibility = "visible";

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
    createTransportPanel.style.visibility = "hidden";
    cleanCurrentRoute();
    toggleClickedCreateTransport();

    currentEndCountryOfTheRoute = null;
    endCountryOfTheRoute.innerHTML = "";
    goodPriceInEndCountry = "";
    goodCostInEndCountryValue.innerHTML = ""

    howManyToTransportValue.value = 0;
    availableQtyValue.innerHTML = 0;

    goodCostInStartedCountryValue.innerHTML = "";
    wares.value = selectedLanguage["passengers"];

})

export function buildRoute(firstClickedCountryName){
    
    if(startedCountry == firstClickedCountryName){
        let notifyFailureValue = startCountryCannotBeAPartOfRoute(startedCountry);
        Notify.failure(notifyFailureValue);
    }
    else if(!currentRoute.includes(firstClickedCountryName)){
            let clickedCountryConnections = countryConnections.land[firstClickedCountryName].direct
            //check startedCountry neighbors
            if(currentRoute.length == 0){
                let startRouteCountry = countryConnections.land[startedCountry].direct 

                if(startRouteCountry[firstClickedCountryName] != null){
                    addToRoute(firstClickedCountryName);
                } else{
                    let notANeighbors = notANeighborsMessage(startedCountry,firstClickedCountryName)
                    Notify.failure(notANeighbors);
                }
                
            } ///TODO make a if for country durring route
            
            else{
            ///
            addToRoute(firstClickedCountryName);
            // currentRoute.push(firstClickedCountryName);
            // currentRouteTranslated.push(selectedLanguage[firstClickedCountryName]);
            // route.innerHTML = currentRouteTranslated;
            // currentEndCountryOfTheRoute = currentRoute[currentRoute.length - 1];
        
            // endCountryOfTheRoute.innerHTML = selectedLanguage[currentEndCountryOfTheRoute];
            // endCountryObject = listObjects[currentEndCountryOfTheRoute];
            // goodPriceInEndCountry = endCountryObject.goodCosts[selectedWare];
            // goodCostInEndCountryValue.innerHTML = goodPriceInEndCountry;
        }

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

}

wares.addEventListener("change",function(){

    setProperTransportBasedOnGoods();    
    selectedWare = originNameOfWares.get(wares.value);
    let startCountryObject = listObjects[startedCountry];
    let availableGoodQuantity = startCountryObject.goodsAvailability[selectedWare];
    let goodPriceInStartedCountry = startCountryObject.goodCosts[selectedWare];
    
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
})

function blockInfoNotify(){
    blockageForInfoNotify = true;
    setTimeout(allowToDisplayInfoNotify, blockageForInfoNotifyTime);
}

function allowToDisplayInfoNotify(){
    blockageForInfoNotify = false;
}

function setProperTransportBasedOnGoods(){
    let passengersTranslation = selectedLanguage["passengers"];
    let truckTranslation = selectedLanguage["truck"];
    let busTranslation = selectedLanguage["bus"];


    if(wares.value == passengersTranslation || wares.value == ""){
        truckOption.style.display = "none"
        busOption.style.display = ""
        transportTypeList.value = busTranslation
    } else {
        truckOption.style.display = ""
        busOption.style.display = "none"
        transportTypeList.value = truckTranslation
    }
}

function addToRoute(firstClickedCountryName){
    currentRoute.push(firstClickedCountryName);
    currentRouteTranslated.push(selectedLanguage[firstClickedCountryName]);
    route.innerHTML = currentRouteTranslated;
    currentEndCountryOfTheRoute = currentRoute[currentRoute.length - 1];

    endCountryOfTheRoute.innerHTML = selectedLanguage[currentEndCountryOfTheRoute];
    endCountryObject = listObjects[currentEndCountryOfTheRoute];
    goodPriceInEndCountry = endCountryObject.goodCosts[selectedWare];
    goodCostInEndCountryValue.innerHTML = goodPriceInEndCountry;

}