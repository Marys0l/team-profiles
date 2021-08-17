const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Set office number", () => {
    const testValue = 100;
    const e = new Manager("Liliana", 1, "test@test.com", testValue, "Manager");
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Liliana", 1, "test@test.com", 100, "Manager");
    expect(e.getRole()).toBe(testValue);
});

test("Office number test", () => {
    const testValue = 100;
    const e = new Manager("Liliana", 1, "test@test.com", testValue, "Manager");
    expect(e.getOfficeNumber()).toBe(testValue);
});
