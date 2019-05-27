export default class Snake
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
