$(document).ready(readyNow);

function readyNow(){
    console.log('Oh! Hey there!');
    $('#clearButton').on('click', function(){
        
    }); // end clear button on click
    $('#doMathButton').on('click', function(){
        console.log('in doMathButton on click');
        // capture user input & store in an object
        let objectToSend = {
            x: $('#xIn').val(),
            y: $('#yIn').val(), 
            type: $('#typeIn').val()
        };
        console.log('objectToSend', objectToSend);
        // send object to server
        // display answe on DOM
    }); // end doMathButton on click
} // end doc ready

