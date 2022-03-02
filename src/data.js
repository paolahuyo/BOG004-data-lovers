export function filtrarPeliculas (data, palabraClave){
  console.log(palabraClave.value);
  return data.filter((element)=>{
  element.title.toLowerCase() == palabraClave.value.toLowerCase()
  })
}

export function filtrarAsDs (data, titleMovie){
  let titleData = titleMovie.map((ele) => ele.title);
  let sortData = Array.from(new Set(titleData.sort()));
  return sortData;
  console.log(sortData)
}