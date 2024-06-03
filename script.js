let boxes= document.querySelectorAll(".box");
let reset= document.querySelector("#reset");
let message=document.querySelector("#msg");
let newGame=document.querySelector("#new");

let turn = true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turn=true;
    enableBoxes();
    for(box of boxes){
        box.innerHTML="";
    }
    //msgContainer.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("button was clicked");
        if(turn){
            box.innerHTML="O";
            turn=false;

        }
        else{
            box.innerHTML="X";
            turn=true;
        }
        box.disabled=true;
        
        checkWinner();
    })
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}


const checkWinner=()=>{
    for(pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerHTML;
        let pos2=boxes[pattern[1]].innerHTML;
        let pos3=boxes[pattern[2]].innerHTML;

        if(pos1!="" && pos2!="" && pos2!=""){
            if(pos1===pos2 && pos2 === pos3){
                console.log("winner is ", pos1);
                message.innerHTML='Congratulations Winner is found';
                disableBoxes();
            }
        }
    }
};


reset.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);

