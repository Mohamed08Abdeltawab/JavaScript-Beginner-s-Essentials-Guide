// ==========================================
// JavaScript Date Comparison & Sorting Tasks
// ==========================================

// Task 1: Create two dates and check which one is earlier
const date1 = new Date("2025-04-10T10:00:00");
const date2 = new Date("2025-09-15T15:30:00");

if (date1 < date2) {
  console.log("Task 1 - date1 is earlier than date2");
} else if (date1 > date2) {
  console.log("Task 1 - date2 is earlier than date1");
} else {
  console.log("Task 1 - Both dates are the same");
}

// Task 2: Check if two dates represent the same moment in time
// Use getTime() or valueOf() because reference comparison (===) checks object identity
const timeA = new Date("2026-01-01T12:00:00Z");
const timeB = new Date("2026-01-01T12:00:00Z");

const isSameMoment = timeA.getTime() === timeB.getTime();
console.log("Task 2 - Do both dates represent the same moment?", isSameMoment);

// Task 3: Sort an array of dates from newest to oldest
const dateList = [
  new Date("2023-05-12"),
  new Date("2026-08-18"),
  new Date("2021-11-30"),
  new Date("2024-02-14"),
];

// Sort descending (b - a)
dateList.sort((a, b) => b - a);

console.log("Task 3 - Sorted Dates (Newest to Oldest):");
dateList.forEach((d) => console.log(d.toISOString().split("T")[0]));

// Task 4: Check if a given date falls between two other dates
const targetDate = new Date("2025-06-15");
const rangeStart = new Date("2025-01-01");
const rangeEnd = new Date("2025-12-31");

const isBetween = targetDate >= rangeStart && targetDate <= rangeEnd;
console.log("Task 4 - Is target date in range?", isBetween);
