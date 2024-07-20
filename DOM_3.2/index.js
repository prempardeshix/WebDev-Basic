function addPara() {
  let para = document.createElement("p");
  para.textContent = "JS is a single threaded language.";
  document.body.appendChild(para);
}

function appendNewMessage() {
  let para = document.createElement("p");
  para.textContent = "Chamoy...!!!";
  document.body.appendChild(para);
}

addPara();
appendNewMessage();
