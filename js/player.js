
let player;

function Player(starterPokemon, health, attack, stamina, speed, special) {
    this.starterPokemon = starterPokemon;
    this.health = health;
    this.attack = attack;
    this.stamina = stamina;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function() {
    //Calculates who attacks first
    let getPlayerSpeed = player.speed;
    let getEnemySpeed = enemy.speed;

    //Player attacks
    let playerAttack = function() {
        let calcBaseDamage;
        let offsetDamage;
        let calcOutputDamage;
        calcBaseDamage = player.attack * player.stamina / 1000;
        offsetDamage = Math.floor(Math.random() * Math.floor(10));
        calcOutputDamage = calcBaseDamage + offsetDamage;
        //Number of hits
        let numberOfHits = Math.floor(Math.random() * Math.floor(player.speed / 10) / 2) + 1;
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
        }
    //Enemy attacks
    let enemyAttack = function() {
        let calcBaseDamage;
        let offsetDamage;
        let calcOutputDamage;
        calcBaseDamage = enemy.attack * enemy.stamina / 1000;
        offsetDamage = Math.floor(Math.random() * Math.floor(10));
        calcOutputDamage = calcBaseDamage + offsetDamage;
        //Number of hits
        let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.speed / 10) / 2) + 1;
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
        }
    //Gets Player/Enemy Health
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");
    //Initiate attacks
    if (getPlayerSpeed >= getEnemySpeed) {
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        alert("Your Pokemon hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times!");
        if (enemy.health <= 0) {
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            getEnemyHealth.innerHTML = 'Health: 0';
            alert("You won the battle!  Please refresh the browser to play again.")
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                //Enemy attacks back
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("The enemy Pokemon hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times!");
                if (player.health <= 0) {
                    getPlayerHealth.innerHTML = 'Health: 0';
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                    alert("You lost the battle!  Please refresh the browser to play again.")
                } else {
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                }
            }
        } else if (getEnemySpeed >= getPlayerSpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("The enemy Pokemon hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times!");
            if (player.health <= 0) {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                getPlayerHealth.innerHTML = 'Health: 0';
                alert("You lost the battle!  Please refresh the browser to play again.")
                } else {
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                    //Player attacks back
                    let playerAttackValues = playerAttack();
                    let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                    enemy.health = enemy.health - totalDamage;
                    alert("Your Pokemon hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times!");
                    if (enemy.health <= 0) {
                        getEnemyHealth.innerHTML = 'Health: 0';
                        getPlayerHealth.innerHTML = 'Health: ' + player.health;
                        alert("You won the battle!  Please refresh the browser to play again.")
                    } else {
                        getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                    }
                }
            }
    }
}

