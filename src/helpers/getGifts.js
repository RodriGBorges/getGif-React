export const getGifs = async (category) => {

    try {
        const apiKey = "LW4ClBerndcomn8ovkeRGA0K16oNAs3Y";

        const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`

        const response = await fetch(url);

        const {data} = await response.json();

        const gifs = data.map(img => (
            {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        ))

        return gifs


    } catch (error) {
        console.log(error)
        return []
    }
}