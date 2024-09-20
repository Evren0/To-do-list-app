function addCloseButtons() {
    const myNodelist = document.getElementsByTagName("LI");
    for (let i = 0; i < myNodelist.length; i++) {
      if (!myNodelist[i].querySelector('.close')) { 
        const span = document.createElement("SPAN");
        const txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
      }
    }
  }

  addCloseButtons();

  const closeButtons = document.getElementsByClassName("close");
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
      const li = this.parentElement;
      li.style.animation = 'fadeOut 0.5s forwards';
      li.addEventListener('animationend', () => {
        li.remove();
      });
    }
  }

  const list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);

  function newElement() {
    const inputValue = document.getElementById("myInput").value.trim();
    if (inputValue === '') {
      return;
    }

    const li = document.createElement("li");
    li.textContent = inputValue;
    document.getElementById("myUL").appendChild(li);
    li.style.animation = 'slideIn 0.5s forwards';

    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.onclick = function() {
      li.style.animation = 'fadeOut 0.5s forwards';
      li.addEventListener('animationend', () => {
        li.remove();
      });
    }

    document.getElementById("myInput").value = "";
  }
