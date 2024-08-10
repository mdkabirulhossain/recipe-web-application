import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div>
            <p className='text-2xl m-2'>This page cant not be found....</p>
            <Link href={'/'}><button type="button" className='m-2 bg-orange-500 rounded p-2'>Back to Home page</button></Link>
            
        </div>
    );
};

export default NotFound;