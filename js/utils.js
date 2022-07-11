
// In this code, I use my functions instead of the default ones ("hasClass", "addClass", "removeClass"), because older versions of browsers do not support them.
// TODO: Approve this functions.
(function(){
    window.classFunction = {};

    window.classFunction.hasClass = function(elem, elemClass) {
        return !!elem.className.match(new RegExp('(\\s|^)'+ elemClass +'(\\s|$)'));
    };
    
    window.classFunction.addClass = function(elem, elemClass) {
        if (!window.classFunction.hasClass(elem,elemClass)) elem.className += " " + elemClass;
    };
    
    window.classFunction.removeClass = function(elem, elemClass) {
        if (window.classFunction.hasClass(elem, elemClass)) {
            var reg = new RegExp('(\\s|^)' + elemClass + '(\\s|$)');
            elem.className = elem.className.replace(reg,' ');
        }
    };
})();
window.width = function() {
    var widnowWidth = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
    return widnowWidth;
};
  
window.height = function() {
    var widnowWidth = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    return widnowWidth;
};
  
window.scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
// Checking if the browser supports media queries.
window.isMediaQueriesSupported = function() {
  return (typeof window.matchMedia != 'undefined' || typeof window.msMatchMedia != 'undefined' ||  typeof window.MediaError != 'undefined');
};
// https://habr.com/ru/post/336466/
window.supportsCSS = function (property, value) {
    var element = document.createElement('span');
    if (element.style[property] !== undefined) {
        element.style.cssText = property + ':' + value;
    } else {
        return false;
    }
    return element.style[property] === value;
};
var Keycode = {
    ARROW_DOWN: 40,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_LEFT: 37,
    ENTER: 13,
    ESC: 27,
    SPACE: 32,
    HOME: 36,
    END: 35
}
