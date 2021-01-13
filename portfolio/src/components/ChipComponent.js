import React from 'react' 


import '../index.css'
import pic from '../images/pokemon game.png'
import { Link } from 'react-router-dom';

class ChipComponent extends React.Component {

    render() {
        return (
            <div className="container">
                <section className="hero is-fullheight">
                    <div className="hero-body has-text-centered">
                        <div className="container">

                            <div className="columns is-vcentered mt-3 mb-6 pb-6">

                                <div className="column pb-6">
                                    <h1 className="fnt-postjaffna has-text-centered mt-6 is-size-1 is-size-2-mobile">Bliss OS </h1>

                                <h3 className="fnt-jetbrains has-text-centered mt-5 is-size-6">
                                    Arch Linux Distribution in alpha - Beta Release 2021 
                                    </h3>

                                </div>

                                <div className="column pb-6">
                                    <h1 className="fnt-postjaffna has-text-centered mt-6 is-size-1 is-size-2-mobile">Chip-8 Emulator </h1>

                                    <h3 className="fnt-jetbrains has-text-centered mt-5 is-size-6">
                                        Coded in C++ - <a href="https://github.com/Blaze349/ubiquitous-octo-spoon" target="_blank" rel="noopener noreferrer"> Download Here </a>
                                    </h3>

                                </div>
                            </div>

                            <div className="container">
                                <svg width="221" height="8" viewBox="0 0 221 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="221" height="4" rx="4" fill="#69A5FF"/>
                                </svg>

                            </div>

                            <Link to="/">
                                <h3 className="fnt-jetbrains has-text-centered mt-5 is-size-6"> BACK </h3>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}

export default ChipComponent
