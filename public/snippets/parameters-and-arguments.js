const greenify = function(el) {
  el.setAttribute('style', 'background-color: green');
};

greenify(document.querySelectorAll("THEAD TR")[0]);