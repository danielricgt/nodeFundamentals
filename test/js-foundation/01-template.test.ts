import { emailTemplate } from '../../src/js-foundation/01-template';

describe('template test ', () => { 

    test('emai template shuld contain a greeting', () => { 

        expect(emailTemplate).toContain('Hi')

     })

     test('email template should cotain {{name}} and {{orderID}}', () => { 

        expect(emailTemplate).toMatch(/{{name}}/);
        expect(emailTemplate).toMatch(/{{orderId}}/);

      })


 })