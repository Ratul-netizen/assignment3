// Github link: https://github.com/Ratul-netizen/assignment3

// Kilometer to meter conversion

function kilometerToMeter(kilometer){
   if(kilometer > 0){   // Validity check
    var meter = kilometer * 1000;
    return meter;
   }
   else{
       return "Invalid Input"
   }
}



// Budget calculation

function budgetCalculator(watch, phone, laptop){
    if(watch > 0 && phone > 0 && laptop > 0){  // validity check
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



// Hotel cost calculation

function hotelCost(days){
    var totalCost = 0;
    
   if(days > 0){  //validity check

    //First condition at per day 100 taka
    if(days <= 10){
        totalCost = days * 100;
    }
    
    // Second condition at per day 80 taka
    else if(days <= 20){
        var firstCost = 10 * 100;
        var secondPhase = days - 10;
        var secondCost = secondPhase * 80;
        totalCost = firstCost + secondCost;
    }

    // Third condition at per day 50 taka
    else{
       var firstCost = 10 * 100;
       var secondCost = 10 * 80;
       var thirdPhase = days - 20;
       var thirdCost = thirdPhase * 50;
       var totalCost = firstCost + secondCost + thirdCost;
    }
    return totalCost;
   }
   else{
       return "Invalid Input";
   }
}
var cost = hotelCost(30);
console.log(cost);

// Mega named friend

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
