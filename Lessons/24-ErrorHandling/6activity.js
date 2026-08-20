// ============================================================================
// Activity: Global Error Handling
// ============================================================================

// ----------------------------------------------------------------------------
// Task 1: Create a global window.onerror handler that logs:
//         - Error message
//         - Line number
// ----------------------------------------------------------------------------

// window.onerror catches uncaught synchronous runtime errors in the global scope
window.onerror = function (message, source, line, column, error) {
  // Logs the descriptive error message alongside the specific line number where it occurred
  console.error("Error:", message, "at line", line);
};


// ----------------------------------------------------------------------------
// Task 2: Add an unhandledrejection listener that logs rejected Promise reasons
// ----------------------------------------------------------------------------

// unhandledrejection intercepts rejected Promises that lack a corresponding .catch() block
window.addEventListener("unhandledrejection", function (event) {
  // event.reason extracts the rejection payload, error instance, or error string
  console.error("Unhandled rejection:", event.reason);
});


// ----------------------------------------------------------------------------
// Task 3: Create a function logError(error) and use it inside both global handlers
// ----------------------------------------------------------------------------

// Centralized logging service function to standardize error output formatting
function logError(error) {
  // Normalizes the message output whether the input is an Error object or a primitive string
  console.error("Central Log:", error.message || error);
}

// Global runtime handler delegating the uncaught error to the centralized logger
window.onerror = function (msg, src, line, col, err) {
  // Falls back to creating a new Error object if the raw error object (err) is undefined
  logError(err || new Error(msg));
};

// Global promise rejection handler delegating the rejection reason to the centralized logger
window.addEventListener("unhandledrejection", function (event) {
  // Sends the rejected promise reason directly into the central logging function
  logError(event.reason);
});


// ----------------------------------------------------------------------------
// Task 4: Trigger:
//         - One runtime error
//         - One unhandled Promise rejection
// ----------------------------------------------------------------------------

// Triggers a synchronous ReferenceError because this function is not declared in scope
nonExistingFunction();

// Triggers an asynchronous unhandled rejection event by failing without a .catch() handler
Promise.reject("API down");


// ----------------------------------------------------------------------------
// Task 5: Explain why global handlers should NOT replace try/catch
// ----------------------------------------------------------------------------

/*
  Explanation:

  1. Safety Net vs. Control Flow:
     - Global handlers (window.onerror, unhandledrejection) act strictly as an observational safety net.
     - They notify developers of unexpected fatal crashes or send logs to monitoring services (e.g., Sentry).

  2. Recovery & Fallbacks:
     - Local `try/catch` allows runtime recovery (e.g., rendering fallback UI, retrying requests, or setting defaults).
     - Global handlers cannot resume interrupted execution flow or prevent the failure of the call stack.

  3. Blast Radius:
     - Catching errors locally with `try/catch` isolates faults so they don't tear down the entire application lifecycle.
*/