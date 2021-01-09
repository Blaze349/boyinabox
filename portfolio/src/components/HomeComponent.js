import React from 'react' 
import '../index.css'

class HomeComponent extends React.Component {

    render() {
        return (
            <div>
                <svg width="225" height="217" viewBox="0 0 225 217" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 35.0265L113.849 6L220 35.0265V167.46L113.849 211L5 167.46V35.0265Z" fill="#5740E0"/>
                    <path d="M5 35.0265L113.849 6L220 35.0265V167.46L113.849 211L5 167.46V35.0265Z" fill="url(#paint0_linear)"/>
                    <path d="M5 35.0265L113.849 6L220 35.0265M5 35.0265V167.46L113.849 211M5 35.0265L113.849 62.6925L220 35.0265M113.849 211L220 167.46V35.0265M113.849 211V72.2168" stroke="white" stroke-width="10"/>
                    <defs>
                        <linearGradient id="paint0_linear" x1="112.5" y1="6" x2="112.5" y2="211" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#69A5FF"/>
                            <stop offset="1" stop-color="white" stop-opacity="0"/>
                        </linearGradient>
                    </defs>
                </svg>

                <h1 className="fnt-postjaffna has-text-centered is-4rem"> BOY BREAKS BOX </h1>
            </div>

        )
    }
}

export default HomeComponent
