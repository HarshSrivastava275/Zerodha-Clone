import React from 'react';

function Team() {
    return ( 
        <div className='container mt-5 p-5'>
            <div className='row'>
                <h2 className='text-center p-1 mb-5 ms-5'>People</h2>
                <div className='col-6 text-center mt-5'>
                    <img src='/media/images/nithinKamath.jpg' className='img-fluid rounded-circle ms-4' style={{ width: "40%"}}/>
                    <h5 className='mt-3'>Nithin Kamath</h5>
                    <p className='mt-2'>Founder, CEO</p>
                </div>
                <div className='col-6 mx-auto text-start mt-5' style={{ maxWidth: "80%", fontSize:"18px" }}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

<p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

<p>Playing basketball is his zen.</p>

<p>Connect on <a href='#' style={{textDecoration:"none"}}>Homepage</a> /<a href='#' style={{textDecoration:"none"}}> TradingQnA</a> /<a href='#' style={{textDecoration:"none"}}> Twitter</a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;