import { useState } from 'react'
import { Header } from './components/header'

import ErrorIMG from '../src/imagens/ErrorIMG.png'

const apiKey = import.meta.env.VITE_API_KEY_TMDB
const baseUrl = 'https://api.themoviedb.org/3/movie/popular'
const imageURL = 'https://image.tmdb.org/t/p/w500/'

type MovieProps = {
  id: number
  title: string
  overview: string
  poster_path: string
  release_date: string
}

export function App() {
  const [movie, setMovie] = useState<MovieProps>({} as MovieProps)
  const id = Math.floor(Math.random() * 10) + 1

  async function handlegetMovie() {
    const response = await fetch(
      `${baseUrl}?api_key=${apiKey}&language=pt-BR&page=${id}`
    )
    const data = await response.json()

    const movies: MovieProps[] = data.results
    const randomMovie = movies[Math.floor(Math.random() * movies.length)]

    setMovie(randomMovie)
  }

  return (
    <div className='min-h-screen flex flex-col gap-4'>
      <Header />
      <main className=' max-w-5xl w-full mx-auto px-5'>
        <div className='flex gap-3'>
          <button
            onClick={handlegetMovie}
            className='bg-blue-400 text-white rounded-2xl px-4 font-medium cursor-pointer hover:bg-blue-700 transition-colors'
          >
            Buscar
          </button>
        </div>
        {movie.id ? (
          <div className='flex mt-10 gap-10 md:flex-row flex-col'>
            <img
              src={imageURL + movie.poster_path}
              alt='imagen de capa do filme'
              className='w-80 h-96  rounded-lg '
            />
            <div className='flex flex-col gap-10'>
              <h2 className='text-3xl font-bold '>{movie.title}</h2>
              <p className='text-zinc-800'>{movie.overview}</p>
              <p className='bg-blue-700 text-white w-fit px-3 rounded-3xl'>
                Data de lançamento : {movie.release_date}
              </p>
            </div>
          </div>
        ) : (
          <div>
            <img
              className='w-80 h-96  rounded-lg mt-5 '
              src={ErrorIMG}
              alt=''
            />
          </div>
        )}
      </main>
    </div>
  )
}
