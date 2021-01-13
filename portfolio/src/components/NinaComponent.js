import React from 'react' 
import '../index.css'
import pic from '../images/nina.jpg'
import { Link } from 'react-router-dom';

class NinaComponent extends React.Component {

    render() {
        return (
            <div className="container">
                <section className="hero is-fullheight">
                    <div className="hero-body has-text-centered">
                        <div className="container">

                            <div className="columns is-vcentered">

                                <div className="column">
                                    <h1 className="fnt-postjaffna has-text-centered mt-6 is-size-1 is-size-2-mobile">Georgia </h1>
                            <h3 className="fnt-jetbrains has-text-centered mt-5 mb-6 is-size-6"> A prototype music service coded in Node.JS, React, MySQL and Swift

</h3>
                            <h3 className="fnt-jetbrains has-text-centered mt-5 mb-6 is-size-6"> 

                                Coming 2021
                            </h3>
                                </div>
                                <div className="column">
                                    <figure className="image px-6 mx-6">
                                        <img src={pic}/>
                                    </figure>
                                </div>
                            </div>


                            <div className="container">
                                <svg width="221" height="8" viewBox="0 0 221 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="221" height="4" rx="4" fill="#FF6D6D"/>
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

export default NinaComponent
