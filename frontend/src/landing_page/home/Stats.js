import React from 'react';

function Stats() {
    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-6'>
                    <h1>Trust with confidence</h1>
                    <h3 className='mt-5'>Customer-first always</h3>
                    <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with &#8377;3.5+
                        lakh crores worth of equity investments.
                    </p>
                    <h3 className='mt-4'>No spam or gimmicks</h3>
                    <p className='text-muted'>No gimmicks spam, "gamification", or annoying push notifications. 
                        High quality apps that you use at your pace, the way you like.
                    </p>
                    <h3 className='mt-5'>The Zerodha Universe</h3>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 
                        30+ fintech startups offer you tailored services specific to your needs.
                    </p>
                    <h3 className='mt-5'>Do better with money</h3>
                    <p className='text-muted'>with initiatives like Nudge and Kill Switch , we don't just facilitate transactions, but actively help you 
                        do better with your money. 
                    </p>
                </div>
                <div className='col-6 '>
                    <img src='/media/images/ecosystem.png' style={{width:"85%"}}/>
                    <a className='mx-5' style={{textDecoration: "none"}} href=''>Exlpore our products <i class="fa-solid fa-arrow-right" aria-hidden="false"></i></a>
                    <a className='' style={{textDecoration: "none"}} href=''>Try kite </a>
                </div>
            </div>
        </div>
    );
}

export default Stats;