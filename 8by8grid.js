var oddLine = "# # # # ";
var evenLine = " # # # #";

for (var i = 1; i < 9; i ++) {
    if(i % 2 == 0){
        console.log(evenLine);
    }else{
        console.log(oddLine);
    }
}

//OR

var oddLine = "# # # # "+ "\n";
var evenLine = " # # # #"+ "\n";

for (var i = 1; i < 9; i ++) {
    if(i % 2 == 0){
        console.log(evenLine);
    }else{
        console.log(oddLine);
    }
}

//OR ... something else, I'm working on it.


/*var s = "";

for (var i = 1; i < 65; i++) {
    s += i + " ";
    
    if(i % 5 == 0){
        console.log("")
    } else if(i % 2 == 0){
        console.log(" ")
    } else if(i % 2 != 0){
        console.log("#")
    }
 
}*/