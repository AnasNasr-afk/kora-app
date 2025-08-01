import { Router } from 'express';
import { createCurt, updateCourt } from './../controllers/court.controller';
import {
  createCurtValidation,
  updateCurtValidation,
} from './../validations/court.validation';
import {
  authorize,
  adminAuthorization,
} from './../middlewares/auth.middleware';
const router = Router();

router.post(
  '/',
  authorize,
  adminAuthorization,
  createCurtValidation,
  createCurt
);

router.patch(
  '/:id',
  authorize,
  adminAuthorization,
  updateCurtValidation,
  updateCourt
);

export default router;
