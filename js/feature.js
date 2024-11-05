// show add money
document.getElementById('show-add-money-form')
.addEventListener('click',function(){
    showSectionById('add-money-form');
})

// show cash out
document.getElementById('show-cash-out-form')
.addEventListener('click',function(){
    showSectionById('cash-out-form');
})

// show transaction history
document.getElementById('show-transaction-history').addEventListener('click',function(){
    showSectionById('transaction-section')
})