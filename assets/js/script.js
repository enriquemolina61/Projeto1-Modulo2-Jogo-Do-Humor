const imgslist = [
    "./assets/img/relaxado.gif",
    "./assets/img/concentrado.gif",
    "./assets/img/sementender.gif",
    "./assets/img/neyday.gif",
    ];
const situacao = document.querySelector("#situacao");
const img = document.querySelector("img");
const button = document.querySelector(".button");
const nome = document.querySelector("#nome");


let mudanca = 0;
function alterar() {
  if (mudanca == 0) {
    nome.innerText = "Neymar Jr PSG";
    situacao.innerText = "Concentrado";
    img.src = imgslist[1]
  } else if (mudanca == 1) {
    nome.innerText = "Neymar Jr";
    situacao.innerText = "Supreso";
    img.src = imgslist[2]
  } else if (mudanca == 2) {
    nome.innerText = "Ney Day";
    situacao.innerText = "OnFire";
    img.src = imgslist[3]
  } else if (mudanca == 3) {
    nome.innerText = "Neymar Jr Barcelona";
    situacao.innerText = "Relaxado ";
    img.src = imgslist[0]

  }
  mudanca++;
  if (mudanca >= 4) {
    mudanca = 0;
  }
}
