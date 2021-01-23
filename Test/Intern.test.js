const Intern = require("../lib/Intern");

test("can get school account via constructor" , () => { 
    const testValue = "Colombia";
    const e = new Intern("Foo", 1, "test@test.com" ,  testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"",() =>  { 
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com" ,  "Columbia");
    expect(e.getRole()).toBe(testValue);

});

test("can get school via getSchool()" , () => { 
    const testValue = "Columbia";
    const e = new Intern("Foo", 1, "test@test.com" ,  testValue);
    expect(e.getSchool()).toBe(testValue);
});