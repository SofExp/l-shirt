(function(){

  const elem = document.querySelector('.view-window__list');
  const iso = new Isotope(elem, {
      itemSelector: '.view-window__item',
      filter: '.black'
  });

  const controlls = document.querySelectorAll('.color-selection__link');
  const activClass = 'color-selection__item--active';

  controlls.forEach(function(control) {
    control.addEventListener('click', function(e){
      e.preventDefault();

      const filterName = control.getAttribute("data-filter");

      console.log(filterName);

      controlls.forEach(function(link){
        link.closest('.color-selection__item').classList.remove(activClass);
      })

      control.closest('.color-selection__item').classList.add(activClass);

      iso.arrange({
        filter: `.${filterName}`
      })
    })
  })
})()