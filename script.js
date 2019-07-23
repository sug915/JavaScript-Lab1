let name = "Sugene Mulpuri";
let age = 24;
let birthday = "September 18th";
let detroitGC = true;
let lifeEvents = ["I was born in Saginaw, Michigan.", "I went to Michigan State University", "I won the Saginaw city spelling bee in 7th grade.", "I have a B.S. in Psychology."]

if (detroitGC == true){
    console.log(`My name is ${name} and I am a student of Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
     );

}
else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`);
}


for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

let randomNumber = Math.floor(Math.random() * 10) + 1;

let counter = 0;

while (true){
    if (randomNumber!==5) {
    console.log(`${randomNumber} !== 5`);
    randomNumber = Math.floor(Math.random() * 10) + 1;
    counter++;
    }
    else {
        if (counter == 0){
            counter++;
            console.log(`5 === 5. It took ${counter} iteration to randomly generate the number 5`);
            break;

        }
        else {
            counter++;
            console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5`);
            break;
        }
        
    }}
