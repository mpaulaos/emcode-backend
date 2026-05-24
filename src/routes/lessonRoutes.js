const express = require('express');
const router = express.Router();

const timeLog = (req, res, next) => {
    console.log('Time: ', Date.now())
    next()
}
router.use(timeLog)

const lessons = [
    { id: 1, lessonName: 'Primera', type: 'Lección', status: 'completed' },
    { id: 2, lessonName: 'Segunda', type: 'Lección', status: 'finished' },
    { id: 3, lessonName: 'Tercera', type: 'Lección', status: 'finished' },
    { id: 4, lessonName: 'Cuarta', type: 'Lección', status: 'in-progress' },
    { id: 5, lessonName: 'Quinta', type: 'Laboratorio', status: 'not-started' }
]

router.get('/lessons', (req, res) => {
    res.json(lessons)
});

module.exports = router;