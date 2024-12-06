let form = document.getElementById("form");
let button = document.getElementById("button");

function colorchange() {
    var element = document.getElementById("icon");
    element.classList.toggle("mystyle");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let productName = document.getElementById("title").value;
    let productImg = document.getElementById("img_url").value;
    let productPrice = document.getElementById("price").value;
    let productLink = document.getElementById("page_link").value;
    let productDescription = document.getElementById("Description").value;

    document.querySelector(".form_conatiner").style.display = "none";
    document.querySelector(".card").style.display = "block";
    // console.log(`
    //     productName       :- ${productName}
    //     productImg        :- ${productImg}
    //     productPrice      :- ${productPrice}
    //     productLink       :- ${productLink}
    //     productDescription:- ${productDescription}
    //     `);
    let card = document.querySelector(".card");
    let div = document.createElement("div");

    div.innerHTML = `
     <div class="product_img_main">
                <img src="${productImg}" alt="product_img" class="product_img">
                <div class="star">
                    <i class="fa-solid fa-star" onclick="colorchange()" id="icon"></i>
                </div>
            </div>

            <div class="product_name">${productName}</div>
            <div class="product_datails">
               ${productDescription}
            </div>

            <div class="price_and_buy">
                <div class="price">Rs.${productPrice}</div>
                <div class="buy_button">
                    <button> <a href="${productLink}" target="_blank"> Make an Order <i class="fa-solid fa-chevron-right" style="color: #ffffff; margin-left: 4px;"></i></a></button>

                </div>

            </div>
`;
    card.appendChild(div);
});
