// return 
function kilometerToMeter(kilometer) {
  if (kilometer <= 0) {
    return "Distance can not be negative or zero!";
  }
  return kilometer * 1000;
}
// console.log(kilometerToMeter(-1));
// console.log(kilometerToMeter(0));
// console.log(kilometerToMeter(36));

// per watch price = 50, per phone price = 100,  per laptop price = 500
function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
  if (watchQuantity <= 0 || phoneQuantity <= 0 || laptopQuantity <= 0) {
    return "Please enter non-zero and positive number of all products.";
  } else {
    var watchPrice = 50 * watchQuantity;
    var phonePrice = 100 * phoneQuantity;
    var laptopPrice = 500 * laptopQuantity;
    return watchPrice + phonePrice + laptopPrice;
  }
}
// console.log(budgetCalculator(3, 5, 6));
// console.log(budgetCalculator(3, 0, 6));
// console.log(budgetCalculator(3, 5, -6));

function hotelCost(numberOfDays) {
  if (numberOfDays <= 0) {
    return "Please Enter A Valid Number.";
  } else if (numberOfDays <= 10) {
    return 100 * numberOfDays;
  } else if (numberOfDays > 10 && numberOfDays <= 20) {
    var firstTenDays = 100 * 10;
    var remainingDays = numberOfDays - 10;
    var totalCost = firstTenDays + 80 * remainingDays;
    return totalCost;
  } else {
    var firstTwentyDays = 100 * 10 + 80 * 10;
    var remainingDays = numberOfDays - 20;
    var totalCost = firstTwentyDays + 50 * remainingDays;
    return totalCost;
  }
}
// console.log(hotelCost(10));
// console.log(hotelCost(0));
// console.log(hotelCost(-10));
// console.log(hotelCost(12));
// console.log(hotelCost(27));

function megaFriend(friendsList) {
  var numberOfFriends = friendsList.length;
  var lengthOfNames = [];
  var max, maxIndex;
  if (friendsList === undefined || numberOfFriends == 0) {
    return "Please Enter Valid Names";
  }
  for (var i = 0; i < numberOfFriends; i++) {
    lengthOfNames.push(friendsList[i].length);
  }
  console.log(lengthOfNames);
  max = lengthOfNames[0];
  for (let i = 1; i < numberOfFriends; i++) {
    if (lengthOfNames[i] > max) {
      max = lengthOfNames[i];
    }
  }
  maxIndex = lengthOfNames.indexOf(max);
  console.log(friendsList[maxIndex]);
  return friendsList[maxIndex];
}
// console.log(megaFriend([]));
// console.log(
//   megaFriend(["asn njk", "hjku huj", "ui vghn jkrrr y", "ghyuj", "vbghj kj"])
// );
