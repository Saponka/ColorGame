let numeroCuadrados = 6;
let colors =generateRandomColors(numeroCuadrados)
let square = document.querySelectorAll(".square");
let mensaje = document.querySelector("#message");
let botonReset = document.querySelector("#reset");
let botonMode = document.querySelectorAll(".mode");
let pickedColor = colors;
let titulo = document.querySelector("#colorDisplay");
let h1 = document.querySelector("h1");
 pickedColor = pickColor ();
titulo.textContent = pickedColor ;

 init()

function init(){
  ModeBotons()
  Squares()
  reset()
} 
//2.
function Squares(){
for ( let i = 0; i < square.length; i++){              

    square[i].style.backgroundColor=colors[i];           //agrega colores a los cuadrados

    square[i].addEventListener( "click",function(){       //evento click a los cuadrados

    let clickedColor = this.style.backgroundColor;         //toma el color del cuadrado clickeado

    if (clickedColor === pickedColor ) {                 //compara color
        
        mensaje.textContent="Correcto";
        botonReset.textContent = "Juega Otra Vez ";
        changeColors(clickedColor);
        h1.style.background = pickedColor;  
       
         }
     else{
       mensaje.textContent="Intenta Otra Vez";
       this.style.backgroundColor="rgb(23, 23, 23)";
       this.style.borderColor="rgb(255, 255, 255)"
    } 
})
}
}
//8.4----------------------------------------------------------------------------
function changeColors (color){

    for ( let i = 0; i < square.length; i++)
    
    square[i].style.backgroundColor = color;  
}
//9---------------------------------------------------------------------------
 function pickColor (){

   let pickRandom = Math.floor(Math.random()*colors.length);  //redondear un numero con math.round de un numero aleatorio de (math.ramdom x colors(6))

    return colors [pickRandom];
} 
//10--------------------------------------------------------------------
function generateRandomColors (numero){

 let arreglo = []

 for ( let i = 0; i < numero; i++){

    arreglo.push(randomnizeColors());
 }
 return arreglo;
}
//-------------------------------------------------------------------
function randomnizeColors () {
    
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
    
        return "rgb("+red+", "+green+", "+blue+")";   
    }        
//---------------------------------------------------------------
 function reset(){

    colors=generateRandomColors( numeroCuadrados )
    pickedColor=pickColor()
    titulo.textContent=pickedColor

    for(let i=0;i<square.length;i++){

   if( colors[i] ){
    square[i].style.backgroundColor = colors[i];    // la variable colors=generateRandomColors(numeroCuadrados)
    square[i].style.display="block"
   }
   else{ square[i].style.display="none"} } 

h1.style.background="cornflowerblue";                //cambia el color de  fondo del titulo.
botonReset.textContent="Nuevos Colores";
mensaje.textContent=""                              //deja en blanco el span con el mensaje.
}
botonReset.addEventListener("click", function(){   //agregamos el click event a la funcion reset
    reset()
  })
//------------------------------------------
function ModeBotons(){

    for (var i = 0; i < botonMode.length; i++) {

    botonMode[i].addEventListener("click", function(){
        botonMode[0].classList.remove("selected")
        botonMode[1].classList.remove("selected")
        this.classList.add("selected")
        numeroCuadrados = (this.textContent ==="Facil")?3:6

        reset()
      })
    }
  }

//--------------------------------------------


