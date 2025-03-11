const dodger= document.getElementById("dodger");
function moveDodgerLeft(){
    const leftNumbers=dodger.style.left.replace("px","");
    const left=parseInt(leftNumbers,10);

    if (left>0){
        dodger.style.left=`${left-5}px`;
    }
}

function moveDodgerRight(){
    const leftNumbers=dodger.style.left.replace("px","");
    const left=parseInt(leftNumbers,10);

    if (left>=0){
        dodger.style.left=`${left+5}px`;
    }
}

document.addEventListener("keydown", function(e){
    if(e.key==="ArrowLeft"){
        moveDodgerLeft();
        console.log("moved left");
        console.log(dodger.style.left)

    }
    else if(e.key==="ArrowRight"){
        moveDodgerRight();
        console.log("moved right");
        console.log(dodger.style.left)
    }
});