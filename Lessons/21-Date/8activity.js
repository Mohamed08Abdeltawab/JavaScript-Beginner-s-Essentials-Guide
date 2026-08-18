// ==========================================
// JavaScript Date Boundary Tasks
// ==========================================

// Task 1: Start of today (00:00:00.000)
const startOfToday = new Date();
startOfToday.setHours(0, 0, 0, 0);//h,m,s,ms
console.log("Task 1 - Start of Today:", startOfToday.toString());

// Task 2: End of today (23:59:59.999)
const endOfToday = new Date();
endOfToday.setHours(23, 59, 59, 999);
console.log("Task 2 - End of Today:", endOfToday.toString());

// Task 3: Start of current month (1st day at 00:00:00.000)
const now = new Date();
const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1, 0, 0, 0, 0);
console.log("Task 3 - Start of Month:", startOfMonth.toString());

// Task 4: End of current month
// Passing day 0 of the next month targets the last day of the current month
const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
console.log("Task 4 - End of Month:", endOfMonth.toString());

// Task 5: Start and end of current year
const startOfYear = new Date(now.getFullYear(), 0, 1, 0, 0, 0, 0);
const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);

console.log("Task 5 - Start of Year:", startOfYear.toString());
console.log("Task 5 - End of Year:", endOfYear.toString());