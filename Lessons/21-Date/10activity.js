// ==========================================
// JavaScript Date Formatting Tasks
// ==========================================

const today = new Date();

// Task 1: Print full date and time using toString()
console.log("Task 1 - Full String:", today.toString());

// Task 2: Print only the date part (no time)
console.log("Task 2 - Date Only:", today.toDateString());

// Task 3: Print the date in ISO 8601 format
console.log("Task 3 - ISO Format:", today.toISOString());

// Task 4: Display today's date in UK format (dd/mm/yyyy)
const ukFormat = today.toLocaleDateString("en-GB");
console.log("Task 4 - UK Format:", ukFormat);

// Task 5: Display today's date in Arabic (Jordan) format (ar-JO)
const jordanFormat = today.toLocaleDateString("ar-JO");
console.log("Task 5 - Arabic (Jordan) Format:", jordanFormat);