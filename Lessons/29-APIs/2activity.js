async function createNewUser(userData) {
  try {
    //get response of creating user
    const response = await fetch("https://api.example.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",// i need the response you will send to me with json
      },
      body: JSON.stringify(userData), //convert js objects to json
    });

    //check is ok
    if (!response.ok) {
      throw new Error(`HTTP Error:  ${response.status}`);
    }

    //if is ok
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Faild to create user: ", error.message);
    throw error;
  }
}

//try function
async function main() {
  const newUser = {
    name: "Ali Karem",
    email: "ali@gmail.com",
    role: "Developer",
  };

  try {
    console.log("Creating user...");
    //creating user using function
    const createdUser = await createNewUser(newUser);
    console.log("User Created successfully: ", createdUser);
  } catch (err) {
    console.log(err.message);
  }
}

main();