(function(){

  const controlls = document.querySelectorAll('.size-selection__item');
  const activClass = 'size-selection__item--active';


  controlls.forEach(function(control) {

    control.addEventListener('click', function(e){
      e.preventDefault();
      
      controlls.forEach(function(link){
        link.closest('.size-selection__item').classList.remove(activClass);
      })
      control.closest('.size-selection__item').classList.add(activClass)
      
    })
  })

})();