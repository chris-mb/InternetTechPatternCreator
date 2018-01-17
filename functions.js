// JavaScript Document
function rotatePattern(patternID) {
	var svg = document.getElementById(patternID);
	var svgDoc = svg.contentDocument;
	var wrapper = svgDoc.getElementById("patternWholeWrapper");
	var currentRotation = 0;
	var currentTransform = wrapper.getAttribute("transform");
	var boundBox = wrapper.getBBox();
	var boundBoxCenter = (boundBox.width / 2) + " " + (boundBox.height / 2);
	//Gets current rotation applied to the pattern wrapper.
	if (currentTransform != null) {
		//changes current rotation to the first argument of the transform attribute (rotation angle)
		currentRotation += parseInt(currentTransform.substring(7, 10), 10);
	}
	if (currentRotation > 180) {
		wrapper.setAttribute("transform", "rotate(0 " + boundBoxCenter + ")");
	} else {
		currentRotation += 90;
		wrapper.setAttribute("transform", "rotate(" + currentRotation.toString() + " " + boundBoxCenter + ")");
	}
}

function invertColours() {
	var svg = document.getElementById("bubbles-svg");
	var svgDoc = svg.contentDocument;
	var circPattern = svgDoc.getElementById("waves");
	var outerCircle = svgDoc.getElementById("outerCirc");
	var innerCircle = svgDoc.getElementById("innerCirc");
	var currentFill = circPattern.getAttribute("fill");
	if (currentFill == "black") {
		circPattern.setAttribute("fill", "white");
		outerCircle.setAttribute("fill", "black");
		innerCircle.setAttribute("stroke", "white");
	} else {
		circPattern.setAttribute("fill", "black");
		outerCircle.setAttribute("fill", "none");
		innerCircle.setAttribute("stroke", "black");
	}
}

function spaceOut() {
	var svg = document.getElementById("cubes-svg");
	var svgDoc = svg.contentDocument;
	var linePattern = svgDoc.getElementById("lines");
	var currentHeight = parseInt(linePattern.getAttribute("height"));
	//increases spaces between lines by 2
	linePattern.setAttribute("height", (currentHeight + 1));
}

function spaceIn() {
	var svg = document.getElementById("cubes-svg");
	var svgDoc = svg.contentDocument;
	var linePattern = svgDoc.getElementById("lines");
	var currentHeight = parseInt(linePattern.getAttribute("height"));
	//increases spaces between lines by 2
	if (currentHeight > 20) {
		linePattern.setAttribute("height", (currentHeight - 1));
	}
}

function enlargePattern(patternID) {
	//Defines pattern to be enlarged
	var elementToEnlarge = document.getElementById(patternID);
	//All divs in document
	var allElements = document.getElementsByTagName("div");
	if (elementToEnlarge.style.position != "absolute") {
		//iterates through divs
		for (i = 0; i < allElements.length; i++) {
			//If the div isn't the pattern's parent, hide it.
			if (allElements[i] != elementToEnlarge.parentElement) {
				allElements[i].style.display = "none";
			}
		}
		//Fills the page with the enlarged element
		elementToEnlarge.style.position = "absolute";
		elementToEnlarge.style.height = "95%";
		elementToEnlarge.style.margin = "0 0";
	} else { //Acts as a toggle mechanism, reverses the code in the if above.
		//If the div isn't the pattern's parent, show it.
		for (i = 0; i < allElements.length; i++) {
			//If the div isn't the pattern's parent, hide it.
			allElements[i].style.display = "block";
		}
		//Make the enlarged element normal again
		elementToEnlarge.style.position = "static";
		elementToEnlarge.style.height = "33%";
		elementToEnlarge.style.margin = "0 auto";
	}
}