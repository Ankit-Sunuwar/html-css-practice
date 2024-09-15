const showHidePassword = () => {
  const currentPw = document.getElementById("myPassword");
  // line number 48 ko type ho bhanye ra bujau na khoj ye ko ho.
  if (currentPw.type === "password") {
    currentPw.type = "text";
  } else {
    currentPw.type = "password";
  }
};
