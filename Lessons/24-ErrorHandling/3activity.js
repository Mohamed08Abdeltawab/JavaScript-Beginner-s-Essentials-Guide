class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

throw new ValidationError("Username is required");


//2
class AuthError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthError";
  }
}

function login(user) {
  if (!user) {
    throw new AuthError("User not authenticated");
  }
  console.log("Login successful");
}

//3
try {
  login(null);
} catch (err) {
  console.log(err.name);
  console.log(err.message);
}

//4
class ConfigError extends Error {
  constructor(message) {
    super(message);
    this.name = "ConfigError";
  }
}

function loadConfig(config) {
  if (!config) {
    throw new ConfigError("Missing configuration");
  }
}

loadConfig(null);


//5
try {
  throw new ValidationError("Invalid email format");
} catch (err) {
  console.log(err.stack);
}