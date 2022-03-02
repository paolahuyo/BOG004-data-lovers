export function filtrarPeliculas (data, palabraClave){
  console.log(palabraClave.value);
  return data.filter((element)=>{
  element.title.toLowerCase() == palabraClave.value.toLowerCase()
  })
}

