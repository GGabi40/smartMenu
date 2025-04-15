import Order from '../models/Order.js';

// Crea un nuevo pedido
export const createOrder = async (req, res) => {
    try {
        const { cliente, mesa, detalle, estado } = req.body;

        const newOrder = await Order.create({ cliente, mesa, detalle, estado });

        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el pedido', error });
    }
};

// Obtener todos los pedidos
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.json(orders);

    } catch (error) {
        res.status(500).json({ message: 'Error al obtener pedidos', error })
    }
};

// Obtener pedido específico
export const getOrderById = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await Order.findByPk(id);

        if (!order) {
            return res.status(404).json({ message: `No se encontró el pedido con ID ${id}` });
        }

        res.json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener el pedido', error });
    }
};


// Eliminar pedido por su ID
export const deleteOrder = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await Order.destroy( { where: { id } });

        if (!deleted) {
            return res.status(404).json({ message: `No se encontró el pedido con ID ${id}` });
        }

        res.json({  message: `Pedido con ID ${id} eliminado correctamente` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el pedido', error });
    }
};


// Modificacion de pedido por ID
export const updateOrder = async (req, res) => {
    const { id } = req.params;
    const { cliente, mesa, detalle, estado } = req.body;

    try {
        const order = await Order.findByPk(id);

        if (!order) {
            return res.status(404).json({ message: `No se encontró el pedido con ID ${id}` });
        }

        order.cliente = cliente ?? order.cliente; // notacion: coalescencia nula
        order.mesa = mesa ?? order.mesa; // si mesa no es nulo ni undefined, entonces 
        // order.mesa agarra el valor de mesa
        order.detalle = detalle ?? order.detalle;
        order.estado = estado ?? order.estado;

        await order.save();

        res.json({ message: 'Pedido actualizado correctamente', data: order });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al actualizar el pedido', error });
    }
};
