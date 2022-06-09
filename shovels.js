function getNoteChangeDetails(amount) {
  if (amount === 5) {
    return {
      changeRequired: false,
      changeAmount: 0,
    };
  } else if (amount === 10) {
    return {
      changeRequired: true,
      changeAmount: 5,
    };
  } else if (amount === 20) {
    return {
      changeRequired: true,
      changeAmount: 15,
    };
  } else if (amount === 50) {
    return {
      changeRequired: true,
      changeAmount: 45,
    };
  }
}

function canGetChangeForCustomer(changeRequired, sortedAvailableBills) {
  let currentSum = 0;
  let currentIndex = 0;
  for (let i = 0; i < sortedAvailableBills.length; i++) {
    currentIndex = i;
    currentSum = currentSum + sortedAvailableBills[i];
    if (currentSum < changeRequired) {
      continue;
    } else if (currentSum === changeRequired) {
      return {
        changeAvailable: true,
        newAvailableChangeBills: sortedAvailableBills.slice(currentIndex),
      };
    } else if (currentSum > changeRequired) {
      return {
        changeAvailable: false,
        newAvailableChangeBills: sortedAvailableBills,
      };
    }
  }
}

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var shovelChange = function (bills) {
  let billsForChange = [];

  for (let i = 0; i < bills.length; i++) {
    const bill = bills[i];
    billsForChange.push(bill);
    const sortedBillsForChange = billsForChange.sort(function (a, b) {
      return a - b;
    });
    const { changeRequired, changeAmount } = getNoteChangeDetails(bill);
    if (!changeRequired) {
      continue;
    } else {
      const { changeAvailable, newAvailableChangeBills } = canGetChangeForCustomer(changeAmount, sortedBillsForChange);
      if (!changeAvailable) {
        return false;
      } else {
        billsForChange = newAvailableChangeBills;
      }
    }
  }
  return true;
};
