import * as React from 'react'

export default function Banner() {
    return(
        <div className='cma-banner-wrapper' style={{width: '100vw', backgroundColor: 'black', margin: 'auto'}}>
            <div className='cma-banner' style={{display: 'flex', justifyContent: 'center'}}>
                <h2 className='cma-banner-txt-1'>Accept the Challenge, Stay Motivated, Achieve, Set Goals and more...a healthier life overall.</h2>
                <h2 className="cma-banner-txt-2">-Chanda Akles</h2>
            </div>
        </div>
    )
}