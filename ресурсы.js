if (!sessionStorage.getItem("name_name")) { 
    sessionStorage.setItem("name_name", name);
  }

  let name_name = sessionStorage.getItem("name_name");
  alert("Привет, " + name_name + "! Рады видеть вас тут");


  document.querySelector('#card1').onclick = function () {
    document.location.href = "https://habr.com/ru/articles/793992/"
  };

  document.querySelector('#card2').onclick = function () {
    document.location.href = "https://habr.com/ru/companies/otus/articles/795391/"
  };

  document.querySelector('#card3').onclick = function () {
    document.location.href = "https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/JavaScript_basics"
  };

  document.querySelector('#card4').onclick = function () {
    document.location.href = "https://code.mu/ru/markup/book/prime/"
  };

  document.querySelector('#card5').onclick = function () {
    document.location.href = "https://practicum.yandex.ru/cpp/"
  };

  document.querySelector('#card6').onclick = function () {
    document.location.href = "https://www.youtube.com/watch?v=Bluxbh9CaQ0&t=6234s"
  };
   