const nav = document.getElementById('links')
let check_res =true
document.getElementById('menu_icon').addEventListener('click',function(){
   nav.classList.toggle('active')
   if(check_res){
    document.getElementById('menu_icon').textContent = 'close'
    check_res = false
   }else{
    document.getElementById('menu_icon').textContent = 'menu'
    check_res =true
   }
   
})


