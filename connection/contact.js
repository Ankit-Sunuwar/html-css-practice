const submitForm = () => {
  const msgClass = document.getElementsByClassName("msg")[0];
  msgClass.innerHTML = "Thanks For Contacting Us";
  setTimeout(() => {
    msgClass.innerHTML = "";
  }, 4000);
};
