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

function Before(arg0: ({ I }: { I: any; }) => void) {
    throw new Error("Function not implemented.");
}


function Scenario(arg0: string, arg1: ({ I }: { I: any; }) => Promise<void>) {
    throw new Error("Function not implemented.");
}


function locate(arg0: string) {
    throw new Error("Function not implemented.");
}
