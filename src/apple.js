export default class Apple       
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
