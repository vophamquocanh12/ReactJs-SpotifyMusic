import React, { useContext } from 'react';
import { Songs } from '../Context';

export default function DetailSong() {

    const { song } = useContext(Songs)
    return (
        <div className='col-span-1 p-3'>
            <h2 className='text-gray-600 font-bold'>Now playing</h2>
            <h2 className='text-slate-300'>{song.name}</h2>

            <div className='w-[160px] m-auto mt-10'>
                <img
                    className='w-full'
                    src={song.links.images[0].url}
                    alt='avatar'
                />
            </div>
            <div className='flex justify-center items-center m-2'>
                <img
                    className='w-[50px] rounded-full'
                    src={song.links.images[1].url}
                    alt='avatar'
                />
                <span className='text-xl text-white'>{song.author}</span>
            </div>
        </div>
    );
}
