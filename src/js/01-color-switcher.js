// Exercițiul 1 - comutator de culori
// În codul HTML există butonul "Start" și "Stop".
// Scrieți un script care, după apăsarea butonului "Start", o dată pe secundă schimbă culoarea de fundal a lui <body> la o valoare aleatorie, folosind stilul inline. La click-ul butonului "Stop", schimbarea culorii de fundal se va opri.
// ATENȚIE
// Butonul "Start" poate fi apăsat de un număr infinit de ori. Faceți astfel încât, în timp ce schimbarea culorii de fundal este activată, butonul "Start" să fie dezactivat (disabled).
// Puteți folosi funcția getRandomHexColor pentru a genera o culoare aleatorie:
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }

// Funcția care generează o culoare aleatoare în format hex:
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

// Se obțin referințe către butoanele "Start" și "Stop":
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

// Variabilă pentru a stoca intervalul de schimbare a culorii:
let colorChangeInterval = null;

// Adaugă un ascultător de eveniment pentru clic pe butonul "Start":
startBtn.addEventListener('click', startColorChange);
// Adaugă un ascultător de eveniment pentru clic pe butonul "Stop":
stopBtn.addEventListener('click', stopColorChange);

// Funcția apelată la clic pe butonul "Start":
function startColorChange() {
  // Dezactivează butonul "Start":
  startBtn.disabled = true;
  // Activează butonul "Stop":
  stopBtn.disabled = false;

  // Setează un interval care schimbă culoarea de fundal o dată pe secundă:
  colorChangeInterval = setInterval(changeBackgroundColor, 1000);
}

// Funcția apelată la clic pe butonul "Stop":
function stopColorChange() {
  // Activează butonul "Start":
  startBtn.disabled = false;
  // Dezactivează butonul "Stop":
  stopBtn.disabled = true;

  // Oprește intervalul de schimbare a culorii de fundal:
  clearInterval(colorChangeInterval);
}

// Funcția care schimbă culoarea de fundal la o valoare aleatoare:
function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
