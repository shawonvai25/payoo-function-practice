
document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault() 

    
     const cashOut = getInputFieldValueById('input-cash-out-amount');
     const pinNumber = getInputFieldValueById('cash-out-pin');
     console.log('inside the click handler ',cashOut,pinNumber);

     if(pinNumber === 4421){
        const balance = textFieldValueById('account-balance');
       
        if(cashOut > balance ){
            alert('you do not have sufficient balance to cash out.');
            return ;
        }

        const newBalance = balance - cashOut ;
        document.getElementById('account-balance').innerText = newBalance ;
        

    // add transition history
    const div = document.createElement('div');
    div.innerHTML = `
                 <h4 class='text-2xl font-bold' >Cash Out</h4>
                 <p> ${cashOut} withdraw . new Balance ${newBalance} </p>
    `
    document.getElementById('transaction-container').appendChild(div);


     }
     else{
       alert('no money for you  DGM')
     }
     
  
})   