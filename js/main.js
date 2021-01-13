
window.onload = function() {
  
  setInterval(function getValue(){
    var text1 = document.getElementById("elem1").value;
    var text2 = document.getElementById("elem2").value;
    var text3 = document.getElementById("elem3").value;
    var el = document.getElementById('textFromInput');
    el.textContent = (`${text1}, ${text2}, ${text3}`); 
  }, 4000);

};
