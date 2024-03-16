
const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');

let h,m,s;
function setTime(){
    let date= new Date();
    h=date.getHours();
    m= date.getMinutes();
    s= date.getSeconds();
}

function setHands(){
    if(h>12){
        h=h-12;
    }
    let hRotation = h*30 + m*0.1;
    let mRotation = 6*m;
    let sRotation = 6*s;

    hour.style.transform = `rotate(${hRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;

}

setInterval(() => {
    setTime();
    setHands();
}, 1000);
