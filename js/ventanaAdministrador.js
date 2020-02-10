class User {

    constructor(name, dni, email, address) {
        this.name = name;
        this.dni = dni;
        this.email = email;
        this.address = address;
        this.id = generarId(20);


    }



    set setName(name) {
        this.name = name;
    }

    get getName() {
        return this.name;
    }

    set setDNI(dni) {
        this.dni = dni;
    }

    get getDNI() {
        return this.dni;
    }

    set setEmail(email) {
        this.email = email;
    }

    get getEmail() {
        return this.email;
    }
    set setAddress(address) {
        this.address = address;
    }

    get getAddress() {
        return this.address;
    }

}


function addUser() {

    const name = document.getElementById('userName').value;
    const dni = document.querySelector('#userDNI').value;
    const email = document.querySelector('#userEmail').value;
    const address = document.querySelector('#userAddress').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (name != "") {


        var user = new User(
            name,
            dni,
            email,
            address

        );
        users.push(user);

        localStorage.setItem('users', JSON.stringify(users));

    }

    UsersList();

}

function generarId(length) {
    var id = '';
    var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var caracteresLength = caracteres.length;
    for (var i = 0; i < length; i++) {
        id += caracteres.charAt(Math.floor(Math.random() * caracteresLength));
    }
    return id;
}

function UsersList() {

    //    console.log("hello");
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let tabla = '';

    for (let index = 0; index < users.length; index++) {

        // console.log("hi");
        let a = users[index];
        tabla += '<tr><td>' + a.name + '</td><td>' + a.dni + '</td></tr>';

    }

    document.getElementById('usersTable').innerHTML = tabla;

}




function clasesList() {


    let clases = JSON.parse(localStorage.getItem('Clases')) || [];


    idUsuario = JSON.parse(localStorage.getItem('usuarioLogeado')) || [];


    let tablaClases = '';
    for (let index = 0; index < clases.length; index++) {


        let item = clases[index];

        tablaClases += '<tr><td>' + item.nombre + '</td><td>' + item.horario + '</td><td>' + item.dia + '</td><tr>';

    }

    document.getElementById('clasesTable').innerHTML = tablaClases;
}



function iniciarSesion() {

    let users = JSON.parse(localStorage.getItem('users')) || [];
    const usuarioLogeado = JSON.parse(localStorage.getItem('usuarioLogeado')) || [];
    let nombre = document.getElementById('nombreLoginUsuario').value;
    let contraseña = document.getElementById('contraseñaLoginUsuario').value;


    for (var index = 0; index < users.length; index++) {
        var usuario = users[index];
        if (usuario.name == nombre && usuario.dni == contraseña) {

            // console.log("soy el id de " + usuario.name + " " + usuario.id);
            usuarioLogeado.push(usuario);

            localStorage.setItem('usuarioLogeado', JSON.stringify(usuarioLogeado));

            window.location.href = "reservarClase.html"

            if (usuarioLogeado.length > 2) {
                localStorage.removeItem('usuarioLogeado')
            }

        }


        nombre.value = "";
        contraseña.value = "";
    }


}



function loginLogOut() {

    // const usuarioLogeado = JSON.parse(localStorage.get}Item('usuarioLogeado')) || [];

    let btnIniciarSesion = document.getElementById('btnlogin');
    let usuarioLogeado = JSON.parse(localStorage.getItem('usuarioLogeado')) || [];

    btnIniciarSesion.addEventListener("click", function () {

        for (let index = 0; index < usuarioLogeado.length; index++) {


            let nombre = usuarioLogeado[index];
            if (btnIniciarSesion.innerHTML == "Log In") {
                btnIniciarSesion.innerHTML = nombre.name + " " + nombre.dni;

            }

        }

        btnIniciarSesion.addEventListener("click", function () {

            if (btnIniciarSesion.innerHTML != "Log in") {
                btnIniciarSesion.innerHTML = 'Log In';
            }else{
                btnIniciarSesion.innerHTML = nombre.name ;
            }
        })
    });
}