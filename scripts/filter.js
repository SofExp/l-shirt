(function(){

  const elem = document.querySelector('.products__list');
  const iso = new Isotope(elem, {
    itemSelector: '.products__item',
    filter: '.popular'
  });

  const controlls = document.querySelectorAll('.filter__link');
  const activClass = 'filter__item--active';

  controlls.forEach(function(control) {

    control.addEventListener('click', function(e){
      e.preventDefault();

      const filterName = control.getAttribute("data-filter");

      controlls.forEach(function(link){
        link.closest('.filter__item').classList.remove(activClass);
      })

      control.closest('.filter__item').classList.add(activClass)

      iso.arrange({
        filter: `.${filterName}`
      })
    })
  })

})();