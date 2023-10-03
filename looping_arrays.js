/* 
    Write a for loop that logs every even number starting from 1000 down to 0 
    (you can do this a couple ways, either updating the i a certain way or by checking 
    if the number is even inside the for loop)
*/
let countDown = 1000
for (let i = 0; i <= 1000; i += 2) {
    console.log(countDown - i);
}

/*
    Write a for loop that starts at 0 and goes to 10000, 
    don't log any numbers but when the for loop is 1/4 of the way done through the loops (2500), 
    your code should alert a message that says "A quarter of the way there!" 
    then when your loop is halfway there (5000), 
    your code should alert  a message that says "Halfway there!"  
    Finally when it reaches the last number 
    (10000, make sure your condition is inclusive of 10000) it should alert "The loop is done!"
*/
let countUp = 0
for (let i = 0; i <= 10000; i += 1) {
    countUp = i;
    if (countUp == 2500) {
        alert("A quarter of the way there!");
    } else if (countUp == 5000) {
        alert("Halfway there!");
    } else if (countUp == 10000) {
        alert("The loop is done!");
    }
}

/*
    Finally write an array of your top 5 favorite tv shows (make them up if you don't have any)
        If your array has a value like "My #1 favorite TV show is Breaking Bad" inside of it, 
        that's not good and you'll get some points off. 
        Your array should simply have values like "Breaking Bad" or "The Expanse" 
        inside of it and your loop should use those values to shape the message below.
    
        Loop through the array of your top 5 favorite tv shows and log to the console 
        the following message each loop:

    "My #<INSERT PROPER NUMBER HERE> favorite tv show is <INSERT TV SHOW HERE>"
*/
let favShows = ["Ghost in the Shell: Stand Alone Complex","Vampire in the Garden","Osomatsu-San","Aggretsuko","Violet Evergarden"]
for (i = 0; i < 5; i += 1) {
    let favShowNum = i + 1;
    console.log("My #"+ favShowNum +" favorite tv show is " + favShows[i]);
}
