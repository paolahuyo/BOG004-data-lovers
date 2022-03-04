export function filtrarPeliculas(data,palabraClave){
  return data.filter((element)=>{
  return element.title.toLowerCase().includes(palabraClave.toLowerCase());
  })
}

export function filtrarAsDs (data, order){
  let titleSort = data.sort((a,z)=>{
    return (a.title > z.title)
    ? 1
    :-1;
  })
   console.log (titleSort)
   if (order === 'az'){titleSort}
   if (order === 'za'){titleSort.reverse()}

   return titleSort
}
