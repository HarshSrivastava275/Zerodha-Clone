import React from 'react';

function Universe() {
    return (
        <div className='container mt-5 text-center p-5'>
            <div className='row'>
                <h1>The Zerodha Universe</h1>
                <h5 className='mt-3'>Extend your trading and investment experience even further with our partner platforms</h5>

                <div className='col-4 p-3 mt-5'>
                    <img src='/media/images/zerodhaFundhouse.png' style={{ width: "50%", display: "block", margin: "auto" }} />
                    <p className='text-center mt-4 text-muted' style={{ width: "80%", fontSize: "14px", lineHeight: "1.5", margin: "auto" }}>Our asset management venture
                        that is creating simple and transparent index
                        funds to help you save for your goals.
                    </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='/media/images/sensibullLogo.svg' style={{ width: "50%", display: "block", margin: "auto" }} />
                    <p className='text-center mt-4 text-muted' style={{ width: "80%", fontSize: "14px", lineHeight: "1.5", margin: "auto" }}>Options trading platform that lets you
                        create strategies, analyze positions, and examine
                        data points like open interest, FII/DII, and more.

                    </p>
                </div>
                <div className='col-4 p-3 mt-5 mb-5'>
                    <img src='/media/images/tijori.svg' style={{ width: "50%", display: "block", margin: "auto" }} />
                    <p className='text-center mt-4 text-muted' style={{ width: "80%", fontSize: "14px", lineHeight: "1.5", margin: "auto" }}>Investment research platform
                        that offers detailed insights on stocks,
                        sectors, supply chains, and more.

                    </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='/media/images/streakLogo.png' style={{ width: "50%", display: "block", margin: "auto" }} />
                    <p className='text-center mt-4 text-muted' style={{ width: "80%", fontSize: "14px", lineHeight: "1.5", margin: "auto" }}>Systematic trading platform
                        that allows you to create and backtest
                        strategies without coding.
                    </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='/media/images/smallcaseLogo.png' style={{ width: "50%", display: "block", margin: "auto" }} />
                    <p className='text-center mt-4 text-muted' style={{ width: "80%", fontSize: "14px", lineHeight: "1.5", margin: "auto" }}>Thematic investing platform
                        that helps you invest in diversified
                        baskets of stocks on ETFs.
                    </p>
                </div>
                <div className='col-4 p-3 mt-5 mb-5'>
                    <img src='/media/images/dittoLogo.png' style={{ width: "50%", display: "block", margin: "auto" }} />
                    <p className='text-center mt-4 text-muted' style={{ width: "80%", fontSize: "14px", lineHeight: "1.5", margin: "auto" }}>Personalized advice on life
                        and health insurance. No spam
                        and no mis-selling.

                    </p>
                </div>

                <button className='p-1 btn btn-primary fs-5 mb-5 mt-5' style={{width:"15%", margin: "0 auto"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Universe;