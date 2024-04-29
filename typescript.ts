class Student {
    constructor(empId: number, empName: string) {}
}
class Teacher extends Student {
    constructor(empId: number, empName: string) {
        super(empId, empName);
    }
}

let Teacher = new Teacher(1, "Teacher");

class Parent {
    name: string;
    constructor(name) {
        this.name = name;
        console.log("Parent name is : " + this.name);
    }
}
class Child extends Parent {
    displayChild(): void {
        console.log("Child name is : " + this.name);
    }
}

let child = new Child("hello");
console.log(child.name);

var a = [1, null, NaN, "abc", true];

