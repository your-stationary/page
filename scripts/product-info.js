let headerVal = window.location.search.split("=")

// url decoding here
headerVal= headerVal[1]
headerVal = headerVal.toLowerCase()
headerVal =headerVal.split("+").join(" ")
headerVal =headerVal.split("%2f").join("/")

let section = document.querySelector('.info-main-div')
let starInner = document.querySelector('.star-inner')


data.forEach(function(element) {
element.name = element.name.toLowerCase()
if(element.name==headerVal){
let minVal = element.strike-element.price
section.innerHTML = section.innerHTML+`
<img src="${element.src}" class="product-info-img">
<div class="pl-4 ml-5 d-flex flex-column right-container">
  <h3 class="font-weight-bold">${element.name}</h3>
  <div class="mt-4 mb-2">
    <span class="price h3 font-weight-bold text-primary ">Rs.${element.price}</span>
    <strike class="text-muted">${element.strike}</strike>
    <span class="price h5 font-weight-bold text-success ">${Math.round(minVal/element.strike*100)}% OFF</span>
  </div>
  <span class="info-span"><strong>Availiblity</strong><span> In stock</span> </span>
  <span class="info-span"><strong>Brand</strong><span> ${element.brand} </span> </span>
  <span class="info-span"><strong>Left Items</strong><span> ${element.left} </span> </span>
  <span class="info-span d-flex">
    <strong>Rating </strong>
    <span class="ml-2"> ${ element.rating}</span>
    <div class="star-outer ml-2">
      <div class="star-inner" style="width:${element.rating/5*100}%;">
      </div>
    </div>
  </span>
  <span class="info-span"><strong>Likes </strong>${element.like}k <i class="fas fa-heart text-danger"></i></span>
  <button class="btn btn-primary rounded-0 mt-3">Buy Now</button>
</div>
`
console.log(element.rating)
}
});