
let  hiddenForm = document.querySelector('.hidden-form')
const redirectProduct = (text)=>{
    hiddenForm.querySelector('input').value = text.innerText
    hiddenForm.submit()
}
let suggestions = document.querySelector('.suggestions')
let listItems 

    data.forEach(element => {
      suggestions.innerHTML = suggestions.innerHTML+`
      <span onclick="redirectProduct(this)">${element.name}</span>
      `
    });
    listItems = suggestions.querySelectorAll('span')


const filterCheck=(element)=>{
	 for (let i=0;i<listItems.length;i++){
     if(element.value !=" "){
          if(listItems[i].innerText.toUpperCase().indexOf(element.value.toUpperCase()) >-1){
                  listItems[i].style="order:"+listItems[i].innerText.toUpperCase().indexOf(element.value.toUpperCase())+"; display:block;"
            
            }
            else{
                  listItems[i].style.display="none"
            }
            
            if(element.value==""){
    			listItems[i].style.display="none"
			}
    }
    }       
}
