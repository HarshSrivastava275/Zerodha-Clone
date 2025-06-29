import React from 'react';

function CreateTicket() {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <h4 className='text-muted p-5'style={{ marginRight: "20px" }}>To create a ticket, select a relevant topic</h4>
                <div className='col-4 mb-5'>
                    <a href='#' style={{ textDecoration: "none", color:"black" }}><h5><i class="fa-solid fa-circle-plus"></i> Account Opening</h5></a><br />
                    <a href='#' style={{ textDecoration: "none", }}>Resident individual</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Minor</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Non Resident Indian (NRI)</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Company, Partnership, HUF and LLP</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Glossary</a>
                </div>
                <div className='col-4 mb-5'>
                    <a href='#' style={{ textDecoration: "none", color:"black" }}><h5><i class="fa-solid fa-circle-user"></i> Your Zerodha Account</h5></a><br />
                    <a href='#' style={{ textDecoration: "none", }}>Your Profile</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Account modification</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Client Master Report (CMR) and Depository Participant (DP)</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Nomination</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Transfer and conversion of securities</a>
                </div>
                <div className='col-4 mb-5'>
                    <a href='#' style={{ textDecoration: "none",color:"black"  }}><h5><i class="fa-solid fa-chart-simple"></i> Kite</h5></a><br />
                    <a href='#' style={{ textDecoration: "none", }}>IPO</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Trading FAQs</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Margin Trading Facility (MTF) and Margins</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Charts and orders</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Alerts and Nudges</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>General</a>
                </div>

                 
                <div className='col-4 p-5'>
                    <a href='#' style={{ textDecoration: "none", color:"black" }}><h5><i class="fa-solid fa-briefcase"></i> Funds</h5></a><br />
                    <a href='#' style={{ textDecoration: "none", }}>Add money</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Withdraw money</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Add bank accounts</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>eMandates</a>
                     
                </div>
                <div className='col-4 p-5'>
                    <a href='#' style={{ textDecoration: "none", color:"black" }}><h5><i class="fa-regular fa-circle"></i> Console</h5></a><br />
                    <a href='#' style={{ textDecoration: "none", }}>Portfolio</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Corporate actions</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Funds statement</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Reports</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Profile</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Segments</a>
                </div>
                <div className='col-4 p-5'>
                    <a href='#' style={{ textDecoration: "none",color:"black"  }}><h5><i class="fa-solid fa-circle-notch"></i> Coin</h5></a><br />
                    <a href='#' style={{ textDecoration: "none", }}>Understanding mutual funds and Coin</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Coin app</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Coin web</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>Transactions and reports</a>
                    <br /><br />
                    <a href='#' style={{ textDecoration: "none", }}>National Pension Scheme (NPS)</a>
                     
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;