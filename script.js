function calcular(tipo, valor) {
  if (tipo === "acao") {
    if (valor === "c") document.getElementById("tela").value = "";

    if (
      valor === "+" ||
      valor === "-" ||
      valor === "*" ||
      valor === "/" ||
      valor === "." ||
      valor === "(" ||
      valor === ")" ||
      valor === "[" ||
      valor === "]" ||
      valor === "{" ||
      valor === "}"
    ) {
      document.getElementById("tela").value += valor;
    }

    if (valor === "=") {
      var valor_campo = eval(document.getElementById("tela").value);
      document.getElementById("tela").value = valor_campo;
    }
  } else if (tipo === "valor") {
    document.getElementById("tela").value += valor;
  }
}
