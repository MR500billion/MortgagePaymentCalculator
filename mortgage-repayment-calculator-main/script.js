
const MortgageAmount = document.getElementById("amountNum");
const MortgageTerm = document.getElementById("MortgageTerm");
const InterestRate = document.getElementById("InterestRate");
const calcBtn = document.getElementById("ButtonCal");
let RadioBorder = document.querySelectorAll(".MortageCLass")
let radio1 = document.getElementById("RadioForm1")
let radio2 = document.getElementById("RadioForm2")
const inputs = document.querySelectorAll('input[type="text"]');
const clearAll = document.getElementById("clearall")
const AmountSpan = document.getElementById("AmountSpan")
const YearsSpan = document.getElementById("YearsSpan")
const RateSpan = document.getElementById("RateSpan")

let ErrorText = document.getElementsByClassName("ErrorText")
clearAll.addEventListener("click",()=>{
  inputs.forEach((clear,index)=>{

    clear.value = ""
    EmptyResult.style.display = 'flex'
    shownResult.style.display ='none';
  
  })


})


const PaymentOverTermLabel = document.getElementById("PaymentOverTermLabel")

MortgageAmount.onkeyup = function() {
  // Remove non-numeric characters
  let cleanedValue = this.value.replace(/[^0-9]/g, "");
  // Format as currency with commas
  let formattedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  this.value = formattedValue;
};
let EmptyResult = document.getElementById("EmptyResult")
let shownResult = document.getElementById("shownResult")

calcBtn.addEventListener("click", () => {
if(MortgageAmount.value===""||MortgageTerm.value===""||InterestRate.value===""&&!radio1.checked&&!radio2.checked){


  inputs.forEach((input,index)=>{

  input.style.borderColor = "red";
 
  
   
    AmountSpan.style.backgroundColor="red"
      AmountSpan.style.color="white"
    YearsSpan.style.backgroundColor="red"
     YearsSpan.style.color="white"
    RateSpan.style.backgroundColor="red"
       RateSpan.style.color="white";
  




})

for(var i =0;i<ErrorText.length;i++){
ErrorText[i].style.display = "block"

}


  
}else if(radio1.checked||!radio2.checked||!MortgageTerm.value===""||!InterestRate.value===""){

  EmptyResult.style.display = 'none'
  shownResult.style.display ='flex';


  for(var i =0;i<ErrorText.length;i++){
    ErrorText[i].style.display = "none"
    
    }
    
   
  
    inputs.forEach((input,index)=>{

      input.style.borderColor = " hsl(200, 26%, 54%)";
     
      
       
      AmountSpan.style.backgroundColor="hsl(202, 86%, 94%)"
      AmountSpan.style.color="black"
    YearsSpan.style.backgroundColor="hsl(202, 86%, 94%)"
     YearsSpan.style.color="black"
    RateSpan.style.backgroundColor="hsl(202, 86%, 94%)"
       RateSpan.style.color="black";
 
      
    
    
    
    
    })

  
  
    

      let P = Number(MortgageAmount.value.replace(/,/g, "")); 
      let N = Number(MortgageTerm.value); 
      let R = Number(InterestRate.value); 
    
      
    
      N = N * 12; 
      R = (R / 100) / 12;
    
      let numerator = R * Math.pow(1 + R, N);
      let denominator = Math.pow(1 + R, N) - 1;
      let monthlyPayment = P * (numerator / denominator);
      monthlyPayment = monthlyPayment.toFixed(2);
      

let MonthlyRepayments = document.getElementById("MonthlyRepayments");
MonthlyRepayments.innerHTML = monthlyPayment;

let yearlyPayment = monthlyPayment*N;
  
    
PaymentOverTermLabel.innerHTML = "Total you'll repay over the term"
let PaymentOverTerm = document.getElementById("PaymentOverTerm").innerHTML=`$${yearlyPayment}`;




     
    }else if(!radio1.checked||radio2.checked||!InterestRate.value===""||!MortgageTerm.value===""){






  EmptyResult.style.display = 'none'
  shownResult.style.display ='flex';
        
        
                 
              let PR = Number(MortgageAmount.value.replace(/,/g, "")); 
              let Rr = Number(InterestRate.value); 
              
          
              Rr = (Rr/100)/12;
          
              let InterestRateResult = PR*Rr
          
              InterestRateResult = InterestRateResult.toFixed(2);
                
        
              MonthlyRepayments.innerHTML = InterestRateResult;
              for(var i =0;i<ErrorText.length;i++){
                ErrorText[i].style.display = "none"
                
                }
                
               
              
                inputs.forEach((input,index)=>{
            
                  input.style.borderColor = " hsl(200, 26%, 54%)";
                 
                  
                   
                  AmountSpan.style.backgroundColor="hsl(202, 86%, 94%)"
                  AmountSpan.style.color="black"
                YearsSpan.style.backgroundColor="hsl(202, 86%, 94%)"
                 YearsSpan.style.color="black"
                RateSpan.style.backgroundColor="hsl(202, 86%, 94%)"
                   RateSpan.style.color="black";
             
                  
                
                
                
                
                })
      
              
    }


  


});











/* 


























/*let MortgageAmount = document.getElementById("amountNum")
let MortgageTerm = document.getElementById("MortgageTerm")
let InterestRate = document.getElementById("InterestRate")
let calcBtn = document.getElementById("ButtonCal")
const radioList = document.querySelectorAll(".RadInputs")


MortgageAmount.onkeyup = function(){ // an onkeyup command listens to when the user clicks a button. it's similar to an onclick function
var removeChar = this.value.replace(/[^0-9.]/g,"")// i can see why this is used. the ^ is used here in this case because in regex rules if that's in the bracket it means we don't want to match the chracters inside that bracket so essentially it's laying out a rule that i want anything but these right here   
var removeDot = removeChar.replace(/\./g,"")
this.value = removeDot

var formatedNumber = this.value.replace(/\B(?=(\d{3})+(?!\d))/g,",")

console.log(formatedNumber)
this.value = formatedNumber

}



calcBtn.addEventListener("click",()=>{

let P = Number(MortgageAmount.value.replace(/,/g,""))//You can put the value of a variable inside the Number() function
//replace method also allows someone to replace a string for something else, pretty self explanatory 
let N = Number(MortgageTerm.value)
let R = Number(InterestRate.value)

N = N*12
R = (R/100)/12

let Numerator = R*Math.pow(1+R,N)
let denominator = Math.pow(1+R,N)-1
let results = P*(Numerator/denominator)
results =results.toFixed(2);// this lets you pick the specific decimal place you would like to round to.

if(MortgageAmount.value===""||MortgageTerm.value===""||InterestRate.value===""){

    alert("Input ")
    let NotGood = true
}




 radioList.forEach((radio,index)=>{

  if(radio.checked){

    alert("hello universe")

  }else{
    alert("input something")
  }
})

})





/*let MortgageAmount = document.getElementById("amountNum")
let MortgageTerm = document.getElementById("test")

let InterestRate = document.getElementById("InterestRate")


let radio = document.querySelectorAll(".MortageCLass");
let calcBtn = document.getElementById("ButtonCal");

calcBtn.addEventListener("click", function() {

let P  = Number(MortgageAmount.value.replace(/,/g, ''))
let N = Number(MortgageTerm.value)
let R = Number(InterestRate.value)
N = N*12
R =(R/100)/12
let numerator = R*Math.pow(1+R,N)
let denominator = Math.pow(1+R,N)-1;

let result = P * (numerator/denominator)
console.log(result)

});
;*/