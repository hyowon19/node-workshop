// First program
// Create a file called hello-world.js . In it, write a simple node program that outputs 
// "Hello World!" to the console.
// Add an instruction to your program that will output "Hello World Again!!" 10 seconds after 
// the program was run.

function firstProgram() {
    console.log("Hello World!");

    setTimeout(function() {
        console.log("Hello World Again!");
    },10000);
}

// firstProgram()  //execution test

// A wild interval has appeared!
// If you never tried setInterval, give it a try first. It works the same way as setTimeout, 
// takes a callback function and a time in milliseconds. But instead of calling your callback once, 
// it calls it once every x milliseconds. In this exercise, you’ll have to mimic what setInterval 
// is doing but only with setTimeout!
// Your exercise: Write a piece of code using setTimeout that prints “Hello World!” every 10 seconds 
// forever.

