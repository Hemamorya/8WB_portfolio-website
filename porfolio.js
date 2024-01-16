// script.js

var typeData = new Typed(".role", {
    strings: [ 
        "Full Stack Developer",
        "Web Developer",
        "UI-UX Designer",
        "Backend Developer",
        "Coder",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});

document.getElementById('hireButton').addEventListener('click', function() {
    // Create a new element for the "Thank you!" message
    document.getElementById('hireButton').addEventListener('click', function() {
        console.log('Button clicked!');
        // Rest of your code
    });;
   

    // Append the message to the body
    document.body.appendChild(thankYouMessage)
});

document.getElementById('submit-button').addEventListener('click', function() {
    sendMessage();
});

function sendMessage() {
    // Your logic for sending a message goes here
    console.log('Message sent!');
    // Add your actual code to send a message
}

