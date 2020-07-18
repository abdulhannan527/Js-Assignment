// var  marks = [45, 45, 455, 54, 44, 598, 747, 447, 54];

// for (var i = 0; i < marks.length; i++) {
//     var element = marks[i];
    
// }
// console.log(marks);

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