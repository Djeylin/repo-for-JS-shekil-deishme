function turnOn(){
document.getElementById('bulb') .src = 'bulb on.jpeg'
}
function turnOff(){
document.getElementById('bulb') .src = 'bubl off 2.jpg'
}

let isOn = false;
function toggle(){
    if(isOn){
turnOff()
    } else{
        turnOn()
    }
    isOn = !isOn;
}