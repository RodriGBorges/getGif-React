export const getGifts = async (category) => {

    try {
        const apiKey = "LW4ClBerndcomn8ovkeRGA0K16oNAs3Y";

        const url = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&q=${category}&limit=10&rating=g`

        const response = await fetch(url);

        const {data} = await response.json();

        const gifts = data.map(img => (
            {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        ))

        return gifts


    } catch (error) {
        console.log(error)
        return []
    }
}