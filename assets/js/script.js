let getProduct = document.getElementById("products");

async function getData(file){
 let getFetched = await fetch(file);
 let data =  await getFetched.text()
 console.log(data);
}

getData("../js/data.json")

getProduct.innerHTML = `



`;