//elements for manipulation
let input = document.querySelector('input[type="text"]'),
    saveBtn = document.querySelector('.save'),
    clearBtn = document.querySelector('.clear'),
    ul = document.querySelector('.list'),
    spanList = document.getElementsByTagName('span');


//load local storage after refreshing
function previousListItem (){
    if(localStorage.getItem('listItem')){
        ul.innerHTML=localStorage.getItem('listItem');
        deleteItem()
    }
}

//delete function by icons
function deleteItem() {
    for(let span of spanList){
        span.addEventListener('click', function(){
            span.parentElement.remove();
        })
    }
}
    



//li creation function
input.addEventListener('keypress', function(pressedKey){
    if(pressedKey.which=== 13){
        //li creation after pressing 'enter'
        console.log(this.value)
        ul.insertAdjacentHTML('afterbegin', `<li>${this.value} <span><i class="far fa-trash-alt"></i></span></li>`);

        deleteItem()
    }
})

clearBtn.addEventListener('click',function(){
    ul.innerHTML='';
    localStorage.removeItem('listItem');
})

saveBtn.addEventListener('click', function(){
    localStorage.setItem('listItem',ul.innerHTML)
})


deleteItem ();

previousListItem ();