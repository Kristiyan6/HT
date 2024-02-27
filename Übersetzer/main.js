let containingElement = document.querySelector('.button1');

document.body.addEventListener('click', function( event ){
	if( containingElement.contains( event.target ) )
		alert("Hello World")
});

function clearInput1(){
    var getValue= document.getElementById("myInput1");
      if (getValue.value !="") {
          getValue.value = "";
      }
}

function clearInput2(){
    var getValue= document.getElementById("myInput2");
      if (getValue.value !="") {
          getValue.value = "";
      }
}
