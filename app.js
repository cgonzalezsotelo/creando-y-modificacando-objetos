function Consultorio(nombre, pacientes) {
    this.nombre = nombre;
    this.pacientes = pacientes;
}

function Paciente(nombre, edad, rut, diagnostico) {
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    Object.defineProperty(this, "nombre", {
        enumerable: true,
        get: function () {
            return _nombre;
        },
        set: function (nuevoNombre) {
            _nombre = nuevoNombre;
        }
    });
    Object.defineProperty(this, "edad", {
        enumerable: true,
        get: function () {
            return _edad;
        },
        set: function (nuevoEdad) {
            _edad = nuevoEdad;
        }
    });
    Object.defineProperty(this, "rut", {
        enumerable: true,
        get: function () {
            return _rut;
        },
        set: function (nuevoRut) {
            _rut = nuevoRut;
        }
    });
    Object.defineProperty(this, "diagnostico", {
        enumerable: true,
        get: function () {
            return _diagnostico;
        },
        set: function (nuevoDiagnostico) {
            _diagnostico = nuevoDiagnostico;
        }
    });
}

Consultorio.prototype.todosLosPaciente = function () {
console.log(JSON.parse(JSON.stringify(this.pacientes)));
};

Consultorio.prototype.buscarPaciente = function (nombrePacienteBuscar) {
    var index = -1;
    for (var i = 0; i < this.pacientes.length; i++) {
        if (this.pacientes[i].nombre == nombrePacienteBuscar) {
            index = i;
        }
    }

    if (index >= 0) {
        console.log("Paciente encontrado, sus datos son: ", JSON.parse(JSON.stringify(this.pacientes[index])));
    } else {
        console.log("Paciente no encontrado");
    }
}

const paciente1 = new Paciente("Cristian", 35, "5.555.555-k", "Estrés");

const paciente2 = new Paciente("Jorge", 30, "5.555.555-k", "Resfrio");

const consultorioJuanBautista = new Consultorio("Juan Bautista", [paciente1, paciente2]);

consultorioJuanBautista.todosLosPaciente();
consultorioJuanBautista.todosLosPaciente("Cristian");





