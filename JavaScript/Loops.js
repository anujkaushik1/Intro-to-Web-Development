let endNum = 10;

for(let i = 1; i <= endNum; i++){

    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0){
        console.log("Fizz");
    }
    else if(i % 5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }

}

let i = 0;

while(i <= endNum){
    process.stdout.write("Number is " + i);
    i++
}