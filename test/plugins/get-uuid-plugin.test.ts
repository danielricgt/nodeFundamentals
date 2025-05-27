import { getUiid } from "../../src/plugins";

describe('get uuid test', () => { 
    
    test('get uuid must work', () => {
        const uuidCall = getUiid();
        expect(typeof uuidCall).toBe('string');
        expect(uuidCall.length).toBe(36);
    });
    

 })