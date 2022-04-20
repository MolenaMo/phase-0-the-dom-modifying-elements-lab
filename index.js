/*KISS-Keep It Short & Simple, removes the element, which removes the #Id too*/
//element.remove()//
main.remove();

//prompts Error: newHeader is not define...WHAT?!
//from lab module const main = document.getElementById("main")
// const newHeader = document.createElementById("h1 #victory")
// const newHeader = document.createElementById("victory")

//create the element first, belows does that... 
const newHeader = document.createElement("h1");

//...then create the #ID...
//code below,Error:Make sure you create an <h1> with id 'victory'
// const h1 = document.createElementById("#victory");
// const h1 = document.createElementById("victory")//same error
newHeader.id = "victory"

//element.innerHTML = "text"--sets the innerHTML property
// h1.innerHTML = "YOUR NAME is the champion"
// h1#victory.innerHTML = "YOUR NAME is the champion"
// #victory.innerHTML = "YOUR NAME is the champion"
// newHeader.id.innerHTML = "YOUR NAME is champion"
 newHeader.innerHTML= "Monique is the champion"//FINALLY IT WORKED, so i inserted my name & still works!YAY me!