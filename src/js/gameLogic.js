import {checkInformationsAboutTransportPanel,calculatedCostValue,resetCostsAndEarnings,stwitchOffTransportPanel,calculatedCostValue} from'./transportPanel';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {selectedLanguage} from './translations';

const addRoute = document.querySelector(".addRoute");
const influenceValue = document.getElementById("influenceValue");
const moneyValue = document.getElementById("moneyValue");
const moneyValueWithCurrency = document.querySelector(".moneyValueWithCurrency");

const navInformation = document.querySelector(".navInformation--inacvtive");
const moneyInfo = $(".anChildRight")[0];

export let influence = 1;
export let money = 5000;
export let companyCosts;
export let companyIncomes;

let ongoingRoutes = {

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
    navInformation.innerHTML = calculatedCostValue*(-1);
    navInformation.style.right = "55px"
    navInformation.classList.add("navInformation")
    navInformation.style.visibility = "visible"

    let valueForSetTimeOut = 2000;

    setBigClassAndSwitchItOff(moneyValueWithCurrency,valueForSetTimeOut);
    
    setDisplayNoneAfterTimeOut(navInformation,valueForSetTimeOut+gi500);
    
    calculateMoney(calculatedCostValue);
    stwitchOffTransportPanel();
    resetCostsAndEarnings();

    Notify.success("<strong>"+selectedLanguage.routeAddedToOngoing+"</strong>")
};

export function calculateMoney(cost){
    money = money - cost;
    setMoney();
};

function setBigClassAndSwitchItOff(htmlTag,valueForSetTimeOut){

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

//TODO calculate money
////TODO make a logic for calculate influence
/////TODO make a logic after add route
//////TODO make a option to display current not finished routes
////////TODO make a notification after mouse over on money with summary 