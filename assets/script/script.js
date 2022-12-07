function studyMore(x, y){
    var letMeKnow =  x * y / 2;
    return letMeKnow;    
}

var level = 5;
var exp = 100;
var gettingStronger = studyMore(level, exp);
alert(gettingStronger);

function textOfEncouragement(){
    if (gettingStronger >= 250){
        console.log("You are getting better");
    } else {
        console.log("Try harder");
    }
    
}
var text = textOfEncouragement();
console.log(text);