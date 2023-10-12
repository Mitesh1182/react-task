function carsdata() {
    fetch("https://652764d6917d673fd76da1f3.mockapi.io/cars")
        .then(y => y.json())
        .then(y => {

            displaydata(y)
        })

}

carsdata();
const displaydata = (data) => {

    let display = data.map((v) => {
        return (`<tr>
                <td>${v.name}</td>
                <td>${v.price}</td>
                <td>${v.rating}</td>
                <td>${v.Description}</td>
                <td><button onclick="datadelete(${v.id})">delete</button></td>
                </tr>`)
    })
    document.getElementById("display").innerHTML = display.join(" ");
}

const datadelete = (id) => {
    fetch(`https://652764d6917d673fd76da1f3.mockapi.io/cars/${id}`, {
        method: "DELETE"

    })
        .then(y => y.json())
        .then(y => {
            console.log(y);
            carsdata()
        })
}