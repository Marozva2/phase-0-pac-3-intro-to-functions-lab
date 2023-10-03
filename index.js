//Receives one argument and returns it in all caps
function shout(strings) {
    return strings.toUpperCase();
}

//receives one argument and returns it in all lowercase
function whisper(strings) {
    return strings.toLowerCase();
}

//takes a string argument and logs it in all caps using console.log()
function logShout(strings){
    strings = 'hello'.toUpperCase();
    console.log(strings);
}

//takes a string argument and logs it in all lowercase using console.log()
function logWhisper(strings){
    strings = 'hello'.toLowerCase();
    console.log(strings);
}

//return in lowercase, uppercase and other
function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
      return("I can't hear you!");
    
    }
    else if(string === string.toUpperCase()){
      return("YES INDEED!")
    }
    else if (string === "Let's have dinner together!"){
      return ("I would love to!")
    }
}