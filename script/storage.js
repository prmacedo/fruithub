const data = [
  {
    name: "Honey lime combo",
    price: "2,000",
    img: "honey-lime-peach-fruit-salad.png"
  },
  {
    name: "Berry mango combo",
    price: "2,000",
    img: "glowing-berry-fruit-salad.png"
  },
  {
    name: "Quinoa fruit salad",
    price: "10,000",
    img: "breakfast-quinoa-and-red-fruit-salad.png"
  },
  {
    name: "Tropical fruit salad",
    price: "10,000",
    img: "best-ever-tropical-fruit-salad.png"
  },
  {
    name: "Melon fruit salad",
    price: "10,000",
    img: "berryworld-kiwiberry-fruit-salad.png"
  },
]

const appStorage = {

  login() {
    const input = document.querySelector("input");

    if (!input.value) {
      input.classList.add("error");
    } else {
      localStorage.setItem("username", input.value);
      location.href="./home.html";
    }
  },

  getUsername() {
    window.addEventListener("load", () => {
      const name = localStorage.getItem("username");
      document.querySelector("#welcome-name").innerHTML = `Welcome, ${name}`;
    });
  },

  selectFood(id) {
    if (data[id]) {
      localStorage.setItem("food", JSON.stringify(data[id]));
      location.href="./basket.html";
    }
  },

  getFood() {
    window.addEventListener("load", () => {
      const food = JSON.parse(localStorage.getItem("food"))
      const h1 = document.querySelector(".food-info h1")
      const img = document.querySelector(".img-container img")
      const total = document.querySelector(".price .total")

      h1.textContent = food.name
      img.src = `./imgs/${food.img}`
      total.textContent = food.price
    })
  }
}