const baoquan = document.querySelector(".baoquan")
const chitiet = document.querySelector(".chiTiet")
if(baoquan){
    baoquan.addEventListener("click",function(){
        document.querySelector(".product-content-right-botton-content-chiTiet").style.display ="none"
        document.querySelector(".product-content-right-botton-content-baoquan").style.display ="block"
    })
}
if(chitiet){
    chitiet.addEventListener("click",function(){
        document.querySelector(".product-content-right-botton-content-chiTiet").style.display ="block"
        document.querySelector(".product-content-right-botton-content-baoquan").style.display ="none"
    })
}