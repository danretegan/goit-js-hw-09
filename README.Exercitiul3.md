Exercițiul 3 - generator de promise-uri

Îndepliniți acest task în fișierele 03-promises.html și 03-promises.js. Urmăriți filmulețul demonstrativ al generatorului de promise-uri.

HTML-ul de mai jos conține un marcaj de formular în care utilizatorul va introduce prima întârziere în milisecunde, apoi pasul pentru creșterea întârzierii pentru fiecare promise și numărul de promise-uri care urmează a fi create.

<form class="form">
  <label>
    First delay (ms)
    <input type="number" name="delay" required />
  </label>
  <label>
    Delay step (ms)
    <input type="number" name="step" required />
  </label>
  <label>
    Amount
    <input type="number" name="amount" required />
  </label>
  <button type="submit">Create promises</button>
</form>

Scrieți un script care, atunci când se trimite un formular, apelează funcția createPromise(position, delay) de atâtea ori de câte este specificat în câmpul amount. La fiecare apel, transmiteți-i numărul promise-ului creat (position) și întârzierea ținând cont de primul (delay) introdus de utilizator și pasul (step).

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

Modificați codul funcției createPromise astfel încât să returneze un promise care va fi executat sau respins după un delay. Valoarea promise-ului trebuie să fie un obiect care conține proprietățile position și delay cu valorile parametrilor ce au același nume. Utilizați codul funcției inițiale pentru a alege ce vei face cu acel promise - fie executat sau respins.

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

Librăria de notificări
ATENȚIE
Această funcționalitate nu este necesară la trimiterea acestui task, dar va fi un exercițiu suplimentar destul de bun.

Pentru a afișa notificări către utilizator, în loc de console.log(), puteți folosi librăria notiflix.
