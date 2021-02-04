const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.logo-and-nav-container');


function myFunction(x) {
    if (document.querySelector('.ham-nav')) {
        document.querySelector('.ham-nav').remove();
    } else {
        const hamNav = document.createElement('div');
        console.log(hamNav);
        hamNav.className = 'ham-nav';
        header.appendChild(hamNav);
        const navList = document.createElement('div');
        const navListLineFirst = document.createElement('a');
        navListLineFirst.innerText = 'O nás';
        navListLineFirst.setAttribute('href', './info/')
        const navListLineSecond = document.createElement('a');
        navListLineSecond.innerText = 'Ceník';
        navListLineSecond.setAttribute('href', './cenik/')
        const navListLineThird = document.createElement('a');
        navListLineThird.innerText = 'Kontakt';
        navListLineThird.setAttribute('href', './kontakt/')
        navList.appendChild(navListLineFirst);
        navList.appendChild(navListLineSecond);
        navList.appendChild(navListLineThird);
        hamNav.appendChild(navList);
    };
    x.classList.toggle("change");
};