document.addEventListener('DOMContentLoaded', () => {
  const szamologepKartya = document.querySelector('.calculator-card');
  const fenyHatas = document.querySelector('.glow-effect');
  const urlap = document.getElementById('calculatorForm');
  const tablaSorok = document.querySelectorAll('.table-row');
  
  hatterBlokkokLetrehozasa();

  if (szamologepKartya) {
    document.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const xSzazalek = (clientX / innerWidth - 0.5) * 2; // -1 to 1
      const ySzazalek = (clientY / innerHeight - 0.5) * 2; // -1 to 1
      
      szamologepKartya.style.transform = `
        perspective(1000px)
        rotateY(${xSzazalek * 3}deg)
        rotateX(${ySzazalek * -3}deg)
      `;
      
      if (fenyHatas) {
        fenyHatas.style.transform = `
          translateX(${xSzazalek * 50}px)
          translateY(${ySzazalek * 50}px)
          scale(${1 + Math.abs(xSzazalek) * 0.1})
        `;
      }
    });
  }

  document.addEventListener('mouseleave', () => {
    if (szamologepKartya) {
      szamologepKartya.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    }
    if (fenyHatas) {
      fenyHatas.style.transform = 'translateX(0) translateY(0) scale(1)';
    }
  });

  if (tablaSorok) {
    tablaSorok.forEach(sor => {
      sor.addEventListener('mouseenter', () => {
        sor.style.transform = 'translateX(5px)';
      });
      sor.addEventListener('mouseleave', () => {
        sor.style.transform = 'translateX(0)';
      });
    });
  }

  if (urlap) {
    const elemekSzamaInput = urlap.querySelector('#epitoelemekSzama');
    
    elemekSzamaInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        urlap.submit();
      }
    });
    
    const eredmenyekTarolo = document.querySelector('.results-container');
    if (eredmenyekTarolo) {
      setTimeout(() => {
        eredmenyekTarolo.classList.add('results-visible');
      }, 100);
    }
  }

  reszecskekLetrehozasa();
});

function hatterBlokkokLetrehozasa() {
  const hatter = document.getElementById('animatedBackground');
  if (!hatter) return;
  
  const blokkokSzama = 25;
  
  for (let i = 0; i < blokkokSzama; i++) {
    hatterBlokkLetrehozasa(hatter);
  }
  
  setInterval(() => {
    if (document.visibilityState === 'visible') {
      hatterBlokkLetrehozasa(hatter);
      
      const blokkok = hatter.querySelectorAll('.block');
      if (blokkok.length > 50) {
        blokkok[0].remove();
      }
    }
  }, 1000);
}

function hatterBlokkLetrehozasa(tartalom) {
  const blokk = document.createElement('div');
  blokk.className = 'block';
  
  const szelesseg = Math.random() * 100 + 20;
  const magassag = szelesseg * (Math.random() * 0.8 + 0.3);
  
  blokk.style.width = `${szelesseg}px`;
  blokk.style.height = `${magassag}px`;
  
  const xPoz = Math.random() * 100;
  blokk.style.left = `${xPoz}%`;
  blokk.style.bottom = '-100px';
  
  const idotartam = Math.random() * 25 + 15;
  blokk.style.animationDuration = `${idotartam}s`;
  
  blokk.style.transformOrigin = 'center center';
  
  const forgatas = Math.random() * 90 - 45;
  const mozgasX = (Math.random() * 30 - 15) * (Math.random() > 0.5 ? 1 : -1);
  
  blokk.style.setProperty('--rotate-end', `${forgatas}deg`);
  blokk.style.setProperty('--move-x', `${mozgasX}px`);
  
  blokk.style.animationDelay = `${Math.random() * 2}s`;
  
  tartalom.appendChild(blokk);
  
  setTimeout(() => {
    if (blokk.parentNode === tartalom) {
      tartalom.removeChild(blokk);
    }
  }, (idotartam + 2) * 1000);
}

function reszecskekLetrehozasa() {
  const alkalmazasTarolo = document.querySelector('.app-container');
  if (!alkalmazasTarolo) return;
  
  const reszecskeTarolo = document.createElement('div');
  reszecskeTarolo.className = 'particle-container';
  reszecskeTarolo.style.position = 'absolute';
  reszecskeTarolo.style.top = '0';
  reszecskeTarolo.style.left = '0';
  reszecskeTarolo.style.width = '100%';
  reszecskeTarolo.style.height = '100%';
  reszecskeTarolo.style.overflow = 'hidden';
  reszecskeTarolo.style.zIndex = '0';
  reszecskeTarolo.style.pointerEvents = 'none';
  
  alkalmazasTarolo.prepend(reszecskeTarolo);
  
  const reszecskekSzama = 20;
  
  for (let i = 0; i < reszecskekSzama; i++) {
    reszecskeLétrehozása(reszecskeTarolo);
  }
}

function reszecskeLétrehozása(tartalom) {
  const reszecske = document.createElement('div');
  
  const meret = Math.random() * 5 + 3;
  
  reszecske.style.position = 'absolute';
  reszecske.style.width = `${meret}px`;
  reszecske.style.height = `${meret}px`;
  reszecske.style.background = 'radial-gradient(circle at center, rgba(37, 99, 235, 0.8), rgba(15, 78, 138, 0.4))';
  reszecske.style.borderRadius = '50%';
  reszecske.style.filter = 'blur(1px)';
  reszecske.style.opacity = (Math.random() * 0.4 + 0.1).toString();
  
  reszecske.style.top = `${Math.random() * 100}%`;
  reszecske.style.left = `${Math.random() * 100}%`;
  
  const idotartam = Math.random() * 25 + 15;
  
  reszecske.style.animation = `floatParticle ${idotartam}s linear infinite`;
  
  if (!document.querySelector('#particle-keyframes')) {
    const keyframes = document.createElement('style');
    keyframes.id = 'particle-keyframes';
    keyframes.innerHTML = `
      @keyframes floatParticle {
        0% {
          transform: translate(0, 0) rotate(0deg);
        }
        25% {
          transform: translate(${veletlenIrany(100)}px, ${veletlenIrany(100)}px) rotate(90deg);
        }
        50% {
          transform: translate(${veletlenIrany(100)}px, ${veletlenIrany(100)}px) rotate(180deg);
        }
        75% {
          transform: translate(${veletlenIrany(100)}px, ${veletlenIrany(100)}px) rotate(270deg);
        }
        100% {
          transform: translate(0, 0) rotate(360deg);
        }
      }
    `;
    document.head.appendChild(keyframes);
  }
  
  tartalom.appendChild(reszecske);
}

function veletlenIrany(max) {
  return (Math.random() - 0.5) * max;
}

document.addEventListener('DOMContentLoaded', () => {
  const gomb = document.querySelector('.submit-btn');
  
  if (gomb) {
    gomb.addEventListener('click', (e) => {
      const x = e.clientX - e.target.getBoundingClientRect().left;
      const y = e.clientY - e.target.getBoundingClientRect().top;
      
      const hullam = document.createElement('span');
      hullam.className = 'ripple';
      hullam.style.position = 'absolute';
      hullam.style.width = '1px';
      hullam.style.height = '1px';
      hullam.style.borderRadius = '50%';
      hullam.style.transform = 'scale(0)';
      hullam.style.background = 'rgba(255, 255, 255, 0.7)';
      hullam.style.left = `${x}px`;
      hullam.style.top = `${y}px`;
      hullam.style.animation = 'ripple 0.6s linear';
      hullam.style.pointerEvents = 'none';
      
      gomb.style.position = 'relative';
      gomb.style.overflow = 'hidden';
      
      gomb.appendChild(hullam);
      
      setTimeout(() => {
        hullam.remove();
      }, 600);
    });
    
    if (!document.querySelector('#ripple-keyframes')) {
      const keyframes = document.createElement('style');
      keyframes.id = 'ripple-keyframes';
      keyframes.innerHTML = `
        @keyframes ripple {
          to {
            transform: scale(100);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(keyframes);
    }
  }
});
