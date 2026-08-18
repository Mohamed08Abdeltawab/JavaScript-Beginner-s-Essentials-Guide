// ==========================================
// JavaScript Date Setter Tasks
// ==========================================

// Base Date for Tasks 1–4
const myDate = new Date("2020-01-01T00:00:00");

// Task 1: Change the year to 2025
myDate.setFullYear(2025);
console.log("Task 1 - Updated Year:", myDate.toString());

// Task 2: Set the month to August (0-indexed: 7 represents August)
myDate.setMonth(7);
console.log("Task 2 - Updated Month:", myDate.toString());

// Task 3: Set the day to 15
myDate.setDate(15);
console.log("Task 3 - Updated Day:", myDate.toString());

// Task 4: Set the time to 18:45
myDate.setHours(18, 45, 0, 0);
console.log("Task 4 - Updated Time:", myDate.toString());


// ==========================================
// Task 5: Add 1 Day using setDate()
// ==========================================

const rolloverDate = new Date("2024-12-31T00:00:00");

// setDate automatically handles month and year roll-over (moves to 2025-01-01)
rolloverDate.setDate(rolloverDate.getDate() + 1);

console.log("Task 5 - Date after adding 1 day:", rolloverDate.toString());