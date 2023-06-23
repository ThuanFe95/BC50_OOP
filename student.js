import Person from "./person.js";

class Student extends Person{
    constructor(_hoTen, _diaChi, _ma, _email, _toan, _ly, _hoa){
        super(_hoTen, _diaChi, _ma, _email)
        this.toan = _toan;
        this.ly = _ly;
        this.hoa = _hoa;
        this.dtb = 0;
    }
    diemTrungBinh(){
        this.dtb = (Number(this.toan) + Number(this.ly) + Number(this.hoa))/3;
    }
}

export default Student;