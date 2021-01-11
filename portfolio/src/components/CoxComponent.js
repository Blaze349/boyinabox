import React from 'react' 
import '../index.css'
import pic from '../images/cox code.png'
import { Link } from 'react-router-dom';

class CoxComponent extends React.Component {

    render() {
        return (
            <div className="container">
                <section className="hero is-fullheight">
                    <div className="hero-body has-text-centered">
                        <div className="container">
                        <div className="columns is-vcentered mt-3 mb-6">

                            
                            <div className="column">
                                <h1 className="fnt-postjaffna has-text-centered mt-6 is-size-1 is-size-2-mobile">Cox Code</h1>

                                <h3 className="fnt-jetbrains has-text-centered mt-5 is-size-6">
                                    My web design and development agency
                                </h3>

                            </div>
                            <div className="column">

                                <figure className="image mx-4">
                                    <img src={pic}/>
                                </figure>
                            </div>

                        </div>
                        <div className="container">
                            <div className='mt-6'>
                            <svg width="221" height="8" viewBox="0 0 221 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="221" height="4" rx="4" fill="#7DFFB1"/>
                            </svg>
                            </div>

                        </div>

                        <Link to="/">
                            <h3 className="fnt-jetbrains has-text-centered mt-5 mb-6 is-size-6"> BACK </h3>
                        </Link>
                    </div>
                </div>
            </section>
            </div>

        )
    }
}

export default CoxComponent
