import path from 'path'
import fs from 'fs'

export const lire = async () => {

    const livedesc =  await fs.createReadStream(new Buffer('./coran.json'))
    const  liv = await livedesc.open()
    return (liv)
}