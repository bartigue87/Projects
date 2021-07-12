const pool = require('../../databasePool');

class PokemonTable {
  static storePokemon(pokemon) {
    const { catchdate, nickname, generationId } = pokemon;
    const int_generationId = pokemon.generationId.generationId;

    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO pokemon(catchdate, nickname, "generationId")
      VALUES($1, $2, $3) RETURNING id`,
        [catchdate, nickname, int_generationId],
        (error, response) => {
          if (error) return reject(error);

          const pokemonId = response.rows[0].id;

          resolve({ pokemonId });
        }
      );
    });
  }
}

module.exports = PokemonTable;
