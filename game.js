function Name() {
    Player1Name = localStorage.getItem("Player1");
Player2Name = localStorage.getItem("Player2");
Player1Score = 0;
Player2Score = 0;

document.getElementById("P1t").innerHTML = Player1Name + ": ";
document.getElementById("P2t").innerHTML = Player2Name + ": ";

document.getElementById("score1").innerHTML = Player1Score;
document.getElementById("score2").innerHTML = Player2Score;

document.getElementById("Q").innerHTML = "Question Turn: " + Player1Name;
document.getElementById("A").innerHTML = "Answer Turn: " + Player2Name;
}

function Back() {
    window.location = "index.html";
}

function Question() {
    P1t = document.getElementById("No1").value;
    P2t = document.getElementById("No2").value;
    AAns = parseInt(P1t) * parseInt(P2t);

    Que = "<br><h4 style='color: rgb(29, 58, 0)'> " + P1t + " x " + P2t + "</h4>";
    AnsInp = "<br><input type='number' id='inputch' placeholder='Enter Your Answer'>";
    Button = "<br><br><button class='btn btn-success' id='check' onclick='Check()' type='button'>Check</button><br><br>";
    All = Que + AnsInp + Button;
    document.getElementById("AnsBox").innerHTML = All;
}

QTurn = "Player1";
ATurn = "Player2";

function Check() {
    getAnswer = document.getElementById("inputch").value;

    if(getAnswer == AAns) {

        

        if(ATurn == "Player1") {
            update1score = Player1Score + 1;
            document.getElementById("score1").innerHTML = update1score;
            window.alert("Yay! You got it right.")
            ATurn = "Player2";
        }

        if(ATurn == "Player2") {
            update2score = Player2Score + 1;
            document.getElementById("score2").innerHTML = update1score;
            window.alert("Yay! You got it right.");
            ATurn = "Player1";
        }


        if(QTurn == "Player1") {
            QTurn = "Player2";
            document.getElementById("Q").innerHTML = "Question Turn: " + localStorage.getItem("Player2");
        }

        else {
            QTurn = "Player1";
            document.getElementById("Q").innerHTML = "Question Turn: " + localStorage.getItem("Player1");
        }

        if(ATurn == "Player1") {
            ATurn = "Player2";
            document.getElementById("A").innerHTML = "Question Turn: " + localStorage.getItem("Player2");
        }

        else {
            ATurn = "Player1";
            document.getElementById("A").innerHTML = "Question Turn: " + localStorage.getItem("Player1");
        }

        window.alert("Yay! You got it right.");
    }

    else {
        window.alert("Opps! It's wrong. Try again next time!")
    }
}