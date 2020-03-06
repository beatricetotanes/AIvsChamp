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

function firstChoice(){
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

  startGame();
}

function AIChoice(){
  var randomChoiceOfAI = Math.round((Math.random())*4);

  if (randomChoiceOfAI < 3) {
    AIpunchOrDefend = "p";
    punchAI = Math.round((Math.random())*5);
  }else {
    AIpunchOrDefend = "d";
    defendAI = 3;
  }
}

function AIMove(){
  if (AIpunchOrDefend=="p") {
    damageAI = hpAI - punchC; //Pag magpunch si AI, then mabawas ang damage ng punch ni Champ
    //damageC = hpC - punchAI;

    if (damageAI<=0) {
      hpAI = 0
    }else {
      hpAI = damageAI;
    }
    /*
    if (damageC<=0) {
      hpC = 0
    }else {
      hpC = damageC;
    }*/
  } else {
    damageAI = hpAI - (punchC-defend);

    if (damageAI<=0) {
      hpAI = 0
    }else {
      hpAI = damageAI;
    }
  }

}

function CChoice(){
  var randomChoiceOfC = Math.round((Math.random())*4);

  if (randomChoiceOfC < 3) {
    CpunchOrDefend = "p";
    punchC = Math.round((Math.random())*5);
  }else {
    CpunchOrDefend = "d";
    defendC = 3;
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
  var punchCFirst;
  var punchAIFirst;
  var damageAI;
  var damageC;


  if (first == "champ") {
    punchCFirst = Math.round((Math.random())*5);
    AIChoice();
    AIMove();
  }else {
    punchAIFirst = Math.round((Math.random())*5);
    CChoice();
    CMove();
  }

  document.getElementById("hpAI").innerHTML = "Current HP of AI:" + hpAI;
  document.getElementById("hpChamp").innerHTML = "Current HP of Champ:" + hpC;

}
