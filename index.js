var coin;
var choice;
var first;
var defend = 3;
var hpAI = 100;
var hpC = 100;
var AIpunchOrDefend;
var CpunchOrDefend;
var punchAI;
var defendAI;
var punchC;
var defendC;
var countFirstChoice = 0;
var champChoice;



function firstChoice(){
  while (countFirstChoice<1) {
    choice = document.getElementById("choice").value;
    coin = (Math.random());

    if (choice == "heads") {
      if (coin<0.5) {
        first = "champ";
        document.getElementById("toss").innerHTML = "Result of Coin Toss: Heads (" + coin + ")" + ", Champ goes first.";
      }else {
        first = "ai";
        document.getElementById("toss").innerHTML = "Result of Coin Toss: Tails (" + coin + ")" + ", AI goes first.";
      }
    } else if(choice == "tails"){
      if (coin<0.5) {
        first = "ai";
        document.getElementById("toss").innerHTML = "Result of Coin Toss: Heads (" + coin + ")" + ", AI goes first.";
      }else {
        first = "champ";
        document.getElementById("toss").innerHTML = "Result of Coin Toss: Tails (" + coin + ")" + ", Champ goes first.";
      }
    }

    countFirstChoice++;
  }

  if (countFirstChoice==1) {
    //alert("You have already started the game.");
  }

  startGame();
}


function CChoice(){
  var randomChoiceOfC = Math.round((Math.random())*4);

  if (randomChoiceOfC < 3) {
    CpunchOrDefend = "p";
    punchC = Math.round((Math.random())*5);
  }else {
    CpunchOrDefend = "d";
  }
}

function CMove(){
  if (CpunchOrDefend=="p") {
    //damageAI = hpAI - punchC; //Pag magpunch si AI, then mabawas ang damage ng punch ni Champ
    damageC = hpC - punchAI;

    if (damageC<=0) {
      hpC= 0
    }else {
      hpC= damageC;
    }
    /*
    if (damageC<=0) {
      hpC = 0
    }else {
      hpC = damageC;
    }*/
  } else {
    damageC = hpC - (punchAI-defend);

    if (damageC<=0) {
      hpC = 0
    }else {
      hpC = damageC;
    }
  }
}


function startGame(){
  //var punchCFirst;

  var damageC;

  if (first == "champ") {
    punchC = Math.round((Math.random())*5);
    document.getElementById("moves").innerHTML += "You have punched with a damage of " + punchC + ".<br>";
    AIChoice();
    if (AIpunchOrDefend=="p") {
      damage = hpAI - punchC;
      hpAI = hpAI - punchC;
      document.getElementById("moves").innerHTML += "AI has punched with a damage of " + punchAI + ".<br>";
      //punchAI = Math.round((Math.random())*5);
      //document.getElementById("output").innerHTML = "It's your turn. After choosing punch or defend, click next.";
    } else {
      damage = punchC-defend;
      //document.getElementById("output").innerHTML = "It's your turn. After choosing punch or defend, click next.";
      if (damage<=0) {
        damage = 0;
        hpAI = hpAI - damage;
      }else {
        hpAI = hpAI - damage;
      }
      punchAI = 0 //Because AI defended
      //alert("AI defended, it's your turn.");
      document.getElementById("moves").innerHTML += "AI has defended, receiving " + damage + " damage.<br>";
    }
    //document.getElementById("hello").innerHTML += "It's your turn. After choosing punch or defend, click next.";
  }else {

    //alert("AI punched, it's your turn.");
    punchAI = Math.round((Math.random())*5);
    document.getElementById("moves").innerHTML += "AI has punched you with a damage of " + punchAI + ".<br>";

    //DITO TAYO NAGSTOP

    //CChoice();
    //CMove();
  }

  document.getElementById("AIHealth").innerHTML = "Current HP of AI:" + hpAI;
  document.getElementById("ChampHealth").innerHTML = "Current HP of Champ:" + hpC;

}

function AIChoice(){
  var randomChoiceOfAI = Math.round((Math.random())*4);

  if (randomChoiceOfAI < 3) {
    AIpunchOrDefend = "p";
    punchAI = Math.round((Math.random())*5);
  }else {
    AIpunchOrDefend = "d";
  }
}

function afterNext(){
  //var punchCFirst;

//  if (first == "champ") {
//    punchC = Math.round((Math.random())*5);
    AIChoice();
    if (AIpunchOrDefend=="p") {
      document.getElementById("moves").innerHTML += "AI has punched you with a damage of " + punchAI + ".<br>";
      //alert("AI punched, it's your turn.");
      //punchAI = Math.round((Math.random())*5);
      //damage = hpAI - punchC;
      hpAI = hpAI - punchC;
      //punchAI = Math.round((Math.random())*5);
      //document.getElementById("output").innerHTML = "It's your turn. After choosing punch or defend, click next.";
    } else {

      //alert("AI defended, it's your turn.");
      punchAI = 0;
      damage = punchC-defend;

      //document.getElementById("output").innerHTML = "It's your turn. After choosing punch or defend, click next.";
      if (damage<=0) {
        damage = 0;
        hpAI = hpAI - damage;
      }else {
        hpAI = hpAI - damage;
      }
      document.getElementById("moves").innerHTML += "AI has defended, receiving " + damage + " damage.<br>";
    }
    //document.getElementById("hello").innerHTML = "It's your turn. After choosing punch or defend, click next.";
//  }else {

  //  CChoice();
  //  CMove();


  document.getElementById("AIHealth").innerHTML = "Current HP of AI: " + hpAI;
  document.getElementById("ChampHealth").innerHTML = "Current HP of Champ: " + hpC;

}


function choiceUser(){
  champChoice = document.getElementById("champChoice").value;
  if (champChoice == "punchChamp") {
    punchC = Math.round((Math.random())*5);
    document.getElementById("moves").innerHTML += "You have punched with a damage of " + punchC + ".<br>";
    damage = punchAI;
      hpC = hpC - damage;
  }else {
    damage = punchAI - defend;
    if (damage>=0) {
      hpC = hpC - damage;
    }else {
      damage = 0;
      hpC = hpC-damage;
      punchC = 0;
    }
    document.getElementById("moves").innerHTML += "You have defended, receiving " + damage + " damage.<br>";
  }
}

function next(){
  do {
    if (first == "champ") {

        choiceUser();
        afterNext();

    }else {
      champChoice = document.getElementById("champChoice").value;
      if (champChoice == "punchChamp") {
        punchC = Math.round((Math.random())*5);
        document.getElementById("moves").innerHTML += "You have punched with a damage of " + punchC + ".<br>";
        //damage = punchAI - defend;
        //hpC = hpC - damage;
          hpC = hpC - punchAI;

      }else {
        damage = punchAI - defend;
        punchC = 0;
        if (damage>=0) {
          hpC = hpC - damage;
        }else {
          damage = 0;
          hpC = hpC-damage;

        }
        document.getElementById("moves").innerHTML += "You have defended, receiving " + damage + " damage.<br>";
      }
      punchAI = 0;
      afterNext();
    }

      //document.getElementById("hello").innerHTML = " ";

    document.getElementById("AIHealth").innerHTML = "Current HP of AI:" + hpAI;
    document.getElementById("ChampHealth").innerHTML = "Current HP of Champ:" + hpC;
  } while (hpAI!=0 || hpC!=0);
  //document.getElementById("hello").innerHTML = "";


}
