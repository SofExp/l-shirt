(function(){
  const li = document.querySelector('li')
  const button_black = document.querySelector('.choise__color__item-black')
  const button_white = document.querySelector('.choise__color__item-white')
  const button_green = document.querySelector('.choise__color__item-green')
  const button_blue = document.querySelector('.choise__color__item-blue')
  const button_red = document.querySelector('.choise__color__item-red')
  const activClass = '.choise__color__item-activ';
  const controlls = document.querySelectorAll('.choise__color__item');
  const activClassVievList = '.choice__view__item--active';
  const controllsVievList = document.querySelectorAll('.choice__view__item');




  button_black.addEventListener('click', function() {
    console.log('чёрный');
    li.closest('choise__color__item').classList.remove(activClass);
    li.closest('choice__view__item').classList.remove(activClassVievList);
    li.closest('choise__color__item-black').classList.add(activClass);
    li.closest('hoice__view__item--black').classList.add(activClassVievList);
  })
  button_white.addEventListener('click', function() {
    console.log('белый');
    li.closest('choise__color__item').classList.remove(activClass);
    li.closest('choice__view__item').classList.remove(activClassVievList);
    li.closest('choise__color__item-white').classList.add(activClass);
    li.closest('choice__view__item--white').classList.add(activClassVievList);
  })
  button_green.onclick = function() {
    console.log('зелёный');
    
  }
  button_blue.onclick = function() {
    console.log('синий');
    
  }
  button_red.onclick = function() {
    console.log('красный');
    
  }
})();

  
  // const controlls = document.querySelectorAll('.choise__color__item');
  // const controllsVievList = document.querySelectorAll('.choice__view__item');
  // const activClass = '.choise__color__item-activ';
  // const activClassVievList = '.choice__view__item--active';

  // controlls.forEach(function(control) {

  //   control.addEventListener('click', function(e){
  //     e.preventDefault();
      
  //     controlls.forEach(function(link){
  //       link.closest('.choise__color__item').classList.remove(activClass);
  //     })
  //     control.closest('.choise__color__item').classList.add(activClass);
      


  //     controllsVievList.forEach(function(link){
  //       link.closest('.choice__view__item').classList.remove(activClassVievList);
  //     })
  //     control.closest('.choice__view__item').classList.add(activClassVievList);
  //     // // Цвет клика?...
  //   })
  // })
