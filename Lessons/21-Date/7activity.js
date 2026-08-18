// ==========================================
// JavaScript Date Difference Tasks
// ==========================================

// Base dates for Tasks 1–4
const startDate = new Date("2026-01-15T08:00:00");
const endDate = new Date("2026-02-10T14:30:00");

// Task 1: Calculate the difference in milliseconds
const diffInMs = Math.abs(endDate - startDate);
console.log("Task 1 - Difference in milliseconds:", diffInMs);

// Task 2: Convert the difference into days
const msPerDay = 1000 * 60 * 60 * 24;
const diffInDays = diffInMs / msPerDay;
console.log("Task 2 - Difference in days:", diffInDays);

// Task 3: Convert the difference into hours
const msPerHour = 1000 * 60 * 60;
const diffInHours = diffInMs / msPerHour;
console.log("Task 3 - Difference in hours:", diffInHours);

// Task 4: Calculate the difference in weeks (rounded down)
const diffInWeeks = Math.floor(diffInDays / 7);
console.log("Task 4 - Difference in weeks (rounded down):", diffInWeeks);

// Task 5: Function to calculate difference in months using calendar logic
function getMonthDifference(d1, d2) {
  // Ensure earlier date is first
  let [earlier, later] = d1 < d2 ? [d1, d2] : [d2, d1];

  let yearDiff = later.getFullYear() - earlier.getFullYear();
  let monthDiff = later.getMonth() - earlier.getMonth();

  let totalMonths = yearDiff * 12 + monthDiff;

  // Adjust if later date hasn't reached the same day of the month yet
  if (later.getDate() < earlier.getDate()) {
    totalMonths--;
  }

  return totalMonths;
}

// Example usage for Task 5
const dateA = new Date("2025-03-15");
const dateB = new Date("2026-08-10");
console.log("Task 5 - Difference in calendar months:", getMonthDifference(dateA, dateB));