//Store image of cat as a variable
let cat = document.querySelector('img');
//Set initial position to zero
let leftPos = 0;
//Set end destination as boolean to false
let rightPos = false;
// using function expression starts with let variable, then set equal to setInterval and execute arrow function for every 10ms
let id = setInterval(() => {
    //Check condition
    if(leftPos < 300 && !rightPos){
        //increase the position of cat moves
        leftPos++;
        //check if cat arrives at the destination, then change the end destination to true
        if(leftPos === 300){
            rightPos = true;
        }
        //Change all related styles of the cat
        cat.style.right = leftPos + "px";
        cat.style.transform = "scaleX(1)";
        cat.style.left = leftPos + "px";
    } else {
        //decrease the position of cat moves when the cat arrived at the end point
        leftPos--;
        if(leftPos <= 0){
            rightPos = false;
        }
        cat.style.right = leftPos + "px";
        cat.style.transform = "scaleX(-1)";
        cat.style.left = leftPos + "px";
    }
}, 10);