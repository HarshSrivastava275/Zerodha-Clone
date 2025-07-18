import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-8 p-4'>
                    <a href='' style={{textDecoration:"none"}}><h3 className='fs-5' style={{ marginLeft: "170px" }}>Brokerage calculator</h3></a>
                    <ul className="text-sm">
                        <li className='mt-3'>
                           Call & Trade and RMS auto-squareoff: Additional charges of 50+GST per order.
                        </li>
                        <li className='mt-3'>
                           Digital contract notes will be sent via e-mail
                        </li>
                        <li className='mt-3'>
                           Physical copies of contract notes, if required, shall be charged 20 per contract note. Courier charges apply.
                        </li>
                        <li className='mt-3'>
                           For NRI account (non- PIS), 0.5% or 100 per executed order for equity (whichever is lower).
                        </li>
                        <li className='mt-3'>
                           For NRI account (PIS), 0.5% or 100 per executed order for equity (whichever is lower).
                        </li>
                        <li className='mt-3'>
                           If the account is in debit balance , any order placed will be charged 40 per executed order instead of 20 per executed order.
                        </li>
                    </ul>
                </div>
                <div className='col-4'>
                    <a href='' style={{textDecoration:"none"}}><h3 className='fs-5'>List of charges</h3></a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;