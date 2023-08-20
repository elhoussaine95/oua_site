const text = "Enseignant & Développeur généraliste...";
let index = 0;

function type() {
  const textElement = document.getElementById('text');
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 200);
  }
}
type();


