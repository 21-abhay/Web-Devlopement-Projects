const equal = document.getElementById('equal');
const clear = document.getElementById('clear');
const back = document.getElementById('back');
const input = document.getElementById('input');
const output = document.getElementById('output');

let eq = ''
let op = ['+','-','*','/'];
let key = false;

function digitOnClick(event){
    const btn = event.target;
    if(op.indexOf(btn.innerHTML)==-1){
        eq += btn.innerHTML;
        key = true;
    }
    else if(key){
        eq += btn.innerHTML;
        key = false;
    }
    input.innerHTML = eq;
}

clear.addEventListener('click',()=>{
    eq=''
    input.innerHTML = eq;
});

back.addEventListener('click',()=>{
    let last = eq[eq.length-1]
    console.log(last);
    if(op.indexOf(last)!=-1){
        key=true;
    }
    eq=eq.slice(0,eq.length-1)
    input.innerHTML = eq;
});

equal.addEventListener('click',()=>{
    if(eq.length && key){
        result = eval(eq);
        output.innerHTML = '= '+result;
    }
});