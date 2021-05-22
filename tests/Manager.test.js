const Manager = require("../lib/Manager");

describe("Manager class", () => {

     describe("getOfficeNumber method", () => {
        it("gets the Manager's office number", () => {
        const manager = new Manager("officeNumber: 949");
        manager.getOfficeNumber();
        expect(manager.officeNumber).toBe("949");
    });

    describe("getRole", () => {
        it("returns Manager role", () => {
            expect(new Manager().getRole().toBe("Manager");
        });
    });

});