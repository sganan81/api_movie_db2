const { Router } = require('express');
const { getPersonas, postPersonas } = require('../controllers/personas');

const router = Router();

router.get('/', getPersonas)

router.post('/:id', postPersonas)

module.exports = router;