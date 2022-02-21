(function(){

  const controlls = document.querySelectorAll('.choise__size__step');
  const activClass = 'choise__size__step-activ';


  controlls.forEach(function(control) {

    control.addEventListener('click', function(e){
      e.preventDefault();
      
      controlls.forEach(function(link){
        link.closest('.choise__size__step').classList.remove(activClass);
      })
      control.closest('.choise__size__step').classList.add(activClass)
      
    })
  })

})();