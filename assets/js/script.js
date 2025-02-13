let getProduct = document.getElementById("products");

async function getData(){
  fetch('./data.json')
   .then( res => res.json() )
   .then( (data) => {
      console.log(data)
   })
}

getData();
