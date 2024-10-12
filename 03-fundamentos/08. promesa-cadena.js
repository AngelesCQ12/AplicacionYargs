const empleados = [
    {
        id: 1,
        nombre: 'Angeles'
    },
    {
        id: 2,
        nombre: 'Jennifer'
    },
    {
        id: 3,
        nombre: 'Ramon'
    },
];

const salarios = [
    {
        id: 1,
        salario: 2000
    },
    {
        id: 2,
        salario: 1500
    },
];
 
const getEmpleado = (id) =>{
    const empleado = empleados.find(e => e.id === id)?.nombre
    
    return new Promise((resolve,reject) =>{
        (empleado)
        ? resolve(empleado)
        : reject(`No existe el empleado con id ${id}`)
    })
}

const getSalario = (id) =>{
    const salario = salarios.find(s => s.id === id)?.salario

    return new Promise((resolve, reject) => {
        (salario)
        ? resolve(salario)
        : reject(`No existe el salario del empleado id ${id}`)
        
    })
}

const id = 3

// getEmpleado(id)
// .then(empleado => console.log(empleado))
// .catch(err => console.log(err));

// getSalario(id)
// .then(salario => sonsole.log(salario))
// .catch(err => console.log(err));
let nombre 

getEmpleado(id)
    .then (empleado =>{
            nombre = empleado
            return getSalario(id)
        })
    .then(salario => console.log('El empleado',nombre,'tiene un salairo de: ',salario))
    .catch(err => console.log(err));