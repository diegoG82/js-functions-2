// SCOPE
// let user = "Maria";
// 
// function myFunction() {
//     console.log(user);
//     let firstNumber = 0;
// }
// 
// myFunction();

// let a = 'ciao';
// let c;
// miaFunzione();
// 
// function miaFunzione() {
//     console.log(a); // "Ciao"
//     const b = 'buongiorno';
// 
//     if (true) {
//         console.log(b); // buongiorno
//         c =  'buonasera';
//     }
// 
//     console.log(c); // errore
// }

// THIS

// function myFunction() {
//     console.log(this);
// }

// document.querySelector("button").addEventListener("click", function() {
//     document.querySelector("h1").style.color = "green";
//     console.log(this);
//     this.style.backgroundColor = "red";
// });

// 
// document.querySelector("button").addEventListener("click", handleClick);
// 
// const boxes = document.getElementsByClassName("box");
// 
// for (let i = 0; i < boxes.length; i++) {
//     const currentBox = boxes[i];
//     currentBox.addEventListener("click", handleClick);
// }
// 
// // FUNCTIONS
function handleClick() {
    // this.style.backgroundColor = "red";
    this.classList.toggle("red");
}


// 3. Create element
// Inserire 4 li dinamicamente
const list = document.querySelector("ul");

for (let i = 0; i < 4; i++) {
    const myItem = createListItem(`Item # ${i}`);
    myItem.addEventListener("click", handleClick);
    list.append(myItem);
}

function createListItem(innerText) {
    const newLi = document.createElement("li");
    newLi.innerText = innerText;
    newLi.classList.add("item");
    return newLi;
}
