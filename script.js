
let X = Math.floor(Math.random() * 10);
console.log(X)

let j = 3;





const win = () => { document.getElementById('Result').innerText = "Correct Guess"; }
const tryAgain = () => {
    j--;
    if (j > 0)
        document.getElementById('Result').innerText = "Try Again " + j + " Chance left";
    else
        document.getElementById('Result').innerText = "Better Luck next time ";
}

let i = 1;
let boxes = document.getElementsByClassName("box");
let a = Array.from(boxes);
for (let element of a) {
    let boxtext = element.querySelector('.boxtext');
    do {
        element.addEventListener('click', () => {
            if (boxtext.innerText == X) {

                win();
            }
            else {
                tryAgain();

            }
        })
        i++;
    } while (i <= 3);
}