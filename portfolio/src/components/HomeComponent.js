import React from 'react' 
import '../index.css'
import { Link } from 'react-router-dom';

class HomeComponent extends React.Component {

    render() {
        return (
            <div className="container">
                <section className="hero is-fullheight">
                    <div className="hero-body has-text-centered">
                        <div className="container">
                            <div className="box no-shadow no-border mt-3">
                                <div className="container pt-6 mt-6">
                                    <svg width="178" height="172" viewBox="0 0 178 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 28.6549L90.0544 6L173 28.6549V132.018L90.0544 166L5 132.018V28.6549Z" fill="#5740E0"/>
                                        <path d="M5 28.6549L90.0544 6L173 28.6549V132.018L90.0544 166L5 132.018V28.6549Z" fill="url(#paint0_linear)"/>
                                        <path d="M5 28.6549L90.0544 6L173 28.6549M5 28.6549V132.018L90.0544 166M5 28.6549L90.0544 50.2478M90.0544 166L173 132.018V28.6549M90.0544 166V50.2478M173 28.6549L90.0544 50.2478" stroke="white" strokeWidth="10"/>
                                        <defs>
                                            <linearGradient id="paint0_linear" x1="89" y1="6" x2="89" y2="166" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#69A5FF"/>
                                                <stop offset="1" stopColor="white" stopOpacity="0"/>
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                </div>

                                <h1 className="fnt-postjaffna has-text-centered mt-3 is-4rem is-size-2-mobile"> BOY BREAKS BOX </h1>

                                <a href="mailto:ebenezerajaero@gmail.com">
                                <h3 className="fnt-jetbrains has-text-centered mb-6 is-size-6"> contact me </h3>
                                </a>
                                <div className="has-text-centered pt-5 mt-6">
                                    <Link className="mx-5" to="/georgia">
                                        <svg className="inner" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle r="18.5" transform="matrix(1 0 0 -1 18.5 18.5)" fill="#FF6D6D"/>
                                        </svg>
                                    </Link>
                                    <Link className="mx-5" to="/pokemon">
                                        <svg className="inner" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle r="18.5" transform="matrix(1 0 0 -1 18.5 18.5)" fill="#FFD875"/>
</svg>
                                    </Link>
                                    <Link className="mx-5" to="/chip">
                                        <svg className="inner" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle r="18.5" transform="matrix(1 0 0 -1 18.5 18.5)" fill="#6DA8FF"/>
</svg>
                                    
                                    </Link>
                                    <Link className="mx-5" to="/ethan">
                                        <svg className="inner" width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse rx="19" ry="18.5" transform="matrix(1 0 0 -1 19 18.5)" fill="#936DFF"/>
</svg>

                                   
                                    </Link>
                                    <Link className="mx-5" to="/cox">
                                        <svg className="inner" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle r="18.5" transform="matrix(1 0 0 -1 18.5 18.5)" fill="#7DFFB1"/>
</svg>
                                    </Link>


                                </div>

                                <h3 className="fnt-jetbrains has-text-centered mt-6 mb-6 is-size-6"> PRESS TO PLAY </h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default HomeComponent
