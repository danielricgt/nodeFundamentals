//AAA



describe('App', () => { 
    
    test('should first test', () => { 
        
        // 1 . ARRANGE
        const num1:number = 10;
        const num2:number = 20;

        //  2. ACT

        function sum (num1: number, num2: number){
            return num1 + num2;
        }
        //  3. ASSERT
        expect(sum(num1, num2)).toBe(30)
     })


 });