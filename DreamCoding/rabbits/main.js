const button = document.querySelector('.btn');
const rabbit = document.querySelector('.rabbit');
button.addEventListener('click', (event) => {     
      
    rabbit.scrollIntoView({ behavior: 'smooth' , block:'center'});
    //scrollTo({ top: 1750, left: 0, behavior: 'smooth' });
})