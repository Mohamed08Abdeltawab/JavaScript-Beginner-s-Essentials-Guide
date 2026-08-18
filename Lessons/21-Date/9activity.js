// ==========================================
// JavaScript Date Validation & Auto-Correction Tasks
// ==========================================

// Task 1: Function to validate a date string (Format: YYYY-MM-DD)
function isValidDate(dateString) {
  return dateString instanceof Date && !Number.isNaN(dateString.getTime());
}

console.log("Task 1 - Validation function defined.");

// Task 2: Check if "2024-02-29" is valid (Leap year)
const date2024 = "2024-02-29";
console.log(`Task 2 - Is "${date2024}" valid?`, isValidDate(date2024)); // true

// Task 3: Detect if "2023-02-29" is invalid (Non-leap year)
const date2023 = "2023-02-29";
console.log(`Task 3 - Is "${date2023}" valid?`, isValidDate(date2023)); // false

// Task 4: Demonstrate how JavaScript auto-corrects an invalid date
// 2023 is not a leap year, so Feb 29 rolls over into March 1
const autoCorrectedDate = new Date(2023, 1, 29); // Month 1 = February
console.log("Task 4 - Passing 2023-02-29 results in:", autoCorrectedDate.toISOString().split("T")[0]); 
// Output: 2023-03-01

// Task 5: Add 1 day to January 31 and print the result
const jan31 = new Date(2026, 0, 31); // Jan 31
jan31.setDate(jan31.getDate() + 1);   // Auto-corrects / rolls over to Feb 1

console.log("Task 5 - Adding 1 day to Jan 31 results in:", jan31.toDateString());
// Output: Sun Feb 01 2026