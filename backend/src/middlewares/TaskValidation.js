const TaskModel = require('../model/TaskModel');
const { isPast } = require('date-fns')

const TaskValidation = async (req, res, next) => {
    const { macaddress, type, title, description, when } = req.body;

    if (!macaddress)
        return res.status(400).json({ error: 'Macaddress é obrigatório!' })
    else if (!type)
        return res.status(400).json({ error: 'Tipo é obrigatório!' })
    else if (!title)
        return res.status(400).json({ error: 'Título é obrigatório!' })
    else if (!description)
        return res.status(400).json({ error: 'Descrição é Obrigatório!' })
    else if (!when)
        return res.status(400).json({ error: 'Data e Hora é Obrigatório!' })
  
    else {
        let exists;

        if (req.params.id) {
            exists = await TaskModel.
                findOne(
                    {
                        '_id': { '$ne': req.params.id },
                        'when': { '$eq': new Date(when) },
                        'macaddress': { '$in': macaddress }
                    })
        } else {

            if (isPast(new Date(when)))
            return res.status(400).json({ error: 'Escolha uma data e Hora Futura!' })

            exists = await TaskModel.
                findOne(
                    {
                        'when': { '$eq': new Date(when) },
                        'macaddress': { '$in': macaddress }
                    })
        }


        if (exists) {
            return res.status(400).json({ error: 'Já existe uma Tarefa neste dia e Horário para seu Dispositivo!' })
        }
        next()
    }


}

module.exports = TaskValidation;