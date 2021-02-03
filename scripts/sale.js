let saleContainer = document.querySelector('.sale-container')


    data.forEach(element => {
        let minVal = element.strike-element.price
        let finalVal = Math.round(minVal/element.strike*100)
        if(finalVal >=0){
            saleContainer.innerHTML = saleContainer.innerHTML+`
            
            <div class="product-div " onclick="productDetail(this)">
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

            `
        }
    });