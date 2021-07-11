const TRAITS = require('../data/traits');

const DEFAULT_PROPERTIES = {
  nickname: 'unnamed',
  get catchDate() {
    return new Date();
  },
  get randomTraits() {
    const traits = [];

    TRAITS.forEach((TRAIT) => {
      const traitType = TRAIT.type;
      const traitValues = TRAIT.values;

      const traitValue =
        traitValues[Math.floor(Math.random() * traitValues.length)];
      traits.push({ traitType, traitValue });
    });
    return traits;
  },
};

class Pokemon {
  constructor({ catchDate, nickname, traits } = {}) {
    this.catchDate = catchDate || DEFAULT_PROPERTIES.catchDate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
  }
}

module.exports = Pokemon;
