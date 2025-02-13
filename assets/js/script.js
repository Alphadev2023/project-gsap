let getProduct = document.getElementById("products");

async function getData(){
  fetch("http://127.0.0.1:5501/assets/js/data.json")
   .then( res => res.json() )
   .then( (data) => {
      console.log(data);
   });
}


