var parent = document.querySelector(".modalparent"),
  btn = document.querySelector("button"),
  X = document.querySelector(".X"),
   section = document.querySelector("section")
  
    btn.addEventListener("click",appear);
	
	function appear(){
		parent.style.display = "block"
		section.style.filter = "blur(10px)"
	}
	X.addEventListener("click",disappearX);
	function disappearX() {
		parent.style.display = "none";
		parent.style.filter = "blur(0px)"
	}
	
	parent.addEventListener("click",disappearParent)
	 function disappearParent(e){
		 if (e.target.className == "modalparent") {
			 parent.style.display = "none";
		     section.style.filter = "blur(0px)"
		 }
	 }
	
	
	
	
	
	
	
	
	
	
	
	
	
	