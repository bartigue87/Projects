class Player {
  constructor(name, totalCoins, status, hasStar, gameActive) {
    this.name = name;
    this.totalCoins = totalCoins;
    this.status = status;
    this.hasStar = hasStar;
    this.gameActive = gameActive;
  }
  setName(namePicked) {
    this.name = namePicked;
  }
  gotHit(status, gameActive) {
    if (status === 'Powered Up') {
      this.status = 'Big';
    } else if (status === 'Big') {
      this.status = 'Small';
    } else {
      this.status = 'Dead';
      this.gameActive = false;
    }
    return this.gameActive;
  }
  gotPowerUp(status, hasStar) {
    if (status === 'Powered Up') {
      this.status = 'Powered Up';
      this.hasStar = true;
    } else if (status === 'Big') {
      this.status = 'Powered Up';
    } else this.status = 'Big';
  }
  addCoin() {
    this.totalCoins++;
  }
  print() {
    console.log(`Name: ${this.name}
                   Status: ${this.status}
                   Total Coins: ${this.totalCoins}
                   Has Star: ${this.hasStar}
                   Game Active: ${this.gameActive}`);
  }
}

const mario = new Player('Mario', 0, 'Big', false, true);

function randRange() {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) {
    mario.gotHit();
    mario.print();
  } else if (num === 1) {
    mario.gotPowerUp();
    mario.print();
  } else {
    mario.addCoin();
    mario.print();
  }
}
let intervalId = setInterval(randRange, 1000);
if (mario.gameActive === false) {
  clearInterval(intervalId);
}
