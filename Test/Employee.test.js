const Employee = require("../lib/Employee")

test("add employee name", () => {
    const employee = new Employee ("Milagros", 1, "m@email.com");
    expect(employee.name).toBe("Milagros");

});

test("add employee id", () => {
    const employee = new Employee ("Milagros", 1, "m@email.com");
    expect(employee.id).toBe(1);

});

test("add employee email", () => { 
    const employee = new Employee ("Milagros", 1, "m@email.com");
    expect(employee.email).toBe("m@email.com");

});

test("getName", () => {
    const employee = new Employee("Milagros", 1, "m@email.com");
    expect(employee.getName()).toBe("Milagros");

});

test("getId", () => {
    const employee = new Employee("Milagros", 1, "m@email.com");
    expect(employee.getId()).toBe(1);

});

test("getEmail", () => {
    const employee = new Employee("Milagros", 1, "m@email.com");
    expect(employee.getEmail()).toBe("m@email.com");

});

test("getRole", () => {
    const employee = new Employee("Milagros", 1, "m@email.com");
    expect(employee.getRole()).toBe("Employee");

});