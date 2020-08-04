const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(res.status(500).send({ message: 'Произошла ошибка при получении пользователей' }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка при создании пользователя - ${err}` }));
};

module.exports.getSpecificUser = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => res.send({ data: user }))
    .catch(() => res.status(500).send({ message: 'Произошла ошибка при удалении карточки' }));
};
