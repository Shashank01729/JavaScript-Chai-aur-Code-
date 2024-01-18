// for loop
for(let index=0;index<10;index++){
    const ele=index;
    if(ele==5){
        console.log("5 is the best number");
    }
    console.log(ele);
}


for(let i=0;i<10;i++){
    console.log(`Outer Loop Value: ${i}`);
    for(let j=0;j<10;j++){
        console.log(`Inner Loop Value Of j: ${j} and Inner Loop Value Of i: ${i}`);
    }
}


for(let i=1;i<=10;i++){
    console.log(`Outer Loop Value: ${i}`);
    for(let j=1;j<=10;j++){
        console.log(i+'*'+j+' = '+i*j);
    }
}

let SuperHeroes=["Ayanokouji", "Hachiman", "Yuji"]
console.log(SuperHeroes.length);
for(let index=0;index<SuperHeroes.length;index++) {
    const element = SuperHeroes[index];
    console.log(element);
}


// break
for(let i=1;i<=20;i++){
    if(i==5){
        console.log("Detected 5");
        break;
    }
    console.log(`value of i is ${i}`);
}

// continue
for(let i=1;i<=20;i++){
    if(i==5){
        console.log("Detected 5");
        continue;
    }
    console.log(`value of i is ${i}`);
}