const user = {
    name: 'Iskandar',
    surname: 'Xasanov',
    age: 22,
    status: true,
    visa: ['Canada', 'USA', 'South Korea'],
    fullname: function () {
        return this.name + ' ' + this.surname
    }
}

let passport = {
    serries: "AC",
    number: 1231546444,
    date: {
        get: "2015",
        to: "2025"
    }
}
//1
let assg = Object.assign(user, passport)

console.log(user, passport);

//2
console.log(
    Object.keys(user)
);
console.log(
    Object.values(user)
);
//3
let arr = [
    'Alex'
]
let arrtwo = [
    'Albert'
]
let arrthree = arr.concat(arrtwo);
console.log(arrthree)

//
let kods = {
    number: [],
    boolean: [],
    string: [],
    object: []
}

values.filter(item => {
    let key = typeof item

    if(kods[key]){
        kods[key].push(item)
    }
})

console.log(kods);
