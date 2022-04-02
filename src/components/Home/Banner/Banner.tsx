import * as React from 'react'

export default function Banner() {
    return(
        <div className='cma-banner-wrapper' style={{width: '100vw', height:'15vh', backgroundColor: 'black', margin: 'auto'}}>
            <div className='cma-banner' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', flexDirection: 'column', textAlign: 'center', margin: '1rem'}}>
                <h2 className='cma-banner-txt-1' style={{fontSize: '1rem', fontWeight: 'lighter'}}>Accept the Challenge, Stay Motivated, Achieve, Set Goals and more...a healthier life overall.</h2>
                <h2 className="cma-banner-txt-2" style={{fontSize: '1rem', fontWeight: 'lighter'}}>- Chanda Akles</h2>
            </div>
        </div>
    )
}