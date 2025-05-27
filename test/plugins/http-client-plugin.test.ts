import { httpClientPlugin } from "../../src/plugins/http-client.plugin";

describe('http plugin test', () => { 

    test('http client plugin must return an string', async() => {
         const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');
         expect(data).toEqual({
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": expect.any(Boolean)
          });
    });

    test('http cleint plugin should have post, put, delete', () => {

        expect(typeof httpClientPlugin.post).toBe('function');
        expect(typeof httpClientPlugin.put).toBe('function');
        expect(typeof httpClientPlugin.delete).toBe('function');
        
    });
    
    

 })

 