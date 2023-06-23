import Person from "./person.js";

class Employee extends Person {
    constructor(_hoTen, _diaChi, _ma, _email, _soNgayLamViec, _luongTheoNgay){
        super(_hoTen, _diaChi, _ma, _email)
        this.soNgayLamViec = _soNgayLamViec;
        this.luongTheoNgay = _luongTheoNgay;
        this.tongLuong = 0;
    }
    tinhLuongGV = () =>{
        this.tongLuong = Number(this.soNgayLamViec) * Number (this.luongTheoNgay);
    }
}

export default Employee;