class Department {
  private employees: string[] = []

  static fiscalYear = '2020'

  static createEmployee(name: string) {
    // staticメソッド
    return { name: name }
  }

  constructor(private readonly id: string, public name: string) {
    console.log(this.fiscalYear)
  }
  describe(this: Department) {
    console.log(`${this.id}: ${this.name}`)
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length)
    console.log(this.employees)
  }
}

class ITDepartment extends Department {
  admins: string[]
  constructor(id: string, admins: string[]) {
    super(id, 'IT') // 継承元のconstructorにプロパティを渡す
    this.admins = admins
  }
}

class AccountingDepartment extends Department {
  private lastReport: string

  get mostRecentReport() {
    // Getter
    if (this.lastReport) {
      return this.lastReport
    }
    throw new Error('レポートが見つかりません')
  }

  set mostRecentReport(value: string) {
    // Setter
    if (!value) {
      throw new Error('正しい値を設定してください')
    }
    this.addReport(value)
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting') // 継承元のconstructorにプロパティを渡す
    this.lastReport = reports[0]
  }

  addReport(text: string) {
    this.reports.push(text)
    this.lastReport = text
  }

  printReports() {
    console.log(this.reports)
  }
}

const employee1 = Department.createEmployee('Max') // newでインスタンス化せずにClassオブジェクトを直接呼び出すことができる
console.log(employee1)

const it = new ITDepartment('d1', ['Max']) // ここの引数はconstructor(n)に入る

const accounting = new AccountingDepartment('d2', [])

accounting.mostRecentReport = 'レポート' // Setterに値をセット
accounting.addReport('Something')
console.log(accounting.mostRecentReport) // Getterは呼び出す際に()が必要ない
accounting.printReports()

it.addEmployee('Max')
it.addEmployee('Manu')

// it.employees[2] = 'Maru';

it.describe()
it.printEmployeeInformation()
