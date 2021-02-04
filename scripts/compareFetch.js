let headerVal
if (window.location.search != "") {
    headerVal = window.location.search.split("=")

    // url decoding here 
    headerVal = headerVal[1]
    headerVal = headerVal.toLowerCase()
    headerVal = headerVal.split("+").join(" ")
    headerVal = headerVal.split("%2f").join("/")
    headerVal = headerVal.split('%2c')
}

async function compareFetchProduct() {

    let storeArr = []
    let compareTable = document.querySelector('.compare-table')
    await data.forEach(element => {
        element.name = element.name.toLowerCase()
        if (element.name == headerVal[0] || element.name == headerVal[1]) {
            storeArr.push(element.name)
            storeArr.push(element.src)
            storeArr.push(element.like)
            storeArr.push(element.price)
            storeArr.push(element.strike)
            storeArr.push(element.left)
            storeArr.push(element.brand)
            storeArr.push(element.rating)
            storeArr.push(element.type)
        }
    });
    console.log(storeArr)

    disfirstval = storeArr[4]-storeArr[3]
    dissectval = storeArr[13]-storeArr[12]

    let firstStock = "InStock"
    let secondStock = "InStock"
    if(storeArr[5]==0){
        firstStock = "Not InStock"
    }
    if(storeArr[14]==0){
        secondStock = "Not InStock"
    }
    compareTable.innerHTML = `
    
     
    <tr class="row some m-0 p-0 border-bottom">
    <td class="col-2 compare-div first-div ">
    </td>
    <td class="col-5 compare-div second-div">
      <img class="mx-auto" src="${storeArr[1]}" alt="">
    </td>
    <td class="col-5 compare-div third-div">
      <img class="mx-auto" src="${storeArr[10]}" alt="">
    </td>
    </tr>

  <tr class="row m-0 p-0 border-bottom">
    <td class="col-2 p-3 m-0 h6 compare-div first-div  font-weight-bold ">
      Product <br> Name
    </td>
    <td class="col-5 p-3 font-weight-bold compare-div  second-div d-flex flex-column ">
      <span>${storeArr[0]}</span>
      <span class="font-weight-normal h6">${storeArr[8]}</span>
    </td>
    <td class="col-5 p-3 font-weight-bold compare-div third-div d-flex flex-column ">
      <span>${storeArr[9]}</span>
      <span class="font-weight-normal h6">${storeArr[17]}</span>
    </td>
  </tr>

  <tr class="row m-0 p-0 border-bottom">
    <td class="col-2 p-3 m-0 h6 compare-div first-div  font-weight-bold ">
      Price
    </td>
    <td class="col-5 p-3 font-weight-bold compare-div  second-div d-flex ">
      <span>Rs.${storeArr[3]}</span>
      <strike class=" strike-color ">${storeArr[4]}</strike>
    </td>
    <td class="col-5 p-3 font-weight-bold compare-div third-div d-flex ">
      <span>Rs.${storeArr[12]}</span>
      <strike class=" strike-color ">${storeArr[13]}</strike>
    </td>
  </tr>
  <tr class="row m-0 p-0 border-bottom">
    <td class="col-2 p-3 m-0 h6 compare-div first-div  font-weight-bold ">
      Discount
    </td>
    <td class="col-5 p-3 font-weight-bold compare-div  second-div d-flex ">
      <span>${Math.round(disfirstval/storeArr[4]*100)}%</span>
      <span class=" strike-color ">off</span>
    </td>
    <td class="col-5 p-3 font-weight-bold compare-div third-div d-flex ">
      <span>${Math.round(dissectval/storeArr[13]*100)}%</span>
      <span class=" strike-color ">off</span>
    </td>
  </tr>
  <tr class="row m-0 p-0 border-bottom">
    <td class="col-2 p-3 m-0 h6 compare-div first-div  font-weight-bold ">
      Brand
    </td>
    <td class="col-5 p-3 h6 compare-div  second-div d-flex align-items-center ">
      <span> <i class="fas fa-angle-double-right"></i>${storeArr[6]}</span>
    </td>
    <td class="col-5 p-3 h6 compare-div third-div d-flex align-items-center">
      <span> <i class="fas fa-angle-double-right"></i>${storeArr[15]}</span>
    </td>
  </tr>
  <tr class="row m-0 p-0 border-bottom">
    <td class="col-2 p-3 m-0 h6 compare-div first-div  font-weight-bold ">
      Rating
    </td>
    <td class="col-5 p-3 h6 compare-div  second-div d-flex align-items-center ">
      <i class="fas fa-angle-double-right"></i>
      <span class="font-weight-bold mr-1">${storeArr[7]}</span>
      <span class="star-outer">
        <span class="star-inner"  style="width:${storeArr[7]/5*100}%;"></span>
      </span>
    </td>
    <td class="col-5 p-3 h6 compare-div third-div d-flex align-items-center">
      <i class="fas fa-angle-double-right"></i>
      <span class="font-weight-bold mr-1">${storeArr[16]}</span>
      <span class="star-outer">
        <span class="star-inner"  style="width:${storeArr[16]/5*100}%;"></span>
      </span>
    </td>
  </tr>
  <tr class="row m-0 p-0 border-bottom">
    <td class="col-2 p-3 m-0 h6 compare-div first-div  font-weight-bold ">
      Availiblity
    </td>
    <td class="col-5 p-3 h6 compare-div  second-div d-flex align-items-center ">
       <i class="fas fa-angle-double-right"></i>
       <strong class="mr-1"> ${storeArr[5]} </strong> Items Left (${firstStock})
    </td>
    <td class="col-5 p-3 h6 compare-div third-div d-flex align-items-center">
      <i class="fas fa-angle-double-right"></i>
      <strong class="mr-1"> ${storeArr[14]} </strong>  Items Left (${secondStock})
    </td>
  </tr>
 

    `

}



compareFetchProduct()