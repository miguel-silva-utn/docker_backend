const User = require('./user');

// Obtener todos los usuarios
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
    const user = new User({
        dni: req.body.dni,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        correo: req.body.correo,
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Obtener un usuario por su DNI
exports.getUserByDNI = async (req, res) => {
    try {
        const user = await User.findOne({ dni: req.params.dni });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Actualizar un usuario por su DNI
exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findOneAndUpdate(
            { dni: req.params.dni },
            {
                $set: {
                    dni: req.body.dni,
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    correo: req.body.correo,
                },
            },
            { new: true }
        );
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Eliminar un usuario por su DNI
exports.deleteUser = async (req, res) => {
    try {
        await User.findOneAndRemove({ dni: req.params.dni });
        res.json({ message: 'Usuario eliminado' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
