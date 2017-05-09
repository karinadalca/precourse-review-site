const removeFirstRowEl = document.getElementById("btn-nuke-first-row");

removeFirstRowEl.addEventListener('click', function (evt) {
  const rows = document.querySelectorAll("TBODY TR");
  for(let index = 0; index < rows.length; index++){
    if(document.querySelectorAll("TBODY TR")[index].textContent !== ""){
      document.querySelectorAll("TBODY TR")[index].textContent = "";
      break;
    }
  }
});