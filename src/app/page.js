import React from 'react';
import img from '../../public/recipe-application.jpg';
import Image from 'next/image';
import Link from 'next/link';
const Home = () => {
  return (
    <div>
      <h1 className='text-center font-extrabold text-4xl text-orange-500 m-4'>Welcome to our Recipe Application</h1>
      <p className='text-center font-bold text-xl m-2'><Link href={'/recipe-list'}>Click here and explore Recipes</Link></p>
      <Image
        src={img}
        alt='Home page image'
        className='w-full'
      />
    </div>
  );
};

export default Home;