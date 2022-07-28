import {meanOfTransportValue,lastActiveTransportType,checkInformationsAboutTransportPanel,resetCostsAndEarnings,stwitchOffTransportPanel,calculatedCostValue,startedCountry,currentEndCountryOfTheRoute,calculatedProfitValue,estimatedTimeOfArrival,calculatedIncomeValue} from'./transportPanel';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {selectedLanguage} from './translations';
import {currentRoute,dateValue,time} from './map';

const addRoute = document.querySelector(".addRoute");
const influenceValue = document.getElementById("influenceValue");
const moneyValue = document.getElementById("moneyValue");
const moneyValueWithCurrency = document.querySelector(".moneyValueWithCurrency");

const moneyMovementsValue = document.querySelector("#moneyMovementsValue");
const moneyInfo = $(".anChildRight")[0];
const moneyTagName = document.getElementById("money");
const lastOngoingRoutes = document.getElementById("lastOngoingRoutes");

const lastOngoingRoutesValue = document.getElementById("lastOngoingRoutesValue");
const lastMoneyMovements = document.getElementById("lastMoneyMovements");
const lastOngoingRoutesWithValue = document.querySelector(".lastOngoingRoutesWithValue")
const routeMovementsValue = document.getElementById("routeMovementsValue")


let qtyOfCurrentRoutes = 0;
let moneyMovements =[];
let moneyAfterMovement = [];
let dateTimeOfMoneyMovement =[];

export let influence = 1;
export let money = 5000;
export let companyCosts;
export let companyIncomes;

let ongoingRoutes = {
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
let historicalRoutes = {

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
        addRouteToBeOngoing();
    } else{
        Notify.failure(selectedLanguage.theCalculatedCost + ": <strong>" + calculatedCostValue + "</strong> " +  selectedLanguage.isBiggerThanYourFinancialResources + ": <strong>" + money + "</strong>.") 
    }
})

export function addRouteToBeOngoing(){

    // let width = getComputedStyle(moneyValue).width //moneyInfo.width;
    // let height = getComputedStyle(moneyValue).height  //moneyInfo.height;
    // console.log(width);
    // console.log(height);
    ///TODO catch poperly the width and height of tag
    routeMovementsValue.innerHTML = "+1";
    routeMovementsValue.style.right = "430px";
    routeMovementsValue.style.color = "green";
    routeMovementsValue.classList.add("navInformation");
    routeMovementsValue.style.visibility = "visible";

    moneyMovementsValue.innerHTML = calculatedCostValue*(-1);
    moneyMovementsValue.style.right = "55px"
    moneyMovementsValue.style.color = "red";
    moneyMovementsValue.classList.add("navInformation")
    
    moneyMovementsValue.style.visibility = "visible";
    qtyOfCurrentRoutes = Object.keys(ongoingRoutes).length;
    lastOngoingRoutesValue.innerHTML = qtyOfCurrentRoutes;
    let valueForSetTimeOut = 2000;
    
    pushRouteToOngoingObject();
    setBigClassAndSwitchItOff(moneyValueWithCurrency,valueForSetTimeOut);
    setBigClassAndSwitchItOff(lastOngoingRoutesValue,valueForSetTimeOut);
    setDisplayNoneAfterTimeOut(moneyMovementsValue,valueForSetTimeOut);
    setDisplayNoneAfterTimeOut(routeMovementsValue,valueForSetTimeOut);

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

    console.log(moneyAfterMovement);
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
}

moneyValueWithCurrency.addEventListener('mouseover',function(){
    lastMoneyMovements.classList.add("navDropListInformation")

    let checkMoneyMovementsQuantity = moneyMovements.length;
    let lastFive;

    if(checkMoneyMovementsQuantity<5){
        lastFive = 0
    } else{
        lastFive = checkMoneyMovementsQuantity - 5;
    }

    tbl = document.createElement('table');
    tbl.classList.add("lastMoneyTransactions");
    const firstRow = tbl.insertRow();
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.dateTime))
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.transaction))
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.accountBalanceAfterTransaction))

    for(let i=checkMoneyMovementsQuantity;i>lastFive;i--){
        const tr = tbl.insertRow();
        for(let j=0;j<3;j++){
            const td = tr.insertCell();
            if(j==0){
                td.appendChild(document.createTextNode(dateTimeOfMoneyMovement[i-1]));
            } else if(j==1){
                td.appendChild(document.createTextNode(moneyMovements[i-1]));
                if(parseInt(moneyMovements[i-1]) < 0 ){
                    td.color = "red"
                } else if(parseInt(moneyMovements[i-1]) > 0){
                    td.color = "green"
                }
            }else if(j==2){
                td.appendChild(document.createTextNode(moneyAfterMovement[i-1])); 
            }
        }
    }
    lastMoneyMovements.appendChild(tbl)
    
})

moneyValueWithCurrency.addEventListener('mouseout',function(){
    lastMoneyMovements.classList.remove("navDropListInformation")
    const lastMoneyTransactions = $(".lastMoneyTransactions");
    lastMoneyTransactions.remove(); 
})

lastOngoingRoutesWithValue.addEventListener('mouseover',function(){
    lastMoneyMovements.classList.add("navDropListInformation")
    let ongoingRoutesKeys = Object.keys(ongoingRoutes);
    let quantityOfRouteKeys = ongoingRoutesKeys.length;
    let valueForLastFiveMoneyValues = 0;

    tbl = document.createElement('table');
    tbl.classList.add("currentRoutesTable");
    const firstRow = tbl.insertRow();
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.countryStartName))
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.finishCountry))
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.route))
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.cost))
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.income))
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.profit))
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.typeOfTransport))
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.transportMachine))
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.startDateTime))
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.estimatedDateTimeOfArrival))

    if(quantityOfRouteKeys-5>0){
        valueForLastFiveMoneyValues = quantityOfRouteKeys-5;
    } 

    for(let i=quantityOfRouteKeys-1;i>valueForLastFiveMoneyValues;i--){
        const tr = tbl.insertRow();
        let myObj = ongoingRoutes[ongoingRoutesKeys[i]]
        for(let j=0;j<10;j++){
            const td = tr.insertCell();
            if(j==0){
                td.appendChild(document.createTextNode(myObj["startCountry"]));
            } else if(j==1){
                td.appendChild(document.createTextNode(myObj["finishCountry"]));
            } else if(j==2){
                td.appendChild(document.createTextNode(myObj["route"]));
            } else if(j==3){
                td.appendChild(document.createTextNode(myObj["cost"]));
            } else if(j==4){
                td.appendChild(document.createTextNode(myObj["income"]));
            } else if(j==5){
                td.appendChild(document.createTextNode(myObj["profit"]));
                if(parseInt(myObj["profit"]) < 0){
                    td.style.color = "red"
                } else if(parseInt(myObj["profit"]) > 0){
                    td.style.color = "green"
                }   
            } else if(j==6){
                td.appendChild(document.createTextNode(myObj["transportType"]));
            } else if(j==7){
                td.appendChild(document.createTextNode(myObj["transportMachine"]));
            } else if(j==8){
                td.appendChild(document.createTextNode(myObj["startDateTime"]));
            } else if(j==9){
                td.appendChild(document.createTextNode(myObj["estimatedDateTimeOfArrival"]));
            } 
        }
    }
    lastMoneyMovements.appendChild(tbl)
})

lastOngoingRoutesWithValue.addEventListener('mouseout',function(){
    lastMoneyMovements.classList.remove("navDropListInformation")
    const currentRoutesTable = $(".currentRoutesTable");
    currentRoutesTable.remove(); 
})


////TODO make a logic for calculate influence
