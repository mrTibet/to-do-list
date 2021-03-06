//elements for manipulation
let input = document.querySelector('input[type="text"]');
let saveBtn = document.querySelector('.save');
let clearBtn = document.querySelector('.clear');
let ul = document.querySelector('.list');


//li creation function
input.addEventListener('keypress', function(pressedKey){
    if(pressedKey.which=== 13){
        //li creation after pressing 'enter'
        console.log(this.value)
        ul.insertAdjacentHTML('afterbegin', `<li>${this.value}</li>`);
    }
})

clearBtn.addEventListener('click',function(){
    ul.innerHTML='';
    //add cleaning of local storage
    localStorage.removeItem('listItem');
})

saveBtn.addEventListener('click', function(){
    localStorage.setItem('listItem',ul.innerHTML)
})