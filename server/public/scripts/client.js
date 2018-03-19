$(document).ready(readyNow);

function readyNow(){
    console.log('Oh! Hey there!');
    $('#clearButton').on('click', function(){
        $('#xIn').val('');
        $('#yIn').val('');
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

    // page init
    getHistory();
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

function getHistory(){
    $.ajax({
        type: "GET",
        url: '/doMath'
    }).done(function(response){
        console.log(response);
        let outputElement = $('#historyOut');
        outputElement.empty();
        for (let i=0; i<response.length; i++) {
            console.log(response[i]);
            let outputString = '<li>';
            outputString += response[i].x + '';
            outputString += response[i].type +'';
            outputString += response[i].y+'';
            outputString += response[i].answer+'';
            outputString += '</li>';
            outputElement.append(outputString);
        }
    })
}