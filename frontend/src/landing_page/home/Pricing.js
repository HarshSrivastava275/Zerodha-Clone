import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='fs-2'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount and price transparency in India. Flat fees and no hidden charges.</p>
                    <a className='mt-2' href='#' style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right" aria-hidden="false"></i></a>
                </div>
                <div className='col-2'></div>
                <div className='col-6'>
                    <div className='d-flex'>
                    <div className='col-5 border border-secondary' >
                        <div className='mt-5 mb-4 text-center'>
                         <h2>&#8377;0</h2>
                         <p className='mt-2'>Free equity delivery and
                             dorect mutual funds</p>
                         </div>
                    </div>
                    <div className='col-5 border border-secondary'>
                    <div className='mt-5 text-center'>
                         <h2>&#8377;20</h2>
                         <p className='mt-2'>Intraday and F&O</p>
                         </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;