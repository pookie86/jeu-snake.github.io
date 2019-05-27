window.onload = () =>    //se lance lorsque fenêtre s'affiche
{ 
    

    class Snake
    {
        constructor(direction, ...body)        //prototype du serpent => constructeur
        {
            this.body = body;       //corps du serpent égal body fournit à la fonction constructor
            this.direction = direction;
            this.ateApple = false;
        }
        
        advance()       //fait avancer le serpent
        {
            const nextPosition = this.body[0].slice();        //nouvelle position de la tête, on copie l'element [6,4] avec slice
            switch(this.direction)      //switch qui va analyser notre direction
            {
                case "left":
                    nextPosition[0] -=1;
                    break;
                case "right":
                    nextPosition[0] +=1;        //fait avancer de 1 selon l'axe des x
                    break;                
                case "down":
                    nextPosition[1] +=1;
                    break;
                case "up":
                    nextPosition[1] -=1;
                    break;
                default:
                    throw ("Invalid Direction");
            }

            this.body.unshift(nextPosition);        //rajoute un block à la tete du serpent
            if(!this.ateApple)      //si le serpent ne mange pas la pomme
            this.body.pop();        //enlève dernier block du serpent
            else
                this.ateApple = false;      //rajoute juste un block une fois la pomme mangé
        };
        setDirection(newDirection)      //passe la direction au serpent
        {
            let allowedDirections;      //les directions permises
            switch(this.direction)
            {
                case "left":
                case "right":
                    allowedDirections = ["up", "down"];    
                    break;                
                case "down":
                case "up":
                    allowedDirections = ["left", "right"];                 
                    break;
                default:
                    throw ("Invalid Direction");
            }
        if(allowedDirections.indexOf(newDirection) > -1)        //si allowedDirection sup ou = à - ca veut dire direction permise
        {
            this.direction = newDirection; 
        }                             
        };
        checkCollision(widthInBlocks, heightInBlocks)        //vérifie si serpent sort du contexte ou passe sur son propre corps
    {
            let wallCollision = false;      //initialise à faux
            let snakeCollision = false;     //initialise à faux
            
            const [head, ...rest] = this.body;
            //const head = this.body[0];        //verifie la tete du serpent
            //const rest = this.body.slice(1);      //reste du corps du serpent mis de côté, est un array
            const [snakeX,snakeY] = head;
            //const snakeX = head[0];       // x de la tete
            //const snakeY = head[1];       // y de la tete
            const minX = 0;       //initialise à 0
            const minY = 0;       //initialise à 0
            const maxX = widthInBlocks -1;        //nombre de blocks -1
            const maxY = heightInBlocks -1;       //nombre de blocks -1
            const isNotBetweenHorizontalWalls = snakeX < minX || snakeX > maxX      //bolleen        //verifie si la tete entre les murs horizontales gauche ou droite
            const isNotBetweenVerticalWalls = snakeY < minY || snakeY > maxY      //verifie si la tete entre les murs verticales haut ou bas
    
        if(isNotBetweenHorizontalWalls || isNotBetweenVerticalWalls)
        {
            wallCollision = true;       //il y a collision de mur
        }
    
        for(let block of rest)       //verifie si serpent passe sur son propre corps
        {
            if (snakeX === block[0] && snakeY === block[1] ) 
            {
            snakeCollision = true;      //il y a collision de serpent
            }
        }

        return snakeCollision || wallCollision;     //retourne le resultat
    
        };
        isEatingApple(appleToEat)       //savoir si le serpent mange la pomme
        {
            const head = this.body[0];        //verifie si la tete egale au corps à la place 0
            if(head[0] === appleToEat.position[0] && head[1] === appleToEat.position[1])        //x et y du head egale a appletoeat  // verifie si la tete est egale a position de la pomme
                return true;        //on peut ne pas mettre les crochets si qu'une seule ligne
            else
                return false;
        }; 
    }

    class Apple       
    {   
        constructor(position = [10,10])       //prototype de la pomme => constructeur
        {
            this.position = position;
        }

        setNewPosition(widthInBlocks, heightInBlocks)        //pour faire bouger la pomme aléatoirement
        {
            const newX =  Math.round(Math.random() * (widthInBlocks - 1));        //multiplie par nombre de blocks dans la largeur -1 chiffre entre 0 & 29 avec chiffres entier
            const newY =  Math.round(Math.random() * (heightInBlocks - 1));
            this.position = [newX, newY];
        };
        isOnSnake(snakeToCheck)     //vérifie sur quel serpent se trouve la pomme
        { 
            let isOnSnake = false;      //constante qu'on retourne à la fin (non c'est faux je ne suis pas sur le serpent)

        for(let block of snakeToCheck.body)      //on va vérifier si pomme est sur chacun des blocks du serpent
        {
            if(this.position[0] === block[0] && this.position[1 === block[1]]) // X de notre pomme est égale à block de la place i et verifie son X
            {
                isOnSnake = true;
            }
        }
        return isOnSnake;
        };   
    }

    class Drawing 
    {
        static gameOver(ctx, centreX, centreY)    //affiche le texte => methode static
        {
            ctx.save();
            ctx.font = "bold 60px Urban Jungle"     //change la police
            ctx.fillStyle = "#1d741b";      //change la couleur de la police
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.strokeStyle = "#8fa01f";
            ctx.lineWidth = 5;
            ctx.strokeText("GAME OVER", centreX, centreY - 85);
            ctx.fillText("GAME OVER", centreX, centreY - 85);
            ctx.font = "bold 20px sans-serif"       //change la police
            ctx.strokeText("Appuie sur la touche Espace pour rejouer", centreX, centreY + 90);
            ctx.fillText("Appuie sur la touche Espace pour rejouer", centreX, centreY + 90);
    
            ctx.restore();
        }

        static drawScore(ctx, centreX, centreY, score)       //affiche le score
        {
        ctx.save();
        ctx.font = "bold 80px sans-serif"       //change la police
        ctx.fillStyle = "#e8be7a";      //change la couleur de la police
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("Score" + " : " + score.toString(), centreX, centreY);     // Centre le text au milieu
        ctx.restore();
        }

        static drawSnake(ctx, blockSize, snake)     //méthode dessinant le body du serpent
        {
            ctx.save();         //sauvegarde du contexte comme il était avant
            ctx.fillStyle = "#6f522a";      //Couleur du serpent
            for (let block of snake.body)       //boucle permettant de passer sur chacun des membres du serpent
            {
                this.drawBlock(ctx, block, blockSize);       //dessine un block on donne le ctx et la position du block à dessiner
            }
            ctx.restore();      //permet de garder le contexte comme il était avant
        
        };   

        static drawBlock(ctx, position, blockSize)       //dessine un block prend contexte et position d'un bloc
        {
        const [x,y] = position;
        //const x = position[0] * blockSize    //position à l'axe horizontal
        //const y = position[1] * blockSize;        //position à l'axe vertical
        ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);       //remplissage du rectangle
        }

        static drawApple(ctx, blockSize, apple)      //méthode pour dessiner 
        {
            const radius = blockSize/2;       // r = diametre/2 definition du rayon
            const x = apple.position[0]*blockSize + radius;        //position du rond par rapport à l'horizontal
            const y = apple.position[1]*blockSize + radius;        //position du rond par rapport au vertical
            ctx.save();
            ctx.fillStyle = "#970c10";      //couleur de la pomme
            ctx.beginPath();        //il s'agit d'un rond
            ctx.arc(x,y, radius, 0, Math.PI*2, true);       //dessine le cercle
            ctx.fill();     //remplis le cercle avec de couleur
            ctx.restore();      //se souvenir des anciens paramètres dans le contexte
        };

    }

    class Game
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
            myGame2.launch();
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








