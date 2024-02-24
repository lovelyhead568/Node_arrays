let array = [];
let array2 = [{nombre: "jose", apellido: "Carrillo"},{nombre: "andres", apellido: "arrieche"}];

console.log(array2);

//buscar

let busqueda = array2.find((item) =>{
    if (item.nombre === "andres"){
        return true
    }
} )

array.push("rabi")

let find = array2.findIndex((item)=>{
    if(item.nombre == "andres"){
        return true
    }

})
console.log("elemento encontrado en la posicion:",find);
console.log(busqueda);


//modify
let modificar = (array2[find] = {nombre: "carlos", apellido: "andrade"});


console.log(" se modifico a andres por:",modificar);
console.log(array2);

// borrar
delete(array2[find])

console.log(" lets delete: jose, see:",array2);

// map

let maper = array2.map(item=>({
    nombre :item.nombre.concat(" Alejandro"),
    apellido: item.apellido.concat(" Martinez")

}));
console.log(maper);