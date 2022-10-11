const init = require('./index');
const timeout = 10000;
const app = require('./express');


describe('init', () => {
    app();
    
    it('should return a title', async () => {
        const expected = 'Mocks';
        const website = `http://localhost:3000/index.html`

        const title = await init(website);
        
        expect(title).toBe(expected);
    }, timeout);

});