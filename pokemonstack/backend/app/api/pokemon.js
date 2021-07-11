const { Router } = require('express');

const router = new Router();

router.get('/new', (req, res) => {
  res.json({ pokemon: req.app.locals.engine.generation.newPokemon() });
});

module.exports = router;
