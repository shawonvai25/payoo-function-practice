document.getElementById('btn-add-money')
      .addEventListener('click',function(event){
         event.preventDefault();

        const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('add-money-pin');

        console.log('Money added amount:',addMoney)
        console.log('The pin number is:',pinNumber)
        
    // wrong way to verify. Please don't use in your serious project
       if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney ;
        console.log(newBalance);

        document.getElementById('account-balance').innerText = newBalance ;
       }




})