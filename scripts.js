// Generates roulette results.
function ball(spins) {
  const table = ["00","0","Red","Black","Red","Black","Red","Black","Red","Black","Red","Black","Red","Black","Red","Black","Red","Black","Red","Black","Red","Black","Red","Black","Red","Black","Red","Black","Red","Black","Red","Black","Red","Black","Red","Black","Red","Black"];
  let results = [];
  for (i = 0; i < spins; i++) {
  results.push(table[Math.floor(Math.random()*table.length)]);
  }
  return results.toString();
}

// Function which works out how many spins it takes Jimmy to go broke.
function redBlack () {

  let money = 10;
  let spins = 0;
  let nextColorResults;

  while (money > 0){

    nextColorResults = ball(4);
    switch(nextColorResults){
      case "Red,Black,Red,Black":
        money -= 1;
        spins++;
        nextColorResults = ball(1);
          if(nextColorResults == "Red"){
            money += 2;
          }
      break;

      case "Black,Red,Black,Red":
        money -= 1;
        spins++;
        nextColorResults = ball(1);
        if(nextColorResults == "Black"){
          money += 2;
          }
      break;
    }
  }
  return spins;
}
redBlack ();
