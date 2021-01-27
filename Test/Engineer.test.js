const Engineer = require("../lib/Engineer");

test("add Engineer GitHub Account", () => {
    const engineer = new Engineer ("Milagros", 1, "m@email.com", "milagrosvicent");
    expect(engineer.github).toBe("milagrosvicent");

});

test("getGitHub", () => {
    const engineer = new Engineer ("Milagros", 1, "m@email.com", "milagrosvicent");
    expect(engineer.getGithub()).toBe("milagrosvicent");

});

test("getRole", () => {
    const engineer = new Engineer ("Milagros", 1, "m@email.com", "milagrosvicent");
    expect(engineer.getRole()).toBe("Engineer");

});
