
       // feetToMile Start From Here

function feetToMile(feet){
    var mile = feet / 5280;
        return mile;
    }
    var result = feetToMile(52800);
     console.log(result);



    // woodCalculator Start From Here

  function woodCalculator(chair, table, bed){
            var chairCount = chair * 35.31;
            var tableCount = table * 105.94;
            var bedCount = bed * 176.57;
            var totalWood = chairCount + tableCount + bedCount;
            return totalWood;
    }
      var woodResult = woodCalculator(8, 4, 2);
      console.log(woodResult);


    //    brickCalculator Start From Here


function brickCalculator(n){
    var firstFloor, secondFloor, thirdFloor;

            if(n <= 10){
                var firstFloor = n * 15000;
                return totalResult;
                }
            else if (n == 11 && n <= 20){
                var secondFloor = n * 12000;
                return totalresult;
            }
            else {
                var thirdFloor = n * 10000;
                return totalresult;
            } 
    return Result 
}
var totalResult = brickCalculator(10)
console.log(totalResult);

// tinyFriend Start From Here

 function tinyFriend(names){
     var smaller = names[0];
     for(var i = 0; i < names.length; i++){
         var currentNames = names[i];
         if(currentNames> smaller){
             smaller = currentNames;
         }
     }
     return smaller;
  }
 var smallerNames = tinyFriend(["jolil", "kholil", "abubokkor",  "roni", "rohima", "mannan", "alifkjfj",])
 console.log(smallerNames);
