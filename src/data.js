export function filtrarPeliculas (data, palabraClave){
  return   data.filter((element)=>{
   return element.title == palabraClave
  })
}