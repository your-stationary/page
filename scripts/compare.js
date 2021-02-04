let compareControlBtn = document.querySelector('.compare-control-btn')
let compareCheckbox  = document.querySelectorAll('.compare-checkbox')
let compareControl = document.querySelector('.compare-control')
let compareControlAlert = document.querySelector('.compare-control-alert')
let compareCount = 0
let compareProductArray = []
let compareProductStore = []

window.onload =()=>{
    compareCheckbox.forEach(element => {
        element.checked = false
    });
}

const compareProducts = (ele) => {
    compareControl.style = "clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);"
    var elementName = ele.parentElement.parentElement.parentElement.lastElementChild.lastElementChild.firstElementChild.innerText
    if (compareCount != "2" && ele.checked == true) {
        compareCount++
        compareControlBtn.innerText = `Compare( ${compareCount} of 2 )`
        compareProductArray.push(elementName)
    }
    else if (ele.checked == false) {
        compareProductStore = []
        compareCount--
        compareControlBtn.innerText = `Compare( ${compareCount} of 2 )`
        compareProductArray.forEach(element => {
            if (element != elementName){
            compareProductStore.push(element)
        }
        compareProductArray =  compareProductStore
    });
    }
    else {
    ele.checked = false;
    compareControlAlert.innerHTML = `You can compare only 2 products at a time  <i class="fas fa-exclamation-circle"></i>`
    compareControlAlert.style.display = "block"
    }
}

let thirdHiddenForm = document.querySelector('.third-hidden-form')
let thirdInput = thirdHiddenForm.querySelector('input')

const compareProductPost = ()=>{
    if(compareProductArray.length >1){
    thirdInput.value = compareProductArray
    thirdHiddenForm.submit()
    }
    else{
        compareControlAlert.innerHTML = `Please select atleast 2 products <i class="fas fa-exclamation-circle"></i>`
        compareControlAlert.style.display="block"
    }
}

