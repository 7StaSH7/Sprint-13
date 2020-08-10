const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка при получении пользователей - ${err.message}` }));
};

module.exports.createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(400).send({ message: `Произошла ошибка при создании пользователя - ${err.message}` }));
};

module.exports.getSpecificUser = (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then((user) => (user === null ? res.status(404).send({ message: `Пользователь с таким id: ${req.params.id} не найден!` }) : res.send({ data: user })))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка при удалении карточки - ${err.message}` }));
};

module.exports.updateInfo = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.user._id, { name, about })
    .then((user) => (user === null ? res.status(404).send({ message: `Пользователь с таким id: ${req.params.id} не найден!` }) : res.send({ data: user })))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка при обновлении информации - ${err.message}` }));
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.user._id, { avatar })
    .then((user) => (user === null ? res.status(404).send({ message: `Пользователь с таким id: ${req.params.id} не найден!` }) : res.send({ data: user })))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка при обновлении информации - ${err.message}` }));
};
