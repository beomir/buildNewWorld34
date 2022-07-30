
import { selectedLanguage } from "./translations";
import {calculateEstimatedTimeOfArrival,addZeroToStringIfValueUnderTen} from './transportPanel'
import {dateValueOnMap} from './map'
import {expireDateTimeOfOngoingRoutes,removeFromExpireDateTimeOfOngoingRoutesMap,checkIfExistsExpiredRoutes} from './gameLogic'

let pulsingInterval;
let pulsingIntervalCounter;
let timeWatch = document.querySelector("#timeWatch");
let pauseClicked = false;

export let dateValue = {
    day: "1",
    month: "1",
    year: "1935"
}

export let time = {
  hour: 0
}

export function calculateDateTime(){
   checkIfExistsExpiredRoutes(addZeroToStringIfValueUnderTen(dateValue.day) + "." + addZeroToStringIfValueUnderTen(dateValue.month) + "." + dateValue.year + "," + addZeroToStringIfValueUnderTen(time.hour));

    time.hour++
    let hourWatch;
    if(time.hour < 10){
      hourWatch = "0" + time.hour
    } else {
      hourWatch =  time.hour;
    }

    timeWatch.innerHTML = selectedLanguage.hour + ": " + hourWatch;

    if((time.hour==23 || time.hour== 11) && pauseClicked == true){
      clockWheel.classList.add("animateDescriptor");
      setTimeout(function() { 
      clockWheel.classList.remove("animateDescriptor");    
    }, 1000); 
    pauseClicked = false;

    }
    if(time.hour==24){
      time.hour = 0;
      dateValue.day++;
      changeDate(dateValue);
        if((dateValue.month == 1 || dateValue.month == 3 || dateValue.month == 5 || dateValue.month == 7 || dateValue.month == 8 || dateValue.month == 10 || dateValue.month == 12) && dateValue == 31){
          if(dateValue.month == 12){
            dateValue.month = 1
            dateValue.year++;
            changeDate(dateValue);
          } else{
          dateValue.month++;
          changeDate(dateValue);
        }
        } else if((dateValue.month == 4 || dateValue.month == 6 || dateValue.month == 9 || dateValue.month == 11) && dateValue.day ==30){
          dateValue.month++;
          changeDate(dateValue);
        } else if(dateValue.month == 2 & dateValue.day == 28){
          dateValue.month++;
          changeDate(dateValue);
        }
    }
    calculateEstimatedTimeOfArrival();
}

function changeDate(dateValue){
  let day;
  let month;
  if(dateValue.day < 10){
    day = "0" + dateValue.day;
  } else {
    day = dateValue.day;
  }
  
  if(dateValue.month < 10 ){
    month = "0" + dateValue.month;
  }
  dateValueOnMap.innerHTML = day + "." + month + "." + dateValue.year;
}

let start = document.querySelector("#start");
const startContainer = document.querySelector("#startContainer"); 
const pause = document.querySelector("#pause"); 
const pauseContainer = document.querySelector("#pauseContainer"); 
const clockWheel = document.querySelector(".hours-container");  
const pauseLaunched = document.querySelector("#pauseLaunched");

start.addEventListener("click", 
function(){ 
    startContainer.style.display = "none";
    pauseContainer.style.display = "";
    clockWheel.style.animationPlayState = 'running';
    pauseLaunched.style.display = "none"
    clearInterval(pulsingInterval);
    calculateDateTimeInterval = setInterval(calculateDateTime,1000)
    
  }
);

pause.addEventListener("click", 
function(){ 
    startContainer.style.display = "";
    pauseContainer.style.display = "none";
    clockWheel.style.animationPlayState = 'paused';
    pauseLaunched.style.display = "inline-block"
    pulsingIntervalCounter = 0;
    pulsingInterval = setInterval(pulsing, 1000);
    clearInterval(calculateDateTimeInterval);
    pauseClicked = true;
  }
);

function pulsing(){
    pulsingIntervalCounter++
    if(pulsingIntervalCounter%2 ==0){
      pauseLaunched.style.transform = 'scale(1)'
  } else {
    pauseLaunched.style.transform = 'scale(1.2)'  

  }
}



