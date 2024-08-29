document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    const usernameError = document.getElementById("registerUsernameError");
    const passwordError = document.getElementById("registerPasswordError");
  
    usernameError.textContent = "";
    passwordError.textContent = "";
  
    if (!validateUsername(username)) {
      usernameError.textContent = "El nombre de usuario debe tener entre 8 y 15 caracteres, no debe tener espacios ni comenzar con un número o carácter especial.";
      return;
    }
  
    if (!validatePassword(password)) {
      passwordError.textContent = "La contraseña debe tener entre 12 y 20 caracteres, incluir al menos una mayúscula, una minúscula, un número y un carácter especial.";
      return;
    }
  
    // Almacenar en localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  
    alert("Registro exitoso");
  });
  
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    const usernameError = document.getElementById("loginUsernameError");
    const passwordError = document.getElementById("loginPasswordError");
  
    usernameError.textContent = "";
    passwordError.textContent = "";
  
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
  
    if (username !== storedUsername) {
      usernameError.textContent = "El nombre de usuario es incorrecto.";
      return;
    }
  
    if (password !== storedPassword) {
      passwordError.textContent = "La contraseña es incorrecta.";
      return;
    }
  
    alert("Login exitoso");
  });
  
  function validateUsername(username) {
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{7,14}$/; // 8-15 caracteres, sin espacios, no puede comenzar con número o carácter especial
    return usernameRegex.test(username);
  }
  
  function validatePassword(password) {
    const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{12,20}$/;
    return passwordRegex.test(password);
  }