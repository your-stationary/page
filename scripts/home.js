// product fetch code
slider = document.querySelector('.slider')
fetch('data/product.json')
  .then(response => response.json())
  .then(function(data){
    data.forEach(element => {
      if(element.like > 4){
      let minVal = element.strike-element.price
      slider.innerHTML = slider.innerHTML+`
      <div class="product-div ">
          <div class="product-img">
            <div class="p-2 px-3 like-sec like-color ">
              <i class="far fa-heart"></i>
              <span class=" h6">${element.like}k</span>
            </div>
            <img src="${element.src}">
          </div>
          <div class="d-flex flex-column mx-3 pb-3 pt-2 border-top">
            <span class="  pb-2 product-text">${element.name}</span>
            <span class=" font-weight-bold text-primary d-flex align-items-center ">
              <div>
                <span class="h5 font-weight-bold">Rs.${element.price}</span>
                <strike class="h7 text-muted">${element.strike}</strike>
              </div>
              <div class="px-2">
                <span class=" h6 dark-pink font-weight-bold">${Math.round(minVal/element.strike*100)}% off</span>
              </div>
            </span>
            <div class="d-flex justify-content-between mt-1">
              <span class="h7">Free Shipping</span>
              <span class="h7 text-success ">${element.left}Left</span>
            </div>
          </div>
        </div>
      `}
    });
  });

// timer script Here

// Set the date we're counting down to
var countDownDate = new Date("May 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.querySelector('.days').innerHTML=days
    document.querySelector('.hours').innerHTML=hours
    document.querySelector('.min').innerHTML=minutes
    document.querySelector('.sec').innerHTML=seconds

}, 1000);

// slider js here!
document.querySelector('.fa-arrow-left').onclick=()=>{
  slider.scrollLeft=slider.scrollLeft-100
}
document.querySelector('.fa-arrow-right').onclick=()=>{
  slider.scrollLeft=slider.scrollLeft+100
}

