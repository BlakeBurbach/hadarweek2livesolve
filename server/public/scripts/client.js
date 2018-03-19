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
        $.ajax({
            type: "POST",
            url: "/doMath",
            data: objectToSend
        }).done(function(response){
            console.log('back from POST with:', response);
            getAnswer();
        });
        // display answe on DOM
    }); // end doMathButton on click
} // end doc ready

function getAnswer(){
    $.ajax({
        type: "GET",
        url: "/doMath"
    }).done(function(response){
        console.log('back from GET with:', response);
        let outputDiv = $('#answerOut');
        outputDiv.empty();
        outputDiv.append(response.answer);
    });// end getAnswer
} // end getAnswer

