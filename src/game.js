import Snake from "./snake.js";
import Apple from "./apple.js";
import Drawing from "./drawing.js";

export default class Game
{
    constructor(canvasWidth = 900, canvasHeight = 600){     //on va pouvoir configurer des jeux avec des tailles différentes ou paramètres par défaut

        this.canvasWidth = canvasWidth;      //largeur
        this.canvasHeight = canvasHeight;     // hauteur
        this.blockSize = 25;     //taille des blocks
        this.canvas = document.createElement('canvas');      //créer l'element html5 permettant de dessiner sur une page html
        this.ctx = this.canvas.getContext('2d');      //dessine dans le canvas dans le contexte & attrape le contexte pour le mettre dans un nom
        this.widthInBlocks = this.canvasWidth/this.blockSize;      //divise la largeur en terme de blocks donc 30 blocks
        this.heightInBlocks = this.canvasHeight/this.blockSize;        //divise la hauteur en terme de blocks donc 20 blocks
        this.centreX = this.canvasWidth/2;      //pointe vers le milieu horizontale : largeur du canvas %2
        this.centreY = this.canvasHeight/2;     //pointe vers le milieu verticale : longueur du canvas %2
        this.delay = 100;        //temps en ms, let car nouvelle assignation plus tard
        this.snakee;     //let car nouvelle assignation
        this.applee;
        this.score;
        this.timeout;
    }

    init()
    {
        this.canvas.width = this.canvasWidth;     //largeur
        this.canvas.height = this.canvasHeight;       //hauteur
        this.canvas.style.border = "30px solid #382a15";     //style du canvas
        this.canvas.style.margin = "50px auto";
        this.canvas.style.display = "block";
        this.canvas.style.background = "url(https://static.vecteezy.com/system/resources/previews/000/147/109/non_2x/palmetto-leaves-background-vector.jpg) no-repeat center ";
        this.canvas.style.backgroundColor = "#c7914b";
        document.body.appendChild(this.canvas);      //permet d'accrocher ce tag au body, on l'ajoute au HTML avec cette ligne
        this.launch();    
    }
    
    launch()      //reinitialise le jeu à 0, on va lancer le jeu
    {
        this.snakee = new Snake("right", [6,4], [5,4], [4,4], [3,4], [2,4]);       //fonction constructor crée le body du serpent
        this.applee = new Apple();        //fonction constructor crée la pomme
        this.score = 0;
        this.delay = 100;
        clearTimeout(this.timeout);      //annule la variable timeout
        this.refreshCanvas();        //appelle la fonction à la fin de la fonction init
    } 

    refreshCanvas()        //gros rectangle dans lequel on va dessiner des choses qu'on rafraichit encore et encore pour donner impression de mouvement
    {                                 //pour faire bouger le rectangle marron
        this.snakee.advance();       //fait avancer le serpent
        if (this.snakee.checkCollision(this.widthInBlocks, this.heightInBlocks)) 
        {
            Drawing.gameOver(this.ctx, this.centreX, this.centreY);         //methode static de la class Drawing    
        }
        else
        {
            if(this.snakee.isEatingApple(this.applee))
        {
            this.score++;        //ajoute 1 point quand le serpent a mangé une pomme
            this.snakee.ateApple = true;
            do
            {
                this.applee.setNewPosition(this.widthInBlocks, this.heightInBlocks);        //on donne une nouvelle position a la pomme
            }
            while(this.applee.isOnSnake(this.snakee))     //on vérifie si position est sur le serpent snakee tant que la nouvelle position sera sur le snakee
            
            if(this.score % 5 == 0)
            {
                this.speedUp();      //si score à 5 alors execute la fonction speedup = franchi pallier de 5 points
            }
        }
        this.ctx.clearRect(0,0,this.canvasWidth, this.canvasHeight);       //efface le contenu du canvas
        Drawing.drawScore(this.ctx, this.centreX, this.centreY, this.score);        //dessine le score
        Drawing.drawSnake(this.ctx, this.blockSize, this.snakee);      //dessine le serpent
        Drawing.drawApple(this.ctx, this.blockSize, this.applee);      //dessine la pomme
        this.timeout = setTimeout(this.refreshCanvas.bind(this), this.delay);     //exécute la fonction à chaque fois que delay de 100ms soit passé pour dessiner plusieurs fois le canvas
        }                                              //grâce à cette fonction que va se rafraichir le canvas ce qui donne l'impression de mouvement
    }

    speedUp()
    {
        this.delay /= 2;     //divise le délai par 2 (nouvelle assignation de delay)   
    }
    
}
