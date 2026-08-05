# Projects related to dom

## project link
[click to see projects](https://stackblitz.com/edit/dom-project-chaiaurcode-htkaxb76)



```Js small projects code 1
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