import express from 'express';
import { 
    registerUser,
    loginUser
} from '../controller/userController.js';

const router = express.Router();

// registra usuario
router.post('/register', registerUser);

// login
router.post('/login', loginUser);

export default router;