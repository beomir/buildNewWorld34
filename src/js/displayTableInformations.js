import {selectedLanguage} from './translations'
import {ongoingRoutes,moneyMovements,moneyAfterMovement,dateTimeOfMoneyMovement} from './gameLogic'

const moneyValueWithCurrency = document.querySelector(".moneyValueWithCurrency");
const lastMoneyMovements = document.getElementById("lastMoneyMovements");
const lastOngoingRoutesWithValue = document.querySelector(".lastOngoingRoutesWithValue")

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
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.endCountryOfTheRoute))
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.route))
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.cost))
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.income))
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.profit))
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.typeOfTransport))
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.transportType))
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.startDateTime))
    firstRow.insertCell().appendChild(document.createTextNode(selectedLanguage.estimatedArrival))

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