function reveal() {
  var reveals = document.querySelectorAll(".reveal")

}  //This is targetting all the reveal elements, but using the doc.querySelectorAll

for (var i = 0; i < reveals.length; i++) {
  var windowHeight = window.innerHeight;
  var elementTop = reveals[i].getBoundingClientRect().top;
  var elementVisible = 150;
} //This is for calculating the position of which the user is on the page,
//to trigger the scroll animations at certain postions. This uses the distance of
//for instance a <p> from the top of the page to indicate when to activate the
//scroll function
//elementTop is the distance of the reveal element from top, windowheeight is the
//height of the page, and elementVisible the height where the reveal should be triggered.
if (elementTop < windowHeight - elementVisible) {
  reveals[i].classList.add("active");
} else {
  reveals[i].classList.remove("active");
}//This is the "if" statement that triggers the scroll animation

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();


//This is a JS comment
