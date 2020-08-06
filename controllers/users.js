const User = require('../models/user');

module.exports.getUsers = (req, res) => {
  User.find({})
    .then((users) => (users === null ? res.status(404).send({ message: 'В базе данных пока нет пользователей' }) : res.send({ data: users })))
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
    .then((user) => (user === null ? res.status(404).send({ message: `Пользователь с таким id: ${req.params.id} не найден!` }) : res.send({ data: user })))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка при удалении карточки - ${err}` }));
};

module.exports.updateInfo = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.params.id, { name, about })
    .then((user) => (user === null ? res.status(404).send({ message: `Пользователь с таким id: ${req.params.id} не найден!` }) : res.send({ data: user })))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка при обновлении информации - ${err}` }));
};

module.exports.updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.params.id, { avatar })
    .then((user) => (user === null ? res.status(404).send({ message: `Пользователь с таким id: ${req.params.id} не найден!` }) : res.send({ data: user })))
    .catch((err) => res.status(500).send({ message: `Произошла ошибка при обновлении информации - ${err}` }));
};
