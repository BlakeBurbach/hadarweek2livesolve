let calculate = function(mathyObject){
    console.log('in calculate module calculate function:', mathyObject);
    // our answer
    let answer = 0;
    if(mathyObject.type === '-'){
        answer = Number(mathyObject.x) - Number(mathyObject.y);
    } // end if -
    else if(mathyObject.type === '*'){
        answer = Number(mathyObject.x) * Number(mathyObject.y);
    } // end if *
    else if(mathyObject.type === '/'){
        answer = Number(mathyObject.x) / Number(mathyObject.y);
    } // end if /
    else {
        answer = Number(mathyObject.x) + Number(mathyObject.y);
    } // end default +
    return answer;
} // end calculate

module.exports = calculate;