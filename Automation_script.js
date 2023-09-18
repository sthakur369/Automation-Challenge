import { Selector } from 'testcafe'; 

fixture `Getting Started with TESTS:`
    .page `https://dev.deepthought.education/login`;


test('Invalid Username', async t => {
    await t
        .typeText('#username', 'sthakur3690')
        .typeText('#password', '12345678@')
        .click('#login')

        // Define a selector for the element containing the error message
        const errorMessageSelector = Selector('#login-error-notify'); 
        const errorMessageText = await errorMessageSelector.textContent;
        console.log(errorMessageText);
        await t.expect(errorMessageSelector.exists).ok('Error message not found');
});


test('Invalid Password', async t => {
    await t
        .typeText('#username', 'sthakur369')
        .typeText('#password', '12345678@#')
        .click('#login')

        const errorMessageSelector = Selector('#login-error-notify'); 
        const errorMessageText = await errorMessageSelector.textContent;
        console.log(errorMessageText);
        await t.expect(errorMessageSelector.exists).ok('Error message not found');
});


test('Password too short', async t => {
    await t
        .typeText('#username', 'sthakur3690')
        .typeText('#password', '123')
        .click('#login')

        const errorMessageSelector = Selector('#login-error-notify');
        const errorMessageText = await errorMessageSelector.textContent;
        console.log(errorMessageText);
        await t.expect(errorMessageSelector.exists).ok('Error message not found');
});


test('Successful Login', async t => {
    await t
        .typeText('#username', 'sthakur369')
        .typeText('#password', '12345678@')
        .click('#login')

    await t.expect(t.eval(() => window.location.href)).eql('https://dev.deepthought.education/dashboard');
});