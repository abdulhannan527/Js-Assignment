
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


    function brickCalculator(height){
        var brick = 0;
        if (height <= 10){
            brick = height * 15000;
        }else if (height <= 20){
            var first10Floor = 10 * 15000;
            var remaining = height - 10;
            var second10Floor = remaining * 12000;
            brick = first10Floor + second10Floor;
        } else {
             var first10Floor = 10 * 15000;
             var second10Floor = 10 * 12000;
             var remaining = height - 20;
             var third25Floor = remaining * 10000;
             brick = first10Floor + second10Floor + third25Floor;
        }
        return brick
    }
    var count = brickCalculator(45)
    console.log(count);

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
