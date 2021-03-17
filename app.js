//elements for manipulation
let input = document.querySelector('input[type="text"]'),
    saveBtn = document.querySelector('.save'),
    clearBtn = document.querySelector('.clear'),
    ul = document.querySelector('.list'),
    spanList = document.getElementsByTagName('span'),
    lightBulb = document.querySelector('.lightbulb'),
    overlayTips = document.querySelector('.overlay');

//add scroll inside of div with li elements??

//delete by icons
function deleteItem() {
    for(let span of spanList){
        span.addEventListener('click', function(){
            span.parentElement.remove();
        });
    }
}

//load local storage after refreshing
function previousListItem (){
    if(localStorage.getItem('listItem')){
        ul.innerHTML=localStorage.getItem('listItem');
        deleteItem()
    }
}


//li creation function
input.addEventListener('keypress', function(pressedKey){
    if(pressedKey.which=== 13){
        //li creation after pressing 'enter'
        console.log(this.value)

        let liValue = this.value;
        this.value = ' ';

    
        ul.insertAdjacentHTML('afterbegin', `<li>${liValue} <span><i class="far fa-trash-alt"></i></span></li>`);

        deleteItem()

        pressedKey.preventDefault();
    }
})

clearBtn.addEventListener('click',function(){
    ul.innerHTML='';
    localStorage.removeItem('listItem');
})

saveBtn.addEventListener('click', function(){
    localStorage.setItem('listItem',ul.innerHTML)
})

//linethrough creation via click to elem

ul.addEventListener('click', function(ev){
    if(ev.target.tagName==='LI'){
      ev.target.classList.toggle('linethrough')
    }
})

//overlay tips
lightBulb.addEventListener('click', function(){
    overlayTips.style.display = 'block';
});

overlayTips.addEventListener('click', function(){
    overlayTips.style.display = 'none';
})



deleteItem ();

previousListItem ();

