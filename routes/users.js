const usersRouter = require('express').Router();

const { getUsers, createUser, getSpecificUser } = require('../controllers/users');

usersRouter.get('/', getUsers);
usersRouter.post('/', createUser);
usersRouter.get('/:id', getSpecificUser);

module.exports = usersRouter;
