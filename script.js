function enterName(){
  var name = document.getElementById("goName");
  
  console.log (name);
  console.log (name.value);
  
  document.getElementById("enterName").innerHTML = " Hi "  +  name.value  + ", How are you? ";
}