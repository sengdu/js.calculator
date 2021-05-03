
let resultShow = document.getElementById("Element");
let Btn = document.getElementsByTagName("button");

for (let i = 0; i < Btn.length; i++) {
	Btn[i].addEventListener("click",function(){
		if(resultShow.value === 0){
			resultShow.value = this.value;
		}else{
			switch(this.value){
				case "AC":
					resultShow.value = "";
					break;
				
				case "=":
				resultShow.value = eval(resultShow.value);
				break;

				default:
					resultShow.value += this.value;
			}
		}
			
	});
	Btn[i].addEventListener("mouseenter",function(){
		this.style.backgroundColor =" rgb(14, 197, 173)" ;
	});
	Btn[i].addEventListener("mouseleave",function(){
		this.style.backgroundColor = " rgb(42, 52, 54)";
	});
	
}

function  myfunction() {
	let all = document.getElementById("Top");
	if(all.style.display === "none"){
		all.style.display = "block";
	}else {
		all.style.display = "none";
	  }
}