const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');


module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
 
    const id = generateUniqueId();
 
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
    //console.log(data); // Apenas para mostrar o log no terminal
 
    return response.json({ id });
    }
}