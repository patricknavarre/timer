// version 0:

// version 1 - A Hard-Coded Timer

setTimeout(function() {
    console.log('5 seconds have passed');
    console.log('\u0007');
    }, 5000);



//  version 2 - User Input

// const userInput = process.argv[2];
//     setTimeout(function(){
//         console.log(userInput + " seconds have passed");
//         console.log('\u0007');
//     }, userInput * 1000);


// version 3 - Multiple Timers

// const userInputs = process.argv.slice(2);
// for(const userInput of userInputs) {
//     setTimeout(function(){ 
//         console.log(userInput + " seconds have passed");
//         console.log('\u0007');
//     }, userInput * 1000);
// }
