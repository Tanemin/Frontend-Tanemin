Feature('Main Test Tanemin App');

const makeid = () => {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < 6; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}


Scenario('Navigate to explore page', ({ I }) => {
    I.amOnPage("/")

    I.see('Explore', '.chakra-stack')
    I.click('Explore', '.chakra-stack')
    I.see('Explore Tanaman', '.explore-title')
});

Scenario('Test sign in function', ({ I }) => {
    I.amOnPage("/signin")

    I.seeElement('#email');
    I.fillField('#email', 'test@gmail.com');
    I.seeElement('#password');
    I.fillField('#password', 'test123456');
    I.click("SignIn", ".chakra-button")
    I.wait(3)
    I.seeCookie('token')
})

Scenario('Test register function', ({ I }) => {
    I.amOnPage("/signup")

    I.seeElement('#fullname');
    I.fillField('#fullname', 'Testing');
    I.seeElement('#email');
    I.fillField('#email', `${makeid()}@gmail.com`);
    I.seeElement('#password');
    I.fillField('#password', 'test123456');
    I.click("SignUp", ".chakra-button")
    I.wait(5)
    I.seeCurrentUrlEquals('/success')
})



function Feature(arg0: string) {
    throw new Error("Function not implemented.");
}

