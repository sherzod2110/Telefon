var elInput1 = document.querySelector ("#form__input1");
var elInput2 = document.querySelector ("#form__input2");
var elInput3 = document.querySelector ("#form__input3");


var elInput4 = document.querySelector ("#form__input4");
var elOutput = document.querySelector (".output")
var elBtn = document.querySelector (".wrapper__btn");
var massage = "" ;

elBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  var akkum = elInput1.checked;
  var kamera = elInput2.checked;
  var vid = elInput3.checked;
  var ekran = elInput4.checked;

  if ((akkum && kamera && vid && ekran) || (kamera && vid && !ekran && !akkum) || (kamera && vid && ekran && !akkum)) {
    massage = "Yaxshi, Olaman";  
  }
  else {
    massage = "Yoq, olmayman"
  }
  elOutput.textContent = massage
})