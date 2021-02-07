"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
        console.log(this.fiscalYear);
    }
    static createEmployee(name) {
        return { name: name };
    }
    describe() {
        console.log(`${this.id}: ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = '2020';
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, 'IT'); // 継承元のconstructorにプロパティを渡す
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting'); // 継承元のconstructorにプロパティを渡す
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('レポートが見つかりません');
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('正しい値を設定してください');
        }
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee('Max'); // newでインスタンス化せずにClassオブジェクトを直接呼び出すことができる
console.log(employee1);
const it = new ITDepartment('d1', ['Max']); // ここの引数はconstructor(n)に入る
const accounting = new AccountingDepartment('d2', []);
accounting.mostRecentReport = 'レポート'; // Setterに値をセット
accounting.addReport('Something');
console.log(accounting.mostRecentReport); // Getterは呼び出す際に()が必要ない
accounting.printReports();
it.addEmployee('Max');
it.addEmployee('Manu');
// it.employees[2] = 'Maru';
it.describe();
it.printEmployeeInformation();
//# sourceMappingURL=classes.js.map