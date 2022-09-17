const compra = ["brócoli", "jabón", "manzanas", "papel", "balde"]

compra.push("Aceite de Girasol")

compra.pop()

const peliculas = [
    {titulo: "Matrix", director: "Wachowski", fecha: 1999},
    {titulo: "Memento", director: "Nolan", fecha: 2000},
    {titulo: "The Joker", director: "Todd Phillips", fecha: 2019}
]

const post2010 = peliculas.filter(obj => obj.fecha > 2010)

const directores = peliculas.map((val) => val.director)

const titulos = peliculas.map((val) => val.titulo)

const directorTitulo = directores.concat(titulos)

const directorTituloPropagacion = [...directores, ...titulos]

