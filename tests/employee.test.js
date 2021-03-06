const Employee = require("../lib/Employee");

test("Can test employee", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("Can set employee name", () => {
    const name = "Liliana";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id", () => {
    const testValue = 100;
    const e = new Employee("Liliana", testValue);
    expect(e.id).toBe(testValue);

});


test("Can set email", () => {
    const testValue = "test@test.com";
    const e = new Employee("Liliana", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Gets name via getName()", () => {
    const testValue = "Eric";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Liliana", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Get email getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Liliana", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Eric", 1, "test@test.com", "Employee");
    expect(e.getRole()).toBe(testValue);
});

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Liliana", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Eric";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Liliana", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Liliana", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Eric", 1, "test@test.com", "Employee");
    expect(e.getRole()).toBe(testValue);
});