/**
 * Rules API.
 * GET /api/pokedex
 * GET /api/pokedex/pokemon/:id
 */

const _ = require('lodash');
const pokedex = require('./pokedex');

module.exports = function showsRouter(app) {
  app.get('/api/pokedex', (req, res) => {
    console.info('GET /api/shows');
    return res.status(200).json(pokedex);
  });

  app.get('/api/pokedex/pokemon/:id', (req, res) => {
    console.info(`GET /api/pokedex/pokemon/${req.params.id}`);

    const paramId = Number(req.params.id);
    console.log(pokedex.pokemon_entries[0])
    const pokemon = _.find(pokedex.pokemon_entries, r => r.entry_number === paramId);

    if (!pokemon) {
      return res.status(404).send();
    }
    return res.status(200).json(pokemon);
  });

};