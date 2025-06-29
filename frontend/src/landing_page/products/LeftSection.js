import React from 'react';

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container p-5'>
            <div className='row'>
                <div className='col-1'></div>
                <div className='col-6 p-3 mb-5 p-5'>
                    <img src={imageURL} style={{width:"95%"}}/>
                </div>
                <div className='col-5 mt-5 p-5'>
                    <h2 className='text-muted'>{productName}</h2>
                    <p className='text-muted'>{productDescription}</p>
                    <div className='p-4'>
                    <a href={tryDemo}>Try Demo → </a>
                    <a href={learnMore} style={{marginLeft: "50px"}}>Learn More → </a>
                    </div>
                    <div className='mb-5'>
                    <a href={googlePlay}><img src='/media/images/googlePlayBadge.svg'/></a>
                    <a href={appStore} style={{marginLeft: "50px"}}><img src='/media/images/appstoreBadge.svg'/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;