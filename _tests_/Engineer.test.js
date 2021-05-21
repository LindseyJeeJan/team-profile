const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {

    describe("getGitHub method", () => {
        it("gets the Engineer's GitHub username", () => {
        const engineer = new Engineer(gitHub: "jclarkGit`");
        engineer.getGitHub();
        expect(engineer.getGitHub).toBe("jclarkGit");
        });
    });

     describe("getRole", () => {
        it("returns Engineer role", () => {
            expect(new Engineer().getRole().toBe("Engineer");
        });
    });

});