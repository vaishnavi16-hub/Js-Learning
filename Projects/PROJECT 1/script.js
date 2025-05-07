 const buttons= document.querySelectorAll('.button')
//  console.log(buttons);


const body = document.querySelector("body")



buttons.forEach(function (button){
    console.log(button);
    

    // How to apply events on button..
    button.addEventListener('click', function (e){
        console.log(e)
        console.log(e.target)
        if (e.target.id ==='gray')
{
    // body.style.backgroundColor ='gray'
    body.style.backgroundColor = e.target.id;
}

    })

});


