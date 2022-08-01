import {meanOfTransportValue,lastActiveTransportType,checkInformationsAboutTransportPanel,resetCostsAndEarnings,stwitchOffTransportPanel,calculatedCostValue,startedCountry,currentEndCountryOfTheRoute,calculatedProfitValue,estimatedTimeOfArrival,calculatedIncomeValue,wares} from'./transportPanel';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {selectedLanguage} from './translations';
import {currentRoute,countries,renownIncrease,changePriceOfWare,changeWareAvailableQty} from './map';
import {increaseRelations} from './relations'
import {dateValue,time} from './dateTime';

const addRoute = document.querySelector(".addRoute");
const influenceValue = document.getElementById("influenceValue");
const moneyValue = document.getElementById("moneyValue");
const moneyValueWithCurrency = document.querySelector(".moneyValueWithCurrency");

const moneyMovementsValue = document.querySelector("#moneyMovementsValue");
const influenceMovementsValue = document.querySelector("#influenceMovementsValue");
const moneyInfo = $(".anChildRight")[0];
const moneyTagName = document.getElementById("money");
const lastOngoingRoutes = document.getElementById("lastOngoingRoutes");

const lastOngoingRoutesValue = document.getElementById("lastOngoingRoutesValue");
const routeMovementsValue = document.getElementById("routeMovementsValue");
const howManyToTransportValue = document.getElementById("howManyToTransportValue");
const lastInfluenceIncrease = document.querySelector(".lastInfluenceIncrease");

let maxInfluenceIncrease = 3;
export const expireDateTimeOfOngoingRoutes = new Map(); 
let valueForSetTimeOut = 2000;

let qtyOfCurrentRoutes = 0;
export let moneyMovements =[];
export let moneyAfterMovement = [];
export let dateTimeOfMoneyMovement =[];

export let influence = 1;
export let money = 5000;
export let companyCosts;
export let companyIncomes;

export let ongoingRoutes = {
    0:{
        "startCountry" : "",
        "finishCountry" : "",
        "route" : [],
        "cost": 0,
        "profit": 0,
        "transportType": "",
        "transportMachine": "",
        "startDateTime": "",
        "estimatedDateTimeOfArrival": ""
    }
};
export let historicalRoutes = {

};

setInfluence();
setMoney();

export let transportStock = {
    trucks:{

    },
    buses:{

    },
    trains:{

    },
    ships:{

    },
    planes:{
        
    }
}

function setInfluence(){
    influenceValue.innerHTML = influence;
}

function setMoney(){
    moneyValue.innerHTML = money;
}

addRoute.addEventListener("click",function(){
    let validationOfCostAndMoney = checkInformationsAboutTransportPanel();
    if(validationOfCostAndMoney){
        addRouteToBeOngoing(howManyToTransportValue.value,wares.value);
    } else{
        Notify.failure(selectedLanguage.theCalculatedCost + ": <strong>" + calculatedCostValue + "</strong> " +  selectedLanguage.isBiggerThanYourFinancialResources + ": <strong>" + money + "</strong>.") 
    }
})

export function addRouteToBeOngoing(transportQty,ware){

    let wareName = Object.keys(selectedLanguage).filter(function(key) {return selectedLanguage[key] === ware})[0];
    decreaseWareAndIncreasePriceInStartCountryAfterTransport(transportQty,wareName,startedCountry,currentEndCountryOfTheRoute);
    increaseWareAndDecreasePriceInEndCountryAfterTransport(transportQty,wareName,currentEndCountryOfTheRoute,startedCountry);

    // let width = getComputedStyle(moneyValue).width //moneyInfo.width;
    // let height = getComputedStyle(moneyValue).height  //moneyInfo.height;
    // console.log(width);
    // console.log(height);
    ///TODO catch poperly the width and height of tag
    routeMovementStart();
    moneyMovementStart(calculatedCostValue*(-1),"red");
    increaseInfluence(transportQty);
    renownIncrease(startedCountry,transportQty);
    
    qtyOfCurrentRoutes = Object.keys(ongoingRoutes).length;
    lastOngoingRoutesValue.innerHTML = qtyOfCurrentRoutes;
        
    pushRouteToOngoingObject();
    setBigClassAndSwitchItOff(moneyValueWithCurrency,valueForSetTimeOut);
    setBigClassAndSwitchItOff(lastOngoingRoutesValue,valueForSetTimeOut);
    setBigClassAndSwitchItOff(lastInfluenceIncrease,valueForSetTimeOut);

    setDisplayNoneAfterTimeOut(moneyMovementsValue,valueForSetTimeOut);
    setDisplayNoneAfterTimeOut(routeMovementsValue,valueForSetTimeOut);
    setDisplayNoneAfterTimeOut(influenceMovementsValue,valueForSetTimeOut);

    calculateMoney(calculatedCostValue);
    stwitchOffTransportPanel();
    resetCostsAndEarnings();
    Notify.success("<strong>"+selectedLanguage.routeAddedToOngoing+"</strong>")
};

export function calculateMoney(cost){
    money = money - cost;
    moneyMovements.push(cost*(-1));
    moneyAfterMovement.push(money);
    dateTimeOfMoneyMovement.push(dateValue.day + "." + dateValue.month + "." + dateValue.year + "," + time.hour)
    setMoney();
};

function setBigClassAndSwitchItOff(htmlTag,valueForSetTimeOut){
    htmlTag.classList.remove("markChanges--inactive");
    htmlTag.classList.add("markChanges")

    setTimeout( function() { 
        htmlTag.classList.add("markChanges--inactive"); 
    }, valueForSetTimeOut);
}

function setDisplayNoneAfterTimeOut(htmlTag,valueForSetTimeOut){

    setTimeout( function() { 
        htmlTag.classList.remove("navInformation")
        htmlTag.style.visibility = "hidden"
    }, valueForSetTimeOut);

}

function pushRouteToOngoingObject(){
    let ongoingRoutesKeys = Object.keys(ongoingRoutes);
    let nextKey = ongoingRoutesKeys.length;
    ongoingRoutes[nextKey] = {
        "startCountry" : startedCountry,
        "finishCountry" : currentEndCountryOfTheRoute,
        "route" : currentRoute,
        "cost": parseInt(calculatedCostValue) ,
        "income" : parseInt(calculatedIncomeValue),
        "profit": parseInt(calculatedProfitValue),
        "transportType": lastActiveTransportType[1],
        "transportMachine": meanOfTransportValue,
        "startDateTime": dateValue.day + "." + dateValue.month + "." + dateValue.year + "," + time.hour,
        "estimatedDateTimeOfArrival": estimatedTimeOfArrival
    }

    expireDateTimeOfOngoingRoutes.set(nextKey,estimatedTimeOfArrival)
}


function increaseInfluence(transportQty){
    
    let startCountry = countries[startedCountry];
    let endCountry = countries[currentEndCountryOfTheRoute];

    let togetherPopulation = startCountry["population"] + endCountry["population"];
    let algorithmForInfluence = Math.round((transportQty / (togetherPopulation * 10))*100)/100

    if(algorithmForInfluence>maxInfluenceIncrease){
        algorithmForInfluence = maxInfluenceIncrease;
    }

    influence = Math.round((influence + algorithmForInfluence)*100)/100;
    setInfluence();
    influenceMovementStart(algorithmForInfluence);
    //TODO to write smart logic
}

function equalizeInfluence(){

}

function routeMovementStart(){
    routeMovementsValue.innerHTML = "+1";
    routeMovementsValue.style.right = "430px";
    routeMovementsValue.style.color = "green";
    routeMovementsValue.classList.add("navInformation");
    routeMovementsValue.style.visibility = "visible";
}

function moneyMovementStart(moneyMovement,color){
    moneyMovementsValue.innerHTML = moneyMovement;
    moneyMovementsValue.style.right = "55px"
    moneyMovementsValue.style.color = color;
    moneyMovementsValue.classList.add("navInformation")
    moneyMovementsValue.style.visibility = "visible";
}

function influenceMovementStart(influenceIncrease){
    influenceMovementsValue.innerHTML = "+" + influenceIncrease;
    influenceMovementsValue.style.right = "280px"
    influenceMovementsValue.style.color = "green";
    influenceMovementsValue.classList.add("navInformation")
    influenceMovementsValue.style.visibility = "visible";
}

function removeFromExpireDateTimeOfOngoingRoutesMap(keyRoutesToRemove){
    console.log("removeFromExpireDateTimeOfOngoingRoutesMap stated");
    for(let i=0;i<keyRoutesToRemove.length;i++){
        expireDateTimeOfOngoingRoutes.delete(keyRoutesToRemove[i]);
    }
    
}


export function checkIfExistsExpiredRoutes(dateTime){
    console.log("checkIfExistsExpiredRoutes Started");
    let expiredRoutesKeys = [];
    for (const [key, value] of expireDateTimeOfOngoingRoutes) {
      if(value == dateTime){
        expiredRoutesKeys.push(key);
      }
    }
    if(expiredRoutesKeys.length>0){
        addIncomeFromRoutes(expiredRoutesKeys);
        removeFromExpireDateTimeOfOngoingRoutesMap(expiredRoutesKeys)
        transferRouteFromOngoingToHistorical(expiredRoutesKeys)
    }
}

function addIncomeFromRoutes(routesSettlement){
    console.log("addProfit Started");
    let moneyToAdd = 0;
    for(let i=0;i<routesSettlement.length;i++){
        console.log("income: " + ongoingRoutes[routesSettlement[i]]["income"]);
        moneyToAdd += ongoingRoutes[routesSettlement[i]]["income"];
    }

    money += moneyToAdd;
    moneyValue.innerHTML = money;
    Notify.success(selectedLanguage.routeIsFinished + "." + selectedLanguage.theAccountofTheCompanyWasReceived + ": <strong>" + moneyToAdd + "</strong>");
    moneyMovementStart("+"+moneyToAdd,"green");
    setBigClassAndSwitchItOff(moneyValueWithCurrency,valueForSetTimeOut);
    setDisplayNoneAfterTimeOut(moneyMovementsValue,valueForSetTimeOut);

    moneyMovements.push("+"+moneyToAdd);
    moneyAfterMovement.push(money);
    dateTimeOfMoneyMovement.push(dateValue.day + "." + dateValue.month + "." + dateValue.year + "," + time.hour)
}

function transferRouteFromOngoingToHistorical(routesArrayToTransfer){
    console.log("transferRouteFromOngoingToHistorical started");
    let nextKey = historicalRoutes.length;

    for(let i=0;i<routesArrayToTransfer.length;i++){
        historicalRoutes[nextKey] = {
            "startCountry" : ongoingRoutes[routesArrayToTransfer[i]]["startCountry"],
            "finishCountry" : ongoingRoutes[routesArrayToTransfer[i]]["finishCountry"],
            "route" : ongoingRoutes[routesArrayToTransfer[i]]["route"],
            "cost": ongoingRoutes[routesArrayToTransfer[i]]["cost"] ,
            "income" : parseInt(ongoingRoutes[routesArrayToTransfer[i]]["income"]),
            "profit": parseInt(ongoingRoutes[routesArrayToTransfer[i]]["profit"]),
            "transportType": ongoingRoutes[routesArrayToTransfer[i]]["transportType"],
            "transportMachine": ongoingRoutes[routesArrayToTransfer[i]]["transportMachine"],
            "startDateTime": ongoingRoutes[routesArrayToTransfer[i]]["startDateTime"],
            "estimatedDateTimeOfArrival": ongoingRoutes[routesArrayToTransfer[i]]["estimatedDateTimeOfArrival"]
        }

        delete ongoingRoutes[routesArrayToTransfer[i]];
    }

    qtyOfCurrentRoutes = Object.keys(ongoingRoutes).length -1;
    lastOngoingRoutesValue.innerHTML = qtyOfCurrentRoutes;
  
}

function decreaseWareAndIncreasePriceInStartCountryAfterTransport(transportQty,wareName,startedCountry,endCountry){
   
   changePriceOfWare(transportQty,wareName,startedCountry,1);
   changeWareAvailableQty((transportQty*(-1)),wareName,startedCountry,endCountry);

};

function increaseWareAndDecreasePriceInEndCountryAfterTransport(transportQty,wareName,endCountry,startedCountry){


    changePriceOfWare(transportQty,wareName,endCountry,-1);
    changeWareAvailableQty(Math.ceil((transportQty*0.8)),wareName,endCountry,startedCountry);

};



export let countriesArray = [
    "poland" ,
    "ussr" ,
    "germany",
    "lithuania",
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

