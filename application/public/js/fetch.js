//https://jsonplaceholder.typicode.com/albums/2/photos


// function buildCardsUsingStrings(data) {
//     return `<div class= "product-card">
//                 <img class="prod-img" src=${data.thumbnail}" />
//                 <div class="prod-info">
//                     <p class="prod-title">${data.title}</p>
//                     <p class="prod-cost">${data.price}</p>
//                 </div>    
//     </div>`;
// }
function buildCardsUsingDOMAPI(container, data){
    let cardDiv = document.createElement('div');
    cardDiv.addEventListener('click', function(ev){
        console.log(ev.target);
        console.log(ev.currentTarget.removeEventListener());
    })
    cardDiv.setAttribute('class', 'product-card');
    let imgElement = document.createElement('img');
    imgElement.setAttribute('src', data.thumbnail);
    imgElement.setAttribute('class', 'prod-img');
    let prodInfoDiv = document.createElement('div');
    prodInfoDiv.setAttribute('class', 'prod-info');
    let titleP = document.createElement('p');
    titleP.setAttribute('class', 'prod-title');
    titleP.appendChild(document.createTextNode(data.title));
    let costP = document.createElement('p');
    costP.setAttribute('class', 'prod-cost');
    costP.appendChild(document.createTextNode(data.price));
    prodInfoDiv.appendChild(titleP);
    prodInfoDiv.appendChild(costP);
    cardDiv.appendChild(imgElement);
    cardDiv.appendChild(prodInfoDiv);
    container.appendChild(cardDiv);
}


function fetchProducts(){
    fetch("https://jsonplaceholder.typicode.com/albums/2/photos")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let products = data.products;
        let container =  document.getElementById('product-list');
        let containerFragment = document.createDocumentFragment();
        products.forEach(function(product){
            buildCardsUsingDOMAPI(containerFragment, product);      
        });
        container.appendChild(containerFragment);
        });
    console.log('test');
} 
fetchProducts()

// function fetchProducts(){
//     fetch("https://jsonplaceholder.typicode.com/albums/2/photos")
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         let products = data.products;
//         let productsHTML = "";
//         products.forEach(function(product){
//             productsHTML = productsHTML + buildCardsUsingStrings(product)
//         });
//         document.getElementById('product-list').innerHTML = productsHTML;
//         });
//     console.log('test');
// } 
// fetchProducts()

