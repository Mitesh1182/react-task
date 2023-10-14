fetch(`https://api.escuelajs.co/api/v1/products`)
  .then(y => y.json())
  .then(y => {
    carddata(y);
    products = y;
  })

let carddata = (data) => {
  let displaydata = data.map((v) => {
    return `<div class="card col-sm-4 ms-3" style="width: 18rem;">
        <img src="${v.category.image}" class="card-img-top w-500px" alt="...">
        <div class="card-body">
          <b><h5 class="card-title">${v.title}</h5></b>
          <h6 class="card-twxt">Price : ${v.price}</h6>
          <p class="card-text">${v.description}</p>
          <a href="#" class="btn btn-outline-dark">Add to cart</a>
        </div>
      </div>`
  })
  document.getElementById("cards").innerHTML = displaydata.join(" ");
}
let products = "";

function HighTolow() {
  products.sort(function (a, b) {

    if (a.price > b.price) {
      return 1;
    }
    else {
      return -1;
    }
  })
  carddata(products);   

};

function LowTohigh() {
  products.sort(function (a, b) {

    if (a.price < b.price) {
      return 1;
    }
    else {
      return -1;
    }
  })
  carddata(products);

};

function Datafilter () {
 let Filter= products.filter((v)=>{
 if(v.title == 0)
 {
   return 1;
 }
 else{
  return -1;
 }
 })
 carddata(Filter);
}
document.getElementById("search").innerHTML = Datafilter;



