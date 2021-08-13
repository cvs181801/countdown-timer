//grab elements from DOM
const header = document.querySelector(".timer__header");
const titles = document.querySelectorAll("h1");
const dayItem = document.querySelector(".timer__day");
const hourItem = document.querySelector(".timer__hour");
const minuteItem = document.querySelector(".timer__minute");
const secondItem = document.querySelector(".timer__second");
const dayContainer = document.querySelector(".timer__item--day");
const hourContainer = document.querySelector(".timer__item--hour");
const minContainer = document.querySelector(".timer__item--min");
const secContainer = document.querySelector(".timer__item--sec");

//test area


//make the colors on the header change upon mouse in and out!
header.addEventListener('mouseover', function(e) {
    e.preventDefault();
   titles.forEach(title => {
       title.style.color = "var(--drkGreen)";
       title.style.textShadow = "2px 4px 4px rgba(10, 247, 2, 0.7)";
       title.style.transition = "all 1s ease-in-out";
   })
   
})

header.addEventListener('mouseout', function(e) {
    titles.forEach(title => {
        title.style.color = "orangered";
        title.style.textShadow = "2px 4px 4px rgba(245, 153, 78, 0.7)";
        title.style.transition = "all 1s ease-in-out";
    })
})

//make the countdown timer work
function grandOpeningCounter(start, end) {
    let millisecs = Math.floor (end - start);
    let seconds = Math.floor(millisecs / 1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days = Math.floor(hours/24);
    hours = hours - (days * 24);
    minutes = minutes - (days * 24 * 60) - (hours * 60);
    seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
    dayItem.textContent = `${days} :`;
    dayContainer.append(dayItem);
    hourItem.textContent = `${hours} :`;
    hourContainer.append(hourItem);
    minuteItem.textContent = `${minutes} :`;
    minContainer.append(minuteItem);
    secondItem.textContent = `${seconds}`;
    secContainer.append(secondItem);
    //return `${days} : ${hours} : ${minutes} : ${seconds}`;
}

const startDate = new Date();
console.log(new Date());
const endDate = new Date("September 15, 2021 08:00:00");
console.log(endDate);
console.log(grandOpeningCounter(startDate, endDate));

