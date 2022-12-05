
//variable declaration
let turnfor_X ="X";



//change player
function changePlayer(){
      return turnfor_X === "X"?"O":"X";
}
// winner logic
function winCondition(){
      let inText = document.getElementsByClassName('innerContant');
      let win = [

            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8], 
            [0,4,8],
            [2,4,6], 
      ]; 
      win.forEach(el =>{
            if((inText[el[0]].innerText === inText[el[1]].innerText) && (inText[el[2]].innerText === inText[el[1]].innerText) && (inText[el[0]].innerText !== "")){
             document.querySelector(".turnfor"). innerText=inText[el[0]].innerText +" " +  "Win the Match" ;
            }
      })

}



//win logic

// function checkWinner(){
//       return winCondition.some(condition =>{
//             // condition.every(con2 =>{
//             //       return boxes[con2].classList.contains(turnfor_X)
//             // });
// console.log(condition)
//       });
// };


//main logic

var boxes = document.getElementsByClassName('box');

Array.from(boxes).forEach(element =>{
      let inBoxtxt = element.querySelector('.innerContant');
      element.addEventListener('click',function(){
      if(inBoxtxt.innerText === ''){

            inBoxtxt.innerText = turnfor_X;
            turnfor_X=changePlayer()
            document.getElementsByClassName('turnfor')[0].innerText = "Turn for:" + turnfor_X ;
            winCondition()


      }
      });

});



function reStart(){
            window.location = location.href;
      
}







