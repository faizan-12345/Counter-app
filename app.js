let num = 0;
const counter = (sign)=>{
    let numbers = document.getElementById("numbers")
    if(sign === "+"){
     num++
  numbers.innerText = num;
    } else if(parseFloat(numbers.innerText) > 0 && sign === "-"){
        num--
     numbers.innerText = num;
    //  console.log(parseFloat(numbers.innerText),numbers.innerText);
       } else{
        alert("cannot decrement while value is 0");
       }
}