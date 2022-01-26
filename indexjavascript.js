//Functie pentru a aparea text

window.addEventListener('scroll',()=> {
let content = document.querySelector('.WhyUs');
let contentPosition = content.getBoundingClientRect().top;
let screenPosition = window.innerHeight;

if(contentPosition<screenPosition) {
  content.classList.add('active');
}

})


var marker = document.querySelector('#marker');
var item = document.querySelectorAll('.navbartext .Hero1menu');


function indicator(e) {
  marker.style.left = e.offsetLeft+"px";
  marker.style.width = e.offsetWidth+"px";
}

item.forEach(link => {
  link.addEventListener('click', (e)=>{
    indicator(e.target);
  })
})

//checkbox

const checkbox = document.getElementById ('checkbox');

checkbox.addEventListener('change', () => {
if (checkbox.checked == true) {
  document.getElementById('month').innerHTML = 'Per Year';
  document.getElementById('month2').innerHTML = 'Per Year';
  document.getElementById('month3').innerHTML = 'Per Year';

  document.getElementById('sdollar').innerHTML = '$70.60';
  document.getElementById('sdollar2').innerHTML = '$90.30';
  document.getElementById('sdollar3').innerHTML = '$112.40';
} else {
  document.getElementById('month').innerHTML = 'Per month';
  document.getElementById('month2').innerHTML = 'Per month';
  document.getElementById('month3').innerHTML = 'Per month';

  document.getElementById('sdollar').innerHTML = '$2.80';
  document.getElementById('sdollar2').innerHTML = '$4.20';
  document.getElementById('sdollar3').innerHTML = '$7.00';
}
})
