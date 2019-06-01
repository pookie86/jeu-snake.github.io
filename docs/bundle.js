/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/apple.js":
/*!**********************!*\
  !*** ./src/apple.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Apple; });\nclass Apple       \n{   \n    constructor(position = [10,10])       //prototype de la pomme => constructeur\n    {\n        this.position = position;\n    }\n\n    setNewPosition(widthInBlocks, heightInBlocks)        //pour faire bouger la pomme aléatoirement\n    {\n        const newX =  Math.round(Math.random() * (widthInBlocks - 1));        //multiplie par nombre de blocks dans la largeur -1 chiffre entre 0 & 29 avec chiffres entier\n        const newY =  Math.round(Math.random() * (heightInBlocks - 1));\n        this.position = [newX, newY];\n    };\n    isOnSnake(snakeToCheck)     //vérifie sur quel serpent se trouve la pomme\n    { \n        let isOnSnake = false;      //constante qu'on retourne à la fin (non c'est faux je ne suis pas sur le serpent)\n\n    for(let block of snakeToCheck.body)      //on va vérifier si pomme est sur chacun des blocks du serpent\n    {\n        if(this.position[0] === block[0] && this.position[1 === block[1]]) // X de notre pomme est égale à block de la place i et verifie son X\n        {\n            isOnSnake = true;\n        }\n    }\n    return isOnSnake;\n    };   \n}\n\n\n//# sourceURL=webpack:///./src/apple.js?");

/***/ }),

/***/ "./src/drawing.js":
/*!************************!*\
  !*** ./src/drawing.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Drawing; });\nclass Drawing \n{\n    static gameOver(ctx, centreX, centreY)    //affiche le texte => methode static\n    {\n        ctx.save();\n        ctx.font = \"bold 60px Urban Jungle\"     //change la police\n        ctx.fillStyle = \"#1d741b\";      //change la couleur de la police\n        ctx.textAlign = \"center\";\n        ctx.textBaseline = \"middle\";\n        ctx.strokeStyle = \"#8fa01f\";\n        ctx.lineWidth = 5;\n        ctx.strokeText(\"GAME OVER\", centreX, centreY - 85);\n        ctx.fillText(\"GAME OVER\", centreX, centreY - 85);\n        ctx.font = \"bold 20px sans-serif\"       //change la police\n        ctx.strokeText(\"Appuie sur la touche Espace pour rejouer\", centreX, centreY + 90);\n        ctx.fillText(\"Appuie sur la touche Espace pour rejouer\", centreX, centreY + 90);\n\n        ctx.restore();\n    }\n\n    static drawScore(ctx, centreX, centreY, score)       //affiche le score\n    {\n    ctx.save();\n    ctx.font = \"bold 80px sans-serif\"       //change la police\n    ctx.fillStyle = \"#e8be7a\";      //change la couleur de la police\n    ctx.textAlign = \"center\";\n    ctx.textBaseline = \"middle\";\n    ctx.fillText(\"Score\" + \" : \" + score.toString(), centreX, centreY);     // Centre le text au milieu\n    ctx.restore();\n    }\n\n    static drawSnake(ctx, blockSize, snake)     //méthode dessinant le body du serpent\n    {\n        ctx.save();         //sauvegarde du contexte comme il était avant\n        ctx.fillStyle = \"#6f522a\";      //Couleur du serpent\n        for (let block of snake.body)       //boucle permettant de passer sur chacun des membres du serpent\n        {\n            this.drawBlock(ctx, block, blockSize);       //dessine un block on donne le ctx et la position du block à dessiner\n        }\n        ctx.restore();      //permet de garder le contexte comme il était avant\n    \n    };   \n\n    static drawBlock(ctx, position, blockSize)       //dessine un block prend contexte et position d'un bloc\n    {\n    const [x,y] = position;\n    //const x = position[0] * blockSize    //position à l'axe horizontal\n    //const y = position[1] * blockSize;        //position à l'axe vertical\n    ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);       //remplissage du rectangle\n    }\n\n    static drawApple(ctx, blockSize, apple)      //méthode pour dessiner \n    {\n        const radius = blockSize/2;       // r = diametre/2 definition du rayon\n        const x = apple.position[0]*blockSize + radius;        //position du rond par rapport à l'horizontal\n        const y = apple.position[1]*blockSize + radius;        //position du rond par rapport au vertical\n        ctx.save();\n        ctx.fillStyle = \"#970c10\";      //couleur de la pomme\n        ctx.beginPath();        //il s'agit d'un rond\n        ctx.arc(x,y, radius, 0, Math.PI*2, true);       //dessine le cercle\n        ctx.fill();     //remplis le cercle avec de couleur\n        ctx.restore();      //se souvenir des anciens paramètres dans le contexte\n    };\n\n}\n\n\n//# sourceURL=webpack:///./src/drawing.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake.js */ \"./src/snake.js\");\n/* harmony import */ var _apple_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apple.js */ \"./src/apple.js\");\n/* harmony import */ var _drawing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawing.js */ \"./src/drawing.js\");\n\n\n\n\nclass Game\n{\n    constructor(canvasWidth = 900, canvasHeight = 600){     //on va pouvoir configurer des jeux avec des tailles différentes ou paramètres par défaut\n\n        this.canvasWidth = canvasWidth;      //largeur\n        this.canvasHeight = canvasHeight;     // hauteur\n        this.blockSize = 25;     //taille des blocks\n        this.canvas = document.createElement('canvas');      //créer l'element html5 permettant de dessiner sur une page html\n        this.ctx = this.canvas.getContext('2d');      //dessine dans le canvas dans le contexte & attrape le contexte pour le mettre dans un nom\n        this.widthInBlocks = this.canvasWidth/this.blockSize;      //divise la largeur en terme de blocks donc 30 blocks\n        this.heightInBlocks = this.canvasHeight/this.blockSize;        //divise la hauteur en terme de blocks donc 20 blocks\n        this.centreX = this.canvasWidth/2;      //pointe vers le milieu horizontale : largeur du canvas %2\n        this.centreY = this.canvasHeight/2;     //pointe vers le milieu verticale : longueur du canvas %2\n        this.delay = 100;        //temps en ms, let car nouvelle assignation plus tard\n        this.snakee;     //let car nouvelle assignation\n        this.applee;\n        this.score;\n        this.timeout;\n    }\n\n    init()\n    {\n        this.canvas.width = this.canvasWidth;     //largeur\n        this.canvas.height = this.canvasHeight;       //hauteur\n        this.canvas.style.border = \"30px solid #382a15\";     //style du canvas\n        this.canvas.style.margin = \"50px auto\";\n        this.canvas.style.display = \"block\";\n        this.canvas.style.background = \"url(./palmier.jpg) no-repeat center \";\n        this.canvas.style.backgroundColor = \"#c7914b\";\n        document.body.appendChild(this.canvas);      //permet d'accrocher ce tag au body, on l'ajoute au HTML avec cette ligne\n        this.launch();    \n    }\n    \n    launch()      //reinitialise le jeu à 0, on va lancer le jeu\n    {\n        this.snakee = new _snake_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"right\", [6,4], [5,4], [4,4], [3,4], [2,4]);       //fonction constructor crée le body du serpent\n        this.applee = new _apple_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();        //fonction constructor crée la pomme\n        this.score = 0;\n        this.delay = 100;\n        clearTimeout(this.timeout);      //annule la variable timeout\n        this.refreshCanvas();        //appelle la fonction à la fin de la fonction init\n    } \n\n    refreshCanvas()        //gros rectangle dans lequel on va dessiner des choses qu'on rafraichit encore et encore pour donner impression de mouvement\n    {                                 //pour faire bouger le rectangle marron\n        this.snakee.advance();       //fait avancer le serpent\n        if (this.snakee.checkCollision(this.widthInBlocks, this.heightInBlocks)) \n        {\n            _drawing_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gameOver(this.ctx, this.centreX, this.centreY);         //methode static de la class Drawing    \n        }\n        else\n        {\n            if(this.snakee.isEatingApple(this.applee))\n        {\n            this.score++;        //ajoute 1 point quand le serpent a mangé une pomme\n            this.snakee.ateApple = true;\n            do\n            {\n                this.applee.setNewPosition(this.widthInBlocks, this.heightInBlocks);        //on donne une nouvelle position a la pomme\n            }\n            while(this.applee.isOnSnake(this.snakee))     //on vérifie si position est sur le serpent snakee tant que la nouvelle position sera sur le snakee\n            \n            if(this.score % 5 == 0)\n            {\n                this.speedUp();      //si score à 5 alors execute la fonction speedup = franchi pallier de 5 points\n            }\n        }\n        this.ctx.clearRect(0,0,this.canvasWidth, this.canvasHeight);       //efface le contenu du canvas\n        _drawing_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawScore(this.ctx, this.centreX, this.centreY, this.score);        //dessine le score\n        _drawing_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawSnake(this.ctx, this.blockSize, this.snakee);      //dessine le serpent\n        _drawing_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].drawApple(this.ctx, this.blockSize, this.applee);      //dessine la pomme\n        this.timeout = setTimeout(this.refreshCanvas.bind(this), this.delay);     //exécute la fonction à chaque fois que delay de 100ms soit passé pour dessiner plusieurs fois le canvas\n        }                                              //grâce à cette fonction que va se rafraichir le canvas ce qui donne l'impression de mouvement\n    }\n\n    speedUp()\n    {\n        this.delay /= 2;     //divise le délai par 2 (nouvelle assignation de delay)   \n    }\n    \n}\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\n\nwindow.onload = () =>    //se lance lorsque fenêtre s'affiche\n{ \n    \ndocument.onkeydown = (e) =>   //change position en fonction de ce que l'utilisateur à taper sur le clavier \n{                                                  //on lui donne un nom à la fonction et on va lui donner l'evenement cad que chaque evenement le transmettre à la fonction\n    const key = e.keyCode;    //donne le code de la touche qui a été appuyé\n    let newDirection;\n    switch(key)\n    {\n        case 37:    //flèche gauche\n            newDirection = \"left\"\n            break;\n        case 38:\n            newDirection = \"up\"\n            break;\n        case 39:\n            newDirection = \"right\"\n            break;\n        case 40:\n            newDirection = \"down\"\n            break;\n        case 32:\n            myGame.launch();\n            //myGame2.launch();\n            return;\n        default:\n            return;\n    }\n    myGame.snakee.setDirection(newDirection);      //appelle la nouvelle direction\n    //myGame2.snakee.setDirection(newDirection);\n};\n\nlet myGame = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();        //on créer le jeu avant de l'initialiser\nmyGame.init();                  //init est une méthode de la classe Game\n\n//let myGame2 = new Game();        //on créer un 2eme jeu avant de l'initialiser\n//myGame2.init();                  //init est une méthode de la classe Game\n}\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ }),

/***/ "./src/snake.js":
/*!**********************!*\
  !*** ./src/snake.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Snake; });\nclass Snake\n{\n    constructor(direction, ...body)        //prototype du serpent => constructeur\n    {\n        this.body = body;       //corps du serpent égal body fournit à la fonction constructor\n        this.direction = direction;\n        this.ateApple = false;\n    }\n    \n    advance()       //fait avancer le serpent\n    {\n        const nextPosition = this.body[0].slice();        //nouvelle position de la tête, on copie l'element [6,4] avec slice\n        switch(this.direction)      //switch qui va analyser notre direction\n        {\n            case \"left\":\n                nextPosition[0] -=1;\n                break;\n            case \"right\":\n                nextPosition[0] +=1;        //fait avancer de 1 selon l'axe des x\n                break;                \n            case \"down\":\n                nextPosition[1] +=1;\n                break;\n            case \"up\":\n                nextPosition[1] -=1;\n                break;\n            default:\n                throw (\"Invalid Direction\");\n        }\n\n        this.body.unshift(nextPosition);        //rajoute un block à la tete du serpent\n        if(!this.ateApple)      //si le serpent ne mange pas la pomme\n        this.body.pop();        //enlève dernier block du serpent\n        else\n            this.ateApple = false;      //rajoute juste un block une fois la pomme mangé\n    };\n    setDirection(newDirection)      //passe la direction au serpent\n    {\n        let allowedDirections;      //les directions permises\n        switch(this.direction)\n        {\n            case \"left\":\n            case \"right\":\n                allowedDirections = [\"up\", \"down\"];    \n                break;                \n            case \"down\":\n            case \"up\":\n                allowedDirections = [\"left\", \"right\"];                 \n                break;\n            default:\n                throw (\"Invalid Direction\");\n        }\n    if(allowedDirections.includes(newDirection))        //si allowedDirection sup ou = à - ca veut dire direction permise\n    {\n        this.direction = newDirection; \n    }                             \n    };\n    checkCollision(widthInBlocks, heightInBlocks)        //vérifie si serpent sort du contexte ou passe sur son propre corps\n{\n        let wallCollision = false;      //initialise à faux\n        let snakeCollision = false;     //initialise à faux\n        \n        const [head, ...rest] = this.body;\n        //const head = this.body[0];        //verifie la tete du serpent\n        //const rest = this.body.slice(1);      //reste du corps du serpent mis de côté, est un array\n        const [snakeX,snakeY] = head;\n        //const snakeX = head[0];       // x de la tete\n        //const snakeY = head[1];       // y de la tete\n        const minX = 0;       //initialise à 0\n        const minY = 0;       //initialise à 0\n        const maxX = widthInBlocks -1;        //nombre de blocks -1\n        const maxY = heightInBlocks -1;       //nombre de blocks -1\n        const isNotBetweenHorizontalWalls = snakeX < minX || snakeX > maxX      //bolleen        //verifie si la tete entre les murs horizontales gauche ou droite\n        const isNotBetweenVerticalWalls = snakeY < minY || snakeY > maxY      //verifie si la tete entre les murs verticales haut ou bas\n\n    if(isNotBetweenHorizontalWalls || isNotBetweenVerticalWalls)\n    {\n        wallCollision = true;       //il y a collision de mur\n    }\n\n    for(let block of rest)       //verifie si serpent passe sur son propre corps\n    {\n        if (snakeX === block[0] && snakeY === block[1] ) \n        {\n        snakeCollision = true;      //il y a collision de serpent\n        }\n    }\n\n    return snakeCollision || wallCollision;     //retourne le resultat\n\n    };\n    isEatingApple(appleToEat)       //savoir si le serpent mange la pomme\n    {\n        const head = this.body[0];        //verifie si la tete egale au corps à la place 0\n        if(head[0] === appleToEat.position[0] && head[1] === appleToEat.position[1])        //x et y du head egale a appletoeat  // verifie si la tete est egale a position de la pomme\n            return true;        //on peut ne pas mettre les crochets si qu'une seule ligne\n        else\n            return false;\n    }; \n}\n\n\n//# sourceURL=webpack:///./src/snake.js?");

/***/ })

/******/ });