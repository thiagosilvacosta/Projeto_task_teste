const TaskModel = require('../model/TaskModel');
const {isPast} = require('date-fns')

const TaskValidation = async (req, res, next) => {
    const { macaddress, type, title, description, when } = req.body;

    if(!macaddress)
        return res.status(400).json({error: 'Macaddress é obrigatório!'})
    else if(!type)
        return res.send(400).json({error: 'Tipo é obrigatório!'})
    else if(!title)
        return res.send(400).json({error: 'Título é obrigatório!'})
    else if(!description)
        return res.send(400).json({error: 'Descrição é Obrigatório!'})
    else if(!when)
        return res.send(400).json({error: 'Data e Hora é Obrigatório!'})
    else if(isPast(new Date(when)))
        return res.send(400).json({error: 'Escolha uma data e Hora Futura!'})
    else
        next()
}

module.exports = TaskValidation;