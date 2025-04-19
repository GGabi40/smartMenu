import User from '../models/User.js';
import bcrypt from 'bcrypt';

// registro de usuario
export const registerUser = async (req, res) => {
    const { nombre, email, password, rol } = req.body;

    try {
        // verifica si existe
        const existingUser = await User.findOne({ where: { email } });

        if(existingUser) {
            return res.status(400).json({ message: 'El email ya está registrado.' });
        }

        // hashear clave
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crea un nuevo usuario
        const newUser = await User.create({
            nombre,
            email,
            password: hashedPassword,
            rol
        });

        res.status(201).json({ message: 'Usuario registrado con exito.', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al registrar usuario', error });
    }
};