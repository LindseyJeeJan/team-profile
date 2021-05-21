const Intern = require("../lib/Intern");

describe("Intern class", () => {

    describe("getSchool method", () => {
        it("gets the Interns's school", () => {
        const intern = new Intern(school: "Notre Dame");
        intern.getGitHub();
        expect(intern.getSchool).toBe("Notre Dame");
        });
    });

    describe("getRole", () => {
        it("returns Intern role", () => {
            expect(new Intern().getRole().toBe("Intern");
        });
    });

});