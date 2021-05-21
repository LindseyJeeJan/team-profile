const Employee = require("../lib/Employee");

describe("Employee class", () => {
    describe("Initialization", () => {
        it("should create an object with a name, id and email if provided valid arguments", () => {
        const employee = new Employee("John Smith", 245, "jsmith@gmail.com");

        expect(employee.name).toEqual("John Smith");
        expect(employee.id).toEqual(245);
        expect(employee.email).toEqual("jsmith@gmail.com");
        });
    });
   

    describe("getName method", () => {
        it("gets the employee's name", () => {
        const employee = new Employee(name: "Bob Jones");
        employee.getName();
        expect(employee.name).toBe("Bob Jones");
        });
    });

    describe("getId method", () => {
        it("gets the employee's ID", () => {
        const employee = new Employee(id: 7878);
        employee.getId();
        expect(employee.id).toBe("7878");
        });
    });

    describe("getEmail method", () => {
        it("gets the employee's email address", () => {
        const employee = new Employee(email: "rsmith@aol.com");
        employee.getEmail();
        expect(employee.email).toBe("rsmith@aol.com");
        });
    });

    describe("getRole", () => {
        it("returns Employee role", () => {
            expect(new Employee().getRole().toBe("Employee");
        });
    });

});