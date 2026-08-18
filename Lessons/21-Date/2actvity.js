// ==========================================
// JavaScript Date Extraction Tasks
// ==========================================

// Base Date for Tasks 1–4
const targetDate = new Date("2024-12-31T00:00:00");

// Task 1: Print the year
const year = targetDate.getFullYear();
console.log("Task 1 - Year:", year);

// Task 2: Print the month number (1–12)
// getMonth() returns 0–11, so add 1 to get standard month numbers
const month = targetDate.getMonth() + 1;
console.log("Task 2 - Month (1-12):", month);

// Task 3: Print the day of the month
const dayOfMonth = targetDate.getDate();
console.log("Task 3 - Day of the Month:", dayOfMonth);

// Task 4: Print the day of the week index (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
const dayOfWeek = targetDate.getDay();
console.log("Task 4 - Day of the Week Index:", dayOfWeek);


// ==========================================
// Task 5: Date Time Extraction
// ==========================================

// Create Date from ISO string with time
const dateTime = new Date("2025-06-10T14:45:30");

const hours = dateTime.getHours();
const minutes = dateTime.getMinutes();
const seconds = dateTime.getSeconds();

console.log("Task 5 - Hours:", hours);
console.log("Task 5 - Minutes:", minutes);
console.log("Task 5 - Seconds:", seconds);