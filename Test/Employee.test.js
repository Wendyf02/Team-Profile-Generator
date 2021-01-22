const Employee = require("../lib/Employee")

test("can instantiate Employee instance" , () =>  {
       const e = new Employee();
       expect(typeof(e)).toBe("object");
});

test("can set name via construction arguments", () => {
       const name = "Alice";
       const e = new Employee(name);
       expect(e.name).toBe(name);
});

test("can set id via constructor argument" , () => { 
       const testValue = 100;
       const e = new Employee("Foo" ,testValue);
       expect(e.id).toBe(testValue);  
});

test("can get name via constryuctor argument" , () => { 
       const testValue = "test@test.com";
       const e = new Employee("Foo", 1, testValue);
       expect(e.email).toBe(testValue);
});

test("can get name via getName()" , () => {
       const testValue = "Alice";
       const e = new Employee(testValue);
       expect(e.getName()).toBe(testValue);
}); 

test("can get id via getId()" , () => {
      const testValue = 100;
      const e = new Employee("Foo" , testValue);
      expect(e.getId()).toBe(testValue);
});

test("can get email via getEmail()" , () => {
     const testValue = "test@test.com";
     const e = new Employee("Foo", 1, testValue);
     expect(e.getEmail()).toBe(testValue);
});

test( "getRole() should return \"Employee\"" , () =>  {
    const testValue = "Employee";
    const e = new Employee("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue); 

});