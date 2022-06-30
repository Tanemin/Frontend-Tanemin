Feature('Accessing detail item');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('Access detail from homepage', async ({ I }) => {

    I.executeScript('window.scrollTo(0, 1000);');
    I.wait(3)

    const firstPlant = locate('.card-content').first()
    I.click(firstPlant)

    I.wait(3)
    I.seeElement('.detail-container')
})

Scenario('Access detail from explore page', async ({ I }) => {
    I.see('Explore', '.chakra-link')

    I.wait(3)
    const firstPlant = locate('.card-content').first()
    I.click(firstPlant)

    I.wait(3)
    I.seeElement('.detail-container')
})

