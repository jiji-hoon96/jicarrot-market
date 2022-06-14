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
      <div className='bg-white p-10 rounded-2xl'>
        <div className="flex justify-between">
          <span className='text-3xl'>⬅️ </span>
          <div>
            <span className='text-2xl mr-1'>
            ⭐️
            </span>
            <span className='text-2xl mr-5'>
              4.9
            </span>
            <span className='text-3xl'>
            💖
            </span>
          </div>
        </div>
        <img src="https://mdbootstrap.com/img/new/slides/041.jpg" className="mt-5 h-auto rounded-3xl" alt="..." />
        <div className='flex flex-col m-2'>
          <span className='text-xl font-bold'>
            풍경 이미지
          </span >
          <span className="text-gray-400">
            Sell
          </span>
        </div>
        <div className='flex m-2 justify-between items-center'>
          <div className='flex'>
            <div className='w-6 h-6 border-2 border-rose-600 rounded-full flex items-center justify-center mr-3'>
              <div className='bg-red-500 w-4 h-4 rounded-full'></div>
            </div>
            <div className='w-6 h-6 border-2 border-green-600 rounded-full flex items-center justify-center mr-3'>
              <div className='bg-green-500 w-4 h-4 rounded-full'></div>
            </div>
            <div className='w-6 h-6 border-2 border-blue-600 rounded-full flex items-center justify-center mr-3'>
              <div className='bg-blue-500 w-4 h-4 rounded-full'></div>
            </div>
          </div>
          <div>
            <button className='w-10 h-10 bg-blue-200 p-2 rounded-lg'>-</button>
            <span className="mx-2 font-bold text-xl"> 1 </span>
            <button className='w-10 h-10 bg-blue-200 p-2 rounded-lg'>+</button>
          </div>
         
        </div>
        <div className='flex justify-between p-2'>
          <span className='text-3xl font-extrabold'>$450</span>
          <button className='w-44 h-10 bg-blue-500 text-white rounded-lg'>Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home
