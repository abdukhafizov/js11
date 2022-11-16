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

let assg = Object.assign(user, passport)

console.log(user, passport);


console.log(
    Object.keys(user)
);
console.log(
    Object.values(user)
);

console.log(
    Object.entries(user, passport)
);

let kods = {
    number: [],
    boolean: [],
    string: [],
    object: []
}

passport.filter(item => {
    let key = typeof item

    if(kods[key]){
        kods[key].push(item)
    }
})

