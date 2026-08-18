// ==========================================
// JavaScript Date Arithmetic Tasks
// ==========================================

// Task 1: 7 days from today
const in7Days = new Date();
in7Days.setDate(in7Days.getDate() + 7);
console.log("Task 1 - 7 days from today:", in7Days.toString());

// Task 2: 2 weeks ago (14 days ago)
const twoWeeksAgo = new Date();
twoWeeksAgo.setDate(twoWeeksAgo.getDate() - 14);
console.log("Task 2 - 2 weeks ago:", twoWeeksAgo.toString());

// Task 3: 3 months in the future
const in3Months = new Date();
in3Months.setMonth(in3Months.getMonth() + 3);
console.log("Task 3 - 3 months in the future:", in3Months.toString());

// Task 4: 1 year ago
const oneYearAgo = new Date();
oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
console.log("Task 4 - 1 year ago:", oneYearAgo.toString());

// Task 5: 90 minutes from now
const in90Minutes = new Date();
in90Minutes.setMinutes(in90Minutes.getMinutes() + 90);
console.log("Task 5 - 90 minutes from now:", in90Minutes.toString());