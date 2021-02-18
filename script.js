function updateTextInput()
{
var slider = document.getElementById("r");
var output = document.getElementById("rate");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}
}
function compute()

{
    p = document.getElementById("p").value;
    n = document.getElementById("n").value;
    r = document.getElementById("r").value;
    result = document.getElementById("result");
                
    result.innerHTML = "The interest is " + (p*n*r/100);
}
