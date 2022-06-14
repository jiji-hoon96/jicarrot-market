import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <div className='bg-slate-400 py-20 px-10 grid gap-10'>
      <div className='bg-white p-10 rounded-2xl'>
        <span className='font-semibold text-3xl'>Select Item</span>
        <div className='flex justify-between my-2'>
          <span className='text-gray-500'>Grey Chair</span>
          <span className='font-semibold'>$19</span>
        </div>
        <div className='flex justify-between my-2'>
          <span className='text-gray-500'>Tooly Table</span>
          <span className='font-semibold'>$80</span>
        </div>
        <div className='flex justify-between mt-2 pt-2 border-t-2 border-dashed'>
          <span>Total</span>
          <span className='font-semibold'>$99</span>
        </div>
        <div className='mt-5 bg-blue-500 text-white p-3 text-center rounded-xl w-2/4 mx-auto'>CheckOut</div>
      </div>
      <div className='bg-blue-500  rounded-2xl'>
        <div className='flex justify-between  rounded-2xl h-24 items-center p-5 text-white'>
          <span className='text-2xl'>Profile</span>
          <span className='text-2xl font-thin'>카트</span>
        </div>
        <div className='flex justify-between bg-white rounded-t-3xl'>
          <div className='flex flex-col p-5 items-center'>
            <span className='text-slate-400 '>Orders</span> 
            <span className='font-semibold'>340</span>
          </div>
          <div className='h-24 w-24 bg-red-500 rounded-full relative bottom-10'/>
          <div className='flex flex-col p-5 items-center'>
            <span className='text-slate-400'>Spent</span> 
            <span className='font-semibold'>$2310</span>
          </div>
        </div>
        <div className='bg-white rounded-b-2xl flex justify-center flex-col items-center  pb-6'>
          <span className='font-semibold text-2xl'>Tony Molloy</span>
          <span className='text-slate-400'>New York, USA</span>
        </div>
      </div>
      <div className='bg-white p-10 rounded-2xl'></div>
      <div className='bg-white p-10 rounded-2xl'></div>
    </div>
  )
}

export default Home
