import React from 'react';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category)

  return (
    <>
    <h3>{category}</h3>
    {loading && <p>Loading</p> &&
    <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    }
    <div className='card-grid'>

        {
            images.map(image => (
                <GifItem
                    key= {image.id}
                    {...image}
                />
            ))
        }

    </div>
    </>
  );
}
