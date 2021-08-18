// JavaScript Document

document.getElementById("printBtn").onclick = function(){
		//Hide for print
		var backButton = document.getElementById("backToMain");
		var finalPageButton = document.getElementById("FinalPageBtn");
		var printButton = document.getElementById("printBtn"); 
		var footer = document.getElementById("footer");
		
		backButton.style.visibility = "hidden";
		finalPageButton.style.visibility = "hidden";
		printButton.style.visibility = "hidden";
		footer.style.visibility = "hidden";
		
		window.print()
		
		// Now unhide 
		backButton.style.visibility = "visible";
		finalPageButton.style.visibility = "visible";
		printButton.style.visibility = "visible";
		footer.style.visibility = "visible";
	}
