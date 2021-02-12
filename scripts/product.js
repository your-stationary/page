async function productRendering(){
let headerVal
if(window.location.search !=""){
 headerVal = window.location.search.split("=")

// url decoding here 
headerVal= headerVal[1]
headerVal = headerVal.toLowerCase()
headerVal =headerVal.split("+").join(" ")
headerVal =headerVal.split("%2f").join("/")
}

let productSection = document.querySelector('.product-section')
let typeOfProduct
let productOrder = 1
    
    data.forEach(element => {
      element.name = element.name.toLowerCase()
      if(element.brand == headerVal || element.type == headerVal || headerVal == "view more" && element.sale ==true || headerVal == "salenew" && element.sale ==true){
      let minVal = element.strike-element.price
      productSection.innerHTML = productSection.innerHTML+`
      <div class="product-div">
        <div class="p-2 px-3 d-flex align-items-center justify-content-between">
          <div class="like-sec like-color  ">
            <i class="far fa-heart"></i>
            <span class=" h6">${element.like}k</span>
          </div>
          <div class="h6 text-muted m-0 d-flex align-items-center ">
            <label " class="m-0 mr-1">Compare</label>
            <input class="compare-checkbox" id="compare" type="checkbox" onchange="compareProducts(this)">
          </div>
        </div>
      <div class="" onclick="productDetail(this)">
          <div class="product-img">
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
      </div>

      `
      }
      if (element.name == headerVal) {
        typeOfProduct = element.type
      }
    });

 
    data.forEach(element => {
      element.name = element.name.toLowerCase()
      if(element.type == typeOfProduct){
        if (element.name == headerVal) {
          productOrder = 0
        }
         let minVal = element.strike-element.price
      productSection.innerHTML = productSection.innerHTML+`
      <div class="product-div" style="order:${productOrder};">
      <div class="p-2 px-3 d-flex align-items-center justify-content-between">
        <div class="like-sec like-color  ">
          <i class="far fa-heart"></i>
          <span class=" h6">${element.like}k</span>
        </div>
        <div class="h6 text-muted m-0 d-flex align-items-center ">
          <label for="" class="m-0 mr-1">Compare</label>
          <input class="compare-checkbox" id="compare" type="checkbox" onchange="compareProducts(this)">
        </div>
      </div>
    <div class="" onclick="productDetail(this)">
        <div class="product-img">
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
    </div>

      `
      productOrder=1
      }
      });
    document.querySelector('.product-section-spinner').style.display="none"
}

productRendering()

const productDetail = (ele)=>{
  hiddenForm2 = document.querySelector('.second-hidden-form')
  hiddenForm2.querySelector('input').value = ele.childNodes[3].childNodes[1].innerText
  hiddenForm2.submit()
  
}
