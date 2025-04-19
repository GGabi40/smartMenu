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

// login de usuario

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        
        if (!user) {
            return res.status(401).json({ message: 'Usuario no encontrado.' });
        }

        // compara contrasenas
        const passwordMatch = await bcrypt.compare(password, user.password);
        
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        // Si todo va bien, se devuelven los datos del usuario
        const userData = {
            id: user.id,
            nombre: user.nombre,
            email: user.email,
            rol: user.rol
        };

        res.status(200).json({ message: 'Login exitoso.', user: userData });
    } catch (error) {
        res.status(500).json({ message: 'Error al iniciar sesión.', error });
    }
};