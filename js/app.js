window.onload=function(){
  var board= document.querySelector('.board-js')
  console.log(board)
  /*agrega colo a cada casilla cuando se le hace click*/
  board.addEventListener('click',function(event){
    event.target.style.backgroundColor='purple';
  });
  /*agrega colo a cada casilla cuando se le hace dobleclick*/
  board.addEventListener('dblclick',function(event){
    event.target.style.backgroundColor='LawnGreen ';
  });
  /*quita colo a cada casilla cuando se le hace dobleclick*/
  board.removeEventListener('dblclick',function(event){
    event.target.style.backgroundColor='LightSkyBlue';
  });
  event.textContent = text.style.backgroundColor='LightSkyBlue';
};

window.onload=function() {
  var board = document.querySelector('.board-js');

  board.addEventListener("click", addX);
};

var centinel = true;

function addX(event){
  if (centinel){
  event.target.textContent = "X";
  centinel = false;
}else{
  event.target.textContent = "O";
  centinel = true;

  /*function addX(event){
    if (event.target.matches('td')){
     if(centinel);
      event.target.textContent='X';
     else{
      event.target.textContent = "O";
    centinel = !centinel;*/

  }
}
