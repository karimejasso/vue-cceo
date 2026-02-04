function sumar (Num){ //aqui se declara la funcion
    console.log(Num)
}
sumar(10)

const sumarDos = (num1, num2) => (num1 + num2) //aqui se declara una constante

const resultado = sumarDos(20, 30)
console.log(resultado)  //con este muestras en pantalla el resultado

const mensaje = nombre => {
    return 'holaaaaaa' + nombre
}
const resultadoDos = mensaje('juan')
console.log(resultadoDos)

const sumaTres = (num = 2) => { //aqui si le damos un numero va a reempeplazar el valor asignado
    console.log(num + 5)        //osea no va a ser 2+5+8, va a hacer 8+5 solamente
}
sumaTres(8)

//template string
const numero = (num1, num2) => {
    return `el numero es: ${num1 + num2}`
}
const resultado7 = numero(10, 20)
console.log(resultado7)

//objetos
const mascota = {
    nombre: 'tom',
    edad:30,
    vivo:true,
    razas: ['peludo','negro', 'pelon']
}
console.log(mascota)
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.vivo)
console.log(mascota.razas[0])
mascota.id = 1
console.log(mascota.id)

const nombreMascota = mascota.nombre

const {edad,nombre} = mascota
console.log(nombre)

const web = {
    nombre: 'bluuweb',
    links:{
        enlace: 'www.bluue.cl'
    },
    redesSociales:{
        youtube:{
            enlace: 'youtube.com/bluueweb',
            nombre: 'bluueweb yt'
        }
    }
}
console.log(web.redesSociales.youtube.enlace)

//fetch
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then( res => res.json())
    .then(data =>{
       // console.log(data)
        let arrayNombres = []
        data.results.forEach(element => {
            //console.log(element.name)
            arrayNombres.push(element.name)
        });
        console.log(arrayNombres)
    })
.catch(error => console.log(error))

//async awamit
const obtenerPokemones = async () => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await resizeTo.json()
        //console.log(data.results)
        const arrayNombres = data.results.map(poke => poke.url) // un .map crea un nuevo array con los resultados de la llamada a la funcion indicada aplicado a cada uno de sus elementos
    }   catch (error) {
        const arrayUrl = data.results.filter(poke => poke.poder>5)  // un .filter crea un nuevo array con todos los elementos que cumplan la condicion implementada por la funcion dada
        console.log(arrayNombres)                               
        console.log(error)
        }
    }
}