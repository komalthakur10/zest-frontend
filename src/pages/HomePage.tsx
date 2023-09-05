import React, { FC } from 'react'
import Card from '../Components/Card/Card'

interface CardProps {
  id: number;
  name: string;
  availability: number,
  price: number
}
const data: Array<CardProps> = [
  {
    id: 1,
    name: "Fresh Pear - Indian",
    availability: 4,
    price: 40
  },
  {
    id: 2,
    name: "Fresh Apple - Indian",
    availability: 40,
    price: 140
  },
  {
    id: 3,
    name: "Fresh Mango - Indian",
    availability: 10,
    price: 40
  },
  {
    id: 4,
    name: "Fresh Orange - Indian",
    availability: 6,
    price: 90
  },
  {
    id: 5,
    name: "Fresh Kiwi - Indian",
    availability: 12,
    price: 120
  }
]

const HomePage: React.FC = () => {
  return (
    <div className='w-full h-full min-h-screen home'>
      <section className='max-w-screen-2xl mx-auto'>
        <section className='banner-search w-full mt-4 relative flex flex-row justify-center items-center'>
          <img className='w-full h-full m-auto' src="/assets/images/homePage.svg" alt='home' />
          <div className='text-6xl text-[#1F2937] font-bold absolute top-52'>Fresh Food that deserve to eat</div>
          <div className='absolute text-xl text-[#1F2937]'>Get your healthy foods & snacks delivered at your doorsteps all day everyday</div>
          <div className='flex flex-row absolute w-[40%] bottom-52 p-2 bg-white rounded-md shadow-md border-1 border-[#1F2937]'>
            <img className='mx-3' src="/assets/icons/search-icon.svg" alt='search' height={20} width={20} />
            <input type='text' className='m-auto w-[100%] border-0 outline-none' placeholder='Search Vegetables and Fruits' />
            <button className='px-5 py-2 bg-[#4DBD7A] text-white rounded-lg'>Search</button>
          </div>
        </section>

        <section className='fresh-products mt-14 grid grid-cols-3 grid-rows-auto justify-items-center'>
          <img src='/assets/images/FruitCard1.svg' alt='fruit1' />
          <img src='/assets/images/FruitCard2.svg' alt='fruit1' />
          <img src='/assets/images/FruitCard3.svg' alt='fruit1' />
        </section>

        <section className='fruit-list px-10 mt-10'>
          <div className=''>
            <p className='text-2xl font-semibold my-4'>Fresh Fruits</p>
          </div>
          <div className='grid grid-cols-5 grid-rows-auto gap-8'>
            {
              data.map((cardData: CardProps) => {
                return (
                  <Card key={cardData.id} cardData={cardData} />
                )
              })
            }
          </div>
        </section>

        <section className='vegetable-list px-10 mt-10'>
          <div className=''>
            <p className='text-2xl font-semibold my-4'>Fresh Vegetables</p>
          </div>
          <div className='grid grid-cols-5 grid-rows-auto gap-8'>
            {
              data.map((cardData: CardProps) => {
                return (
                  <Card key={cardData.id} cardData={cardData} />
                )
              })
            }
          </div>
        </section>

        <section className='discount-banner px-10 mt-10'>
          <img src='/assets/images/vegBanner.svg' alt='vegBanner' />
        </section>

        <section className='discount-list px-6'>
          <div className='mt-10 grid grid-cols-6 gap-6 grid-rows-auto justify-items-center'>
            <img src='/assets/images/vcard1.svg' alt='vcard1' />
            <img src='/assets/images/vcard2.svg' alt='vcard2' />
            <img src='/assets/images/vcard3.svg' alt='vcard3' />
            <img src='/assets/images/vcard4.svg' alt='vcard4' />
            <img src='/assets/images/vcard4.svg' alt='vcard4' />
            <img src='/assets/images/vcard2.svg' alt='vcard2' />
          </div>

          <div className='mt-10 grid grid-cols-6 gap-6 grid-rows-auto justify-items-center'>
            <img src='/assets/images/vcard1.svg' alt='vcard1' />
            <img src='/assets/images/vcard2.svg' alt='vcard2' />
            <img src='/assets/images/vcard3.svg' alt='vcard3' />
            <img src='/assets/images/vcard4.svg' alt='vcard4' />
            <img src='/assets/images/vcard4.svg' alt='vcard4' />
            <img src='/assets/images/vcard2.svg' alt='vcard2' />
          </div>
        </section>

        <section className='how-works mt-20 px-10'>
          <h1 className='text-4xl text-center font-bold text-[#1F2937]'>How It Works</h1>
          <div className='grid grid-cols-3 gap-12 mt-16'>
            <div className='flex justify-center items-center flex-col border-2 border-gray-300 rounded-xl p-10 gap-3'>
              <img src='/assets/images/clip1.svg' alt='clip1' height={80} width={80} />
              <p className='text-xl font-semibold'>Order Packed</p>
              <p className='text-[#747875] text-center'>Your order will be packed safely and transferred to warehouse</p>
            </div>
            <div className='flex justify-center items-center flex-col border-2 border-gray-300 rounded-xl p-10 gap-3'>
              <img src='/assets/images/clip2.svg' alt='clip1' height={80} width={80} />
              <p className='text-xl font-semibold'> Over to the Carrier</p>
              <p className='text-[#747875] text-center'>The order will be picked from the warehouse and out for delivery</p>
            </div>
            <div className='flex justify-center items-center flex-col border-2 border-gray-300 rounded-xl p-10 gap-3'>
              <img src='/assets/images/clip3.svg' alt='clip1' height={80} width={80} />
              <p className='text-xl font-semibold'>Out for delivery</p>
              <p className='text-[#747875] text-center'>The order will be carefully delivered at your doorstep</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default HomePage