const Intern = require("../lib/Intern");

test("add Intern school", () => {
    const intern= new Intern ("Milagros", 1, "m@email.com", "MIT");
    expect(intern.school).toBe("MIT");

});

test("getSchool", () => {
    const intern= new Intern ("Milagros", 1, "m@email.com", "MIT");
    expect(intern.getSchool()).toBe("MIT");

});

test("getRole", () => {
    const intern= new Intern ("Milagros", 1, "m@email.com", "MIT");
    expect(intern.getRole()).toBe("Intern");

});
