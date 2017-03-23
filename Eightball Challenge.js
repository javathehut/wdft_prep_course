//magic eightball

var numberofreplys = Math.floor((Math.random() * 9) + 1);
function ask(){
    var choice = numberofreplys;
    var reply = 'You need to make some options using if/else'

    if(choice == 1) {
        reply = "Not gonna happen. Just stay away."
        console.log(reply);
    } else if(choice == 2) {
        reply = "Forecast does not look good, honey."
        console.log(reply);
    } else if(choice == 3) {
        reply = "Highly unlikely."
        console.log(reply);
    } else if(choice == 4) {
        reply = "Probably not but try if you must."
        console.log(reply);
    } else if(choice == 5) {
        reply = "Chances are 50\-50"
        console.log(reply);
    } else if(choice == 6) {
        reply = "It might work out."
        console.log(reply);
    } else if(choice == 7) {
        reply = "Hey give it a shot, it looks good!"
        console.log(reply);
    } else if(choice == 8){
        reply = "All signs point to a positive outlook!"
        console.log(reply);
    }

    console.log(choice);
}

ask();

