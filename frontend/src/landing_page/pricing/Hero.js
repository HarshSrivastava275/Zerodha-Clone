import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
             <div className='row p-5 mt-5 text-center mb-5'>
                <h1>Charges</h1>
                <h3 className='text-muted fs-4 mt-3'>List of all charges and taxes</h3>
             </div> 
             <div className='row p-5 mt-5 '>
                <div className='col-4 text-center'>
                    <img src='/media/images/pricing0.svg' style={{width:"70%"}}/>
                    <h2 className='text-muted mt-3'>Free equity delivery</h2>
                    <p className='text-muted mt-4' style={{ width: "90%", fontSize: "17px", lineHeight: "1.5", margin: "auto" }}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img src='/media/images/intradayTrades.svg' style={{width:"70%"}}/>
                    <h2 className='text-muted mt-3'>Intraday and F&O trades</h2>
                    <p className='text-muted mt-4' style={{ width: "90%", fontSize: "17px", lineHeight: "1.5", margin: "auto" }}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4'>
                     <img src='/media/images/pricing0.svg' style={{width:"70%"}}/>
                    <h2 className='text-muted mt-3'>Free direct MF</h2>
                    <p className='text-muted mt-4' style={{ width: "90%", fontSize: "17px", lineHeight: "1.5", margin: "auto" }}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
             </div>   
        </div>
     );
}

export default Hero;