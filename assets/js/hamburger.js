const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.logo-and-nav-container');
let clicked = false;


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
        /*const rollDown = document.createElement('a');
        rollDown.innerHTML = "&#x203A;";
        rollDown.className = 'rolldown';*/
        navListLineFirst.innerText = 'Produkty a služby';
        navListLineFirst.setAttribute('href', '/optika-volyne/sluzby/');
        const navListLineSecond = document.createElement('a');
        navListLineSecond.innerText = 'Reference';
        navListLineSecond.setAttribute('href', '/optika-volyne/reference/');
        const navListLineThird = document.createElement('a');
        navListLineThird.innerText = 'Kontakt';
        navListLineThird.setAttribute('href', '/optika-volyne/kontakt/')
        navList.appendChild(navListLineFirst);
        navList.appendChild(navListLineSecond);
        navList.appendChild(navListLineThird);
        //navListLineFirst.after(rollDown);
        hamNav.appendChild(navList);
        /*rollDown.addEventListener('click', function() {
            const subpageList = document.createElement('div');
            subpageList.className = 'subpage-list';
            const subpageFirst = document.createElement('a');
            subpageFirst.innerText = 'Optometrie';
            subpageFirst.setAttribute('href', '/optika-volyne/reference/');
            const subpageSecond = document.createElement('a');
            subpageSecond.innerText = 'Brýle';
            subpageSecond.setAttribute('href', '/optika-volyne/reference/');
            const subpageThird = document.createElement('a');
            subpageThird.innerText = 'Kontaktní čočky';
            subpageThird.setAttribute('href', '/optika-volyne/reference/');
            const subpageFourth = document.createElement('a');
            subpageFourth.innerText = 'Doplňky';
            subpageFourth.setAttribute('href', '/optika-volyne/reference/');
            subpageList.appendChild(subpageFirst);
            subpageList.appendChild(subpageSecond);
            subpageList.appendChild(subpageThird);
            subpageList.appendChild(subpageFourth);
            navListLineFirst.after(subpageList);
            clicked = true;
            rollDown.addEventListener('click', function(e) {
                subpageList.remove();
                clicked = false;
            });
        });*/
    };
    x.classList.toggle("change");
};