import {checkInformationsAboutTransportPanel,calculatedCostValue} from'./transportPanel';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {selectedLanguage} from './translations';

const addRoute = document.querySelector(".addRoute");
const influenceValue = document.getElementById("influenceValue");
const moneyValue = document.getElementById("moneyValue");

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
    
    Notify.success("Route added to ongoing")
}

//TODO calculate money
////TODO make a logic for calculate influence
/////TODO make a logic after add route
//////TODO make a option to display current not finished routes
////////TODO make a notification after mouse over on money with summary 