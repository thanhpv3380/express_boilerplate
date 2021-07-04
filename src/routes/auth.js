const router = require('express').Router();
const asyncMiddleware = require('../middlewares/async');
const { auth } = require('../middlewares/auth');
const { loginValidate, registerValidate } = require('../validations/auth');
const authController = require('../controllers/auth');

/**
 * @swagger
 * /auths/register:
 *   post:
 *     description: Register
 *     tags:
 *      - auth
 *     requestBody:
 *        description: information login
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *     responses:
 *       200:
 *         description: Returns a user information register.
 */
router.post(
  '/auths/register',
  registerValidate,
  asyncMiddleware(authController.register),
);

/**
 * @openapi
 * /auths/login:
 *  post:
 *    description: Login
 *    tags:
 *      - auth
 *    requestBody:
 *      description: information login
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      200:
 *        description: Returns a access token and user information.
 */
router.post(
  '/auths/login',
  loginValidate,
  asyncMiddleware(authController.login),
);

/**
 *  @swagger
 *  /auths/verify:
 *  get:
 *    description: Verify Token
 *    tags:
 *      - auth
 *    security:
 *      - bearerAuth: []
 *    responses:
 *      200:
 *        description: Returns a user information.
 */
router.get(
  '/auths/verify',
  auth,
  asyncMiddleware(authController.verifyAccessToken),
);

module.exports = router;
