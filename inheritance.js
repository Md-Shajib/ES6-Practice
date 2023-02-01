class Parents {
    constructor(){
        this.FatherName = "Lionel Messi";
        this.MotherName = "Antonela Roccuzzo"
    }
}

class Child extends Parents{
    constructor(name){
        super();
        this.name = name;
    }
    fullName (name = this.name){
        const firstName = name;
        const middleName = this.FatherName.split(" ")[1];
        const lastName = this.MotherName.split(" ")[1];
        const fullName = `${firstName} ${middleName} ${lastName}`;
        return fullName;
    }
}

const baby1 = new Child("Thiago");
const baby2 = new Child("Mateo");
const baby3 = new Child("Ciro");

console.log(baby1.fullName());
console.log(baby2.fullName());
console.log(baby3.fullName());