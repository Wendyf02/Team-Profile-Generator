const { TestScheduler } = require("jest");
const Manager = require("../lib/Manager");

test("add Manager office number", () => {
    const manager = new Manager("Sol", 1, "s@email.com", 10);
    expect(manager.officeNumber).toBe(10);

});

test("getofficeNumber", () => {
    const manager = new Manager("Sol", 1, "s@email.com", 10);
    expect(manager.getOfficeNumber()).toBe(10);

});

test("getRole", () => {
    const manager = new Manager("Sol", 1, "s@email.com", 10);
    expect(manager.getRole()).toBe("Manager");

});