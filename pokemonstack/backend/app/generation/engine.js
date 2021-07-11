const Generation = require('./index');

class GenerationEngine {
  constructor() {
    this.generation = null;
    this.timer = null;
  }

  start() {
    this.buildNewGeneration();
  }

  stop() {
    clearTimeout(this.timer);
  }

  buildNewGeneration() {
    this.generation = new Generation();

    console.log('new generation', this.generation);
    let num = this.generation.expiration.getTime() - Date.now();

    this.timer = setTimeout(() => this.buildNewGeneration(), num);
  }
}

module.exports = GenerationEngine;
