import Person from "./person.js";

class listPerson extends Person{
    constructor(_obStudent, _obEmployee, _obCustomer){
        this.obStudent = _obStudent;
        this.obEmployee = _obEmployee;
        this.obCustomer = _obCustomer;
    }
}

export default listPerson;