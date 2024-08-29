  function register() {
    let username = document.getElementById("registerUsername").value;
    let password = document.getElementById("registerPassword").value;
    // let usernameError = document.getElementById("registerUsernameError");
    // let passwordError = document.getElementById("registerPasswordError");
  

  
    if (!validateUsername(username)) {
      alert("El nombre de usuario debe tener entre 8 y 15 caracteres, no debe tener espacios ni comenzar con un número o carácter especial.");
      return;
    }
  
    if (!validatePassword(password)) {
      console.log(validatePassword("Simonmirandar3-")); // Debe devolver true si la contraseña es válida

      alert("La contraseña debe tener entre 12 y 20 caracteres, incluir al menos una mayúscula, una minúscula, un número y un carácter especial.");
      return;
    }

    if(localStorage.getItem(username.toLowerCase())){
      alert("El usuario ya se ecuentra registrado");
      return;
    }
  
    // Almacenar en localStorage
    localStorage.setItem(username.toLowerCase(), password);
    window.location.href = 'index.html';
  }


  
  function login(){
    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    // let usernameError = document.getElementById("loginUsernameError");
    // let passwordError = document.getElementById("loginPasswordError");
  
    // usernameError.textContent = "";
    // passwordError.textContent = "";
  
    const passwordStorage = localStorage.getItem(username);

    if(!username || !password){
      alert("Ingrese el usuario y la contraseña");
    }
  
    if (!passwordStorage) {
      alert("Usuario no encontrado");
      return;
    }
  
    if (password !== passwordStorage) {
      alert("Usuario o contraseña incorrectos.");
      return;
    }
  
    window.location.href = 'index.html';
  };
  
  function validateUsername(username) {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{7,14}$/; // 8-15 caracteres, sin espacios, no puede comenzar con número o carácter especial
    return usernameRegex.test(username);
  }
  
  function validatePassword(password) {
    // Expresión regular actualizada
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,20}$/;
    return passwordRegex.test(password);
}