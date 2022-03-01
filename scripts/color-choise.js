(function(){

  const elem = document.querySelector('.choice__view__list');
  const iso = new Isotope(elem, {
      itemSelector: '.choice__view__item',
      filter: '.green'
  });

  const controlls = document.querySelectorAll('.choise__color__link');
  const activClass = 'choise__color__item-activ';

  controlls.forEach(function(control) {
    control.addEventListener('click', function(e){
      e.preventDefault();

      const filterName = control.getAttribute("data-filter");

      console.log(filterName);

      controlls.forEach(function(link){
        link.closest('.choise__color__item').classList.remove(activClass);
      })

      control.closest('.choise__color__item').classList.add(activClass);

      iso.arrange({
        filter: `.${filterName}`
      })
    })
  })
})()