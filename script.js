console.log('hello!')

var button = document.getElementById("calcButton")

button.addEventListener("click", () => {  
  const num1 = parseInt(document.getElementById("n1").value)
  const num2 = parseInt(document.getElementById("n2").value)
  resValue = num1 + num2 
  const resNode = document.getElementById("resText")
  resNode.innerText = "resultado: " + resValue
  

})
