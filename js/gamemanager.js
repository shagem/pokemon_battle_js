let GameManager = {

    setGameStart: function(starterPokemon) {
        this.resetPlayer(starterPokemon);
        this.setPreFight();
    },
    //Applies stats to chosen pokemon and creates search interface
    resetPlayer: function(starterPokemon) {
        switch (starterPokemon) {
        case "Bulbasaur":
                player = new Player(starterPokemon, '48', '50', '20', '40', '');
            break;
        case "Charmander":
                player = new Player(starterPokemon, '38', '55', '16', '44', '');
            break;
        case "Squirtle":
                player = new Player(starterPokemon, '38', '48', '26', '50', '');
            break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="imgs/starters_img/' + starterPokemon.toLowerCase() + '.jpeg"><div><h3>' + starterPokemon + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Attack: ' + player.attack + '</p><p>Stamina: ' + player.stamina + '</p><p>Speed: ' + player.speed + '</p></div>';
    },
    //Creates header and search button
    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        getActions.style.display = 'block';
        getHeader.innerHTML = '<h3>Task: Find an enemy Pokemon to battle!</h3>';
        getActions.innerHTML = '<a href="#" onclick="GameManager.setFight()">Search for an enemy!</a>';
    },
    // Creates enemy and sets battle stage
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        getEnemy.style.display = 'block';
        let enemy00 = new Enemy("Magikarp", "20", "10", "10", "80");
        let enemy01 = new Enemy("Pidgey", "35", "45", "25", "56");
        let enemy02 = new Enemy("Sandshrew", "50", "30", "20", "30");
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;
            case 2:
                enemy = enemy02;
                break;
        }
        getHeader.innerHTML = '<h3>Task: Battle!</h3>';
        getActions.innerHTML = '<a href="#" onclick="PlayerMoves.calcAttack()">Attack Enemy!</a>'
        getEnemy.innerHTML = '<img src="imgs/enemies_img/' + enemy.enemyPokemon.toLowerCase() + '.jpeg"' + enemy.enemyPokemon + '"><div><h3>' + enemy.enemyPokemon + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Attack: ' + enemy.attack + '</p><p>Stamina: ' + enemy.stamina + '</p><p>Speed: ' + enemy.speed + '</p></div>';
    }

}