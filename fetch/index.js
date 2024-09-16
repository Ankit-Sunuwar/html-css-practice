const fetchData = async () => {
  try {
    const result = await fetch("https://dummyjson.com/users");
    const data = await result.json();
    const { users = [] } = data; // assignment  destructure.  error proof
    const firstNames = users.map((user) =>
      user.firstName.concat("", user.lastName)
    ); // Array of Strings.

    //Print the result in HTML
    let newHTML = "";
    newHTML += "<ol>";
    firstNames.forEach((user) => (newHTML += `<li>${user}</li>`));
    newHTML += "</ol>";
    document.getElementById("allUsers").innerHTML = newHTML;
  } catch (e) {
    console.error(e);
  }
};
