
const heading = document.getElementById('heading');
const hour = document.getElementById('hour');
const min = document.getElementById('minute');
const sec = document.getElementById('second');
const stopwatch_btn= document.getElementById('stopwatch-btn');
const clock_btn = document.getElementById('clock-btn');
const stopwatch = document.getElementById('stopwatch');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const restart = document.getElementById('restart');

let h,m,s;
function setTime(){
    const date = new Date();
    h=date.getHours();
    m=date.getMinutes();
    s=date.getSeconds();
}

let interval;
function clock(){
    interval = setInterval(() => {
        s+=1;
        if(s>59){
            m+=1;
            s=0;
        }
        if(m>59){
            h+=1;
            m=0;
        }
        if(h>24){
            h=1;
        }
        sec.innerHTML=s;
        min.innerHTML=m;
        hour.innerHTML=h;
    }, 1000);    
}
setTime();
clock();
stopwatch_btn.addEventListener('click',()=>{
    h=0;m=0;s=0;
    document.title = 'Stop-Watch';
    heading.innerHTML = "Stop-Watch";
    stopwatch.style.display='block';
    stopwatch_btn.style.display='none';
    clock_btn.style.display='inline';
    clearInterval(interval);
    sec.innerHTML=s;
    min.innerHTML=m;
    hour.innerHTML=h;
});

let key = true;
start.addEventListener('click',()=>{
    if(key){
        clock();
        key=false;
    }
});

stop.addEventListener('click',()=>{
    clearInterval(interval);
    key=true;
})
restart.addEventListener('click',()=>{
    clearInterval(interval);
    h=0;m=0;s=0;
    sec.innerHTML=s;
    min.innerHTML=m;
    hour.innerHTML=h;
});

clock_btn.addEventListener('click',()=>{   
    document.title = 'Clock';
    heading.innerHTML = "Clock";
    stopwatch.style.display='none';
    stopwatch_btn.style.display='inline';
    clock_btn.style.display='none';
    setTime();
    clock();
})

