//muda cor
const btn_num = document.querySelectorAll("#numero");
const btn_simb = document.querySelectorAll("#simbolo");
const btn_img = document.querySelector("#deletar");
console.log(btn_img.parentElement.removeEventListener);
//numeros
btn_num.forEach((item) =>
  item.addEventListener("click", (event) => {
    event.target.style.animation = "";
    setTimeout(() => (event.target.style.animation = "muda_cor_verde 0.3s 1"));
  })
);
//simbolos
btn_simb.forEach((item) =>
  item.addEventListener("click", (event) => {
    event.target.style.animation = "";
    setTimeout(
      () => (event.target.style.animation = "muda_cor_laranja 0.3s 1")
    );
  })
);
//delete
btn_img.addEventListener("click", (event) => {
  btn_img.children.removeEventListener;
  event.target.style.animation = "";
  setTimeout(() => (event.target.style.animation = "muda_cor_vermelho 0.3s 1"));
});

//função da calculadora
function insert(num) {
  var display = document.querySelector(".calculadora-texto").innerHTML;
  if (display.length <= 10) {
    document.querySelector(".calculadora-texto").innerHTML = display + num;
  }
}

function limpa() {
  document.querySelector(".calculadora-texto").innerHTML = null;
}

function deletar() {
  let display = document.querySelector(".calculadora-texto").innerHTML;
  display = display.substring(0, display.length - 1);
  document.querySelector(".calculadora-texto").innerHTML = display;
}

function calcula() {
  let display = document.querySelector(".calculadora-texto").innerHTML;
  if (display) {
    document.querySelector(".calculadora-texto").innerHTML = eval(display);
  }
}

//adiciona botões do teclado

