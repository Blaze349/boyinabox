import React from 'react' 
import '../index.css'
import pic from '../images/pokemon game.png'
import { Link } from 'react-router-dom';

class ContactComponent extends React.Component {

    render() {
        return (
            <div className="container">
                <section className="hero is-fullheight">
                    <div className="hero-body has-text-centered">
                        <div className="container">

                            <div className="columns is-vcentered mt-3 mb-6">

                                <div className="column">

                                    <figure className="image mx-4">
                                        <img src={pic}/>
                                    </figure>
                                </div>

                                <div className="column">
                                    <h1 className="fnt-postjaffna has-text-centered mt-3 is-size-2 is-size-3-mobile">Pokemon: Thunder and Lightning </h1>

                                    <h3 className="fnt-jetbrains has-text-centered mt-5 is-size-6">
                                        Pokemon Fan Game coded in C++ using SFML with a bunch of friends
                                    </h3>

                                </div>
                            </div>


                            <div className="container">
                                <svg width="221" height="8" viewBox="0 0 221 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="221" height="4" rx="4" fill="#FFD875"/>
                                </svg>

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

export default ContactComponent
