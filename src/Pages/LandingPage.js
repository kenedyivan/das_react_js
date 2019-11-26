import React, {Component} from 'react';
import '../App.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import {Link} from "react-router-dom";
import CusNavBar from "../Components/CusNavBar";

class LandingPage extends Component {

    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>

                <CusNavBar/>

                <Jumbotron>
                    <h1>Welcome!</h1>
                    <p>
                        Get to know Ugandan districts and sub-counties
                    </p>
                    <p>
                        <Link to={'/districts/1/sub-counties'} variant="primary" className='btn btn-primary'>Demo</Link>
                    </p>
                </Jumbotron>

            </div>
        );
    }
}

export default LandingPage;
