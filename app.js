const watchList=document.getElementById("watchList")
const signIn=document.getElementById("signIn")
const close=document.querySelector(".close")
const dropdownContent2=document.querySelector(".dropdown-content2")
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


watchList.addEventListener("click",()=>{
dropdownContent2.style.display="block"
})

close.addEventListener("click",(event)=>{
	event.stopPropagation();
	dropdownContent2.style.display = "none";
})

	signIn.onclick = function() {
	modal.style.display = "block";
   }
   span.onclick = function(event) {
	event.stopPropagation();
	modal.style.display = "none";
   }
   window.onclick = function(event) {
	if (event.target == modal) {
	  modal.style.display = "none";
	}
   }