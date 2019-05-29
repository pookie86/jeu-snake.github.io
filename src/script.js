import Game from "./game.js"

window.onload = () =>    //se lance lorsque fenêtre s'affiche
{ 
    
document.onkeydown = (e) =>   //change position en fonction de ce que l'utilisateur à taper sur le clavier 
{                                                  //on lui donne un nom à la fonction et on va lui donner l'evenement cad que chaque evenement le transmettre à la fonction
    const key = e.keyCode;    //donne le code de la touche qui a été appuyé
    let newDirection;
    switch(key)
    {
        case 37:    //flèche gauche
            newDirection = "left"
            break;
        case 38:
            newDirection = "up"
            break;
        case 39:
            newDirection = "right"
            break;
        case 40:
            newDirection = "down"
            break;
        case 32:
            myGame.launch();
            //myGame2.launch();
            return;
        default:
            return;
    }
    myGame.snakee.setDirection(newDirection);      //appelle la nouvelle direction
    //myGame2.snakee.setDirection(newDirection);
};

let myGame = new Game();        //on créer le jeu avant de l'initialiser
myGame.init();                  //init est une méthode de la classe Game

//let myGame2 = new Game();        //on créer un 2eme jeu avant de l'initialiser
//myGame2.init();                  //init est une méthode de la classe Game
}








