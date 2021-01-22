// kilometer to meter conversion

function kilometerToMeter(kilometer){
   if(kilometer > 0){
    var meter = kilometer * 1000;
    return meter;
   }
   else{
       return "Invalid Input"
   }
}



// budget calculation

function budgetCalculator(watch, phone, laptop){
    if(watch > 0 && phone > 0 && laptop > 0){
    var price1 = watch * 50;
    var price2 = phone * 100;
    var price3 = laptop * 500;
    var total = price1 + price2 + price3;
    return total;
    }
    else{
        return "Invalid Input"
    }
    
}



// hotel cost calculation

function hotelCost(days){
    var totalCost = 0;
    
   if(days > 0){

    if(days <= 10){
        totalCost = days * 100;
    }
    else if(days <= 20){
        var firstOffer = 10 * 100;
        var secondPhase = days - 10;
        var secondCost = secondPhase * 80;
        totalCost = firstOffer + secondCost;
    }
    else{
       var firstOffer = 10 * 100;
       var secondCost = 10 * 80;
       var thirdPhase = days - 20;
       var thirdCost = thirdPhase * 50;
       var totalCost = firstOffer + secondCost + thirdCost;
    }
    return totalCost;
   }
   else{
       return "Invalid Input";
   }
}


// mega named friend

function megaFriend(names) {

    var longest = names[0];
  
    for(var i = 0; i < names.length; i++) {
        var nameList = names[i];
       if(nameList.length >= longest.length) {
         longest = nameList;
          } 
       }
    return longest;
  }
