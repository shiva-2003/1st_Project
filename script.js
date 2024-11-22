let clickOnRM=document.getElementsByClassName("click_to_act")

for(let i=0;i<clickOnRM.length;i++){
    clickOnRM[i].addEventListener("click",function(){
        alert("The REadMore button has been clicked")
    })
}
