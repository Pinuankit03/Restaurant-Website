function navSlide(){
    // const burger = document.querySelector('.burger');
    // const nav = document.querySelector('.nav-links');
    // const navLinks = document.querySelectorAll('.nav-links li');

    // burger.addEventListener('click', () => {
       
    //     nav.classList.toggle('nav-active');
    //     navLinks.forEach((link, index) => { 
    //         if(link.style.animation){
    //             link.style.animation = '';
    //             nav.style.visibility = 'visible';
                
    //         }
    //         else{
        // console.log("clicked");
          //const link = document.getElementById('closebtn');
         
              console.log("clicked")
                document.getElementById('hideSlide').style.visibility = "hidden";
                document.getElementById('n').style.visibility = "hidden";
        
              //  nav.style.visibility = 'visible';
            // }
            
    //     });
    //     burger.classList.toggle('toggle');
    // });

 
}

function burgerMenuCreation(){
    console.log("burgerMenuCreation clicked")
    document.getElementById('hideSlide').style.visibility = "visible";
    document.getElementById('n').style.visibility = "visible";
}

