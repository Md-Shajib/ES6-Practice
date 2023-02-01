const person = {name: "Md Shajib", phone: "01757259809",university: "BSMRSTU", department: "CSE", yaer: "Final Year", address: "Gobra, Gopalganj"}

// const name = person.name; or
const {name, phone} = person;
console.log(name, phone);
// =====================

// complex Object
const conplexObject = {
    name: "Rahim",
    friend: "karim",
    info: {
        address: "kolabagan",
        leader: "Lion"
    }
}
const {leader} = conplexObject.info;
console.log(leader);
// =====================

// Array distruction
const friend = ['sakib khan','arman khan', 'amir khan', 'salman khan', 'sarukh khan'];
const [sotoFriend, nextFriend, ...othersFriend] = friend;
console.log(sotoFriend, nextFriend, othersFriend);
// ======================