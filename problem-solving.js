// Problem-1:
function anaToVori(ana) {
  if (ana < 0) {
    return "this not positive number!! please enter a positive number";
  } else if (typeof ana != "number") {
    return "This is not number!! please enter a number";
  }
  let Vori = ana / 16;
  return Vori;
}
console.log(anaToVori(32));

// Problem-2:
function pandaCost(singaraQuantity, shomuchaQuantity, jilapiQuantity) {
  if (singaraQuantity < 0 || shomuchaQuantity < 0 || jilapiQuantity < 0) {
    return "this not positive quantity!! please enter a positive quantity";
  } else if (
    typeof singaraQuantity != "number" ||
    typeof shomuchaQuantity != "number" ||
    typeof jilapiQuantity != "number"
  ) {
    return "This is not number!! please enter a number";
  }
  const singaraPrice = 7;
  const shomuchaPrice = 10;
  const jilapiPrice = 15;
  let totalCost =
    singaraPrice * singaraQuantity +
    shomuchaPrice * shomuchaQuantity +
    jilapiPrice * jilapiQuantity;
  return totalCost;
}
console.log(pandaCost(3, 5, 4));

//Problem-3:
function picnicBudget(personCount){
  if (personCount < 0) {
    return "this not positive number!! please enter a positive number";
  } else if (typeof personCount != "number") {
    return "This is not number!! please enter a number";
  }
  const perPersonCostFirst1to100 = 5000;
  const perPersonCostNext101to200 = 4000;
  const perPersonCostRestUpto200 = 3000;
  if(personCount <= 100){
    let totalPersonCost = personCount * perPersonCostFirst1to100;
    return totalPersonCost;
  }else if(personCount <= 200 && personCount > 100  ){
    let firstTotalPersonCost = perPersonCostFirst1to100 * 100;
    let restPeople = personCount - 100;
    let secondTotalPersonCost = restPeople * perPersonCostNext101to200;
    let totalPersonCost2 = firstTotalPersonCost + secondTotalPersonCost;
    return totalPersonCost2;
  }else{
    let firstTotalPersonCost = perPersonCostFirst1to100 * 100;
    let secondTotalPersonCost = perPersonCostNext101to200 * 100;
    let restOfPeople = personCount - 200;
    let restTotalPersonCost = restOfPeople * perPersonCostRestUpto200;
    let totalPersonCost3 = firstTotalPersonCost + secondTotalPersonCost + restTotalPersonCost;
    return totalPersonCost3;
  }

}
console.log(picnicBudget(102));

// Problem-4:
function oddFriend(friends){
  let friendName = '';
  for(const friend of friends){
    if(friend.length % 2 != 0){
      friendName += friend;
      break;
    }
  }
  return friendName;
}
const friends = ['moon', 'azim', 'robin', 'sakib', 'rashed', 'taohid'];
let odd = oddFriend(friends);
console.log(odd);