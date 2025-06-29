import React from 'react';

function RightSection({imageURL, productName, productDescription, learnMore}) {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-5 mt-5 p-5'>
                <h2 className='text-muted'  style={{ marginTop: "120px" }}>{productName}</h2>
                <p className='text-muted'>{productDescription}</p>
                <a href={learnMore}> Learn More → </a>
                </div>
                <div className='col-6 p-3 mb-5'>
                    <img src={imageURL} style={{width:"95%"}}/>
                </div>
                <div className='col-1'></div>
            </div>
        </div>
     );
}

export default RightSection;