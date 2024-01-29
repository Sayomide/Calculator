let thescreen = document.querySelector(".screen");
let thesin = document.querySelector("#sin");
let thecos = document.querySelector("#cos");
let thetan = document.querySelector("#tan");
let thepi = document.querySelector("#pi");
let thesqt = document.querySelector("#sqt");
let thelog = document.querySelector("#log");
let thepow = document.querySelector("#pow");

// needed to work here probably prevent default, brackets and others
//let thetedt =document.createTextNode(This is the co.)
let fortheb = document.querySelector('#letsgoforb')
//fortheb.onclick = () => {
//  console.log('yes you click it');}

function e() {
  let e = 'e';
  const ex = document.querySelector("#e");
  
  function handleClick() {
    thescreen.value += "e";
    e = 2.71828183;
    ex.removeEventListener('click', handleClick);
  }
  ex.addEventListener('click', handleClick);
}

function openb() {
  let openb = document.querySelector('#open')
  .addEventListener('click', ()=> {
    console.log('you click it though')
    thescreen.value += '('
    if (thescreen.value == "(" ) {
    thescreen.value += "*" }
  })
}
/*
function sin() {
    thesin.addEventListener('click', () => {
      let angle = parseFloat(thescreen.value);
      let radians = angle * (Math.PI / 180);
      thescreen.value = Math.sin(radians);
    });
  }
 */ 
 /*
function sin() {
  thesin.addEventListener('click', ()=>{
    thescreen.value = Math.sin(thescreen.value);
  })
}
*/
function cos() {
     thescreen.value = Math.cos(thescreen.value  * (180/ Math.PI));
}

function tan() {
       thescreen.value = Math.tan(thescreen.value * (180/Math.PI));
}

function sqt() {
    thescreen.value = Math.sqrt(thescreen.value);
}

function pow() {
    thescreen.value = Math.pow(thescreen.value, 2);
}

function log() {
    thescreen.value = Math.log10(thescreen.value);
}

function pi() {
  thepi.addEventListener('click', ()=> {
    thescreen.value = Math.PI;
  })
}

document.querySelector("#last2").addEventListener("click", ()=> {
  if(thescreen.value == ''){
    return;
  }else {
thescreen.value = eval(thescreen.value);
  }
})
//localStorage.setItem('first', '5')
//localStorage.setItem('second', '15')
//localStorage.setItem('third', '35')
//console.log(localStorage);


/*
function multiplyByTwo(value) {
const result = value * 2
 return result;
 }
 console.log(multiplyByTwo(40));
*/
