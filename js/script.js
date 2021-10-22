function wordWrite() {
  const formulario = document.getElementById("formulario");
  word1 = formulario["word1"].value;
  word2 = formulario["word2"].value;
  word3 = formulario["word3"].value;
  result = document.getElementById("result").innerHTML =
    `${word1.replace(/\s/g, "").split("").join("-")}\n${word2
      .replace(/\s/g, "")
      .split("")
      .join("-")}\n${word3.replace(/\s/g, "").split("").join("-")}\n` +
    `${word2.replace(/\s/g, "").split("").join("-")}\n${word3
      .replace(/\s/g, "")
      .split("")
      .join("-")}\n${word1.replace(/\s/g, "").split("").join("-")}\n` +
    `${word3.replace(/\s/g, "").split("").join("-")}\n${word2
      .replace(/\s/g, "")
      .split("")
      .join("-")}\n${word1.replace(/\s/g, "").split("").join("-")}\n` +
    `${word1.replace(/\s/g, "").split("").join("-")}\n${word3
      .replace(/\s/g, "")
      .split("")
      .join("-")}\n${word2.replace(/\s/g, "").split("").join("-")}\n` +
    `${word2.replace(/\s/g, "").split("").join("-")}\n${word1
      .replace(/\s/g, "")
      .split("")
      .join("-")}\n${word3.replace(/\s/g, "").split("").join("-")}\n` +
    `${word3.replace(/\s/g, "").split("").join("-")}\n${word1
      .replace(/\s/g, "")
      .split("")
      .join("-")}\n${word2.replace(/\s/g, "").split("").join("-")}\n`;
}
