fetch(`https://rickandmortyapi.com/api/location`)
    .then((information) => {
      return information.json();
    }).then ((information)=>{
        console.log(information)
    })