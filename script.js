const boxes = document.getElementsByClassName("box")
const date= new Date(2024,3,14,0,0,0)

let days = date.getDate()
let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()

setInterval(() => {
    if(days!==0 && hours === 0) {
        days-=1
        hours = 24 
        boxes[0].innerText = 13
    } 
    if(hours!==0 && minutes === 0) {
        hours-=1
        minutes = 60
        boxes[1].innerText = hours
    }
    if(minutes!==0 && seconds === 0) { 
       minutes-=1       
       seconds = 60
       boxes[2].innerText = minutes
    }
    if(seconds > 0) {
        seconds -=1
        boxes[3].innerText = seconds
    } 
},1000)