// DARK MODE FUNCTIONALITY START

let root = document.querySelector(':root');
let clicks = 0;

function getTheme() {
    let main = getComputedStyle(root).getPropertyValue('--main-color');
    let second = getComputedStyle(root).getPropertyValue('--second-color');
    console.log(main + " " + second);
}

getTheme();

function setTheme() {

    if (getComputedStyle(root).getPropertyValue('--main-color') === 'rgba(117,230,212,1)' || clicks === 0) {
        root.style.setProperty('--main-color', 'rgba(0,0,0,1)');
        root.style.setProperty('--second-color', 'rgba(117,230,212,1)');
        document.getElementsByClassName('navLogo')[0].src = '../img/logo_main.jpg';
        document.getElementsByClassName('navLogo')[1].src = '../img/logo_main.jpg';
        document.getElementsByClassName('landLogo')[0].src = '../img/logo_main_inverted.jpg';
    } else {
        root.style.setProperty('--main-color', 'rgba(117,230,212,1)');
        root.style.setProperty('--second-color', 'rgba(0,0,0,1)');
        document.getElementsByClassName('navLogo')[0].src = '../img/logo_main_inverted.jpg';
        document.getElementsByClassName('navLogo')[1].src = '../img/logo_main_inverted.jpg';
        document.getElementsByClassName('landLogo')[0].src = '../img/logo_main.jpg';
    }
    clicks++;
}

document.getElementById('theme').addEventListener('click',() => {
    setTheme();
});

// DARK MODE FUNCTIONALITY END

