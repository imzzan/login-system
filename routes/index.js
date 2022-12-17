import express from 'express';
import { getUsers, Register, login, Logout } from '../controlers/Users.js';
import { verifyToken } from '../midleware/VeryfyToken.js';
import { refreshToken } from '../controlers/RefreshToken.js';

const router = express();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

export default router