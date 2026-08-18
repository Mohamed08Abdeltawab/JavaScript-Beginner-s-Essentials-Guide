// ==========================================
// JavaScript Date Object Tasks
// ==========================================

// Task 1: Create a Date object representing the current date and time
const currentDate = new Date();
console.log("Task 1 - Current Date & Time:", currentDate);

// Task 2: Create a Date object using milliseconds = 0 (Unix Epoch: Jan 1, 1970 00:00:00 UTC)
const epochDate = new Date(0);
console.log("Task 2 - Epoch Date (ms = 0):", epochDate);

// Task 3: Create a Date object from a date string "2000-01-01"
const stringDate = new Date("2000-01-01");
console.log("Task 3 - From Date String:", stringDate);

// Task 4: Create a Date object for December 25, 2025 using numbers
// Note: Months in JavaScript Date constructor are 0-indexed (0 = January, 11 = December)
const christmas2025 = new Date(2025, 11, 25);
console.log("Task 4 - December 25, 2025:", christmas2025);

// Task 5: Create a Date object for July 10, 2024 at 8:45 AM
// Note: Month 6 corresponds to July (0-indexed)
const julyDate = new Date(2024, 6, 10, 8, 45);
console.log("Task 5 - July 10, 2024 at 8:45 AM:", julyDate);