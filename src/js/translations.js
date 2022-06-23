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
        belgue: "Belgia",
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
        theCheapest : "Najtańsze"
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
        belgue: "Belgue",
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
        theCheapest : "The Cheapest"
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
        belgue: "бельгия",
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
        theCheapest : "Самый дешевый"
    }

    
    
let selectedLanguage = polish;

  


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
  }

  function refreshObjectsTranslation(searchedObject){
   
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
          4: selectedLanguage.mechanicalParts
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
        goodCosts: {
            coal: 30,
            steel: 70,
            aluminium: 80,
            copper: 60,
            lead: 50,
            grain: 5,
            oil: 100,
            wine: 35,
            fish: 5,
            flour: 10,
            clothes: 20,
            zinc: 75,
            wolfram: 100,
            mechanicalParts: 150
          },
          goodsAvailability: {
            coal: 100,
            steel: 80,
            aluminium: 50,
            copper: 120,
            lead: 80,
            grain: 1000,
            oil: 300,
            wine: 50,
            fish: 70,
            flour: 80,
            clothes: 90,
            zinc: 15,
            wolfram: 40,
            mechanicalParts: 5
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
        goodCosts: {
            coal: 30,
            steel: 70,
            aluminium: 80,
            copper: 60,
            lead: 50,
            grain: 5,
            oil: 100,
            wine: 35,
            fish: 5,
            flour: 10,
            clothes: 20,
            zinc: 75,
            wolfram: 100,
            mechanicalParts: 150
          },
          goodsAvailability: {
            coal: 100,
            steel: 80,
            aluminium: 50,
            copper: 120,
            lead: 80,
            grain: 1000,
            oil: 300,
            wine: 50,
            fish: 70,
            flour: 80,
            clothes: 90,
            zinc: 15,
            wolfram: 40,
            mechanicalParts: 5
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
          goodCosts: {
            coal: 30,
            steel: 70,
            aluminium: 80,
            copper: 60,
            lead: 50,
            grain: 5,
            oil: 100,
            wine: 35,
            fish: 5,
            flour: 10,
            clothes: 20,
            zinc: 75,
            wolfram: 100,
            mechanicalParts: 150
          },
          goodsAvailability: {
            coal: 100,
            steel: 80,
            aluminium: 50,
            copper: 120,
            lead: 80,
            grain: 1000,
            oil: 300,
            wine: 50,
            fish: 70,
            flour: 80,
            clothes: 90,
            zinc: 15,
            wolfram: 40,
            mechanicalParts: 5
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
          goodCosts: {
            coal: 30,
            steel: 70,
            aluminium: 80,
            copper: 60,
            lead: 50,
            grain: 5,
            oil: 100,
            wine: 35,
            fish: 5,
            flour: 10,
            clothes: 20,
            zinc: 75,
            wolfram: 100,
            mechanicalParts: 150
          },
          goodsAvailability: {
            coal: 100,
            steel: 80,
            aluminium: 50,
            copper: 120,
            lead: 80,
            grain: 1000,
            oil: 300,
            wine: 50,
            fish: 70,
            flour: 80,
            clothes: 90,
            zinc: 15,
            wolfram: 40,
            mechanicalParts: 5
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
          goodCosts: {
            coal: 30,
            steel: 70,
            aluminium: 80,
            copper: 60,
            lead: 50,
            grain: 5,
            oil: 100,
            wine: 35,
            fish: 5,
            flour: 10,
            clothes: 20,
            zinc: 75,
            wolfram: 100,
            mechanicalParts: 150
          },
          goodsAvailability: {
            coal: 100,
            steel: 80,
            aluminium: 50,
            copper: 120,
            lead: 80,
            grain: 1000,
            oil: 300,
            wine: 50,
            fish: 70,
            flour: 80,
            clothes: 90,
            zinc: 15,
            wolfram: 40,
            mechanicalParts: 5
          },
        population: 47
      }
  
       austria = {
        height: 55,
        width: 58,
        specialities: {
          1: goods.additional[3]
          },
          goodCosts: {
            coal: 30,
            steel: 70,
            aluminium: 80,
            copper: 60,
            lead: 50,
            grain: 5,
            oil: 100,
            wine: 35,
            fish: 5,
            flour: 10,
            clothes: 20,
            zinc: 75,
            wolfram: 100,
            mechanicalParts: 150
          },
          goodsAvailability: {
            coal: 100,
            steel: 80,
            aluminium: 50,
            copper: 120,
            lead: 80,
            grain: 1000,
            oil: 300,
            wine: 50,
            fish: 70,
            flour: 80,
            clothes: 90,
            zinc: 15,
            wolfram: 40,
            mechanicalParts: 5
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
          goodCosts: {
            coal: 30,
            steel: 70,
            aluminium: 80,
            copper: 60,
            lead: 50,
            grain: 5,
            oil: 100,
            wine: 35,
            fish: 5,
            flour: 10,
            clothes: 20,
            zinc: 75,
            wolfram: 100,
            mechanicalParts: 150
          },
          goodsAvailability: {
            coal: 100,
            steel: 80,
            aluminium: 50,
            copper: 120,
            lead: 80,
            grain: 1000,
            oil: 300,
            wine: 50,
            fish: 70,
            flour: 80,
            clothes: 90,
            zinc: 15,
            wolfram: 40,
            mechanicalParts: 5
          },
          population: 42
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
        "france" : france

    }
    
    let myObject = listObjects[searchedObject];
    return myObject
  }

