fetch(`https://api.escuelajs.co/api/v1/products`)
  .then(y => y.json())
  .then(y => {
    carddata(y);
    products = y;
  })
let carts = [];
let carddata = (data) => {
  let displaydata = data.map((v, index) => {
    return `<div class="card col-sm-4 ms-3 d-flex " style="width: 18rem;">
        <img src="${v.category.image}" class="card-img-top w-500px" alt="...">
        <div class="card-body">
          <b><h5 class="card-title">${v.title}</h5></b>
          <h6 class="card-twxt">Price : ${v.price}</h6>
          <p class="card-text">${v.description}</p>
          <a href="#" class="btn btn-outline-dark" onclick="addproduct(${index})">Add to cart</a>
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

function Datafilter() {
  let Filter = products.filter((v) => {
    if (v.title == 0) {
      return 1;
    }
    else {
      return -1;
    }
  })
  carddata(Filter);
}
document.getElementById("search").innerHTML = Datafilter;

const addproduct = (myindex) => {

  const selectproduct = products[myindex];
  const findproduct = carts.find((v) => {
    return v.item.id == selectproduct.id;
  })
  if (!findproduct) {
    carts.push({ item: selectproduct, count: 1 })
  }
  else {
    findproduct.count = findproduct.count + 1;
  }

  let p = carts.reduce((pre, cur) => {
    return pre + cur.item.price * cur.count;
  }, 0)
  document.getElementById("dis").innerHTML = carts.length;
  console.log(p);
  displaycartitems(carts);
}

const displaycartitems = (carts) => {
total = "0";
document.getElementById("total").innerHTML = "$"+ 0 +".00";
  let p = carts.map((value, index) => {
    total=Number(total)+value.item.price;
    document.getElementById("total").innerHTML = "$"+ total +".00";
    return (` 


  <tr>
    <td><img src="${value.item.category.image}" style="    width: 50px; height: 38px;"/></td>
    <td><p>${value.item.price}</p>
    </td>
    <td>
    <button onclick="dec('${index}')" >-</button>
    <input type="text" style="width: 25px; text-align: center;"  value='${value.count}' />
    <button onclick="inc('${index}')">+</button>
    </td>
    <td><i class="fa-solid fa-trash" onclick="delproduct(${value.id})" style="margin-left: 84px ;cursor: pointer;"></i></td>
  </tr>


`)

  })


  document.getElementById("display").innerHTML = p.join(" ");


}
const inc = (index) => {

  carts[index].count = carts[index].count + 1;
  displaycartitems(carts);
}

const dec = (index) => {

  carts[index].count = carts[index].count - 1;
  displaycartitems(carts);
}

function delproduct (id){
  carts.splice(id, 1);
  displaycartitems(carts);

}