import { Header } from './components/header'

export function App() {
  return (
    <div className='min-h-screen flex flex-col gap-4'>
      <Header />
      <main className=' max-w-5xl w-full mx-auto px-5'>
        <div className='flex gap-3'>
          <button className='bg-blue-400 text-white rounded-2xl px-4 font-medium cursor-pointer hover:bg-blue-700 transition-colors'>
            Buscar
          </button>
        </div>
        <div className='flex mt-10 gap-10'>
          <img src='' alt='' className='w-full h-96 object-cover rounded-lg ' />
          <div className='flex flex-col gap-10'>
            <h2 className='text-3xl font-bold '>O senhor dos aneis</h2>
            <p className='text-zinc-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              eius maiores magnam explicabo libero dolorum omnis dignissimos, ab
              ratione asperiores! Vero tempora expedita corrupti? Beatae aliquid
              aspernatur expedita illum ut!
            </p>
            <p className='bg-blue-700 text-white w-fit px-3 rounded-3xl'>
              Data de lançamento : 2023
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
