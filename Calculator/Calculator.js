function displnum(n1)
{
calcform.txt1.value=calcform.txt1.value+n1;
}
function square(){
var exp = calcform.txt1.value;
if(exp){
  calcform.txt1.value=exp*exp
}
}
function back(){
  var exp = calcform.txt1.value;
   calcform.txt1.value = exp.substring(0,exp.length-1)
}

function percentage(){
var exp = calcform.txt1.value;
calcform.txt1.value = exp*0.01
}

function factorial(){
var exp = calcform.txt1.value;
var fact = 1;
for(var i=exp; i>=1; i--){
  fact = fact * i;
}
calcform.txt1.value = fact
}

function recipocal(){
var exp =  calcform.txt1.value;
calcform.txt1.value = 1/exp
}
function PI(){
  var exp = calcform.txt1.value;
  if (exp.length === 0) {
    calcform.txt1.value = Math.PI
  }
  else {
  calcform.txt1.value = exp * Math.PI
  }
}

function E(){
  var exp =  calcform.txt1.value;
  if (exp.length === 0) {
    calcform.txt1.value = Math.E
  }
  else {
    calcform.txt1.value = exp * Math.E
  }
}
