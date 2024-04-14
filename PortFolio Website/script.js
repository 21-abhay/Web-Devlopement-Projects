

var tablinks = document.querySelectorAll('.tab-links');
var tabcontents = document.querySelectorAll('.tab-contents');

function opentab(tabname){
    // console.log(tabname)
    console.log(tabcontents)
    tablinks.forEach(tablink => {
        tablink.classList.remove('active-link');
    });
    tabcontents.forEach(tabcontent => {
        tabcontent.classList.remove('active-tab');
    });
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabname).classList.add('active-tab')
}

var sidemenu = document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right = '0px';
}
function closemenu(){
    sidemenu.style.right = '-200px';
}
