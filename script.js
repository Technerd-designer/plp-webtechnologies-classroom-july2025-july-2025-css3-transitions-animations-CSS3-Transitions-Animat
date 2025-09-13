//Javascript functions
document.getElementById('drink').addEventListener('mouseover',border)
document.getElementById('drink').addEventListener('mouseover',width)
document.getElementById('drink').addEventListener('mouseover',height)
function border(){
    document.getElementById("drink").style.border = "4px solid purple"
}
function width(){
    document.getElementById("drink").style.width = "400px"
}
function height(){
    document.getElementById("drink").style.height = "400px"
}

//CSS and Javascript combination
document.getElementById('btn').addEventListener("click", function(){
    const pic=document.getElementById('pic')
    pic.classList.toggle("animate")
})