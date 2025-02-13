let getProduct = document.getElementById("products");

document.addEventListener("DOMContentLoaded", ()=>{
 async function getData(){
  fetch("http://127.0.0.1:5501/assets/js/data.json")
   .then( res => res.json() )
   .then( (data) => addData(data));
}

function addData(data){
 for(let dat in data){
  const content = document.createElement("div");
  let image = document.createElement("img");
  let title = document.createElement("h2");
  let para = document.createElement("p");

  content.className = "content-element";
  image.src = dat.image;
  title.innerHTML = dat.name;
  para.innerHTML = dat.price;

  content.append(image, title, para);
  getProduct.append(content);
 }
}
getData();
})

