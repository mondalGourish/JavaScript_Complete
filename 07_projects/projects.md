# Projects related to dom

## project link
[click to see projects](https://stackblitz.com/edit/dom-project-chaiaurcode-htkaxb76)


## solution 1
```Js
//first we have to select the items that the body and the buttons
const button = document.querySelectorAll(".button")
const body = document.querySelector("body")

//now we want that for any click in the button the background color chnage
//for this we need click events
button.forEach(function (btn){
  console.log(btn)
  btn.addEventListener('click',function(event){
    console.log(event)
    console.log(event.target)
    if(event.target.id == 'grey'){
      body.style.backgroundColor = event.target.id
    }
    if(event.target.id == 'white'){
      body.style.backgroundColor = event.target.id
    }
    if(event.target.id == 'blue'){
      body.style.backgroundColor = event.target.id
    }
    if(event.target.id == 'yellow'){
      body.style.backgroundColor = event.target.id
    }
  })
})
```
## solution 2
```js
//we have to select the form to make chnages
const form = document.querySelector("form")
//now we have to add event Listenener to track any changes
form.addEventListener("submit",function(eve){
  eve.preventDefault(); //to stop any kind of default action of form

  //we get the value in string and have to convert in integer
  let height = parseInt(document.querySelector("#height").value)
  let weight = parseInt(document.querySelector("#weight").value)
  let result = document.querySelector("#results")

  //logic for checks
  if(height === "" || height < 0 || isNaN(height)){
    result.innerHTML = `Enter a valid heigth ${height}`;
  }else if(weight === "" || weight < 0 || isNaN(weight)){
    result.innerHTML = `Enter a valid weight ${weight}`;  
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let message = ""; 
    let color = "";
    if(bmi<18.6){
      message = `You are underweight`
      color = "yellow"
    }else if (bmi > 18.6 && bmi < 24.9){
      message = `You are in Normal Range`
      color = "green"
    }else{
      message = `You are over weight`
      color = "red"
    }

    result.innerHTML = `
    <h3>Your BMI is ${bmi}</h3>
    <span style = "color : ${color}; font-weigth : bold">${message}</span>`
  }
})
```
## solution 3
```js
let clock = document.querySelector("#clock")

//we are gating another function set Interval to get given time interval update
setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString()
},1000)
```
## solution 4
```js
```
## solution 5
```js
const insert = document.querySelector("#insert")
window.addEventListener("keydown",(event)=>{
  console.log(event)
  insert.innerHTML = `
  <table>
  <tr>
    <th>Key</th>
    <th>Key Code</th>
    <th>COde</th>
  </tr>
  <tr>
    <td>${event.key === " " ? "space" : event.key}</td>
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
  </tr>
</table>
  `
})
```
## solution 6
```js
//generate random color
function randomColor() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}
let intervalId = null;
//executing the login in the function
const startChangingColor = function () {
  if (!intervalId) {
    console.log('started');
    intervalId = setInterval(changeColor, 1000);
  }
  //function to change color
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  console.log('stopped');
  clearInterval(intervalId);
  intervalId = null;
};

//now we have to add functionality to the buttons
document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);


//there was a edge case where after starting once we can again start and again an so on, so to solve this problem we used the intervalId = null, once stopped and it will start again only when the intervalId is null
```