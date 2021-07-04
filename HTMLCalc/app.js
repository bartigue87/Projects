// function getGrade(score, total) {
//   let frac = score / total;
//   let percentage = frac * 100;
//   let letterGrade = "";
//   if (percentage >= 90) {
//     letterGrade = "A";
//   } else if (percentage >= 80) {
//     letterGrade = "B";
//   } else if (percentage >= 70) {
//     letterGrade = "C";
//   } else if (percentage >= 60) {
//     letterGrade = "D";
//   } else {
//     letterGrade = "F";
//   }

//   return `You got an ${letterGrade} (${percentage})!`;
// }
// console.log(getGrade(30, 30));
// console.log(getGrade(15, 30));
// console.log(getGrade(26, 30));
// console.log(getGrade(22, 30));

// function tempConverter(farenheit) {
//   return {
//     farenheit: farenheit,
//     celcius: ((farenheit - 32) * 5) / 9,
//     kelvin: ((farenheit + 459.67) * 5) / 9,
//   };
// }

// let temps = tempConverter(54);
// console.log(temps);

// console.log((5 / 9) * 100);

// let myAccount = {
//   name: "Brandon",
//   expenses: 0,
//   income: 0,
// };

// function addIncome(account, amount) {
//   return (account.income += amount);
// }

// function addExpense(account, amount) {
//   return (account.expenses += amount);
// }

// function getAccountSummary(account) {
//   return `Account for ${account.name} has $${
//     account.income - account.expenses
//   }. $${account.income} in income. $${account.expenses} in expenses. `;
// }
// addIncome(myAccount, 1000);
// addIncome(myAccount, 1000);
// addIncome(myAccount, 1000);
// addExpense(myAccount, 400);
// addExpense(myAccount, 400);
// let summary = getAccountSummary(myAccount);
// console.log(summary);

// let restaurant = {
//   name: "Pretty Bird",
//   guestCapacity: 200,
//   guestCount: 150,
//   checkAvailabilty(partySize) {
//     let seatsLeft = this.guestCapacity - this.guestCount;
//     return partySize <= seatsLeft;
//   },
//   seatParty(partySize) {
//     this.guestCount += partySize;
//   },
//   removeParty(partySize) {
//     this.guestCount -= partySize;
//   },
// };

// restaurant.seatParty(40);
// restaurant.removeParty(6);
// console.log(restaurant.checkAvailabilty(12));
