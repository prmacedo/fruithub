function login() {
  const input = document.querySelector("input");

  if (!input.value) {
    input.classList.add("error");
  } else {
    localStorage.setItem("username", input.value);
    location.href="";
  }
}