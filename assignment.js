// https://github.com/iMsubha/problem-solved

// conversion from Kilometer to Meter
function kilometerToMeter(kilometer) {
  if (kilometer <= 0) {
    return "Distance can not be negative or zero!";
  }
  return kilometer * 1000;
}

// calculating total budget of watch , phone and laptop
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

// calculating total hotel cost based on days
function hotelCost(numberOfDays) {
  if (numberOfDays <= 0) {
    return "Please enter a valid number of days!";
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

// returning the longest name
function megaFriend(friendsList) {
  var numberOfFriends = friendsList.length;
  var lengthOfNames = [];
  var max, maxIndex;
  if (friendsList === undefined || numberOfFriends == 0) {
    return "Please enter valid names!";
  }
  for (var i = 0; i < numberOfFriends; i++) {
    lengthOfNames.push(friendsList[i].length);
  }
  max = lengthOfNames[0];
  for (var i = 1; i < numberOfFriends; i++) {
    if (lengthOfNames[i] > max) {
      max = lengthOfNames[i];
    }
  }
  maxIndex = lengthOfNames.indexOf(max);
  return friendsList[maxIndex];
}
