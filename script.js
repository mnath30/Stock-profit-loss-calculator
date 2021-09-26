var initialPrice=document.querySelector("#initial-price");
var quantity=document.querySelector("#quantity");
var currentPrice=document.querySelector("#current-price");
var btn=document.querySelector("#btn");
var result=document.querySelector("#result");

function calculatePercentage(difference,initial){
    var percent=(difference/initial)*100;
    return percent.toFixed(2);

}
function calculateProfitAndLoss(initialvalue,qty,currentvalue){
    var difference;
    var percentage;
    if (((initialvalue<=0) || (currentvalue<=0)) || (qty<=0)){
        result.innerHTML="The values entered should be more than 0";
    }
    else if (initialvalue==currentvalue){
        result.innerHTML=`Hey its neither a profit not a loss 🙂 `;
    }
    else if (initialvalue>currentvalue){
        difference=initialvalue-currentvalue;
        percentage=calculatePercentage(difference,initialvalue);
        difference=difference*qty;
        result.innerHTML=`Sorry its a loss. 
        Loss value is: ${difference} and loss precentage is: ${percentage} % 😢`;
    }
    else{
        difference=currentvalue-initialvalue;
        percentage=calculatePercentage(difference,initialvalue);
        difference=difference*qty;
        result.innerHTML=`Yay its a profit. 
        Profit value is: ${difference} and profit percentage is: ${percentage} % 😄`;
    }

}

function submitHandler(){
    var initialvalue=Number(initialPrice.value).toFixed(2);
    var qty=Math.floor(Number(quantity.value));
    var currentvalue=Number(currentPrice.value).toFixed(2);
    calculateProfitAndLoss(initialvalue,qty,currentvalue);
}

btn.addEventListener("click",submitHandler);