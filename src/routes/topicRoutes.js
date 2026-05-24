const express = require('express');
const router = express.Router();

const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
}
router.use(timeLog)

const topics = [
    { id: 1, topicName: "Variables y Tipos de Datos" },
    { id: 2, topicName: "Operadores Aritméticos y Lógicos" },
    { id: 3, topicName: "Estructuras Condicionales (if/else)" },
    { id: 4, topicName: "Switch y Control de Flujo" },
    { id: 5, topicName: "Bucles (for, while, do-while)" },
    { id: 6, topicName: "Funciones y Parámetros" },
    { id: 7, topicName: "Arrays y Listas" },
    { id: 8, topicName: "Strings y Manipulación de Texto" },
    { id: 9, topicName: "Objetos y Estructuras de Datos" },
    { id: 10, topicName: "Métodos de Array (map, filter, reduce)" },
    { id: 11, topicName: "Recursión" },
    { id: 12, topicName: "Ordenamiento (Bubble Sort, Quick Sort)" },
    { id: 13, topicName: "Búsqueda (Búsqueda Lineal, Binaria)" },
    { id: 14, topicName: "Manejo de Errores (try/catch)" },
    { id: 15, topicName: "Programación Orientada a Objetos" },
    { id: 16, topicName: "Clases y Herencia" },
    { id: 17, topicName: "Introducción a la Complejidad Algorítmica" },
    { id: 18, topicName: "Lectura y Escritura de Archivos" },
    { id: 19, topicName: "Conceptos Básicos de Debugging" },
    { id: 20, topicName: "Pilas (Stacks) y Colas (Queues)" }
];

router.get('/topics', (req, res) => {
    res.json(topics)
});


router.get('/topics/:id', (req, res) => {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({ message: 'ID debe ser un número entero positivo' })
    }

    const topic = topics.find(t => t.id === parseInt(req.params.id));
    if (!topic) {
        return res.status(404).json({ message: 'Tema no encontrado' })
    }
    res.json(topic)
});

module.exports = router;


