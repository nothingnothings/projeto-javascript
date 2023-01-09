
const { generateText, checkAndGenerate } = require('./util');

const puppeteer = require('puppeteer');


test('Should output name and age', () => {
    const text = generateText('Max', 29);  
    expect(text).toBe('Max (29 years old)');
}); 




test('should output data-less text', () => {
    const text = generateText('', null);
    expect(text).toBe(' (null years old)');
})


test('should output name and age', () => {
    const text = checkAndGenerate('Max', 29);
    expect(text).toBe('Max (29 years old)');
});



test('should click around/Anna should be 28 years old', async () => {
    const browser = await puppeteer.launch(
        {
            headless: false,
           slowMo: 60,  //slow down by 70ms
            args: ['--window-size=1920, 1080']
        });
   const page = await browser.newPage();
   await page.goto(
       'file:///C:/projeto/MODULO31TESTING/projeto31/index.html'
   )
   await page.click('input#name');
   await page.type('input#name', 'Anna');
   await page.click('input#age');
   await page.type('input#age', '69');
   await page.click('#btnAddUser');
   const finalText = await page.$eval('.user-item', el => el.textContent);
   expect(finalText).toBe('Anna (69 years old)');
} );