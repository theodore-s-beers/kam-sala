function cipher() {
  const plaintext = document.getElementById("plaintext");

  if (plaintext.value.length === 0) {
    return;
  }

  const plaintextFixed = plaintext.value
    .trim()
    .replace(/\s+/g, " ")
    .replace("لا", "ڸ");

  let ciphertext = "";

  for (let i = 0; i < plaintextFixed.length; i++) {
    const currentChar = plaintextFixed.charAt(i);

    if (currentChar === "ک" || currentChar === "ك" || currentChar === "گ") {
      ciphertext += "م";
    } else if (currentChar === "م") {
      ciphertext += "ک";
    } else if (currentChar === "ص") {
      ciphertext += "لا";
    } else if (currentChar === "ڸ") {
      ciphertext += "ص";
    } else if (
      currentChar === "ا" ||
      currentChar === "آ" ||
      currentChar === "أ" ||
      currentChar === "إ"
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
      currentChar === "ئ" ||
      currentChar === "ى"
    ) {
      ciphertext += "ی"; // Normalize to Persian yāʾ; no substitution
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
      ciphertext += currentChar; // Dotted letters unaffected
    } else if (currentChar === " ") {
      ciphertext += currentChar; // Spaces allowed
    } else {
      // no-op; only recognized letters are processed
    }
  }

  document.getElementById("ciphertext").value = ciphertext;
}

// Submit
document.getElementById("submit-button").addEventListener("click", cipher);
document.getElementById("plaintext").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    cipher();
  }
});

// Copy
document.getElementById("copy-button").addEventListener("click", async () => {
  const result = document.getElementById("ciphertext");

  if (result.value.length > 0) {
    try {
      await navigator.clipboard.writeText(result.value);
      document.getElementById("checkmark").style.visibility = "visible";
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  }
});

// Reset
document.getElementById("reset-button").addEventListener("click", () => {
  document.getElementById("plaintext").value = "";
  document.getElementById("ciphertext").value = "";
  document.getElementById("checkmark").style.visibility = "hidden";
});

// Hide checkmark on input change
document.getElementById("plaintext").addEventListener("input", () => {
  document.getElementById("checkmark").style.visibility = "hidden";
});
