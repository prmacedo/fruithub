const qtd = document.querySelector('.qtd');
const total = document.querySelector('.total')

const Basket = {
  add() {
    const price = Number(total.textContent.replace(',','.')) / Number(qtd.textContent);
    qtd.textContent = Number(qtd.textContent) + 1;
    total.textContent = String(price * (Number(qtd.textContent))) + ',000';
  },

  subtract() {
    if (Number(qtd.textContent) > 1) {
      const price = Number(total.textContent.replace(',','.')) / Number(qtd.textContent);
      qtd.textContent = Number(qtd.textContent) - 1;
      total.textContent = String(price * (Number(qtd.textContent))) + ',000';
    }
  }
}