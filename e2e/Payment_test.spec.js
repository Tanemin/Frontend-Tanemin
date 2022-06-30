Feature('Test the payment method');

// Only works in "deploy netlify"

Before(({ I }) => {
  I.amOnPage('/signin');

  I.seeElement('#email');
  I.fillField('#email', 'test@gmail.com');
  I.seeElement('#password');
  I.fillField('#password', 'test123456');
  I.click('SignIn', '.chakra-button');
  I.wait(3);
  I.seeCookie('token');
});

Scenario('Navigate to explore page', async ({ I }) => {
  I.see('Explore', '.chakra-link');

  I.wait(3);
  const firstPlant = locate('.card-content').first();
  I.click(firstPlant);

  I.wait(3);
  I.seeElement('.detail-container');
  I.executeScript('window.scrollTo(0, 400);');
  I.wait(3);
  I.click('.chakra-button.css-3jjbnj');
  pause();

  I.click('.chakra-button.css-2pjsqz');
});
