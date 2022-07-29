const numE1 = Math.ceil(Math.random()*10)
const numE2 = Math.ceil(Math.random()*10)
// console.log(numE1);
const text = document.getElementById("question");
const box = document.getElementById("box")
const inputE1 = document.getElementById("tex");
text.innerText= `What is ${numE1} multiply by ${numE2}?`;
const correctAns = numE1 * numE2;
let score = 1;
box. addEventListener("submit", () => {
const userAns = +inputE1.value;
if(userAns === correctAns){
    score++;
console.log(score);
}
else{
    score--;
    console.log(score);
}
});
