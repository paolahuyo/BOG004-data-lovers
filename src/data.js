export function filtrarPeliculas (data, palabraClave){
  console.log(palabraClave);
  return data.filter((element)=>{
  element.title.toLowerCase().includes(palabraClave.toLowerCase());
  })
}

export function filtrarAsDs (data, titleMovie){
  let titleData = titleMovie.map((ele) => ele.title);
  let sortData = Array.from(new Set(titleData.sort()));
  return sortData;
  console.log(sortData)
}