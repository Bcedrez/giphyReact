

export const getGift = async (categoria)=>{

        

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=LXzpoEuFM4tTEgmSa1xpRqxNbI4XTFQ6`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img =>{

        return {
            id : img.id,
            titulo: img.title,
            url: img.images.downsized_medium.url
        }
        
    })

    return gifs;
}