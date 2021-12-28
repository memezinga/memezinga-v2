import { join } from 'path'
import { LowSync, JSONFileSync } from 'lowdb'
import lodash from 'lodash'

// Use JSON file for storage
const file = join(process.cwd(), 'data', 'db.json')
const db = new LowSync(new JSONFileSync(file))
db.read()
if(!db.data){
    db.data = {memes: [], templates: []}
    db.write()
}

// Note: db.data needs to be initialized before lodash.chain is called.
db.chain = lodash.chain(db.data)

export default db