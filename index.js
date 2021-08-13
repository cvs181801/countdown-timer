//grab elements from DOM
const header = document.querySelector(".timer__header");
const titles = document.querySelectorAll("h1");

//test area
console.log(header);
console.log(titles);


header.addEventListener('mouseover', function(e) {
    e.preventDefault();
   titles.forEach(title => {
       title.style.color = "var(--drkGreen)";
       title.style.textShadow = "2px 4px 4px rgba(10, 247, 2, 0.7)";
       title.style.transition = "all 1s ease-in-out";
   })
   
})
// color: var(--drkGreen);
//     text-shadow: 2px 4px 4px rgba(10, 247, 2, 0.7);
//     transition: all 1s ease-in-out;

header.addEventListener('mouseout', function(e) {
    titles.forEach(title => {
        title.style.color = "orangered";
        title.style.textShadow = "2px 4px 4px rgba(245, 153, 78, 0.7)";
        title.style.transition = "all 1s ease-in-out";
    })
})