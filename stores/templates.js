import db from '../lib/db'

const templates = db.chain.get('templates')

export const getAll = () => templates.value()

export const getById = (id) => {
    const data = templates.find({id}).value()

    return data ? data : null
}