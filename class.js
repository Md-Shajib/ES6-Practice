class Student {
    constructor(sid, sName){
        this.ID = sid;
        this.Name = sName;
        this.DepartmentName = 'Computer Science and Engineering';
    }
}

const Student1 = new Student('18CSE032', 'Md Shajib');
console.log(Student1);

const Student2 = new Student('18CSE011', 'Anik Hossen');
console.log(Student2.Name);