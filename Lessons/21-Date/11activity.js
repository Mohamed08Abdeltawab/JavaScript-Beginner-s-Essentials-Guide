// ==========================================
// JavaScript Business Day Logic Tasks
// ==========================================

// Helper function to check if a date falls on a weekend
// (0 = Sunday, 6 = Saturday for standard business week Monday-Friday)
function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

// Task 1: Check if today is a business day
function isBusinessDay(date = new Date()) {
  return !isWeekend(date);
}

console.log("Task 1 - Is today a business day?", isBusinessDay());


// Task 2: Return the next business day
function getNextBusinessDay(startDate = new Date()) {
  const nextDate = new Date(startDate);
  do {
    nextDate.setDate(nextDate.getDate() + 1);
  } while (isWeekend(nextDate));
  return nextDate;
}

console.log("Task 2 - Next business day:", getNextBusinessDay().toDateString());


// Task 3: Add 5 business days to today
function addBusinessDays(startDate, daysToAdd) {
  const result = new Date(startDate);
  let added = 0;
  while (added < daysToAdd) {
    result.setDate(result.getDate() + 1);
    if (!isWeekend(result)) {
      added++;
    }
  }
  return result;
}

const today = new Date();
console.log("Task 3 - 5 business days from today:", addBusinessDays(today, 5).toDateString());


// Task 4: Calculate business days between 1 March 2025 and 15 March 2025
function getBusinessDaysBetween(startDate, endDate) {
  let count = 0;
  const current = new Date(startDate);

  // Iterate day by day from startDate up to endDate
  while (current <= endDate) {
    if (!isWeekend(current)) {
      count++;
    }
    current.setDate(current.getDate() + 1);
  }
  return count;
}

const start = new Date("2025-03-01");
const end = new Date("2025-03-15");
console.log("Task 4 - Business days between March 1 and March 15, 2025:", getBusinessDaysBetween(start, end));


// ==========================================
// Task 5: Holidays vs. Weekends Explanation
// ==========================================

/*
  Why Public Holidays are handled differently from Weekends:

  1. Predictability vs. Dynamic Data:
     - Weekends follow a fixed mathematical rule based on the day of the week (e.g., date.getDay() === 0 || 6).
     - Holidays vary by country, region, organization, and even year.

  2. Shift Rules & Observances:
     - When a holiday falls on a weekend, governments often shift the observed day off to Sunday, Monday, or Friday.

  3. Lunar / Astronomical Calendars:
     - Fixed mathematical dates don't apply to lunar holidays (e.g., Eid, Easter, Lunar New Year), which shift annually.

  4. Architectural Solution:
     - Weekends can be checked via local date methods.
     - Holidays require an external data source (a predefined list, database table, or Holiday API) to validate whether a specific date string is a non-working day.
*/