function validarLogin() { 
    // Traigo los datos del form
    var usuario = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Verificacion de que los campos no estén vacíos    
    
    if (usuario == "" || password == "" ) {
        alert("Por favor complete todos los campos");
        return false;
    }

    // Si la validación es exitosa, redireccionar al index
    alert("Acceso Válido");
    window.location.href = 'index.html';
    return false;

}


function validarFormulario() { 
    // Traigo los datos del form
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("tel").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Verificacion de que los campos no estén vacíos    
    
    if (nombre == "" || tel == "" || email == "" || password == "" ) {
        alert("Por favor complete todos los campos");
        return false;
    }

    // Si la validación es exitosa, redireccionar al index
    alert("Usuario registrado")
    window.location.href = 'index.html';
    return false;

}
