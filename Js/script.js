// let Display          = document.querySelector('.Display')
// let errorORsomething = document.querySelector('.errorORsomething')
// let plyerOneName     = document.querySelector('.plyerOneName')
// let firstBT          = document.querySelector('.firstBT')
// let prothomNumber    = document.querySelector('.prothomNumber')
// let doinumber        = document.querySelector('.doinumber')
// let secondBT         = document.querySelector('.secondBT')
// let plyerTowName     = document.querySelector('.plyerTowName')
// let pTwo             = document.querySelector('.pTwo')
// let secondBTg        = document.querySelector('.secondBTg')
// let firstBTg         = document.querySelector('.firstBTg')
// let tinNumber        = document.querySelector('.tinNumber')
// let charNumber       = document.querySelector('.charNumber')
// let plyerOneNameG    = document.querySelector('.plyerOneNameG')
// let plyerTowNameG    = document.querySelector('.plyerTowNameG')
// let gg               = document.querySelector('.gg')
// 
// 
// 
// firstBT.addEventListener('click', () => {
    // Display.innerHTML = plyerOneName.value;
    // prothomNumber.style = 'Display: none;'
    // doinumber.style = 'Display: block;'
// 
// 
// })
// 
// 
// 
// secondBT.addEventListener('click', () => {
    // pTwo.innerHTML = plyerTowName.value;
    // doinumber.style = 'Display: none;'
    // tinNumber.style = 'Display: block;'
// 
// 
// })
// 
// firstBTg.addEventListener("click", () => {
    // if (plyerOneNameG.value == '') {
        // errorORsomething.innerHTML = 'number de . r naile toi sorifsorifa'
    // } else {
        // if (plyerOneNameG.value > 10) {
            // errorORsomething.innerHTML = 'are mofiz number 10 er besi dewa ruls er bayre'
        // } else {
            // errorORsomething.innerHTML = ''
            // plyerOneNameG.style = 'display: none';
            // charNumber.style = 'display:block';
            // gg.style = 'display:block';
        // }
    // }
// })


let Display          = document.querySelector('.Display');
let errorORsomething = document.querySelector('.errorORsomething');
let plyerOneName     = document.querySelector('.plyerOneName');
let firstBT          = document.querySelector('.firstBT');
let prothomNumber    = document.querySelector('.prothomNumber');
let doinumber        = document.querySelector('.doinumber');
let secondBT         = document.querySelector('.secondBT');
let plyerTowName     = document.querySelector('.plyerTowName');
let pTwo             = document.querySelector('.pTwo');
let secondBTg        = document.querySelector('.secondBTg');
let firstBTg         = document.querySelector('.firstBTg');
let tinNumber        = document.querySelector('.tinNumber');
let charNumber       = document.querySelector('.charNumber');
let plyerOneNameG    = document.querySelector('.plyerOneNameG');
let plyerTowNameG    = document.querySelector('.plyerTowNameG');
let gg               = document.querySelector('.gg');

firstBT.addEventListener('click', () => {
    Display.innerHTML = plyerOneName.value;
    prothomNumber.style.display = 'none';
    doinumber.style.display = 'block';
});

secondBT.addEventListener('click', () => {
    pTwo.innerHTML = plyerTowName.value;
    doinumber.style.display = 'none';
    tinNumber.style.display = 'block';
});

firstBTg.addEventListener("click", () => {
    if (plyerOneNameG.value == '') {
        errorORsomething.innerHTML = 'Number de . r naile toi so';
    } else {
        if (plyerOneNameG.value > 10) {
            errorORsomething.innerHTML = 'are mofiz number 10 er';
        } else {
            errorORsomething.innerHTML = '';
            plyerOneNameG.style.display = 'none';
            charNumber.style.display = 'block';
            firstBTg.style.display = 'none';
        }
    }
});




secondBTg.addEventListener("click", () => {
    if (plyerTowNameG.value == '') {
        error.innerHTML = 'number de . r naile toi sorifsorifa'
    }else{
        if (plyerTowNameG.value > 10) {
            errorORsomething.innerHTML = 'are mofiz number 10 er besi dewa ruls er bayre'
        }else {
            errorORsomething.innerHTML = ''
            if(plyerTowNameG.value == input1.value){
                pTwo.style.display = 'block';
            }else{pONE.style.display = 'block';}
        }
    }
})











































































