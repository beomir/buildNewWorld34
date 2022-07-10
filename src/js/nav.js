document.addEventListener("DOMContentLoaded", () => {

    const clock = document.querySelector('.clock');
    const clockStyles = window.getComputedStyle(clock);
    const clockInitialHeight = clockStyles.height;
    const clockInitialWidth = clockStyles.width;

    const yClockPositon = window.scrollY + clock.getBoundingClientRect().top // Y
    // const xClockPositon = window.scrollX + clock.getBoundingClientRect().top // X
    
    const date = document.querySelector('.date');
    const dateStyles = window.getComputedStyle(date);
    const dateFontSize = dateStyles.fontSize;
    const dateValue = document.querySelector('.dateValue');

    const anChildLeft = document.querySelector('.anChildLeft');
    const anChildLeftStyles = window.getComputedStyle(anChildLeft);
    const anChildLeftFontSize = anChildLeftStyles.fontSize;

    let yDateValuePositon = window.scrollY + date.getBoundingClientRect().top // Y
    let yNewPositionOfDate = window.scrollY + anChildLeft.getBoundingClientRect().top // Y

    let scrolled = false;
    const languagesList = document.querySelector(".languagesList");
    const languages = document.getElementById("languages");
    
    
    languages.addEventListener("mouseup", function(){
    hidden = languagesList.getAttribute("hidden")
    if (hidden) {
        languagesList.removeAttribute("hidden");
        
    } else {
        languagesList.setAttribute("hidden", "hidden");
    }
    });


    $(document).ready(function(){
        let Navy = $('.nav').offset().top;

        let ifScrolled = function(){
            let ScrollY = $(window).scrollTop();
            if(ScrollY > Navy){
                if(scrolled == false){

                date.style.position = 'fixed';
                date.style.zIndex = "500";
                date.style.top = yNewPositionOfDate - (yNewPositionOfDate*0.2) + "px"
                dateValue.style.fontSize = anChildLeftFontSize;

                clock.style.zIndex = "101"
                clock.style.height = "15px"
                clock.style.width = "30px"
                clock.style.top = yNewPositionOfDate - (yNewPositionOfDate*0.1) + "px"
                $(".date").addClass("anChildLeft")
            }
                scrolled = true;
            } else {
                date.style.top = yDateValuePositon + "px"
                dateValue.style.fontSize = dateFontSize;
                $(".date").removeClass("anChildLeft");

                clock.style.zIndex = "50"
                clock.style.top = yClockPositon + "px";
                clock.style.height = clockInitialHeight;
                clock.style.width = clockInitialWidth;
                scrolled = false;
            }
        }
        $(window).scroll(function(){
            ifScrolled();
        });
    });
});