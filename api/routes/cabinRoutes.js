import express from 'express';
import * as cabinController from '../controllers/cabinController.js';
import cabinValidation from '../validation/cabinValidation.js';

const router = express.Router();

router.get('/', cabinController.getCabins);

router.post('/', cabinValidation, cabinController.createCabin);

router.delete('/:id', cabinController.deleteCabin);

export default router;
