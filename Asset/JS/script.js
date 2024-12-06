let form =document.getElementById("form");
let button =document.getElementById("button");

function colorchange() {
    var element = document.getElementById("icon");
    element.classList.toggle("mystyle");
  }

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let productName =document.getElementById('title').value;
    let productImg = document.getElementById('img_url').value;
    let productPrice =document.getElementById('price').value;
    let productLink = document.getElementById('page_link').value;
    let productDescription =document.getElementById('Description').value


    document.querySelector(".form_conatiner").style.display = 'none'
     document.querySelector(".card").style.display = 'block'
    // console.log(`
    //     productName       :- ${productName}
    //     productImg        :- ${productImg}
    //     productPrice      :- ${productPrice}
    //     productLink       :- ${productLink}
    //     productDescription:- ${productDescription}
    //     `);
    
   
})