(function(){

  const controlls = document.querySelectorAll('.choise__color__item');
  const controllsVievList = document.querySelectorAll('.choice__view__item');
  const activClass = 'choise__color__item-activ';
  const activClassVievList = 'choice__view__item--active';

  controlls.forEach(function(control) {

    control.addEventListener('click', function(e){
      e.preventDefault();
      
      controlls.forEach(function(link){
        link.closest('.choise__color__item').classList.remove(activClass);
      })
      control.closest('.choise__color__item').classList.add(activClass)
      

      controllsVievList.forEach(function(link){
        link.closest('.choice__view__item').classList.remove(activClassVievList);
      })
      control.closest('.choice__view__item').classList.add(activClassVievList)
      // Цвет клика?...
    })
  })

})();