import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5 '>
            <div className='row'>
                <div className='col-6 float-start mt-n3'>
                    <img src='/media/images/education.svg' style={{width:"80%"}}></img>
                </div>
                <div className='col-6'>
                    <h1 className='fs-2'>Free and open market education</h1>
                    <div>
                    <p className='mt-2'>Varsity, the largest online stock market education book in the world covering everything
                         from the basics to advanced trading</p>

                         <a className='mt-2' href='#' style={{textDecoration:"none"}}>Versity <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className='mt-5'>
                    <p className='mt-2'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>

                         <a className='mt-2' href='#' style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right" aria-hidden="false"></i> </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Education;