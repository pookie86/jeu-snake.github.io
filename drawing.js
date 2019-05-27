export default class Drawing 
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
