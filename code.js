function playCraps() {
    console.log("playCraps() function Started");
    var die1 = Math.ceil(Math.random() * 6); //takes a random number it by 6 and then rounds up to store in die1 location
    var die2 = Math.ceil(Math.random() * 6); //takes a random number it by 6 and then rounds up to store in die2 location
    var sum = die1 + die2; //adding die1 and die2
    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1; //die1 assigninment to die1
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2; //die2 assigninment to die2
    document.getElementById("sumRes").innerHTML = "Sum = " + sum; //sum assigninment to sum
    if (sum == 7 || sum == 11) { // if comparing 7 or 11 = results in a loss
        loss = loss + 1; //results in a loss
        document.getElementById("lossRes").innerHTML = loss; //results in a loss
        document.getElementById("finalRes").innerHTML = "CRAPS - you lose!"; //results in a loss
    }
    else if (die1 == die2 && die1 % 2 == 0) { // when comparing, die1die2 beats die1%=0. results in a win
        wins++; //results in a win
        document.getElementById("winRes").innerHTML = wins; //results in a win
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win"; //results in a win
    } else { //results in a draw
        tie++; //results in a draw
        document.getElementById("tieRes").innerHTML = tie ;//results in a draw
        document.getElementById("finalRes").innerHTML = "Draw - You neither won nor lost. Please try again."; //results in a draw
    }
}

function blastOff() {
    var currTime = 50;
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 5000);
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 10000)
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 15000);
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 20000);
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 25000); setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 30000);
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 35000);
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 40000);
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 45000);
    document.getElementById("countdownTimer").innerHTML = currTime;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = "Blastoff!"
    }, 50000);
}

function btrBlastOff() {
    console.log("btrBlastOff() started");
    var currTime = currTime = 50;
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            if (currTime >= 25) {
                //if conditions are true
                document.getElementById("countdownTimer").innerHTML = currTime;
            } else {
                //if conditions are not true
                document.getElementById("countdownTimer").innerHTML =
                    "Warning Less than ½ way to launch, time left = " + currTime;
            }
            currTime = currTime - 5;
        }, i * 5000);
    }
    setTimeout(function () {
        document.getElementById("countdownTimer").innerHTML = "Blastoff!";
    }, 50000);
}

function start(){
    console.log("start() function started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    console.log("stop() function started");
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}