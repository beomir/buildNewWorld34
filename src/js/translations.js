import {clickedCountryName,currentRoute} from './map'
import {addAvaiableGoodOptions,translateCurrentRoute} from './transportPanel'


document.addEventListener("DOMContentLoaded", () => {
const languagesListTranslation = document.querySelector(".languagesList");

languagesListTranslation.addEventListener("click",function(e){
    let index = Array.prototype.indexOf.call(languagesListTranslation.children, e.target);
    
    if(index == 0){
        selectedLanguage = polish
        toggleLanguage();
    } else if(index == 1){
        selectedLanguage = english
        toggleLanguage();
    } else if(index == 2){
        selectedLanguage = russian
        toggleLanguage();
    }
  });
});



const   polish = {
        specialization: "Specjalizacja",
        population: "Populacja",
        link0: "Panel gracza",
        link1: "Giełda",
        link2: "Tabor",
        link3: "Kraje",
        polish: "Polski",
        english: "Angielski",
        russian: "Rosyjski",
        selectLanguage: "Wybierz język",
        instruction: "Instrukcja",
        myAchievements: "Moje osiągnięcia",
        srcFlagTranslation: "/pl2.d37abd68.png",
        chosenLanguageTranslation: "Wybrany język",
        poland: "Polska",
        germany: "Niemcy",
        greatBritain: "Wielka Brytania",
        norway: "Norwegia",
        sweden: "Szwecja",
        finland: "Finlandia",
        ussr: "ZSRR",
        czechoslovakia: "Czechosłowacja",
        estonia: "Estonia",
        latvia: "Łotwa",
        lithuania: "Litwa",
        romania: "Rumunia",
        bulgaria: "Bułgaria",
        greece: "Grecja",
        albania: "Albania",
        yugoslavia: "Jugosławia",
        hungary: "Węgry",
        austria: "Austria",
        switzerland: "Szwajcaria",
        italy: "Włochy",
        france: "Francja",
        spain: "Hiszpania",
        portugal: "Portugalia",
        turkey: "Turcja",
        denmark: "Dania",
        netherland: "Holandia",
        belgium: "Belgia",
        milionShortcut: "mln",
        coal: "Węgiel",
        steel: "Stal",
        aluminium: "Aluminium",
        copper: "Miedź",
        lead: "Ołów",
        grain: "Zboże",
        oil: "Ropa",
        wine: "Wino",
        fish: "Ryby",
        flour: "Mąka",
        clothes: "Ubrania",
        zinc: "Cynk",
        wolfram: "Wolfram",
        ideas: "Idee",
        mechanicalParts: "Częsci mechaniczne",
        mostAvailable: "Najbardziej dostępne",
        theLeastAvailable : "Najmniej dostępne",
        theMostExpensive : "Najdroższe",
        theCheapest : "Najtańsze",
        nickel: "Nikiel",
        chrome: "Chrom",
        forestGoods : "Dobra leśne",
        iceland : "Islandia",
        sicily : "Sycylia",
        sardynia : "Sardynia",
        corsica : "Korsyka",
        algieria : "Algieria",
        ireland : "Irlandia",
        irelandNorth : "Irlandia Północna",
        easternPrussia : "Prusy wschodnie",
        pauseLaunched : "Pauza",
        hour: "Godzina",
        createTransport : "Stwórz transport",
        countryMarket : "Rynek krajowy",
        checkCountryDetails : "Zobacz szczegóły kraju",
        truck : "Ciężarowy",
        bus : "Autobusowy",
        railway : "Kolejowy",
        maritime : "Morski",
        air : "Lotniczy",
        countryStartName : "Kraj początkowy",
        typeOfTransport : "Typ transportu",
        wares : "Towary",
        selectWare : "Wybierz towar",
        passengers: "Pasażerowie",
        country: "Kraj",
        alreadyAddedToRoute: "jest już dodany do trasy",
        cannotAddCountry: "Nie można dodać kraju",
        toRouteBecauseItIsTheStartingCountry : "do trasy ponieważ jest on krajem początkowym",
        routeBy : "Trasa przez",
        endCountryOfTheRoute : "Kraj końcowy trasy",
        availableQty : "Dostępna ilość",
        goodCostInStartedCountry : "Cena towaru w kraju startowym" ,
        goodCostInEndCountry : "Cena towaru w kraju końcowym",
        howManyToTransport : "Ile chcesz przetransportować",
        isNotANeighborOf: "nie jest sąsiadem",
        land: "Lądowy",
        transportType: "Rodzaj transportu",
        sea: "Morski",
        maritimeRouteOverSize: "Trasa morska nie może być stworzona z więcej niż 2 krajów",
        doNotHaveAccessToSea: "nie ma dostępu do morza",
        routeDistance: "Długość trasy",
        distanceUnitValue: "km",
        alreadyAllCountriesDeletedFromRoute: "Wszystkie kraje zostały już wycofane z trasy",
        capacity: "Ładowność",
        quantityNeeded : "Potrzebna ilość",
        speedUnitKmH : "km/h",
        speed : "Prędkość",
        estimatedArrival: "Szacowany czas przybycia",
        costFor: "Koszt za",
        calculatedCost : "Koszt wyliczony",
        income : "Dochód",
        profit : "Zysk",
        buses : "Autobusy",
        planes: "Samoloty",
        trucks: "Cięzarówki",
        ships: "Statki",
        trains: "Pociągi",
        influence: "Wpływy",
        money: "Pieniądze",
        theCalculatedCost: "Sumaryczny koszt",
        isBiggerThanYourFinancialResources: "jest większy od Twoich zasobów finansowych",
        decreaseTheCostUnderYourFinancialResourcesAndTryAgain: "Zmniejsz sumaryczny koszt poniżej Twoich zasobów finansowych i spróbuj ponownie",
        everythingLooksFineYoucanAffordThisTransport : "Wszystko wygląda w porządku. Stać Cię na ten transport",
        afterAddCountryToRouteAvailableQtyWasChanged : "Po dodaniu kraju do trasy dostępna ilość towarów została zmieniona na mniejszą niż w okienku ile chcesz przetransportować"
        
    }
    
const   english = {
        specialization: "Specialization",
        population: "Population",
        link0: "Player panel",
        link1: "Stock market",
        link2: "Stock",
        link3: "Countries",
        polish: "Polish",
        english: "English",
        russian: "Russian",
        selectLanguage: "Choose language",
        instruction: "Manual",
        myAchievements: "My Achievements",
        srcFlagTranslation: "/gb2.cce89a59.png",
        chosenLanguageTranslation: "Selected language",
        poland: "Poland",
        germany: "Germany",
        greatBritain: "Great Britain",
        norway: "Norway",
        sweden: "Sweden",
        finland: "Finland",
        ussr: "USSR",
        czechoslovakia: "Czechoslovakia",
        estonia: "Estonia",
        latvia: "Latvia",
        lithuania: "Lithuania",
        romania: "Romania",
        bulgaria: "Bulgaria",
        greece: "Greece",
        albania: "Albania",
        yugoslavia: "Yugoslavia",
        hungary: "Hungary",
        austria: "Austria",
        switzerland: "Switzerland",
        italy: "Italy",
        france: "France",
        spain: "Spain",
        portugal: "Portugal",
        turkey: "Turkey",
        denmark: "Denmark",
        netherland: "Netherland",
        belgium: "Belgium",
        milionShortcut: "mln",
        coal: "Coal",
        steel: "Steel",
        aluminium: "Aluminium",
        copper: "Copper",
        lead: "Lead",
        grain: "Grain",
        oil: "Oil",
        wine: "Wine",
        fish: "Fish",
        flour: "Flour",
        clothes: "Clothes",
        zinc: "Zinc",
        wolfram: "Wolfram",
        ideas: "Ideas",
        mechanicalParts: "Mechanical parts",
        mostAvailable: "Most Available",
        theLeastAvailable : "The Least Available",
        theMostExpensive : "The Most Expensive",
        theCheapest : "The Cheapest",
        nickel: "Nickel",
        chrome: "Chrome",
        forestGoods : "Forest goods",
        iceland : "Iceland",
        sicily : "Sicily",
        sardynia : "Sardinia",
        corsica : "Corsica",
        algieria : "Algeria",
        ireland : "Ireland",
        irelandNorth : "Northern Ireland",
        easternPrussia : "Eastern Prussia",
        pauseLaunched : "Pause",
        hour: "Hour",
        createTransport : "Create transport",
        countryMarket : "Country market",
        checkCountryDetails : "Check country details",
        truck : "Truck",
        bus : "Bus",
        railway : "Railway",
        maritime : "Maritime",
        air : "Air",
        countryStartName : "Country start name",
        typeOfTransport : "Type of transport",
        wares : "Wares",
        selectWare : "Select ware",
        passengers: "Passengers",
        country: "Country",
        alreadyAddedToRoute: "already added to route",
        cannotAddCountry: "Can't add country",
        toRouteBecauseItIsTheStartingCountry : "to the route as it is the starting country",
        routeBy : "Route by",
        endCountryOfTheRoute : "End country of the route",
        availableQty : "Available quantity",
        goodCostInStartedCountry : "The price of the good in the starting country" ,
        goodCostInEndCountry : "The price of the good in the end country",
        howManyToTransport : "How many do you want to transport",
        isNotANeighborOf: "is not a neighbor of",
        land: "Land",
        transportType: "Transport type",
        sea: "Sea",
        maritimeRouteOverSize: "The sea route cannot be composed of more than 2 countries",
        doNotHaveAccessToSea: "do not have access to sea",
        routeDistance: "Route distance",
        distanceUnitValue: "km",
        alreadyAllCountriesDeletedFromRoute: "Already all countries were deleted from route",
        capacity: "Capacity",
        quantityNeeded : "Quantity needed",
        speedUnitKmH : "km/h",
        speed : "Speed",
        estimatedArrival: "Estimated arrival time",
        costFor: "Cost for",
        calculatedCost : "Calculated cost",
        income : "Income",
        profit : "Profit",
        buses : "Buses",
        planes: "Planes",
        trucks: "Trucks",
        ships: "Ships",
        trains: "Trains",
        influence: "Influence",
        money: "Money",
        theCalculatedCost: "The calculated cost",
        isBiggerThanYourFinancialResources: "is bigger than your financial resources",
        decreaseTheCostUnderYourFinancialResourcesAndTryAgain: "Decrease the cost under your financial resources and try again",
        everythingLooksFineYoucanAffordThisTransport : "Everything looks fine. You can afford this transport",
        afterAddCountryToRouteAvailableQtyWasChanged : "After added country to route available quantity was changed on less than in input field how many do you want to transport"
      
    }
    
const   russian = {
        specialization: "Специализация",
        population: "Население",
        link0: "Панель игрока",
        link1: "Фондовый рынок",
        link2: "Запас",
        link3: "Страны",
        polish: "Польский",
        english: "Английский",
        russian: "Русский",
        selectLanguage: "Выберите язык",
        instruction: "Инструкция",
        myAchievements: "мои достижения",
        srcFlagTranslation: "/ru2.a879c3bc.png",
        chosenLanguageTranslation: "Выбранный язык",
        poland: "Польша",
        germany: "Германия",
        greatBritain: "Великобритания",
        norway: "Норвегия",
        sweden: "Швеция",
        finland: "Финляндия",
        ussr: "СССР",
        czechoslovakia: "Чехословакия",
        estonia: "Эстония",
        latvia: "Латвия",
        lithuania: "Литва",
        romania: "Румыния",
        bulgaria: "Болгария",
        greece: "Греция",
        albania: "Албания",
        yugoslavia: "Yugoslavia",
        hungary: "Венгрия",
        austria: "Австрия",
        switzerland: "Швейцария",
        italy: "Италия",
        france: "Франция",
        spain: "Испания",
        portugal: "Португалия",
        turkey: "Турция",
        denmark: "Дания",
        netherland: "Нидерланды",
        belgium: "бельгия",
        milionShortcut: "млн",
        coal: "каменный уголь",
        steel: "стали",
        aluminium: "Алюминий",
        copper: "медь",
        lead: "Oлов",
        grain: "Зерновой",
        oil: "Масло",
        wine: "Вино",
        fish: "Рыбы",
        flour: "Мука",
        clothes: "Одежда",
        zinc: "Цинк",
        wolfram: "Вольфрам",
        ideas: "Идеи",
        mechanicalParts: "Механические части",
        mostAvailable: "Самый доступный",
        theLeastAvailable : "Наименее доступный",
        theMostExpensive : "Самый дорогой",
        theCheapest : "Самый дешевый",
        nickel: "никель",
        chrome: "Хром",
        forestGoods : "Лесные товары",
        iceland : "Исландия",
        sicily : "Сицилия",
        sardynia : "Сардиния",
        corsica : "Корсика",
        algieria : "Алжир",
        ireland : "Ирландия",
        irelandNorth : "Северная Ирландия",
        easternPrussia : "Восточная Пруссия",
        pauseLaunched : "Пауза",
        hour: "Час",
        createTransport : "Создать транспорт",
        countryMarket : "Загородный рынок",
        checkCountryDetails : "Проверить информацию о стране",
        truck : "Грузовая машина",
        bus : "Автобус",
        railway : "Железнодорожный",
        maritime : "морской",
        air : "Воздуха",
        countryStartName : "Начальное название страны",
        typeOfTransport : "Вид транспорта",
        wares : "Товары",
        selectWare : "Выберите продукт",
        passengers: "Пассажиры",
        country: "Страна",
        alreadyAddedToRoute: "уже добавлено в маршрут",
        cannotAddCountry: "Невозможно добавить страну",
        toRouteBecauseItIsTheStartingCountry : "к маршруту, так как это стартовая страна",
        routeBy : "Маршрут по",
        endCountryOfTheRoute : "Kонечная страна маршрута",
        availableQty : "Доступное количество",
        goodCostInStartedCountry : "Цена товара в стартовой стране" ,
        goodCostInEndCountry : "Цена товара в конечной стране",
        howManyToTransport : "Сколько вы хотите перевезти",
        isNotANeighborOf: "не является соседом",
        land: "Земельные участки",
        transportType: "Тип транспорта",
        sea: "морской",
        maritimeRouteOverSize: "Морской путь не может состоять более чем из 2 стран",
        doNotHaveAccessToSea: "не имеют выхода к морю",
        routeDistance: "Расстояние маршрута",
        distanceUnitValue: "км",
        alreadyAllCountriesDeletedFromRoute: "Уже все страны удалены из маршрута",
        capacity: "Вместимость",
        quantityNeeded : "Необходимое количество",
        speedUnitKmH : "км/ч",
        speed : "Скорость",
        estimatedArrival: "Ожидаемое время прибытия",
        costFor: "Стоимость для",
        calculatedCost : "Расчетная стоимость",
        income : "Доход",
        profit : "Прибыль",
        buses : "автобусов",
        planes: "Самолеты",
        trucks: "Фуры",
        ships: "Корабли",
        trains: "Поезда",
        influence: "Влияние",
        money: "Деньги",
        theCalculatedCost: "Расчетная стоимость",
        isBiggerThanYourFinancialResources: "больше, чем ваши финансовые ресурсы",
        decreaseTheCostUnderYourFinancialResourcesAndTryAgain: "Уменьшите стоимость в соответствии с вашими финансовыми ресурсами и повторите попытку",
        everythingLooksFineYoucanAffordThisTransport : "Все выглядит хорошо. Вы можете позволить себе этот транспорт",
        afterAddCountryToRouteAvailableQtyWasChanged : "После добавления страны в маршрут доступное количество было изменено на меньше, чем в поле ввода сколько вы хотите перевезти"
    }

export let selectedLanguage = polish;

  function toggleLanguage(){
      //////catch all ids on site
   const chosenLanguage = document.getElementById("chosenLanguage");
   const tranlationPlayerPanel = document.getElementById("link0");
   const tranlationStockMarket = document.getElementById("link1");
   const tranlationStock = document.getElementById("link2");
   const translationCountries = document.getElementById("link3");
   const translationPolish = document.getElementById("polish");
   const translationEnglish = document.getElementById("english");
   const translationRussian = document.getElementById("russian");
   const translationSelectLanguage = document.getElementById("languages");
   const translationManual = document.getElementById("manual");
   const translationMyAchievements = document.getElementById("myAchievements");
   const pauseLaunched = document.getElementById("pauseLaunched");
   const createTransport = document.getElementById("createTransport");
   const countryMarket = document.getElementById("countryMarket");
   const checkCountryDetails = document.getElementById("checkCountryDetails");

   const truck = document.getElementById("truck");
   const bus = document.getElementById("bus");
   const railway = document.getElementById("railway");
   const maritime = document.getElementById("maritime");
   const air = document.getElementById("air");
   const countryStartName = $(".countryStartName")[0];
   const typeOfTransport =  document.getElementById("typeOfTransport")
   const selectWare =  $(".selectWare")[1];  
   const countryStartNameValue = $(".countryStartNameValue")[0];
   const routeBy = $(".routeBy")[1];
   const endCountryOfTheRoute = $(".endCountryOfTheRoute")[0];
   const availableQty = $(".availableQty")[1];

   const goodCostInEndCountry = $(".goodCostInEndCountry")[1];
   const goodCostInStartedCountry = $(".goodCostInStartedCountry")[1];
   const howManyToTransport = $(".howManyToTransport")[1];
   const transportType = document.getElementById("transportType");

   const routeDistance = $(".routeDistance")[1];
   const distanceUnit = $(".distanceUnit")[1];
   const capacity = $(".capacity")[0];
   const quantityNeeded =  $(".neccesseryQty")[0];
   const speed =  $(".speed")[0];
   const speedUnitKmH = $(".speedUnitKmH")[0];
   const estimatedArrival = $(".estimatedArrival")[0];

   const costFor = $(".singularCost")[0];
   const calculatedCost = $(".calculatedCost")[0];
   const income = $(".income")[0];
   const profit = $(".profit")[0];

   const buses = $(".buses")[0];
   const trucks = $(".trucks")[0];
   const trains = $(".trains")[0];
   const ships = $(".ships")[0];

   const influence = document.getElementById("influence");
   const money = document.getElementById("money");

    chosenLanguage.src = selectedLanguage.srcFlagTranslation;
    chosenLanguage.title = selectedLanguage.chosenLanguageTranslation;
    tranlationPlayerPanel.innerHTML = selectedLanguage.link0;
    tranlationStockMarket.innerHTML = selectedLanguage.link1;
    tranlationStock.innerHTML = selectedLanguage.link2;
    translationCountries.innerHTML = selectedLanguage.link3;
    translationPolish.innerHTML = selectedLanguage.polish;
    translationEnglish.innerHTML = selectedLanguage.english;
    translationRussian.innerHTML = selectedLanguage.russian;
    translationSelectLanguage.innerHTML = selectedLanguage.selectLanguage;
    translationManual.innerHTML = selectedLanguage.instruction;
    translationMyAchievements.innerHTML = selectedLanguage.myAchievements;
    pauseLaunched.innerHTML = selectedLanguage.pauseLaunched;
    createTransport.innerHTML = selectedLanguage.createTransport;
    countryMarket.innerHTML = selectedLanguage.countryMarket;
    checkCountryDetails.innerHTML = selectedLanguage.checkCountryDetails;
    countryStartNameValue.innerHTML = selectedLanguage[clickedCountryName];
    
    truck.innerHTML = selectedLanguage.truck;
    bus.innerHTML = selectedLanguage.bus;
    railway.innerHTML = selectedLanguage.railway;
    maritime.innerHTML = selectedLanguage.maritime;
    air.innerHTML = selectedLanguage.air;
    countryStartName.innerHTML = selectedLanguage.countryStartName;
    typeOfTransport.innerHTML = selectedLanguage.typeOfTransport;
    selectWare.innerHTML = selectedLanguage.selectWare;
    routeBy.innerHTML = selectedLanguage.routeBy;
    endCountryOfTheRoute.innerHTML = selectedLanguage.endCountryOfTheRoute;
    availableQty.innerHTML = selectedLanguage.availableQty;
    goodCostInStartedCountry.innerHTML = selectedLanguage.goodCostInStartedCountry;
    goodCostInEndCountry.innerHTML = selectedLanguage.goodCostInEndCountry;
    howManyToTransport.innerHTML = selectedLanguage.howManyToTransport;
    transportType.innerHTML = selectedLanguage.transportType;

    routeDistance.innerHTML = selectedLanguage.routeDistance;
    distanceUnit.innerHTML = selectedLanguage.distanceUnitValue;
    capacity.innerHTML = selectedLanguage.capacity;
    quantityNeeded.innerHTML = selectedLanguage.quantityNeeded;
    speed.innerHTML = selectedLanguage.speed;
    speedUnitKmH.innerHTML = selectedLanguage.speedUnitKmH;

    estimatedArrival.innerHTML = selectedLanguage.estimatedArrival;
    profit.innerHTML = selectedLanguage.profit;
    costFor.innerHTML = selectedLanguage.costFor ;
    calculatedCost.innerHTML = selectedLanguage.calculatedCost ;
    income.innerHTML = selectedLanguage.income ;

    buses.innerHTML = selectedLanguage.buses;
    trucks.innerHTML = selectedLanguage.trucks;
    ships.innerHTML = selectedLanguage.ships;
    trains.innerHTML = selectedLanguage.trains;

    influence.innerHTML = selectedLanguage.influence;
    money.innerHTML = selectedLanguage.money;
    
    addAvaiableGoodOptions();
    translateCurrentRoute(currentRoute);

  }

  export function refreshObjectsTranslation(searchedObject){
   
     goods ={
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
          4: selectedLanguage.mechanicalParts,
          5: selectedLanguage.chrome,
          6: selectedLanguage.nickel,
          7: selectedLanguage.forestGoods
        }
      }
  
  
      ussr = {
        height: 400,
        width: 310,
        specialities: {
          1: goods.main[1],
          2: goods.main[2],
          3: goods.specific[3],
          4: goods.main[7]
        }, 
        population: 159
      }
  
      germany = {
        height: 188,
        width: 97,
        specialities: {
          1: goods.main[1],
          2: goods.main[2],
          3: goods.specific[3]
        },
        population: 74
      }
  
      lithuania = {
        height: 101, 
        width: 134, 
        specialities: {
          1: goods.additional[2],
          2: goods.additional[3]
        },
        population: 2
      }
  
      poland = {
        height: 298,
        width: 286,
        specialities: {
          1: goods.main[6],
          2: goods.main[7],
          3: goods.additional[3]
          },
          population: 30
      }
  
      czechoslovakia = {
        height: 30,
        width: 120,
        specialities: {
          1: goods.main[2],
          2: goods.main[4],
          3: goods.specific[4]
          },
          population: 13
      }
  
      greatBritain = {
        height: 150,
        width: 120,
        specialities: {
          1: goods.main[1],
          2: goods.main[2],
          3: goods.additional[2],
          4: goods.specific[1]
          },
        population: 47
      }
  
      austria = {
        height: 55,
        width: 58,
        specialities: {
          1: goods.additional[3]
          },
          population: 6.8
      }
  
      france = {
        height: 180,
        width: 180,
        specialities: {
          1: goods.main[1],
          2: goods.main[2],
          3: goods.main[5],
          4: goods.additional[1]
          },
          population: 42
      }

      norway = {
        height: 200,
        width: 68,
        specialities: {
            1: goods.additional[2]
          },
          population: 2.9
      }

      sweden = {
        height: 427.45,
        width: 354.8,
        specialities: {
            1: goods.specific[2],
            2: goods.main[4],
            3: goods.main[2]
          },
          opulation: 6.2
      }

      finland = {
        height: 257.1,
        width: 275,
        specialities: {
           1: goods.specific[6],
           2: goods.additional[2]
          },
          population: 3.5
      }

      latvia = {
        height: 86.1,
        width: 170,
        specialities: {
           1: goods.specific[7]
          },
          population: 1.9
      }
    
      estonia = {
        height: 82.5,
        width: 150,
        specialities: {
           1: goods.additional[2]
          },
          population: 1.1
      }

      romania = {
        height: 330,
        width: 290.4,
        specialities: {
           1: goods.specific[2],
           2: goods.specific[3],
           3: goods.main[2]
           },
           population: 15
      }

      hungary = {
        height: 330,
        width: 290.4,
        specialities: {
          1: goods.specific[2],
          2: goods.specific[3],
          3: goods.main[2]
          },
          population: 8.9
      }

      turkey = {
        height: 330,
        width: 290.4,
        specialities: {
          1: goods.specific[2],
          2: goods.specific[3],
          3: goods.main[2]
          },
          population: 16.2
      }


      yugoslavia = {
        height: 330,
        width: 290.4,
        specialities: {
          1: goods.specific[2],
          2: goods.specific[3],
          3: goods.main[2]
          },
          population: 14
      }

      greece = {
        height: 330,
        width: 290.4,
        specialities: {
          1: goods.specific[2],
          2: goods.specific[3],
          3: goods.main[2]
          },
          population: 6.8
      }

      italy = {
        height: 330,
        width: 290.4,
        specialities: {
          1: goods.specific[2],
          2: goods.specific[3],
          3: goods.main[2]
          },
          population: 42
      }

     spain = {
        height: 330,
        width: 290.4,
        specialities: {
          1: goods.specific[2],
          2: goods.specific[3],
          3: goods.main[2]
          },
          population: 24
     }

    portugal = {
       height: 330,
       width: 290.4,
       specialities: {
          1: goods.specific[2],
          2: goods.specific[3],
          3: goods.main[2]
          },
          population: 7.1
    }
  
    bulgaria = {
       height: 330,
       width: 290.4,
       specialities: {
          1: goods.specific[2],
          2: goods.specific[3],
          3: goods.main[2]
          },
          population: 6.3
   }
                    
    denmark = {
       height: 110,
       width: 105.6,
       specialities: {
          1: goods.additional[2]
          },
          population: 3.7
   }
              
    belgium = {
       height: 110,
       width: 105.6,
       specialities: {
          1: goods.additional[2]
          },
          population: 8.3
    }

    netherland = {
       height: 110,
       width: 105.6,
       specialities: {
          1: goods.additional[2]
          },
          population: 8.3
    }

    albania = {
       height: 78.7,
       width: 100,
       specialities: {
          1: goods.additional[2]
          },
          population: 1
    }

    iceland = {
       height: 123.5,
       width: 260,
       specialities: {
          1: goods.additional[2]
          },
          population: 0.5
    }

    switzerland = {
       height: 80,
       width: 45.6,
       specialities: {
         1: goods.additional[2]
         },
         population: 4.1
    }

    sicily = {
      height: 54.2,
      width: 80,
      specialities: {
        1: goods.additional[2]
        },
        population: 4
    }

    sardynia = {
      height: 80,
      width: 53.6,
      specialities: {
        1: goods.additional[2]
        },
        population: 1
    }

    corsica = {
      height: 55,
      width: 34.65,
      specialities: {
        1: goods.additional[2]
        },
        population: 0.2
    }

    algieria = {
      height: 95.2,
      width: 280,
      specialities: {
        1: goods.additional[2]
        },
        population: 7
    }

    irelandNorth = {
      height: 95.2,
      width: 280,
      specialities: {
        1: goods.additional[2]
        },
        population: 1.3
    }

    ireland = {
      height: 95.2,
      width: 280,
      specialities: {
        1: goods.additional[2]
        },
        population: 3
    }

    easternPrussia = {
      height: 155,
      width: 139.5,
      specialities: {
        1: goods.additional[2]
        },
        population: 2.5
    }
    
      listObjects = {
        "goods" : goods,
        "ussr" : ussr,
        "germany" : germany,
        "lithuania" : lithuania,
        "poland" : poland,
        "czechoslovakia" : czechoslovakia,
        "greatBritain" : greatBritain,
        "austria" : austria,
        "france" : france,
        "norway" : norway,
        "finland" : finland,
        "sweden" : sweden,
        "latvia" : latvia,
        "estonia" : estonia,
        "romania" : romania,
        "hungary" : hungary,
        "yugoslavia" : yugoslavia,
        "bulgaria" : bulgaria,
        "turkey" : turkey,
        "greece" : greece,
        "italy" : italy,
        "spain" : spain,
        "portugal" : portugal,
        "denmark" : denmark,
        "belgium" : belgium,
        "netherland" : netherland,
        "albania" : albania,
        "iceland" : iceland,
        "switzerland" : switzerland,
        "sicily" : sicily,
        "sardynia" : sardynia,
        "corsica" : corsica,
        "algieria" : algieria,
        "irelandNorth" : irelandNorth,
        "ireland" : ireland,
        "easternPrussia" : easternPrussia
    }

    let myObject = listObjects[searchedObject];
    return myObject
  }

