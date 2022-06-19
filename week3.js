// step 1

//a
let ages = [3,9,23,64,2,8,28,93];

console.log(ages[ages.length - 1] - ages[0]);

//b
ages.push(27);

console.log(ages[ages.length - 1] - ages[0]);

console.log(ages);

//c
let ageTotal = 0

for(let i = 0; i < ages.length; i++){
    ageTotal += ages[i];

}
let ageAvg = ageTotal / ages.length;
    
console.log(ageAvg);

// step 2

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let nameLTotal = 0;
for( let i=0; i < names.length; i++){

    nameLTotal = nameLTotal + names[i].length 


    console.log(nameLTotal);
}
console.log(nameLTotal / names.length);

// step 3
// to access the last element of an array you would use array.length -1

//step 4
//to access the first element of an array you would use array[0]

//step 5
let nameLengths = [];

for(let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}

console.log(nameLengths);

//step 6
//I may have misunderstood this, but wouldnt my nameLTotal variable be the answer?
let sum = 0
for(let i=0; i<nameLengths.length; i++){
   sum = sum + nameLengths[i];
console.log(sum);
}

//step 7
function wordMultiply(word,n){
    return word.repeat(n);

}
console.log(wordMultiply('word',3));

//step 8
function fullName(firstName, lastName){
    return firstName + " " + lastName;
}
console.log(fullName('john','doe'));

//step 9
function isBiggerThan100(x){
        let sumX = 0
    for(let i=0; i<x.length; i++){
   sumX = sumX + x[i];
}
    if(sumX>100){
        return true;
    }else{
        return false;
    }

}
let testArray = [50, 55, 75];
console.log(isBiggerThan100(testArray));


//step 10
function arrayAvg(y){
    let sumY = 0
    for(let i=0; i<y.length; i++){
   sumY = sumY + y[i];
}
let avgY = sumY / y.length;
return avgY;
}
console.log(arrayAvg(testArray));

//step11
function isHigherAvg(x,y){
    
    let sumY = 0
    for(let i=0; i<y.length; i++){
        sumY = sumY + y[i];
    }
    let avgY = sumY / y.length;


    let sumX = 0
    for(let i=0; i<y.length; i++){
        sumX = sumX + x[i];
    }
    let avgX = sumX / x.length;

if(avgX > avgY){
    return true;
}
else{
    return false;
}
}

let testArrayTheSequel = [25,30,40];
console.log(isHigherAvg(testArray,testArrayTheSequel));


//step 12
function willBuyDrink(isHotOutside,moneyInPocket){
    if (isHotOutside == true && moneyInPocket > 10.5){
        return true
    }else {
        return false
    }

}console.log(willBuyDrink(false,11));


//step 13
function isPlayingMusic(isPlayingGames, isDriving, isDoingWork){
    if(isPlayingGames == true || isDriving == true || isDoingWork == true){
        return true;
    }else {
        return false;
    }
}
console.log(isPlayingMusic(true,'yo'));

// This function is to figure out if im listening to music. if I am doing any of the activities presented in
//the arguments I will listen to music. If I'm not doing any of them I won't listen to music.