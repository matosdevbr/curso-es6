// let arr = [10, 20, 30, 40]

let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}

function teste({a: x, d, z = 100}) {
    console.log(x, d, z)
}

teste(obj)