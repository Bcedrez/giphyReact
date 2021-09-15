import getGifs from '../../helpers/getGifs'

describe('Pruebas en getGifs Fetch',()=>{
    
    test('Debe devolver 10 imagenes',async ()=>{

        const gifs = await getGifs('saludos');

        expect(gifs.length).toBe(10);


    })


})