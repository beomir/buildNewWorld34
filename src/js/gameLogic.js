const influenceValue = document.getElementById("influenceValue");
const moneyValue = document.getElementById("moneyValue");

export let influence = 1;
export let money = 5000;
export let companyCosts;
export let companyIncomes;

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


//TODO calculate money
////TODO make a logic for calculate influence
/////TODO make a logic after add route
//////TODO make a option to display current not finished routes
////////TODO make a notification after mouse over on money with summary 