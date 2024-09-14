
if (!sessionStorage.getItem("name_name")) {
    
    let name = prompt("Введите ваше имя:");
  

    sessionStorage.setItem("name_name", name);
  }

  let name_name = sessionStorage.getItem("name_name");
  alert("Привет, " + name_name + "! ");
   