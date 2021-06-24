function cipher() {
  var plaintext = document.getElementById("plaintext");

  if (plaintext.value.length === 0) {
    return;
  }

  var plaintextTrimmed = plaintext.value.replace(/\s+/g, " ").trim();
  var plaintextFixed = plaintextTrimmed.replace("لا", "ڸ");

  var ciphertext = "";
  var i = 0;

  for (i = 0; i < plaintextFixed.length; i += 1) {
    var currentChar = plaintextFixed.charAt(i);

    if (currentChar === "ک" || currentChar === "گ") {
      ciphertext += "م";
    } else if (currentChar === "م") {
      ciphertext += "ک";
    } else if (currentChar === "ص") {
      ciphertext += "لا";
    } else if (currentChar === "ڸ") {
      ciphertext += "ص";
    } else if (
      currentChar === "ا" ||
      currentChar === "إ" ||
      currentChar === "أ" ||
      currentChar === "آ"
    ) {
      ciphertext += "و";
    } else if (currentChar === "و" || currentChar === "ؤ") {
      ciphertext += "ا";
    } else if (currentChar === "ح") {
      ciphertext += "ط";
    } else if (currentChar === "ط") {
      ciphertext += "ح";
    } else if (currentChar === "ل") {
      ciphertext += "ه";
    } else if (currentChar === "ه" || currentChar === "ة") {
      ciphertext += "ل";
    } else if (currentChar === "د") {
      ciphertext += "ر";
    } else if (currentChar === "ر") {
      ciphertext += "د";
    } else if (currentChar === "س") {
      ciphertext += "ع";
    } else if (currentChar === "ع") {
      ciphertext += "س";
    } else if (
      currentChar === "ی" ||
      currentChar === "ي" ||
      currentChar === "ى" ||
      currentChar === "ئ"
    ) {
      ciphertext += "ی";
    } else if (
      currentChar === "ب" ||
      currentChar === "پ" ||
      currentChar === "ت" ||
      currentChar === "ث" ||
      currentChar === "ج" ||
      currentChar === "چ" ||
      currentChar === "خ" ||
      currentChar === "ذ" ||
      currentChar === "ز" ||
      currentChar === "ژ" ||
      currentChar === "ش" ||
      currentChar === "ض" ||
      currentChar === "ظ" ||
      currentChar === "غ" ||
      currentChar === "ف" ||
      currentChar === "ق" ||
      currentChar === "ن"
    ) {
      ciphertext += currentChar;
    } else if (currentChar === " ") {
      ciphertext += currentChar;
    } else {
    }
  }

  var ciphertextField = document.getElementById("ciphertext");
  ciphertextField.value = ciphertext;
}

function copyResult() {
  const result = document.getElementById("ciphertext");
  if (result.value.length > 0) {
    result.select();
    result.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.getSelection().removeAllRanges();
    document.getElementById("ciphertext").blur();
    $("#copyButton").tooltip("enable");
    $("#copyButton").attr("data-original-title", "Copied").tooltip("show");
    $("#copyButton").tooltip("disable");
  }
}

function reset() {
  var plaintext = document.getElementById("plaintext");
  var ciphertext = document.getElementById("ciphertext");

  plaintext.value = "";
  ciphertext.value = "";
}

document.getElementById("submitButton").addEventListener("click", cipher);
document.getElementById("resetButton").addEventListener("click", reset);
document.getElementById("copyButton").addEventListener("click", copyResult);
