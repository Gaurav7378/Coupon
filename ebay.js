// For Light and Dark Mode
function changeMode() {
    let mybody = document.body;
    mybody.classList.toggle('Dark')
}

// for coupon

function loadCoupon() {
    document.getElementById('pop-up-main').style.opacity = '1';
    document.getElementById('popup').style.visibility = 'Visible';
}

function closeCoupon() {
    document.getElementById('pop-up-main').style.opacity = '0';
    document.getElementById('popup').style.visibility = 'hidden';
}