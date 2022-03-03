export function filtrarPeliculas(data,palabraClave){
  return data.filter((element)=>{
  return element.title.toLowerCase().includes(palabraClave.toLowerCase());
      })
}

export function filtrarAsDs (data, order){
  switch (order) {
    case "az": 
      return data.sort(
        function (a,b){
          return a.title<b.title;
        }
      );
    case "za": 
      return data.sort(
        function (a,b){
          return b.title<a.title;
        }
      ); 
  }
}
 