
var Menu = {
  RESPONSIVE_BREAKPOINT: 1024
};

(function() {
  if(document.addEventListener && window.isMediaQueriesSupported()) {
    var mainMenuContainer = document.querySelector('.header__main-menu-container');
    var burgerButtonContainer = document.querySelector('.header__main-menu-burger');
    var burgerButton = document.createElement('button');
    window.classFunction.addClass(burgerButton, 'burger__button');
    burgerButton.setAttribute('id', 'burger-button');
    burgerButton.setAttribute('aria-haspopup', 'true');
    burgerButton.setAttribute('aria-expanded', 'false');
    burgerButton.setAttribute('aria-label', 'Open menu');
    burgerButton.setAttribute('style', 'background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjBIMzBWMTYuNjY2N0gwVjIwWk0wIDExLjY2NjdIMzBWOC4zMzMzM0gwVjExLjY2NjdaTTAgMFYzLjMzMzMzSDMwVjBIMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");');
    burgerButtonContainer.appendChild(burgerButton);

    var firstLink = mainMenuContainer.querySelector('.main-menu__link');

    // TODO: chacge comment for aria atributes.
    function toggleDropdownMenu() {
      if(burgerButton.getAttribute('aria-expanded') === 'true') { // If menu is already opened (check 'aria-expanded' attribute).
        burgerButton.setAttribute('aria-expanded', 'false');
        burgerButton.setAttribute('aria-label', 'Open menu');
        burgerButton.setAttribute('style', 'background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjBIMzBWMTYuNjY2N0gwVjIwWk0wIDExLjY2NjdIMzBWOC4zMzMzM0gwVjExLjY2NjdaTTAgMFYzLjMzMzMzSDMwVjBIMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");');
        window.classFunction.removeClass(mainMenuContainer, 'header__main-menu-container--opened');
        document.removeEventListener('click', window.emptySpaceClick);
      } else {
        burgerButton.setAttribute('aria-expanded', 'true');
        burgerButton.setAttribute('aria-label', 'Close menu');
        burgerButton.setAttribute('style', 'background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMwIDIuMDE0MjlMMjYuOTc4NiAwTDE1IDcuOTg1NzFMMy4wMjE0MyAwTDAgMi4wMTQyOUwxMS45Nzg2IDEwTDAgMTcuOTg1N0wzLjAyMTQzIDIwTDE1IDEyLjAxNDNMMjYuOTc4NiAyMEwzMCAxNy45ODU3TDE4LjAyMTQgMTBMMzAgMi4wMTQyOVoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");');
        window.classFunction.addClass(mainMenuContainer, 'header__main-menu-container--opened');
        document.addEventListener('click', window.emptySpaceClick);
      }
    };

    burgerButton.addEventListener('click', toggleDropdownMenu);

    // We handle not only a click, but also pressing Enter/Space.
    burgerButton.addEventListener('keydown', function(event) {
      if(event.keyCode === Keycode.SPACE || event.keyCode === Keycode.ENTER) {
        event.preventDefault();
        toggleDropdownMenu();

        if(burgerButton.getAttribute('aria-expanded') === 'true') {
          firstLink.focus();
        } else {
          burgerButton.focus();
        }
      }

      if(event.keyCode === Keycode.ESC && burgerButton.getAttribute('aria-expanded') === 'true') {
        window.closeDropdownMainMenu();
      }
    });
  }
})();

(function() {
  // If there is an anchor link in the menu, clicking on it should close the menu.
  var mainMenuContainer = document.getElementById('main-menu-container');
  var mainMenuLinks = mainMenuContainer.getElementsByTagName('a');
  var windowWidth = window.width();

  for (var i = 0; i < mainMenuLinks.length; i++) {
      mainMenuLinks[i].onclick = function() {
          if(window.isMediaQueriesSupported() && windowWidth < Menu.RESPONSIVE_BREAKPOINT) {
              window.closeDropdownMainMenu();
          }
      }
  }
})();

(function() {
  if(document.querySelector && window.isMediaQueriesSupported()) { // This function is only need if there is support for media queries.
      var burgerButton = document.querySelector('.burger__button');
      var mainMenuContainer = document.querySelector('.header__main-menu-container');
      
      window.closeDropdownMainMenu = function() {
          burgerButton.setAttribute('aria-expanded', 'false');
          burgerButton.setAttribute('aria-label', 'Open menu');
          burgerButton.setAttribute('style', 'background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAzMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjBIMzBWMTYuNjY2N0gwVjIwWk0wIDExLjY2NjdIMzBWOC4zMzMzM0gwVjExLjY2NjdaTTAgMFYzLjMzMzMzSDMwVjBIMFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=");');
          window.classFunction.removeClass(mainMenuContainer, 'header__main-menu-container--opened');
          document.removeEventListener('click', window.emptySpaceClick);
      }
  }
})();

window.emptySpaceClick = function(){
  if (event.stopPropagation) {
      event.stopPropagation();
      var header = document.querySelector('.header');
      var burger = document.querySelector('.burger__button');
      var target = event.target;
      var isHeader = target == header || header.contains(target);
      var isBurger = target == burger;
  
      if(!isHeader && !isBurger) {
          window.closeDropdownMainMenu();
      }
  }
};