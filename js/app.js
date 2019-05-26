function validate() {
    var user;
    var pass;

    user = document.getElementById("NombreUsuario").value;
    pass = document.getElementById("pass").value;


    if (user === "" || pass === "") {
        var divelement = document.getElementById("campoUser");
        divelement.classList.add("error");
        var divelement2 = document.getElementById("campoPass");
        divelement2.classList.add("error");

        alerta = document.getElementsByClassName("alerta");
        for (i = 0; i < alerta.length; i++) {
            alerta[i].classList.add("alertaroja");
        }
        return false;
    }

}


function Posiciones(evt, posicion) {
    var i, contenido, btnPosiciones;
    contenido = document.getElementsByClassName("contenido");
    for (i = 0; i < contenido.length; i++) {
        contenido[i].style.display = "none";
    }
    btnPosiciones = document.getElementsByClassName("btnPosiciones");
    for (i = 0; i < btnPosiciones.length; i++) {
        btnPosiciones[i].className = btnPosiciones[i].className.replace(" active", "");
    }
    document.getElementById(posicion).style.display = "flex";
    evt.currentTarget.className += " active";
}