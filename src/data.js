export function filtrarPeliculas(data,palabraClave){
  console.log(palabraClave);
  console.log(data);
    return data.filter((element)=>{
      title.toLowerCase().includes(palabraClave.toLowerCase());
      })
    }
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
 