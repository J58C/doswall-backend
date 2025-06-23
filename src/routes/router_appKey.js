import express from 'express';
import * as authController from '../controllers/authController.js';
import * as passwordController from '../controllers/passwordController.js';

const router_appKey = express.Router();

router_appKey.post('/appkey/login', authController.login)
router_appKey.post('/appkey/getsessiontoken', authController.getSessionToken)
router_appKey.post('/appkey/checktokenstatus', authController.checkTokenStatus)

router_appKey.post('/appkey/password/verify-pin/:id', passwordController.verifyAndUpdatePassword)
router_appKey.post('/appkey/password/mailpw', passwordController.mailPW)





export default router_appKey