
const name_input = document.getElementById('name-input');
const fname_input = document.getElementById('f.name-input');
const roll_input = document.getElementById('roll-no-input');
const enrl_input = document.getElementById('enrl-no-input');
const roll = document.getElementById('roll-no');
const enrl = document.getElementById('enrl-no');
const name = document.getElementById('name');
const fname = document.getElementById('f.name');


const input = document.querySelectorAll('.input');
const data = document.querySelectorAll('.data');

const btn_degree = document.querySelector('.btn-degree');
const btn_generate = document.querySelector('.btn-generate');

const print = document.getElementById('print');
const generate = document.getElementById('generate');
const new_degree = document.getElementById('new-degree');


generate.addEventListener('click',()=>{
    if(name_input.value && fname_input.value && roll_input.value && enrl_input.value){
        name.textContent = name_input.value;
        fname.textContent = fname_input.value;
        roll.textContent = roll_input.value;
        enrl.textContent = enrl_input.value;

        data.forEach((element,index)=>{
            data[index].style.display = 'block';
            input[index].style.display = 'none';
        });

        btn_degree.style.display = 'block';
        btn_generate.style.display = 'none';
    }
});


print.addEventListener('click',()=>{
    btn_degree.style.display = 'none';
    window.print();
    btn_degree.style.display = 'block';
});

new_degree.addEventListener('click',()=>{
    location.reload();
});
