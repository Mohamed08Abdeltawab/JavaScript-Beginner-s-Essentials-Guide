// ==========================================
// JavaScript Date Timestamp & Comparison Tasks
// ==========================================

// Task 1: Create a date for "2024-01-01" and print its timestamp (milliseconds since Unix Epoch)
const date2024 = new Date("2024-01-01T00:00:00");
const timestamp2024 = date2024.getTime();
console.log("Task 1 - Timestamp for 2024-01-01:", timestamp2024);

// Task 2: Print the current timestamp using Date.now()
const currentTimestamp = Date.now();
console.log("Task 2 - Current Timestamp:", currentTimestamp);

// Task 3: Create two dates and check which one is earlier
const eventA = new Date("2025-05-10");
const eventB = new Date("2025-08-20");

if (eventA.getTime() < eventB.getTime()) {
  console.log("Task 3 - eventA is earlier than eventB");
} else if (eventA.getTime() > eventB.getTime()) {
  console.log("Task 3 - eventB is earlier than eventA");
} else {
  console.log("Task 3 - Both dates are the same");
}

// Task 4: Calculate the number of days between 2025-03-01 and 2025-03-15
const startDate = new Date("2025-03-01");
const endDate = new Date("2025-03-15");

// Calculate absolute difference in milliseconds and convert to days
const diffInMs = Math.abs(endDate - startDate);
const msPerDay = 1000 * 60 * 60 * 24;
const daysBetween = diffInMs / msPerDay;

console.log("Task 4 - Days between dates:", daysBetween);

// Task 5: Check if a deadline date has already passed
const deadline = new Date("2024-12-31T23:59:59");
const now = new Date();

if (deadline < now) {
  console.log("Task 5 - The deadline has already passed.");
} else {
  console.log("Task 5 - The deadline is still upcoming.");
}
